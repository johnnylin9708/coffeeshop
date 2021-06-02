import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal'
// import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

const buttonColor = {
    color: '#fff',
    backgroundColor: '#0072E3',
    border: 'none',
    borderRadius: '6px',
    padding: '8px 10px 10px 10px'
}

const AddOrder = ({ orderData = [], init }) => {
    const [show, setShow] = useState(false)
    const [newObj, setNewObj] = useState({})

    const handleClose = () => setShow(false);

    const handleShow = () => setShow(true);

    const handleChange = e => {
        setNewObj({ ...newObj, [e.target.id]: e.target.value, })
    }

    const handleSubmit = () => {
        let data = []
        if (newObj.name && newObj.price && newObj.size) {
            if (typeof window !== 'undefined') {
                if (localStorage.getItem('orderData')) {
                    data = JSON.parse(localStorage.getItem('orderData'))
                }
                data.push(newObj)
                localStorage.setItem('orderData', JSON.stringify(data))
            }
            handleClose()
            init()
            alert('已儲存')
        } else if (!newObj.name) {
            alert('請輸入姓名')
        } else if (!newObj.price) {
            alert('請輸入價錢')
        } else if (!newObj.size) {
            alert('請輸入尺寸')
        }
    }

    return (
        <>
            <button style={buttonColor} onClick={handleShow}>
                新增訂單
            </button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>訂單填寫</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="name">
                            <Form.Label>Name</Form.Label>
                            <Form.Control required type="text" placeholder="Name" onChange={handleChange} />
                        </Form.Group>
                        <Form.Group controlId="price">
                            <Form.Label>Price</Form.Label>
                            <Form.Control required type="number" placeholder="Price" onChange={handleChange} />
                        </Form.Group>
                        <Form.Group controlId="size">
                            <Form.Label>Size</Form.Label>
                            <Form.Control required as="select" onChange={handleChange}  >
                                <option>請選擇</option>
                                <option>S</option>
                                <option>M</option>
                                <option>L</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="notes">
                            <Form.Label>Notes</Form.Label>
                            <Form.Control type="text" placeholder="Notes" onChange={handleChange} />
                            <Form.Text className="text-muted">※可選填</Form.Text>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <button style={{ ...buttonColor, backgroundColor: "#8E8E8E" }} onClick={handleClose}>
                        關閉
                    </button>
                    <button style={{ ...buttonColor }} onClick={handleSubmit}>
                        送出
                    </button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
export default AddOrder;