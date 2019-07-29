import axios from "axios";
import serverAPI from "./serverAPI";
import {
  FETCH_OFFICE_SUCCESS,
  FETCH_OFFICE_FAILURE,
  FETCH_PARTY_SUCCESS,
  FETCH_PARTY_FAILURE
} from "./action";

export const fetchOffice = () => dispatch => {
  return axios
    .get(`${serverAPI}/offices`)
    .then(response => {
      console.log(response.data.data, "yaay");
      dispatch({
        type: FETCH_OFFICE_SUCCESS,
        payload: response.data.data
      });
    })
    .catch(err => {
      dispatch({ type: FETCH_OFFICE_FAILURE, payload: err.response });
      throw err;
    });
};
export const fetchParties = () => dispatch => {
  return axios
    .get(`${serverAPI}/parties`)  
    .then(response => {
      console.log(response.data.data, "yaay");
      dispatch({
        type: FETCH_PARTY_SUCCESS,
        payload: response.data.data
      });
    })
    .catch(err => {
      dispatch({ type: FETCH_PARTY_FAILURE, payload: err.response });
      throw err;
    });
};

