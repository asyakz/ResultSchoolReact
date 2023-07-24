import React, { useEffect, useState } from 'react';
import './redactorTable.scss';
import api from '../../../api/index';
import { Link } from 'react-router-dom';

const RedactorTable = () => {
  let id = self.crypto.randomUUID();
  const [jewelry, setJewelry] = useState();
  const [jewelryType, setJewelryType] = useState();
  const [colors, setColors] = useState();
  const [techniques, setTechniques] = useState();
  const [materials, setMaterials] = useState();
  useEffect(() => {
    api.jewelry.fetchAll().then((data) => setJewelry(data));
  }, []);
  useEffect(() => {
    api.jewelryType.fetchAll().then((data) => {
      console.log(data);
      setJewelryType(data);
    });
  }, []);
  useEffect(() => {
    api.colors.fetchAll().then((data) => setColors(data));
  }, []);
  useEffect(() => {
    api.techniques.fetchAll().then((data) => setTechniques(data));
  }, []);
  useEffect(() => {
    api.materials.fetchAll().then((data) => setMaterials(data));
  }, []);

  return (
    <table className='redactor-table'>
      <thead className='redactor-table__header'>
        <tr>
          <td>{'Артикул'}</td>
          <td>{'Название'}</td>
          <td>{'Тип'}</td>
          <td>{'Стоимость'}</td>
          <td>{'Материалы'}</td>
          <td>{'Техника'}</td>
          <td>{'Цвета'}</td>
          <td>{'Фото'}</td>
          <td>{'Описание'}</td>
          <td>{'Действия'}</td>
        </tr>
      </thead>
      {jewelry && jewelryType && colors && techniques && materials && (
        <tbody key={id}>
          {jewelry.map((item) => (
            <tr key={id} className='redactor-table__row'>
              <td key={id}>{item._id}</td>
              <td key={id}>{item.name}</td>
              <td key={id}>
                {jewelryType.map((type) => {
                  if (item.jewelryType === type._id) return type.name;
                })}
              </td>
              <td key={id}>{`${item.price} рублей`}</td>
              <td key={id}>
                {item.materials.map((materialId) => {
                  for (let material of materials) {
                    if (material._id === materialId) {
                      return `${material.name} `;
                    }
                  }
                })}
              </td>
              <td key={id}>
                {item.techniques.map((techniqueId) => {
                  for (let technique of techniques) {
                    if (technique._id === techniqueId) {
                      return `${technique.name} `;
                    }
                  }
                })}
              </td>
              <td key={id}>
                {item.colors.map((colorId) => {
                  for (let color of colors) {
                    if (color._id === colorId) {
                      return `${color.name} `;
                    }
                  }
                })}
              </td>
              <td key={id}>{item.photo}</td>
              <td key={id}>{item.description}</td>
              <td>
                <button className='redactor-table__btn-delete'>Удалить</button>
                <button className='redactor-table__btn-change'>
                  <Link to={`${item._id}/edit`}>Изменить</Link>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      )}
    </table>
  );
};

export default RedactorTable;
