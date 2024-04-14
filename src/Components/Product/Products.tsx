import React from 'react';
import PerProduct from './PerProduct';
import rosetaupecupImage from '../../Assets/rosetaupecupsm.png';

function Products() {
  return (
      <PerProduct
  productImage={rosetaupecupImage}
  otherImages={["other-image1-url.jpg", "other-image2-url.jpg"]}
  productName="Mocha Majesty"
  productDescription="Experience the epitome of elegance and sophistication with  our rosetaupe colored coffee cup, perfect for savoring every sip of your favorite brew in style."
  price={40.99}
/>
      
  
  );
}

export default Products;