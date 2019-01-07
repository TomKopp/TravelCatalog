import React, { Component } from 'react';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentTrip: null
            , mediaList: []
            , tripList: []
        };
    }

    render() {
        return <h1>{this.props.title}</h1>;
    }
}

export default App;
