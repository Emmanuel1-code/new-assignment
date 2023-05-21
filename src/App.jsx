import React from 'react'
import GoogleLogo from './components/GoogleLogo'
import SearchForm from './components/SearchForm'
import Navbar from './components/Navbar'


function App() {
  return (
  <>
    <div className='google-wrapper'>
      
        <Navbar />
      
      
        <GoogleLogo />
      
      
        <SearchForm />
      
    </div>
    
   </>   
   
  )
}

export default App