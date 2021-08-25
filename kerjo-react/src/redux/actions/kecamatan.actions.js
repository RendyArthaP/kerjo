import axios from "axios";

export const GET_KECAMATAN_LOADING = "GET_KECAMATAN_LOADING";
export const GET_KECAMATAN_SUCCESS = "GET_KECAMATAN_SUCCESS";
export const GET_KECAMATAN_ERROR = "GET_KECAMATAN_ERROR";

export const getKecamatanLoading = () => {
  return {
    type: GET_KECAMATAN_LOADING
  }
}

export const getKecamatanSuccess = (result) => {
  return {
    type: GET_KECAMATAN_SUCCESS,
    result
  }
}

export const getKecamatanError = (error) => {
  return {
    type: GET_KECAMATAN_ERROR,
    error
  }
}

export const getDataKecamatan = (idKabupaten) => {
  return function(dispatch) {
    dispatch(getKecamatanLoading())

    axios
      .get(`${process.env.REACT_APP_KECAMATAN}${idKabupaten}`)
      .then((result) => dispatch(getKecamatanSuccess(result.data)))
      .catch((error) => dispatch(getKecamatanError(error)))
  }
}