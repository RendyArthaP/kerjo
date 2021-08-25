import axios from "axios";

export const GET_DESA_LOADING = "GET_DESA_LOADING";
export const GET_DESA_SUCCESS = "GET_DESA_SUCCESS";
export const GET_DESA_ERROR = "GET_DESA_ERROR";

export const getDesaLoading = () => {
  return {
    type: GET_DESA_LOADING
  }
}

export const getDesaSuccess = (result) => {
  return {
    type: GET_DESA_SUCCESS,
    result
  }
}

export const getDesaError = (error) => {
  return {
    type: GET_DESA_ERROR,
    error
  }
}

export const getDataDesa = (idKecamatan) => {
  return function(dispatch) {
    dispatch(getDesaLoading())

    axios
      .get(`${process.env.REACT_APP_DESA}${idKecamatan}`)
      .then((result) => dispatch(getDesaSuccess(result.data)))
      .catch((error) => dispatch(getDesaError(error)))
  }
}