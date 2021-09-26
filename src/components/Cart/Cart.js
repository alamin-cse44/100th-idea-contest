import React from 'react';
import './Cart.css';

const Cart = (props) => {
    
    const {cart} = props;
    console.log(cart);
    let total = 0,name='',count=1;
    for(const participant of cart){
        total += participant.salary;
        name += count + '. '+participant.name +' ';
        count += 1;
    }
    return (
        <div className="cart-details">
            <h4>Details</h4>
            <h5>Participant Added : {props.cart.length}</h5>
            <h5>Total Cost : ${total}</h5>
            <li>Participants : {name}</li>
            <br /><br /><br />
            <button className="btn btn-success confirm mx-auto">Confirm</button>
        </div>
    );
};

export default Cart;