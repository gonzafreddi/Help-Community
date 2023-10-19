import styles from "./cardInfoUser.module.css"
export function CardInfoUser({h5, p, icon, check}){
    console.log(icon)
    return(<div className={styles.userConteiner}>
        
        <div className={styles.userData}>
            <div className={styles.iconConteiner}><img src={icon} alt="" /></div>
            <div className={styles.text}>
            <h5>{h5}</h5>
            <p>{p}</p>
            </div>
            <div className={styles.button}><button>{check}</button></div>
        </div>
    </div>)
}