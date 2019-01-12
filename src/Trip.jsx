import React, { Component } from 'react';
import MediaList from './MediaList';
import Paper from '@material-ui/core/Paper';
import TripSection from './TripSection';

export default class Trip extends Component {
    constructor(props) {
        super(props);

        const sectionList = props.sections || [];
        const [ journeyOut, ...transportationList ] = sectionList.filter((el) => Boolean(el.transportation));
        const journeyBack = transportationList.pop();

        this.state = {
            id: props.id || null
            , title: props.title || 'Generic Title'
            , sectionList
            , mediaList: sectionList.reduce((carry, el) => carry.concat(el.mediaList), [])
            , journeyOut: journeyOut.transportation
            , journeyBack: journeyBack.transportation
            , accomodation: null
        };
    }

    render() {
        return <article className="trip">
            <MediaList children={this.state.mediaList} />
            <h1>{this.state.title}</h1>
            <p>
                {this.state.accomodation && <span>{this.state.accomodation}</span>}
                {this.state.journeyOut && <span>Journey Out: {this.state.journeyOut.date.toDateString()}</span>}
                {this.state.journeyBack && <span>Journey Back: {this.state.journeyBack.date.toDateString()}</span>}
            </p>
            {this.state.sectionList.map((el, key) => <TripSection key={key} {...el} />)}
        </article>;
    }
}
