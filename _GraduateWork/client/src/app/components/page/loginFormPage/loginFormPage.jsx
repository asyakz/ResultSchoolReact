import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './loginFormPage.scss';
import TextField from '../../common/form/textField';
import { getAuthErrors, login } from '../../../store/users';
import { validator } from '../../../utils/validator';
import { useNavigate } from 'react-router-dom';

const LoginFormPage = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: '',
    password: '',
    stayOn: false
  });
  const loginError = useSelector(getAuthErrors());
  const dispath = useDispatch();
  const [errors, setErrors] = useState({});

  const handleChange = (target) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value
    }));
  };

  const validatorConfog = {
    email: {
      isRequired: {
        message: 'Электронная почта обязательна для заполнения'
      }
    },
    password: {
      isRequired: {
        message: 'Пароль обязателкн для заполнения'
      }
    }
  };
  useEffect(() => {
    validate();
  }, [data]);
  const validate = () => {
    const errors = validator(data, validatorConfog);
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };
  const isValid = Object.keys(errors).length === 0;

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validate();
    if (!isValid) return;
    const redirect = '/';
    navigate('/');
    dispath(login({ payload: data, redirect }));
  };

  return (
    <div className='login-form-page'>
      <form className='login-form-page__form' onSubmit={handleSubmit}>
        <TextField
          label='Электронная почта'
          name='email'
          value={data.email}
          onChange={handleChange}
          error={errors.email}
        />
        <TextField
          label='Пароль'
          type='password'
          name='password'
          value={data.password}
          onChange={handleChange}
          error={errors.password}
        />
        {loginError && <p className='text-danger'>{loginError}</p>}
        <div className='login-form-page__btn-container'>
          <button
            className='login-form-page__btn'
            type='submit'
            disabled={!isValid}
          >
            Войти
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginFormPage;
