import React from 'react'
import Faq from './Faq'

const Ques = () => {
 const questions =[

    {
    id:'1',
    ques:'Can I claim Health Insurance 2 times in a month? ',
    ans: 'Though there are no limits on the number of claims, you should be watchful when filing a claim in the car insurance policy.'
},
{
    id:'2',
    ques:'What is Health Insurance',
    ans: 'Health insurance or medical insurance is a type of insurance that covers the whole or a part of the risk of a person incurring medical expenses.'
},
{
    id:'3',
    ques:'What are the Documents required to avail Health Insurance',
    ans: 'A person needs to submit Birth certificate, Passport, 10th or 12th mark sheet, Aadhaar card, Driving license, Voters ID and PAN card to get the insurance.'
},
{
    id:'4',
    ques:'How many people can I add in health insurance policy',
    ans: 'A person can either take the policy for themself, with their life partner, with kids, with family and also with the in-laws.'
},
{
    id:'5',
    ques:'What is the amount that I need to pay to avail of health insurance plan? ',
    ans: 'Health Insurance starts from Rs.16* per day.'
}


]
  return (
    <div>
        <Faq Quest={questions}/>
    </div>
  )
}

export default Ques
