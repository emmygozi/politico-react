import {
    REGISTER_PARTY_SUCCESS,
    REGISTER_PARTY_FAILURE,
    MODIFY_PARTY_SUCCESS,
    MODIFY_PARTY_FAILURE,
    DELETE_PARTY_SUCCESS,
    DELETE_PARTY_FAILURE,
} from "../actions/action";

const initialState = {
  parties: [],
  error: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case REGISTER_PARTY_SUCCESS:
      return {
        ...state,
        parties: action.payload
      };
    case REGISTER_PARTY_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
}
