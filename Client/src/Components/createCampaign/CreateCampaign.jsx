import style from "./createCampaign.module.css"
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react"
import UploadWidget from "../UploadWidget/UploadWidget";
import { postCampaign } from "../../redux/actions/action";
import { handleSubmit, handleChange, disableFunction } from "./formUtils";

export default function CreateCampaign(){

  const [imageUrl, setImageUrl] = useState(""); // Estado para almacenar la URL

  const handleImageUpload = (url) => {
      setImageUrl(url); // Actualiza el estado con la URL de la imagen
  }

  const dispatch = useDispatch()
  const states = useSelector((state)=>state.states)
  const category = useSelector((state)=>state.category)

  const [info, setInfo] = useState({
    name: "",
    short_description: "", 
    long_description: "",
    image: `${imageUrl}`,
    startDate: "1980-01-25",
    endDate: `${{}}`,
    endDate: ["1980-01-25"],
    finalAmount: "",
    StateId: "",
    CategoryId:"",
    ongDonorId:"f305f407-2536-4763-ab24-820d1cdcd8wr",
    state: true
  })
   
   const [errors, setErrors] = useState({
    name: "",
    short_description: "", 
    long_description: "",
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


  // const handleInputChange = (e) => {
  //   handleChange(info, setInfo, setErrors, e);
  //   const updatedInfo = {
  //     ...info,
  //     [e.target.name]:e.target.value,
  //     image: imageUrl,
  //   };
  //   setInfo(updatedInfo)
  // };

  const handleInputChange = (e) => {
    const updatedInfo = {
      ...info,
      [e.target.name]: e.target.value,
      image: imageUrl, // Establecer image con imageUrl
    };
  
    handleChange(updatedInfo, setInfo, setErrors, e); // Pasar updatedInfo en lugar de info
  };
  
  const isDisabled = disableFunction(errors);
console.log(errors)
console.log(info)
 
    return(<div className={style.bodyConteiner}>
        <div className={style.formConteiner}>
         
            <form onSubmit={handleFormSubmit} action="">
            <h1>Crear una campaña</h1>
                <label className={`${style.title}`} htmlFor=""><h3>Colocale un nombre a tu campaña</h3></label>
                <span>{errors.name}</span>
                <input className={style.nameAndPrice} onChange={handleInputChange} type="text" name="name" placeholder="Nombre" id="" />

                <label className={`${style.title}`} htmlFor=""><h3>resumen de su descripcion</h3></label>
                <span>{errors.resumeDescr}</span>
                <input className={style.nameAndPrice} onChange={handleInputChange} type="text" name="short_description" id="" />
                <label className={style.title} htmlFor=""><h3>Describe tu campaña</h3></label>
                <span>{errors.description}</span>
                <textarea onChange={handleInputChange} name="long_description" id="" cols="30" rows="10" readonly></textarea>
                
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
                <span>{errors.StateId}</span>
                <select onChange={handleInputChange} name="StateId" id="">
                <option value="">Provincia</option>
                {
                  states.map((e, index)=> <option value={e.id} key={index}>
                    {e.name}
                  </option>)
                }
                </select>
               </div>
                 
              <div>
              <label className={style.title}  htmlFor=""><h3>¿Cuando finaliza tu campaña?</h3></label>
                
              
              <span>{errors.endDate}</span>
              <select onChange={handleInputChange} name="day" id="">
                <option value="" selected>Dia</option>
                <option value="01">1</option>
                <option value="02">2</option>
                </select>

                <select onChange={handleInputChange} name="month" id="">
                <option value="" selected>Mes</option>
                <option value="01">Enero</option>
                <option value="02">Febrero</option>
                </select>

                <select onChange={handleInputChange} name="year" id="">
                <option value="" selected>Año</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
                <option value="2025">2026</option>
                 </select>          
                </div>
               </div>

                <h3 className={style.title} >¿Cuales son las razones principales por las que vas a recaudar dinero</h3>
                <span>{errors.CategoryId}</span>
              <select onChange={handleInputChange} name="CategoryId" id="">
                {
                  category.map((e,index)=><option key={index} value={e.id}>
                    {e.name}
                  </option>)
                }
              </select>

              <h3 className={style.title} >¿Cuanto te gustaria recaudar?</h3>
              <span className={style.spanAmount}>{errors.finalAmount}</span>
             <div className={style.monto}>
             
              <p className={style.peso}>$</p>
              <input onChange={handleInputChange} name="finalAmount" className={style.nameAndPrice} type="number" />
                <p className={style.ars}>ARS</p>
             </div>
             <div className={style.sendCont}> <input disabled={isDisabled}className={style.send}type="submit" /></div>
            </form>
        </div>
    </div>)
}