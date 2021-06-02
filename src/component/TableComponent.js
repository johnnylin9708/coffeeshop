import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import EditOrder from './EditOrder'

const buttonColor = {
    color: '#fff',
    backgroundColor: '#0072E3',
    border: 'none',
    borderRadius: '6px',
    padding: '8px 10px 10px 10px'
}

const TableComponent = ({ data = [], init }) => {

    const handleDelete = (obj) => {
        var yes = window.confirm('你確定要刪除嗎？');

        if (yes) {
            let orderData = data
            const index = orderData.indexOf(obj)
            orderData.splice(index, 1)
            localStorage.setItem('orderData', JSON.stringify(orderData))
            init()
        }
    }

    return (
        <Table bordered hover>
            <thead >
                <tr>
                    <th>修改</th>
                    <th>#</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Size</th>
                    <th>Notes</th>
                </tr>
            </thead>
            <tbody>
                {data && data.map((item, index) => (
                    <tr key={index} >
                        <td>
                            <EditOrder orderData={data} oldObj={item} init={init} />
                            <Button style={{ ...buttonColor, backgroundColor: "#CE0000" }} onClick={() => handleDelete(item)}>刪除</Button>
                        </td>
                        <td>{index}</td>
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                        <td>{item.size}</td>
                        <td>{item.notes}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    )
}
export default TableComponent;