import { FETCH_OFFICE_SUCCESS, FETCH_OFFICE_FAILURE, FETCH_PARTY_SUCCESS, FETCH_PARTY_FAILURE } from "../actions/action";

const initialState = {
  offices: [],
  error: null
};

export default function(state = initialState, action) {
  console.log(action.payload, "Stuffss");
  switch (action.type) {
    case FETCH_OFFICE_SUCCESS:
      return {
        ...state,
        offices: action.payload
      };
    case FETCH_OFFICE_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    case FETCH_PARTY_SUCCESS:
      return {
        ...state,
        parties: action.payload
      };
    case FETCH_PARTY_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
}
