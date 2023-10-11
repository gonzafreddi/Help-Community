import React, { useEffect, useContext, useState } from "react";
import SideBarAdmin from "../Components/SideBarAdmin";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUsers } from "../../../redux/actions/action.js";    //hay que hacer un redux para traer usuarios, asi revisamos si son admin o no
// import { authContext } from "../Context/authContext";

function Admin() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user1 = useSelector((state) => state.users);

  const [habilitado, setHabilitado] = useState(true);
  let userEnStorage = JSON.parse(localStorage.getItem("user"));

  console.log("ESTO ES USER EN STORAGE LUEGO DE CERRAR SESION:", userEnStorage);
  useEffect(() => {
    dispatch(getUsers());
    if (user1) {
      if (!userEnStorage) {
        console.log("que onda");

        navigate("/home");
        setTimeout(function () {
          window.alert("Acceso bloqueado :)");
        }, 1000);
      } else if (userEnStorage.userType === "user") {
        console.log("entra en el segundod e admin");
        navigate("/home");
        setTimeout(function () {
          window.alert("Acceso bloqueado :)");
        }, 1000);
      }
    } else console.log("BIENVENIDO");
  }, []);

  return (
    <>
      {userEnStorage && userEnStorage.userType === "admin" ? (
        <>
          <div>
            <SideBarAdmin />
          </div>
        </>
      ) : (
        ""
      )}
    </>
  );
}
export default Admin;



// Llama a dispatch(fetchUsers()) para obtener una lista de usuarios a través de Redux.
// Comprueba si existe un usuario almacenado en el localStorage del navegador.
// Si no hay un usuario en el almacenamiento local (userEnStorage es null o undefined), redirige al usuario a la página de inicio /home y muestra una alerta.
// Si hay un usuario en el almacenamiento local, comprueba si el usuario tiene un perfil con el valor 1. Si es así, nuevamente redirige al usuario a la página de inicio y muestra una alerta.
// Si no se cumple ninguna de las condiciones anteriores, muestra "BIENVENIDO" en la consola.
// Renderizado condicional:

// En la parte de retorno (return), el componente se renderiza condicionalmente.
// Si existe un usuario en el almacenamiento local y ese usuario tiene un perfil con el valor 2, se renderiza el componente NavBar y SideBarAdmin. Esto sugiere que esta parte del código es específica para los usuarios con perfil de administrador.
// En resumen, el componente Admin parece estar diseñado para proporcionar una interfaz y lógica de control para usuarios con perfiles de administrador. Realiza comprobaciones de autenticación y perfil de usuario antes de permitir el acceso a la interfaz de administrador. Si el usuario no cumple con ciertas condiciones, se le redirige a la página de inicio y se muestra una alerta. Este código se integra con otras partes de tu aplicación, como Redux y el enrutamiento, para lograr este comportamiento.





