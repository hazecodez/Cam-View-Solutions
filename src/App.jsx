import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import Projects from "./Pages/Projects";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

export default function App() {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/service" element={<Services/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        
      </Routes>
    </Router>

    
  );
}
