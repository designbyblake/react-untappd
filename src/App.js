import React, { Component } from 'react';

import './App.css';
import untappd from './untappd';
import Beers from './components/Beers';
import BeerFrom from './components/BeerForm';

import axios from 'axios';
const beer = {
    call: 'https://api.untappd.com/v4/user/checkins/',
    clientId: untappd.clientId,
    secret: untappd.secret
}

class App extends Component {
    constructor() {
        super();
        this.loadBeers = this.loadBeers.bind(this);
        this.state = {
            beer: {},
            stuff:{}
        };
    }

    loadBeers(user) {
        var self = this;
        var fetchUrl = `${beer.call}/${user.name}?client_id=${beer.clientId}&client_secret=${beer.secret}`;
        axios.get(fetchUrl)
        .then(function (response) {
            console.log(response.data.response.checkins.items)
            self.setState({
                beer: response.data.response.checkins.items
            })
        })
        .catch(function (error) {
            console.log(error);
        });
    }


    render() {
        return (
            <div>
                <div className="App">
                    <header className = "App-header">
                        {/* <img src = { logo } className = "App-logo" alt = "logo" /> */}
                        <h1 className = "App-title" > Untappd React API Test</h1>
                    </header>   
                    {/* <p className = "App-intro" > To get started, edit <code> src / App.js </code> and save to reload.</p> */}
                    <ul className="list-of-beers">
                        {
                            Object.keys(this.state.beer)
                                .map(key => <Beers key={key} beer={this.state.beer[key]} />)
                        }
                    </ul>    
                </div>
                <BeerFrom loadBeers={this.loadBeers}></BeerFrom>
            </div>
        );
    }
}

export default App;