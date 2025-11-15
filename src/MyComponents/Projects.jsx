import burger from "../images/burger.jpeg";
import mario from "../images/mario.jpeg";
import coffeshop from "../images/coffeshop.jpg";
import ecomerce from "../images/ecomerce.jpeg";
import calc from "../images/calc.png";
import ev from "../images/ev.jpeg";

function Projects() {
  const projects = [
    { name: "Coffee Shop", img: coffeshop, link: "https://d13coffeeshop.netlify.app/" },
    { name: "E-Commerce", img: ecomerce, link: "https://github.com/digvijay13-coder/Ecom-App" },
    { name: "Landing-Burger App", img: burger, link: "https://landingpage-burgerapp.netlify.app/" },
    { name: "Landing EV Web", img: ev, link: "https://ev-car-landingpage.netlify.app/" },
    { name: "Simple-Calculator", img: calc, link: "https://d13calculator.netlify.app/" },
    { name: "Simple-Mario", img: mario, link: "https://simple-mario-d13.netlify.app/" },
  ];

  return (
    <section className="container" id="projects" style={{ padding: "2rem", marginBottom: "3rem" }}>
      <h1 className="text-center mb-4">My Projects</h1>
      <div className="row g-4 justify-content-center">
        {projects.map((project, index) => (
          <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="card project-card h-100 text-center">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <img src={project.img} className="card-img-top project-img" alt={project.name} />
                <div className="card-body">
                  <h5 className="card-title">{project.name}</h5>
                </div>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
