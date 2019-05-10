import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import { withStyles } from '@material-ui/core/styles';


const styles = {
    card: {
        maxWidth: 150,
        marginBottom: 50,
        color: "#fff"
    },
    button: {
        width: 150,
    }
};

const SizeButton = ({size, classes}) => {
    return (
        <Button className={classes.button}>{size}</Button>
    );
};

export default withStyles(styles)(SizeButton);