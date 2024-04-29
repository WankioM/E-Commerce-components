
import React from 'react';
import HeartIcon from '../../Assets/heart-solid.svg';


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
    <div className="flex flex-row bg-sage items-center pt-5">
      
      <div className=' flex flex-col w-1/2 p-12 m-10  '>
        
        <p className='text-base text-left font-GlacialIndifference_regular p-2 pl-44 '>{productDescription}</p>
        <h2 className='text-4xl text-left font-craketest_regular p-2 pl-44'>{productName}</h2>
        <p className='text-lg text-left font-GlacialIndifference_regular p-2 pl-44'>{price} KES</p>

      
        <div className='self-start pl-44 w-4/5'>
          <div className='flex flex-row'>
            <button className=" w-1/2 self-start bg-oxfordblue hover:bg-rosetaupe text-white font-GlacialIndifference_regular py-2 px-4 mt-4 rounded-3xl shadow-xl">
              Add to Cart
            </button> 
            <img src={HeartIcon} alt="Heart Icon" style={{ maxHeight: '30px'}} className='ml-6 mt-5'/>
          </div>
        </div>

      </div>

      <div className='w-1/2 pr-24 pt-10'>
        <img src={productImage} alt={productName} style={{ maxHeight: '500px' }} />
      </div>
     
    </div>
  );
};

export default PerProduct;