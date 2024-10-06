import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./Pages/Home";
import Services from "./Pages/Services";

export default function App() {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/service" element={<Services/>}/>
      </Routes>
    </Router>

    
  );
}
