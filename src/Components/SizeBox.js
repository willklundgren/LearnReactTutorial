import React from 'react';
import Button from '@material-ui/core/Button/index';
import Card from '@material-ui/core/Card/index';
import { withStyles } from '@material-ui/core/styles/index';
import SizeButton from './SizeButton'
import Paper from '@material-ui/core/Paper';

const styles = {
    card: {
        // maxWidth: 150,
        // marginBottom: 50
    },
    size_box: {
        // flexDirection: "row",
        background: "white",
        marginLeft: '650px'
    },
    size_title: {
        // position: 'relative',
        margin: '20px',
        color: 'black'
    }
};

const SizeBox = ( {classes} ) => {

    return (
        <Paper className={classes.size_box}>

            <span className={classes.size_title}>Size:</span>

            <span className={classes.card} >
                <SizeButton size = 'S' />
                <SizeButton size = 'M' />
                <SizeButton size = 'L' />
                <SizeButton size = 'XL' />
            </span>

        </Paper>
    );
};

export default withStyles(styles)(SizeBox);
