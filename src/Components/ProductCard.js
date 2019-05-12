import React from 'react';
import Button from '@material-ui/core/Button/index';
import Card from '@material-ui/core/Card/index';
import { withStyles } from '@material-ui/core/styles/index';
import SizeButton from './SizeButton';
import ProductDescription from './ProductDescription';
import ProductPicture from "./ProductPicture";

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

// A card for a **single** product.
// Contains a ProductPicture component and a ProductDescription component

const ProductCard = ({classes, triplet}) => {
    console.log(triplet[0]);
    return (
        <div>
            <Card className={classes.product_card} >
                <ProductPicture sku = { triplet[0] } />
                <br/>
                <br/>
                <ProductDescription name = {triplet[1]} price = {triplet[2]} />
            </Card>
        </div>
    );
};

export default withStyles(styles)(ProductCard);