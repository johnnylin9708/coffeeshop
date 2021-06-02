import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

const buttonColor = {
    color: '#fff',
    backgroundColor: '#0072E3',
    border: 'none',
    borderRadius: '6px',
    padding: '8px 10px 10px 10px'
}

const EditOrder = ({ orderData = [], oldObj = {}, init }) => {
    const [show, setShow] = useState(false)
    const [obj, setObj] = useState(oldObj)

    const { name, price, size, notes } = obj

    const handleClose = () => setShow(false);

    const handleShow = () => setShow(true);

    const handleChange = e => {
        setObj({ ...obj, [e.target.id]: e.target.value, })
    }

    const handleSubmit = () => {
        let data = orderData
        if (obj.name && obj.price && obj.size) {
            if (typeof window !== 'undefined') {

                const index = data.indexOf(oldObj)
                data[index] = obj

                localStorage.setItem('orderData', JSON.stringify(data))
            }
            handleClose()
            init()
            alert('已儲存')
        } else if (!obj.name) {
            alert('請輸入姓名')
        } else if (!obj.price) {
            alert('請輸入價錢')
        } else if (!obj.size) {
            alert('請輸入尺寸')
        }
    }

    return (
        <>
            <Button style={{ ...buttonColor, backgroundColor: "#FFD306", color: "#000", marginRight: '10px' }} onClick={handleShow}>編輯</Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>訂單填寫</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="name">
                            <Form.Label>Name</Form.Label>
                            <Form.Control required type="text" placeholder="Name" value={name} onChange={handleChange} />
                        </Form.Group>
                        <Form.Group controlId="price">
                            <Form.Label>Price</Form.Label>
                            <Form.Control required type="number" placeholder="Price" value={price} onChange={handleChange} />
                        </Form.Group>
                        <Form.Group controlId="size">
                            <Form.Label>Size</Form.Label>
                            <Form.Control required as="select" value={size} onChange={handleChange}>
                                <option>請選擇</option>
                                <option>S</option>
                                <option>M</option>
                                <option>L</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="notes">
                            <Form.Label>Notes</Form.Label>
                            <Form.Control type="text" placeholder="Notes" value={notes} onChange={handleChange} />
                            <Form.Text className="text-muted">※可選填</Form.Text>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        關閉
                    </Button>
                    <Button type="submit" variant="primary" onClick={handleSubmit}>
                        送出
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
export default EditOrder;