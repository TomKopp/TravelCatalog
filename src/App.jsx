import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Trip from './Trip';
import Typography from '@material-ui/core/Typography';

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
            <CssBaseline />
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" color="inherit">{this.props.title}</Typography>
                </Toolbar>
            </AppBar>
            {this.state.tripList.map((el, key) => <Trip key={key} {...el} />)}
            </>;
    }
};
