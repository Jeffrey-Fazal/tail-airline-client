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
        <div>
        <table>
            <FlightsTableHeader />
            {flight ? <FlightRow flight={flight}  /> : <></>}
        </table>
        <div>
            {flight ? <SeatsTable rows={flight.airplane.rows} columns={flight.airplane.columns}/> : <></> }
        </div>
        </div>
    )
}

const SeatsTable = ( { rows, columns }) => {
    const newRows = rows.split(',').map((row) =>
        <th>{row}</th>
    )

    const newColumns = columns.split(',').map((column) => <td>{column}</td>)



    return (
        <div>
            <table>
                <thead>
                    <tr>
                        {newRows}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                       {newColumns}
                    </tr>
                </tbody>
            </table>
        </div>
    )
};

export default FlightInfo;
