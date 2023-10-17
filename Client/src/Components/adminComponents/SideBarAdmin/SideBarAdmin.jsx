import React, { useState } from 'react';
import styles from './sideBarAdmin.module.css';
import { FaUsers, FaBox, FaLayerGroup, FaChartBar, FaEnvelope, FaShoppingBag } from 'react-icons/fa';

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
        <a href="/admin/dashboard"   onClick={() => handleItemClick('Dashboard')}
            className={selectedItem === 'Dashboard' ? styles.selected : ''}>
        {expanded ? (
              <>
                <FaChartBar size={20} />
                <span id={styles.blanco}>Dashboard</span>
              </>
            ) : (
              <FaChartBar size={20} />
            )}
          </a>
        </li>

        <li>
          <a href="/admin/users" onClick={() => handleItemClick('Usuarios')}
            className={selectedItem === 'Usuarios' ? styles.selected : ''}
          >
          {expanded ? (
              <>
                <FaUsers size={20} />
                <span id={styles.blanco} >Usuarios</span>
              </>
            ) : (
              <FaUsers size={20} />
            )}
          </a>
        </li>

        <li>
          <a href="/admin/allbuys" onClick={() => handleItemClick('Ventas')}
            className={selectedItem === 'Ventas' ? styles.selected : ''}
          >
          {expanded ? (
              <>
                <FaShoppingBag size={20} />
                <span id={styles.blanco} >Ventas</span>
              </>
            ) : (
              <FaShoppingBag size={20} />
            )}
          </a>
        </li>

        <li>
        <a href="/admin/products"   onClick={() => handleItemClick('Productos')}
            className={selectedItem === 'Productos' ? styles.selected : ''}>
        {expanded ? (
              <>
                <FaBox size={20} />
                <span id={styles.blanco}>Productos</span>
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
                <span id={styles.blanco}>Campañas</span>
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
                <span id={styles.blanco}>Mailing</span>
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