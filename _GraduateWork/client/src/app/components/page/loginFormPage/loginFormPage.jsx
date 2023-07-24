import React from 'react';
import './loginFormPage.scss';
import TextField from '../../common/form/textField';

const LoginFormPage = () => {
  return (
    <div className='login-form-page'>
      <form className='login-form-page__form'>
        <TextField label='Электронная почта' name='email' />
        <TextField label='Пароль' type='password' name='password' />
        <div className='login-form-page__btn-container'>
          <button className='login-form-page__btn' type='submit'>
            Войти
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginFormPage;
