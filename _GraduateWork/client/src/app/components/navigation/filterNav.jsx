import React from 'react';
import './filterNav.scss';
import SelectField from '../common/form/selectField';

const FilterNav = () => {
  const materialsList = [
    { value: 'materia01', label: 'Эпоксидная смола' },
    { value: 'materia02', label: 'Бисер' },
    { value: 'materia03', label: 'Полимерная глина' },
    { value: 'materia04', label: 'Натуральный камень' },
    { value: 'materia05', label: 'Медная проволока' },
    { value: 'materia06', label: 'Хлопковая нить/шнур' },
    { value: 'materia07', label: 'Сухоцвет' }
  ];

  const colorsList = [
    { value: 'FFFFFF', label: 'Белый' },
    { value: '000000', label: 'Черный' },
    { value: '808080', label: 'Серый' },
    { value: 'C0C0C0', label: 'Серебряный' },
    { value: 'DAA520', label: 'Золотой' },
    { value: '6C4807', label: 'Бронзовый' },
    { value: 'AC4D25', label: 'Медный' },
    { value: 'FF00FF', label: 'Розовый' },
    { value: '582E7E', label: 'Аметистовый' },
    { value: '40E0D0', label: 'Бирюзовый' },
    { value: 'FFFF00', label: 'Желтый' },
    { value: '00FF00', label: 'Зеленый' },
    { value: '00008B', label: 'Синий' },
    { value: '0000FF', label: 'Голубой' },
    { value: 'FF0000', label: 'Красный' },
    { value: 'FF4500', label: 'Оранжевый' },
    { value: 'A52A2A', label: 'Коричневый' },
    { value: 'E3D9C2', label: 'Жемчужный/бежевый' }
  ];
  const techniquesList = [
    { value: 'dhe63r3fdfjg4tech01', label: 'Ловец снов' },
    { value: '8575323fdddsotech02', label: 'WireWrap' },
    { value: '77931gfte5658tech03', label: 'Кольчужное плетение' },
    { value: '77931gfte5658tech04', label: 'Макраме' },
    { value: '77931gfte5658tech05', label: 'Вязаный жгут' },
    { value: '77931gfte5658tech06', label: 'Оплетение кабошона' },
    { value: '77931gfte5658tech07', label: 'Вышивка по коже' },
    { value: '77931gfte5658tech07', label: 'Ндебеле' }
  ];
  const jewelryTypeList = [
    { value: 'type01', label: 'Серьги' },
    { value: 'type02', label: 'Колье' },
    { value: 'type03', label: 'Кольцо' },
    { value: 'type04', label: 'Кулон' },
    { value: 'type05', label: 'Панно' },
    { value: 'type06', label: 'Браслет' },
    { value: 'type07', label: 'Бусы' }
  ];
  return (
    <ul className='header-filter-nav__list nav'>
      <li className='header-filter-nav__item'>
        <SelectField
          label='Тип украшения:'
          className='header-filter-nav__btn'
          defaultOption={'Выерите тип...'}
          options={jewelryTypeList}
          name='jewelryTypes'
          onChange=''
        />
      </li>
      <li className='header-filter-nav__item'>
        <SelectField
          label='Техники:'
          className='header-filter-nav__btn'
          defaultOption={'Выберите технику...'}
          options={techniquesList}
          name='techniques'
          onChange=''
        />
      </li>
      <li className='header-filter-nav__item'>
        <SelectField
          label='Материалы:'
          className='header-filter-nav__btn'
          defaultOption={'Выберите материал...'}
          options={materialsList}
          name='materials'
          onChange=''
        />
      </li>
      <li className='header-filter-nav__item'>
        <SelectField
          label='Цвета:'
          className='header-filter-nav__btn'
          defaultOption={'Выберите цвет...'}
          options={colorsList}
          name='colors'
          onChange=''
        />
      </li>
      <li className='header-filter-nav__item'>
        <button className='header-filter-nav__btn'>Избранное</button>
      </li>
      <li className='header-filter-nav__item'>
        <button className='header-filter-nav__btn'>Сбросить фильтры</button>
      </li>
    </ul>
  );
};

export default FilterNav;
