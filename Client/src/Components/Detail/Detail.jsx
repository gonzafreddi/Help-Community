import styles from "./Detail.module.css"
import ClipboardJS from "clipboard"

import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { getDetailCampaign } from "../../redux/actions/action"
import { useDispatch, useSelector } from "react-redux/";
import imgAbout  from "../../utils/images/negocio.png"

new ClipboardJS(".button");

export const Detail = () => {
const dispatch = useDispatch()
const name = useParams()
const campDetail = useSelector((state)=>state.detailCampaign)
console.log("name.id: ", name.id)

  useEffect(()=>{
    dispatch(getDetailCampaign(name.id))
    return()=>{
      dispatch(getDetailCampaign())
    }
  },[])


 
  
  console.log("campdDetail: ", campDetail)
  //me susubribo al estdo global para consumir la info del detalle
  
  const capitalizeFirstLetter = (str) => {
    if (typeof str !== 'string') {
        return str; // Si no es una cadena, devuelve el valor original
    }

    if (str.length === 0) {
        return str;
    }

    const firstLetter = str.charAt(0).toUpperCase();
    const restOfString = str.slice(1).toLowerCase();
    return firstLetter + restOfString;
};


  return (
    <div className={styles.conteiner}>
      <div className={styles.imageConteiner} >
        
        
        <div className={styles.imgCont}>
        <div className={styles.background}></div>
          <img className={styles.imgCampaign} src="https://images.unsplash.com/photo-1594708767771-a7502209ff51?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM3fHxjYW1wYSVDMyVCMWElMjBvbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt=""/>
        
        </div>
        <div className={styles.infoCont}>
          <div className={styles.title}><h1>{capitalizeFirstLetter(campDetail[0]?.ong)}</h1></div>
          {/* <div className={style.hoursCont}>
            <div className={style.counter}></div>
          </div> */}
        </div>
      </div>

      <div className={styles.about}>
        <div className={styles.description}>
          <div><h2>¿Quienes Somos?</h2></div>
          <div>Somos un grupo de apasionados desarrolladores que creen en el poder de la tecnología para cambiar vidas. Nuestra misión es utilizar nuestras habilidades en desarrollo web para crear una plataforma que haga que la ayuda y el apoyo estén al alcance de todos. Queremos conectar a quienes pueden brindar ayuda con aquellos que la necesitan, sin importar dónde se encuentren en el mundo.

          En nuestro proyecto, creamos una plataforma en línea accesible y fácil de usar. Desarrollamos herramientas y servicios que facilitan la colaboración y el apoyo mutuo. Conectamos a personas necesitadas con voluntarios y donantes dispuestos a ayudar.

          Nuestros valores se basan en la compasión. Nos importa profundamente el bienestar de los demás y creemos que la tecnología puede ser una fuerza para el bien en el mundo. Trabajamos juntos y con la comunidad para lograr un impacto positivo.

          Si compartes nuestra pasión por utilizar la tecnología para ayudar a quienes lo necesitan, te invitamos a unirte a nuestro proyecto. Juntos, podemos marcar la diferencia en la vida de muchas personas y construir un mundo más solidario.

         Contáctanos si deseas ser parte de este esfuerzo o si tienes alguna pregunta. Estamos aquí para construir un futuro más brillante y compasivo.</div>
        </div>
        <div className={styles.imgAbout}><img src={imgAbout} alt="" /></div>
        
      </div>
    
      <div className={styles.campConteiner}>
      <div className={styles.titleCamp}><h2>{campDetail[0]?.name}</h2>
            <p>{campDetail[0]?.description}</p>
      </div>
        
        <div className={styles.imgCamp}><img src="https://img.freepik.com/foto-gratis/usted-puede-ayudar-dar-concepto-donacion-bienestar_53876-121039.jpg?w=2000" alt="" /></div>
        <div className={styles.descriptionCamp}>
          <p>{campDetail[0]?.long_description}</p>
        </div>
      </div>

      <div className={styles.cardDonationConteiner}>
        <div className={styles.cardDonation}>
          <div className={styles.titleCard}>
          <p id="cbu">CBU: 123456789087654321123</p>
          <button data_clipboard-action="copy" data-clipboard-text="123456789087654321123"><i className="material-icons">content_copy</i></button>
          <h5>ALIAS: HELPCOMMUNITY</h5>
          </div>
          {/* <form action="">
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
          </form> */}
        </div>
      </div>
      
    </div>
  )
}
