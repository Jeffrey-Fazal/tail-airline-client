import React, { Component } from 'react';
import FlightsTable from '../../common/FlightsTable';

const SearchPage = () => {
    return (
        <div>
            <SearchBar />
            <Flights />
        </div>
    )
};

const SearchBar = () => {
    return (
        <div>
            <div>
                <form>
                    <label htmlFor="origin">From</label>
                    <select name="origin" id="origin">
                        <option value="JFK">John F. Kennedy International Airport (New York, USA)</option>
                        <option value="SYD">Sydney International Airport (Sydney, AUS)</option>
                        <option value="MEL">Melbourne International Airport (Melbourne, AUS) </option>
                    </select>
                    <label htmlFor="destination">To</label>
                    <select name="destination" id="destination">
                        <option value="HAN">Hanoi International Airport (Hanoi, VN)</option>
                        <option value="SGN">Ho Chi Minh City International Airport (HCMC, VN)</option>
                        <option value="DAD">Da Nang International Airport (Da Nang, VN)</option>
                    </select>
                    <label htmlFor="date">Date</label>
                    <input type="date" name="date" id="date" />
                    <input type="submit" value="Search Flight" />
                </form>
            </div>
        </div>
    )
}

const Flights = () => {
    return (
        <div>
            <h2>Flight Search Results</h2>
            <FlightsTable />
        </div>
    )
};

export default SearchPage;
