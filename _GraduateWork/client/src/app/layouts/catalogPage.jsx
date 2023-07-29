import React from 'react';
import JewelryList from '../components/page/jewelryList/jewelryList';
import JewelriesLoader from '../components/ui/hoc/jewelriesLoader';
import Sort from '../components/navigation/sort';

const CatalogPage = () => {
  return (
    <JewelriesLoader>
      <div>
        <h1 className='caption'>Каталог</h1>
        <Sort />
        <JewelryList />
      </div>
    </JewelriesLoader>
  );
};

export default CatalogPage;
