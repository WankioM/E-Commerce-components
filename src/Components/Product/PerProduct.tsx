
import React from 'react';

interface PerProductProps {
  // Define props for your component here
}

const PerProduct: React.FC<PerProductProps> = ({}) => {
  return (
    <div className="flex bg-oxfordblue">
      <div>
        Image
      </div>

      <div>
        Details
      </div>
     
    </div>
  );
};

export default PerProduct;