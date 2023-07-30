import { createSlice } from '@reduxjs/toolkit';
import isOutdated from '../utils/isOutdated';
import techniquesService from '../services/techniques.service';

const techniquesSlice = createSlice({
  name: 'techniques',
  initialState: {
    entities: null,
    isLoading: true,
    error: null,
    lastFetch: null
  },
  reducers: {
    techniquesRequested: (state) => {
      state.isLoading = true;
    },
    techniquesReceived: (state, action) => {
      state.entities = action.payload;
      state.lastFetch = Date.now();
      state.isLoading = false;
    },
    techniquesRequestFailed: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    }
  }
});

const { reducer: techniquesReducer, actions } = techniquesSlice;
const { techniquesRequested, techniquesReceived, techniquesRequestFailed } =
  actions;

export const loadTechniquesList = () => async (dispatch, getState) => {
  const { lastFetch } = getState().techniques;
  if (isOutdated(lastFetch)) {
    dispatch(techniquesRequested());
    try {
      const { content } = await techniquesService.get();
      dispatch(techniquesReceived(content));
      console.log('loadTechniquesList finish');
    } catch (error) {
      dispatch(techniquesRequestFailed(error.message));
    }
  }
};

export const getTechniques = () => (state) => state.techniques.entities;
export const getTechniquesLoadingStatus = () => (state) =>
  state.techniques.isLoading;
export const getTechniquesByIds = (techniquesIds) => (state) => {
  if (state.techniques.entities) {
    const techniquesArray = [];
    for (const techniqueId of techniquesIds) {
      for (const technique of state.techniques.entities) {
        if (technique._id === techniqueId) {
          techniquesArray.push(technique);
          break;
        }
      }
    }
    return techniquesArray;
  }
  return [];
};

export default techniquesReducer;
