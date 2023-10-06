import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductByName } from "../../redux/actions/action";
import style from "./detail_campain.module.css";
import { addToCart } from "../../redux/actions/action";
import { useParams } from "react-router-dom";

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

    const product = detailProduct[0];
    const hancleAddtoCart = ()=>{
        const quantityToadd = 1
        dispatch(addToCart(product, quantityToadd))
      }

      let precio = typeof product.price
    console.log(precio)
    return (
        <div className={style.conteiner}>
            {loading ? (
                // Muestra "Cargando..." durante 1 segundo
                <div>
                    <h1>Cargando...</h1>
                </div>
            ) : (
                product && (
                    <div className={style.productCont}>
                        <div className={style.imgCont}>
                            <img src={product.image} alt="" />
                        </div>
                        <div className={`${style.column} ${style.infoProduct}`}>
                            <p>+500 vendidos</p>
                            <h1>{product.name}</h1>
                            <p>{product.description}</p>
                            <div className={style.price}>
                                <p>$ {product.price}</p>
                            </div>
                            <div className={style.buyCont}>
                                <button className={style.btnBuy}>Comprar</button>
                                <button className={style.btnAddToCart} onClick={hancleAddtoCart}>Agregar al carrito</button>
                            </div>
                        </div>
                    </div>
                )
            )}
        </div>
    );
};
