import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper } from '@material-ui/core';
import { Map } from "./Map_box"
const useStyles = makeStyles((theme) => ({

    paper: {
        backgroundColor: theme.palette.background.paper,
        height: "calc(85vh + 29px)",
        padding: theme.spacing(4),
        color: theme.palette.text.secondary,

    },
    title: {
        flexGrow: 1,
    },

}));


export default function MapWrapper(props) {
    const classes = useStyles();

    return (
        <Grid item xs={12} md={props.dimension.center}>
            <Paper className={classes.paper}>
                <Map />
            </Paper>
        </Grid>

    );
}



