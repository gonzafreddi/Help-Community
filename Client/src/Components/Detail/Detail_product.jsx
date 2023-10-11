import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createOrder, getProductByName } from "../../redux/actions/action";
import style from "./detail_campain.module.css";
import { addToCart } from "../../redux/actions/action";
import { useParams } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

import Loader from "../loader/loader";
export const DetailProduct = () => {
    const detailProduct = useSelector((state) => state.detailProduct);
    const auth = useAuth()
    const { email } = auth.user;
    const emailUser = {email: email}
    
    const dispatch = useDispatch();
    const { name } = useParams();
    const [loading, setLoading] = useState(true);
    const [isReviewPopupOpen, setReviewPopupOpen] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            await dispatch(getProductByName(name));
            setLoading(false);
        };
 
        fetchData();
    }, [name]);

    let product = detailProduct[0];
    const hancleAddtoCart = ()=>{
        const quantityToadd = 1
        dispatch(addToCart(product, quantityToadd))
      }

    const handleSubmit=(detailProduct)=>{
        const allData = [{...product, email}]
        console.log(allData)
        dispatch(createOrder(allData))
    }
    const allData =  [{...product, email}]
    console.log(allData)

    const openReviewPopup = () => {
        setReviewPopupOpen(true);
      };
      
      const closeReviewPopup = () => {
        setReviewPopupOpen(false);
      };

      const submitReview = () => {
    // Lógica para procesar la revisión aquí

    // Cierra el popup
        closeReviewPopup();
        };
      

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
                            <h2>Product Reviews</h2>
                            <button className={style.añadir} onClick={openReviewPopup}>Añadir review</button>
                            </div>
                            {isReviewPopupOpen && (
                            <div className={style.modalBackground}>
                                <div className={style.reviewPopup}>
                                {/* Contenido del popup aquí */}
                                <h2>¿Que opinas sobre este producto?</h2>
                                <div className={style.imgReviewCont} >
                                <img className={style.imgReview} src={product?.image} alt="" />
                                </div>
                                <div className={style.areaNombres}>
                                <input className={style.nombreRev} type="text" placeholder="Nombre de Usuario" />
                                <input className={style.puntajeRev} type="number" min="0" max="5" placeholder="Puntaje (0-5)" />
                                </div>
                                <textarea className={style.escribirRev} placeholder="Escribe tu opinión" />
                                <div className={style.botonesReview}>
                                <button className={style.enviar} onClick={submitReview}>Enviar</button>
                                <button className={style.cancelar} onClick={closeReviewPopup}>Cancelar</button>
                                </div>
                                </div>
                            </div>
                            )}
                            <div className={style.rev2}>
                            <div className={style.review}>
                                <h5>10/09/2023</h5>
                                <h3>Pedro Gomez</h3>
                                <h4>Puntaje: {product?.rating} / 5</h4>
                                <p>
                                "Lorem ipsum dolor sit amet consectetur adipisicing elit, suscipit 
                                rem soluta velit officiis alias assumenda reprehenderit cum. Quibusdam, 
                                nisi fugit. Ea."
                                </p>
                            </div>
                            <div className={style.review}>
                                <h5>24/08/2023</h5>
                                <h3>Antonio Rivero</h3>
                                <h4>Puntaje: {product?.rating} / 5</h4>
                                <p>
                                "Lorem ipsum dolor sit amet consectetur adipisicing elit."
                                </p>
                            </div>
                            <div className={style.review}>
                                <h5>04/01/2023</h5>
                                <h3>Gonzalo Gonzales</h3>
                                <h4>Puntaje: {product?.rating} / 5</h4>
                                <p>
                                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, 
                                enim asperiores tempore."
                                </p>
                            </div>
                            </div>
                        </div>
                    </div>
                )
            )}
        </div>
    );
};
