import React from 'react';
import Photo from '../../assets/vin.jpg';
import './Card.scss';

const WineCard =({wine}) =>(
        <div className="card">
            <div className="wineCtn">
                <div className="infoWine">
                    <h4 className="wineDomain"><b>{wine.domain}</b></h4> 
                    <p>{wine.appelation}</p> 
                    <p>{wine.millesime}</p> 
                </div>
                <div className="winePrice">
                    <p>{wine.price_vp_bundle} €</p>
                </div>
            </div>
            <img className="imgWine" src={Photo} alt="photo"  />
        </div>
    
)

export default WineCard;