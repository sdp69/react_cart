import React from "react";
//import CartItem from "./cartItem";

class Navbar extends React.Component{    //this is a class based component.

    render() {
       return (
           <div>
               <div>
                   <img src="https://www.flaticon.com/svg/vstatic/svg/1124/1124199.svg?token=exp=1613742594~hmac=1d25dd246c75d650500713f1260139ba" alt="cart-icon" className="action-icons"/>
                   <span>3</span>
               </div>
           </div>
       )
    }
}

export default Navbar;
