import React from 'react';
import Button from '@material-ui/core/Button/index';
import Card from '@material-ui/core/Card/index';
import { withStyles } from '@material-ui/core/styles/index';
import SizeButton from './SizeButton'
import ProductCard from "./ProductCard";
import Grid from '@material-ui/core/Grid';

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

// Component containing everything product-related.

// "Product" Contains...
// a ProductCard, which contains a 1) ProductPicture and 2) ProductDescription

// Passes down a product_triplet, from App.js, for each ProductCard.
// Then, each subcomponent has prop(s) that correspond to something in its assigned
// product triplet.

// End goal: for App.js to have a component that says
// <Products product_triplets = product_triplets />

// Products
// Input: an array of product_triplets

const Products = ( {classes, all_sku_info} ) => {
    return (
        <Grid container justify="space-evenly">
            { all_sku_info.map(prod_info => <ProductCard info = {prod_info} /> ) }
        </Grid>
    );
};

export default withStyles(styles)(Products);