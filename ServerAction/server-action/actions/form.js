'use server'
import fs from 'fs/promises'

export const submitAction= async (e)=>{
    console.log(e.get('name'),e.get('address'))
    let a = await fs.writeFile("demo.txt",`Name is ${e.get('name')} 
    and address is ${e.get('address')}`)
    console.log(a)
      }