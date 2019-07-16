import {
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
  } from "../actions/action";
  
  const initialState = {
    user: {},
    isAuth: false,
    error: null,
    message: null,
    status: 400
  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case LOGIN_SUCCESS:
        return {
          ...state,
          user: action.payload,
          isAuth: true,
          message: action.payload.message
        };
      case LOGIN_FAILURE:
        return {
          ...state,
          error: action.payload.status,
          message: action.payload.message
        };
      default:
        return state;
    }
  }
  