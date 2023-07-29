import { createSlice } from '@reduxjs/toolkit';
import isOutdated from '../utils/isOutdated';
import jewelryTypeService from '../services/jewelryType.service';

const jewelryTypesSlice = createSlice({
  name: 'jewelryTypes',
  initialState: {
    entities: null,
    isLoading: true,
    error: null,
    lastFetch: null
  },
  reducers: {
    jewelryTypesRequested: (state) => {
      state.isLoading = true;
    },
    jewelryTypesReceived: (state, action) => {
      state.entities = action.payload;
      state.lastFetch = Date.now();
      state.isLoading = false;
    },
    jewelryTypesRequestFailed: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    }
  }
});

const { reducer: jewelryTypesReducer, actions } = jewelryTypesSlice;
const {
  jewelryTypesRequested,
  jewelryTypesReceived,
  jewelryTypesRequestFailed
} = actions;

export const loadJewelryTypesList = () => async (dispatch, getState) => {
  const { lastFetch } = getState().jewelryTypes;
  if (isOutdated(lastFetch)) {
    dispatch(jewelryTypesRequested());
    try {
      const { content } = await jewelryTypeService.get();
      dispatch(jewelryTypesReceived(content));
    } catch (error) {
      dispatch(jewelryTypesRequestFailed(error.message));
    }
  }
};

export const getJewelryTypes = () => (state) => state.jewelryTypes.entities;
export const getJewelryTypeById = (jewelryTypeId) => (state) => {
  console.log('all types', state.jewelryTypes.entities);
  if (state.jewelryTypes.entities) {
    return state.jewelryTypes.entities.find((jt) => jt._id === jewelryTypeId);
  }
};
export const getJewelryTypesLoadingStatus = () => (state) =>
  state.jewelryTypes.isLoading;
export const getProfessionById = (id) => (state) => {
  if (state.jewelryTypes.entities) {
    return state.jewelryTypes.entities.find((p) => p._id === id);
  }
};

export default jewelryTypesReducer;
