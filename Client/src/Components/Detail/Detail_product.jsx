import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createOrder, getProductByName, createReview, getReviews } from "../../redux/actions/action";
import styles from "./detail_campain.module.css";
import { addToCart, getUserByEmail } from "../../redux/actions/action";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../context/AuthContext";

import Loader from "../loader/loader";
import CreateProduct from "../CreateProduct/CreateProduct";
export const DetailProduct = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const detailProduct = useSelector((state) => state.detailProduct);
    const review = useSelector((state)=> state.review);
    const auth = useAuth()
    const { email } = auth.user;



    //Este use 
    useEffect(()=>{
        if (email) {
            dispatch(getUserByEmail(email))
        } else {
            dispatch(getUserByEmail('logout'))
        }
    }, [dispatch, email])

    const userData = useSelector((state) => state.userData);
    const isAdmin = userData.userAdmin;

    const { name } = useParams();
    const [loading, setLoading] = useState(true);
    const [isReviewPopupOpen, setReviewPopupOpen] = useState(false);
    const [reviews, setReviews] = useState([]);

        
    const displayName = auth.user.displayName;
    // const firstName = displayName.split(' ')[0];
    

    const [reviewCreated, setReviewCreated] = useState(false);
        
    useEffect(() => {
        const fetchData = async () => {
            await dispatch(getProductByName(name));
            setLoading(false);
        };
        fetchData();
    }, [name]);



    let product = detailProduct[1];
    const allData =  [{...product, email}]

    const [form, setForm] = useState({    
        email: allData[0].email,
        ProductId: product?.id,
        // userId: "11255acc-186d-409c-a16e-168e1c730253",
        name: displayName,
        rating: 0,
        comment: "",
        // dateReview: new Date().toISOString(),
    });
    

    const hancleAddtoCart = ()=>{
        const quantityToadd = 1
        dispatch(addToCart(product, quantityToadd))
    }

    const changeHandler = (event) => { //esta funcion actualiza el estado del formulario conel nuevo valor ingresado en los campos inputs
        const property = event.target.name; //inputs
        const value = event.target.value; //valor ingresado
        setForm({ ...form, [property]: value });
        //llama a la funcion para validar los campos actualizados en tiempo real
        // validate({ ...form, [property]: value }, property);
    }; 


    const handleSubmit=()=>{
        const allData = [{...product, email}]
        // console.log("allData de handleSubmit: ", allData)
        dispatch(createOrder(allData))
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

    const handleEditButton = () => {
        navigate(`/create/product/${product.name}`)
    }
      

    useEffect(()=>{
        dispatch(getReviews())
    },[dispatch])

    return (
        <div className={styles.conteiner}>
            {loading ? (
                // Muestra "Cargando..." durante 1 segundo
                <div className={styles.loader}>
                    <Loader/>
                    <h1>Cargando...</h1>
                </div>
            ) : (
                product && (
                    <div>
                    <div className={styles.productCont}>
                        <div className={styles.imgCont}>
                            <img src={product?.image} alt="" />
                        </div>
                        <div className={`${styles.column} ${styles.infoProduct}`}>
                            <div className={styles.stockEdit}>
                                <p>Stock: {product?.stock}</p>
                                { isAdmin === true ? <button className={styles.editButton} onClick={handleEditButton} >Editar<span className="material-icons">edit</span></button> : null}
                            </div>
                            <h1>{product?.name}</h1>
                            <p>{product?.description}</p>
                            <div className={styles.price}>
                                <p>$ {product?.price}</p>
                            </div>
                            <div className={styles.buyCont}>
                            <button className={styles.btnBuy} onClick={() => handleSubmit(detailProduct)}>Comprar</button>

                                <button className={styles.btnAddToCart} onClick={hancleAddtoCart}>Agregar al carrito</button>
                            </div>
                        </div>
                    </div>
                        <div className={styles.reviewsCont}>
                            <div className={styles.contTitulos}>
                            <h2 className={styles.tituloReviews}>Product Reviews</h2>
                            <button className={styles.añadir} onClick={openReviewPopup}>Añadir review</button>
                            </div>
                            {isReviewPopupOpen && (
                            <div className={styles.modalBackground}>
                                <div className={styles.reviewPopup}>
                                {/* Contenido del popup aquí */}
                                <h2 className={styles.queOpinas}>¿Que opinas sobre este producto?</h2>
                                <div className={styles.imgReviewCont} >
                                <img className={styles.imgReview} src={product?.image} alt="" />
                                </div>
                                <div className={styles.areaNombres}>
                                <input disabled={true} className={styles.nombreRev} type="text" value={form.nombre} onChange={changeHandler} name="nombre" placeholder={displayName} />
                                <input className={styles.puntajeRev} type="number" value={form.rating} onChange={changeHandler} name="rating" min="0" max="5" placeholder="Puntaje (0-5)" />
                                </div>
                                <textarea className={styles.escribirRev} type="text" value={form.comment} onChange={changeHandler} name="comment" placeholder="Escribe tu opinión" />
                                <div className={styles.botonesReview}>
                                <button className={styles.enviar} onClick={submitReview} type="submit">Enviar</button>
                                {/* disabled={disable() || reviewCreated} */}
                                <button className={styles.cancelar} onClick={closeReviewPopup}>Cancelar</button>
                                </div>
                                </div>
                            </div>
                            )}
                            <div className={styles.rev2}>
                                {review.map((review, index) => {
                                    if (review.ProductId === allData[0].id) {
                                        return (
                                            <div className={styles.review} key={index}>
                                                <h5>{review.createdAt}</h5>
                                                <h3>{review.name}</h3>
                                                <h4>Puntaje: {review.rating} / 5</h4>
                                                <p>{review.comment}</p>
                                            </div>
                                        );
                                    } else {
                                        return null;
                                    }
                                })}
                            </div>
                        </div>
                    </div>
                )
            )}
        </div>
    );
};
