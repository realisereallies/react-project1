import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import About from './components/about/About';
import Programs from './components/programms/Programms';
import Grant from './components/grant/Grant';
import News from './components/news/News';
import Faq from './components/faq/Faq';
import Reviews from './components/reviews/Reviews';
import { Contacts } from './components/contacts/Contacts';
import { Form } from './components/form/Form';
import { Footer } from './components/footer/Footer';
import { Modal } from './components/modal/Modal';
import { useModal } from './hooks/useModal';


function App() {
  const { isOpen, open, close } = useModal();

  return (
    <>
      <Header />
      <Hero />
      <About onOpenModal={open} />
      <Programs />
      <Grant/>
      <News/>
      <Faq/>
      <Reviews/>
      <Contacts/>
      <Form/>
      <Footer/>
      
      <Modal isOpen={isOpen} onClose={close} />
    </>
  )
}

export default App
