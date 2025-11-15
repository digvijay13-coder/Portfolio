import { useEffect, useRef } from "react";
import "../CSS/home.css";
import my from "../images/my.JPG";
import Typed from "typed.js";
import 'bootstrap-icons/font/bootstrap-icons.css'; // Import Bootstrap Icons

export default function Home() {
  const typedRef = useRef(null); // reference for job titles
  const typedRef1 = useRef(null); // reference for greetings

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ["Java Developer", "Front-End Developer","Back-End Developer", "ReactJS Developer", "Spring Boot Developer"],
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
      <section className="info">
        <div className="row align-items-center">
          {/* Left Column - Text */}
          <div
            className="col-md-6 col-sm-12 p-5 text-center text-md-start"
            data-aos="fade-up-right"
            data-aos-duration="1000"
          >
            <div className="greeting-container">
              <p><span ref={typedRef1}></span></p>
              <h5>I'm</h5>
            </div>

            <h1>Digvijay Sutar</h1>
            <h4>
              <span ref={typedRef}></span>
            </h4>

            {/* Buttons */}
            <div className="d-flex flex-wrap gap-2 mt-3">
              {/* View in Browser Button */}
              <a
                href="https://drive.google.com/file/d/15LtAFIeQVOzlKq-DkMoRRfjXTqxFWQoB/view?usp=drive_link"
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-eye me-2"></i>
                Resume
              </a>
            </div>
          </div>

          {/* Right Column - Image */}
          <div
            className="col-md-6 col-sm-12 text-center"
            data-aos="fade-up-left"
            data-aos-duration="1000"
          >
            <img
              className="rounded-5"
              src={my}
              height={350}
              alt="Digvijay Sutar"
            />
          </div>
        </div>
      </section>
    </section>
  );
}
