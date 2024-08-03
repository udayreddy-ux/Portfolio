import React from "react";
import { Container,Row,Col } from "react-bootstrap";
import { useEffect } from "react";
import Footer from './Footer';
import Research from "./Research";
import Coding from "./Coding";
export default function About(){
    useEffect(() => {
        document.querySelectorAll('.about-me li').forEach((item, index) => {
          item.style.setProperty('--order', index);
        });
      }, []);
    return(
        <>
            <div className="page-container">
                <div className="content-wrap">
                    <Container>
                        <Row>
                            <Col md={7} style={{marginTop:'40px'}}>
                                <h1>
                                    <span className="about-pic">Uncover my World!!</span>
                                    <span className="world-spin">🌍</span>
                                </h1>
                                <ul className="about-me">
                                    <li>
                                        Proficient in <span className="highlight">Java</span>, <span className="highlight">Python</span>, 
                                        HTML, CSS, JavaScript, and PHP, with <span className="highlight">React JS</span> and  
                                        <span className="highlight"> Spring Boot</span> magic up my sleeve.
                                    </li><br/>
                                    <li>I slice through <span className="highlight">Leetcode</span> problems whenever I get a free moment.
                                    </li><br/>
                                    <li>When I’m not coding, you’ll find me hitting sixes on the <span className="highlight">cricket field</span>.
                                    </li><br/>
                                    <li>I’m addicted to learning new things by diving into exciting projects.</li><br/>
                                    <li>Always on a quest for knowledge, believing in continuous learning and self-improvement.</li><br/>
                                </ul>
                            </Col>
                            <Col md={5} className="profile-image">
                                <img src="about_pic.png" alt="My area of interests" className="img-fluid profile-img"/>
                            </Col>
                        </Row>
                        <h1 style={{marginTop:'60px', textAlign:'center'}} className="text-gradient">
                        Core Competencies
                        </h1>
                        <Row style={{ marginTop: '30px' }}>
                        {[
                            { src: "java_logo.png", alt: "Advanced Java", text: "Advanced Java" },
                            { src: "python_logo.png", alt: "Python", text: "Python" },
                            { src: "html_logo.png", alt: "HTML", text: "HTML" },
                            { src: "css_logo.png", alt: "CSS", text: "CSS" },
                            { src: "php_logo.png", alt: "PHP", text: "PHP" },
                            { src: "js_logo.png", alt: "JavaScript", text: "JavaScript" },
                            { src: "springboot_logo.png", alt: "SpringBoot", text: "SpringBoot" },
                            { src: "reactjs_logo.png", alt: "React Js", text: "React Js" },
                            { src: "docker_logo.png", alt: "Docker", text: "Docker" },
                            { src: "aws_logo.png", alt: "AWS Cloud", text: "AWS Cloud" },
                            { src: "dl_logo.png", alt: "Deep Learning", text: "Deep Learning" },
                            { src: "git.png", alt: "Git", text: "Git" },
                            { src: "MySQL_logo.png", alt: "My SQL", text: "My SQL" },
                            { src: "postgre_logo.png", alt: "Postgre SQL", text: "Postgre SQL" },
                            { src: "R_logo.png", alt: "R programming", text: "R programming" },
                            { src: "rest_logo.png", alt: "Rest API", text: "Rest API" },
                            { src: "sp_logo.png", alt: "Spark SQL", text: "Spark SQL" },
                            { src: "tableau_logo.png", alt: "Tableau", text: "Tableau" },
                            { src: "streamlit_logo.png", alt: "Streamlit", text: "Streamlit" },
                            { src: "jdbc_logo.png", alt: "JDBC", text: "JDBC" }
                        ].map((skill, idx) => (
                            <Col key={idx} md={3} className="profile-image">
                            <div className="skill">
                                <img src={skill.src} alt={skill.alt} className="img-fluid profile-img" />
                            </div>
                            
                            </Col>
                        ))}
                        </Row>
                    </Container>
                    <h1 style={{marginTop:'30px', textAlign:'center', marginBottom:'30px'}} className="text-gradient">
                        Research Highlights
                    </h1>
                    <Research/>
                    <h1 style={{marginTop:'30px', textAlign:'center', marginBottom:'30px', color: '#FFD700'}} className="text-gradient">
                        Commitment to Code
                    </h1>
                    <Coding/>
                </div>
                <Footer/>
            </div>
        </>
    );
}