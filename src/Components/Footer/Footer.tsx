import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto flex flex-wrap">
        <div className="w-full md:w-1/4 px-4 mb-4 md:mb-0">
          <h3 className="text-lg font-semibold mb-2">Legal</h3>
          <ul>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Do Not Sell or Share My Personal Information</a></li>
            <li><a href="#">Cookie Policy</a></li>
          </ul>
        </div>
        <div className="w-full md:w-1/4 px-4 mb-4 md:mb-0">
          <h3 className="text-lg font-semibold mb-2">Social</h3>
          <ul>
            <li><a href="#">X</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Facebook</a></li>
          </ul>
        </div>
        <div className="w-full md:w-1/4 px-4 mb-4 md:mb-0">
          <h3 className="text-lg font-semibold mb-2">Locations</h3>
          <ul>
            <li>Nairobi</li>
            <li>Canada</li>
            <li>China</li>
          </ul>
        </div>
        <div className="w-full md:w-1/4 px-4 mb-4 md:mb-0">
          <h3 className="text-lg font-semibold mb-2">Company Name (Lapis Lazuli)</h3>
          <p>Company slogan</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
