import React from 'react';
import './redactorPage.scss';
import RedactorTable from '../components/common/redactorTable/redactorTable';

const RedactorPage = () => {
  return (
    <div className='redactor-page'>
      <h1 className='caption'>Редактор товаров</h1>
      <p>
        Страница редактирования и добавления украшений, доступна только
        пользователю admin
      </p>
      <button className='redactor-page__btn'>Добравить новый товар</button>
      <RedactorTable />
    </div>
  );
};

export default RedactorPage;
