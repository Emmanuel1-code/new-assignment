import React from 'react'
import GoogleLogo from './components/GoogleLogo'
import SearchForm from './components/SearchForm'
import Footer from './components/Footer'
import Navbar from './components/Navbar'


function App() {
  return (
    <div className='google-wrapper'>
      <nav>
        <Navbar />
      </nav>
      <header>
        <GoogleLogo />
      </header>
      <main>
        <SearchForm />
      </main>
      <footer className='footer'>
        <Footer />
      </footer>

    </div>
  )
}

export default App