import React from 'react'

const Partners = () => {
  return (
    <div className='border-4 border-cyan-500 '>
        <div className='flex justify-center p-4 text-2xl font-bold'>
           <p className='text-blue-800 pr-2'>OUR </p><p className='text-cyan-500 '>PARTNERS</p>
        </div>

        <div className='grid grid-cols-1 gap-8 align center justify-items-center rounded-3xl sm:inline-flex  sm:m-2 justify-between sm:ml-96 '>
         <button className='w-44 hover:bg-gradient-to-r from-teal-400 to-blue-800 rounded-3xl'> <img className='p-4' src="imgs/company/carehealth.png" alt="" /></button>
         <button className='w-44 hover:bg-gradient-to-r from-teal-400 to-blue-800 rounded-3xl'> <img className='p-4' src="imgs/company/bajaj.png" alt="" /></button>
         <button className='w-44 hover:bg-gradient-to-r from-teal-400 to-blue-800 rounded-3xl'> <img className='p-4' src="imgs/company/hdfc.png" alt="" /></button>
         <button className='w-44 hover:bg-gradient-to-r from-teal-400 to-blue-800 rounded-3xl'> <img className='p-4' src="imgs/company/StarHealth.png" alt="" /></button>
         <button className='w-44 hover:bg-gradient-to-r from-teal-400 to-blue-800 rounded-3xl'> <img className='p-4' src="imgs/company/iciciLombard.png" alt="" /></button>
        
        </div>

    </div>
  )
}

export default Partners