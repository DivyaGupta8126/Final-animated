import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import { useEffect } from 'react';
import Aos from "aos"
import "aos/dist/aos.css"

function App() {
  useEffect(() => {
    return () => {
     Aos.init();
    };
  }, []);
  return (
    <div className="App">
      <Navbar/>
      <div className="container">
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      </div>
    
    </div>
  );
}

export default App;
