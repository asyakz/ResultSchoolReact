import { createSlice } from '@reduxjs/toolkit';
import isOutdated from '../utils/isOutdated';
import materialsService from '../services/materials.service';

const materialsSlice = createSlice({
  name: 'materials',
  initialState: {
    entities: null,
    isLoading: true,
    error: null,
    lastFetch: null
  },
  reducers: {
    materialsRequested: (state) => {
      state.isLoading = true;
    },
    materialsReceived: (state, action) => {
      state.entities = action.payload;
      state.lastFetch = Date.now();
      state.isLoading = false;
    },
    materialsRequestFailed: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    }
  }
});

const { reducer: materialsReducer, actions } = materialsSlice;
const { materialsRequested, materialsReceived, materialsRequestFailed } =
  actions;

export const loadMaterialsList = () => async (dispatch, getState) => {
  const { lastFetch } = getState().materials;
  if (isOutdated(lastFetch)) {
    dispatch(materialsRequested());
    try {
      const { content } = await materialsService.get();
      dispatch(materialsReceived(content));
      console.log('loadMaterialsList finish');
    } catch (error) {
      dispatch(materialsRequestFailed(error.message));
    }
  }
};

export const getMaterials = () => (state) => state.materials.entities;
export const getMaterialsLoadingStatus = () => (state) =>
  state.materials.isLoading;
export const getMaterialsByIds = (materialsIds) => (state) => {
  if (state.materials.entities) {
    const materialsArray = [];
    for (const materialId of materialsIds) {
      for (const material of state.materials.entities) {
        if (material._id === materialId) {
          materialsArray.push(material);
          break;
        }
      }
    }
    return materialsArray;
  }
  return [];
};

export default materialsReducer;
