import React from 'react';
import './layout.scss';
import HeaderNav from './headerNav';
import FooterNav from './footerNav';
import FilterNav from './filterNav';
import Banner from '../common/banner/banner';
import Search from './search';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <div className='container container-dark container-header'>
        <header>
          <HeaderNav />
        </header>
      </div>
      <div className='container container-filter'>
        <div className='header-filter'>
          <FilterNav />
          <Search />
        </div>
      </div>
      <div>
        <Banner />
      </div>
      <div className='container container-dark'>
        <main>
          <Outlet />
        </main>
      </div>
      <div className='container container-dark container-footer'>
        <footer>
          <FooterNav />
        </footer>
      </div>
    </>
  );
};

export default Layout;
