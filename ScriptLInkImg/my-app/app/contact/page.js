import React from 'react'

import Script from 'next/script'
const contact = () => {
  return (
    <div>
        <Script>
            {`
                alert('welcone to contactc')
            `}
        </Script>
      contacts
    </div>
  )
}

export default contact

export const metadata = {
    title: "contact facebook title",
    description: "Generated by create next app",
  };