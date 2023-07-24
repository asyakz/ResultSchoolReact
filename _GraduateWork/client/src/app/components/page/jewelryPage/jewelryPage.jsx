import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../../api/fake.api/jewelry';
import './jewelryPage.scss';

const JewelryPage = () => {
  const { id } = useParams();
  const [item, setItem] = useState();
  useEffect(() => {
    api.fetchAll().then((data) => {
      setItem(data.find((el) => el._id === id));
    });
  }, []);

  return (
    <>
      {item && (
        <div className='jewelry-page'>
          <div className='jewelry-page__img-container'>
            <img
              className='jewelry-page__img'
              src={item.photo}
              alt='Большая фотография украшения'
            />
          </div>
          <div className='jewelry-page__info'>
            <h2 className='jewelry-page__title'>{item.name}</h2>
            <p className='jewelry-page__descr'>{item.description}</p>
            <div className='jewelry-page__container'>
              <span className='jewelry-page__price'>{`Стоимость: ${item.price} рублей`}</span>
              <button className='jewelry-page__btn'>В корзину</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default JewelryPage;
