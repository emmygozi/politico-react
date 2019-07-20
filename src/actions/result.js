import axios from "axios";
import { toast } from "react-toastify";
import serverAPI from "./serverAPI";
import { FETCH_RESULT_SUCCESS, FETCH_RESULT_FAILURE } from "./action";

export const fetchResult = () => dispatch => {
  return axios
    .get(`${serverAPI}/office/1/result`)
    .then(response => {
      console.log(response.data.data, "yaay");
      dispatch({
        type: FETCH_RESULT_SUCCESS,
        payload: response.data.data
      });
    })
    .catch(err => {
      dispatch({ type: FETCH_RESULT_FAILURE, payload: err.response });
      // console.log(err.response);
      throw err;
    });
};
