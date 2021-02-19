import React from "react";
import CartItem from "./cartItem";

class Cart extends React.Component{    //this is a class based component.

    constructor() {
        super();
        this.state = {
            products: [{
                id: 1,
                price: 999,
                title: `Cell Phone`,
                qty: 1,
                img: ``
            },
                {
                    id: 2,
                    price: 1099,
                    title: `Watch`,
                    qty: 1,
                    img: ``
                },
                {
                    id: 3,
                    price: 2999,
                    title: `T.V`,
                    qty: 1,
                    img: ``
                }
            ]
        }
    }
    incrementHandler = (product) => {
        //console.log(product);
        const{title} = product;
        const {products} = this.state;
        const index = products.findIndex( p => p.title === product.title);
        products[index].qty += 1;
        this.setState({
            products: products
        });
        return;
    };
    decrementHandler = (product) => {
        const{title} = product;
        const {products} = this.state;
        const index = products.findIndex( p => p.title === product.title);
        if(products[index].qty === 1)
            return;
        products[index].qty -= 1;
        this.setState({
            products: products
        });
        return;
    };
    removeItemHandler = (product) => {
        const {title} = product;
        const {products} = this.state;
        const item = products.filter((item) => {
            return item.title !== title
        });
        this.setState({
            products: item
        });
    };
    render() {
        const {products} = this.state;
        return (
            <div className="cart">
                {products.map((products) => {
                    return (<CartItem qty={products.qty} price={products.price} title={products.title} image={products.image} key={products.id}
                    incrementHandler={this.incrementHandler}
                    decrementHandler={this.decrementHandler}
                    removeItemHandler={this.removeItemHandler}/>);
                })}
            </div>
        );
    }
}

export default Cart;
