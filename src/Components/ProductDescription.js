import React from 'react';
import Button from '@material-ui/core/Button/index';
import Card from '@material-ui/core/Card/index';
import { withStyles } from '@material-ui/core/styles/index';
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
    },
    product_card: {
        maxWidth: 300
    }
};

// Create our number formatter.
var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});

// Component containing the name and price of the given sku

const ProductDescription = ( {classes, name, price, style} ) => {
    return (
        <div>
            <span>{name}</span>
            <br/>
            <br/>
            <span>{formatter.format(price)}</span>
            <br/>
            <br/>
            <span>{style}</span>
        </div>
    );
};

export default withStyles(styles)(ProductDescription);