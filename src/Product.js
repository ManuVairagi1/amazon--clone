import React from "react";
import "./Product.css";

function Product() {
  return (
    <div className="product">
      <div className="product__info">
        <p>The Lean startup</p>
        <p className="product__price">
          <small>$</small>
          <strong>19.99</strong>
        </p>
        <div className="product__rating">
          <p>⭐</p>
          <p>⭐</p>
          <p>⭐</p>
        </div>
      </div>
      <img
        src="https://cdnb.artstation.com/p/assets/images/images/010/528/903/large/junting-chen-.jpg?1524898887"
        alt=""
      />
      <button>Add to Basket</button>
    </div>
  );
}

export default Product;
