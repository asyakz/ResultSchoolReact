import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../../api/index';
import './editJewelryPage.scss';
import TextField from '../../common/form/textField';
import SelectField from '../../common/form/selectField';
import MultiSelectField from '../../common/form/multiSelectField';
import TextAreaField from '../../common/form/textAreaField';

const EditJewelryPage = () => {
  const { id } = useParams();
  const [data, setData] = useState();
  const [item, setItem] = useState();
  const [colors, setColors] = useState();
  const [materials, setMaterials] = useState();
  const [techniques, setTechniques] = useState();
  const [jewelryType, setJwelryType] = useState();
  console.log('текущее украшение: ', item);

  useEffect(() => {
    api.colors
      .fetchAll()
      .then((data) =>
        setColors(data.map((item) => ({ value: item._id, label: item.name })))
      );
  }, []);

  useEffect(() => {
    api.jewelryType
      .fetchAll()
      .then((data) =>
        setJwelryType(
          data.map((item) => ({ value: item._id, label: item.name }))
        )
      );
  }, []);

  useEffect(() => {
    api.materials
      .fetchAll()
      .then((data) =>
        setMaterials(
          data.map((item) => ({ value: item._id, label: item.name }))
        )
      );
  }, []);

  useEffect(() => {
    api.techniques
      .fetchAll()
      .then((data) =>
        setTechniques(
          data.map((item) => ({ value: item._id, label: item.name }))
        )
      );
  }, []);

  useEffect(() => {
    api.jewelry.fetchAll().then((data) => {
      setItem(data.find((el) => el._id === id));
    });
  }, []);

  const transformColors = (colorIds) => {
    console.log('transformColors', colorIds);
    const colorsArray = [];
    for (const color of colorIds) {
      for (const item of colors) {
        if (item.value === color) {
          colorsArray.push(item);
          break;
        }
      }
    }
    return colorsArray;
  };

  const transformMaterials = (data) => {
    const materialsArray = [];
    for (const material of data) {
      for (const item of materials) {
        if (item.value === material) {
          materialsArray.push(item);
          break;
        }
      }
    }
    return materialsArray;
  };

  const transformTechniques = (data) => {
    const techniquesArray = [];
    for (const technique of data) {
      for (const item of techniques) {
        if (item.value === technique) {
          techniquesArray.push(item);
          break;
        }
      }
    }
    return techniquesArray;
  };

  useEffect(() => {
    if (colors && materials && techniques && item && !data) {
      setData({
        ...item,
        colors: transformColors(item.colors),
        materials: transformMaterials(item.materials),
        techniques: transformTechniques(item.techniques)
      });
    }
  }, [colors, materials, techniques, item, data]);

  const handleChange = (target) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value
    }));
  };
  console.log('data', data);

  return (
    <>
      {data && colors && materials && techniques && jewelryType && (
        <div className='jewelry-edit-page'>
          <h1 className='caption'>Страница редактирования украшения</h1>
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
            options={jewelryType}
            name='type'
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
            options={materials}
            name='materials'
            label='Выберите используемые материалы'
            onChange={handleChange}
          />
          <MultiSelectField
            className='jewelry-edit-page__form'
            defaultValue={data.techniques}
            options={techniques}
            name='techniques'
            label='Выберите техники, если они есть'
            onChange={handleChange}
          />
          <MultiSelectField
            className='jewelry-edit-page__form'
            defaultValue={data.colors}
            options={colors}
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
          <button className='jewelry-edit-page__btn-save'>Сохранить</button>
        </div>
      )}
    </>
  );
};

export default EditJewelryPage;
