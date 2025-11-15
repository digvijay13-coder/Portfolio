import { Link } from "react-router-dom";

function Contact() {
  return (
    <section className="container my-4" 
    data-aos="zoom-out-down"
    id="contact" style={{ padding: "2rem" }}>
      <h1 className="text-center" >Contact Me</h1>
      <section
        className="d-flex justify-content-center align-items-center gap-4 contact-icons"
        style={{ fontSize: "2.5rem", color: "#212529" }}
      >
        <Link to="https://github.com/digvijay13-coder" className="contact-link">
          <i className="bi bi-github"></i>
        </Link>
        <Link to="mailto:digvijaysutar1004@gmail.com" className="contact-link">
          <i className="bi bi-envelope"></i>
        </Link>
        <Link to="https://www.instagram.com/digvijay13_/" className="contact-link">
          <i className="bi bi-instagram"></i>
        </Link>
        <Link to="https://www.linkedin.com/in/digvijay-sutar-ab4b4733b" className="contact-link">
          <i className="bi bi-linkedin"></i>
        </Link>
      </section>
    </section>
  );
}

export default Contact;
