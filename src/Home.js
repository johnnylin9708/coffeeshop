import React, { useState, useEffect } from 'react';
import Banner from './component/Banner';
import TableComponent from './component/TableComponent';
import AddOrder from './component/AddOrder';
import './Home.css'

const footer = {
    height: "10vh",
    width: "100%",
    backgroundColor: "aquamarine",
    textAlign: 'center',
    paddingTop: '4vh'
}

const Home = () => {
    const [data, setData] = useState([])

    const init = () => {
        const data = JSON.parse(localStorage.getItem('orderData'))
        setData(data)
    }

    useEffect(() => {
        init()
    }, [])

    return (<>
        <Banner />
        <br />
        <div style={{ marginBottom: '8%' }} className="container">
            <AddOrder data={data} init={init} />
            <br />
            <br />
            <TableComponent data={data} init={init} />
        </div>
        <footer style={footer}>
            Copyright © 2021. All rights reserved
        </footer>
    </>)
}

export default Home;