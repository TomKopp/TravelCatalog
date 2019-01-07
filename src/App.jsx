import React, { Component } from 'react';
import Trip from './Trip';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentTrip: { sections: [] }
            , mediaList: []
            , tripList: props.tripList || []
        };
    }

    onUpdateTripSections(tripSections) {
        if (!Array.isArray(tripSections)) {
            // eslint-disable-next-line
            tripSections = [...tripSections];
        }

        this.setState(({ currentTrip }) => {
            currentTrip.sections = tripSections;
            return { currentTrip };
        });
    }

    render() {
        return <>
            <h1>{this.props.title}</h1>
            {this.state.tripList.map((item, key) => <Trip key={key} {...item} />)}
            </>;
    }
};
