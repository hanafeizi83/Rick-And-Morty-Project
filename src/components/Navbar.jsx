import { HeartIcon } from '@heroicons/react/24/outline'
import React from 'react'

function Navbar() {
  return (
    <div className='navbar'>
      <h2 className='navbar__logo'>Logo 😍</h2>
      <input type="text"  className='text-field' placeholder='search ...'/>
      <span className='navbar__result'>Fonded 5 Characters</span>
      <div className='heart'>
        <HeartIcon className='icon '/>
        <span className='badge'>0</span>
      </div>
    </div>
  )
}

export default Navbar
