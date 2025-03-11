import React from 'react';

interface FooterProps {
  resourcesRef?: React.RefObject<HTMLDivElement | null>;
}

const Footer: React.FC<FooterProps> = ({ resourcesRef }) => {
  return (
    <footer ref={resourcesRef} className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo and company description */}
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <div className="bg-blue-600 rounded-md w-8 h-8 flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold">E</div>
              <span className="text-xl font-medium">Mailsonic</span>
            </div>
            <p className="text-white text-sm max-w-xs opacity-80">We make sure your emails never miss the inbox</p>
            
            {/* Social media links */}
            <div className="flex gap-3 pt-2">
              <a href="#" className="bg-gradient-to-r from-blue-500 to-indigo-600  bg-opacity-20 p-2 rounded-md hover:bg-opacity-30 transition-all">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a href="#" className="bg-gradient-to-r from-blue-500 to-indigo-600  bg-opacity-20 p-2 rounded-md hover:bg-opacity-30 transition-all">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a href="#" className="bg-gradient-to-r from-blue-500 to-indigo-600 bg-opacity-20 p-2 rounded-md hover:bg-opacity-30 transition-all">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Product column */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-white">PRODUCT</h3>
            <ul className="grid grid-cols-1 gap-2">
              {[
                "Pricing",
                "Email finder & verifier",
                "Multichannel sequences",
                "AI-powered engagement",
                "Deliverability boost",
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="text-white opacity-80 hover:opacity-100 transition-opacity text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources column */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-white">RESOURCES</h3>
            <ul className="grid grid-cols-1 gap-2">
              {[
                "Blog",
                "Academy",
                "Success stories",
                "Templates",
                "Free tools",
                "Newsletter",
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="text-white opacity-80 hover:opacity-100 transition-opacity text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Legal */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-white">COMPANY</h3>
            <ul className="grid grid-cols-1 gap-2">
              {[
                "About us",
                "Affiliates program", 
                "Careers",
                "Terms & Privacy",
                "Contact us",
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="text-white opacity-80 hover:opacity-100 transition-opacity text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      
      {/* Copyright - simplified */}
      <div className=" border-opacity-20 bg-black py-4">
        <div className="container mx-auto px-4">
          <p className="text-white text-sm opacity-80 text-center">©2025 Mailsonic - All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;