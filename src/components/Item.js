import React, { useState } from "react";

function Item({ name, category }) {
  const [isInCart, setIsInCart] = useState(false);

  const liClass = isInCart ? "in-cart" : ""

  function handleAddToCartClick() {
    setIsInCart((isInCart) => !isInCart);
  }

  const changeButton = isInCart ? "Remove From Cart" : "Add to Cart"

  return (
    <li className={liClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button
        className={isInCart ? "remove" : "add"}
        onClick={handleAddToCartClick}
      >
        {changeButton}
      </button>
    </li>
  );
}

export default Item;
