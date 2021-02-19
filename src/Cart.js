import React from "react";
import CartItem from "./cartItem";

class Cart extends React.Component{    //this is a class based component.

    constructor() {
        super();
        this.state = {
            products: [{
                price: 999,
                title: `Cell Phone`,
                qty: 1,
                img: ``
            },
                {
                    price: 1099,
                    title: `Watch`,
                    qty: 1,
                    img: ``
                },
                {
                    price: 2999,
                    title: `T.V`,
                    qty: 1,
                    img: ``
                }
            ]
        }
    }
    render() {
        const {products} = this.state;
        return (
            <div className="cart">
                {products.map((products) => {
                    return (<CartItem qty={products.qty} price={products.price} title={products.title} image={products.image}/>);
                })}
            </div>
        );
    }
}

export default Cart;
