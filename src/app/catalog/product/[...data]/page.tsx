import * as React from "react";
import { use } from "react";
import AddToCartButton from "./add-to-cart-button";
import Test from "./test";

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

  return (
    <div>
      <p>Product id: {productId}</p>
      <p>Size: {size}</p>
      <p>color {color}</p>

      <AddToCartButton>
        <Test />
      </AddToCartButton>
    </div>
  );
}

export default Product;
