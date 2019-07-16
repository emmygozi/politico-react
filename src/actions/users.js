import axios from 'axios';
import { toast } from 'react-toastify';
import setAuthToken from '../util/authUtil';
import serverAPI from './serverAPI';
import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from './action';


export const login = (userData) => dispatch => {
  return axios.post(`${serverAPI}/auth/login`, userData)
    .then(response => {
      if(response.status === 200) {
        localStorage.setItem('token', response.data.data[0].token);
        setAuthToken(response.data.data[0].token);
        response.message = 'Login success';
        toast.success(response.message);
        dispatch({ type: LOGIN_SUCCESS, payload: response });
        return response;
      }
      
    })
    .catch(err => {
      err.response.message = 'Login failed';
      dispatch({ type: LOGIN_FAILURE, payload: err.response });
      toast.error(err.response.data.error);
      throw err;
    })
  }
