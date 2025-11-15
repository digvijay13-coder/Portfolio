import Home from "./MyComponents/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Aos from "aos";
import "../node_modules/aos/dist/aos.css";

import About from "./MyComponents/About";
import NaviBar from "./MyComponents/Navibar";
import Skills from "./MyComponents/Skills";
import Projects from "./MyComponents/Projects";
import Certificate from "./MyComponents/Certificate";
import Contact from "./MyComponents/Contact";
import Footer from "./MyComponents/Footer";

import "./App.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <NaviBar />
      <Home />
      <About />
      <Certificate />  {/* Now included */}
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
