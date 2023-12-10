
import './App.css'
import Benifits from './Components/Benifits'
import Contact from './Components/Contact'
import Disclaimer from './Components/Disclaimer'
import Faq from './Components/Faq'
import Form from './Components/Form'
import Navbar from './Components/Navbar'
import Partners from './Components/Partners'
import Process from './Components/Process'
import Ques from './Components/Ques'

import Variants from './Components/Variants'

function App() {


  return (
 
    <div className='m-auto'>
     <Navbar/>
     <Form/>
     <Partners/>
     <Variants/>
     <Process/>
     <Benifits/>
     <Ques/>
     <Disclaimer/>
     <Contact/>
    </div>

  )
}

export default App
