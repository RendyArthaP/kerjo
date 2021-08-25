import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getDataProvinsi } from './redux/actions/provinsi.actions';
import Menubar from "./components/Menubar";
import ProvinsiCard from "./components/ProvinsiCard";
import { Container } from "react-bootstrap";

function App() {
  const dispatch = useDispatch()
  const dataProvinsi = useSelector((state) => state.provinsiReducers.provinsi)
  
  useEffect(() => {
    dispatch(getDataProvinsi())
  }, [dispatch])

  return (
    <div className="App">
      <Menubar />
      <Container>
        <ProvinsiCard 
          provinsi = {dataProvinsi} 
        />
      </Container>
    </div>
  );
}

export default App;
