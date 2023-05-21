import React from 'react'
import './Style.css';
function Navbar() {
  return (
    <div className='nav-list'>
            <ul>
                <li className='nav-link'><a href='#'>Gmail</a></li>
                <li className='nav-link'><a href='#'>Images</a></li>
                <li className='more-menu'>
                    <a href='#'>More
                    </a>
                    
                </li>
                <li className='sign-in-link' ><a href='#' className='sign-in-link'>Sign In</a></li>
            </ul>
    </div>
  )
}

export default Navbar