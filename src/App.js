import { Routes, Route } from "react-router-dom";

import About from "./Pages/About/About";
import Home from "./Pages/Home/Home";
import Courses from "./Pages/Courses/Courses";
import Services from "./Pages/Services/Services";
import Facilitator from "./Pages/Facilitator/Facilitator";
import Gallery from "./Pages/Gallery/Gallery";

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/services' element={<Services />} />
        <Route path='/facilitator' element={<Facilitator />} />
        <Route path='/gallery' element={<Gallery />} />
      </Routes>
    </div>
  );
}

export default App;
