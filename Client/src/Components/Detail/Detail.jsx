import style from "./Detail.module.css"

import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { getDetailCampaign } from "../../redux/actions/action"
import { useDispatch, useSelector } from "react-redux/";


export const Detail = () => {
const dispatch = useDispatch()
const name = useParams()
const campDetail = useSelector((state)=>state.detailCampaign)
console.log(name.id)

  useEffect(()=>{
    dispatch(getDetailCampaign(name.id))
    return()=>{
      dispatch(getDetailCampaign())
    }
  },[])


 
  
  console.log(campDetail)
  //me susubribo al estdo global para consumir la info del detalle
  
  


  return (
    <div className={style.conteiner}>
      <div className={style.imageConteiner} >
        
        
        <div className={style.imgCont}>
        <div className={style.background}></div>
          <img className={style.imgCampaign} src="https://images.unsplash.com/photo-1594708767771-a7502209ff51?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM3fHxjYW1wYSVDMyVCMWElMjBvbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt=""/>
        
        </div>
        <div className={style.infoCont}>
          <div className={style.title}><h1>Nombre de la ONG</h1></div>
          {/* <div className={style.hoursCont}>
            <div className={style.counter}></div>
          </div> */}
        </div>
      </div>

      <div className={style.about}>
        <div className={style.description}>
          <div><h2>¿Quienes Somos?</h2></div>
          <div>Somos un grupo de apasionados desarrolladores que creen en el poder de la tecnología para cambiar vidas. Nuestra misión es utilizar nuestras habilidades en desarrollo web para crear una plataforma que haga que la ayuda y el apoyo estén al alcance de todos. Queremos conectar a quienes pueden brindar ayuda con aquellos que la necesitan, sin importar dónde se encuentren en el mundo.

          En nuestro proyecto, creamos una plataforma en línea accesible y fácil de usar. Desarrollamos herramientas y servicios que facilitan la colaboración y el apoyo mutuo. Conectamos a personas necesitadas con voluntarios y donantes dispuestos a ayudar.

          Nuestros valores se basan en la compasión. Nos importa profundamente el bienestar de los demás y creemos que la tecnología puede ser una fuerza para el bien en el mundo. Trabajamos juntos y con la comunidad para lograr un impacto positivo.

          Si compartes nuestra pasión por utilizar la tecnología para ayudar a quienes lo necesitan, te invitamos a unirte a nuestro proyecto. Juntos, podemos marcar la diferencia en la vida de muchas personas y construir un mundo más solidario.

         Contáctanos si deseas ser parte de este esfuerzo o si tienes alguna pregunta. Estamos aquí para construir un futuro más brillante y compasivo.</div>
        </div>
        <div className={style.imgAbout}><img src={imgAbout} alt="" /></div>
        
      </div>
    
      <div className={style.campConteiner}>
      <div className={style.titleCamp}><h2>{campDetail[0]?.name}</h2>
            <p>{campDetail[0]?.description}</p>
      </div>
        
        <div className={style.imgCamp}><img src={campDetail[0]?.image} alt="" /></div>
        <div className={style.descriptionCamp}>
          <p>{campDetail[0]?.long_description}</p>
        </div>
      </div>

      <div className={style.cardDonationConteiner}>
        <div className={style.cardDonation}>
          <div className={style.titleCard}>
          <h5 >¿Cuanto quieres donar?</h5>
          </div>
          <form action="">
            <div className={style.amountBtnConteiner}>
            <button className={style.amountBtn}>$1.000</button>
            <button className={style.amountBtn}>$5.000</button>
            <button className={style.amountBtn}>$10.000</button>
            </div>
            <div className={style.amountInput}>
              <input type="number" />
            </div>
            <div className={style.sendConteiner}>
            <input className={style.sendBtn} type="submit" />
            </div>
          </form>
        </div>
      </div>
      
    </div>
  )
}
