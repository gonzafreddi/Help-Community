// import React, { useEffect, useContext, useState } from "react";
// import SideBarAdmin from "../SideBarAdmin/SideBarAdmin";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate, Outlet } from "react-router-dom";
// import { getUsers } from "../../../redux/actions/action.js";    //hay que hacer un redux para traer usuarios, asi revisamos si son admin o no
// // import { authContext } from "../Context/authContext";
// import Dashboard from "../Dashboard/Dashboard";

import React, { useEffect, useState } from 'react';
import { useAuth } from '../../../context/AuthContext.jsx'; // Importa tu contexto de autenticación
import { getUsers } from '../../../redux/actions/action.js'; // Importa la acción getUsers
import { Navigate, Route, Routes } from 'react-router-dom';
import "./adminLayout.css"
import { BrowserRouter as Switch } from 'react-router-dom';
import SideBarAdmin from '../../adminComponents/SideBarAdmin/SideBarAdmin'
import Dashboard from '../../adminComponents/Dashboard/Dashboard'
import CreateCampaign from '../../../Components/createCampaign/CreateCampaign'
import CreateProduct from '../../../Components/createProduct/CreateProduct'
import { AllBuys }  from '../../../Components/buys/allBuysAdmin'
import { Products } from '../../../Components/Products/Products'

function AdminLayout() {
  const [isAdmin, setIsAdmin] = useState(false);
  const { currentUser } = useAuth(); // Asumiendo que tienes un contexto de autenticación

  useEffect(() => {
    // Realiza una llamada para obtener todos los usuarios de la base de datos
    const fetchUsers = async () => {
      try {
        const users = await getUsers(); // Reemplaza con tu lógica para obtener los usuarios

        // Verifica si el usuario autenticado tiene "userAdmin: true"
        if (currentUser && (users.find(user => user.id === currentUser.id)?.userAdmin || users.find(user => user.id === currentUser.id)?.userSuperadmin)) {
          setIsAdmin(true);
        }
      } catch (error) {
        console.error('Error al obtener la lista de usuarios:', error);
      }
    };

    fetchUsers();
  }, [currentUser]);

  if (!isAdmin) {
    // Redirige al usuario no autorizado a "/home"
    return <Navigate to="/home" replace />;

    // setTimeout(function () {
    //   window.alert("Acceso bloqueado :)");
    //   // Redirige al usuario a la página deseada después del mensaje de alerta
    //   window.location.href = "/products"; // Cambia "/products" por la ruta que desees
    // }, 1000);
    // return null; // O simplemente regresa null para que no se muestre nada en la página
  }

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


