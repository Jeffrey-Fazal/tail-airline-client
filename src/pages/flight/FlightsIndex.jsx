import React, { useState, useEffect } from "react";
import Table from 'react-bootstrap/Table';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarBootStrap from "../../common/NavBar";
import FooterStrap from "../../common/Footer";
import FlightsTable from "../../common/FlightsTable";
import Button from 'react-bootstrap/Button';

const FlightsIndex = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        function getFlight() {
            axios.get(`http://localhost:3000/flights.json`).then((response) => {
            console.log(response.data);
            setData(response.data);
            });
        }
        getFlight()
    }, []);
    
    return (
        <div>
            <NavbarBootStrap />
            <h1>View all Flights</h1>
            <Button variant="success" href="http://localhost:3000/flights.html">Create Flights</Button>{' '}
            <FlightsTable flights={data} />
            <FooterStrap />
        </div>
    )
};

export default FlightsIndex