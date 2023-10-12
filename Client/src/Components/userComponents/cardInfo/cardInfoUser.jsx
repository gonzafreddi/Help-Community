import style from "./cardInfoUser.module.css"
export function CardInfoUser({h5, p, icon, check}){
    return(<div className={style.userConteiner}>
        
        <div className={style.userData}>
            <div className={style.iconConteiner}><img src={icon} alt="" /></div>
            <div className={style.text}>
            <h5>{h5}</h5>
            <p>{p}</p>
            </div>
            <div className={style.button}><button>{check? <img src={check} alt="" /> : ">"}</button></div>
        </div>
    </div>)
}