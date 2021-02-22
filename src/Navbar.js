import React from "react";
//import CartItem from "./cartItem";

const Navbar = (props) => {    //this is a class based component.
       return (
           <div style={styles.nav}>
               <div style={styles.cartIconContainer}>
                   <img src="https://img.icons8.com/pastel-glyph/64/000000/shopping-trolley--v1.png" alt="cart-icon"
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
        background: `#CCFF33`,
        display: `flex`,
        justifyContent: `flex-end`,
        alignItems: `center`,
        padding: 2
    },
    cartIconContainer: {
        position: `relative`,
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
