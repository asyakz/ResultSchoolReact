import React, { useState } from 'react';
import './createJewelryPage.scss';
import TextField from '../../common/form/textField';
import SelectField from '../../common/form/selectField';
import MultiSelectField from '../../common/form/multiSelectField';
import TextAreaField from '../../common/form/textAreaField';
import { useDispatch, useSelector } from 'react-redux';
import { getJewelryTypes } from '../../../store/jewelryTypes';
import { getMaterials } from '../../../store/materials';
import { getTechniques } from '../../../store/techniques';
import { getColors } from '../../../store/colors';
import { newJewelry } from '../../../store/jewelries';

const CreateJewelryPage = () => {
  const [data, setData] = useState({
    name: '',
    jewelryType: '',
    colors: [],
    materials: [],
    techniques: [],
    description: false
  });
  const dispatch = useDispatch();
  const materials = useSelector(getMaterials());
  const materialsList = materials.map((q) => ({
    label: q.name,
    value: q._id
  }));
  const colors = useSelector(getColors());
  const colorsList = colors.map((q) => ({
    label: q.name,
    value: q._id
  }));
  const techniques = useSelector(getTechniques());
  const techniquesList = techniques.map((q) => ({
    label: q.name,
    value: q._id
  }));
  const jewelryTypes = useSelector(getJewelryTypes());
  const jewelryTypesList = jewelryTypes.map((p) => ({
    label: p.name,
    value: p._id
  }));
  // const [errors, setErrors] = useState({});

  const handleChange = (target) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // const isValid = validate();
    // if (!isValid) return;
    dispatch(
      newJewelry({
        ...data,
        techniques: data.techniques.map((q) => q.value),
        materials: data.materials.map((q) => q.value),
        colors: data.colors.map((q) => q.value)
      })
    );
  };

  // const validatorConfig = {
  //   email: {
  //     isRequired: {
  //       message: 'Электронная почта обязательна для заполнения'
  //     },
  //     isEmail: {
  //       message: 'Email введен некорректно'
  //     }
  //   },
  //   name: {
  //     isRequired: {
  //       message: 'Введите ваше имя'
  //     }
  //   }
  // };
  // useEffect(() => {
  //   validate();
  // }, [data]);
  // const validate = () => {
  //   const errors = validator(data, validatorConfig);
  //   setErrors(errors);
  //   return Object.keys(errors).length === 0;
  // };
  // const isValid = Object.keys(errors).length === 0;

  return (
    <>
      {
        <div className='jewelry-edit-page'>
          <h1 className='caption'>Страница создания нового украшения</h1>
          <form onSubmit={handleSubmit}>
            <TextField
              className='jewelry-edit-page__form'
              label='Название'
              name='name'
              value={data.name}
              onChange={handleChange}
            />
            <SelectField
              className='jewelry-edit-page__form'
              label='Выберите тип украшения'
              defaultOption={'Выбор типа...'}
              options={jewelryTypesList}
              name='jewelryType'
              value={data.jewelryType}
              onChange={handleChange}
            />
            <TextField
              className='jewelry-edit-page__form'
              label='Стоимость'
              name='price'
              value={data.price}
              onChange={handleChange}
            />
            <MultiSelectField
              className='jewelry-edit-page__form'
              defaultValue={data.materials}
              options={materialsList}
              name='materials'
              label='Выберите используемые материалы'
              onChange={handleChange}
            />
            <MultiSelectField
              className='jewelry-edit-page__form'
              defaultValue={data.techniques}
              options={techniquesList}
              name='techniques'
              label='Выберите техники, если они есть'
              onChange={handleChange}
            />
            <MultiSelectField
              className='jewelry-edit-page__form'
              defaultValue={data.colors}
              options={colorsList}
              name='colors'
              label='Выберите цвета'
              onChange={handleChange}
            />
            <TextField
              className='jewelry-edit-page__form'
              label='Фотография'
              name='photo'
              value={data.photo}
              onChange={handleChange}
            />
            <TextAreaField
              className='jewelry-edit-page__form'
              label='Описание'
              name='description'
              value={data.description}
              onChange={handleChange}
            />
            <div className='jewelry-edit-page__btn-container'>
              <button className='jewelry-edit-page__btn-save'>Сохранить</button>
              <button className='jewelry-edit-page__btn-back'>Назад</button>
            </div>
          </form>
        </div>
      }
    </>
  );
};

export default CreateJewelryPage;
