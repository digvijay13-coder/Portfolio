import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

import html from "../images/html.png";
import css from "../images/css.png";
import bootstrap from "../images/bootstrap.png";
import javascript from "../images/javascript.png";
import reactjs from "../images/reactjs.png";
import advjava from "../images/advjava.png";
import Hibernate from "../images/Hibernate.png";
import java from "../images/java.png";
import mysql from "../images/mysql.png";
import spring from "../images/spring.png";


import "../CSS/skills.css";

const skills = [
  { name: "HTML5", img: html },
  { name: "CSS", img: css },
  { name: "Bootstrap", img: bootstrap },
  { name: "JavaScript", img: javascript },
  { name: "ReactJS", img: reactjs },
  { name: "Java", img: java },
  { name: "ADV JAVA", img: advjava },
  { name: "Spring Boot", img: spring },
  { name: "Hibernate", img: Hibernate },
  { name: "MySQL", img: mysql },
  
];

function Skills() {
  return (
    <section className="container" id="skills" style={{ padding: "2rem", marginBottom: "3rem" }}>
      <h1 className="text-center mb-4">My Skills</h1>
      <Container>
        <Row className="g-4 justify-content-center">
          {skills.map((skill, index) => (
            <Col key={index} xs={12} sm={6} md={4} lg={3}>
              <Card className="skill-card h-100 text-center">
                <Card.Img variant="top" src={skill.img} className="skill-img" />
                <Card.Body>
                  <Card.Title>{skill.name}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Skills;
