import style from "./createCampaign.module.css"
import { useSelector } from "react-redux";
import { useState } from "react"
import {validateCampaign} from "./validateCampaign"
import { useEffect } from "react";
import UploadWidget from "../UploadWidget/UploadWidget";

export default function CreateCampaign(){

  const [imageUrl, setImageUrl] = useState(""); // Estado para almacenar la URL

  const handleImageUpload = (url) => {
      setImageUrl(url); // Actualiza el estado con la URL de la imagen
  }
  const states = useSelector((state)=>state.states)
  //con este estado local simulo q hago un post a la base de datos
  const[campaign, setCampaign]=useState({})


  
  const [info, setInfo] = useState({
    name: "",
    resumeDescr: "", 
    description: "",
    image: imageUrl,
    endDate: {},
    category:"",
    finalAmount: "",
    state: ""
  })

   
  const [errors, setErrors] = useState({
    name: "",
    resumeDescr: "", 
    description: "",
    image: "",
    endDate: [],
    category:"",
    finalAmount: "",
    state: ""
  })

  const handleSubmit= (e)=>{
    e.preventDefault()
    window.alert("campaña creada con exito")
    setCampaign(info)
  }
  useEffect(() => {
    console.log("log del useEffect",campaign);
  }, [campaign]); // Agrega campaign como dependencia


  const handleChange = (e) => {
    let updatedInfo;
  
    if (e.target.name === "day" || e.target.name === "month" || e.target.name === "year") {
      // Si el nombre del campo es "day", "month" o "year", actualiza endDate
      updatedInfo = {
        ...info,
        image: imageUrl,
        endDate: {
          ...info.endDate,
          [e.target.name]: e.target.value,
        },
      };
    } else {
      // Para otros campos, simplemente actualiza su valor
      updatedInfo = {
        ...info,
        image: imageUrl,
        [e.target.name]: e.target.value,
      };
    }
    setInfo(updatedInfo)
    setErrors(validateCampaign(updatedInfo));
  };
  const disableFunction = () => {
    for (let err in errors) {
      if (errors[err] !== "") {
        return true; // Si al menos un campo tiene un error, deshabilita el botón
      }
    }
    return false; // Habilita el botón si no hay errores en ningún campo
  };
  
    return(<div className={style.bodyConteiner}>
        <div className={style.formConteiner}>
         
            <form onSubmit={handleSubmit} action="">
            <h1>Crear una campaña</h1>
                <label className={`${style.title}`} htmlFor=""><h3>Colocale un nombre a tu campaña</h3></label>
                <span>{errors.name}</span>
                <input className={style.nameAndPrice} onChange={handleChange} type="text" name="name" placeholder="Nombre" id="" />

                <label className={`${style.title}`} htmlFor=""><h3>resumen de su descripcion</h3></label>
                <span>{errors.resumeDescr}</span>
                <input className={style.nameAndPrice} onChange={handleChange} type="text" name="resumeDescr" id="" />
                <label className={style.title} htmlFor=""><h3>Describe tu campaña</h3></label>
                <span>{errors.description}</span>
                <textarea onChange={handleChange} name="description" id="" cols="30" rows="10"></textarea>

                <label className={style.title}  htmlFor=""><h3>Añade una imagen a tu campaña</h3></label>
                <UploadWidget onImageUpload={handleImageUpload}/>
                {
                  imageUrl !== "" 
                  ? <img className={style.campaignImg} src={imageUrl} alt="campaignImg" /> 
                  : null
                }

               <div className={style.selectsConteiner}>
                <div className={style.state}>
                <label className={style.title}  htmlFor=""><h3>¿En que provincia se encuntra tu campaña?</h3></label>
                <span>{errors.state}</span>
                <select onChange={handleChange} name="state" id="">
                <option value="">Provincia</option>
                {
                  states.map((e, index)=> <option key={index}>
                    {e.name}
                  </option>)
                }
                </select>

                </div>
                 
              <div>
              <label className={style.title}  htmlFor=""><h3>¿Cuando finaliza tu campaña?</h3></label>
                
              
              <span>{errors.endDate}</span>
              <select onChange={handleChange} name="day" id="">
                <option value="" selected>Dia</option>
                <option value="1">1</option>
                <option value="2">2</option>
                </select>

                <select onChange={handleChange} name="month" id="">
                <option value="" selected>Mes</option>
                <option value="enero">Enero</option>
                <option value="febrero">Febrero</option>
                </select>

                <select onChange={handleChange} name="year" id="">
                <option value="" selected>Año</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
                <option value="2025">2026</option>
                </select>
              
              
              
              </div>

               </div>
              

                <h3 className={style.title} >¿Cuales son las razones principales por las que vas a recaudar dinero</h3>
                <span>{errors.category}</span>
              <select onChange={handleChange} name="category" id="">
                <option value="salud">salud</option>
                <option value="hambre">hambre</option>
                <option value="razismo">razismo</option>
              </select>
              <h3 className={style.title} >¿Cuanto te gustaria recaudar?</h3>
              <span className={style.spanAmount}>{errors.finalAmount}</span>
             <div className={style.monto}>
             
              <p className={style.peso}>
                $
              </p>
              <input onChange={handleChange} name="finalAmount" className={style.nameAndPrice} type="number" />
                <p className={style.ars}>ARS</p>
             </div>
          

           <div className={style.sendCont}> <input disabled={disableFunction()}className={style.send}type="submit" /></div>
          </form>
        </div>
    </div>)
}