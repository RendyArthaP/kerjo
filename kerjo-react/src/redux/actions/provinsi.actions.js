import axios from "axios";

export const GET_PROVINSI_LOADING = "GET_PROVINSI_LOADING";
export const GET_PROVINSI_SUCCESS = "GET_PROVINSI_SUCCESS";
export const GET_PROVINSI_ERROR = "GET_PROVINSI_ERROR";

export const getProvinsiLoading = () => {
  return {
    type: GET_PROVINSI_LOADING
  }
}

export const getProvinsiSuccess = (result) => {
  return {
    type: GET_PROVINSI_SUCCESS,
    result
  }
}

export const getProvinsiError = (error) => {
  return {
    type: GET_PROVINSI_ERROR,
    error
  }
}

export const getDataProvinsi = () => {
  return function(dispatch) {
    dispatch(getProvinsiLoading())

    axios
      .get(`${process.env.REACT_APP_PROVINSI}`)
      .then((result) => dispatch(getProvinsiSuccess(result.data)))
      .catch((error) => dispatch(getProvinsiError(error)))
  }
}