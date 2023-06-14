import { createSlice } from "@reduxjs/toolkit";
import professionService from "../services/profession.service";

const professionSlice = createSlice({
  name: "professions",
  initialState: {
    entities: null,
    isLoading: true,
    error: null,
    lastFetch: null
  },
  reducers: {
    professionRequested: (state) => {
      state.isLoading = true;
    },
    professionReceived: (state, action) => {
      state.entities = action.payload;
      state.lastFetch = Date.now();
      state.isLoading = false;
    },
    professionRequestFailed: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    }
  }
});

const { reducer: professionsReducer, actions } = professionSlice;
const { professionRequested, professionReceived, professionRequestFailed } =
  actions;

function isOutdated(date) {
  if (Date.now() - date > 10 * 60 * 1000) {
    return true;
  }
  return false;
}

export const loadProfession = () => async (dispatch, getState) => {
  const { lastFetch } = getState().professions;
  if (isOutdated(lastFetch)) {
    dispatch(professionRequested());
    try {
      const { content } = await professionService.get();
      dispatch(professionReceived(content));
    } catch (error) {
      dispatch(professionRequestFailed(error.message));
    }
  }
};

export const getProfession = () => (state) => state.professions.entities;

export const getProfessionLoadingStatus = () => (state) =>
  state.professions.isLoading;
export const getProfessionById = (professionsId) => (state) => {
  if (state.professions.entities) {
    for (const prof of state.professions.entities) {
      if (prof._id === professionsId) {
        return prof;
      }
    }
  }
};

export default professionsReducer;
