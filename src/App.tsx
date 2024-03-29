import Home from "./Home";
import Navigation from "./Navigation";
import CatList from "./CatList";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return(
    <Router>
      <Navigation/>
      <Routes>
          <Route index element={<Home/>}/>
          <Route path="Hotspots" element={<CatList/>}/>
      </Routes>
    </Router>
  );
}

export default App;
