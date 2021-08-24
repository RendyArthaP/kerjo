import {
  GET_PROVINSI_LOADING,
  GET_PROVINSI_SUCCESS,
  GET_PROVINSI_ERROR,
  GET_KABUPATEN_LOADING,
  GET_KABUPATEN_SUCCESS,
  GET_KABUPATEN_ERROR
} from "../actions/provinsi.actions.js";

const initialState = {
  loading: false,
  provinsi: [],
  kabupaten: []
}

const provinsiReducers = (state = initialState, action) => {
  switch(action.type) {
    case GET_PROVINSI_LOADING:
      return {
        ...state,
        loading: true
      }
    case GET_PROVINSI_SUCCESS:
      return {
        ...state,
        loading: false,
        provinsi: action.result
      }
    case GET_PROVINSI_ERROR:
      return {
        ...state,
        loading: true
      }
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

export default provinsiReducers