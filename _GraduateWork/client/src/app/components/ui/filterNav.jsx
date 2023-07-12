import React from 'react';
import './filterNav.scss';

const FilterNav = () => {
  return (
    <ul className='header-filter-nav__list nav'>
      <li className='header-filter-nav__item'>
        <button className='header-filter-nav__btn'>Серьги</button>
      </li>
      <li className='header-filter-nav__item'>
        <button className='header-filter-nav__btn'>Браслеты</button>
      </li>
      <li className='header-filter-nav__item'>
        <button className='header-filter-nav__btn'>Кулоны</button>
      </li>
      <li className='header-filter-nav__item'>
        <button className='header-filter-nav__btn'>Колье</button>
      </li>
      <li className='header-filter-nav__item'>
        <button className='header-filter-nav__btn'>Кольца</button>
      </li>
      <li className='header-filter-nav__item'>
        <button className='header-filter-nav__btn'>Комплекты</button>
      </li>
      <li className='header-filter-nav__item'>
        <button className='header-filter-nav__btn'>Техники</button>
      </li>
      <li className='header-filter-nav__item'>
        <button className='header-filter-nav__btn'>Материалы</button>
      </li>
      <li className='header-filter-nav__item'>
        <button className='header-filter-nav__btn'>Избранное</button>
      </li>
      <li className='header-filter-nav__item'>
        <button className='header-filter-nav__btn'>Показать все</button>
      </li>
    </ul>
  );
};

export default FilterNav;
