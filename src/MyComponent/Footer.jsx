import React from 'react'
import grass from './icon/grass.png'

export default function Footer() {
  return (
    <>
    {/* <div>
    <img className='h-32 absolute' src={grass} alt="" />
    </div> */}

    <div className='flex  '>
    <div className="flex  font-extrabold md:ml-[650px]  ">
    © Agro Connect India
    </div>
    <div className=" flex font-extrabold md:ml-[300px]">
    Version 1.1
    </div>
    </div>
    
    </>
  )
}
