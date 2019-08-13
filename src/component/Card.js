import React from 'react';
import './Card.css';

const Card = (props) => {
    return (
         <div className='Card'>
            <img className='Card-img' src={`https://robohash.org/${props.id}`} alt={props.title} />
            <div>
                <h2>{props.title}</h2>
                <p>{props.email}</p>
            </div>
         </div>
    )
}

export default Card;