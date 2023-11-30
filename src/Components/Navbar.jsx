import React from 'react'

const Navbar = () => {
  return (
  
    <div>
      <nav className=' inline-flex justify-center items-center bg-gradient-to-r from-teal-400 to-blue-800'>   { /* 64, 194, 186   0, 68, 133 */ }
        <div className='p-2 pr-4'>
      <img src="imgs/LOGO.png" className='h-11' alt="" />
      </div>
      <div className='inline-flex'>
        <ul className=' text-white pt-1 pl-96'>
          <li className='inline-flex  text-xl font-semibold'>
            <a className='pr-4 hover:text-sky-400' href="">Home</a>
            <a className='pr-4 hover:text-sky-400' href="">Variants</a>
            <a className='pr-4 hover:text-sky-400' href="">Process</a>
            <a className='pr-4 hover:text-sky-400' href="">Benifits</a>
            <a className='pr-4 hover:text-sky-400' href="">Testimonials</a>
            <a className='pr-4 hover:text-sky-400' href="">FAQ</a>
            </li>
            </ul>
            
            <ul className='pr-'>
             
              <li className='text-cyan-500 font-bold'>
            <a className='ml-64 inline-flex  p-0.5 ' href="" >
              <img src="imgs/telephone-call.png"  className=' h-7 ml-2' alt="" />+91-97111-20863  
              <img src="imgs/whatsapp.png"className='h-6 ml-4 '/>+91-97111-20863
              </a>
           
          </li>
          </ul>
          
        
        </div>
       
      </nav>
    </div>
   
  )
}
export default Navbar
