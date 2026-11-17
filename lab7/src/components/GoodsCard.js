import React from 'react';

function GoodsCard(props) {
  return (
    <div className="goods-card">
      <img src={props.image} alt={props.name} />
      <h3>{props.name}</h3>
      <p>Cost: {props.price} grn</p>
    </div>
  );
}

export default GoodsCard;