import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createOrder, getProductByName } from "../../redux/actions/action";
import style from "./detail_campain.module.css";
import { addToCart } from "../../redux/actions/action";
import { useParams } from "react-router-dom";

import Loader from "../loader/loader";
export const DetailProduct = () => {
    const detailProduct = useSelector((state) => state.detailProduct);


    
    const dispatch = useDispatch();
    const { name } = useParams();
    const [loading, setLoading] = useState(true);

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
        console.log(detailProduct)
        dispatch(createOrder(detailProduct))
    }
      

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
                            <h2>Reviews</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, 
                                enim asperiores tempore iste nam, possimus itaque facilis, suscipit 
                                rem soluta velit officiis alias assumenda reprehenderit cum. Quibusdam, 
                                nisi fugit. Ea.</p>
                        </div>
                    </div>
                )
            )}
        </div>
    );
};
