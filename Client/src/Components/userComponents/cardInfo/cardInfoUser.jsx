import style from "./cardInfouser.module.css"

export function CardInfoUser({h5, p, icon}){
    return(<div className={style.userConteiner}>
        
        <div className={style.userData}>
            <div className={style.iconConteiner}><img src={icon} alt="" /></div>
            <div className={style.text}>
            <h5>{h5}</h5>
            <p>{p}</p>
            </div>
            <div className={style.button}><button>{">"}</button></div>
        </div>
    </div>)
}