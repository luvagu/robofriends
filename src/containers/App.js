import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
// import { robots } from '../robots';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';

class App extends Component  {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchField: ''
        }
        // console.log('constructor');
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({ robots: users }));
        // this.setState({robots: robots});
        // console.log('componentDidMount');
    }

    onSearchChange = (event) => {
        this.setState({searchField: event.target.value})
        // console.log('onSearchChange');
    }

    render() {
        const { robots, searchField } = this.state;
        const searchRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase())
        });
        // console.log('render');
        return !robots.length ?
             (
                <div className='tc'>
                    <h1 className='f1'>Loading......</h1>
                </div>
            )
            : 
            (
                <div className='tc'>
                    <h1 className='f1'>RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                        <ErrorBoundry>
                            <CardList robots={searchRobots} />
                        </ErrorBoundry>
                    </Scroll>
                </div>
            );
    }
    
}

export default App;