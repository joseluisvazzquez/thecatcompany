import Home from "./Home";
import Navigation from "./Navigation";
// import Hotspots from "./Hotspots";
// import Cuisine from "./Cuisine";
// import Lodging from "./Lodging";
// import Activities from "./Activities";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return(
    <Router>
      <Navigation/>
      <Routes>
          <Route index element={<Home/>}/>
      </Routes>
    </Router>
  );
}

export default App;
