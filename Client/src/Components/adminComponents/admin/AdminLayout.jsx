// import React, { useEffect, useContext, useState } from "react";
// import SideBarAdmin from "../SideBarAdmin/SideBarAdmin";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate, Outlet } from "react-router-dom";
// import { getUsers } from "../../../redux/actions/action.js";    //hay que hacer un redux para traer usuarios, asi revisamos si son admin o no
// // import { authContext } from "../Context/authContext";
// import Dashboard from "../Dashboard/Dashboard";

import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { selectUser } from '../../../redux/reducer/reducer.js'; // Asegúrate de importar correctamente el selector de usuario

import { useAuth } from '../../../context/AuthContext.jsx'; // Importa tu contexto de autenticación
import { getUsers } from '../../../redux/actions/action.js'; // Importa la acción getUsers
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import "./adminLayout.css"

import SideBarAdmin from '../SideBarAdmin/SideBarAdmin.jsx'
import Dashboard from '../dashboard/Dashboard.jsx';
import CreateCampaign from '../../createCampaign/CreateCampaign.jsx'
import CreateProduct from '../../createProduct/CreateProduct.jsx'
import { AllBuys }  from '../../buys/allBuysAdmin.jsx'
import { Products } from '../../Products/Products.jsx'
import { AdminUsers } from '../adminUsers/AdminUsers.jsx';
import MailingForm from '../mailing/mailingForm.jsx';


function LoadingIndicator() {
  return <div>Cargando...</div>;
}

function AdminLayout() {
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(getUsers());
  }, [dispatch]);

  const user = useSelector((state) => state.users);
  console.log(user);
  const navigate = useNavigate();
  const location = useLocation();

  // Comprueba si el usuario está autenticado y tiene permisos de administrador
  const isUserAdmin = user && (user.userAdmin || user.userSuperadmin);

  console.log(isUserAdmin);

  // useEffect(() => {
  //   // Redirige al usuario si no está autenticado o no tiene permisos
  //   if (!user) {
  //     navigate('/home'); // Redirige a la página de inicio en caso de usuario no autenticado
  //   } else if (!isUserAdmin) {
  //     navigate('/home'); // Redirige a la página de inicio si el usuario no es administrador
  //   }
  // }, [user, isUserAdmin, navigate]);

  // useEffect(() => {
  //   if (user === undefined) {
  //     // Si el usuario aún no está disponible, muestra el indicador de carga.
  //     return <LoadingIndicator />;
  //   } else {
  //     if (!user) {
  //       navigate('/home');
  //     } else if (!(user.userAdmin || user.userSuperadmin)) {
  //       navigate('/home');
  //     }
  //   }
  // }, [user, navigate]);

  return (
    <>
      <div className="coco">
        <SideBarAdmin />
        <div className="content">
          <Routes>
            <Route path="/products" element={<Products />} />
            <Route path="/products/create" element={<CreateProduct />} />
            <Route path='/create/campaign' element={<CreateCampaign />} />
            <Route path='/allbuys' element={<AllBuys />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/users" element={<AdminUsers />} />
            <Route path="/mailing" element={<MailingForm />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default AdminLayout;


// function Admin() {
//   const navigate = useNavigate();

//   return (
//     <div>
//     <Dashboard/> 
//       <Outlet />
//     </div>
//   );
// }

// export default Admin;




  
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const user1 = useSelector((state) => state.users);

//   const [habilitado, setHabilitado] = useState(true);
  
//   let userEnStorage = JSON.parse(localStorage.getItem("user"));

//   console.log("ESTO ES USER EN STORAGE LUEGO DE CERRAR SESION:", userEnStorage);
//   useEffect(() => {
//     dispatch(getUsers());
//     if (user1) {
//       if (!userEnStorage) {
//         console.log("que onda");

//         navigate("/home");
//         setTimeout(function () {
//           window.alert("Acceso bloqueado :)");
//         }, 1000);
//       } else if (userEnStorage.userAdmin === false) {
//         console.log("entra en el segundod e admin");
//         navigate("/home");
//         setTimeout(function () {
//           window.alert("Acceso bloqueado :)");
//         }, 1000);
//       }
//     } else console.log("BIENVENIDO");
//   }, []);

//   return (
//     <>
//       {userEnStorage && userEnStorage.userAdmin === true ? (
//         <>
//           <div>
//             <SideBarAdmin />
//           </div>
//         </>
//       ) : (
//         ""
//       )}
//     </>
//   );
// }
// export default Admin;



// Llama a dispatch(getUsers()) para obtener una lista de usuarios a través de Redux.
// Comprueba si existe un usuario almacenado en el localStorage del navegador.
// Si no hay un usuario en el almacenamiento local (userEnStorage es null o undefined), redirige al usuario a la página de inicio /home y muestra una alerta.
// Si hay un usuario en el almacenamiento local, comprueba si el usuario tiene un perfil con el valor 1. Si es así, nuevamente redirige al usuario a la página de inicio y muestra una alerta.
// Si no se cumple ninguna de las condiciones anteriores, muestra "BIENVENIDO" en la consola.
// Renderizado condicional:

// En la parte de retorno (return), el componente se renderiza condicionalmente.
// Si existe un usuario en el almacenamiento local y ese usuario tiene un perfil con el valor 2, se renderiza el componente NavBar y SideBarAdmin. Esto sugiere que esta parte del código es específica para los usuarios con perfil de administrador.
// En resumen, el componente Admin parece estar diseñado para proporcionar una interfaz y lógica de control para usuarios con perfiles de administrador. Realiza comprobaciones de autenticación y perfil de usuario antes de permitir el acceso a la interfaz de administrador. Si el usuario no cumple con ciertas condiciones, se le redirige a la página de inicio y se muestra una alerta. Este código se integra con otras partes de tu aplicación, como Redux y el enrutamiento, para lograr este comportamiento.


