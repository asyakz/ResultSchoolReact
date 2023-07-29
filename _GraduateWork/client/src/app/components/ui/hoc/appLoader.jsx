import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { loadJewelryTypesList } from '../../../store/jewelryTypes';
import { loadMaterialsList } from '../../../store/materials';
import { loadTechniquesList } from '../../../store/techniques';
import { loadColorsList } from '../../../store/colors';

const AppLoader = ({ children }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadMaterialsList());
    dispatch(loadTechniquesList());
    dispatch(loadJewelryTypesList());
    dispatch(loadColorsList());
  }, []);
  return children;
};

AppLoader.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

export default AppLoader;
