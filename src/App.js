//import logo from './logo.svg';
import './App.css';
import Cart from "./Cart";
import Navbar from "./Navbar";
import React from "react";
import firebase from "firebase";
class App extends React.Component {
    constructor() {
        super();
        this.state={
            products: [],
            loading: true
        };
    }
    componentDidMount() {
        firebase.firestore()
            .collection(`products`)
            .get()
            .then((snapshot) => {
                    snapshot.docs.map((doc) => {
                    console.log(doc.data());
            });
            const products = snapshot.docs.map((doc) => {
                return doc.data();
            });
            this.setState({
                products: products,
                loading: false
            });
        });
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
        const {products, loading} = this.state;
        console.log(products);
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
                {loading && <h1>Loading Products....</h1>}
            </div>
        );
    }
}

export default App;
