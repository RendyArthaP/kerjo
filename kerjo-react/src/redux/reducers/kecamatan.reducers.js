import {
  GET_KECAMATAN_LOADING,
  GET_KECAMATAN_SUCCESS,
  GET_KECAMATAN_ERROR
} from "../actions/kecamatan.actions.js";

const initialState = {
  loading: false,
  kecamatan: []
}

const kecamatanReducers = (state = initialState, action) => {
  switch(action.type) {
    case GET_KECAMATAN_LOADING:
      return {
        ...state,
        loading: true
      }
    case GET_KECAMATAN_SUCCESS:
      return {
        ...state,
        loading: false,
        kecamatan: action.result
      }
    case GET_KECAMATAN_ERROR:
      return {
        ...state,
        loading: true
      }
    default:
      return state;
  }
}

export default kecamatanReducers;

