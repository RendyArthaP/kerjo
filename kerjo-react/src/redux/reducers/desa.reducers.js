import {
  GET_DESA_LOADING,
  GET_DESA_SUCCESS,
  GET_DESA_ERROR
} from "../actions/desa.actions.js";

const initialState = {
  loading: false,
  desa: []
}

const desaReducers = (state = initialState, action) => {
  switch(action.type) {
    case GET_DESA_LOADING:
      return {
        ...state,
        loading: true
      }
    case GET_DESA_SUCCESS:
      return {
        ...state,
        loading: false,
        desa: action.result
      }
    case GET_DESA_ERROR:
      return {
        ...state,
        loading: true
      }
    default:
      return state;
  }
}

export default desaReducers;

