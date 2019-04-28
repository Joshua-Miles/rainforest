import React from 'react'

const ProductCard = ({id, title, image_url, brand, url, purchased, price, toggleCart}) => (
  <div className="ui eight wide column">
    <div className="ui centered card">
      <div className="image">
        <img src={image_url} alt="" />
      </div>
      <div className="content" >
        <div className="header">{title}</div>
      </div>
      <ul>
        <li>{brand}</li>
        <li>${price}</li>
      </ul>
      <button type="button" onClick={() => {toggleCart(id)}}>{purchased ? "Item is in cart" : "Add to Cart"}</button>
      <br />
      <br />
    </div>
  </div>
)

export default ProductCard
