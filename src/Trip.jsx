import { Button, Grid, Paper, Typography } from '@material-ui/core';
import { FlightLand, FlightTakeoff, Hotel, Star } from '@material-ui/icons';
import React, { Component } from 'react';
import MediaList from './MediaList';

export default class Trip extends Component {

    constructor(props) {
        super(props);

        const sectionList = props.sections || [];
        const sectionHotel = sectionList.find((el) => Boolean(el.hotel));

        this.state = {
            id: props.id || null
            , title: props.title || 'Generic Title'
            , sectionList
            , mediaList: sectionList.reduce((carry, el) => carry.concat(el.mediaList), [])
            , startDate: props.startDate
            , endDate: props.endDate
            , rating: props.rating
            , hotel: sectionHotel ? sectionHotel.hotel : null
        };
    }

    render() {
        console.log(this.state.hotel);
        return <Paper className="trip" component="article">
            <Grid container>
                <Grid item xs={12} sm={5}>
                    <MediaList children={this.state.mediaList} />
                </Grid>
                <Grid item container direction="column" xs={12} sm={7} className="trip-summary">
                    <Grid item>
                        <Typography gutterBottom variant="h4" component="h1">{this.state.title}</Typography>
                        {this.state.startDate && <Typography gutterBottom><FlightTakeoff />{this.state.startDate.toDateString()}</Typography>}
                        {this.state.endDate && <Typography gutterBottom><FlightLand />{this.state.endDate.toDateString()}</Typography>}
                        {this.state.hotel && <Typography gutterBottom><Hotel />{this.state.hotel.name}</Typography>}
                        {this.state.rating && <Typography gutterBottom><Star /> Rating: {this.state.rating}</Typography>}
                    </Grid>
                    <Grid item container justify="flex-end">
                        <Button variant="contained" color="primary">Activate Details</Button>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>;
    }
}
