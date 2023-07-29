import React from 'react';
import './sort.scss';

const Sort = () => {
  return (
    <div className='sort'>
      <p className='sort__text'>Сортировать:</p>
      <div className='sort__btn-container'>
        <button className='sort__btn-high'>сначала дешевле</button>
        <button className='sort__btn-low'>сначала дороже</button>
      </div>
    </div>
  );
};

export default Sort;
