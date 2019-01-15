import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
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
                    <Typography component="h1" variant="h6" color="inherit">{this.props.title}</Typography>
                </Toolbar>
            </AppBar>
            <div style={{ padding: '16px' }}>
                <Grid container spacing={16}>
                    {this.state.tripList.map((el, key) => <Grid key={key} item><Trip {...el} /></Grid>)}
                </Grid>
            </div>
            </>;
    }
};
