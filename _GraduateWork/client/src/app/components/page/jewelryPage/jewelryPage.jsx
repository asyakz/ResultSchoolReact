import React from 'react';
import { useParams } from 'react-router-dom';
import './jewelryPage.scss';
import { useSelector } from 'react-redux';
import { getJewelryById } from '../../../store/jewelries';
// import { getJewelryTypeById } from '../../../store/jewelryTypes';

const JewelryPage = () => {
  const { id } = useParams();
  const jewelry = useSelector(getJewelryById(id));

  return (
    <>
      {jewelry && (
        <div className='jewelry-page'>
          <div className='jewelry-page__img-container'>
            <img
              className='jewelry-page__img'
              src={jewelry.photo}
              alt='Большая фотография украшения'
            />
          </div>
          <div className='jewelry-page__info'>
            <h2 className='jewelry-page__title'>{jewelry.name}</h2>
            <p className='jewelry-page__descr'>{jewelry.description}</p>
            <div className='jewelry-page__container'>
              <span className='jewelry-page__price'>{`Стоимость: ${jewelry.price} рублей`}</span>
              <button className='jewelry-page__btn'>В корзину</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default JewelryPage;
