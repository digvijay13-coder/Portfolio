import burger from "../images/burger.jpeg"
import mario from "../images/mario.jpeg"
import coffeshop from "../images/coffeshop.jpg"
import ecomerce from "../images/ecomerce.jpeg"
import calc from "../images/calc.png"
import ev from "../images/ev.jpeg"

function Projects()
{
    return(
        <>
    <section className="container mb-3" id="projects" style={{padding:"2rem", marginBottom:"3rem"}}  >
        <h1 className="text-center" 
            data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="300"
     data-aos-offset="0"
      >My Projects</h1>
          <div className="row row-cols-1 row-cols-md-2 g-4  ">
  <div className="col "
  data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000"
     >
    <div className="card h-100 ">
      <img src={coffeshop} className="card-img-top h-100" alt="..."></img>
      <div className="card-body">
        <h5 className="card-title"><a style={{textDecoration:"none"}} href="https://d13coffeeshop.netlify.app/" ><i class="bi bi-link-45deg">Coffee Shop</i></a>
        </h5>
      </div>
    </div>
  </div>

  <div className="col"
  data-aos="flip-right"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
    <div className="card h-100">
      <img src={ecomerce} className="card-img-top h-100" alt="..."></img>
      <div className="card-body">
        <h5 className="card-title"><a style={{textDecoration:"none"}} href="https://github.com/digvijay13-coder/Ecom-App" ><i class="bi bi-link-45deg">E-Commerce</i></a>
        </h5>s  
      </div>
    </div>
  </div>

    <div className="col"
    data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000"
     >
    <div className="card h-100">
      <img src={burger} className="card-img-top h-100" alt="..."></img>
      <div className="card-body">
        <h5 className="card-title"><a style={{textDecoration:"none"}} href="https://landingpage-burgerapp.netlify.app/" ><i class="bi bi-link-45deg">Landing-Burger App</i></a>
        </h5> 
      </div>
    </div>
  </div>


   <div className="col"
   data-aos="flip-right"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000"
     >
    <div className="card h-100">
      <img src={ev} className="card-img-top h-100" alt="..."></img>
      <div className="card-body">
        <h5 className="card-title"><a style={{textDecoration:"none"}} href="https://ev-car-landingpage.netlify.app/" ><i class="bi bi-link-45deg">Landing EV Web</i></a>
        </h5> 
      </div>
    </div>
  </div>



   <div className="col"
   data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000"
     >
    <div className="card h-100">
      <img src={calc} className="card-img-top h-100" alt="..."></img>
      <div className="card-body">
        <h5 className="card-title"><a style={{textDecoration:"none"}} href="https://d13calculator.netlify.app/" ><i class="bi bi-link-45deg">Simple-Calculator</i></a>
        </h5> 
      </div>
    </div>
  </div>


  <div className="col"
  data-aos="flip-right"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000"
     >
    <div className="card h-100">
      <img src={mario} className="card-img-top h-100" alt="..."></img>
      <div className="card-body">
        <h5 className="card-title"><a style={{textDecoration:"none"}} href="https://simple-mario-d13.netlify.app/" ><i class="bi bi-link-45deg">Simple-Mario</i></a>
        </h5> 
      </div>
    </div>
  </div>





</div>

    </section>
      
        
        </>
    )
}

export default Projects;