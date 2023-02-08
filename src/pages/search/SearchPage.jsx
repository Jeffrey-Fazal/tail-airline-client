import React, { Component, useState } from 'react';
import FlightsTable from '../../common/FlightsTable';
// import NavBar from "../common/NavBar";

class SearchPage extends Component {
    constructor() {
        super();
        this.state = {
            flights: [
                { "id": 4, "flight_number": "SYDAUHAM", "origin": "SYD", "destination": "AUD", "date": "2023-05-08", "airplane_id": 1, "created_at": "2023-02-07T22:48:28.483Z", "updated_at": "2023-02-07T22:48:28.483Z", "url": "http://localhost:3001/flights/4.json" },
                { "id": 5, "flight_number": "QLDWAAPM", "origin": "QLD", "destination": "WAH", "date": "2023-05-09", "airplane_id": 1, "created_at": "2023-02-07T22:48:28.487Z", "updated_at": "2023-02-07T22:48:28.487Z", "url": "http://localhost:3001/flights/5.json" },
                { "id": 6, "flight_number": "ADLNTHAM", "origin": "ADL", "destination": "NTO", "date": "2023-04-03", "airplane_id": 2, "created_at": "2023-02-07T22:48:28.492Z", "updated_at": "2023-02-07T22:48:28.492Z", "url": "http://localhost:3001/flights/6.json" }],
            result: [],
        }

        this.searchFlights = this.searchFlights.bind(this);
    }

    searchFlights(origin, destination,date) {
        console.log("searching...", origin, destination, date);
        // TODO: filter the flights by origin, destination and date
        // fetch all flights
        // filter flights according to the origin, destination and date
        // handle the case of no flights found
        // reset the result of the previous search
        // this.setState({ result: [] });
        console.log(this.state.flights)

        let availableFlights = this.state.flights.filter(flight => flight.origin === origin && flight.destination === destination && flight.date === date)

        this.setState( { result: availableFlights})
        console.log(this.state.result);
    }

    render() {
        return (
            <div>
                <SearchBar origins={this.state.flights.map(flight => flight['origin'])} destinations={this.state.flights.map(flight => flight['destination'])} onSubmit={this.searchFlights}/>
                <Flights flights={this.state.result} />
            </div>
        )
    }

};

const SearchBar = (props) => {
    const [origin, setOrigin] = useState('');
    const [destination, setDestination] = useState('');
    const [date, setDate] = useState('');

    const _handleChangeOrigin = (e) => {
        console.log(e.target.value);
        setOrigin(e.target.value)
    };

    const _handleChangeDestination = (e) => {
        console.log(e.target.value);
        setDestination(e.target.value)
    };

    const _handleChangeDate = (e) => {
        console.log(e.target.value);
        setDate(e.target.value)
    };

    const _handleSubmit = (e) => {
        // prevent the browser from reloading the page
        e.preventDefault();
        console.log('submittted');
        props.onSubmit(origin, destination, date)

    };

    return (
        <form onSubmit={_handleSubmit}>
            <label>From
                <OriginSelect origins={props.origins} handleChangeOrigin={_handleChangeOrigin} />
            </label>
            <label>To
                <DestinationSelect destinations={props.destinations} handleChangeDestination={_handleChangeDestination} />
            </label>

            <label>Date
                <input type="date" name="date" id="date" onChange={_handleChangeDate} />
            </label>
            <input type="submit" value="Search Flight" />
        </form>
    )
}

const OriginSelect = ({ origins, handleChangeOrigin }) => {
    return (
        <select name="origins" id="origins" onChange={handleChangeOrigin}>
            <option value=''>Select the origin</option>
            {
                origins.map(origin => <option value={origin} key={origin}>{origin}</option>)
            }
        </select>

    )
};

const DestinationSelect = ({ destinations, handleChangeDestination }) => {
    return (
        <select name="destinations" id="destinations" onChange={handleChangeDestination}>
            <option value=''>Select the destination</option>
            {
                destinations.map(destination => <option value={destination} key={destination}>{destination}</option>)
            }
        </select>

    )
};
const Flights = ( { flights }) => {
    return (
        <div>
            <h2>Flight Search Results</h2>
            <FlightsTable flights={flights}/>
        </div>
    )
};

export default SearchPage;
