import Progressbar from "./components/Progressbar/Progressbar";
import Header from "./sections/Header/Header";
import Hero from "./sections/Hero/Hero";
import About from "./sections/About/About";
import Projects from "./sections/Projects/Projects";
import Contact from "./sections/Contact/Contact";

function App() {
  return (
    <div style={{ display: "grid" }}>
      <Progressbar />
      <Header />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
