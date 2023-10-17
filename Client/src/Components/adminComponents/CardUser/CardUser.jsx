import styles from "./cardUser.module.css"

export function CardUser({ user, onBanOrDelete, onGrantAdmin }){

    const handleBanOrDelete = () => {
        onBanOrDelete(user.id);
      };
    
      const handleGrantAdmin = () => {
        onGrantAdmin(user.id);
      };

    return(<div className={styles.userConteiner}>
        
        <div className={styles.userData}>
            <div className={styles.iconConteiner}><img src={user.image} alt="" /></div>
            <div className={styles.text}>
            <h5>{user.name}</h5>
            <p>{user.email}</p>
            <button  onClick={handleBanOrDelete}>Banear/Borrar</button>
            <button onClick={handleGrantAdmin}>Dar Acceso de Administrador</button>
            </div>
            {/* <div className={styles.button}><button>{check}</button></div> */}
        </div>
    </div>)
}