import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import SizeBox from './Components/SizeBox';
import ProductPicture from './Components/ProductPicture';
import Products from './Components/Products';

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

    // Given the "products" JSON object, get the name, sku, and price of the shirt.
    const getNameAndPrice = product_object => {
        const skus = Object.keys(product_object['products']);
        const sku_triplets = skus.map(sku => [sku,product_object['products'][sku]['title'],product_object['products'][sku]['price']]);
        return sku_triplets;
    };

    var product_triplets = null;

    if (products != null) {
        product_triplets = getNameAndPrice(products);
    };

    console.log(product_triplets);
    // Pass product_triplets down from Products component


    // for reference: <ProductPicture src = {require("./data_src/products/876661122392077_1.jpg")}/>

    // note: rename image file paths accordingly
    return (
        <div>
            <SizeBox/>
            { (product_triplets && <Products triplets={product_triplets}/>) || "Loading..." }
        </div>
    );
}

export default App;
