import React from 'react';
import './filterNav.scss';
import SelectField from '../common/form/selectField';
import { useSelector } from 'react-redux';
import { getMaterials } from '../../store/materials';
import { getColors } from '../../store/colors';
import { getTechniques } from '../../store/techniques';
import { getJewelryTypes } from '../../store/jewelryTypes';
import PropTypes from 'prop-types';

const FilterNav = ({
  onChangeType,
  onChangeMaterial,
  onChangeColor,
  onChangeTechnique,
  clearFilters
}) => {
  const materials = useSelector(getMaterials());
  const materialsList = materials.map((q) => ({
    label: q.name,
    value: q._id
  }));
  const colors = useSelector(getColors());
  const colorsList = colors.map((q) => ({
    label: q.name,
    value: q._id
  }));
  const techniques = useSelector(getTechniques());
  const techniquesList = techniques.map((q) => ({
    label: q.name,
    value: q._id
  }));
  const jewelryTypes = useSelector(getJewelryTypes());
  const jewelryTypeList = jewelryTypes.map((p) => ({
    label: p.name,
    value: p._id
  }));

  return (
    <ul className='header-filter-nav__list nav'>
      <li className='header-filter-nav__item'>
        <SelectField
          label='Тип украшения:'
          className='header-filter-nav__btn'
          defaultOption={'Выерите тип...'}
          options={jewelryTypeList}
          name='jewelryTypes'
          onChange={onChangeType}
        />
      </li>
      <li className='header-filter-nav__item'>
        <SelectField
          label='Техники:'
          className='header-filter-nav__btn'
          defaultOption={'Выберите технику...'}
          options={techniquesList}
          name='techniques'
          onChange={onChangeTechnique}
        />
      </li>
      <li className='header-filter-nav__item'>
        <SelectField
          label='Материалы:'
          className='header-filter-nav__btn'
          defaultOption={'Выберите материал...'}
          options={materialsList}
          name='materials'
          onChange={onChangeMaterial}
        />
      </li>
      <li className='header-filter-nav__item'>
        <SelectField
          label='Цвета:'
          className='header-filter-nav__btn'
          defaultOption={'Выберите цвет...'}
          options={colorsList}
          name='colors'
          onChange={onChangeColor}
        />
      </li>
      <li className='header-filter-nav__item'>
        <button className='header-filter-nav__btn' onClick={clearFilters}>
          Сбросить фильтры
        </button>
      </li>
    </ul>
  );
};

FilterNav.propTypes = {
  onChangeType: PropTypes.func.isRequired,
  onChangeMaterial: PropTypes.func.isRequired,
  onChangeColor: PropTypes.func.isRequired,
  onChangeTechnique: PropTypes.func.isRequired,
  clearFilters: PropTypes.func.isRequired
};

export default FilterNav;
