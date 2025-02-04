import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import suicide from "../../Assets/Projects/suicide.png";
import kpmg from "../../Assets/KPMG.jpg";
import info from "../../Assets/Infosys.png";
import WorkCard from "./WorkCard";


function Work() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple"> Work Experience</strong>
        </h1>
        <p style={{ color: "white" }}>
        With 4 years of experience, I've contributed to impactful projects and streamlined solutions.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <WorkCard
              imgPath={kpmg}
              isBlog={false}
              title="Master Data Management (MDM) | Vanguard 🚀"
              description="An MDM-driven data integration system designed to enhance Vanguard’s Redshift data warehouse by consolidating financial advisor information from multiple external sources. The project focused on data matching, survivorship rules, and quality enforcement to ensure consistency and accuracy across datasets. Leveraging Python and Spark, the system applied data integrity rules, leading to a 25% improvement in data quality."
            />
          </Col>

          <Col md={4} className="project-card">
            <WorkCard
              imgPath={kpmg}
              isBlog={false}
              title="Data Warehouse Implementation | Vanguard 📊"
              description="Developed an AWS-based data warehouse for managing 5 TB of financial advisor data, enabling a 360-degree view of Vanguard’s advisors. The project involved designing and implementing ETL processes using Python, Spark, and AWS Glue to optimize data processing and automation. This solution improved data throughput by 30%, while ensuring data accuracy and consistency across over 50 attributes through rigorous validation."
            />
          </Col>

          <Col md={4} className="project-card">
            <WorkCard
              imgPath={info}
              isBlog={false}
              title="Cloud Migration | Ralph Lauren 🚀"
              description="Led the cloud migration initiative for Ralph Lauren, focusing on moving legacy data workflows to the cloud for enhanced scalability and performance. Designed and implemented data pipelines using Spark for ETL, and automated workflows with Airflow to improve efficiency. Leveraged AWS Athena for file format conversion and optimized SQL queries, resulting in faster query response times and more accessible, reliable data for business insights."             
            />
          </Col>

          <Col md={4} className="project-card"> */
            <WorkCard
              imgPath={info}
              isBlog={false}
              title="Assortment Optimizer Automation | Mondelez 📊"
              description="Automated the Assortment Optimizer module for a retail client, utilizing Big Data tools like Spark, Hive, and Oozie to streamline data processing and enhance decision-making."   
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Work;
