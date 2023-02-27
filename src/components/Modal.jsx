import React  from 'react';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const CustomModal = ({show, setShow, idVenta}) => {
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Gracias por su compra!</Modal.Title>
        </Modal.Header>
        <Modal.Body><p>Codigo: {idVenta}</p></Modal.Body>
        <Modal.Footer>
         <Link to="/"> <Button variant="secondary" onClick={handleClose}> Volver al Home</Button></Link>
          
          
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CustomModal;