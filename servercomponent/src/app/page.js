'use client'
//  react uses client
import {useState,useEffect } from 'react'
import fs from 'fs/promises'
import React from 'react'
// next is server side will run and then send code to sever
// 
const page = () => {

  const [count,setCount]=useState(0)
  return (
    <>
       <div>

        let a = fs.readFile('.gitignore')
        {/* a.then((e) =>{console.log(e.toString())}) */}
      I am a compponnet 
      {/* {count} */}
    </div>
    <div>
            {/* <button onClick={()=> setCount(count+1)}>Click</button> */}

    </div>

    </>
  )
}

export default page
