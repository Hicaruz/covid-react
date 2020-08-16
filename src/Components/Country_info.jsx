import React from 'react';
import { Paper, Slide, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Info from "./Info"
const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(4),
        textAlign: 'center',
        color: theme.palette.text.primary,
        height: "85vh",
    }
}));
export default function Country(props) {
    const classes = useStyles();
    const checked = props.dimension.center === 3
    const { country: current } = props
    return (

        <Slide direction="up" in={checked} mountOnEnter unmountOnExit>
            <Grid item xs={12} md={props.dimension.right}>
                <Paper className={classes.paper}>
                    <div className="title-country">
                        {current.Country}
                    </div>
                    <Info country={current}/>
                </Paper>
            </Grid>
        </Slide>


    );
}