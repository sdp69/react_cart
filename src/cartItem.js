import React from 'react';

const styles={
    image: {
        height: 110,
        width:  110,
        borderRadius: 4,
    }
};

class CartItem extends React.Component{    //this is a class based component.

    constructor() {
        super();
        this.state = {
            ...this.props
        };
    }

    clickHandler = () => { //this.setState() is an asynchronous function
        //console.log(`clicked`);
       // this.setState(
            //{qty: this.state.qty + 1});
        this.setState((prevState) => {
            return {
                qty: prevState.qty + 1
            }
        }, () => {
            console.log(`this->state updated`, this.state);
        });
    };
    numberDecrease = () => {
        if (this.state.qty === 1){
            return;
        }
        this.setState((prevState) => {
            return {
                qty: prevState.qty - 1
            }
        });
    };
    render() {
        const {price, title, qty} = this.props;
        return(
        <div   className="cart-item">
            <div  className="left-block">
                <img style={styles.image}/>
            </div>
            <div className="right-block">
                <div style={{fontSize: 40   }}>{title}</div>
                <div style={{color: '#777'}}>Rs {price}</div>
                <div style={{color: '#777'}}>Qty: {qty}</div>
                <div className="cart-item-actions">
                    {/* BUTTONS */}
                    <img src="https://www.flaticon.com/svg/vstatic/svg/992/992651.svg?token=exp=1613401642~hmac=0da9bd1e556e9dc285a996c1aff88ccb" className = "action-icons" alt="" onClick={this.clickHandler} />
                    <img  src="https://www.flaticon.com/svg/vstatic/svg/864/864373.svg?token=exp=1613567843~hmac=555e39705afdd977e3d96351843c6ec1" alt="" className = "action-icons" onClick={this.numberDecrease}/>
                    <img src="https://www.flaticon.com/svg/vstatic/svg/3994/3994925.svg?token=exp=1613402132~hmac=2df6957a45fb47d9cfa68813a7864801" alt="" className = "action-icons"/>
                </div>
            </div>
        </div>);
    }
}

export default CartItem;


