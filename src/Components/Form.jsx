import React from 'react'

const Form = () => {
  return (
    <div className="bg-[url('imgs/famback4.png')]  p-4">
    <div className='inline-flex items-center pl-72 pt-20 '>
        <p className=' pb-36 pl-20 text-blue-800 font-bold'>
           <h2 className='text-blue-800 text-xl font-bold  text-10'> HEALTH IS WEALTH ! SECURE YOUR HEALTH </h2><br />
          <p className='font-sherif'> Health insurance starting from Rs.16 per day. It can not be more cheaper than this, <br/> we got you affordable health insurance .Apply for the medical policy.</p>

        </p>
        <div className='ml-36 '>
            <div className='border-2  border-solid hover:border-blue-800 rounded-3xl'>
                <div className='bg-gradient-to-r from-teal-400 to-blue-800 '>
                <ul className=' bg-blue-to-white p-3'>
                    <a href="" className='pl-36 text-white '>GET FREE QUOTE NOW</a>
                </ul>
                </div>
            <form>
                <label htmlFor="" className='text-blue-800 p-2'>Phone Number</label>
                 <input type="number" className='border-2 w-72 h-10 rounded m-6' placeholder='  xxxxxxxxxx' /><br />
                 <button className='w-36 border-2 mt-4 m-8 ml-24 text-white hover:border-blue-800 bg-gradient-to-r from-teal-400 to-blue-800 rounded'>PROCEED</button>
            </form>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Form