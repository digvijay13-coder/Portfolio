import "../CSS/certificate.css";
import CER from "../images/CER.JPG";

function Certificate() {
  const certificates = [
    {
      title: "Java Full Stack Certification",
      img: CER,
      description: "Completed full-stack Java development course including Spring Boot and React."
    }
  ];

  return (
    <section className="container" id="certificate" style={{ padding: "2rem", marginBottom: "3rem" }}>
      <h1 className="text-center mb-4">Certification</h1>
      <div className="row g-4 justify-content-center">
        {certificates.map((cert, index) => (
          <div key={index} className="col-12 col-sm-6 col-md-4">
            <div className="card cert-card h-100 text-center">
              <img src={cert.img} className="card-img-top cert-img" alt={cert.title} />
              <div className="card-body">
                <h5 className="card-title">{cert.title}</h5>
                <p className="card-text">{cert.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certificate;
