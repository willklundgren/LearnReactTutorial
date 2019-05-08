import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

// const getTitles = (products) => {
//     products.
// }

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

    console.log("Products object is...")
    console.log(products);
    if (products != null) {
        console.log( products['products'] );
    }

    var titles = [];

    if (products != null) {
        for (var product in products['products']) {
            titles.push(products['products'][product]['title']);
        }
    };

    console.log(titles)
    

    return (
        <div>
            {titles.map( (title) => <li>{title}</li>)}
        </div>
    );
}

export default App;
