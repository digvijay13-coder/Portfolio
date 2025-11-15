import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import html from "../images/html.png"
import css from "../images/css.png"
import bootstrap from "../images/bootstrap.png"
import javascript from "../images/javascript.png"
import reactjs from "../images/reactjs.png"
import advjava from "../images/advjava.png"
import Hibernate from "../images/Hibernate.png"
import java from "../images/java.png"
import mysql from "../images/mysql.png"
import spring from "../images/spring.png"
import angular from "../images/angular.png"
import redux from "../images/redux.png"

import "../CSS/skills.css"

import Card from 'react-bootstrap/Card';


function Skills()
{
    return(
        <>
        <section className="container" id='skills' style={{padding:"2rem", marginBottom:"3rem"}} >
          <section className='skills'
          data-aos="flip-up"
          data-aos-duration="5000"
           style={{marginBottom:"2rem"}} >
              <h1>My Skills</h1>
            <Container >
                 <Row className='g-3' >
        <Col
        data-aos="flip-up"
          data-aos-duration="5000"
          >   
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={html} />
      <Card.Body>
        <Card.Title>HTML5</Card.Title>
      </Card.Body>
    </Card>
</Col>

           <Col
           data-aos="flip-up"
          data-aos-duration="5000"
          >   
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={css} />
      <Card.Body>
        <Card.Title>CSS</Card.Title>
      </Card.Body>
    </Card>
</Col>

   <Col
   data-aos="flip-up"
          data-aos-duration="5000"
          >   
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={bootstrap} />
      <Card.Body>
        <Card.Title>Bootstrap</Card.Title>
      </Card.Body>
    </Card>
</Col>

   <Col 
   data-aos="flip-up"
          data-aos-duration="5000"
          >   
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={javascript} />
      <Card.Body>
        <Card.Title>JavaScript</Card.Title>
      </Card.Body>
    </Card>
</Col>

     <Col 
     data-aos="flip-up"
          data-aos-duration="5000"
          >   
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={reactjs} />
      <Card.Body>
        <Card.Title>ReactJS</Card.Title>
      </Card.Body>
    </Card>
</Col>


 <Col
  data-aos="flip-up"
          data-aos-duration="5000"
          >   
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={redux} />
      <Card.Body>
        <Card.Title>Redux</Card.Title>
      </Card.Body>
    </Card>
</Col>

 <Col
 data-aos="flip-up"
          data-aos-duration="5000"
          >   
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={angular} />
      <Card.Body>
        <Card.Title>Angular</Card.Title>
      </Card.Body>
    </Card>
</Col>

   <Col
   data-aos="flip-up"
          data-aos-duration="5000"
          >   
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={java} />
      <Card.Body>
        <Card.Title>JAVA</Card.Title>
      </Card.Body>
    </Card>
</Col>

  <Col
  data-aos="flip-up"
          data-aos-duration="5000"
          >   
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={advjava} />
      <Card.Body>
        <Card.Title>ADV JAVA</Card.Title>
      </Card.Body>
    </Card>
</Col>

 

  <Col
  data-aos="flip-up"
          data-aos-duration="5000"
          >   
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={spring} />
      <Card.Body>
        <Card.Title>Spring Boot</Card.Title>
      </Card.Body>
    </Card>
</Col>

  <Col
  data-aos="flip-up"
          data-aos-duration="5000"
          >   
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Hibernate} />
      <Card.Body>
        <Card.Title>Hibernate</Card.Title>
      </Card.Body>
    </Card>
</Col>

<Col
data-aos="flip-up"
          data-aos-duration="5000"
          >   
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={mysql} />
      <Card.Body>
        <Card.Title>MySql</Card.Title>
      </Card.Body>
    </Card>
</Col>
        
      </Row>    
    </Container>

        </section>
          </section>
          
        
        </>
    )
}

export default Skills;