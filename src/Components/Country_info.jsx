import React from 'react';
import { Paper, Slide, Grid, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(4),
        textAlign: 'center',
        color: theme.palette.text.primary,

    }
}));
export default function Country(props) {
    const classes = useStyles();
    const checked = props.dimension.center === 6
    const { country: current } = props
    return (

        <Slide direction="left" in={checked} mountOnEnter unmountOnExit>
            <Grid item xs={12} md={props.dimension.siders}>
                <Paper className={classes.paper}>
                    {current.Country}
                    <Divider/>
                </Paper>
            </Grid>
        </Slide>


    );
}