import React from "react";
import CartItem from "./cartItem";

class Cart extends React.Component{    //this is a class based component.

    render() {
        return (
            <div className="cart">
                <CartItem/>
                <CartItem/>
                <CartItem/>
            </div>
        );
    }
}

export default Cart;
