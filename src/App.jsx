
import './App.css'
import Benifits from './Components/Benifits'
import Faq from './Components/Faq'
import Form from './Components/Form'
import Navbar from './Components/Navbar'
import Partners from './Components/Partners'
import Process from './Components/Process'
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
     <Faq/>
    </div>

  )
}

export default App
