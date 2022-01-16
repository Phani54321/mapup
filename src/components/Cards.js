import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these COUNTRIES</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          
          <ul className='cards__items'>
            <CardItem
              src='images/INDIA.jpg'
              text='Currency - Rupee '                 
              label='INDIA'
             
            />
            <CardItem
              src='images/us.png'
              text='Currency - $'
              label='UNITED STATES'
              
            />
            <CardItem
              src='images/uk.jpg'
              text='Currency - £ '
              label='UNITED KINDOMS'
              
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
