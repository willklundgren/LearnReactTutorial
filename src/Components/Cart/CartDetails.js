import React, { useState } from 'react';
import Button from '@material-ui/core/Button/index';
import Card from '@material-ui/core/Card/index';
import { withStyles } from '@material-ui/core/styles/index';

// Add style object here...

const CartDetails = (props) => {

    // state for number of items selected (i.e. put into the cart) here ??
    // idea: items_selected is an array of the selected skus
    // ...then CartDetails can assign each element of that array to a CartItem component.

    const [ items_selected , changeCartContents ] = useState(null);

    return {
        // CartItem components (see items_selected array)

        // CartSummary component


    };
};

export default CartDetails;