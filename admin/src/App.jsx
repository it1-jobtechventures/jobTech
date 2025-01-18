import './App.css'
import Contact from './components/Contact'
import { ToastContainer } from 'react-toastify';
import VideoUrl from './components/VideoUrl';
import Pdf from './components/Pdf';

function App() {
  const url = "https://jobtech-backend.onrender.com"
  return (
    <>
    <ToastContainer/>
    <Contact url={url}/>
    <VideoUrl url={url}/>
    <Pdf url={url}/>
    </>
  )
}

export default App
