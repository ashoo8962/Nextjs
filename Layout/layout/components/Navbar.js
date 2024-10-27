import React from 'react'
import  Link from 'next/link'
const Navbar = () => {
  return (
    <nav>
<div>
  <Link className='text-white text-lg mx-2' href='/'>Home
  </Link>
  <Link className='text-white text-lg mx-2' href='/about'>About
  </Link>
  <Link className='text-white text-lg mx-2' href='/contact'>Contact
  </Link>
</div>
    </nav>
  )
}

export default Navbar
