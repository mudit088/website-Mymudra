import React from 'react'

const Form = () => {
  return (
    <div className="bg-[url('public/famback4.png')] align center justify-items-center grid-cos-1 gap-10 m-2 p-6 sm:p-4 sm:inline-flex">
    <div className='inline-flex items-center pl-0 pt-0 sm:pl-72 sm:pt-20  '>
        <p className='  text-blue-800 font-bold  align center justify-items-center sm:whitespace-nowrap sm:pb-36 sm:pl-20'>
           <h2 className='text-blue-800 text-xl font-bold  text-10 '> HEALTH IS WEALTH ! SECURE YOUR HEALTH </h2><br />
          <p className='font-sherif'> Health insurance starting from Rs.16 per day. It can not be more cheaper than this, <br/> we got you affordable health insurance .Apply for the medical policy.</p>

        </p>
        </div>
        <div className='ml-0 mt-10 bg-white sm:ml-28 '>
            <div className='border-2  border-solid rounded-3xl shadow-xl'>
                <div className='bg-gradient-to-r from-teal-400 to-blue-800 '>
                <ul className=' bg-blue-to-white sm:p-3  p-0'>
                    <a href="" className=' pl-24 sm:pl-36 text-white font-sans font-semibold '>GET FREE QUOTE NOW</a>
                </ul>
                </div>
            <form>
                <label htmlFor="" className='text-blue-800  m-4'>Phone Number
                 <input type="number" className='border-2 w-72 ] h-10 rounded m-3' placeholder='  xxxxxxxxxx' /><br />
                 <button className='w-36 border-2 mt-4 m-8 ml-24 text-white hover:border-blue-800 bg-gradient-to-r from-teal-400 to-blue-800 rounded'>PROCEED</button>
                 </label>
            </form>
            </div>
        </div>
    
    </div>
  )
}

export default Form