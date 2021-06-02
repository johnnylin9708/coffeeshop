import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

const ModalOrder = () => {
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                新增訂單
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>訂單填寫</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="name" placeholder="Name" />
                        </Form.Group>
                        <Form.Group controlId="formBasicPrice">
                            <Form.Label>Price</Form.Label>
                            <Form.Control type="number" placeholder="Price" />
                        </Form.Group>
                        <Form.Group controlId="formBasicSize">
                            <Form.Label>Size</Form.Label>
                            <Form.Control as="select">
                                <option>S</option>
                                <option>M</option>
                                <option>L</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="formBasicNotes">
                            <Form.Label>Notes</Form.Label>
                            <Form.Control type="text" placeholder="Notes" />
                            <Form.Text className="text-muted">※可選填</Form.Text>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
export default ModalOrder;