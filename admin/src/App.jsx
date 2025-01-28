import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Contact from './components/Contact';
import { ToastContainer } from 'react-toastify';
import VideoUrl from './components/VideoUrl';
import Pdf from './components/Pdf';
import Excel from './components/Excel';

function App() {
  const url = "https://jobtech-backend.onrender.com";

  return (
    <Router>
      <ToastContainer />
      <Sidebar />
      <div className="md:ml-64 p-4">
        <Routes>
          <Route path="/contact" element={<Contact url={url} />} />
          <Route path="/video-url" element={<VideoUrl url={url} />} />
          <Route path="/pdf" element={<Pdf url={url} />} />
          <Route path="/excel" element={<Excel url={url} />} />
          <Route path="*" element={
              <div className="text-center">
                <h1 className="text-2xl font-bold">Click to open Page</h1>
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
