import React from "react";
//import CartItem from "./cartItem";

const Navbar = (props) => {    //this is a class based component.
       return (
           <div style={styles.nav}>
               <div style={styles.cartIconContainer}>
                   <img src="https://www.flaticon.com/svg/vstatic/svg/1124/1124199.svg?token=exp=1613742594~hmac=1d25dd246c75d650500713f1260139ba" alt="cart-icon"
                        style={styles.cartIcon}/>
                   <span style={styles.cartCount}>{props.navbarCounter}</span>
               </div>
           </div>
       )
}

const styles = {
    cartIcon: {
        height: 32,
        marginRight: 20
    },
    nav: {
        height: 70,
        background: `#4267b2`,
        display: `flex`,
        justifyContent: `flex-end`,
        alignItems: `center`
    },
    cartIconContainer: {
        position: `relative`
    },
    cartCount: {
        background: `yellow`,
        borderRadius: `50%`,
        padding: `4px 8px`,
        position: `absolute`,
        right: 0,
        top: -9
    }

}

export default Navbar;
