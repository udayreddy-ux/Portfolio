import React from "react"
import Container  from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { AiOutlineLinkedin,AiOutlineGithub,AiOutlineInstagram,AiOutlineTwitter,AiOutlineFacebook,AiOutlineCopyright } from "react-icons/ai";

export default function Footer(){
    let dt=new Date();
    let year=dt.getFullYear();
    return(
        <>
            <Container fluid className="footer">
                <Row>
                    <Col md={5} className="footer-text">Design & Developed by Uday Surya Kovvuri</Col>
                    <Col md={3} className="footer-icons">
                        <a href="https://www.linkedin.com/in/udaysurya/" target="_blank">
                            <AiOutlineLinkedin/>
                        </a>
                        <a href="https://www.instagram.com/deveswarreddykovvuri/" target="_blank">
                            <AiOutlineInstagram/>
                        </a>
                        <a href="https://github.com/udayreddy-ux" target="_blank">
                            <AiOutlineGithub/>
                        </a>           
                        <a href="https://www.linkedin.com/in/udaysurya/" target="_blank">
                            <AiOutlineTwitter/> 
                        </a>                                               
                    </Col>
                    <Col md={4} className="footer-copy">Copyright © {year} all rights reserved 
                    </Col>
                </Row>
            </Container>
        </>
    );
}