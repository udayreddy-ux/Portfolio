import React from "react";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { projDesc } from "../Proj_desc.js";
import Footer from './Footer';
export default function Projects(){
    return(
        <>
        <h1 className="project-heading">Creations & Contributions</h1>
        <Row xs={1} md={3} className="g-4">
            {projDesc.map((proj,idx)=>(
                <Col key={idx}>
                    <Card className="shadow-card project-card">
                        <Card.Img variant="top" src={proj.img} className="project-logo"/>
                        <Card.Body>
                            <Card.Title>{proj.title}</Card.Title>
                            <Card.Text>
                                {proj.text}
                            </Card.Text>
                            <Button className="card-button custom-button" href={proj.url} target="_blank">
                                Code
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
        <Footer/>
        </>
    );
}