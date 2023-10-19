import styles from "./CardProduct.module.css"
import PropTypes from 'prop-types';

const CardProduct = ({ product }) => {

    // const { id, name, image, price, stock, state } = product;

    console.log(product);

    return(
        <div className={styles.productConteiner}>   
            <div className={styles.productData}>
                <div className={styles.iconConteiner}><img src={product.image} alt="" /></div>
                <div className={styles.text}>
                    <h5>{name}</h5>
                    <p>{product.id}</p>
                    <p>{product.price}</p>
                    <p>{product.stock}</p>
                    <p>{product.state ? "Activo" : "Inactivo" }</p>
                </div>
            </div>
        </div>
    )
}

CardProduct.propTypes = {
    product: PropTypes.object, // 'productData' debe ser un objeto
};

export default CardProduct;