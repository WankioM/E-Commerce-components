// header.tsx

import React, { useState } from 'react';
import './Header.css'; // Import your CSS file for styling
import NavBar from './NavBar';
import Logo from '../../Assets/logo.svg';


interface HeaderProps {
  onMenuToggle? : () => void; // Function to handle menu toggle
}

const Header: React.FC<HeaderProps> = ({ onMenuToggle }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
    onMenuToggle?.(); // Call the parent component's menu toggle function
  };

  return (
    <div className="flex flex-row bg-oxfordblue h-28 text-persianorange" >
      <div className="container mx-auto flex flex-row justify-between items-center h-full p-14">
        <div className=" w-2/3 flex flex-row gap-1">
        <img src={Logo} alt="Logo" className="h-auto w-auto"  />
        <h1 className='text-persianorange text-xl font-libre_baskerville pt-3' >Lapis Lazuli</h1>
        </div>
        

        <div className="search">
          {/* search button */}
          <button className='bg-slategray rounded-lg bg-opacity-40 flex flex-row  text-sage w-48 md:w-48'>
          
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-16"
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

            
          {/* Collapsible menu button */}
          
          <button onClick={handleMenuToggle} className='text-persianorange'>
            menu
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 4"
              stroke="#C8CC92" // Accent color
            >
              {!isMenuOpen && (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M4 6h16M4 12h16"
                />
              )}
            </svg>
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
