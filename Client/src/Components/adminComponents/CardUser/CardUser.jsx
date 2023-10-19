import styles from "./cardUser.module.css";
import { useState } from "react";

export function CardUser({ user, onBanOrDelete, onGrantAdmin, onUnban, onRemoveAdmin }) {
  const [accountStatus, setAccountStatus] = useState(user.userState);
  const [adminStatus, setAdminStatus] = useState(user.userAdmin);

  const toggleAccountStatus = () => {
    if (accountStatus) {
      // Si el usuario estaba habilitado y se deshabilita
      if (adminStatus) {
        // Si el usuario tiene permisos de administrador, quitarlos
        onRemoveAdmin(user.id);
        setAdminStatus(false);
      }
      onBanOrDelete(user.id);
    } else {
      // Si el usuario estaba deshabilitado y se habilita
      onUnban(user.id);
    }
    setAccountStatus(!accountStatus);
  };

  const toggleAdminStatus = () => {
    if (accountStatus) {
      if (adminStatus) {
        onRemoveAdmin(user.id);
      } else {
        onGrantAdmin(user.id);
      }
      setAdminStatus(!adminStatus);
    }
  };

  const getAccountStatusText = () => {
    return accountStatus ? "Deshabilitar Usuario" : "Habilitar Usuario";
  };

  const getAdminStatusText = () => {
    if (!accountStatus) {
      return "Dar permiso de Administrador";
    } else {
      return adminStatus ? "Quitar permiso de Administrador" : "Dar permiso de Administrador";
    }
  };

  const accountStatusClass = accountStatus ? styles.green : styles.red;
  const adminStatusClass = adminStatus ? styles.blue : styles.red;

  return (
    <div className={styles.userConteiner}>
      <div className={styles.userData}>
        <div className={styles.iconConteiner}>
          <img src={user.image} alt="" />
        </div>
        <div className={styles.text}>
          <h5>{user.name}</h5>
          <span className={accountStatusClass}>
            {accountStatus ? "Usuario Habilitado" : "Usuario Deshabilitado"}
          </span>
          <span className={adminStatusClass}>
            {accountStatus && adminStatus ? "Administrador" : null}
          </span>
          <p>{user.email}</p>
        </div>
      </div>
      <div className={styles.contenedorLista}>
        <div className={styles.listas}>
          <button className={styles.listaButton} onClick={toggleAccountStatus}>
            {getAccountStatusText()}
          </button>
        </div>
        <div className={styles.listas}>
          <button className={styles.listaButton} onClick={toggleAdminStatus} disabled={!accountStatus}>
            {getAdminStatusText()}
          </button>
        </div>
      </div>
    </div>
  );
}