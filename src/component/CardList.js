import React from 'react';
import Card from './Card';
import './CardList.css';

const CardList = ({robots}) =>(
    <div className='CardList'>
        {robots.map(robot =>
        <Card 
          key={robot.id} 
          id={robot.id} 
          title={robot.name} 
          email={robot.email} 
        />
        )}
    </div>
);

export default CardList;