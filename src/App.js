import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import SizeBox from './Components/SizeBox';
import ProductPicture from './Components/ProductPicture';
import Products from './Components/Products';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import {Card} from "@material-ui/core";
import Toolbar from '@material-ui/core/Toolbar';
import Cart from './Components/Cart/Cart';

function App() {

    const [products, changeProducts] = useState(null);
    const url = '/data/products.json';

    React.useEffect( () => {
        const getProducts = async () => {
            const response = await fetch(url);
            if (!response.ok) throw response;
            const json = await response.json();
            changeProducts(json);
        };
        getProducts();
    }, []);

    console.log("Products object is...");
    console.log(products);
    if (products != null) {
        console.log( Object.keys(products['products']).length);
        console.log(Object.keys(products['products']))
    }

    // Given the "products" JSON object, get the name (title),  sku, and price of the shirt.
    const getSkuInfo = product_object => {
        const skus = Object.keys(product_object['products']);
        const sku_info = skus.map(sku => [sku,product_object['products'][sku]['title'],product_object['products'][sku]['price'],product_object['products'][sku]['style']]);
        return sku_info;
    };

    var individual_sku_info = null;

    if (products != null) {
        individual_sku_info = getSkuInfo(products);
    };

    console.log(individual_sku_info);
    // Pass individual_sku_info down from Products component


    // for reference: <ProductPicture src = {require("./data/products/876661122392077_1.jpg")}/>

    // note: rename image file paths accordingly
    return (
        <div>
            <Cart />

            <AppBar position="static">
                <Toolbar>
                    <h1>The React Store</h1>
                    <SizeBox/>
                </Toolbar>
            </AppBar>

            <Grid container >

                <Grid item >
                { (individual_sku_info && <Products all_sku_info = {individual_sku_info}/>) || "Loading..." }
                </Grid>

            </Grid>

        </div>
    );
}

export default App;
