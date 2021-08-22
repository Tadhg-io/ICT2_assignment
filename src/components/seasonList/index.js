import React from "react";
import Grid from "@material-ui/core/Grid";
import List from '@material-ui/core/List';
import Link from '@material-ui/core/Link';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from "@material-ui/core/styles";
import { useParams } from "react-router";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
}));

export default function SeasonList({ numberOfSeasons }) {
    
    let { id, number } = useParams();

    const classes = useStyles();

    //-- Render a list Item for every season --//

    // new array to store ejs objects
    let seasonListItems = [];
    // loop from 1 to number of Seasons
    for(let n = 1; n <= numberOfSeasons; n++){
        // Define the label to diisplay for this Season
        let label = `Season ${n}`;
        // build the URL
        let url = `/shows/${id}/${n}`
        // Add the code to the Array
        seasonListItems.push(<Link href={url}>
            <ListItem
                button
                selected={number == n}
            >
            <ListItemText primary={label} />
            </ListItem>
            <Divider />
        </Link>)
    }       

    // return a div with all list items
    return (
        <div className={classes.root}>
            {seasonListItems.map((e) => (e))}
        </div>
    )

};
