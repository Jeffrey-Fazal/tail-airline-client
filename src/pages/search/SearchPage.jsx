import axios from 'axios';
import React, { Component, useState } from 'react';
import FlightsTable from '../../common/FlightsTable';
import NavbarBootStrap from "../../common/NavBar";
import FooterStrap from "../../common/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';

const FLIGHTS_URL = 'http://localhost:3000/flights.json';
class SearchPage extends Component {
    constructor() {
        super();
        this.state = {
            flights: [],
            result: [],
        }

        this.searchFlights = this.searchFlights.bind(this);
    }

    // fetch data from the server
    componentDidMount() {
        const fetchFlights = () => {
            axios.get(FLIGHTS_URL).then((response) => {
                console.log(response.data);
                this.setState({ flights: response.data });
                setTimeout(fetchFlights, 5000);      // should we repeatly fetch data or only fetch when the search is submitted?
            });
        };
        fetchFlights();
    }

    searchFlights(origin, destination, date) {
        // console.log("searching...", origin, destination, date);
        // console.log(this.state.flights)
        // filter the flights according to the origin, destination and date
        let availableFlights = this.state.flights.filter(flight => flight.origin === origin && flight.destination === destination && flight.date === date)

        this.setState({ result: availableFlights })
        // console.log(this.state.result);
    }

    render() {
        return (
            <div>
                <NavbarBootStrap />
                <SearchBar origins={this.state.flights.map(flight => flight['origin'])} destinations={this.state.flights.map(flight => flight['destination'])} onSubmit={this.searchFlights} />
                <Flights flights={this.state.result} />
                <FooterStrap />
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
        <h1>Welcome to top rated Airlines</h1>
            <p>Our airlines has great flights, check them out with our easy to use search bar.</p>
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
const Flights = ({ flights }) => {
    if (flights.length > 0) {
        return (
            <div className='result'>
                <FlightsTable flights={flights} />
            </div>
        )
    } else {
        return (
            <div>
                <i>No available flights found</i>
            </div>
        )
    }

};

export default SearchPage;
