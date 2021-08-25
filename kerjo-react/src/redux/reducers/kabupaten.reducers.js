import {
  GET_KABUPATEN_LOADING,
  GET_KABUPATEN_SUCCESS,
  GET_KABUPATEN_ERROR
} from "../actions/kabupaten.actions.js";

const initialState = {
  loading: false,
  kabupaten: []
}

const kabupatenReducers = (state = initialState, action) => {
  switch(action.type) {
    case GET_KABUPATEN_LOADING:
      return {
        ...state,
        loading: true
      }
    case GET_KABUPATEN_SUCCESS:
      return {
        ...state,
        loading: false,
        kabupaten: action.result
      }
    case GET_KABUPATEN_ERROR:
      return {
        ...state,
        loading: true
      }
    default:
      return state;
  }
}

export default kabupatenReducers;

