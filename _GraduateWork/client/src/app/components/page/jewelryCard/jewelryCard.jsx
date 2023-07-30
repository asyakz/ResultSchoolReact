import React from 'react';
import './jewelryCard.scss';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getJewelryById } from '../../../store/jewelries';
import { useSelector } from 'react-redux';
import { getJewelryTypeById } from '../../../store/jewelryTypes';

const JewelryCard = ({ jewerelyId }) => {
  const jewelry = useSelector(getJewelryById(jewerelyId));
  const jewelryType = useSelector(getJewelryTypeById(jewelry.jewelryType));

  const addToLocalStorage = () => {
    if (!localStorage.getItem('cart')) {
      localStorage.setItem('cart', JSON.stringify([]));
    }
    const newArr = JSON.parse(localStorage.getItem('cart'));
    newArr.push(jewelry._id);
    localStorage.setItem('cart', JSON.stringify(newArr));
  };
  return (
    <>
      {jewelry && jewelryType && (
        <li className='jewelry-card'>
          <div className='jewelry-card__container'>
            <div className='jewelry-card__top-container'>
              <h2 className='jewelry-card__title'>{jewelryType.name}</h2>
              <span className='jewelry-card__price'>{`Стоимость: ${jewelry.price} рублей`}</span>
            </div>
            <img
              className='jewelry-card__img'
              src={jewelry.photo}
              alt='Карточка товара'
            />
            <div className='jewelry-card__bottom-container'>
              <button onClick={addToLocalStorage} className='jewelry-card__btn'>
                <svg
                  className='jewelry-card__svg-basket'
                  width='44'
                  height='41'
                  viewBox='0 0 44 41'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M1.46667 3.96333C1.46667 4.64666 2.49334 5.46666 3.81334 5.74C5.42668 6.01333 7.62668 9.97666 10.12 17.0833L13.9333 28.0167H24.9333H35.9333L37.5467 23.2333C38.4267 20.6367 39.7467 16.4 40.3333 13.94L41.36 9.56666H25.96C11.1467 9.56666 10.7067 9.42999 9.09334 6.15C7.48001 2.87 1.46667 1.23 1.46667 3.96333ZM26.4 15.0333C26.4 16.81 27.4267 17.7667 29.3333 17.7667C30.9467 17.7667 32.2667 18.3133 32.2667 19.1333C32.2667 19.8167 30.9467 20.5 29.3333 20.5C27.4267 20.5 26.4 21.4567 26.4 23.2333C26.4 24.7367 25.8133 25.9667 24.9333 25.9667C24.2 25.9667 23.4667 24.7367 23.4667 23.2333C23.4667 21.4567 22.44 20.5 20.5333 20.5C18.92 20.5 17.6 19.8167 17.6 19.1333C17.6 18.3133 18.92 17.7667 20.5333 17.7667C22.44 17.7667 23.4667 16.81 23.4667 15.0333C23.4667 13.53 24.2 12.3 24.9333 12.3C25.8133 12.3 26.4 13.53 26.4 15.0333Z'
                    fill='white'
                  />
                  <path
                    d='M15.2533 32.9367C13.7866 35.26 17.16 37.8567 19.2133 35.9433C20.9733 34.3033 19.8 31.4333 17.6 31.4333C16.8666 31.4333 15.84 32.1167 15.2533 32.9367Z'
                    fill='white'
                  />
                  <path
                    d='M29.92 32.9367C28.4534 35.26 31.8267 37.8567 33.88 35.9433C35.64 34.3033 34.4667 31.4333 32.2667 31.4333C31.5334 31.4333 30.5067 32.1167 29.92 32.9367Z'
                    fill='white'
                  />
                </svg>
              </button>
              <div className='jewelry-card___open-card'>
                <Link key={jewelry._id} to={`/catalog/${jewelry._id}`}>
                  Открыть карточку
                </Link>
              </div>
            </div>
          </div>
        </li>
      )}
    </>
  );
};

JewelryCard.propTypes = {
  jewerelyId: PropTypes.string.isRequired
};

export default JewelryCard;
