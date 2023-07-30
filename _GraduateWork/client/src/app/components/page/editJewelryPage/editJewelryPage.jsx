import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './editJewelryPage.scss';
import TextField from '../../common/form/textField';
import SelectField from '../../common/form/selectField';
import MultiSelectField from '../../common/form/multiSelectField';
import TextAreaField from '../../common/form/textAreaField';
import { useDispatch, useSelector } from 'react-redux';
import {
  getJewelryTypes,
  getJewelryTypesLoadingStatus
} from '../../../store/jewelryTypes';
import {
  getMaterials,
  getMaterialsLoadingStatus
} from '../../../store/materials';
import {
  getTechniques,
  getTechniquesLoadingStatus
} from '../../../store/techniques';
import { getColors, getColorsLoadingStatus } from '../../../store/colors';
import { getJewelryById, updateJewerly } from '../../../store/jewelries';

const EditJewelryPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();
  const jewelry = useSelector(getJewelryById(id));
  const dispatch = useDispatch();
  const materials = useSelector(getMaterials());
  const materialsLoading = useSelector(getMaterialsLoadingStatus());
  const materialsList = materials.map((q) => ({
    label: q.name,
    value: q._id
  }));
  const colors = useSelector(getColors());
  const colorsLoading = useSelector(getColorsLoadingStatus());
  const colorsList = colors.map((q) => ({
    label: q.name,
    value: q._id
  }));
  const techniques = useSelector(getTechniques());
  const techniquesLoading = useSelector(getTechniquesLoadingStatus());
  const techniquesList = techniques.map((q) => ({
    label: q.name,
    value: q._id
  }));
  const jewelryTypes = useSelector(getJewelryTypes());
  const jewelryTypesLoading = useSelector(getJewelryTypesLoadingStatus());
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
      updateJewerly({
        ...data,
        techniques: data.techniques.map((q) => q.value),
        materials: data.materials.map((q) => q.value),
        colors: data.colors.map((q) => q.value)
      })
    );
    navigate('/redactor');
  };

  function getMaterialsListByIds(materialsIds) {
    const materialsArray = [];
    for (const materialId of materialsIds) {
      for (const material of materials) {
        if (material._id === materialId) {
          materialsArray.push(material);
          break;
        }
      }
    }
    return materialsArray;
  }

  function getTechniquesListByIds(techniquesIds) {
    const techniquesArray = [];
    for (const techniqueId of techniquesIds) {
      for (const technique of techniques) {
        if (techniques._id === techniqueId) {
          techniquesArray.push(technique);
          break;
        }
      }
    }
    return techniquesArray;
  }

  function getColorsListByIds(colorsIds) {
    const colorsArray = [];
    for (const colorId of colorsIds) {
      for (const color of colors) {
        if (color._id === colorId) {
          colorsArray.push(color);
          break;
        }
      }
    }
    return colorsArray;
  }

  const transformData = (data) => {
    const result = data.map((item) => ({
      label: item.name,
      value: item._id
    }));
    return result;
  };

  useEffect(() => {
    if (
      !jewelryTypesLoading &&
      !materialsLoading &&
      !colorsLoading &&
      !techniquesLoading &&
      jewelry &&
      !data
    ) {
      setData({
        ...jewelry,
        materials: transformData(getMaterialsListByIds(jewelry.materials)),
        colors: transformData(getColorsListByIds(jewelry.colors)),
        techniques: transformData(getTechniquesListByIds(jewelry.techniques))
      });
    }
  }, [jewelryTypesLoading, materialsLoading, techniquesLoading, jewelry, data]);

  useEffect(() => {
    if (data && isLoading) {
      setIsLoading(false);
    }
  }, [data]);

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
      {!isLoading && (
        <div className='jewelry-edit-page'>
          <h1 className='caption'>Страница редактирования украшения</h1>
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
      )}
    </>
  );
};

export default EditJewelryPage;
