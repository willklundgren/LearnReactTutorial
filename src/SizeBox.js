import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import { withStyles } from '@material-ui/core/styles';
import SizeButton from './SizeButton'

const styles = {
    card: {
        maxWidth: 150,
        marginBottom: 50
    },
    size_box: {
        width: 200
    },
    size_title: {
        position: 'relative',
        margin: '55px'
    }
};

const SizeBox = ({classes}) => {

    return (
        <div>
            <span className={classes.size_title}>Sizes</span>

            <Card className={classes.card} >
                <SizeButton size = 'S' />
                <SizeButton size = 'M' />
                <SizeButton size = 'L' />
                <SizeButton size = 'XL' />
            </Card>
        </div>
    );
};

export default withStyles(styles)(SizeBox);
