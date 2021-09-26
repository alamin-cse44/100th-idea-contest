import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Profile from '../Profile/Profile';
import './Participant.css';

const Participant = () => {
    const [participants,setParticipants] = useState([]);
    const [cart,setCart] = useState([]);

    useEffect(()=>{
        fetch('./participants.json')
        .then(res => res.json())
        .then(data => {
            
            setParticipants(data);
        })
        
    },[]);


    const handleAddToCart = (participant) => {
        const newCart = [...cart, participant];
        setCart(newCart);
    }

    return (
        <div className="participants-container">
            <div className="profile-container">
               
               {
                   participants.map(participant => <Profile 
                   key={participant.id}
                   participant={participant}
                   handleAddToCart={handleAddToCart}
                   ></Profile>)
               }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Participant;