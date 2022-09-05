import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Gallery from "./Pages/Gallery/Gallery";
import Courses from "./Pages/Courses/Courses";
import Services from "./Pages/Services/Services";
import GetInTouch from "./Pages/GetInTouch/GetInTouch";
import Facilitator from "./Pages/Facilitator/Facilitator";
import Glossary from "./Pages/Glossary/Glossary";

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
        <Route path='/glossary' element={<Glossary />} />
        <Route path='/get-in-touch' element={<GetInTouch />} />
      </Routes>
    </div>
  );
}

export default App;
