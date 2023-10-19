
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { useAuth } from '../../../context/AuthContext.jsx'; // Importa tu contexto de autenticación
import { getUsers } from '../../../redux/actions/action.js'; // Importa la acción getUsers
import { Routes, Route, Navigate, useNavigate, useLocation, Link } from 'react-router-dom';

import axios from 'axios';

import "./adminLayout.css"

import SideBarAdmin from '../SideBarAdmin/SideBarAdmin.jsx'
import Dashboard from '../dashboard/Dashboard.jsx';
import CreateCampaign from '../../createCampaign/CreateCampaign.jsx'
import CreateProduct from '../../createProduct/CreateProduct.jsx'
import { AllBuys }  from '../../buys/allBuysAdmin.jsx'
// import { Products } from '../../Products/Products.jsx'
import { AdminUsers } from '../adminUsers/AdminUsers.jsx';
import MailingForm from '../mailing/mailingForm.jsx';
import AllProducts from '../AllProducts/AllProducts.jsx';




// function AdminLayout() {
//   const auth = useAuth();
//   const { email } = auth.user; // Obtenemos el correo electrónico del usuario actual

//   // const navigate = useNavigate();

//   const [hasAdminPermissions, setHasAdminPermissions] = useState(false);

//   useEffect(() => {
//     // Inicializamos el estado con false
//     setHasAdminPermissions(false);

//     // Realizamos una solicitud al servidor para verificar los permisos de administrador
//     axios.get(`/user/email?email=${email}`)
//       .then((response) => {
//         const data = response.data;
//         console.log(data);

//         if (data.length > 0 && (data[0].userAdmin || data[0].userSuperadmin)) {
//           // Si el usuario tiene permisos, actualizamos el estado
//           setHasAdminPermissions(true);

//           // Puedes realizar una redirección aquí si es necesario
//           // Por ejemplo, Navigate('/admin/dashboard') o algo similar
//         } else {
//           // Si el usuario no tiene permisos, el estado se mantiene en false
//           // return <Navigate to="/home" replace />;
//           // navigate('/home', { replace: true });
          
//         }
//       })
//       .catch((error) => {
//         console.error('Error al verificar permisos de administrador', error);
//       });
//   }, [email]);

//   return (
//     <>
//       {hasAdminPermissions ? (
      
//       <div className="coco">
//         <SideBarAdmin />
//         <div className="content">

//           <Routes>
//             <Route path="/products" element={<Products />} />
//             <Route path="/products/create" element={<CreateProduct />} />
//             <Route path='/create/campaign' element={<CreateCampaign />} />
//             <Route path='/allbuys' element={<AllBuys />} />
//             <Route path="/dashboard" element={<Dashboard />} />
//             <Route path="/users" element={<AdminUsers />}  />
//             <Route path="/mailing" element={<MailingForm />} />
//           </Routes>
     
//         </div>
//       </div>

//       ) : null} 
//     </>
//   );
// }

// export default AdminLayout;


function AdminLayout() {
  const auth = useAuth();
  const { email } = auth.user; // Obtenemos el correo electrónico del usuario actual

  const [hasAdminPermissions, setHasAdminPermissions] = useState(null);

  useEffect(() => {
    setHasAdminPermissions(null);

    axios.get(`/user/email?email=${email}`)
      .then((response) => {
        const data = response.data;

        if (data.length > 0 && (data[0].userAdmin || data[0].userSuperadmin)) {
          setHasAdminPermissions(true);
        } else {
          setHasAdminPermissions(false);
        }
      })
      .catch((error) => {
        console.error('Error al verificar permisos de administrador', error);
      });
  }, [email]);

  if (hasAdminPermissions === null) {
    return <p id="text">Cargando permisos...</p>;
  } else if (hasAdminPermissions) {
    return (
      <div className="coco">
        <SideBarAdmin />
        <div className="content">
          <Routes>
            <Route path="/allProducts" element={<AllProducts />} />
            <Route path="/products/create/:productName?" element={<CreateProduct />} />
            <Route path='/create/campaign' element={<CreateCampaign />} />
            <Route path='/allbuys' element={<AllBuys />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/users" element={<AdminUsers />}  />
            <Route path="/mailing" element={<MailingForm />} />
          </Routes>
        </div>
      </div>
    );
  } else {
    return <p id="text">Error en el acceso. <Link to="/">Volver a la página de inicio</Link></p>;
    
  }
}

export default AdminLayout;




// function AdminLayout() {
//   const auth = useAuth();
//   const { email } = auth.user;
//   const navigate = useNavigate();

//   const [hasAdminPermissions, setHasAdminPermissions] = useState(null);

//   useEffect(() => {
//     async function checkAdminPermissions() {
//       try {
//         const response = await axios.get(`/user/email?email=${email}`);
//         const data = response.data;
//         console.log(data)
//         if (data.length > 0 && (data[0].userAdmin || data[0].userSuperadmin)) {
//           setHasAdminPermissions(true);
//         } else {
//           setHasAdminPermissions(false);
//           navigate('/home', { replace: true });
//         }
//       } catch (error) {
//         console.error('Error al verificar permisos de administrador', error);
//         navigate('/home', { replace: true });
//       }
//     }

//     checkAdminPermissions();
//   }, [email, navigate]);

//   if (hasAdminPermissions === null) {
//     return <p>Cargando permisos...</p>;
//   }

//   if (hasAdminPermissions) {
//     return (
//       <div className="coco">
//         <SideBarAdmin />
//         <div className="content">
//           <Routes>
//             <Route path="/products" element={<Products />} />
//             <Route path="/products/create" element={<CreateProduct />} />
//             <Route path='/create/campaign' element={<CreateCampaign />} />
//             <Route path='/allbuys' element={<AllBuys />} />
//             <Route path="/dashboard" element={<Dashboard />} />
//             <Route path="/users" element={<AdminUsers />}  />
//             <Route path="/mailing" element={<MailingForm />} />
//           </Routes>
//         </div>
//       </div>
//     );
//   }

//   return <p>No tienes permisos para acceder a esta página.</p>;
// }

// export default AdminLayout;







