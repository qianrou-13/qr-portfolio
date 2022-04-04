import React, {useEffect} from "react";
import "./skill.css";
import { Row, Col, Card } from "react-bootstrap";
import { BsGraphUp } from "react-icons/bs";
import { BsWindowSidebar } from "react-icons/bs";
import { FaAppStoreIos } from "react-icons/fa";
import AOS from 'aos'
import 'aos/dist/aos.css'

const Skill = () => {
  useEffect(() => {
    AOS.init({
      offset: 300,
      duration: 1500
    });
    AOS.refresh();
  }, []) 

  return (
    <section id="skill">
      <div className="container" data-aos='flip-right'>
        <h1 className="skill-h1">Skill</h1>
        <div className="container">
          <Row>
            <Col md={4}>
              <Card className="mb-3" data-aos='flip-left'>
                <Card.Body>
                  <BsGraphUp className="skill-icon" />
                  <Card.Title>Data Analyst</Card.Title>
                  <Card.Text>
                    <p>Data retrieval, processing, and visualization enable any
                      organization to deliver solutions and suggestions to
                      fulfill its objective.
                    </p>
                    <p><b>Language that I have used:</b><br/>
                      Python, R-programming, MySQL, PLSQL 
                    </p>
                    <p><b>Dev Tools:</b><br/>
                    R-Studio, <br/>
                    Excel, <br/>
                    Tableau
                    </p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="mb-3" data-aos='flip-left'>
                <Card.Body>
                  <BsWindowSidebar className="skill-icon" />
                  <Card.Title>Web Application Developer</Card.Title>
                  <Card.Text>
                    <p>I enjoy building a web application from scratch, 
                      where you can discover how things actually works.</p>
                    <p><b>Language that I have used:</b><br/>
                    HTML, CSS, JavaScript, React
                    </p>
                    <p><b>Dev Tools:</b><br/>
                    Bootstrap, <br/>
                    Visual Studio Code, <br/>
                    GitHub
                    </p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="mb-3" data-aos='flip-left'>
                <Card.Body>
                  <FaAppStoreIos className="skill-icon" />
                  <Card.Title>Mobile Application Developer</Card.Title>
                  <Card.Text>
                    <p>Design, build, debug and deploy a mobile app, which can 
                      be use in different platform such as IOS & Android.</p>
                    <p><b>Language that I have used:</b><br/>
                    Kotlin, Swift, Dart
                    </p>
                    <p><b>Dev Tools:</b><br/>
                    Android-Studio, <br/>
                    Xcode, <br/>
                    Flutter
                    </p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </section>
  );
};

export default Skill;
