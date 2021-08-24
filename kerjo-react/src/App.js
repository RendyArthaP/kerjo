import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getDataProvinsi } from './redux/actions/provinsi.actions';
import Menubar from "./components/Menubar";
import ProvinsiCard from "./components/ProvinsiCard";

function App() {
  const dispatch = useDispatch()
  const dataProvinsi = useSelector((state) => state.provinsiReducers.provinsi)
  
  useEffect(() => {
    dispatch(getDataProvinsi())
  }, [dispatch])

  return (
    <div className="App">
      <Menubar />
      <main>
        {dataProvinsi.map((provinsi) => (
          <ProvinsiCard 
            provinsi = {provinsi}
            key = {provinsi.id}
          />
        ))}
      </main>
    </div>
  );
}

export default App;
