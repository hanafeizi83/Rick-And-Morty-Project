import { HeartIcon } from '@heroicons/react/24/outline'
import React, { useState } from 'react'

function Navbar({query , onQuery ,numOfCharacter}) {
  return (
    <div className='navbar'>
      <h2 className='navbar__logo'>Logo 😍</h2>
      <input
        type="text"
        className='text-field'
        placeholder='search ...'
        value={query}
        onChange={(e) => onQuery(e.target.value)}
      />
      <span className='navbar__result'>Fonded {numOfCharacter} Characters</span>
      <div className='heart'>
        <HeartIcon className='icon ' />
        <span className='badge'>0</span>
      </div>
    </div>
  )
}

export default Navbar
