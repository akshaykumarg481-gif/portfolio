import { useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import './App.css'
import { ThemeContext } from './Components/Navbar/ThemeContext';
import Projects from  './Components/Projects/Project';
import About from './Components/About/about';
import Services from './Components/Services/service';
import Contact from './Components/Contact/Contact';
function App() {
  
  const [theme, setTheme] = useState("light");

  return (
    
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`full ${theme}`}>
        <Navbar />
        <Home />
        <About />
        <Services />
        <Projects />
        <Contact />
      </div>
    </ThemeContext.Provider>
    
  )
}

export default App
