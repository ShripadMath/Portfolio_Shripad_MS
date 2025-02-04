import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import img from "../../Assets/darshil.jpeg";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillWechat,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            I am a Data Engineer skilled in building and optimizing data pipelines, working with technologies like Hadoop, Spark, AWS, and Python, enabling efficient data processing and analysis for impactful business insights.
              <br />
              <br />I am fluent in languages like
              <i>
                <b className="purple"> Python,Spark,SQL and Java <strong>.</strong></b> 
              </i>
              <br />
              <br />
              
              My areas of interest include designing and optimizing {}
              <i>
                <b className="purple">ETL pipelines </b> and
                building infrastructure solutions using {" "}
                <b className="purple">
                  Spark.
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing tools
              with <b className="purple">Python</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern GenAI models {}
                </b>
              </i>
              {} like
              <i>
                <b className="purple"> ChatGpt and lama</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={img} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/ShripadMath"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://wa.me/+16402291683"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineWhatsApp />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/shripad-mathekar-jan97/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/shripad_mathekar?igsh=cGd5NWdhY25peHA1&utm_source=qr"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
