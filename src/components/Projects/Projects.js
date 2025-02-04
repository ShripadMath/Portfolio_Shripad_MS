import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import suicide from "../../Assets/Projects/suicide.png";
import tindog from "../../Assets/Tindog.PNG"
import amazon from "../../Assets/Amazon.PNG";
import blog from "../../Assets/Blog.PNG";
import todo from "../../Assets/TODO.PNG"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Work </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={amazon}
              isBlog={false}
              title="Cold Email Generator 🛍️"
              description="An end-to-end LLM & GenAI system that automates cold email generation for software and AI service companies. Utilizing Llama 3.1, LangChain, and ChromaDB, this tool extracts job details, matches them with portfolio embeddings, and crafts highly personalized emails. The interactive Streamlit UI enables users to input job postings and receive AI-generated emails with embedded portfolio links—reducing manual effort and improving outreach efficiency."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blog}
              isBlog={false}
              title="Flight Arrival Predictions ✈️"
              description="A machine learning model using Random Forest Classifier to predict flight arrival status at Syracuse Airport (SYR) based on historical flight and weather data. The project involved data preprocessing, feature engineering, and cross-validation to ensure accuracy, helping airlines and travelers plan better."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tindog}
              isBlog={false}
              title="Movie Plot Analyzer & Genre Predictor 🎬"
              description="An NLP-powered system that analyzes movie plot summaries to predict genres using machine learning. The project employs Sentiment Analysis, TF-IDF, and multi-label classification models (Naïve Bayes, Logistic Regression, SVM) to classify films into relevant genres. Feature extraction, text preprocessing, and model training enhance accuracy, helping streaming platforms, researchers, and filmmakers better categorize and recommend content."             
            />
          </Col>

          <Col md={4} className="project-card"> */
            <ProjectCard
              imgPath={todo}
              isBlog={false}
              title="Brand Analysis Using Social Media Data Mining 📊"
              description="An NLP and machine learning-based system for brand sentiment analysis using social media data. The project evaluates Logistic Regression, Naïve Bayes, Decision Trees, and SGD for sentiment classification with TF-IDF and CountVectorizer for feature extraction. By analyzing real-time consumer opinions, it helps brands improve engagement, optimize marketing strategies, and track evolving market trends."   
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

export default Projects;
