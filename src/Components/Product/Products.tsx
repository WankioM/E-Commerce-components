import React from 'react';
import PerProduct from './PerProduct';

function Products() {
  return (
      <PerProduct
  productImage="main-product-image-url.jpg"
  otherImages={["other-image1-url.jpg", "other-image2-url.jpg"]}
  productName="Product Name"
  productDescription="Product Description"
/>
      
  
  );
}

export default Products;