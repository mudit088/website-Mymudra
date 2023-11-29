import React from 'react'

const Variants = () => {
  return (
    <div className=''>
    <div className='flex justify-center  p-4 text-2xl  font-bold m-10 '>
    
    <p className='text-blue-800 pr-2'>VARIANTS OF </p><p className='text-cyan-500 '>A HEALTH INSURANCE</p>  
    </div>

    
    <div className="flex max-h-screen items-center justify-center">
  <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 h-64 mb-20 rounded-xl mt-10 ">
    <div className="group relative cursor-pointer items-center justify-center rounded-3xl overflow-hidden transition-shadow hover:shadow-xl hover:shadow-cyan-500/30">
      <div className="">
        <img className="h-96 object-cover transition-transform duration-500  group-hover:scale-125" src="imgs/individual.png" alt="" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white group-hover:from-white group-hover:via-white/60 group-hover:to-white/60"></div>
      <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        <h1 className="font-dmserif text-3xl italic font-bold text-blue-800">INDIVIDUAL <br /> FLOATER</h1>
        <p className="mb-3 text-lg italic text-blue-800 font-semibold opacity-0 transition-opacity duration-300 bg-teal-100 rounded-3xl group-hover:opacity-100">Get Best health insurance policy for yourself and protect your health. Choose the best individual health insurance..</p>
        
      </div>
    </div>
    <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-3xl">
      <div className="h-96 w-72">
        <img className="h-96 object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="imgs/youandurfam.png" alt="" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-teal-400 group-hover:from-teal-400 group-hover:via-teal-400/60 group-hover:to-teal-400"></div>
      <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        <h1 className="font-dmserif text-3xl font-bold text-blue-800 italic">FOR YOU AND YOU PARTNER</h1>
        <p className="mb-3 text-lg italic text-blue-800 opacity-0 transition-opacity duration-300 font-semibold group-hover:opacity-100 bg-teal-100 rounded-3xl">Special health care for your partner. We are committing you with best health insurance policy.</p>
        
      </div>
    </div>
    <div className="group relative cursor-pointer rounded-3xl items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
      <div className="h-96 w-72">
        <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="imgs/family.png" alt="" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-teal-400 group-hover:from-teal-400 group-hover:via-teal-400/60 group-hover:to-teal-400/60"></div>
      <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        <h1 className="font-dmserif text-3xl font-bold text-blue-900 italic">Insure your family</h1>
        <p className="mb-3 text-lg italic text-blue-900 opacity-0 transition-opacity duration-300 group-hover:opacity-100 font-semibold bg-teal-100 rounded-3xl">Choose the best health insurance plans for family and protect them with the shield.</p>
        
      </div>
    </div>
    <div className="group relative rounded-3xl cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
      <div className="h-80 w-72">
        <img className=" object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="imgs/parents.png" alt="" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-teal-400 group-hover:from-teal-400 group-hover:via-teal-400/60 group-hover:to-teal-400/60"></div>
      <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        <h1 className="font-dmserif text-3xl font-bold text-blue-900 italic">Parents Floater</h1>
        <p className="mb-3 text-lg italic text-blue-900 opacity-0 transition-opacity  duration-300 group-hover:opacity-100 font-semibold bg-teal-100 rounded-3xl">Insurify your family as well as your in-laws with the family health insurance plans. Do not create the hole in pocket with affordable plans.</p>
        
      </div>
    </div>
    
  </div>

</div>

    </div>
  )
}

export default Variants