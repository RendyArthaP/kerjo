import axios from "axios";

export const GET_KABUPATEN_LOADING = "GET_KABUPATEN_LOADING";
export const GET_KABUPATEN_SUCCESS = "GET_KABUPATEN_SUCCESS";
export const GET_KABUPATEN_ERROR = "GET_KABUPATEN_ERROR";

export const getKabupatenLoading = () => {
  return {
    type: GET_KABUPATEN_LOADING
  }
}

export const getKabupatenSuccess = (result) => {
  return {
    type: GET_KABUPATEN_SUCCESS,
    result
  }
}

export const getKabupatenError = (error) => {
  return {
    type: GET_KABUPATEN_ERROR,
    error
  }
}

export const getDataKabupaten = (idProvinsi) => {
  return function(dispatch) {
    dispatch(getKabupatenLoading())

    axios
      .get(`${process.env.REACT_APP_KABUPATEN}${idProvinsi}`)
      .then((result) => dispatch(getKabupatenSuccess(result.data)))
      .catch((error) => dispatch(getKabupatenError(error)))
  }
}