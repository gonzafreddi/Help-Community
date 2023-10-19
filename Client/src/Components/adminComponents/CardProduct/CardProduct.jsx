import { useNavigate } from "react-router-dom";
import styles from "./CardProduct.module.css"
import PropTypes from 'prop-types';
import { getCateg, getProductByName } from "../../../redux/actions/action";
import { useDispatch } from "react-redux";

const CardProduct = (product) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleEditButton = async () => {

        await dispatch(getProductByName(product.name));
        await dispatch(getCateg())
        console.log("dispatched");
        navigate(`/admin/products/create/${product.name}`)
    }


    return(
        <div className={styles.productConteiner}>   
            <div className={styles.productData}>
                <div className={styles.iconConteiner}><img src={product.image} alt="" /></div>
                <div className={styles.prodInfo}>
                    <div className={styles.nameAndId}>
                        <h5 className={styles.prodName}>{product.name}</h5><p className={styles.prodId}>{product.id}</p>
                    </div>
                    <div className={styles.infoAndButton}>
                        <div>
                            <p className={styles.prodPrice}>Precio: ${product.price}</p>
                            <p className={styles.prodStock}>Stock: {product.stock}</p>
                            <p className={styles.prodState}>Estado: {product.state ? "🟢 Activo" : "🔴 Inactivo" }</p>
                        </div>
                        
                        <button className={styles.editButton} onClick={handleEditButton} >Editar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

CardProduct.propTypes = {
    product: PropTypes.object, // 'product' debe ser un objeto
};

export default CardProduct;