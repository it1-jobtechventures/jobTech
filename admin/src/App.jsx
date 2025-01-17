import './App.css'
import Contact from './components/Contact'
import { ToastContainer } from 'react-toastify';
import VideoUrl from './components/VideoUrl';
import Pdf from './components/Pdf';

function App() {
  
  return (
    <>
    <ToastContainer/>
    <Contact/>
    <VideoUrl/>
    <Pdf/>
    </>
  )
}

export default App
