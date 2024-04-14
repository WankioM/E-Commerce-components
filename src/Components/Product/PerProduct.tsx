
import React from 'react';

interface PerProductProps {
  productImage: string; // URL of the main product image
  otherImages: string[]; // URLs of other small product images
  productName: string; // Name of the product
  productDescription: string; // Description of the product

}

const PerProduct: React.FC<PerProductProps> = ({
  productImage,
  otherImages,
  productName,
  productDescription,
}) => {
  return (
    <div className="flex bg-oxfordblue">
      <div>
        <img src={productImage} alt={productName} />
      </div>

      <div>
        <h2>{productName}</h2>
        <p>{productDescription}</p>
      </div>
     
    </div>
  );
};

export default PerProduct;