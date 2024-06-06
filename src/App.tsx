import Home from "./Home";
import Navigation from "./Navigation";
import CatList from "./CatDetails";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import CatSelector from "./CatSelector";

function App() {
  return(
    <Router>
      <Navigation/>
      <Routes>
          <Route index element={<Home/>}/>
          <Route path="CatList" element={<CatList/>}/>
          <Route path="CatSelector" element={<CatSelector/>}/>
      </Routes>
    </Router>
  );
}

export default App;
