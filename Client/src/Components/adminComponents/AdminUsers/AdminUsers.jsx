import styles from "./adminUsers.module.css";
import { CardUser } from "../CardUser/CardUser";
import { getUsers, banOrDeleteUser, grantAdminAccess } from '../../../redux/actions/action.js'; // Importa la acción getUsers
import React, { useState, useEffect } from 'react';
import Pagination from "../../Pagination/Pagination";
import { useDispatch, useSelector } from 'react-redux';

export function AdminUsers() {
  
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(getUsers());
  }, [dispatch]);

  const users=useSelector((state)=>state.users);


  const [page, setPage] = useState(1);

  // Número de tarjetas por página
  const cardsPerPage = 6;
  const totalItems = users.length;
  // Función para obtener las tarjetas en la página actuaw

    const startIndex = (page - 1) * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;
    const displayedData = users.slice(startIndex, endIndex);


    const handleBanOrDelete = (userId) => {
        // Llama a la acción para banear/borrar al usuario
        dispatch(banOrDeleteUser(userId));
      };
    
      const handleGrantAdmin = (userId) => {
        // Llama a la acción para otorgar acceso de administrador al usuario
        dispatch(grantAdminAccess(userId));
      };
    
  
 
  return (
    <div className={styles.container}>
      <div className={styles.cards}>
        <h1>Usuarios</h1>
        <div className={styles.cardCont}>
          {displayedData.map((user) => (
              <CardUser
                key={user.id}
                user={user}
                onBanOrDelete={handleBanOrDelete}
                onGrantAdmin={handleGrantAdmin}
              />
            )
          ) }
          
        </div>
        <div className={styles.pagination}><Pagination  page={page} setPage={setPage} itemsPerPage={cardsPerPage} totalItems={totalItems}/></div>
      </div>
    
    </div>
  );
}
