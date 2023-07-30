import { createSlice } from '@reduxjs/toolkit';
import isOutdated from '../utils/isOutdated';
import colorsService from '../services/colors.service';

const colorsSlice = createSlice({
  name: 'colors',
  initialState: {
    entities: null,
    isLoading: true,
    error: null,
    lastFetch: null
  },
  reducers: {
    colorsRequested: (state) => {
      state.isLoading = true;
    },
    colorsReceived: (state, action) => {
      state.entities = action.payload;
      state.lastFetch = Date.now();
      state.isLoading = false;
    },
    colorsRequestFailed: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    }
  }
});

const { reducer: colorsReducer, actions } = colorsSlice;
const { colorsRequested, colorsReceived, colorsRequestFailed } = actions;

export const loadColorsList = () => async (dispatch, getState) => {
  const { lastFetch } = getState().colors;
  if (isOutdated(lastFetch)) {
    dispatch(colorsRequested());
    try {
      const { content } = await colorsService.get();
      dispatch(colorsReceived(content));
      console.log('loadColorsList finish');
    } catch (error) {
      dispatch(colorsRequestFailed(error.message));
    }
  }
};

export const getColors = () => (state) => state.colors.entities;
export const getColorsLoadingStatus = () => (state) => state.colors.isLoading;
export const getColorsByIds = (colorsIds) => (state) => {
  if (state.colors.entities) {
    const colorsArray = [];
    for (const colorId of colorsIds) {
      for (const color of state.colors.entities) {
        if (color._id === colorId) {
          colorsArray.push(color);
          break;
        }
      }
    }
    return colorsArray;
  }
  return [];
};

export default colorsReducer;
