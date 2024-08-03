import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
export function Publications(props){
    return(
        <Modal {...props} size='lg' aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Neural Networks for Leaf Analysis
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Overview</h4>
                <p>
                    
                </p>
            </Modal.Body>
        </Modal>
    )
}