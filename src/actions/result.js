import axios from "axios";
import { toast } from "react-toastify";
import serverAPI from "./serverAPI";
import { FETCH_RESULT_SUCCESS, FETCH_RESULT_FAILURE } from "./action";

export const fetchResult = () => dispatch => {
  return axios
    .get(`${serverAPI}/office/1/result`)
    .then(response => {
      dispatch({
        type: FETCH_RESULT_SUCCESS,
        payload: response.data.data
      });
    })
    .catch(err => {
      dispatch({ type: FETCH_RESULT_FAILURE, payload: err.response });
      throw err;
    });
};
