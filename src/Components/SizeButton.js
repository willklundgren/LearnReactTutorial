import React from 'react';
import Button from '@material-ui/core/Button/index';
import Card from '@material-ui/core/Card/index';
import { withStyles } from '@material-ui/core/styles/index';


const styles = {
    card: {
        maxWidth: 150,
        marginBottom: 50,
        color: "#fff"
    },
    button: {
        width: 10,
        color: "black"
    }
};

const SizeButton = ({size, classes}) => {
    return (
        <Button className={classes.button}>{size}</Button>
    );
};

export default withStyles(styles)(SizeButton);