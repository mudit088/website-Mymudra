import React, { useState } from 'react';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className='bg-gradient-to-r from-teal-400 to-blue-800 p-4'>
      <div className='flex items-center justify-between'>
        <div>
          <img src="/imgs/LOGO.png" className='h-11' alt="Logo" />
        </div>
        <div className='sm:hidden'>
          {/* Mobile Menu Button */}
          <button className='text-white focus:outline-none' onClick={toggleMenu}>
            <img src="imgs/list.png" alt="Menu" />
          </button>
        </div>
        <div className={`sm:flex space-x-6 text-white ${showMenu ? 'block' : 'hidden'}`}>
          {/* Mobile Menu */}
          <ul className='flex flex-col font-semibold sm:flex-row'>
            <li><a href="#" className='hover:text-sky-400 pr-10 sm:pl-32 '>Home</a></li>
            <li><a href="#" className='hover:text-sky-400 pr-10'>Variants</a></li>
            <li><a href="#" className='hover:text-sky-400 pr-10'>Process</a></li>
            <li><a href="#" className='hover:text-sky-400 pr-10'>Benefits</a></li>
            <li><a href="#" className='hover:text-sky-400 pr-10'>Testimonials</a></li>
            <li><a href="#" className='hover:text-sky-400 pr-10'>FAQ</a></li>
          </ul>
        </div>
        <div className='hidden sm:block'>
          {/* Contact Info */}
          <div className='text-white font-bold'>
            <a href="#" className='inline-flex items-center space-x-2'>
              <img src="imgs/telephone-call.png" className='h-7' alt="Phone" /> +91-97111-20863
              <img src="imgs/whatsapp.png" className='h-6 ml-2' alt="WhatsApp" /> +91-97111-20863
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
