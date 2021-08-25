import { useSelector, useDispatch } from "react-redux";
import { getDataKabupaten } from '../redux/actions/kabupaten.actions';
import { getDataKecamatan } from '../redux/actions/kecamatan.actions';
import { getDataDesa } from '../redux/actions/desa.actions';

const ProvinsiCard = ({ provinsi }) => {
  const dispatch = useDispatch();
  const dataKabupaten = useSelector((state) => state.kabupatenReducers.kabupaten) 
  const dataKecamatan = useSelector((state) => state.kecamatanReducers.kecamatan)
  const dataDesa = useSelector((state) => state.desaReducers.desa)

  return (
    <div className="mt-4">
      <div className="my-4 d-flex flex-column w-50">
        <label>Provinsi</label>
        <select 
          className="p-1"
          onChange={(e) => dispatch(getDataKabupaten(e.target.value))}
        >
          {provinsi.map((prov) => (
            <option 
              value={prov.id}
              key={prov.id}
              name={prov.name}
            >
              {prov.name}
            </option>
          ))}
        </select>
      </div>
      <div className="my-4 d-flex flex-column w-50">
        <label>Kabupaten</label>
        <select 
          className="p-1"
          onChange={(e) => dispatch(getDataKecamatan(e.target.value))}
        >
          {dataKabupaten.map((kabupaten) => (
            <option 
              key={kabupaten.id} 
              value={kabupaten.id}
            >
              {kabupaten.name}
            </option>
          ))}
        </select>
      </div>
      <div className="my-4 d-flex flex-column w-50">
        <label>Kecamatan</label>
        <select 
          className="p-1"
          onChange={(e) => dispatch(getDataDesa(e.target.value))}
        >
          {dataKecamatan.map((kecamatan) => (
            <option 
              key={kecamatan.id}
              value={kecamatan.id}
            >
              {kecamatan.name}
            </option>
          ))}
        </select>
      </div>
      <div className="my-4 d-flex flex-column w-50">
        <label>Desa</label>
        <select 
          className="p-1"
        >
          {dataDesa.map((desa) => (
            <option 
              value={desa.id}
              key={desa.id}
            >
              {desa.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default ProvinsiCard
