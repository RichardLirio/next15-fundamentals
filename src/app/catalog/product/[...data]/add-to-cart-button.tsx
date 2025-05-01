"use client";
import React, { ReactNode } from "react";
import { useState } from "react";

function AddToCartButton({ children }: { children: ReactNode }) {
  const [count, setCount] = useState(0);
  function addToCart() {
    setCount((state) => state + 1);
  }

  return (
    <div>
      <button onClick={addToCart}>Adicionar ao carrinho {count}</button>
      {children}
    </div>
  );
}

export default AddToCartButton;
