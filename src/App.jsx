import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import './App.css'
import Navigation from './compenents/Navigation'
import Home from './compenents/pages/HOME'
import Member from './compenents/pages/Member'
import Product from './compenents/pages/Product'

function App() {
  return (
    <div>
      <Router>
         <Navigation/>
         <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/member" element={<Member/>} />
          <Route path="/product" element={<Product/>}/>
        </Routes> 
      </Router>

    </div>
      
  )
}

export default App
