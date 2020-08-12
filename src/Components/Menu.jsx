import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, List, ListItem, ListItemIcon, ListItemText, Paper, TextField } from '@material-ui/core';
import { filter_search } from "../api/utils"

const useStyles = makeStyles((theme) => ({

    list: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
        overflowY: "scroll",
        height: "82vh",

    },
    paper: {
        padding: theme.spacing(4),
        textAlign: 'center',
        color: theme.palette.text.secondary,

    },
    title: {
        flexGrow: 1,
    },
    textField: {
        marginBottom: "20px",
        marginTop: "-10px"
    }
}));


export default function CountriesMenu({ countries = [], filter = function () { }, controllers = {}, dimension }) {
    const classes = useStyles();

    return (
        <Grid item xs={12} md={dimension.siders}>
            <Paper className={classes.paper}>
                <TextField label="Search country" className={classes.textField} onChange={controllers.filter} />
                <div className={classes.list}>
                    <List component="nav" aria-label="main mailbox folders countries-list">
                        {countries
                            .filter(({ Country }) => filter_search(Country, filter))
                            .map((current, key) => (
                                <div onClick={() => controllers.select(current)} key={key}>
                                    <ListItem button >
                                        <ListItemIcon>
                                            <img
                                                src={`https://www.countryflags.io/${current.ISO2}/flat/32.png`}
                                                alt={current.Country}
                                            />
                                        </ListItemIcon>
                                        <ListItemText primary={current.Country} />
                                    </ListItem>
                                </div>
                            ))
                        }
                    </List>
                </div>
            </Paper>
        </Grid>

    );
}