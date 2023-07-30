import React, { useEffect, useState } from 'react';
import './registerFormPage.scss';
import TextField from '../../common/form/textField';
import { signUp } from '../../../store/users';
import { useDispatch } from 'react-redux';
import { validator } from '../../../utils/validator';
import { useNavigate } from 'react-router-dom';

const RegisterFormPage = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: '',
    name: '',
    password: '',
    stayOn: false
  });
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
    },
    name: {
      isRequired: {
        message: 'Имя обязательно для заполнения'
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
    dispath(signUp({ payload: data }));
    navigate('/');
  };
  return (
    <div className='register-form-page'>
      <h2>Введите свои данные:</h2>
      <form onSubmit={handleSubmit}>
        <TextField
          label='Электронная почта'
          name='email'
          value={data.email}
          onChange={handleChange}
          error={errors.email}
        />
        <TextField
          label='Имя'
          name='name'
          value={data.name}
          onChange={handleChange}
          error={errors.name}
        />
        <TextField
          label='Пароль'
          type='password'
          name='password'
          value={data.password}
          onChange={handleChange}
          error={errors.password}
        />
        <button
          className='register-form-page__btn'
          type='submit'
          disabled={!isValid}
        >
          Зарегистрироваться
        </button>
      </form>
    </div>
  );
};

export default RegisterFormPage;
