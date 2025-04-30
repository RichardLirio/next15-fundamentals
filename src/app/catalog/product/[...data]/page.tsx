"use client";

import * as React from "react";
import { use } from "react";

interface ProductProps {
  data: string[];
}

// Server components => A gente não USA JavaScript no lado do cliente(componentes com visuais estaticos)
// Client components => O JavaScript é enviado ao navegador(cliente)

// Streaming SSR => Ler/Escrever dados de forma parcial + Server Side Rendering

// Renderizar um componente pelo lado do servidor de forma PARCIAL

function Product({ params }: { params: Promise<ProductProps> }) {
  const { data } = use(params);
  const [productId, size, color] = data;

  function addToCart() {
    console.log("Adicionou ao carrinho");
  }

  return (
    <div>
      <p>Product id: {productId}</p>
      <p>Size: {size}</p>
      <p>color {color}</p>

      <button onClick={addToCart} className="cursor-pointer">
        Adicionar ao carrinho{" "}
      </button>
    </div>
  );
}

export default Product;
