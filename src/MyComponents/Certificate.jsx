import "../CSS/certificate.css"
function Certificate() {
  return (
    <>
      <section className="container" id="certificate">
        <section className="certificate"
         data-aos="flip-right"
          data-aos-duration="1000"
           style={{ padding: "2rem", alignContent: "center", marginBottom: "2rem" }}>
          <div className="row row-cols-1 row-cols-md-3 g-4"></div>
          <h1>Certification</h1>

          <div className="col" style={{ alignContent: "center", width: "auto" }}>
            <div className="card">
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a longer card with supporting text below as a natural lead-in to additional content.
                </p>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}

export default Certificate;
