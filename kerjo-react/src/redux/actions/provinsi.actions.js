import axios from "axios";

export const GET_PROVINSI_LOADING = "GET_PROVINSI_LOADING";
export const GET_PROVINSI_SUCCESS = "GET_PROVINSI_SUCCESS";
export const GET_PROVINSI_ERROR = "GET_PROVINSI_ERROR";

export const GET_KABUPATEN_LOADING = "GET_KABUPATEN_LOADING";
export const GET_KABUPATEN_SUCCESS = "GET_KABUPATEN_SUCCESS";
export const GET_KABUPATEN_ERROR = "GET_KABUPATEN_ERROR";

export const GET_KECAMATAN_LOADING = "GET_KECAMATAN_LOADING";
export const GET_KECAMATAN_SUCCESS = "GET_KECAMATAN_SUCCESS";
export const GET_KECAMATAN_ERROR = "GET_KECAMATAN_ERROR";

export const GET_DESA_LOADING = "GET_DESA_LOADING";
export const GET_DESA_SUCCESS = "GET_DESA_SUCCESS";
export const GET_DESA_ERROR = "GET_DESA_ERROR";

// Provinsi
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
// End Provinsi

// Kabupaten
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
// End Kabupaten

export const getDataProvinsi = () => {
  return function(dispatch) {
    dispatch(getProvinsiLoading())

    axios
      .get(`${process.env.REACT_APP_PROVINSI}`)
      .then((result) => dispatch(getProvinsiSuccess(result.data)))
      .catch((error) => dispatch(getProvinsiError(error)))
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