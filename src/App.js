import './App.scss';
import  About  from './pages/About';
import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';

import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
   
     <Routes>
        <Route path="/" element={<Home />}>
          
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />

          
        </Route>
      </Routes>
   
    </div>
  );
}

export default App;
