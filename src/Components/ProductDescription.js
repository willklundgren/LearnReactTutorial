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

// Component containing the name and price of the given sku

const ProductDescription = ( {classes, name, price}) => {
    return (
        <div>
            <span>{name}</span>
            <br/>
            <br/>
            <span>{price}</span>
        </div>
    );
};

export default withStyles(styles)(ProductDescription);