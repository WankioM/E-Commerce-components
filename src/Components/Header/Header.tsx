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
    <div className="flex flex-row bg-oxfordblue" >
      <div className="container mx-auto flex flex-row justify-between items-center h-full">
        <div className="logo">
        <img src={Logo} alt="Logo" className="h-auto w-auto"  />
        </div>
        <div className="menu-toggle">
          {/* Collapsible menu button */}
          <button onClick={handleMenuToggle}>
            menu
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 4"
              stroke="#C8CC92" // Accent color
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
        <div className={`menu ${isMenuOpen ? 'open' : ''}`}>
         <NavBar />
        </div>
        <div className="search">
          {/* Insert your search button here */}
          <button>
            search
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
      </div>
    </div>
  );
};

export default Header;
