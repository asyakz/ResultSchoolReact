import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './loginPage.scss';
import RegisterFormPage from '../components/page/registerFormPage/registerFormPage';
import LoginFormPage from '../components/page/loginFormPage/loginFormPage';

const LoginPage = () => {
  const { type } = useParams();
  const [formType, setFormType] = useState(
    type === 'register' ? type : 'login'
  );
  const toggleFormType = () => {
    setFormType((prevState) =>
      prevState === 'register' ? 'login' : 'register'
    );
  };
  return (
    <div className='login-page'>
      {formType === 'register' ? (
        <>
          <h2 className='login-page__caption'>Регистрация</h2>
          <RegisterFormPage />
          <div className='login-page__container'>
            <p>
              Уже есть аккаунт?{' '}
              <a
                className='login-page__btn'
                role='button'
                onClick={toggleFormType}
              >
                {' '}
                Войти
              </a>
            </p>
          </div>
        </>
      ) : (
        <>
          <h2 className='login-page__caption'>Вход</h2>
          <LoginFormPage />
          <div className='login-page__container'>
            <p>
              Еще нет аккаунта?{' '}
              <a
                className='login-page__btn'
                role='button'
                onClick={toggleFormType}
              >
                {' '}
                Зарегистрироваться
              </a>
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default LoginPage;
