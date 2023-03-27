import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll'
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';


class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response=> {
                return response.json();
            })
            .then(users=> {
                this.setState({ robots: users})
            })
        
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
    }

    render() {
        const filteredRobots = this.state.robots.filter(robot =>{
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        }) 
        if (this.state.robots.length === 0) {
            return <h1>Loading...</h1>
        } else {
            return (
                <>
                <div className='tc'>
                    <h1 className='f1'>RoboFriends</h1>
                    <h3>Find your robot! Just make a search!</h3>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                        <ErrorBoundry>
                            <CardList robots={filteredRobots}/>
                        </ErrorBoundry>
                    </Scroll>
                    <h5>Created by Anderson Candido Diniz</h5>
                </div>
                </>
            );
        }
        
    }
}

export default App;