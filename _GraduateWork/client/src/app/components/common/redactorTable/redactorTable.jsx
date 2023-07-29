import React from 'react';
import './redactorTable.scss';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getJewelryTypes } from '../../../store/jewelryTypes';
import { getMaterials } from '../../../store/materials';
import { getTechniques } from '../../../store/techniques';
import { getColors } from '../../../store/colors';
import { getJewelriesList } from '../../../store/jewelries';

const RedactorTable = () => {
  let id = self.crypto.randomUUID();
  console.log(id);
  const jewelries = useSelector(getJewelriesList());
  const jewelryTypes = useSelector(getJewelryTypes());
  const materials = useSelector(getMaterials());
  const techniques = useSelector(getTechniques());
  const colors = useSelector(getColors());

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
      {jewelries && jewelryTypes && materials && techniques && colors && (
        <tbody key={id}>
          {jewelries.map((item) => (
            <tr key={id} className='redactor-table__row'>
              <td key={id}>{item._id}</td>
              <td key={id}>{item.name}</td>
              <td key={id}>
                {jewelryTypes.map((type) => {
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
