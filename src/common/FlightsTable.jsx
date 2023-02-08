import React, { Component } from 'react';

const FlightsTable = ( { flights }) => {
    console.log(flights);
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
                    <th>Plane</th>
                    <th>Seats</th>
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
            <td>
                <a href='/flights/:id'>{ flight.flight_number }</a>
            </td>
            <td>{ flight.origin} - { flight.destination }</td>
            <td>{ flight.airplane.name }</td>
            <td>{ flight.airplane.rows.split(',').length * flight.airplane.columns.split(',').length}</td>
        </tr>
    )
};

export default FlightsTable;
