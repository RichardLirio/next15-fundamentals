import React from "react";

async function Catalog() {
  await new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });

  return <div>Catalog</div>;
}

export default Catalog;
