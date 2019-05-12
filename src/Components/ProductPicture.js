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

// <img src={props.src} />

// for reference: <ProductPicture src = {require("./data/products/876661122392077_1.jpg")}/>


// Goal: map given "src" string (the product sku) to its .jpg file name

//new-shopping-cart/src/876661122392077_test.jpg

const constructPath = sku => {
    const path = "../data/products/" + sku + "_1.jpg";
    return path;
};

const ProductPicture = ( {sku} ) => {

    const path = constructPath(sku);
    //console.log(route);
    console.log(sku);
    // console.log(typeof sku);
    // console.log(require("../data/products/876661122392077_1.jpg") );
    // const full = "require(" + sku + ")";
    // const test =
    return (
        <div>
            {/*<img sku = {require(sku)} alt="error" />*/}
            {/*<img src = { require("../data/products/876661122392077_1.jpg") } />*/}
            {/*below WORKS*/}
            <img src = { path }  alt = "error"/>
        </div>
    );
};

export default withStyles(styles)(ProductPicture);