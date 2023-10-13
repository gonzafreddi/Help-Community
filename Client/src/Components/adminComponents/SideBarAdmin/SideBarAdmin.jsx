import React, { useState } from 'react';
import styles from './sidebarAdmin.module.css';
import { FaUsers, FaBox, FaLayerGroup, FaChartBar, FaEnvelope } from 'react-icons/fa';

const SideBarAdmin = () => {
  const [expanded, setExpanded] = useState(false);
  const [selectedItem, setSelectedItem] = useState('Dashboard'); // Puedes establecer el elemento inicialmente seleccionado

  const toggleSidebar = () => {
    setExpanded(!expanded);
  };

  const handleItemClick = (itemName) => {
    setSelectedItem(itemName);
  };

  return (
    <div className={`${styles.sidebar} ${expanded ? styles.expanded : styles.collapsed}`}>
      <div className={styles.toggleButton} onClick={toggleSidebar}>
        {expanded ? <span>&larr;</span> : <span>&rarr;</span>}
      </div>
      <ul className={styles.menu}>
      <li>
        <a href="#"   onClick={() => handleItemClick('Dashboard')}
            className={selectedItem === 'Dashboard' ? styles.selected : ''}>
        {expanded ? (
              <>
                <FaChartBar size={20} />
                <span>Dashboard</span>
              </>
            ) : (
              <FaChartBar size={20} />
            )}
          </a>
        </li>

        <li>
          <a href="#" onClick={() => handleItemClick('Usuarios')}
            className={selectedItem === 'Usuarios' ? styles.selected : ''}
          >
          {expanded ? (
              <>
                <FaUsers size={20} />
                <span >Usuarios</span>
              </>
            ) : (
              <FaUsers size={20} />
            )}
          </a>
        </li>
        <li>
        <a href="/admin/products"   onClick={() => handleItemClick('Productos')}
            className={selectedItem === 'Productos' ? styles.selected : ''}>
        {expanded ? (
              <>
                <FaBox size={20} />
                <span>Productos</span>
              </>
            ) : (
              <FaBox size={20} />
            )}
          </a>
          <ul className={styles.submenu}>
            <li>
              <a href="/admin/products/create"
              onClick={() => handleItemClick('Crear producto')}
              className={selectedItem === 'Crear producto' ? styles.selected : ''}
              >Crear producto</a>
            </li>
            <li>
              <a href="#"
              onClick={() => handleItemClick('Editar producto')}
              className={selectedItem === 'Editar producto' ? styles.selected : ''}
              >Editar producto</a>
            </li>
          </ul>
        </li>
        <li>
        <a href="#"   onClick={() => handleItemClick('Campañas')}
            className={selectedItem === 'Campañas' ? styles.selected : ''}>
        {expanded ? (
              <>
                <FaLayerGroup size={20} />
                <span>Campañas</span>
              </>
            ) : (
              <FaLayerGroup size={20} />
            )}
          </a>
          <ul className={styles.submenu}>
            <li>
              <a href="/admin/create/campaign"
              onClick={() => handleItemClick('Crear campaña')}
              className={selectedItem === 'Crear campaña' ? styles.selected : ''}
              >Crear Campaña</a>
            </li>
            <li>
              <a href="#"
              onClick={() => handleItemClick('Editar campaña')}
              className={selectedItem === 'Editar campaña' ? styles.selected : ''}
              >Editar Campaña</a>
            </li>
          </ul>
        </li>
        
        <li>
        <a href="#"   onClick={() => handleItemClick('Mailing')}
            className={selectedItem === 'Mailing' ? styles.selected : ''}>
        {expanded ? (
              <>
                <FaEnvelope size={20} />
                <span>Mailing</span>
              </>
            ) : (
              <FaEnvelope size={20} />
            )}
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SideBarAdmin;

















// import React, { useState } from "react";
// import { AiOutlineUser } from "react-icons/ai";
// import { LuPackageSearch } from "react-icons/lu";
// import { BsGraphUp } from "react-icons/bs";
// import styles from "./sidebarAdmin.module.css"; // Importa los estilos CSS Module

// function SideBarAdmin() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [productsMenuOpen, setProductsMenuOpen] = useState(false);
//   const [campaignsMenuOpen, setCampaignsMenuOpen] = useState(false);

//   const toggleSidebar = () => {
//     setIsOpen(!isOpen);
//   };

//   const toggleProductsMenu = () => {
//     setProductsMenuOpen(!productsMenuOpen);
//   };

//   const toggleCampaignsMenu = () => {
//     setCampaignsMenuOpen(!campaignsMenuOpen);
//   };

//   return (
//     <div className={`${styles.sidebar} ${isOpen ? styles.open : ""}`}> 
//       <div className={styles["toggle-button"]} onClick={toggleSidebar}>
//       </div>
//       <ul>
//         <li className={styles["mb-6"]}>
//           <a href="/admin/users" className={styles.title}>
//             <AiOutlineUser className={styles["icon"]} />
//             Users
//           </a>
//         </li>

//         <li className={styles["mb-6"]}>
//           <div
//             className={`flex items-center cursor-pointer ${
//               productsMenuOpen ? styles.open : ""
//             }`}
//             onClick={toggleProductsMenu}
//           >
//             <LuPackageSearch className={styles["icon"]} />
//             Productos
//           </div>
//           <ul className={`${styles.submenu} ${productsMenuOpen ? styles.open : ""}`}>
//             <li className={styles["mb-6"]}>
//               <a href="/admin/products/create" className={`flex items-center ${styles["icon"]}`}>
//                 Crear Productos
//               </a>
//             </li>
//             <li className={styles["mb-6"]}>
//               <a href="/admin/products" className={`flex items-center ${styles["icon"]}`}>
//                 Editar Productos
//               </a>
//             </li>
//           </ul>
//         </li>

//         <li className={styles["mb-6"]}>
//           <div
//             className={`flex items-center cursor-pointer ${
//               campaignsMenuOpen ? styles.open : ""
//             }`}
//             onClick={toggleCampaignsMenu}
//           >
//             <LuPackageSearch className={styles["icon"]} />
//             Campañas
//           </div>
//           <ul className={`${styles.submenu} ${campaignsMenuOpen ? styles.open : ""}`}>
//             <li className={styles["mb-6"]}>
//               <a href="/admin/Campaign/create" className={`flex items-center ${styles["icon"]}`}>
//                 Crear Campaña
//               </a>
//             </li>
//             <li className={styles["mb-6"]}>
//               <a href="/admin/Campaign" className={`flex items-center ${styles["icon"]}`}>
//                 Editar Campaña
//               </a>
//             </li>
//           </ul>
//         </li>

//         <li className={styles["mb-6"]}>
//           <a href="/admin/dashboard" className={`flex items-center ${styles["icon"]}`}>
//             <BsGraphUp className={styles["icon"]} />
//             Dashboard
//           </a>
//         </li>

//         <li className={styles["mb-6"]}>
//           <a href="/admin/mailing" className={`flex items-center ${styles["icon"]}`}>
//             <BsGraphUp className={styles["icon"]} />
//             Mailing
//           </a>
//         </li>
//       </ul>
//     </div>
//   );
// }

// export default SideBarAdmin;










// import React, { useState } from "react";
// import { Link,useLocation } from "react-router-dom";
// import { AiOutlineUser } from "react-icons/ai";
// import { LuPackageSearch } from "react-icons/lu";
// import { MdOutlineCreateNewFolder } from "react-icons/md";
// import { BsHouseDoor, BsBoxArrowInRight } from "react-icons/bs";
// import { BsGraphUp } from "react-icons/bs";


// function SidebarAdmin() {

//   const location = useLocation();
  
//   const isActiveLink = (path) => {
//     return location.pathname === path;
//   };

//   const [createMenuOpen, setCreateMenuOpen] = useState(false);

//   const toggleCreateMenu = () => {
//     setCreateMenuOpen(!createMenuOpen);
//   };

//   return (

//     <div className="flex flex-col justify-between w-64 min-h-screen  bg-white text-black px-6 py-4 rounded-lg shadow-xl overflow-auto fontPoppins text-sm mt-10 ">
//       <ul>
//         {/* <li className={`mb-6 flex items-center ${isActiveLink("/home") ? "bg-gray-200 text-black" : ""}`}>
//           <BsHouseDoor className="mr-4" />
//           <Link to="/home">Home</Link>
//         </li> */}

//         {/* <li className={`mb-6 flex items-center ${isActiveLink("/admin/users") ? "bg-gray-200 text-black" : ""}`}>
//           <AiOutlineUser className="mr-4" />
//           <Link to="/admin/users">Users</Link>
//         </li>

//         <li className={`mb-6 flex items-center ${isActiveLink("/admin/products") ? "bg-gray-200 text-black" : ""}`}>
//           <LuPackageSearch className="mr-4" />
//           <Link to="/admin/products">Productos</Link>   //adentro de esta se podrían editar
//         </li> */}

//         <li className="mb-6">
//           <div className="flex items-center cursor-pointer">
//             <MdOutlineCreateNewFolder className="mr-4" />
//             <span onClick={toggleCreateMenu}>Nuevo item</span>
//           </div>
//           {createMenuOpen && (
//             <ul>
//               <li
//                 className={`mb-6 flex items-center ${
//                   isActiveLink("/admin/create/campaign")
//                     ? "bg-gray-200 text-black"
//                     : ""
//                 }`}
//               >
//                 <Link to="/admin/create/campaign">Campaña</Link>
//               </li>
//               <li
//                 className={`mb-6 flex items-center ${
//                   isActiveLink("/admin/products/create")
//                     ? "bg-gray-200 text-black"
//                     : ""
//                 }`}
//               >
//                 <Link to="/admin/products/create">Producto</Link>
//               </li>
//             </ul>
//           )}
//         </li>
// {/* 
//         <li className={`mb-6 flex items-center ${isActiveLink("/admin/dashboard") ? "bg-gray-200 text-black" : ""}`}>
//           <BsGraphUp className="mr-4" />
//           <Link to="/admin/dashboard">Dashboard</Link>
//         </li> */}
//       </ul>

//       {/* <ul>
//         <li className={`mb-6 flex items-center ${isActiveLink("/logout") ? "bg-gray-200 text-black" : ""}`}>
//           <BsBoxArrowInRight className="mr-4" />
//           <Link to="/logout">Logout</Link>
//         </li>
//       </ul> */}
      
//     </div>
//   );
// }

// export default SidebarAdmin;