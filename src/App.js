import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ListVideos from './components/pages/ListVideos/ListVideos';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className='container'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ListVideos />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
