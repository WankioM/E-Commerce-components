// MyComponent.tsx
// NavBar.tsx

import React from 'react';

interface NavBarProps {
  // Define props for your component here
}

const NavBar: React.FC<NavBarProps> = ({}) => {
  return (
    <div className="fixed top-38 right-20 w-1/5 bg-neowhite rounded-md p-3 ">
      {/* Replace this with your Navbar content */}
     
      <ul>
        <li>
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
