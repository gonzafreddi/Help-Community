import React from 'react';
import { Link } from 'react-router-dom';

const HomeUnauthorized = () => (
  <div>
    <p>Acceso bloqueado. No tienes permisos para acceder a esta página.</p>
    <Link to="/">Volver a la página de inicio</Link>
  </div>
);

export default HomeUnauthorized;