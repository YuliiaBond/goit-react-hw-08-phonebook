import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

/*
 * POST @ /users/signup
 * body { name, email, password }
 *
 * После успешной регистрации добавляем токен в HTTP-заголовок
 */
const register = createAsyncThunk('auth/register', async credentials => { 
  try {
    const { data } = await axios.post('/users/signup', credentials);
    
    token.set(data.token);
    return data;
  } catch (error) {
    // dispatch(registerError(error.message));
  }
});

/*
 * POST @ /users/login
 * body:
 *    { email, password }
 *
 * После успешного логина добавляем токен в HTTP-заголовок
 */
const logIn = createAsyncThunk('ayth/login', async credentials => {
  try {
    const {data} = await axios.post('/users/login', credentials);

    token.set(data.token);
    return data;
  } catch (error) {
    // dispatch(loginError(error.message));
  }
});

/*
 * POST @ /users/logout
 * headers: Authorization: Bearer token
 * После успешного логаута, удаляем токен из HTTP-заголовка
 */
const logOut = createAsyncThunk('auth/logout', async () => { 
  try {
    await axios.post('/users/logout');

    token.unset();
  } catch (error) {
    // dispatch(logoutError(error.message));
  }
});

/*
 * GET @ /users/current
 * headers: Authorization: Bearer token
 *
 * 1. Забираем токен из стейта через getState()
 * 2. Если токена нет, выходим не выполняя никаких операций
 * 3. Если токен есть, добавляет его в HTTP-заголовок и выполянем операцию
 */
const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    
    if (persistedToken === null) {
    // console.log('Токена нет, уходим из fetchCurrentUser')
    return thunkAPI.rejectWithValue();
  }

  token.set(persistedToken);
  try {
    const {data} = await axios.get('/users/current');
    return data;
  } catch (error) {
    // dispatch(getCurrentUserError(error.message));
  }
  });

  const operations = {
  register,
  logOut,
  logIn,
  fetchCurrentUser,
};
export default operations;








// import axios from 'axios';
// import {
//   registerRequest,
//   registerSuccess,
//   registerError,
//   logoutRequest,
//   logoutSuccess,
//   logoutError,
//   loginRequest,
//   loginSuccess,
//   loginError,
//   getCurrentUserRequest,
//   getCurrentUserSuccess,
//   getCurrentUserError,
// } from './auth-actions';

// axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

// const token = {
//   set(token) {
//     axios.defaults.headers.common.Authorization = `Bearer ${token}`;
//   },
//   unset() {
//     axios.defaults.headers.common.Authorization = '';
//   },
// };

// /*
//  * POST @ /users/signup
//  * body { name, email, password }
//  *
//  * После успешной регистрации добавляем токен в HTTP-заголовок
//  */
// const register = credentials => async dispatch => {
//   dispatch(registerRequest());

//   try {
//     const response = await axios.post('/users/signup', credentials);

//     token.set(response.data.token);
//     dispatch(registerSuccess(response.data));
//   } catch (error) {
//     dispatch(registerError(error.message));
//   }
// };

// /*
//  * POST @ /users/login
//  * body:
//  *    { email, password }
//  *
//  * После успешного логина добавляем токен в HTTP-заголовок
//  */
// const logIn = credentials => async dispatch => {
//   dispatch(loginRequest());

//   try {
//     const response = await axios.post('/users/login', credentials);

//     token.set(response.data.token);
//     dispatch(loginSuccess(response.data));
//   } catch (error) {
//     dispatch(loginError(error.message));
//   }
// };

// /*
//  * POST @ /users/logout
//  * headers:
//  *    Authorization: Bearer token
//  *
//  * 1. После успешного логаута, удаляем токен из HTTP-заголовка
//  */
// const logOut = () => async dispatch => {
//   dispatch(logoutRequest());

//   try {
//     await axios.post('/users/logout');

//     token.unset();
//     dispatch(logoutSuccess());
//   } catch (error) {
//     dispatch(logoutError(error.message));
//   }
// };

// /*
//  * GET @ /users/current
//  * headers:
//  *    Authorization: Bearer token
//  *
//  * 1. Забираем токен из стейта через getState()
//  * 2. Если токена нет, выходим не выполняя никаких операций
//  * 3. Если токен есть, добавляет его в HTTP-заголовок и выполянем операцию
//  */
// const getCurrentUser = () => async (dispatch, getState) => {
//   const {
//     auth: { token: persistedToken },
//   } = getState();

//   if (!persistedToken) {
//     return;
//   }

//   token.set(persistedToken);
//   dispatch(getCurrentUserRequest());

//   try {
//     const response = await axios.get('/users/current');

//     dispatch(getCurrentUserSuccess(response.data));
//   } catch (error) {
//     dispatch(getCurrentUserError(error.message));
//   }
// };

// export { register, logOut, logIn, getCurrentUser };