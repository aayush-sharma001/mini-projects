import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';

import Accordian from './components/accordian/Accordian';
import Pagination from './components/pagination/pagination';
import Slider from './components/photoSlider/slider';
import StopWatch from './components/stopWatch/StopWatch';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/stopwatch' element={<StopWatch/>}  />
        <Route path='/accordian' element={<Accordian/>} />
        <Route path='/pagination' element={<Pagination/>}/>
        <Route path='/imageSlider' element={<Slider/>}/>
      </Routes>
    </Router>
  )
}

export default App;