import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiPython,
  DiMysql,
  DiSpark,
  DiAws,
  DiJava,
  DiMongodb,
  DiGit,
  DiBitbucket,
} from "react-icons/di";
import {
  SiApachehadoop,
  SiApachehive,
  SiSnowflake,
  SiApacheairflow,
  SiAmazon,

 
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
        <a> 
          <DiPython/>
          <h6> Python</h6>
          </a>
        
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <TbBrandGolang />
      </Col> */}
      {/* <Col xs={4} md={2} className="tech-icons">
        <a>
          <DiAws/></a>
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
        <a>
        <DiMysql />  
        <h6> Mysql</h6>
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a>
        <DiSpark /> 
        <h6> Spark</h6> 
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a>
        <SiAmazon />
        <h6> AWS</h6> 
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a>
          <DiJava />
          <h6> Java</h6> 
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a>
        <DiMongodb />
        <h6> MongoDB</h6> 
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a>
          <DiGit/>
          <h6> Git</h6> 
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a>
          <DiBitbucket />
          <h6> Bitbucket</h6> 
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a>
        <SiApachehadoop />  
        <h6> Hadoop</h6> 
        </a>
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <a>
        <SiApachehive/> 
        <h6> Hive</h6>  
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a>
        <SiSnowflake /> 
        <h6> Snowflake</h6> 
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a>
        <SiApacheairflow /> 
        <h6> Airflow</h6> 
        </a>
      </Col>
    </Row>
  );
}

export default Techstack;
