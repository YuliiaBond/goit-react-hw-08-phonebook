import { createSlice } from '@reduxjs/toolkit';
import { authOperations } from '../auth';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isFetchingCurrentUser: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [authOperations.register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [authOperations.logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [authOperations.logOut.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [authOperations.fetchCurrentUser.pending](state) {
      state.isFetchingCurrentUser = true;
    },
    [authOperations.fetchCurrentUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isFetchingCurrentUser = false;
    },
    [authOperations.fetchCurrentUser.rejected](state) {
      state.isFetchingCurrentUser = false;
    },
  },
});

export default authSlice.reducer;

// import { combineReducers } from 'redux';
// import { createReducer } from '@reduxjs/toolkit';
// import {
//   registerSuccess,
//   registerError,
//   logoutSuccess,
//   logoutError,
//   loginSuccess,
//   loginError,
//   getCurrentUserSuccess,
//   getCurrentUserError,
// } from './auth-actions';

// const initialUserState = { name: null, email: null };

// const user = createReducer(initialUserState, {
//   [registerSuccess]: (_, { payload }) => payload.user,
//   [loginSuccess]: (_, { payload }) => payload.user,
//   [logoutSuccess]: () => initialUserState,
//   [getCurrentUserSuccess]: (_, { payload }) => payload,
// });

// const token = createReducer(null, {
//   [registerSuccess]: (_, { payload }) => payload.token,
//   [loginSuccess]: (_, { payload }) => payload.token,
//   [logoutSuccess]: () => null,
// });

// const setError = (_, { payload }) => payload;

// const error = createReducer(null, {
//   [registerError]: setError,
//   [loginError]: setError,
//   [logoutError]: setError,
//   [getCurrentUserError]: setError,
// });
// const isAuthenticated = createReducer(false, {
//   [registerSuccess]: () => true,
//   [loginSuccess]: () => true,
//   [getCurrentUserSuccess]: () => true,
//   [registerError]: () => false,
//   [loginError]: () => false,
//   [getCurrentUserError]: () => false,
//   [logoutSuccess]: () => false,
// });

// export default combineReducers({
//   user,
//   isAuthenticated,
//   token,
//   error,
// });