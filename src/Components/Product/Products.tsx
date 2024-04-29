import React from 'react';
import PerProduct from './PerProduct';
import sagecupImage from '../../Assets/sagecup.png';
import slategraycupImage from '../../Assets/slategraycupsm.png';
import persianorangecupImage from '../../Assets/persianorangecup.png';
import rosetaupecupImage from '../../Assets/rosetaupecupsm.png';

function Products() {
  return (
      <PerProduct
  productImage={rosetaupecupImage}
  otherImages={[slategraycupImage, persianorangecupImage, sagecupImage, rosetaupecupImage]}
  productName="Mocha Majesty"
  productDescription="Experience the epitome of elegance and sophistication with  our rosetaupe colored coffee cup, perfect for savoring every sip of your favorite brew in style."
  price={40.99}
/>
      
  
  );
}

export default Products;