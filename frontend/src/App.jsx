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
import Performance from './components/Performance';
import JobRingerPage from './components/JobRingerPage';
import PdfShow from './components/PdfShow';

function App() {
  return (
    <>
      <ToastContainer  />
      <Navbar/>
      <Header />
      <Video/>
      <Overview/>
      <Team/>
      <JobRingerPage/>
      {/* <Performance/> */}
      <ContactForm />
      {/* <PdfShow/> */}
      <Footer />
      <ScrollToTopButton/>
    </>
  );
}

export default App;
