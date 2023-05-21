import React from 'react'
import './Style.css';
function Navbar() {
  return (
    <div  wrapper>
        <nav>
            <ul>
                <li className='others2'><a href='#'>Gmail</a></li>
                <li className='others2'><a href='#'>Images</a></li>
                <li className='more-menu others2'>
                    <a href='#'>More</a>
                    <ul>
                        <li><a href='#'>Google Apps</a></li>
                        <li ><a href='#'>Google Meet</a></li>
                        <li ><a href='#'>Google Drive</a></li>
                        <li ><a href='#'>Google Calender</a></li>
                    </ul>
                </li>
                <li className='others1' ><a href='#' className='others1'>Sign In</a></li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar