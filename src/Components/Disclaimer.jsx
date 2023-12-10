import React,{useState} from 'react'

const Disclaimer = () => {
  const[show,setshow]=useState(false);
  
  return (
    <div>
      <section>
        <p className=' m-10 sm:ml-4 sm:mr-4 sm:mb-4 flex items-center justify-center bg-gray-400 text-2xl cursor-pointer font-bold' onClick={()=>setshow(!show)}>Disclamer</p>

        
       { show &&  <p className='ml-10 mr-10 mt-2 p-1 font-semibold bg-gray-200 mb-10'  >
     <p className =''>   +On the basis of your profile</p> <br />

     <p className ='p-2'> +Rs. 525/month (Rs.17/day) is the starting price for a 1 crore term life insurance for an 18-year-old male, non-smoker, with no pre-existing diseases, covering upto 38 years of age. <br /></p>

     <p className ='p-2'> +Rs. 12/day is the starting price for a 50 lakhs term life insurance for an 18-year-old male, non-smoker, with no pre-existing diseases, covering upto 38 years of age.<br /></p>

     <p className ='p-2'>+Rs. 16/day is the starting price for a 50 lakhs term life insurance for an 18-year-old male, non-smoker, with no pre-existing diseases, covering upto 38 years of age.</p>

     <p className ='p-2'>+Rs. 664/month is the starting price for a 1.5 crore term life insurance for an 18-year-old male, non-smoker, with no pre-existing diseases, covering upto 38 years of age.<br /></p>

     <p className ='p-2'>+Rs. 792/month (Rs.30/day) is the starting price for a 2 crore term life insurance for an 18-year-old male, non-smoker, with no pre-existing diseases, covering upto 28 years of age.<br /></p>

     <p className ='p-2'>+Rs. 1,023/month is the starting price for an Rs. 1 Crore term life insurance for a 30-year-old male, non-smoker, with no pre-existing diseases, covering upto 68 years of age. An additional premium is payable for riders who opt.<br /></p>

     <p className ='p-2'>A full refund of the premium may be availed when you opt to exit the policy at a pre-defined interval. On availing the one-time option to exit, the total base premium is returned by the Insurer excluding GST & premium paid for additional optional benefits.<br /></p>

     <p className ='p-2'>+Rs. 792/month is the starting price for a 2 crore term life insurance for an 18-year-old male, non-smoker, with no pre-existing diseases, covering upto 38 years of age.<br /></p>

     <p className ='p-2'>+Rs. 1,219/month is the starting price for a 3 crore term life insurance for an 18-year-old male, non-smoker, with no pre-existing diseases, cover upto 38 years of age.<br /></p>

     <p className ='p-2'>+Rs. 1,559/month is the starting price for a 5 crore term life insurance for an 18-year-old male, non-smoker, with no pre-existing diseases, covering upto 38 years of age.<br /></p>

     <p className ='p-2'>+Rs. 2,850/month is the starting price for a 7 crore term life insurance for an 18-year-old male, non-smoker, with no pre-existing diseases, covering upto 38 years of age, rounded off to the nearest 10<br /></p>

     <p className ='p-2'>This plan provides an option for 'Return of Premium' wherein a full refund of the premium (excluding GST & premium paid for additional optional benefits) is provided as a part of maturity benefit on survival of the Life Assured till the end of the policy term.<br /></p>

     <p className ='p-2'>Prices offered by the insurer are as per the IRDAI-approved insurance plans | #All savings and online discounts are provided by insurers as per IRDAI-approved insurance plans | Standard Terms and Conditions Apply | **Tax Benefits are subject to changes in tax laws.| My Mudra Fincorp Ltd<br /></p>

     <p className ='p-2'>*Pre-approved term plan is only available for eligible existing customer bases determined by insurers.<br /></p>

     <p className ='p-2'>*We will respond in the first instance within 30 minutes of the customers contacting us. 30-minute claim support service is for the purpose of giving reasonable assistance to the policyholder in pursuance of the claim. Settlement of claims (including cashless claims) is the responsibility of the insurer as per policy terms and conditions. The 30-minute claim support is subject to our operations not being impacted by a system failure or force majeure event or for reasons beyond our control. For further details, the 24x7 Claims Support Helpline can be reached at 8588806836<br /></p>

     <p className ='p-2'>*Additional premium is payable for riders who opted<br /></p>

     <p className ='p-2'>For more details on risk factors, terms, and conditions, please read the sales brochure carefully before concluding a sale.</p>

     <p className ='p-2'>My Mudra Fincorp Ltd| CIN: U65191DL2013PLC257611 | Registered Office Second Floor, 17A/45, WEA, Karol Bagh, New Delhi, Delhi 110005.<br />
        </p></p>}
      </section>
    </div>
  )
}

export default Disclaimer