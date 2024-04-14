// MyComponent.tsx
// NavBar.tsx

import React from 'react';

interface NavBarProps {
  // Define props for your component here
}

const NavBar: React.FC<NavBarProps> = ({}) => {
  return (
    <div className="fixed top-28 right-16 w-40 bg-neowhite rounded-md p-3 drop-shadow-md">
      {/* Replace this with your Navbar content */}
     
      <ul className='text-left font-GlacialIndifference_regular'>
        <li className='text-left font-GlacialIndifference_regular' >
          About
        </li>
        <li>
          Contact Us
        </li>
        <li>
          Shop
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
