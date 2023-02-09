import React, { useState, useEffect, Component } from 'react';
import { useParams } from 'react-router-dom'
import axios from 'axios';

import { FlightsTableHeader, FlightRow } from '../../common/FlightsTable';

const FlightInfo = () => {
    const [flight, setFlight] = useState(null);
    let { id } = useParams();

    function getFlight() {
        axios.get(`http://localhost:3000/flights/${id}.json`).then((response) => {
        console.log(response.data);
        setFlight(response.data);
        });
    }

    useEffect(() => {
        getFlight();
    }, []);
    
    console.log(flight);

    return (
        <table>
            <FlightsTableHeader />
            {flight ? <FlightRow flight={flight}  /> : <></>}
        </table>
    )
}

export default FlightInfo;
