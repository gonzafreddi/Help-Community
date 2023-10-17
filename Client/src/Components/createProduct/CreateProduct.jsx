import style from "./CreateProduct.module.css"
import UploadWidget from "../UploadWidget/UploadWidget";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react"
import { getCateg, getProduct, getProductByName, postProduct, putProduct } from "../../redux/actions/action";
import { disableFunction, handleChange, handleSubmit } from "./productCreateOrEdit";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../loader/loader";

//Notificaciones
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ToggleSwitch from "../toggleSwitch/ToggleSwitch";

export default function CreateProduct(){

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const detailProduct = useSelector((state) => state.detailProduct);
    

    const {productName} = useParams();
    // console.log(`NOMBRE DEL PRODUCTO --->>> ${productName}`);
    let isEditing;
    productName !== undefined ? isEditing = true : isEditing = false;

    const notify = (type) => {
        if (type === 'error') {
            toast.error('Ocurrio un error al crear el producto', {
                position: "bottom-right",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        } else if (type === 'success') {
            toast.success('Producto creado correctamente', {
                position: "bottom-right",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        } else if (type === 'editSuccess') {
            toast.success('Producto editado correctamente', {
                position: "bottom-right",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        } else if (type === 'editError') {
            toast.error('Ocurrio un error al editar el producto', {
                position: "bottom-right",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    };

    useEffect(()=>{
        dispatch(getCateg())
    },[dispatch]);

    useEffect(()=>{
        if (productName !== undefined && !detailProduct.name) {

            const fetchProduct = async () =>{
                await dispatch(getProductByName(productName));
                setLoading(false);
            }

            fetchProduct();
        }
        setLoading(false);
    }, [dispatch, productName]);

    
    
    const categ = useSelector(state => state.categ);
  
    const [imageUrl, setImageUrl] = useState(""); // Estado para almacenar la URL
    const [loading, setLoading] = useState(true)

    const [product, setProduct] = useState({
        id:'',
        name: "",
        description: "",
        image: "",
        price:"",
        category:"",
        stock: ""
    })
   
    const [errors, setErrors] = useState({
        name: "",
        description: "",
        image: "",
        price:"",
        category:"",
        stock: "",
        other:""
    })

    const handleImageUpload = (url) => {
        setImageUrl(url);
        setProduct({
            ...product,
            image: url
        })
    }

    const handleImageDelete = () => {
        setImageUrl("");
        setProduct({
            ...product,
            image: ""
        })
    }

    useEffect(()=>{
        if ( isEditing ) {
            let productData = productName !== undefined ? detailProduct[0] : undefined
    
            // console.log(`PRODUCTO CON ID ====>`);
            // console.log(productData);
    
            setProduct({
                id: productData.id,
                name: productData.name !== undefined ? productData.name : '',
                description: productData.description ? productData.description : '',
                image: productData.image ? productData.image : '',
                price: productData.price ? productData.price : '',
                category: productData.category ? productData.category : '',
                stock: productData.stock ? productData.stock : ''
            });
    
            setImageUrl(productData.image ? productData.image : '');
        } else {
            setProduct({
                id: '',
                name: '',
                description: '',
                image: '',
                price: '',
                category: '',
                stock: ''
            });
    
            setImageUrl('');
            
        }
    }, [isEditing])
    
    
    // console.log(`PRODUCTO CON ID ====>`);
    // console.log(product);

    const handleFormSubmit = async (e) => {
        console.log(`isEditing =======>>>>>> ${isEditing}`);
        if (isEditing) {
            try {
    
                e.preventDefault();
                await handleSubmit(product, imageUrl, dispatch, product.id, postProduct, putProduct, true);
                notify('editSuccess');
                dispatch(getProduct());
                navigate(`/products/detail/${product.name}`)

                
            } catch (error) {
                notify('editError');
                console.log(error.message);
            }
        } else {
            try {
    
                e.preventDefault();
                await handleSubmit(product, imageUrl, dispatch, product.id, postProduct, putProduct, false);
                notify('success');
                dispatch(getProduct());
                navigate(`/products/detail/${product.name}`)
                
            } catch (error) {
                notify('error');
                console.log(error.message);
            }
        }
    };

    const handleInputChange = (e) => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value
        })
    
        handleChange(product, setErrors); // Pasar updatedInfo en lugar de info
    };

    const capitalizeFirstLetter = (str) => {
        
        if (str.length === 0) {
            return str; 
        }

        const firstLetter = str.charAt(0).toUpperCase();
        const restOfString = str.slice(1).toLowerCase();
        return firstLetter + restOfString;
    };

    const isDisabled = disableFunction(errors);
 
    return (
        <div className={style.conteiner}>
            {
                loading ? (
                // Muestra "Cargando..." durante 1 segundo
                <div className={style.loader}>
                    <Loader/>
                    <h1>Cargando...</h1>
                </div>
                ) : (
                        <>
                        <div className={style.productCont}>
                            <div className={style.imgCont}>
                                {
                                    imageUrl !== ""
                                    ? <button className={style.closeImgBtn} ><span className='material-icons' onClick={handleImageDelete} >close</span></button>
                                    : null
                                }
                                {
                                    imageUrl !== ""
                                    ? <img className={style.productImg} src={imageUrl} alt="productImg" /> 
                                    : <div className={style.txtAndImgCont}>
                                        <h2 className={style.imgTxt}>Subir Imagen</h2>
                                        <UploadWidget className={style.uploadButton} onImageUpload={handleImageUpload}/>
                                    </div>
                                }
                            </div>
                            <div className={style.infoProduct}>
                                <input name="name" onChange={handleInputChange} className={style.productName} placeholder="Nombre del Producto" defaultValue={isEditing ? product.name : ""} ></input>
                                <textarea onChange={handleInputChange} name="description" className={style.productDescription} defaultValue={isEditing ? product.description : ""} placeholder="Descripción del producto"></textarea>
                                <div className={style.priceAndCatContainer}>
                                    <div className={style.priceAndDollarContainer}>
                                        <p className={style.dollarSign}>$</p> <input name="price" onChange={handleInputChange} className={style.productPrice} defaultValue={isEditing ? product.price : ""} placeholder="100.99" type="number"></input>
                                    </div>
                                    <select name="category" defaultValue={isEditing ? product.category : ""} onChange={handleInputChange} className={style.productCategories}>
                                        <option className={style.casillero} value="Todos">Categoría del producto</option>
                                        {categ.map((category) => (
                                            <option className={style.catOpciones} key={category.id} value={category.id}>
                                                {capitalizeFirstLetter(category.name)}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className={style.stockContainer}>
                                    <p className={style.dollarSign}>Stock:</p><input name="stock" onChange={handleInputChange} className={style.productStock} defaultValue={isEditing ? product.stock : ""} type="number" placeholder="1000"></input>
                                    {isEditing ? <ToggleSwitch text={'Activar/Desactivar'} defaultValue={true} /> : null }
                                </div>
                                <div className={style.buyCont}>
                                    <button className={style.btnBuy} onClick={handleFormSubmit} disabled={isDisabled} type="submit">{isEditing ? 'Guardar' : 'Crear Producto'}</button>
                                </div>
                            </div>
                        </div>
                        <ToastContainer />
                        </>
                    )
            }
        </div>
    );
}

// CreateProduct.propTypes = {
//     isEditing: PropTypes.bool.isRequired, // 'isEditing' debe ser un booleano y es requerido.
//     productData: PropTypes.object, // 'productData' debe ser un objeto, pero no es requerido.
// };