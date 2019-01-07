import React, { Component } from 'react';
import TripSection from './TripSection';

export default class Trip extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: props.id || null
            , sections: props.sections || []
        };
    }

    render() {
        return <article className="trip">{this.state.sections.map((item, key) => <TripSection key={key} {...item} />)}</article>;
    }
}
