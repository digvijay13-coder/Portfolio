import { useEffect, useRef } from "react";
import "../CSS/home.css";
import my from "../images/my.JPG";
import Typed from "typed.js";
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Home() {
  const typedRef = useRef(null);
  const typedRef1 = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ["Java Developer", "Front-End Developer", "Back-End Developer", "ReactJS Developer", "Spring Boot Developer"],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    });

    const typed1 = new Typed(typedRef1.current, {
      strings: ["नमस्ते:", "Hello", "Hola", "Bonjour", "Ciao", "Hallo", "Konnichiwa"],
      typeSpeed: 150,
      backSpeed: 50,
      loop: true,
    });

    return () => {
      typed.destroy();
      typed1.destroy();
    };
  }, []);

  return (
    <section className="container" id="home">
      <div className="row align-items-center home-row">
        <div className="col-md-6 col-sm-12 text-center text-md-start fade-in home-left">
          <div className="greeting-container">
            <p><span ref={typedRef1}></span></p>
            <h5>I'm</h5>
          </div>
          <h1>Digvijay Arun Sutar</h1>
          <h4><span ref={typedRef}></span></h4>
          <div className="d-flex flex-wrap gap-2 mt-3 justify-content-center justify-content-md-start">
            <a
              href="https://drive.google.com/file/d/15LtAFIeQVOzlKq-DkMoRRfjXTqxFWQoB/view?usp=drive_link"
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-eye me-2"></i> Resume
            </a>
          </div>
        </div>

        <div className="col-md-6 col-sm-12 text-center fade-in home-right">
          <img className="rounded-5 home-img" src={my} alt="Digvijay Sutar" />
        </div>
      </div>
    </section>
  );
}
