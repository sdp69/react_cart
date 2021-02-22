import React from 'react';

const styles={
    image: {
        height: 110,
        width:  110,
        borderRadius: 4,
    }
};

const CartItem = (props) => {    //this is a class based component.

        const {price, title, qty, img} = props;
        return(
        <div   className="cart-item">
            <div  className="left-block">
                <img style={styles.image} src={props.image}/>
            </div>
            <div className="right-block">
                <div style={{fontSize: 40   }}>{title}</div>
                <div style={{color: '#777'}}>Rs {price}</div>
                <div style={{color: '#777'}}>Qty: {qty}</div>
                <div className="cart-item-actions">
                    {/* BUTTONS */}
                  <div className="custom"><img src="https://img.icons8.com/android/24/000000/plus.png" className = "action-icons" alt="" onClick={() => props.incrementHandler(props)} /></div>
                    <div className="custom"> <img  src="https://img.icons8.com/android/24/000000/minus.png" alt="" className = "action-icons" onClick={() => props.decrementHandler(props)}/></div>
                    <div className="custom"> <img src="https://img.icons8.com/carbon-copy/100/000000/full-trash.png" alt="" className = "action-icons" onClick={() => props.removeItemHandler(props)}/></div>
                </div>
            </div>
        </div>);
    }

export default CartItem;


