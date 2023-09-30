import style from "./createCampaign.module.css"
import { useSelector } from "react-redux";
import { useEffect, useState } from "react"
export default function CreateCampaign(){


  const states = useSelector((state)=>state.states)

  
  const [info, setInfo] = useState({
    name: "",
    resumeDescr: "", 
    description: "",
    image: "",
    endDate: [],
    category:"",
    finalAmount: "",
    state: ""
  })

  const handleChange = (e) => {
    if (e.target.name === "day" || e.target.name === "month" || e.target.name === "year") {
      // Si el nombre del campo es "day", "month" o "year", actualiza endDate
      setInfo({
        ...info,
        endDate: {
          ...info.endDate,
          [e.target.name]: e.target.value,
        },
      });
    } else {
      // Para otros campos, simplemente actualiza su valor
      setInfo({
        ...info,
        [e.target.name]: e.target.value,
      });
    }
    console.log(e.target.name, e.target.value);
  };
  









console.log(info)
console.log(states)


    return(<div className={style.bodyConteiner}>
        <div className={style.formConteiner}>
         
            <form action="">
            <h1>Crear una campaña</h1>
                <label className={`${style.title}`} htmlFor=""><h3>Colocale un nombre a tu campaña</h3></label>
                <input className={style.nameAndPrice} onChange={handleChange} type="text" name="name" placeholder="Nombre" id="" />

                <label className={`${style.title}`} htmlFor=""><h3>resumen de su descripcion</h3></label>
                <input className={style.nameAndPrice} onChange={handleChange} type="text" name="resumeDescr" id="" />
                <label className={style.title} htmlFor=""><h3>Describe tu campaña</h3></label>
                <textarea onChange={handleChange} name="description" id="" cols="30" rows="10" readonly></textarea>

                <label className={style.title}  htmlFor=""><h3>Añade una imagen a tu campaña</h3></label>
                <button className={style.send}>Subir Foto</button>

               <div className={style.selectsConteiner}>
                <div className={style.state} >
                <label className={style.title}  htmlFor=""><h3>¿En que provincia se encuntra tu campaña?</h3></label>

                <select onChange={handleChange} name="state" id="">
                <option value="">Provincia</option>
                <option value="buenos aires">buenos aires</option>
                {
                  states.map((e, index)=> <option key={index}>
                    {e.name}
                  </option>)
                }
                </select>

                </div>
                 
              <div>
              <label className={style.title}  htmlFor=""><h3>¿Cuando finaliza tu campaña?</h3></label>
                
              
              
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
                </select>
              
              
              
              </div>

               </div>
              

                <h3 className={style.title} >¿Cuales son las razones principales por las que vas a recaudar dinero</h3>
                
              <select onChange={handleChange} name="category" id="">
                <option value="">salud</option>
                <option value="">hambre</option>
                <option value="">razismo</option>
              </select>
              <h3 className={style.title} >¿Cuanto te gustaria recaudar?</h3>
             <div className={style.monto}>
             
              <p className={style.peso}>
                $
              </p>
              <input onChange={handleChange} name="finalAmount" className={style.nameAndPrice} type="number" />
                <p className={style.ars}>ARS</p>
             </div>
          

           <div className={style.sendCont}> <input className={style.send}type="submit" /></div>
            </form>
        </div>
    </div>)
}