import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import MediaList from './MediaList';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

export default class Trip extends Component {
    constructor(props) {
        super(props);

        const sectionList = props.sections || [];
        const [ journeyOut, ...transportList ] = sectionList.filter((el) => Boolean(el.transport));
        const journeyBack = transportList.pop();

        this.state = {
            id: props.id || null
            , title: props.title || 'Generic Title'
            , sectionList
            , mediaList: sectionList.reduce((carry, el) => carry.concat(el.mediaList), [])
            , journeyOut: journeyOut.transport
            , journeyBack: journeyBack.transport
            , accomodation: null
        };
    }

    render() {
        return <Paper className="trip" component="article">
            <Grid container>
                <Grid item xs={12} sm={5}>
                    <MediaList children={this.state.mediaList} />
                </Grid>
                <Grid item container direction="column" xs={12} sm={7} className="trip-summary">
                    <Grid item>
                        <Typography gutterBottom variant="h5" component="h2">{this.state.title}</Typography>
                        {this.state.accomodation && <Typography gutterBottom>{this.state.accomodation}</Typography>}
                        {this.state.journeyOut && <Typography gutterBottom>{this.state.journeyOut.date.toDateString()}</Typography>}
                        {this.state.journeyBack && <Typography gutterBottom>{this.state.journeyBack.date.toDateString()}</Typography>}
                    </Grid>
                    <Grid item container justify="flex-end">
                        <Button variant="outlined" color="primary">Details</Button>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>;
    }
}
