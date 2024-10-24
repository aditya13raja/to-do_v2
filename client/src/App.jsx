import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Today from './pages/Today';
import Planned from './pages/Planned';
import Important from './pages/Important';
import Search from './pages/Search';
import UnscheduledTasks from './pages/UnscheduledTasks';
import Home from './pages/Home';
import './index.scss';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/today" element={<Today />} />
        <Route path="/planned" element={<Planned />} />
        <Route path='important' element={<Important />} />
        <Route path='/search' element={<Search />} />
        <Route path='/unscheduled-task' element={<UnscheduledTasks/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App