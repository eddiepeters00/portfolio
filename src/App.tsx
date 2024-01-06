import './App.css';
import Progressbar from './Components/Progressbar/Progressbar';

import Header from './Sections/Header/Header';
import Hero from './Sections/Hero/Hero';
import About from './Sections/About/About';
import Projects from './Sections/Projects/Projects';

function App() {
  return (
    <>
      <Progressbar />
      <Header />
      <Hero />
      <About />
      <Projects />
    </>
  );
}

export default App;
