import { createAction, createSlice } from '@reduxjs/toolkit';
import authService from '../services/auth.service';
import localStorageService from '../services/localStorage.service';

const initialState = localStorageService.getAccessToken()
  ? {
      error: null,
      auth: {
        userId: localStorageService.getUserId(),
        name: localStorageService.getUserName(),
        isAdmin: localStorageService.userIsAdmin()
      },
      isLoggedIn: true,
      dataLoaded: false
    }
  : {
      error: null,
      auth: null,
      isLoggedIn: false,
      dataLoaded: false
    };

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    authRequestSuccess: (state, action) => {
      state.auth = action.payload.user;
    },
    authRequestFailed: (state, action) => {
      state.error = action.payload;
    },
    userCreated: (state, action) => {
      state.entities.push(action.payload);
    },
    userLoggedOut: (state) => {
      state.auth = null;
      state.isLoggedIn = false;
    },
    authRequested: (state) => {
      state.error = null;
    }
  }
});

const { reducer: usersReducer, actions } = usersSlice;
const { authRequestFailed, authRequestSuccess, userLoggedOut } = actions;

const authRequested = createAction('users/authRequested');

export const login =
  ({ payload }) =>
  async (dispatch) => {
    const { email, password } = payload;
    dispatch(authRequested());
    try {
      const data = await authService.login({ email, password });
      console.log('login', data);
      localStorageService.setTokens(data);
      dispatch(authRequestSuccess({ user: data.user }));
    } catch (error) {
      const { code, message } = error.response.data.error;
      if (code === 400) {
        const errorMessage = 'bad request';
        dispatch(authRequestFailed(errorMessage));
      } else {
        dispatch(authRequestFailed(message));
      }
    }
  };

export const signUp =
  ({ payload }) =>
  async (dispatch) => {
    dispatch(authRequested());
    try {
      const data = await authService.register(payload);
      localStorageService.setTokens(data);
      dispatch(authRequestSuccess({ user: data.user }));
    } catch (error) {
      dispatch(authRequestFailed(error.message));
    }
  };
export const logOut = () => (dispatch) => {
  localStorageService.removeAuthData();
  dispatch(userLoggedOut());
};

export const getIsLoggedIn = () => (state) => state.users.isLoggedIn;
export const getDataStatus = () => (state) => state.users.dataLoaded;
export const getCurrentUserId = () => (state) => {
  return state.users.auth ? state.users.auth.userId : null;
};
export const getCurrentUserName = () => (state) => {
  return state.users.auth ? state.users.auth.name : '';
};
export const currentUserIsAdmin = () => (state) => {
  return state.users.auth ? state.users.auth.isAdmin : false;
};
export const getAuthErrors = () => (state) => state.users.error;
export default usersReducer;
