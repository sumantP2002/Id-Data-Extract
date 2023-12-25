import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage.js';
import CreatenewOCR from './pages/CreateNew.js';
import DeleteOCR from './pages/Delete.js';
import DisplayOCR from './pages/Display.js';
import DisplayAll from './pages/DisplayAlll.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/create' element={<CreatenewOCR />} />
        <Route path='/delete' element={<DeleteOCR />} />
        <Route path='/display' element={<DisplayOCR />} />
        <Route path='/displayAll' element={<DisplayAll />} />
      </Routes>
    </Router>
  );
}

export default App;
