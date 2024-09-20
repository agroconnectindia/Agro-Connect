import React from 'react'
import './App.css'
import Side from './MyComponent/Side'
import Header from './MyComponent/Header'
import Data from './MyComponent/News'
import Footer from './MyComponent/Footer'
import Sidebar from './MyComponent/Sidebar'
import Dashboard from './MyComponent/Dashboard'
import Recommendation from './MyComponent/Recommendation'



export default function Home() {
  return (
    
    <>
    <body className='inline h-auto  '>
    <div className='md:mt-0 mt-5 ml-5 md:ml-0 text-black'><Header pagename = "Dashboard"/></div>  
    <Dashboard/>
    <Side/>
     {/* mobile side bar */}
    <div className='md:hidden'>
    <Sidebar/>
    </div>
    <Side/> 
    <div className=''>
    <Footer/>
    </div>
    </body>
    </>
  )
}
