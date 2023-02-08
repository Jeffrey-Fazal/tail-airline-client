import React, { Component } from 'react';

const FlightsTable = ( { flights }) => {
    let rows = [];
    console.log(flights);
    flights.forEach(flight => {
        rows.push(<FlightRow flight={flight} key={flight.id} />)
    })
    return (
        <table>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Flight Number</th>
                    <th>From - To</th>
                    {/* <th>Plane</th>
                    <th>Seats</th> */}
                </tr>
            </thead>
            <tbody>
                { rows }
            </tbody>
        </table>
    )
};


const FlightRow = ( { flight }) => {
    return (
        <tr>
            <td>{ flight.date }</td>
            <td>{ flight.flight_number }</td>
            <td>{ flight.origin} - { flight.destination }</td>
            {/* <td>{ flight.airplane.name }</td>
            <td>{ flight.airplane.rows.count() * flight.airplane.colums.count() }</td> */}
        </tr>
    )
};

export default FlightsTable;
