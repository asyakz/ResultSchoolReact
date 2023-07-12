import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './app/components/ui/layout';
import CatalogPage from './app/layouts/catalogPage';
import ArchivePage from './app/layouts/archivePage';
import RecommPage from './app/layouts/recommPage';
import ContactsPage from './app/layouts/contactsPage';
import BasketPage from './app/layouts/basketPage';
import NotFoundPage from './app/layouts/notFoundPage';
import LoginPage from './app/layouts/loginPage';
import AboutMePage from './app/layouts/aboutMePage';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<CatalogPage />} />
          <Route path='archive' element={<ArchivePage />} />
          <Route path='recommend' element={<RecommPage />} />
          <Route path='contacts' element={<ContactsPage />} />
          <Route path='basket' element={<BasketPage />} />
          <Route path='login' element={<LoginPage />} />
          <Route path='aboutme' element={<AboutMePage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
