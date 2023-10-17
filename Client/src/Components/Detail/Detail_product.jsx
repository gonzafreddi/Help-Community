import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createOrder, getProductByName, createReview, getReviews, getAllBuys, getAllBuysForUser } from "../../redux/actions/action";
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

    const dispatch = useDispatch();
    const { name } = useParams();
    const [loading, setLoading] = useState(true);
    const [isReviewPopupOpen, setReviewPopupOpen] = useState(false);
    const [reviews, setReviews] = useState([]);
    const [users, setUsers] = useState([]);

    const [userData, setUserData] = useState([]);
    const [isReviewButtonEnabled, setReviewButtonEnabled] = useState(false);

    const [buys, setBuys ] = useState([]);
    const [ratingError, setRatingError] = useState("");
    const [commentError, setCommentError] = useState("");

    useEffect(() => {
        const fetchData = async () => {
          try {
            const buyData = await getAllBuysForUser(email);
            setBuys(buyData);
          } catch (error) {
            console.error(error);
          }
        };
    
        fetchData();
      }, []);
   

      useEffect(() => {
        // Para que al enviar email como parametro, me devuelva la info del usuario, incluido el userId
        axios
          .get('/user/email', {
            params: {
              email: email, // Correo electrónico que deseas buscar
            },
          })
          .then((response) => {
            // Actualiza el estado con la info del usuario
            setUserData(response.data);
          })
          .catch((error) => {
            console.error("Error al obtener la info:", error);
          });
      }, []);


    const displayName = auth.user.displayName;
    // const firstName = displayName.split(' ')[0];
    // console.log("auth.user.email: ", auth.user.email)
   

    const [reviewCreated, setReviewCreated] = useState(false);
        
      
    let product = detailProduct[1];
    const allData =  [{...product, email}]
    // console.log("allData", allData)

    console.log("allData[0].id: ", allData[0].id)

    const [form, setForm] = useState({    
        emailUser: allData[0].email,
        ProductId: allData[0].id,
        rating: 0,
        comment: ""
      });

    const [error, setError] = useState({
        email: "",
        ProductId: "",
        rating: 0,
        comment: "",
      });

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

        if (property === "rating") {
            if (value < 1 || value > 10) {
              setRatingError("El puntaje debe estar entre 1 y 10");
            } else {
              setRatingError("");
            }
          }
        
          if (property === "comment") {
            if (value.length > 250) {
              setCommentError("El comentario no debe exceder los 250 caracteres");
            } else {
              setCommentError("");
            }
          }
        //llama a la funcion para validar los campos actualizados en tiempo real
        validate({ ...form, [property]: value }, property);
      }; 

        const validate = (form) => {

        const patternNombre = /^[A-Za-z\s]+$/;
        const patternNumeros = /^[0-9]+$/;
        const newError = { ...error }; // copia del estado de error existente
      
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


        const disable = () => {
        if (ratingError || commentError) {
            return true;
        }
        return false;
        };

    useEffect(() => {
        if (buys && buys.length > 0 && userData && userData.length > 0) {
          const allMatchProductId = buys.some((buy) => {
            return (
              buy.products.items &&
              buy.products.items.some((item) => item.id === allData[0].id) &&
              buy.products.statusDetail === "accredited" &&
              buy.userId === userData[0].id
            );
          });
    
          setReviewButtonEnabled(allMatchProductId);
        } else {
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

      const handlePuntajeChange = (newPuntaje) => {
        setForm({ ...form, rating: newPuntaje });
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
        } 
        if(reviewCreated === false){
            event.preventDefault()
        }
        closeReviewPopup();
        };


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
                            <p>Stock: {product?.stock}</p>
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
                                <p className={style.numeros}>{form.rating}</p>
                                {/* <input disabled={true} className={style.nombreRev} type="text" value={form.nombre} onChange={changeHandler} name="nombre" placeholder={displayName} /> */}
                                <input
                                    type="range"
                                    min="1"
                                    max="10"
                                    step="0.1" // Para permitir decimales
                                    value={form.rating}
                                    onChange={changeHandler}
                                    name="rating"
                                    className={`${style.puntajeRange} ${style.customRange}`}
                                    />                          
                                {ratingError && <span className={style.error}>{ratingError}</span>}
                                </div>
                                <textarea className={style.escribirRev} type="text" value={form.comment} onChange={changeHandler} name="comment" placeholder="Escribe tu opinión" />
                                {commentError && <span className={style.error}>{commentError}</span>}
                                <div className={style.botonesReview}>
                                <button disabled={disable() || reviewCreated} className={style.enviar} onClick={submitReview} type="submit">Enviar</button>
                                {/* disabled={disable() || reviewCreated} */}
                                <button className={styles.cancelar} onClick={closeReviewPopup}>Cancelar</button>
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
