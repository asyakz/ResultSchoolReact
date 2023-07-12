import React from 'react';
import './aboutMePage.scss';

const AboutMePage = () => {
  return (
    <div className='about-me'>
      <h1 className='about-me__caption caption'>Обо мне</h1>
      <div className='about-me__container'>
        <p className='about-me__text text'>
          Я - Ася Казанцева, занимаюсь изготовлением handmade-украшений с
          детства. Работаю с разными материалами: бисер, натуральные камни,
          полимерная глина, эпоксидная смола, медная ювелирная проволока,
          полимерная глина, хлопквые нити. Каждая девушка хочет быть уникальной,
          запоминающейся, а сделанные с любовью handmade-украшения помогут
          получить множество восторженных комплиментов и всегда оставаться в
          центре внимания.
        </p>
        <img
          className='about-me__img'
          src='../../../public/imges/me.jpg'
          alt='It is me'
        />
      </div>
    </div>
  );
};

export default AboutMePage;
