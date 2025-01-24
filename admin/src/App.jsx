import './App.css'
import Contact from './components/Contact'
import { ToastContainer } from 'react-toastify';
import VideoUrl from './components/VideoUrl';
import Pdf from './components/Pdf';
import Excel from './components/Excel';

function App() {
  const url = "https://jobtech-backend.onrender.com"
  return (
    <>
    <ToastContainer/>
    <Contact url={url}/>
    <VideoUrl url={url}/>
    <Pdf url={url}/>
    <Excel url={url}/>
    </>
  )
}

export default App
