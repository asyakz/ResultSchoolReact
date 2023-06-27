import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Layout = () => {
  return ( 
    <>
      <NavLink to="">Home </NavLink>
      <NavLink to="users">Users</NavLink>
      <Outlet />
    </> 
  );
}

export default Layout;
