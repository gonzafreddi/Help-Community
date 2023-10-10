import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react"
import UploadWidget from "../UploadWidget/UploadWidget";
import { getCateg, postCampaign } from "../../redux/actions/action";
import { handleSubmit, handleChange, disableFunction } from "../createCampaign/formUtils";
import style from "./CreateProduct.module.css"

export default function CreateProduct(){

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getCateg())
    },[dispatch])
    
    
    const categ = useSelector(state => state.categ);
  
    const [imageUrl, setImageUrl] = useState(""); // Estado para almacenar la URL

    const handleImageUpload = (url) => {
        setImageUrl(url); // Actualiza el estado con la URL de la imagen
    }

//   const states = useSelector((state)=>state.states)
//   const category = useSelector((state)=>state.category)

    const [product, setProduct] = useState({
        name: "",
        description: "",
        image: `${imageUrl}`,
        price:""
    })
   
    const [errors, setErrors] = useState({
        name: "",
        description: "", 
        image: "",
        endDate: [],
        CategoryId:"",
        finalAmount: "",
        StateId: ""
    })

    const handleFormSubmit = (e) => {
        e.preventDefault();
        window.alert("Campaña creada con éxito");
        handleSubmit(info, dispatch, postCampaign);
    };

    const handleInputChange = (e) => {
        const updatedInfo = {
        ...product,
        [e.target.name]: e.target.value,
        image: imageUrl, // Establecer image con imageUrl
        };
    
        handleChange(updatedInfo, setProduct, setErrors, e); // Pasar updatedInfo en lugar de info
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
            <div className={style.productCont}>
                <div className={style.imgCont}>
                    {
                        imageUrl
                        ? <img src={product?.image} alt="" /> 
                        : <div className={style.txtAndImgCont}>
                            <h2 className={style.imgTxt}>Subir Imagen</h2>
                            <UploadWidget className={style.uploadButton} onImageUpload={handleImageUpload}/>
                          </div>
                    
                    }
                </div>
                <div className={style.infoProduct}>
                    <input className={style.productName} placeholder="Nombre del Producto"></input>
                    <textarea className={style.productDescription} placeholder="Descripción del producto"></textarea>
                    <div className={style.priceAndCatContainer}>
                        <div className={style.priceAndDollarContainer}>
                            <p className={style.dollarSign}>$</p> <input className={style.productPrice} placeholder="100.99" type="number"></input>
                        </div>
                        <select className={style.productCategories}>
                            <option className={style.casillero} value="Todos">Categoría del producto</option>
                            {categ.map((category) => (
                                <option className={style.catOpciones} key={category} value={category}>
                                    {capitalizeFirstLetter(category)}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className={style.buyCont}>
                        <button className={style.btnBuy} disabled={isDisabled} type="submit">Crear Producto</button>
                    </div>
                </div>
            </div>
        </div>
    );
}