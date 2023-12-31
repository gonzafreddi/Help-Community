import styles from "./createCampaign.module.css"
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

  const handleInputChange = (e) => {
    const updatedInfo = {
      ...info,
      [e.target.name]: e.target.value,
      image: imageUrl, // Establecer image con imageUrl
    };
  
    handleChange(updatedInfo, setInfo, setErrors, e); // Pasar updatedInfo en lugar de info
  };
  
  const isDisabled = disableFunction(errors);

 
    return(<div className={styles.bodyConteiner}>
        <div className={styles.formConteiner}>
         
            <form onSubmit={handleFormSubmit} action="">
                <h1>Crear una campaña</h1>
                <label className={`${styles.title}`} htmlFor=""><h3>Coloquele un nombre a su campaña</h3></label>
                <span>{errors.name}</span>
                <input className={styles.nameAndPrice} onChange={handleInputChange} type="text" name="name" placeholder="Nombre de la campaña" id="" />

                <label className={`${styles.title}`} htmlFor=""><h3>Describa su campaña en pocas palabras</h3></label>
                <span>{errors.resumeDescr}</span>
                <input className={styles.nameAndPrice} onChange={handleInputChange} type="text" name="short_description" id="" placeholder="Descripción corta de la campaña"/>
                <label className={styles.title} htmlFor=""><h3>Describa su campaña detalladamente</h3></label>
                <span>{errors.description}</span>
                <textarea onChange={handleInputChange} name="long_description" id="" cols="30" rows="10" readonly placeholder="Descripción completa de su campaña"></textarea>
                
                <label className={styles.title}  htmlFor=""><h3>Añada una imagen a su campaña</h3></label>
                <div className={styles.prodImgContainer}>
                  <UploadWidget onImageUpload={handleImageUpload}/>
                  {
                    imageUrl !== "" 
                    ? <img className={styles.campaignImg} src={imageUrl} alt="campaignImg" /> 
                    : null
                  }
                </div>

               <div className={styles.selectsConteiner}>
                <div className={styles.state}>
                <label className={styles.title}  htmlFor=""><h3>¿En que provincia se encuntra su campaña?</h3></label>
                <span>{errors.StateId}</span>
                <select className={styles.provSelect} onChange={handleInputChange} name="StateId" id="">
                <option value="">Provincia</option>
                {
                  states.map((e, index)=> <option value={e.id} key={index}>
                    {e.name}
                  </option>)
                }
                </select>
               </div>
                 
              <div>
              <label className={styles.title}  htmlFor=""><h3>¿Cuando finaliza su campaña?</h3></label>
                
              
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

                <h3 className={styles.title} >¿Cuales son las razones principales por las que va a recaudar dinero?</h3>
                <span>{errors.CategoryId}</span>
              <select onChange={handleInputChange} name="CategoryId" id="">
                {
                  category.map((e,index)=><option key={index} value={e.id}>
                    {e.name}
                  </option>)
                }
              </select>

              <h3 className={styles.title} >¿Cuanto le gustaria recaudar?</h3>
              <span className={styles.spanAmount}>{errors.finalAmount}</span>
             <div className={styles.monto}>
             
              <p className={styles.peso}>$</p>
              <input onChange={handleInputChange} name="finalAmount" className={styles.nameAndPrice} type="number" />
                <p className={styles.ars}>ARS</p>
             </div>
             <div className={styles.monto}>
             
             <p className={styles.peso}>Ingrese su CBU</p>
             <input onChange={handleInputChange} name="addCbu" className={styles.nameAndPrice} type="number" />
            </div>
             <div className={styles.sendCont}> <input disabled={isDisabled}className={styles.send}type="submit" /></div>
            </form>
        </div>
    </div>)
}