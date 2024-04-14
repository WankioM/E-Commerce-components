
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
    <div className="flex flex-row bg-sage items-center">
      
      <div className=' flex flex-row w-1/2 p-12 m-10 '>
        
        <p className='text-base text-left font-GlacialIndifference_regular p-2 pl-44 '>{productDescription}</p>
        <h2 className='text-4xl text-left font-craketest_regular p-2 pl-44'>{productName}</h2>
        <p className='text-lg text-left font-GlacialIndifference_regular p-2 pl-44'>{price} KES</p>

        <button className=" self-start bg-oxfordblue hover:bg-rosetaupe text-white font-GlacialIndifference_regular py-2 px-4 mt-4 rounded-3xl shadow-xl">
          Add to Cart
        </button> 

      </div>

      <div className='w-1/2 pr-24'>
        <img src={productImage} alt={productName} style={{ maxHeight: '575px' }} />
      </div>
     
    </div>
  );
};

export default PerProduct;