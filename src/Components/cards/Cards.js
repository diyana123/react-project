import React from "react";
import CardItems from "../cards/CardItems";
import jacket from '../../assets/jackets.jpg'
import sneaker from '../../assets/sneakers.jpg'
import hat from '../../assets/hat.jpg'
// import './cards.scss';


function Cards() {
  return (
    <div className="cards">
   
      <div className="cards__container">
        <div className="cards__wrapper">
         

          <ul className="cards__items">
            <CardItems
               src={jacket}
              text="blahhhhhh blahhhhhh blahhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh blahhhhhhhhhhhhhhhhhhhhhh....."
              label="Jackets"
              path="/services"
            />

            <CardItems src={hat}text="blahhhhhh blahhhhhh blahhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh blahhhhhhhhhhhhhhhhhhhhhh....." label="Jackets" path="/products" />

            <CardItems
             src={sneaker}
              text="blahhhhhh blahhhhhh blahhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh blahhhhhhhhhhhhhhhhhhhhhh....."
              label="Sneakers"
              path="/sign-up"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
