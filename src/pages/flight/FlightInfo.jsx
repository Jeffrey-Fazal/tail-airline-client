import React, { Component, useParams } from 'react';
import axios from 'axios';

import { FlightsTableHeader, FlightRow } from '../../common/FlightsTable';

const FLIGHT_URL = `http://localhost:3001/flights/`
class FlightInfo extends Component {
    constructor() {
        super();
        this.state = {
            id: null,
        }
    }

    // fetch data from the server
    componentDidMount() {
        const fetchFlight = () => {
            console.log('Fetching flight at', FLIGHT_URL);
            axios.get(FLIGHT_URL).then((response) => {
                console.log(response.data);
                return response.data;
            });
            setTimeout(fetchFlight, 5000);
        };
        fetchFlight();
    }


    render() {
        return (
            <table>
                <FlightsTableHeader />
                {/* <FlightRow /> */}
            </table>
        )
    }

}

export default FlightInfo;
