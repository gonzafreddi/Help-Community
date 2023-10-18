import styles from "./cardUser.module.css";
import { useState } from "react";

export function CardUser({ user, onBanOrDelete, onGrantAdmin, onUnban, onRemoveAdmin }) {
  const [accountStatus, setAccountStatus] = useState(""); // Estado de la cuenta
  const [adminStatus, setAdminStatus] = useState(""); // Estado de administrador

  const handleAccountStatusChange = (event) => {
    const selectedValue = event.target.value;
    setAccountStatus(selectedValue);

    // Llama a la función correspondiente según la selección
    if (selectedValue === "ban") {
      onBanOrDelete(user.id);
    } else if (selectedValue === "enable") {
      onUnban(user.id);
    }
  };

  const handleAdminStatusChange = (event) => {
    const selectedValue = event.target.value;
    setAdminStatus(selectedValue);

    // Llama a la función correspondiente según la selección
    if (selectedValue === "grantAdmin") {
      onGrantAdmin(user.id);
    } else if (selectedValue === "removeAdmin") {
      onRemoveAdmin(user.id);
    }
  };

  return (
    <div className={styles.userConteiner}>
      <div className={styles.userData}>
        <div className={styles.iconConteiner}>
          <img src={user.image} alt="" />
        </div>
        <div className={styles.text}>
          <h5>{user.name}</h5>
          <p>{user.email}</p>
        </div>
      </div>
          <div className={styles.contenedorLista}>
            <div className={styles.listas}>
              <select className={styles.lista2} value={accountStatus} onChange={handleAccountStatusChange}>
                <option value="">Estado de Usuario</option>
                <option value="ban">Baneado</option>
                <option value="enable">Habilitado</option>
              </select>
            </div>
            <div className={styles.listas}>
              <select className={styles.lista2} value={adminStatus} onChange={handleAdminStatusChange}>
                <option value="">Estado de Administrador</option>
                <option value="grantAdmin">Administrador</option>
                <option value="removeAdmin">No Administrador</option>
              </select>
            </div>
          </div>
    </div>
  );
}