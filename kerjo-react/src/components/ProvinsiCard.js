import { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { Dropdown } from 'react-bootstrap'
import { getDataKabupaten } from '../redux/actions/provinsi.actions';

const ProvinsiCard = ({ provinsi }) => {
  const dispatch = useDispatch()
  const dataKabupaten = useSelector((state) => state.provinsiReducers.kabupaten)
  console.log(dataKabupaten)

  useEffect(() => {
    dispatch(getDataKabupaten(provinsi.id))
  }, [dispatch])
  
  return (
    <Dropdown className="m-2">
      <Dropdown.Toggle 
        variant="success" 
        id="dropdown-basic" 
        className="w-lg-50"
      >
        {provinsi.name}
      </Dropdown.Toggle>
      <Dropdown.Menu >
        {dataKabupaten.map((kabupaten) => (
          <Dropdown.Item>
            {kabupaten.name}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default ProvinsiCard
