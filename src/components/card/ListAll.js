import React from 'react';
import WineCard from './WineCard';

const ListAll = ({ wines }) => (
  <div className="card-container">
    {wines.map(wine => <WineCard wine={wine} key={wine.id_family} />)}
  </div>
);

export default ListAll;