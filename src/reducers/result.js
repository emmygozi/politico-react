import {
    FETCH_RESULT_SUCCESS,
    FETCH_RESULT_FAILURE
} from "../actions/action";

const initialState = {
    result: {},
    results: [],
    error: null,
    message: null,
    status: 400
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_RESULT_SUCCESS:
      return {
        ...state,
        results: action.payload
      };
    case FETCH_RESULT_FAILURE:
      return {
        ...state,
        error: action.payload.status,
        message: action.payload.message
      };
    default:
      return state;
  }
}
