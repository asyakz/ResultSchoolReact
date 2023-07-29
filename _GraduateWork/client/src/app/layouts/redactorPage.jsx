import React from 'react';
import './redactorPage.scss';
import { Link } from 'react-router-dom';
import RedactorTable from '../components/common/redactorTable/redactorTable';

const RedactorPage = () => {
  return (
    <div className='redactor-page'>
      <h1 className='caption'>Редактор товаров</h1>
      <p>
        Страница редактирования и добавления украшений, доступна только
        пользователю admin
      </p>
      <button className='redactor-page__btn'>
        <Link to={`new`}>Добравить новый товар</Link>
      </button>
      <RedactorTable />
    </div>
  );
};

export default RedactorPage;
