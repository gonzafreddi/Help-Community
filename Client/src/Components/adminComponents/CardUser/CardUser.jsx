import styles from "./cardUser.module.css"

export function CardUser({ user, onBanOrDelete, onGrantAdmin, onUnban, onRemoveAdmin }){

    const handleBanOrDelete = () => {
        onBanOrDelete(user.id);
      };
    
      const handleGrantAdmin = () => {
        onGrantAdmin(user.id);
      };

      const handleUnban = () => {
        onUnban(user.id);
      };
    
      const handleRemoveAdmin = () => {
        onRemoveAdmin(user.id);
      };



    return(<div className={styles.userConteiner}>
        
        <div className={styles.userData}>
            <div className={styles.iconConteiner}><img src={user.image} alt="" /></div>
            <div className={styles.text}>
            <h5>{user.name}</h5>
            <p>{user.email}</p>
            <button onClick={handleBanOrDelete}>Banear/Borrar</button>
            <button onClick={handleUnban}>Habilitar</button>
            <button onClick={handleGrantAdmin}>Dar Acceso de Administrador</button>
            <button onClick={handleRemoveAdmin}>Quitar Acceso de Administrador</button>
            </div>
            {/* <div className={styles.button}><button>{check}</button></div> */}
        </div>
    </div>)
}