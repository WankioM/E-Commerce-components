// header.tsx

import React, { useState,useEffect } from 'react';
import './Header.css'; // Import your CSS file for styling
import NavBar from './NavBar';
import Logo from '../../Assets/logo.svg';


interface HeaderProps {
  onMenuToggle? : () => void; // Function to handle menu toggle
}

const Header: React.FC<HeaderProps> = ({ onMenuToggle }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isMenuOpen) {
      // Set a timeout to automatically close the menu after 5 seconds
      timer = setTimeout(() => {
        setIsMenuOpen(false);
        // Call the parent component's menu toggle function if provided
        onMenuToggle?.();
      }, 3000);
    }
    return () => clearTimeout(timer); // Clean up the timer on unmount or when isMenuOpen changes
  }, [isMenuOpen, onMenuToggle]);


  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
    onMenuToggle?.(); // Call the parent component's menu toggle function
  };

  return (
    <div className="flex flex-row bg-white h-28 text-oxfordblue drop-shadow-md" >
      <div className="container mx-auto flex flex-row justify-between items-center h-full p-14">
        <div className=" w-2/3 flex flex-row gap-1">
        <img src={Logo} alt="Logo" className="h-auto w-auto"  />
        <h1 className='text-oxfordblue text-xl font-craketest_light pt-3' >Lapis Lazuli</h1>
        </div>

        <div className='bg-slategray rounded-lg bg-opacity-40 flex flex-row text-sage w-48 md:w-56'>
          <input 
            type="text" // Set input type to text
            placeholder="Search..." // Optional placeholder text
            className="flex-grow bg-transparent px-4 py-2 m-1 rounded-lg" // Tailwind CSS classes for styling

          />
          <button className="flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-16"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#C8CC92" // Accent color
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M18 18l-4-4m1-3a5 5 0 11-10 0 5 5 0 0110 0z"
              />
            </svg>
          </button>
        </div>


        <div className="menu-toggle">


          
          <button onClick={handleMenuToggle} className='text-oxfordblue font-GlacialIndifference_regular'>
            Menu
           
          </button>
        </div>
        <div className={`menu ${isMenuOpen ? 'open' : ''}`}>
            {isMenuOpen && <NavBar />}
        </div>
        
      </div>
    </div>
  );
};

export default Header;
