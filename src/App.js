import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

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
    <ScrollToTop>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/courses' element={<Courses />} />
        <Route exact path='/services' element={<Services />} />
        <Route exact path='/facilitator' element={<Facilitator />} />
        <Route exact path='/explore' element={<Gallery />} />
        <Route exact path='/glossary' element={<Glossary />} />
        <Route exact path='/get-in-touch' element={<GetInTouch />} />
      </Routes>
    </ScrollToTop>
  );
}

export default App;
