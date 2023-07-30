import React, { useEffect, useState } from 'react';
import JewelryList from '../components/page/jewelryList/jewelryList';
import Sort from '../components/common/sort/sort';
import FilterNav from '../components/navigation/filterNav';
import { useSelector } from 'react-redux';
import { getJewelriesList } from '../store/jewelries';
import Pagination from '../components/common/pagination/pagination';
import { paginate } from '../utils/paginate';
import _ from 'lodash';
import './catalogPage.scss';

const CatalogPage = () => {
  const jewelries = useSelector(getJewelriesList());
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedType, setSelectedType] = useState();
  const [selectedMaterial, setSelectedMaterial] = useState();
  const [selectedColor, setSelectedColor] = useState();
  const [selectedTechnique, setSelectedTechnique] = useState();
  const [sortBy, setSortBy] = useState({ path: 'price', order: 'asc' });
  const pageSize = 4;
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedType, selectedColor, selectedMaterial, selectedTechnique]);

  const handleTypeSelect = (item) => {
    setSelectedType(item);
    setSelectedMaterial();
    setSelectedColor();
    setSelectedTechnique();
  };

  const handleMaterialSelect = (item) => {
    setSelectedType();
    setSelectedMaterial(item);
    setSelectedColor();
    setSelectedTechnique();
  };

  const handleColorsSelect = (item) => {
    setSelectedType();
    setSelectedMaterial();
    setSelectedColor(item);
    setSelectedTechnique();
  };

  const handleTechniquesSelect = (item) => {
    setSelectedType();
    setSelectedMaterial();
    setSelectedColor();
    setSelectedTechnique(item);
  };

  const clearFilter = () => {
    setSelectedType();
    setSelectedColor();
    setSelectedMaterial();
    setSelectedTechnique();
  };

  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  const handleSort = (item) => {
    console.log('sort', item);
    setSortBy(item);
  };

  function filterJewelries(data) {
    if (selectedType) {
      return data.filter(
        (jewelry) => jewelry.jewelryType === selectedType.value
      );
    }
    if (selectedMaterial) {
      return data.filter((jewelry) =>
        jewelry.materials.some((m) => m === selectedMaterial.value)
      );
    }
    if (selectedColor) {
      return data.filter((jewelry) =>
        jewelry.colors.some((c) => c === selectedColor.value)
      );
    }
    if (selectedTechnique) {
      return data.filter((jewelry) =>
        jewelry.techniques.some((t) => t === selectedTechnique.value)
      );
    }
    return data;
  }

  const filteredJewelries = filterJewelries(jewelries);
  const count = filteredJewelries.length;
  const sortedJewelries = _.orderBy(
    filteredJewelries,
    [sortBy.path],
    [sortBy.order]
  );
  const jewelriesCrop = paginate(sortedJewelries, currentPage, pageSize);

  return (
    <>
      <div>
        <h1 className='caption'>Каталог</h1>
        <div className='header-filter'>
          <FilterNav
            onChangeType={handleTypeSelect}
            onChangeMaterial={handleMaterialSelect}
            onChangeColor={handleColorsSelect}
            onChangeTechnique={handleTechniquesSelect}
            clearFilters={clearFilter}
          />
        </div>
        <Sort onSort={handleSort} />
        <JewelryList jewelries={jewelriesCrop} />
      </div>

      <div className='d-flex justify-content-center'>
        <Pagination
          itemsCount={count}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </>
  );
};

export default CatalogPage;
