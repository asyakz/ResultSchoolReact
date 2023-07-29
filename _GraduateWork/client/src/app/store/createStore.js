import { combineReducers, configureStore } from '@reduxjs/toolkit';
import jewelryTypesReducer from './jewelryTypes';
import jewelriesReducer from './jewelries';
import materialsReducer from './materials';
import techniquesReducer from './techniques';
import colorsReducer from './colors';

const rootReducer = combineReducers({
  materials: materialsReducer,
  colors: colorsReducer,
  techniques: techniquesReducer,
  jewelryTypes: jewelryTypesReducer,
  jewelries: jewelriesReducer
});

export function createStore() {
  return configureStore({
    reducer: rootReducer
  });
}
