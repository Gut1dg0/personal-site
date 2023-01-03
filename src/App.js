import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Channel from './components/Channel';
import Footer from './components/Footer';

function App() {
  return (
    <ChakraProvider>
      <div className="app">
          <Navbar/>
          <About/>
          <Projects/>
          <Channel/>
          <Footer/>
      </div>
    </ChakraProvider>
  );
}

export default App;
