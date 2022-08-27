import {Routes, Route} from 'react-router-dom'
import About from './Pages/About/About';
import Home from './Pages/Home/Home';
import Courses from './Pages/Courses/Courses';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/courses' element={<Courses />}/>
      </Routes>
    </div>
  );
}

export default App;
