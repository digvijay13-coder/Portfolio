import bharatic from "../images/bharatic.jpeg";
import npkc from "../images/npkc.jpeg";
import mhsk from "../images/mhsk.jpeg";
import "../CSS/about.css";

function About() {
  return (
    <section className="container py-4" id="about">
      <div className="about-section" data-aos="zoom-in" data-aos-duration="1000">
        <h1>About Me</h1>
        <p>
          Aspiring Full Stack Java Developer passionate about building web apps with Java, Spring Boot, and frontend technologies. I recently completed my training at SEED Infotech, Viman Nagar.
        </p>
        <p>
          I love building — whether it's a simple idea or a fully working web app — using Java, Spring Boot, and frontend basics like HTML, CSS, and JavaScript.
        </p>
        <p>
          Currently, I’m excited to find my first opportunity to keep learning, work on meaningful projects, and grow as a developer.
        </p>
        <p>
          I enjoy solving problems, exploring new technologies, and collaborating with others who love creating impactful projects. Outside coding, I like sports, especially football.
        </p>
      </div>

      <div className="education-section" data-aos="flip-left" data-aos-duration="1000">
        <h2>Education</h2>
        <div className="row row-cols-1 row-cols-md-3 g-4 mt-2">
          <div className="col">
            <div className="card h-100">
              <img src={bharatic} className="card-img-top" alt="Graduation" />
              <div className="card-body">
                <h5 className="card-title">Graduation - Electronics and Telecommunication</h5>
                <p className="card-text">Completed a Bachelor’s degree in Electronics and Telecommunication, gaining strong theoretical and practical knowledge.</p>
                <p className="lead">Percentage: 70%</p>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card h-100">
              <img src={npkc} className="card-img-top" alt="Diploma" />
              <div className="card-body">
                <h5 className="card-title">Diploma - Electronics and Telecommunication</h5>
                <p className="card-text">Completed a diploma program focused on electronics and telecommunication fundamentals.</p>
                <p className="lead">Percentage: 83%</p>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card h-100">
              <img src={mhsk} className="card-img-top" alt="10th" />
              <div className="card-body">
                <h5 className="card-title">10th Standard</h5>
                <p className="card-text">Completed secondary school with a focus on foundational knowledge and skills.</p>
                <p className="lead">Percentage: 81%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
