import { combineReducers, configureStore } from '@reduxjs/toolkit';
import jewelryTypesReducer from './jewelryTypes';
import jewelriesReducer from './jewelries';
import materialsReducer from './materials';
import techniquesReducer from './techniques';
import colorsReducer from './colors';
import usersReducer from './users';

const rootReducer = combineReducers({
  materials: materialsReducer,
  colors: colorsReducer,
  techniques: techniquesReducer,
  jewelryTypes: jewelryTypesReducer,
  jewelries: jewelriesReducer,
  users: usersReducer
});

export function createStore() {
  return configureStore({
    reducer: rootReducer
  });
}
