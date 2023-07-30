import React from 'react';
import './search.scss';
import TextField from '../form/textField';

const Search = () => {
  return (
    <div className='search'>
      <p className='search__text'>Поиск:</p>
      <TextField />
    </div>
  );
};

export default Search;
