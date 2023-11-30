import React from 'react'

const Faq = () => {
  return (

    <div className=" flex flex-col lg:flex-row ml- justify-center items-center">
        <div className='p-4'>
        <p className=' text-blue-800 text-5xl font-bold font-sans '>
            FREQUENTLY ASKED <br /> <p className='text-cyan-500 pt-2'> QUESTIONS </p>
        </p>
        <div className='ml- mt-10'> 
        <button className='bg-gradient-to-r from-teal-400 to-blue-800 rounded w-96 h-16 justify-center border-2 hover:border-black text-white font-semibold '>DROP YOUR QUESTIONS</button>
        </div>
       </div>
        <div>
            <img src="https://f.hellowork.com/blogdumoderateur/2022/04/mettre-en-place-faq.jpg" className='h-96  ' alt="" />
        </div>
        <div>
            <select>
                <option value="">CAN I CLAIM HEALTH INSURENCE 2 TIMES IN A MONTH</option>
            </select>
        </div>
       
    </div>
    
  )
}

export default Faq