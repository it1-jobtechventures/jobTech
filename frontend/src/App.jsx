import './App.css';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import Header from './components/Header';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar'
import Team from './components/Team';
import ScrollToTopButton from './components/ScrollTopToBottom';
import Video from './components/Video';
import Overview from './components/Overview';
import JobRingerPage from './components/JobRingerPage';

function App() {
  const url ='https://jobtech-backend.onrender.com'
  return (
    <>
      <ToastContainer  />
      <Navbar url={url}/>
       <Header  url={url}/>
      <Video url={url}/>
      <Overview url={url}/>
      <Team url={url}/>
      <JobRingerPage url={url}/>
      <ContactForm  url={url}/>
      <Footer  url={url}/>
      <ScrollToTopButton url={url}/>
    </>
  );
}

export default App;
