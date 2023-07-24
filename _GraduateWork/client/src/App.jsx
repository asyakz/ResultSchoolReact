import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './app/components/navigation/layout';
import CatalogPage from './app/layouts/catalogPage';
import ArchivePage from './app/layouts/archivePage';
import RecommPage from './app/layouts/recommPage';
import ContactsPage from './app/layouts/contactsPage';
import BasketPage from './app/layouts/basketPage';
import NotFoundPage from './app/layouts/notFoundPage';
import LoginPage from './app/layouts/loginPage';
import AboutMePage from './app/layouts/aboutMePage';
import RedactorPage from './app/layouts/redactorPage';
import JewelryPage from './app/components/page/jewelryPage/jewelryPage';
import EditJewelryPage from './app/components/page/editJewelryPage/editJewelryPage';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Navigate to='/catalog' replace />} />
          <Route path='catalog' element={<CatalogPage />} />
          <Route path='catalog/:id' element={<JewelryPage />} />
          <Route path='archive' element={<ArchivePage />} />
          <Route path='recommend' element={<RecommPage />} />
          <Route path='contacts' element={<ContactsPage />} />
          <Route path='basket' element={<BasketPage />} />
          <Route path='login' element={<LoginPage />} />
          <Route path='redactor' element={<RedactorPage />} />
          <Route path='redactor/:id/edit' element={<EditJewelryPage />} />
          <Route path='aboutme' element={<AboutMePage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
