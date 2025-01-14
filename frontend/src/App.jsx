import './App.css';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import Header from './components/Header';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <ToastContainer  />
      <Header />
      <ContactForm />
      <Footer />
    </>
  );
}

export default App;
