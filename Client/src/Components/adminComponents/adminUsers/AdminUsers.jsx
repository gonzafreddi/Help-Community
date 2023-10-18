import styles from "./adminUsers.module.css";
import { CardUser } from "../CardUser/CardUser";
import { getUsers, banOrDeleteUser, grantAdminAccess, unbanUser, removeAdminAccess } from '../../../redux/actions/action.js'; // Importa la acción getUsers
import React, { useState, useEffect } from 'react';
import Pagination from "../../Pagination/Pagination";
import { useDispatch, useSelector } from 'react-redux';
import UsersSB from "../../SearchBar/UsersSB";

export function AdminUsers() {
  
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(getUsers());
  }, [dispatch]);

  const users=useSelector((state)=>state.users);

  const [searchInput, setSearchInput] = useState('');

  const handleInputChange = (event) => {
    setSearchInput(event.target.value)
  }
  
  const filterUsers = (searchInput) => {
    if (!searchInput) {
      // Si el input está vacío, mostramos todos los usuarios
      return users;
    }

    // Filtramos los usuarios basados en el searchInput
    const filteredUsers = users.filter(user => {
      const { id, name, email } = user;
      const lowerCaseInput = searchInput.toLowerCase();

      // Comprobamos si el id, nombre o email contiene el input de búsqueda
      return id.includes(lowerCaseInput) ||
             name.toLowerCase().includes(lowerCaseInput) ||
             email.toLowerCase().includes(lowerCaseInput);
    });

    return filteredUsers;
  };


  const [page, setPage] = useState(1);

  // Número de tarjetas por página
  const cardsPerPage = 6;
  const totalItems = users.length;
  // Función para obtener las tarjetas en la página actuaw

  const startIndex = (page - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;
  const displayedData = filterUsers(searchInput).slice(startIndex, endIndex);


    const handleBanOrDelete = (userId) => {
        // Llama a la acción para banear/borrar al usuario
        dispatch(banOrDeleteUser(userId));
    };
  
    const handleGrantAdmin = (userId) => {
      // Llama a la acción para otorgar acceso de administrador al usuario
      dispatch(grantAdminAccess(userId));
    };

    const handleUnban = (userId) => {
      // Llama a la acción para habilitar al usuario
      dispatch(unbanUser(userId));
    };
  
    const handleRemoveAdmin = (userId) => {
      // Llama a la acción para otorgar acceso de administrador al usuario
      dispatch(removeAdminAccess(userId));
    };
  
 
  return (
    <div className={styles.container}>
      <div className={styles.cards}>
        <h1>Usuarios</h1>
        <UsersSB handleInputChange={handleInputChange}/>
        <div className={styles.cardCont}>
          {displayedData.map((user) => (
              <CardUser
                key={user.id}
                user={user}
                onBanOrDelete={handleBanOrDelete}
                onGrantAdmin={handleGrantAdmin}
                onUnban={handleUnban}
                onRemoveAdmin={handleRemoveAdmin}
              />
            )
          ) }
          
        </div>
        <div className={styles.pagination}><Pagination  page={page} setPage={setPage} itemsPerPage={cardsPerPage} totalItems={totalItems}/></div>
      </div>
    
    </div>
  );
}