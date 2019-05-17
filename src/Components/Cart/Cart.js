import React, { useState } from 'react';
import Button from '@material-ui/core/Button/index';
import Card from '@material-ui/core/Card/index';
import { withStyles } from '@material-ui/core/styles/index';
import CartDetails from "./CartDetails";
import CartCheckout from "./CartCheckout";
import Grid from '@material-ui/core/Grid';

// Add style object here...

// const styles = {
//     thing: {
//         color: "green"
//     }
// };


const Cart = (props) => {

    const [ cart_visibility , toggleCartVisibility ] = useState(true);

    console.log(cart_visibility);

    return (
        <div>
            <h1>hellopppp {cart_visibility}</h1>

             {/*<CartDetails/>*/}

             {/*<CartCheckout/>*/}

        </div>

    );
};

export default Cart;