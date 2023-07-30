import React from 'react';
import './sort.scss';
import PropTypes from 'prop-types';

const Sort = ({ onSort }) => {
  const handleSort = (item) => {
    onSort({ path: 'price', order: item });
  };

  return (
    <div className='sort'>
      <p className='sort__text'>Сортировать:</p>
      <div className='sort__btn-container'>
        <button className='sort__btn-high' onClick={() => handleSort('desc')}>
          сначала дороже
        </button>
        <button className='sort__btn-low' onClick={() => handleSort('asc')}>
          сначала дешевле
        </button>
      </div>
    </div>
  );
};

Sort.propTypes = {
  onSort: PropTypes.func
};

export default Sort;
