import style from "./Detail.module.css"
import imgAbout from "../../utils/images/negocio.png"
export const Detail = () => {
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
          <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum architecto esse consequuntur dolorum, voluptatibus, fugiat doloribus, dignissimos ex temporibus fuga animi pariatur ad iste deserunt commodi nesciunt quibusdam. Numquam, rem! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste animi similique provident vel exercitationem cupiditate ullam repudiandae suscipit quibusdam minima, sint consectetur impedit ipsum illum vitae doloremque voluptatem molestias officia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum hic minus porro assumenda praesentium, ex iure illum amet a aspernatur quae laboriosam vero ad autem architecto recusandae aliquam itaque magni.</div>
        </div>
        <div className={style.imgAbout}><img src={imgAbout} alt="" /></div>
        
      </div>
    
      <div className={style.campConteiner}>
      <div className={style.titleCamp}><h2>Nombre de la campaña</h2></div>
        
        <div className={style.imgCamp}><img src="https://i.pinimg.com/474x/a5/4f/3f/a54f3fe153f65d0723ded3e18d9476b4.jpg" alt="" /></div>
        <div className={style.descriptionCamp}>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam aliquid ipsam, fuga ipsa asperiores delectus. Dignissimos quidem dolore eaque aliquid quibusdam fugit adipisci at nostrum sed molestias porro minus fugiat distinctio fuga maiores rem, sit modi. Assumenda eligendi exercitationem vitae quo, molestiae voluptates animi ipsam, et molestias ipsum ratione nihil dolorum magni corporis quod, error dolorem in laudantium qui architecto alias. In eveniet, velit perspiciatis repellendus asperiores suscipit dolore iste dolor sapiente nihil. Minima nulla, voluptate eius nam, ab beatae nobis doloremque, modi neque vero quod cumque. Exercitationem accusamus non quisquam blanditiis quaerat perferendis magni sint velit commodi aspernatur illum assumenda quidem suscipit molestiae, totam obcaecati quod rem debitis sequi dolore rerum in! Delectus exercitationem eligendi ullam impedit, ratione cum facere provident quasi quidem nihil reprehenderit eveniet molestias in dolorem eum. Non accusamus incidunt magni porro aliquam minus nam reprehenderit id sapiente facilis, fuga rem libero neque ab maiores at!</p>
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
