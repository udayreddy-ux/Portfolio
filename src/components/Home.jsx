import React from "react";
import {Container,Row,Col} from "react-bootstrap";
import TypeWriter from "./TypeWriter";
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import { BsEnvelopeAtFill,BsLinkedin,BsInstagram } from "react-icons/bs";
export default function Home(){
    const navigate=useNavigate();
    const goToAbtPage=()=>{
        navigate("/About");
    }
    const goToCntPage=()=>{
        navigate("/Contact");
    }
    return(
        <>
            <Container fluid>
                <Row>
                    <Col md={7} className="custom-intro">
                    <h1 className="custom-greet">
                        <span className="emoji-spin">👋 </span>
                        <span className="text-gradient">Hello Folks, </span>
                        <span className="text-gradient">I'M</span>
                    </h1>
                    <p className="text-gradient" style={{fontSize:'80px', lineHeight:'1.8', fontWeight:'bold', textAlign:'center'}}>
                        Uday Surya Kovvuri<br/>
                        <p className="semitxt-gradient" style={{fontSize:'20px', lineHeight:'0.8', fontWeight:'normal', textAlign:'right'}}>
                            Student at University of Cincinnati
                        </p>
                    </p>
                        <div class="line-container">
                            <div class="horizontal-line"></div>
                            <div class="circle">
                                <img src="profile_pic.png" alt="My pic" className="circle"/>
                            </div>
                        </div>
                        <TypeWriter texts={["Former SDE Intern","Tech Enthusiast","Master's in Computer Science"]} speed={150} delayBetweenTexts={2000}/>
                    </Col>
                    <Col md={5} className="home-image">
                        <img src="hm.png" alt="My area of interests" className="img-fluid"/>
                    </Col>
                </Row>
                <Row>
                    <Col md={5} className="profile-image">
                        <img src="who_image.png" alt="My area of interests" className="img-fluid profile-img"/>
                    </Col>
                    <Col md={7} className="custom-intro">
                        <h1 className="text-gradient" style={{fontSize:'50px',textAlign:'center'}}>Who am I?</h1>
                        <p className="description">Hi, I'm Uday Surya Kovvuri, a passionate software developer currently pursuing a Master's degree in Computer Science 
                            at the University of Cincinnati. I specialize in advanced algorithms, cloud computing, and full-stack web 
                            development. I am actively looking for opportunities to apply my skills and contribute to innovative projects.</p>
                        <Button variant="info" size="lg" onClick={()=>goToAbtPage()} className="button-container">More Info</Button>
                    </Col>
                </Row>
            </Container>
            <h1 className="home-contact">Feel Free to Reach me!!</h1>
            <h3 style={{ fontSize: '35px', textAlign: 'center' }}>
                <a 
                    onClick={goToCntPage}
                    className="cnt"
                >
                    <span className="text-gradient" style={{ fontSize: '25px', alignItems:'center'}}>Get in Touch</span>
                    <span style={{ fontSize: '25px' }} className="emoji">😉</span>
                </a>
            </h3>
            <div className="circle-container">
                <div className="circle-logo icon-circle">
                    <a href="https://www.linkedin.com/in/udaysurya/" target="_blank">
                        <BsLinkedin className="icon"/>
                    </a>
                </div>
                <div className="circle-logo icon-circle">
                    <a href="https://www.instagram.com/deveswarreddykovvuri/" target="_blank">
                            <BsInstagram className="icon"/>
                    </a>
                </div>
                <div className="circle-logo icon-circle" >
                    <a href="mailto:kovvuruy@mail.uc.edu" target="_blank">
                                <BsEnvelopeAtFill className="icon"/>
                    </a>
                </div>
            </div>
        </>
    );
}