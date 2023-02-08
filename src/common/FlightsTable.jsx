import React, { Component } from 'react';
import { Link } from "react-router-dom";


const FlightsTable = ({ flights }) => {
    console.log(flights);
    let rows = [];
    console.log(flights);
    flights.forEach(flight => {
        rows.push(<FlightRow flight={flight} key={flight.id} />)
    })
    return (
        <table>
            <FlightsTableHeader />
            <tbody>
                {rows}
            </tbody>
        </table>
    )
};

export function FlightsTableHeader () {
    return (
        <thead>
            <tr>
                <th>Date</th>
                <th>Flight Number</th>
                <th>From - To</th>
                <th>Plane</th>
                <th>Seats</th>
            </tr>
        </thead>
    )
};

export function FlightRow( { flight }) {


    return (
        <tr>
            <td>{flight.date}</td>
            <td>
                <Link to={`/flights/${flight.id}`}>{flight.flight_number}</Link>
            </td>
            <td>{flight.origin} - {flight.destination}</td>
            <td>{flight.airplane.name}</td>
            <td>{flight.airplane.rows.split(',').length * flight.airplane.columns.split(',').length}</td>
        </tr>
    )
};

export default FlightsTable;
