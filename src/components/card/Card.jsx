import React from "react";
import PropTypes from "prop-types";
import backgroundCard from "../../images/bg-pattern-card.svg";
import foto from "../../images/image-victor.jpg";
import "./style.css";

function Card({
  name,
  age,
  residence,
  number_follower,
  follower,
  number_likes,
  likes,
  number_photos,
  photos,
}) {
  return (
    <>
      <div className="container">
        <div className="card">
          <img src={backgroundCard} alt="" />
        </div>
        <div className="containerFoto">
          <img src={foto} alt={name} className="foto" />
        </div>
        <div className="profile">
          <h2>
            {name} <span className="age">{age}</span>
          </h2>
          <p>London</p>
        </div>
        <div className="br"></div>
        <div className="information">
          <div>
            <h2>{number_follower}</h2>
            <p>{follower}</p>
          </div>
          <div>
            <h2>{number_likes}</h2>
            <p>{likes}</p>
          </div>
          <div>
            <h2>{number_photos}</h2>
            <p>{photos}</p>
          </div>
        </div>
      </div>
    </>
  );
}

Card.PropTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  residence: PropTypes.string.isRequired,
  number_follower: PropTypes.string.isRequired,
  follower: PropTypes.string.isRequired,
  number_likes: PropTypes.string.isRequired,
  likes: PropTypes.string.isRequired,
  number_photos: PropTypes.string.isRequired,
  photos: PropTypes.string.isRequired
};

Card.defaultProps = {
  name: "Victor Crest",
  age: 26,
  residence: "London",
  number_follower: "80K",
  follower: "F o l l o w e r s",
  number_likes: "803K",
  likes: "L i k e s",
  number_photos: "1.4K",
  photos: "P h o t o s" 
}

export default Card;
