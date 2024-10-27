'use client'
import React from 'react'
import { usePathname } from "next/navigation";
// to dtermine if alink is active.to add class to the active link u can chk if d current pathname mathces href of the link
const Navbar = () => {
    const pathname= usePathname()

  return (
    <>    <div>
      navbar
    </div>

    <div>
        <div>u r inside{pathname}</div>
    </div>
    </>
  )
  

}

export default Navbar
