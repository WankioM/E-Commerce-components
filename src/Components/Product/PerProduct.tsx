
import React from 'react';

interface PerProductProps {
  productImage: string; // URL of the main product image
  otherImages: string[]; // URLs of other small product images
  productName: string; // Name of the product
  productDescription: string; // Description of the product
  price: number;

}

const PerProduct: React.FC<PerProductProps> = ({
  productImage,
  otherImages,
  productName,
  productDescription,
  price,
}) => {
  return (
    <div className="flex flex-row bg-sage">
      
      <div className='w-1/2 p-12 m-10'>
        
        <p className='text-base font-GlacialIndifference_regular p-2'>{productDescription}</p>
        <h2 className='text-4xl font-craketest_regular p-2'>{productName}</h2>
        <p className='text-lg font-GlacialIndifference_regular p-2'>{price} KES</p>
      </div>

      <div className='w-1/2'>
        <img src={productImage} alt={productName} style={{ maxHeight: '550px' }} />
      </div>
     
    </div>
  );
};

export default PerProduct;