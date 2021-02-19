//import logo from './logo.svg';
import './App.css';
import Cart from "./Cart";
import Navbar from "./Navbar";
import React from "react";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            products: [{
                id: 1,
                price: 999,
                title: `Cell Phone`,
                qty: 1,
                img: `https://images.unsplash.com/photo-1565849904461-04a58ad377e0?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8Y2VsbCUyMHBob25lfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60`
            },
                {
                    id: 2,
                    price: 1099,
                    title: `Watch`,
                    qty: 1,
                    img: `https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8d2F0Y2h8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60`
                },
                {
                    id: 3,
                    price: 2999,
                    title: `T.V`,
                    qty: 1,
                    img: `https://images.unsplash.com/photo-1593305841991-05c297ba4575?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjV8fHR2fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60`
                }
            ]
        }
    }
    incrementHandler = (product) => {
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
    navbarCount = () => {
        const {products} = this.state;
        let count = 0;
        products.forEach((item) => {
            count += item.qty;
        });
        return count;
    };
    priceTotal = () => {
        const {products} = this.state;
        let total = 0;
        products.forEach((items) => {
            total = total + items.price*items.qty
        });
        return total;
    };
    render() {
        const {products} = this.state;
        return (
            <div className="App">
                <Navbar navbarCounter = {this.navbarCount()}/>
                <h1 style={
                    {paddingLeft: 20}
                }>CART</h1>
                <Cart incrementHandler={this.incrementHandler}
                      decrementHandler={this.decrementHandler}
                      removeItemHandler={this.removeItemHandler}
                      products={products}
                />
                <div style={{padding: 20, fontSize: 20}}>TOTAL: {this.priceTotal()}</div>
            </div>
        );
    }
}

export default App;
