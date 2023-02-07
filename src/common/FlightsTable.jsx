import React, { Component } from 'react';

const FlightsTable = () => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Flight</th>
                    <th>From - To</th>
                    <th>Plane</th>
                    <th>Seats</th>
                </tr>
            </thead>
            <tbody>
                <FlightRow />
            </tbody>
        </table>
    )
};


const FlightRow = () => {
    return (
        <tr>
            <td>15 February 2023</td>
            <td>VN110</td>
            <td>SYN > SGN</td>
            <td>Airbus 303</td>
            <td>90</td>
        </tr>
    )
};

export default FlightsTable;
