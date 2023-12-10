import React from 'react'

const Process = () => {
  return (
    <div>
        <div className=' bold m-4'>
    <div className='flex justify-center  p-2 text-2xl  font-bold m-8  '>
    
    <p className='text-blue-800 pr-2'>PROCESS OF </p><p className='text-cyan-500 '>HEALTH INSURANCE</p>  
    </div>
    
    <div className="flex  items-center justify-center">
  <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3  mb-20 rounded-xl mt-8 ">
    
    
    <div className="group relative cursor-pointer items-center justify-center rounded-3xl overflow-hidden transition-shadow hover:shadow-xl hover:shadow-cyan-500">
      <div className="">
        <img className=" object-cover transition-transform duration-500  h-96 ml-6" src="imgs/p1.png" alt="" />
      </div>
    </div>

    <div className="group relative cursor-pointer items-center justify-center rounded-3xl overflow-hidden transition-shadow hover:shadow-xl hover:shadow-cyan-500">
      <div className="">
        <img className=" object-cover transition-transform duration-500  h-max ml-6" src="imgs/p2.png" alt="" />
      </div>
      
    
    </div>


      <div className="group relative cursor-pointer items-center justify-center rounded-3xl overflow-hidden transition-shadow hover:shadow-xl hover:shadow-cyan-500">
      <div className="">
        <img className=" object-cover transition-transform duration-500 ml-6 h-max " src="imgs/p3.png" alt="" />
      </div>
      
    
    </div>
    
        

     
    </div>


    </div>
    </div>
    </div>
   

  )
}

export default Process