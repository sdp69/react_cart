import React from "react";
import CartItem from "./cartItem";

const Cart = (props) =>{    //this is a class based component.
    const {products} = props;
        return (
            <div className="cart">
                {products.map((products) => {
                    return (<CartItem qty={products.qty} price={products.price} title={products.title} image={products.img} key={products.id} list_id={products.list_id}
                    incrementHandler={props.incrementHandler}
                    decrementHandler={props.decrementHandler}
                    removeItemHandler={props.removeItemHandler}
                    />);

                })}
            </div>
        );
}

export default Cart;
