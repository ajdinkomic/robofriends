import React, { Component } from "react";
import './App.css';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import SearchBox from '../components/SearchBox';
import ErrorBoundary from "../components/ErrorBoundary";

class App extends Component {
    constructor() {
        super();

        this.state = {
            robots: [],
            searchfield: ''
        };
    }

    // We don't use arrow function here because this method is a part of React
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => {
                this.setState({
                    robots: users
                });
            });
    }

    onSearchChange = (event) => {
        this.setState({
            searchfield: event.target.value
        });
    }

    render() {
        const { robots, searchfield } = this.state;

        const filteredRobots = robots.filter(
            robot => robot.name.toLowerCase().includes(searchfield.toLowerCase())
        );

        return !robots?.length ?
            <h1>Loading...</h1> :
            (
                <div className="tc">
                    <h1 className="f1">RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                        <ErrorBoundary>
                            <CardList robots={filteredRobots} />
                        </ErrorBoundary>
                    </Scroll>
                </div>
            );
    }
}

export default App;