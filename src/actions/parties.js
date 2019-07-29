import axios from "axios";
import { toast } from 'react-toastify';
import serverAPI from "./serverAPI";
import {
  REGISTER_PARTY_SUCCESS,
  REGISTER_PARTY_FAILURE,
  MODIFY_PARTY_SUCCESS,
  MODIFY_PARTY_FAILURE,
  DELETE_PARTY_SUCCESS,
  DELETE_PARTY_FAILURE,
} from "./action";

export const registerParty = (newParty) => dispatch => {
    console.log(newParty, "newParty details");
  return axios
    .post(`${serverAPI}/parties`, newParty)
    .then(response => {
      console.log(response.data.data, "yaay");
      toast.success('Party successfully created!');
      dispatch({
        type: REGISTER_PARTY_SUCCESS,
        payload: response.data.data
      });
      window.location.reload();
    })
    .catch(err => {
        toast.error(err.response.data.error);
      dispatch({ type: REGISTER_PARTY_FAILURE, payload: err.response });
      throw err;
    });
};

export const editPartyName = (id, editParty) => dispatch => {
    console.log(editParty, "editParty details");
  return axios
    .patch(`${serverAPI}/parties/${id}/name`, editParty)
    .then(response => {
      console.log(response.data.data, "yaay");
      toast.success('Party successfully updated!');
      dispatch({
        type: MODIFY_PARTY_SUCCESS,
        payload: response.data.data
      });
    })
    .catch(err => {
        toast.error(err.response.data.error);
      dispatch({ type: MODIFY_PARTY_FAILURE, payload: err.response });
      throw err;
    });
};

export const deleteParty = (id) => dispatch => {
  return axios
    .delete(`${serverAPI}/parties/${id}`)
    .then(response => {
      console.log(response.data.data, "yaay");
      toast.success('Party successfully deleted!');
      dispatch({
        type: DELETE_PARTY_SUCCESS,
        payload: response.data.data
      });
    })
    .catch(err => {
        toast.error(err.response.data.error);
      dispatch({ type: DELETE_PARTY_FAILURE, payload: err.response });
    });
};
