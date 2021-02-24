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
        this.db = firebase.firestore();
    }
    componentDidMount() {
        /*
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

        });*/
        this.db
            .collection(`products`)
            .where(`price`, `>=`, 999)
            .orderBy(`price`, `desc`)
            .onSnapshot((snapshot => { //.onSnapshot() is a real time listener.
                const products = snapshot.docs.map((doc) => {
                    const data = doc.data();
                    data[`list_id`] = doc.id;
                    data[`id`] = doc.id;
                    return data;
                });
                this.setState({
                    products: products,
                    loading: false
                });
            }));
    }

    incrementHandler = (product) => {
        const {products} = this.state;
        const index = products.findIndex(p => p.list_id === product.list_id);
        const docRef = this.db.collection(`products`).doc(products[index].id);
        docRef
            .update({
                qty: products[index].qty+1
            })
            .then(() => {
                console.log(`Updated Successful`);
            })
            .catch((error) => {
                console.log(error);
            });
        return;
    };
    decrementHandler = (product) => {
        const {products} = this.state;
        const index = products.findIndex(p => p.list_id === product.list_id);
        console.log(products[index]);
        const docRef = this.db.collection(`products`).doc(products[index].id);
        docRef
            .update({
                qty: products[index].qty-1
            })
            .then(() => {
                console.log(`Updated Successful`);
            })
            .catch((error) => {
                console.log(error);
            });
        return;
    };
    removeItemHandler = (product) => {
        const {products} = this.state;
        const {list_id} = product;
        const index = products.findIndex(p => p.list_id === product.list_id);
        /*const {products} = this.state;
        const item = products.filter((item) => {
            return item.title !== title
        });
        this.setState({
            products: item
        });*/
        const docRef = this.db.collection(`products`).doc(products[index].list_id);
        docRef.delete().then(() => {
            alert(`Deleted Successfully`);
        }).catch((er) => {
            console.log(er)});
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
    add = () => {
        this.db.collection(`products`)
            .add({
                id: 4,
                img: `https://images.pexels.com/photos/945669/pexels-photo-945669.jpeg?cs=srgb&dl=pexels-isaw-company-945669.jpg&fm=jpg`,
                price: 8000,
                qty: 1,
                title: `sofa`
            }).then((docRef) => {
            console.log(docRef);
        }).catch((error) => {
            console.log(error);
        });
    };
    render() {
        const {products, loading} = this.state;
        return (
            <div className="App">
                {loading? <h1>Loading products...</h1>: <div><Navbar navbarCounter = {this.navbarCount()}/>
                    <h1 style={
                        {paddingLeft: 20}
                    }>CART</h1>
                    <Cart incrementHandler={this.incrementHandler}
                          decrementHandler={this.decrementHandler}
                          removeItemHandler={this.removeItemHandler}
                          products={products}
                    />
                    <div style={{padding: 20, fontSize: 20}}>TOTAL: {this.priceTotal()}</div>
                    <button onClick={this.add} style={{padding: 10, fontSize: 20, marginLeft: 16}}>Add product</button>
                </div>}

            </div>
        );
    }
}

export default App;
