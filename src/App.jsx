
import './App.css';
import Header from './components/Headercomponent'
import Menu from './components/Menucomponent'
import About from './components/Aboutcomponent'
import Home from './components/Homecomponent'
import Contact from './components/Contactcomponent'
import Footer from './components/Footercomponent'
import Signup from './components/Signupcomponent'
import Login from './components/Logincomponet'


import {BrowserRouter as Router ,Routes,Route} from 'react-router-dom'
function App() {
 
 
  return (
         <>
         <Router>
          <div className='header'>
            
            <Header/>
          </div>
          <div className='content'>
            <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
              <Route path='/' element={<Home/>} ></Route>
              <Route path='/home' element={<Home/>} ></Route>
              <Route path='/about' element={<About/>} ></Route>
              <Route path='/contact' element={<Contact/>} ></Route>
              <Route path='/menu' element={<Menu/>} ></Route>
            </Routes>
          </div>
          <div className='footer'>
            <Footer/>
          </div>
         </Router>
         </>
  )
}

export default App
