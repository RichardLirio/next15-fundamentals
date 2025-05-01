"use client";
import React from "react";
import { useState } from "react";

function AddToCartButton() {
  const [count, setCount] = useState(0);
  function addToCart() {
    setCount((state) => state + 1);
  }

  return (
    <button onClick={addToCart} className="cursor-pointer">
      Adicionar ao carrinho ({count}) itens
    </button>
  );
}

export default AddToCartButton;
