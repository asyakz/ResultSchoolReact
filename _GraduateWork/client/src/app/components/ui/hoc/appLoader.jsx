import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import {
  getJewelryTypesLoadingStatus,
  loadJewelryTypesList
} from '../../../store/jewelryTypes';
import { loadMaterialsList } from '../../../store/materials';
import { loadTechniquesList } from '../../../store/techniques';
import { loadColorsList } from '../../../store/colors';
import LoaderSpinner from '../../common/loader-spinner/loader-spinner';
import {
  getJewelriesLoadingStatus,
  loadJewelriesList
} from '../../../store/jewelries';

const AppLoader = ({ children }) => {
  const dispatch = useDispatch();
  // const isMaterialsLoading = useSelector(getMaterialsLoadingStatus());
  // const isColorsLoading = useSelector(getColorsLoadingStatus());
  // const isTechniquesLoading = useSelector(getTechniquesLoadingStatus());
  const isTypesLoading = useSelector(getJewelryTypesLoadingStatus());
  const isJewelryLoading = useSelector(getJewelriesLoadingStatus());
  // const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(loadMaterialsList());
    dispatch(loadTechniquesList());
    dispatch(loadJewelryTypesList());
    dispatch(loadColorsList());
    dispatch(loadJewelriesList());
  }, []);
  console.log('isJewelryLoading', isJewelryLoading);
  console.log('isJewelryLoading', isTypesLoading);
  if (!isJewelryLoading && !isTypesLoading) return children;
  return <LoaderSpinner />;
};

AppLoader.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

export default AppLoader;
