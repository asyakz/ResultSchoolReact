import React from 'react';
import './registerFormPage.scss';
import TextField from '../../common/form/textField';
import RadioField from '../../common/form/radioField';

const RegisterFormPage = () => {
  return (
    <div className='register-form-page'>
      <h2>Введите свои данные:</h2>
      <form>
        <TextField label='Электронная почта' name='email' />
        <TextField label='Имя' name='name' />
        <TextField label='Пароль' type='password' name='password' />
        <RadioField
          options={[
            { name: 'Male', value: 'male' },
            { name: 'Female', value: 'female' }
          ]}
          value=''
          name='sex'
          onChange=''
          label='Выберите ваш пол:'
        />
        <button className='register-form-page__btn' type='submit'>
          Зарегистрироваться
        </button>
      </form>
    </div>
  );
};

export default RegisterFormPage;
