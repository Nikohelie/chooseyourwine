import React from 'react';
import './Card.css';

const Card = ({ children }) => (
  <section className="Card card">
    <div className="card-content">{children}</div>
  </section>
);

const Avatar = ({ photo }) => (
  <img className="card-avatar" src={photo}  />
);

const Title = ({ mainTitle, subTitle }) => (
  <div className="card-title">
    <div>{mainTitle}</div>
    <div className="card-subtitle">{subTitle}</div>
  </div>
);

Card.Avatar = Avatar;
Card.Title = Title;

export default Card;
