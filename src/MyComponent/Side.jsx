import React from 'react'
import dashboard from './icon/dashboard.png'
import daily from './icon/Daily.png'
import farm from './icon/farm.png'
import stat from './icon/stat.png'
import market from './icon/market.png'
import img from './icon/b.png'
import about from './icon/image1.png'
import pfp from './icon/pfp.png'
import news from './icon/news.png'

///// Big screen /////
let name= 'User Name';
export default function Side() {
  return (
    <div className=''>
      <section>
      <div className='flex '>
      <div className=" md:w-64 h-screen fixed top-0 left-0 flex flex-col text-black  bg-gray-200 shadow-2xl">
        
       <div className="hidden items-center justify-center h-20 md:block   flex-col">
        
      <img className='  md:h-20 h-10  md:ml-20 my-4 mx-2 bg-black rounded-[50%] mb-5' src={pfp} alt="Dashboard" />
      <h1 className='font-bold text-2xl mt-4 md:block hidden '> {name} </h1>
        </div>
        {/*
        <a className='md:hidden block ' href="#"><img className='h-8 my-2 mx-2' src={dashboard} alt="Dashboard" />
        <p className='text-black text-[10px] mb-2'>Dashboard</p>
        </a>
        <a className='md:hidden block ' href="#"><img className='h-8 my-2 mx-2' src={daily} alt="Dashboard" />
        <p className='text-black text-[10px] mb-2'>Daily <br /> Record</p>
        </a>
        <a className='md:hidden block ' href="#"><img className='h-8 my-2 mx-2' src={farm} alt="Dashboard" />
        <p className='text-black text-[10px] mb-2'>Farm <br />  Record</p>
        </a>
        <a className='md:hidden block ' href="#"><img className='h-8 my-2 mx-2' src={stat} alt="Dashboard" />
        <p className='text-black text-[10px] mb-2'>Statistics <br />  Report</p>
        </a>
        <a className='md:hidden block ' href="#"><img className='h-8 my-2 mx-2' src={market} alt="Dashboard" />
        <p className='text-black text-[8px] mb-2'>Marketplace</p>
        </a>
        <a className='md:hidden block ' href="#"><img className='h-8 my-2 mx-2' src={img} alt="Dashboard" />
        <p className='text-black text-[10px] mb-2'>Business <br />  Hub</p>
        </a>
        <a className='md:hidden block ' href="#"><img className='h-8 my-2 mx-2' src={about} alt="Dashboard" />
        <p className='text-black text-[10px] mb-2'>About</p>
        </a> */}
        
        <nav className="flex flex-col flex-grow overflow-y-auto mt-20">
          <ul className="flex flex-col">
            <li className="py-1 m-2 md:block hidden text-black font-bold hover:text-slate-600 hover:bg-gray-400 text-center"> <div className='flex text-center ml-14'> <img className='h-8 mr-2 ' src={dashboard} alt="Dashboard" /><a className='text-black hover:text-slate-600' href=''>Dashboard</a></div></li>
            <li className="py-1 m-2 md:block hidden text-black font-bold hover:text-slate-600 hover:bg-gray-400 text-center"> <div className='flex text-center ml-14'> <img className='h-8 bg-transparent mr-2 rounded-[60%] ' src={about} alt="Dashboard" /><a className='text-black hover:text-slate-600' href='#'>Recommendation</a></div></li>
            <li className="py-1 m-2 md:block hidden text-black font-bold hover:text-slate-600 hover:bg-gray-400 text-center"> <div className='flex text-center ml-14'> <img className='h-8 bg-transparent mr-2 rounded-[60%] ' src={news} alt="Dashboard" /><a className='text-black hover:text-slate-600' href='#'>Latest News</a></div></li>
            <li className="py-1 m-2 md:block hidden text-black font-bold hover:text-slate-600 hover:bg-gray-400 text-center">  <div className='flex text-center ml-14'> <img className='h-8 mr-2 ' src={daily} alt="Dashboard" /><a className='text-black hover:text-slate-600' href='#'>Daily Record</a></div></li>
            <li className="py-1 m-2 md:block hidden text-black font-bold hover:text-slate-600 hover:bg-gray-400 text-center"> <div className='flex text-center ml-14'> <img className='h-8 mr-2 ' src={farm} alt="Dashboard" /><a className='text-black hover:text-slate-600' href='#'>Farm Record</a></div></li>
            <li className="py-1 m-2 md:block hidden text-black font-bold hover:text-slate-600 hover:bg-gray-400 text-center"> <div className='flex text-center ml-14'> <img className='h-8 mr-2 ' src={stat} alt="Dashboard" /><a className='text-black hover:text-slate-600' href='#'>Statistics Report</a></div></li>
            <li className="py-1 m-2 md:block hidden text-black font-bold hover:text-slate-600 hover:bg-gray-400 text-center">  <div className='flex text-center ml-14'> <img className='h-8 mr-2 ' src={market} alt="Dashboard" /><a className='text-black hover:text-slate-600' href='#'>Marketplace</a></div></li>
            <li className="py-1 m-2 md:block hidden text-black font-bold hover:text-slate-600 hover:bg-gray-400 text-center"><div className='flex text-center ml-14'> <img className='h-8 mr-2 ' src={img} alt="Dashboard" /><a className='text-black hover:text-slate-600' href='#'>Business Hub</a></div></li>
            <li className="py-1 m-2 md:block hidden text-black font-bold hover:text-slate-600 hover:bg-gray-400 text-center"> <div className='flex text-center ml-14'> <img className='h-8 bg-transparent mr-2 rounded-[60%] ' src={about} alt="Dashboard" /><a className='text-black hover:text-slate-600' href='#'>About</a></div></li>
            
          </ul>
          
          
        </nav>
        
        </div>
        </div>
        </section>
    </div>

    

    
  )
}
