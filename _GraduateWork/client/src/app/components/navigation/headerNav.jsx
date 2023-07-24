import React from 'react';
import './headerNav.scss';
import { NavLink } from 'react-router-dom';

const HeaderNav = () => {
  return (
    <div className='header-nav'>
      <div className='header-nav__container'>
        <ul className='header-nav__list nav'>
          <li className='header-nav__item'>
            <NavLink className='header-nav__link' to='/catalog'>
              Каталог
            </NavLink>
          </li>
          <li className='header-nav__item'>
            <NavLink className='header-nav__link' to='/archive'>
              Архив
            </NavLink>
          </li>
          <li className='header-nav__item'>
            <NavLink className='header-nav__link' to='/recommend'>
              Рекомендации
            </NavLink>
          </li>
          <li className='header-nav__item'>
            <NavLink className='header-nav__link' to='/contacts'>
              Контакты
            </NavLink>
          </li>
          <li className='header-nav__item'>
            <NavLink className='header-nav__link link__redactor' to='/redactor'>
              Редактор
            </NavLink>
          </li>
          <li className='header-nav__item  header-nav__basket'>
            <NavLink className='header-nav__link link-basket' to='/basket'>
              Корзина
              <svg
                className='svg-basket'
                width='26'
                height='22'
                viewBox='0 0 26 22'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M0 0.868639C0 1.29876 0.646234 1.81491 1.47711 1.98696C2.49262 2.15901 3.8774 4.65372 5.44683 9.127L7.84713 16.009H14.7711H21.695L22.7105 12.9981C23.2644 11.3636 24.0953 8.69688 24.4646 7.14844L25.1108 4.39565H15.4173C6.09306 4.39565 5.8161 4.30962 4.80059 2.24503C3.78508 0.180442 0 -0.851852 0 0.868639ZM15.6943 7.83663C15.6943 8.95495 16.3405 9.55713 17.5406 9.55713C18.5561 9.55713 19.387 9.90122 19.387 10.4174C19.387 10.8475 18.5561 11.2776 17.5406 11.2776C16.3405 11.2776 15.6943 11.8798 15.6943 12.9981C15.6943 13.9444 15.325 14.7186 14.7711 14.7186C14.3095 14.7186 13.8479 13.9444 13.8479 12.9981C13.8479 11.8798 13.2016 11.2776 12.0015 11.2776C10.986 11.2776 10.1551 10.8475 10.1551 10.4174C10.1551 9.90122 10.986 9.55713 12.0015 9.55713C13.2016 9.55713 13.8479 8.95495 13.8479 7.83663C13.8479 6.89036 14.3095 6.11614 14.7711 6.11614C15.325 6.11614 15.6943 6.89036 15.6943 7.83663Z'
                  fill='white'
                />
                <path
                  d='M8.67789 19.1059C7.7547 20.5683 9.87804 22.2027 11.1705 20.9984C12.2783 19.9661 11.5398 18.1596 10.155 18.1596C9.6934 18.1596 9.04717 18.5897 8.67789 19.1059Z'
                  fill='white'
                />
                <path
                  d='M17.9103 19.1059C16.9871 20.5683 19.1105 22.2027 20.4029 20.9984C21.5108 19.9661 20.7722 18.1596 19.3874 18.1596C18.9258 18.1596 18.2796 18.5897 17.9103 19.1059Z'
                  fill='white'
                />
              </svg>
            </NavLink>
          </li>
          <li className='header-nav__item header-nav__about-me'>
            <NavLink className='header-nav__link link-login' to='/aboutme'>
              jewelry by asyakz
            </NavLink>
          </li>
        </ul>
      </div>
      <div className='header-login'>
        <NavLink className='header-nav__link' to='/login'>
          <svg
            className='svg-login'
            width='13'
            height='13'
            viewBox='0 0 13 13'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M5.12056 9.09278L6.13889 10.1111L9.75 6.5L6.13889 2.88889L5.12056 3.90722L6.98389 5.77778H0V7.22222H6.98389L5.12056 9.09278ZM11.5556 0H1.44444C0.642778 0 0 0.65 0 1.44444V4.33333H1.44444V1.44444H11.5556V11.5556H1.44444V8.66667H0V11.5556C0 12.35 0.642778 13 1.44444 13H11.5556C12.35 13 13 12.35 13 11.5556V1.44444C13 0.65 12.35 0 11.5556 0Z'
              fill='white'
            />
          </svg>
          Вход/Регистрация
        </NavLink>
      </div>
    </div>
  );
};

export default HeaderNav;
