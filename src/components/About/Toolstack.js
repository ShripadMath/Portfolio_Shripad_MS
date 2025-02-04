import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiNotepadplusplus,
  SiJupyter,
  SiAnaconda,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <a>
        <SiVisualstudiocode />
        <h6> Visual Studio Code </h6> 
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a>
        < SiJupyter/>
        <h6> Jupyter </h6> 
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a>
        <SiAnaconda/> 
        <h6> Anaconda </h6>  
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a>
        < SiNotepadplusplus/>  
        <h6> Notepad++ </h6>
        </a>
      </Col>
    </Row>
  );
}

export default Toolstack;
