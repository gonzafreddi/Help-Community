import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createOrder, getProductByName, createReview, getReviews, getAllBuys } from "../../redux/actions/action";
import style from "./detail_campain.module.css";
import { addToCart } from "../../redux/actions/action";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../context/AuthContext";

import Loader from "../loader/loader";
export const DetailProduct = () => {
    const detailProduct = useSelector((state) => state.detailProduct);
    const review = useSelector((state)=> state.review) || [];
    const auth = useAuth()
    const { email } = auth.user;
    const emailUser = {email: email};
    
    console.log("detailProduct: ", detailProduct)

    const dispatch = useDispatch();
    const { name } = useParams();
    const [loading, setLoading] = useState(true);
    const [isReviewPopupOpen, setReviewPopupOpen] = useState(false);
    const [reviews, setReviews] = useState([]);
    const [users, setUsers] = useState([]);

    // console.log("name: ", name)
    // console.log("email: ", email)

    const [buys, setBuys ] = useState("")
    const [userData, setUserData] = useState([]);
    const [isReviewButtonEnabled, setReviewButtonEnabled] = useState(false);

    useEffect(() => {
        // Realiza una solicitud GET para obtener la lista de temperamentos desde el servidor
        axios
          .get("http://localhost:3001/buys")
          .then((response) => {
            // Actualiza el estado con los temperamentos disponibles
            setBuys(response.data);
          })
          .catch((error) => {
            console.error("Error al obtener los temperamentos:", error);
          });
      }, []);

      console.log("buys: ", buys)

      useEffect(() => {
        // Realiza una solicitud GET para obtener la lista de temperamentos desde el servidor
        axios
          .get('/user/email', {
            params: {
              email: email, // Correo electrónico que deseas buscar
            },
          })
          .then((response) => {
            // Actualiza el estado con los temperamentos disponibles
            setUserData(response.data);
          })
          .catch((error) => {
            console.error("Error al obtener los temperamentos:", error);
          });
      }, []);

      console.log("userData: ", userData)

    //   useEffect(() => {
    //     // Realiza una solicitud GET para obtener la lista de temperamentos desde el servidor
    //     axios
    //       .get("http://localhost:3001/user")
    //       .then((response) => {
    //         // Actualiza el estado con los temperamentos disponibles
    //         setUsers(response.data);
    //       })
    //       .catch((error) => {
    //         console.error("Error al obtener los temperamentos:", error);
    //       });
    //   }, []);

    //   console.log("users: ", users)

    const displayName = auth.user.displayName;
    // const firstName = displayName.split(' ')[0];
    // console.log("auth.user.email: ", auth.user.email)
   

      const [reviewCreated, setReviewCreated] = useState(false);
        
      
    let product = detailProduct[1];
    const allData =  [{...product, email}]
    // console.log("allData", allData)

    const [form, setForm] = useState({    
        emailUser: allData[0].email,
        ProductId: allData[0].id,
        rating: 0,
        comment: ""
      });

    // const [error, setError] = useState({
    //     email: userMail,
    //     ProductId: productId,
    //     // nombre: "",
    //     rating: 0,
    //     comment: "",
    //     // dateReview: "",
    //   });

      useEffect(() => {
        const fetchData = async () => {
            await dispatch(getProductByName(name));
            dispatch(getReviews());
            setLoading(false);
        };
        fetchData();
    }, [name]);


    useEffect(() => {
        if (product) {
            // Verifica si emailUser necesita ser actualizado
            if (form.emailUser !== allData[0].email) {
                setForm((prevForm) => ({
                    ...prevForm,
                    emailUser: allData[0].email,
                }));
            }
        }
    }, [product, allData]);

    useEffect(() => {
        if (product) {
            // Verifica si ProductId necesita ser actualizado
            if (form.ProductId !== allData[0].id) {
                setForm((prevForm) => ({
                    ...prevForm,
                    ProductId: allData[0].id,
                }));
            }
        }
    }, [product, allData]);



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
        // validate({ ...form, [property]: value }, property);
      }; 

    //     const validate = (form) => {

    //     const patternNombre = /^[A-Za-z\s]+$/;
    //     const patternNumeros = /^[0-9]+$/;
    //     const newError = { ...error }; // copia del estado de error existente
      
    //     // if (!patternNombre.test(form.nombre) || !form.nombre) {
    //     //   newError.nombre = "Ingrese solo letras A-Z";
    //     // } else {
    //     //   newError.nombre = "";
    //     // }
      
    //     if (!patternNumeros.test(form.rating) || !form.rating) {
    //       newError.rating = "Debe ingresar solo Numeros";
    //     } else {
    //       newError.rating = "";
    //     }

    //     if (!patternNombre.test(form.comment) || !form.comment) {
    //         newError.comment = "Ingrese solo letras A-Z";
    //       } else {
    //         newError.comment = "";
    //       }
  
    //     setError(newError); // Actualiza el estado de error
    //   };


    //   const disable = () => { //para verificar si se deshabilita el boton submit, iterando las props del objeto error
    //     let auxDisabled = true; //si la variable es true se deshabilita, si es false se habilita
    //     for (let err in error){
    //       if(error[err] === "") auxDisabled = false;
    //       else{ 
    //       auxDisabled = true //cualquier input q este con error, es true y se deshabilita
    //       break;
    //      }
    //     }
    //     return auxDisabled;
    //   }

 

    // console.log("getReviews: ", getReviews)
    useEffect(() => {
        if (buys && buys.length > 0) {
          // Verifica si todos los elementos en `buys` coinciden con `allData[0].id`
          const allMatchProductId = buys.every((buy) => {
            return buy.products.items.some(
              (item) => item.id === allData[0].id
            );
          });
    
          // Verifica si todos los elementos en `buys` tienen `statusDetail` igual a "accredited"
          const allAccredited = buys.every((buy) => {
            return buy.statusDetail === "accredited";
          });
    
          // Verifica si `userData.id` coincide con `userId` en `buys`
          const userIdMatches = buys.some((buy) => {
            return buy.userId === userData.id;
          });
    
          // Habilita el botón si todas las condiciones se cumplen
          setReviewButtonEnabled(allMatchProductId && allAccredited && userIdMatches);
        } else {
          // Deshabilita el botón si no hay compras disponibles
          setReviewButtonEnabled(false);
        }
      }, [buys, allData, userData]);

    const handleSubmit=(detailProduct)=>{
        const allData = [{...product, email}]
        console.log("allData de handleSubmit: ", allData)
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
            dispatch(getReviews());
        } catch (error) {
            alert(error.response.data.error);
            //con este alert muestro los errores del back
        } if(reviewCreated === false){
            event.preventDefault()
        }
        closeReviewPopup();
        };
    // //   console.log("reviewsProductId: ", review.ProductId)
    //     // console.log("reviews: ", reviews)
    //     useEffect(()=>{
    //         dispatch(getReviews())
    //     },[dispatch])
        // console.log("product: ", product)
        // console.log("allData[0].id: ", allData[0].id)
        // console.log("review: ", review)
        // console.log("review[0].ProductId: ", review.ProductId)

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
                            <button className={style.añadir} onClick={openReviewPopup} disabled={!isReviewButtonEnabled}>Añadir review</button>
                            </div>
                            {isReviewPopupOpen && (
                            <div className={style.modalBackground}>
                                <div className={style.reviewPopup}>
                                <h2 className={style.queOpinas}>¿Que opinas sobre este producto?</h2>
                                <span className={style.productName}>{name}</span>
                                <div className={style.imgReviewCont} >
                                <img className={style.imgReview} src={product?.image} alt="" />
                                </div>
                                <div className={style.areaNombres}>
                                <h2 className={style.nombreRev}>Puntaje: </h2>
                                {/* <input disabled={true} className={style.nombreRev} type="text" value={form.nombre} onChange={changeHandler} name="nombre" placeholder={displayName} /> */}
                                <input className={style.puntajeRev} type="number" value={form.rating} onChange={changeHandler} name="rating" min="0" max="5" placeholder="0-10" />
                                </div>
                                <textarea className={style.escribirRev} type="text" value={form.comment} onChange={changeHandler} name="comment" placeholder="Escribe tu opinión" />
                                <div className={style.botonesReview}>
                                <button className={style.enviar} onClick={submitReview} type="submit">Enviar</button>
                                {/* disabled={disable() || reviewCreated} */}
                                <button className={style.cancelar} onClick={closeReviewPopup}>Cancelar</button>
                                </div>
                                </div>
                            </div>
                            )}
                            <div className={style.rev2}>
                                {Array.isArray(review) && review.map((review, index) => {
                                    if (review.ProductId === allData[0].id) {
                                        const formattedDateTime = new Date(review.createdAt).toLocaleString('es-ES', {
                                            year: 'numeric',
                                            month: '2-digit',
                                            day: '2-digit',
                                            hour: '2-digit',
                                            minute: '2-digit'
                                        });
                                        return (
                                            <div className={style.review} key={index}>
                                                <div className={style.nombreFecha}>
                                                <p className={style.user}>{review.user?.name}</p>
                                                <p className={style.fecha}>{formattedDateTime}</p>
                                                </div>
                                                <p className={style.comment}>"{review.comment}"</p>
                                                <p className={style.puntaje}>Puntaje: {review.rating} / 10</p>
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
