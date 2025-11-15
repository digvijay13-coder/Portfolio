function Contact() {
  return (
    <section className="container my-4" id="contact" style={{ padding: "2rem" }}>
      <h1 className="text-center">Contact Me</h1>
      <section className="d-flex justify-content-center align-items-center gap-4 contact-icons">
        <a
          href="https://github.com/digvijay13-coder"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
          <i className="bi bi-github"></i>
        </a>
        <a
          href="mailto:digvijaysutar1004@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
          <i className="bi bi-envelope"></i>
        </a>
        <a
          href="https://www.instagram.com/digvijay13_/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
          <i className="bi bi-instagram"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/digvijay-sutar-ab4b4733b"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
          <i className="bi bi-linkedin"></i>
        </a>
      </section>
    </section>
  );
}

export default Contact;
