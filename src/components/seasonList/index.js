import React from "react";
import Grid from "@material-ui/core/Grid";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
}));

export default function SeasonList({ numberOfSeasons }) {
    
    const classes = useStyles();
    const [selectedIndex, setSelectedIndex] = React.useState(1);

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
    };

    let seasonListItems = [];

    for(let n = 1; n <= numberOfSeasons; n++){
        let label = `Season ${n}`;
        seasonListItems.push(<>
            <ListItem
                button
                selected={selectedIndex === n}
                onClick={(event) => handleListItemClick(event, n)}
            >
                <ListItemText primary={label} />
            </ListItem>
            <Divider />
        </>)
    }       

    return (
        <div className={classes.root}>
            {seasonListItems.map((e) => (e))}
        </div>
    )

};
