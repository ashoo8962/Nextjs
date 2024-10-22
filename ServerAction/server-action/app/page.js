'use client'
import {submitAction} from '@/actions/form'
// in client side we cant iise promises
import { useRef } from 'react';
export default function Home() {

  
let ref=useRef()

  return (
    <div className="w-2/3 mx-auto my-12">
      <form  ref ={ref} action={(e)=>{submitAction(e);ref.current.reset()}}>
        <div>
          <label htmlFor="name">Name</label>
          <input  name='name' className='text-black mx-4 border-black px-3' type="text"  id="name" />
        </div>

      
        <div>
          <label htmlFor="address
      ">Address</label>
          <input className='text-black mx-4 border border-black px-3 'type="text" name="address" id="address"  />
        </div>

        <  button className="border border-black px-3" >
          Submit</button>
      </form>
    </div>
  );
}
