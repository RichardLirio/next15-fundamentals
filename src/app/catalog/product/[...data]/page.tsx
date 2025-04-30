interface ProductProps {
  params: {
    data: string[];
  };
}

function Product({ params }: ProductProps) {
  const [productId, size, color] = params.data;

  return (
    <div>
      <p>Product id: {productId}</p>
      <p>Size: {size}</p>
      <p>color {color}</p>
    </div>
  );
}

export default Product;
