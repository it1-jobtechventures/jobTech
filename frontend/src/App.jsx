import './App.css';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import Header from './components/Header';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar'
import Home from './components/Home';
import Team from './components/Team';
import JobRinger from './components/JobRinger';
import ScrollToTopButton from './components/ScrollTopToBottom';

function App() {
  return (
    <>
      <ToastContainer  />
      <Navbar/>
      <Header />
      {/* <Home/> */}
      <JobRinger/>
      <Team/>
      <ContactForm />
      <Footer />
      <ScrollToTopButton/>
    </>
  );
}

export default App;
