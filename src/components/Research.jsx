import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { researchData } from '../Data.js';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
export default function Research(){
    const [show,setShow]=useState(false);
    const [selectedResearch,setSelectedResearch]=useState(null);
    const handleClose=()=>setShow(false);
    const handleShow=(research)=>{
        setSelectedResearch(research);
        setShow(true);
    }
    return(
        <>
        <Row xs={1} md={2} className='g-4'>
            {researchData.map((research,idx)=>(
                <Col key={idx}>
                    <Card className='research-card' style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={research.imgSrc} className='research-logo'/>
                        <Card.Body className='card-body'>
                            <Card.Title className='card-title'>
                                {research.title}
                            </Card.Title>
                            <Card.Text className='card-text'>
                                {research.text}
                            </Card.Text>
                            <Button variant="primary" className='card-button' onClick={()=>handleShow(research)}> 
                                Learn More
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
        {selectedResearch && (
            <Modal size="lg" aria-labelledby="contained-modal-title-vcenter" centered show={show} onHide={handleClose} >
            <Modal.Header closeButton  className="modal-background">
            <Modal.Title id="contained-modal-title-vcenter">
            {selectedResearch.realTitle}
            </Modal.Title>
            </Modal.Header>
            <Modal.Body className='modal-body'>
            <h4>Summary</h4>
            <p>{selectedResearch.conclusion}</p>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="primary" href={selectedResearch.url} target="_blank">View Article</Button>
            <div className='contain'>
            <Button onClick={handleClose} className='secondary'>Close</Button>
            </div>
            </Modal.Footer>
            </Modal>
        )}
        </>
    );
}