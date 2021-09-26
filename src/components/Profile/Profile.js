import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee,faShoppingCart,faUserCheck } from '@fortawesome/free-solid-svg-icons';
import './Profile.css';
import Rating from 'react-rating';

const Profile = (props) => {
    
    const {id,name,img,designation,salary,rating} = props.participant;
    const element = <FontAwesomeIcon icon={faUserCheck} />
    return (
        <div className="cart">
            <div className="participant">
            <img width="150px" className="rounded-circle mx-auto mb-5" src={img} alt="" />
            <div>
                <h4>ID : {id}</h4>
                <h4>Name : {name}</h4>
                <h5>Designation : {designation}</h5>
                <p>Salary : {salary}</p>
                <Rating
                initialRating={rating} 
                emptySymbol="far fa-star icon-color"
                fullSymbol="fas fa-star icon-color"
                readonly></Rating>
                <button onClick={() => props.handleAddToCart(props.participant)} className="btn btn-success b-5 w-75">{element}Add to cart</button>
            </div>
        </div>
        </div>
    );
};

export default Profile;