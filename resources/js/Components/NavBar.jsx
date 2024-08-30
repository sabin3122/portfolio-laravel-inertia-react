import React from 'react';
//import { Link } from '@inertiajs/react';

const Navbar = () => {
    return (
        <nav className="p-4 fixed top-0 w-full bg-blue/80 backdrop-blur-lg shadow-md z-50">
        <div className="container mx-auto">
          <ul className="flex space-x-4">
            <li>
              <a
              className="text-blue-800 md:text-xl hover:text-gray-600"
               href="#Home">Home</a>
            </li>
            <li>
              <a
              className="text-blue-800 md:text-xl hover:text-gray-600" 
              href="#Aboutme">About</a>
            </li>
            <li>
              <a
              className="text-blue-800 md:text-xl hover:text-gray-600" 
              href="#Projects">Projects</a>
            </li>
            <li>
              <a
              className="text-blue-800 md:text-xl hover:text-gray-600"
               href="#Contacts">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    );
}

export default Navbar;