import { createAction, createSlice } from '@reduxjs/toolkit';
import localStorageService from '../services/localStorage.service';
import jewelryService from '../services/jewelry.service';

const initialState = localStorageService.getAccessToken()
  ? {
      entities: null,
      isLoading: true,
      error: null,
      auth: { userId: localStorageService.getUserId() },
      isLoggedIn: true,
      dataLoaded: false
    }
  : {
      entities: null,
      isLoading: false,
      error: null,
      auth: null,
      isLoggedIn: false,
      dataLoaded: false
    };

const jewelriesSlice = createSlice({
  name: 'jewelries',
  initialState,
  reducers: {
    jewelriesRequested: (state) => {
      state.isLoading = true;
    },
    jewelriesReceived: (state, action) => {
      state.entities = action.payload;
      state.dataLoaded = true;
      state.isLoading = false;
    },
    jewelriesRequestFailed: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    authRequestSuccess: (state, action) => {
      state.auth = action.payload;
      state.isLoggedIn = true;
    },
    jewelryCreated: (state, action) => {
      if (!Array.isArray(state.entities)) {
        state.entities = [];
      }
      state.entities.push(action.payload);
    },
    jewelryUpdateSuccessed: (state, action) => {
      state.entities[
        state.entities.findIndex((j) => j._id === action.payload._id)
      ] = action.payload;
    }
  }
});

const { reducer: jewelriesReducer, actions } = jewelriesSlice;
const {
  jewelriesRequested,
  jewelriesReceived,
  jewelriesRequestFailed,
  jewelryCreated,
  jewelryUpdateSuccessed
} = actions;

const jewelryCreateRequested = createAction('jewelries/jewelryCreateRequested');
const createJewelryFailed = createAction('jewelries/createJewelryFailed');
const jewelryUpdateRequested = createAction('jewelries/jewelryUpdateRequested');
const jewelryUpdateFailed = createAction('jewelries/jewelryUpdateFailed');

export const newJewelry = (jewelry) => async (dispatch) => {
  dispatch(createJewelry(jewelry));
};

function createJewelry(payload) {
  return async function (dispatch) {
    dispatch(jewelryCreateRequested());
    try {
      const { content } = await jewelryService.create(payload);
      dispatch(jewelryCreated(content));
      history.push('/jewelries');
    } catch (error) {
      dispatch(createJewelryFailed(error.message));
    }
  };
}

export const loadJewelriesList = () => async (dispatch) => {
  dispatch(jewelriesRequested());
  try {
    const { content } = await jewelryService.get();
    console.log('loadJewelriesList', content);
    dispatch(jewelriesReceived(content));
  } catch (error) {
    dispatch(jewelriesRequestFailed(error.message));
  }
};
export const updateJewerly = (payload) => async (dispatch) => {
  dispatch(jewelryUpdateRequested());
  try {
    const { content } = await jewelryService.update(payload, payload._id);
    dispatch(jewelryUpdateSuccessed(content));
    history.push(`/jewerlies/${content._id}`);
  } catch (error) {
    dispatch(jewelryUpdateFailed(error.message));
  }
};

export const getJewelriesList = () => (state) => state.jewelries.entities;
export const getJewelryById = (jewelryId) => (state) => {
  console.log('state.jewelries.entities', state.jewelries.entities);
  if (state.jewelries.entities) {
    return state.jewelries.entities.find((j) => j._id === jewelryId);
  }
};
export const getDataStatus = () => (state) => state.jewelries.dataLoaded;
export const getJewelriesLoadingStatus = () => (state) =>
  state.jewelries.isLoading;

export default jewelriesReducer;
