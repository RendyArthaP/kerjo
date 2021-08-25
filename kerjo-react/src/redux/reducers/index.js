import { combineReducers } from "redux";
import provinsiReducers from "./provinsi.reducers";
import kabupatenReducers from "./kabupaten.reducers";
import kecamatanReducers from "./kecamatan.reducers";
import desaReducers from "./desa.reducers";

const rootReducers = combineReducers({
  provinsiReducers,
  kabupatenReducers,
  kecamatanReducers,
  desaReducers
})

export default rootReducers;