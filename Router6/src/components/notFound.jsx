import React from 'react';
import { NavLink } from 'react-router-dom';

const NotFound = () => {
  return (
    <h3>Страница не сущетсвует. Перейти на главную <NavLink to="/">Home</NavLink> </h3>
    );
}

export default NotFound;
