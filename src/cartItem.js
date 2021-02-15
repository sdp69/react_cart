import React from 'react';

const styles={
    image: {
        height: 110,
        width:  110,
        borderRadius: 4,
    }
};

class CartItem extends React.Component{    //this is a class based component.

    render() {
        return(
        <div   className="cart-item">
            <div  className="left-block">
                <img style={styles.image}/>
            </div>
            <div className="right-block">
                <div style={{fontSize: 40}}>Phone</div>
                <div style={{color: '#777'}}>Rs 999</div>
                <div style={{color: '#777'}}>Qty: 1</div>
                <div className="cart-item-actions">
                </div>
            </div>
        </div>);
    }
}

export default CartItem;