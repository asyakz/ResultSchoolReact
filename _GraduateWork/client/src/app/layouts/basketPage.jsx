import React, { useEffect, useState } from 'react';
import './basketPage.scss';
import api from '../api/index';

const cart = JSON.parse(localStorage.getItem('cart'));
console.log('корзина', cart);

const BasketPage = () => {
  let id = self.crypto.randomUUID();
  const [jewelry, setJewelry] = useState();
  useEffect(() => {
    api.jewelry.fetchAll().then((data) => setJewelry(data));
  }, []);
  return (
    <>
      <h1 className='caption'>Корзина</h1>
      <div className='basket-page'>
        <div className='basket-page__container-left'>
          <table className='basket-page__table'>
            <thead className='basket-page__table-header'>
              <tr>
                <td>{'Артикул'}</td>
                <td>{'Фото'}</td>
                <td>{'Название'}</td>
                <td>{'Стоимость'}</td>
                <td>{'Количество'}</td>
                <td></td>
              </tr>
            </thead>
            {jewelry && (
              <tbody key={id}>
                {jewelry.map((item) =>
                  cart.map((idCart) =>
                    item._id === idCart ? (
                      <tr key={id} className='redactor-table__row'>
                        <td key={id}>{item._id}</td>
                        <td key={id}>
                          <img
                            className='basket-page__img'
                            src={item.photo}
                            alt='Карточка товара'
                          />
                        </td>
                        <td key={id}>{item.name}</td>
                        <td key={id}>{`${item.price} рублей`}</td>
                        <td key={id}>{`Количество: ${1}`}</td>
                        <td>
                          <button className='basket-page__btn-delete'>
                            <svg
                              width='43'
                              height='43'
                              viewBox='0 0 43 43'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <ellipse
                                id='Ellipse 11'
                                cx='21.5'
                                cy='21.5'
                                rx='21.5'
                                ry='21.5'
                                transform='matrix(4.37114e-08 1 1 -4.37114e-08 0 0)'
                                fill='#CACACA'
                              />
                              <path
                                id='Line 1 (Stroke)'
                                d='M11.9928 31.6619L31.7009 11.0972L32.5967 12.0319L12.8886 32.5967L11.9928 31.6619Z'
                                fill='#333333'
                                stroke='#333333'
                              />
                              <path
                                id='Line 2 (Stroke)'
                                d='M11.9927 11.0968L31.7008 31.6616L30.8049 32.5963L11.0969 12.0316L11.9927 11.0968Z'
                                fill='#333333'
                                stroke='#333333'
                              />
                            </svg>
                          </button>
                        </td>
                      </tr>
                    ) : (
                      ''
                    )
                  )
                )}
              </tbody>
            )}
          </table>
        </div>
        <div className='basket-page__container-right'>
          <div className='basket-page__container-final-price'>
            <svg
              width='234'
              height='200'
              viewBox='0 0 234 200'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M0.181885 8.73358C0.181885 12.7318 6.18892 17.5296 13.9123 19.1289C23.3519 20.7281 36.2241 43.9177 50.8126 85.4988L73.1245 149.47H137.486H201.847L211.286 121.483C216.435 106.289 224.159 81.5006 227.591 67.1072L233.598 41.5187H143.493C56.8197 41.5187 54.2452 40.7191 44.8056 21.5278C35.366 2.33649 0.181885 -7.25917 0.181885 8.73358ZM146.067 73.5043C146.067 83.8996 152.074 89.497 163.23 89.497C172.67 89.497 180.393 92.6956 180.393 97.4934C180.393 101.492 172.67 105.49 163.23 105.49C152.074 105.49 146.067 111.087 146.067 121.483C146.067 130.279 142.634 137.475 137.486 137.475C133.195 137.475 128.904 130.279 128.904 121.483C128.904 111.087 122.897 105.49 111.741 105.49C102.302 105.49 94.5782 101.492 94.5782 97.4934C94.5782 92.6956 102.302 89.497 111.741 89.497C122.897 89.497 128.904 83.8996 128.904 73.5043C128.904 64.7082 133.195 57.5115 137.486 57.5115C142.634 57.5115 146.067 64.7082 146.067 73.5043Z'
                fill='white'
              />
              <path
                d='M80.8474 178.257C72.2659 191.851 92.0033 207.044 104.017 195.849C114.315 186.253 107.45 169.461 94.5778 169.461C90.287 169.461 84.28 173.459 80.8474 178.257Z'
                fill='white'
              />
              <path
                d='M166.663 178.257C158.081 191.851 177.819 207.044 189.833 195.849C200.131 186.253 193.265 169.461 180.393 169.461C176.102 169.461 170.095 173.459 166.663 178.257Z'
                fill='white'
              />
              <rect
                x='79.3655'
                y='49.9052'
                width='117.02'
                height='93.6162'
                fill='white'
              />
            </svg>
            <span className='basket-page__final-price'>{`Итого: ${3000} рублей`}</span>
          </div>
          <button className='basket-page__btn'>Оформить заказ</button>
        </div>
      </div>
    </>
  );
};

export default BasketPage;
