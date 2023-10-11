import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createOrder, getProductByName, createReview, getReviews } from "../../redux/actions/action";
import style from "./detail_campain.module.css";
import { addToCart } from "../../redux/actions/action";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../context/AuthContext";

import Loader from "../loader/loader";
export const DetailProduct = () => {
    const detailProduct = useSelector((state) => state.detailProduct);
    const auth = useAuth();
    const dispatch = useDispatch();
    const { name } = useParams();
    const [loading, setLoading] = useState(true);
    const [isReviewPopupOpen, setReviewPopupOpen] = useState(false);
    const [reviews, setReviews] = useState([]);
    
    // const displayName = auth.user.displayName;
    // const firstName = displayName.split(' ')[0];
    console.log("auth: ", auth.user.email)


      const [reviewCreated, setReviewCreated] = useState(false);
        
      useEffect(() => {
        const fetchData = async () => {
            await dispatch(getProductByName(name));
            setLoading(false);
        };
        fetchData();
    }, [name]);

    let product = detailProduct[0];

    console.log("product: ", product)

    const [form, setForm] = useState({    
        email: auth.user.email,
        ProductId: product.id,
        rating: 0,
        comment: "",
        // dateReview: new Date().toISOString(),
      });
    const [error, setError] = useState({
        email: auth.user.email,
        ProductId: product.id,
        rating: 0,
        comment: "",
        // dateReview: "",
      });

      console.log("form", form)
    const hancleAddtoCart = ()=>{
        const quantityToadd = 1
        dispatch(addToCart(product, quantityToadd))
      }

      const changeHandler = (event) => { //esta funcion actualiza el estado del formulario conel nuevo valor ingresado en los campos inputs
        const property = event.target.name; //inputs
        const value = event.target.value; //valor ingresado
        setForm({ ...form, [property]: value });
        //llama a la funcion para validar los campos actualizados en tiempo real
        validate({ ...form, [property]: value }, property);
      }; 

        const validate = (form) => {

        const patternNombre = /^[A-Za-z\s]+$/;
        const patternNumeros = /^[0-9]+$/;
        const newError = { ...error }; // copia del estado de error existente
      
        if (!patternNombre.test(form.nombre) || !form.nombre) {
          newError.nombre = "Ingrese solo letras A-Z";
        } else {
          newError.nombre = "";
        }
      
        if (!patternNumeros.test(form.rating) || !form.rating) {
          newError.rating = "Debe ingresar solo Numeros";
        } else {
          newError.rating = "";
        }

        if (!patternNombre.test(form.comment) || !form.comment) {
            newError.comment = "Ingrese solo letras A-Z";
          } else {
            newError.comment = "";
          }
  
        setError(newError); // Actualiza el estado de error
      };


      const disable = () => { //para verificar si se deshabilita el boton submit, iterando las props del objeto error
        let auxDisabled = true; //si la variable es true se deshabilita, si es false se habilita
        for (let err in error){
          if(error[err] === "") auxDisabled = false;
          else{ 
          auxDisabled = true //cualquier input q este con error, es true y se deshabilita
          break;
         }
        }
        return auxDisabled;
      }

      useEffect(()=>{
        dispatch(getReviews())
    },[dispatch])

    console.log("getReviews: ", getReviews)

    const handleSubmit=(detailProduct)=>{
        // console.log(detailProduct)
        dispatch(createOrder(detailProduct))
    }

    const openReviewPopup = () => {
        setReviewPopupOpen(true);
      };
      
      const closeReviewPopup = () => {
        setReviewPopupOpen(false);
      };

      const submitReview = async (event) => {
        try {
            const response = await axios.post("http://localhost:3001/review/create", form);
            //los datos del formulario los paso en formData (incluido los temperamentos en forma de cadena "hola, perro, paz")
            const newReview = response.data;
            setReviews([...reviews, newReview]);
            
            dispatch(createReview(response.data));
            //actualiza el estado global de la aplicación con el nuevo perro
            setReviewCreated(true); 
            // actualiza el estado cuando se crea el perro con exito
            alert("Review creada con éxito!!!");
          } catch (error) {
            alert(error.response.data.error);
            //con este alert muestro los errores del back
          } if(reviewCreated === false){
            event.preventDefault()
          }

        closeReviewPopup();
        };
      
        // console.log("reviews: ", reviews)
    return (
        <div className={style.conteiner}>
            {loading ? (
                // Muestra "Cargando..." durante 1 segundo
                <div className={style.loader}>
                    <Loader/>
                    <h1>Cargando...</h1>
                </div>
            ) : (
                product && (
                    <div>
                    <div className={style.productCont}>
                        <div className={style.imgCont}>
                            <img src={product?.image} alt="" />
                        </div>
                        <div className={`${style.column} ${style.infoProduct}`}>
                            <p>Stock: {product?.stock}</p>
                            <h1>{product?.name}</h1>
                            <p>{product?.description}</p>
                            <div className={style.price}>
                                <p>$ {product?.price}</p>
                            </div>
                            <div className={style.buyCont}>
                            <button className={style.btnBuy} onClick={() => handleSubmit(detailProduct)}>Comprar</button>

                                <button className={style.btnAddToCart} onClick={hancleAddtoCart}>Agregar al carrito</button>
                            </div>
                        </div>
                    </div>
                        <div className={style.reviewsCont}>
                            <div className={style.contTitulos}>
                            <h2 className={style.tituloReviews}>Product Reviews</h2>
                            <button className={style.añadir} onClick={openReviewPopup}>Añadir review</button>
                            </div>
                            {isReviewPopupOpen && (
                            <div className={style.modalBackground}>
                                <div className={style.reviewPopup}>
                                {/* Contenido del popup aquí */}
                                <h2 className={style.queOpinas}>¿Que opinas sobre este producto?</h2>
                                <div className={style.imgReviewCont} >
                                <img className={style.imgReview} src={product?.image} alt="" />
                                </div>
                                <div className={style.areaNombres}>
                                <input className={style.nombreRev} type="text" value={form.nombre} onChange={changeHandler} name="nombre" placeholder="Nombre de Usuario" />
                                <input className={style.puntajeRev} type="number" value={form.rating} onChange={changeHandler} name="rating" min="0" max="5" placeholder="Puntaje (0-5)" />
                                </div>
                                <textarea className={style.escribirRev} type="text" value={form.comment} onChange={changeHandler} name="comment" placeholder="Escribe tu opinión" />
                                <div className={style.botonesReview}>
                                <button disabled={disable() || reviewCreated} className={style.enviar} onClick={submitReview} type="submit">Enviar</button>
                                <button className={style.cancelar} onClick={closeReviewPopup}>Cancelar</button>
                                </div>
                                </div>
                            </div>
                            )}
                            <div className={style.rev2}>
                            {/* {form?.map((form, index) => ( */}
                                    <div className={style.review}>
                                        {/* <h5>{form.dateReview}</h5> */}
                                        <h3>{form.nombre}</h3>
                                        <h4>Puntaje: {form.rating} / 5</h4>
                                        <p>{form.comment}</p>
                                    </div>
                                {/* ))} */}
                            </div>
                        </div>
                    </div>
                )
            )}
        </div>
    );
};
