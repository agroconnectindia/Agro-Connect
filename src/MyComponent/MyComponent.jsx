import React from 'react'


export default function MyComponent() {
  let value =3112 ;
  return (
    <>
     <div className="flex flex-col">
      <div className={`p-4  flex  ${value >= 90 ? 'block' : 'hidden'}`}>
        {/* Value is 90+ */}
        <p className='font-extrabold text-black text-2xl'>{value}%</p>
        <div className='flex gap-2 ml-4  mt-2'>
          <div className='bg-green-500 h-4 w-4 gap-1 rounded-full'></div>
          <div className='bg-green-500 h-4 w-4 gap-1 rounded-full'></div>
          <div className='bg-green-500 h-4 w-4 gap-1 rounded-full'></div>
        </div>
      </div>
      <div className={`p-4 flex  ${value >= 50 && value < 90 ? 'block' : 'hidden'}`}>
        {/* Value is between 50 and 89 */}
        <p className='font-extrabold text-black text-2xl'>{value}%</p>
        <div className='flex gap-2 ml-4  mt-2'>
          <div className='bg-orange-600 h-4 w-4 gap-1 rounded-full'></div>
          <div className='bg-orange-600 h-4 w-4 gap-1 rounded-full'></div>
          
        </div>
      </div>
      <div className={`p-4  flex ${value < 50 ? 'block' : 'hidden'}`}>
        {/* Value is less than 50 */}
        <p className='font-extrabold text-black text-2xl'>{value}%</p>
        <div className='flex  ml-4 mt-2'>
          <div className='bg-red-700 h-4 w-4 gap-1 rounded-full'></div>
          
        </div>
      </div>
    </div>
    </>
    
  )
}

