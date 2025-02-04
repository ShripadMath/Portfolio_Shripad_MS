import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Shripad Sunil Mathekar </span> 
            from <span className="purple">  Pune, India.</span>
            <br /> 
            I am a second-year Master's student in Computer Science at Syracuse University, actively refining my technical expertise and expanding my knowledge in the field.
            <br />
            In addition, I have 4 years of work experience as a Data Engineer at Infosys and KPMG, where I specialized in building and optimizing data pipelines using Hadoop, Spark, AWS, and Python development.
            <br />
            <br />
            Life beyond coding !
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Cricket
            </li>
            <li className="about-activity">
              <ImPointRight /> Working out
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
