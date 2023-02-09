import React, { Component, useParams } from 'react';
import axios from 'axios';

import { FlightsTableHeader, FlightRow } from '../../common/FlightsTable';

class FlightInfo extends Component {
    constructor() {
        super();
        this.state = {
            flight_url: ''
        }
    }

    // fetch data from the server
    componentDidMount() {
        const fetchFlight = () => {
            console.log('Fetching flight at', this.state.flight_url);
            axios.get(this.state.flight_url).then((response) => {
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
