import React from "react";
import { Container,Row,Col } from "react-bootstrap";
import { useEffect } from "react";
import Footer from './Footer';
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
                    <h1 style={{marginTop:'30px', textAlign:'center'}} className="text-gradient">
                    Core Competencies
                    </h1>
                    <Row style={{marginTop:'30px'}}>
                        <Col md={3} className="profile-image">
                        <div className="skill">
                            <img src="java_logo.png" alt="My area of interests" className="img-fluid profile-img"/>
                        </div>
                        <div className="hide" style={{textAlign:'center'}}>
                            <p className="text-gradient">Advanced Java</p>
                        </div>
                        </Col>
                        <Col md={3} className="profile-image">
                        <div className="skill">
                            <img src="python_logo.png" alt="My area of interests" className="img-fluid profile-img"/>
                        </div>
                        <div className="hide" style={{textAlign:'center'}}>
                            <p className="text-gradient">Python</p>
                        </div>
                        </Col>
                        <Col md={3} className="profile-image">
                        <div className="skill">
                        <img src="html_logo.png" alt="My area of interests" className="img-fluid profile-img"/>
                        </div>
                        <div className="hide" style={{textAlign:'center'}}>
                            <p className="text-gradient">HTML</p>
                        </div>
                        </Col>
                        <Col md={3} className="profile-image">
                        <div className="skill">
                        <img src="css_logo.png" alt="My area of interests" className="img-fluid profile-img"/>
                        </div>
                        <div className="hide" style={{textAlign:'center'}}>
                            <p className="text-gradient">CSS</p>
                        </div>
                        </Col>
                        <Col md={3} className="profile-image">
                        <div className="skill">
                            <img src="php_logo.png" alt="My area of interests" className="img-fluid profile-img"/>
                        </div>
                        <div className="hide" style={{textAlign:'center'}}>
                            <p className="text-gradient">PHP</p>
                        </div>
                        </Col>
                        <Col md={3} className="profile-image">
                        <div className="skill">
                            <img src="js_logo.png" alt="My area of interests" className="img-fluid profile-img"/>
                        </div>
                        <div className="hide" style={{textAlign:'center'}}>
                            <p className="text-gradient">JavaScript</p>
                        </div>
                        </Col>
                        <Col md={3} className="profile-image">
                            <div className="skill">
                                <img src="springboot_logo.png" alt="My area of interests" className="img-fluid profile-img"/>
                            </div>
                            <div className="hide" style={{textAlign:'center'}}>
                                <p className="text-gradient">SpringBoot</p>
                            </div>
                        </Col>
                        <Col md={3} className="profile-image">
                            <div className="skill">
                                <img src="reactjs_logo.png" alt="My area of interests" className="img-fluid profile-img"/>
                            </div>
                            <div className="hide" style={{textAlign:'center'}}>
                                <p className="text-gradient">React Js</p>
                            </div>
                        </Col>
                        <Col md={3} className="profile-image">
                        <div className="skill">
                        <img src="docker_logo.png" alt="My area of interests" className="img-fluid profile-img"/>
                            </div>
                            <div className="hide" style={{textAlign:'center'}}>
                                <p className="text-gradient">Docker</p>
                            </div>
                        </Col>
                        <Col md={3} className="profile-image">
                            <div className="skill">
                                <img src="aws_logo.png" alt="My area of interests" className="img-fluid profile-img"/>
                            </div>
                            <div className="hide" style={{textAlign:'center'}}>
                                <p className="text-gradient">AWS Cloud</p>
                            </div>
                        </Col>
                        <Col md={3} className="profile-image">
                            <div className="skill">
                                <img src="dl_logo.png" alt="My area of interests" className="img-fluid profile-img"/>
                            </div>
                            <div className="hide" style={{textAlign:'center'}}>
                                <p className="text-gradient">Deep Learning</p>
                            </div>
                        </Col>
                        <Col md={3} className="profile-image">
                            <div className="skill">
                                <img src="git.png" alt="My area of interests" className="img-fluid profile-img"/>
                            </div>
                            <div className="hide" style={{textAlign:'center'}}>
                                <p className="text-gradient">Git</p>
                            </div>
                        </Col>
                        <Col md={3} className="profile-image">
                            <div className="skill">
                                <img src="MySQL_logo.png" alt="My area of interests" className="img-fluid profile-img"/>
                            </div>
                            <div className="hide" style={{textAlign:'center'}}>
                                <p className="text-gradient">My SQL</p>
                            </div>
                        </Col>
                        <Col md={3} className="profile-image">
                            <div className="skill">
                                <img src="postgre_logo.png" alt="My area of interests" className="img-fluid profile-img"/>
                            </div>
                            <div className="hide" style={{textAlign:'center'}}>
                                <p className="text-gradient">Postgre SQL</p>
                            </div>
                        </Col>
                        <Col md={3} className="profile-image">
                            <div className="skill">
                                <img src="R_logo.png" alt="My area of interests" className="img-fluid profile-img"/>
                            </div>
                            <div className="hide" style={{textAlign:'center'}}>
                                <p className="text-gradient">R programming</p>
                            </div>
                        </Col>
                        <Col md={3} className="profile-image">
                            <div className="skill">
                                <img src="rest_logo.png" alt="My area of interests" className="img-fluid profile-img"/>
                            </div>
                            <div className="hide" style={{textAlign:'center'}}>
                                <p className="text-gradient">Rest API</p>
                            </div>
                        </Col>
                        <Col md={3} className="profile-image">
                            <div className="skill">
                                <img src="sp_logo.png" alt="My area of interests" className="img-fluid profile-img"/>
                            </div>
                            <div className="hide" style={{textAlign:'center'}}>
                                <p className="text-gradient">Spark SQL</p>
                            </div>
                        </Col>
                        <Col md={3} className="profile-image">
                            <div className="skill">
                                <img src="tableau_logo.png" alt="My area of interests" className="img-fluid profile-img"/>
                            </div>
                            <div className="hide" style={{textAlign:'center'}}>
                                <p className="text-gradient">Tableau</p>
                            </div>
                        </Col>
                        <Col md={3} className="profile-image">
                            <div className="skill">
                                <img src="streamlit_logo.png" alt="My area of interests" className="img-fluid profile-img"/>
                            </div>
                            <div className="hide" style={{textAlign:'center'}}>
                                <p className="text-gradient">Streamlit</p>
                            </div>
                        </Col>
                        <Col md={3} className="profile-image">
                            <div className="skill">
                                <img src="jdbc_logo.png" alt="My area of interests" className="img-fluid profile-img"/>
                            </div>
                            <div className="hide" style={{textAlign:'center'}}>
                                <p className="text-gradient">JDBC</p>
                            </div>
                        </Col>
                    </Row>  
                </Container>
            </div>
            <Footer />
        </div>
        </>
    );
}