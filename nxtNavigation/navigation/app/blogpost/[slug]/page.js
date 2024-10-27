'use client'
import React, { useEffect } from 'react'
import { useParams } from 'next/navigation'
import { useRouter } from 'next/navigation'
const page = () => {
    const params=useParams()
    const router=useRouter()

    useEffect(()=>{
        setTimeout(() => {
           router.push('/about') 
        }, 2333);
    },
    [])
  return (
    <>    <div>
      {params.slug}
    </div>

    <button type='button' onClick={()=>{router.push('/dashboard')}}>
        dashboard
    </button>
    </>

  )
}

export default page
