
import React, { useState } from 'react';
import gra from './icon/gradient.png'


function Data() {
const data = [
{ id: 'a', imageSrc: {gra}, title: 'Item A', info:  'Information about Item A' },
{ id: 'b', imageSrc: {gra}, title: 'Item B', info: 'Information about Item B' },
{ id: 'c', imageSrc: {gra}, title: 'Item C', info: 'Information about Item C' },
{ id: 'd', imageSrc: {gra}, title: 'Item D', info: 'Information about Item D' },
{ id: 'f', imageSrc: {gra}, title: 'Item F', info: 'Information about Item F' },
{ id: 'a', imageSrc: {gra}, title: 'Item A', info: 'Information about Item A' },
{ id: 'b', imageSrc: {gra}, title: 'Item B', info: 'Information about Item B' },
{ id: 'c', imageSrc: {gra}, title: 'Item C', info: 'Information about Item C' },
{ id: 'd', imageSrc: {gra}, title: 'Item D', info: 'Information about Item D' },
{ id: 'f', imageSrc: {gra}, title: 'Item F', info: 'Information about Item F' },
{ id: 'a', imageSrc: {gra}, title: 'Item A', info: 'Information about Item A' },
{ id: 'b', imageSrc: {gra}, title: 'Item B', info: 'Information about Item B' },
{ id: 'c', imageSrc: {gra}, title: 'Item C', info: 'Information about Item C' },
{ id: 'd', imageSrc: {gra}, title: 'Item D', info: 'Information about Item D' },
{ id: 'f', imageSrc: {gra}, title: 'Item F', info: 'Information about Item F' },
// ... more items (if needed)
];

const [filterType, setFilterType] = useState('all'); // 'all', 'a', 'b', 'c', 'd', 'f'

const filteredData = data.filter((item) => {
if (filterType === 'all') {
return true; // Show all items
} else {
return item.id === filterType; // Show only items with matching ID
}
});

const handleFilterClick = (type) => {
setFilterType(type);
};

//img hide
const [isVisible, setIsVisible] = useState(true);
const [buttonText, setButtonText] = useState('Read More');

const handleButtonClick = () => {
setIsVisible(!isVisible);
setButtonText(buttonText === 'Read More' ? 'Show Less' : 'Read More');
};




return (
<>



<div className='mt-10'>
 <div className='md:flex md:justify-center md:ml-[220px]'>
<button className='bg-slate-100 mr-6 mb-4' onClick={() => handleFilterClick('all')}>All</button>
<button className='bg-slate-100 mr-6 mb-4' onClick={() => handleFilterClick('a')}>Latest News</button>
<button className='bg-slate-100 mr-6 mb-4' onClick={() => handleFilterClick('b')}>Crop Related</button>
<button className='bg-slate-100 mr-6 mb-4' onClick={() => handleFilterClick('c')}>Govt. Related</button>
<button className='bg-slate-100 mr-6 mb-4' onClick={() => handleFilterClick('d')}>Market Related</button>
<button className='bg-slate-100 mr-6 mb-4' onClick={() => handleFilterClick('f')}>Weather Related</button>
</div>

<div className='h-[400px] md:ml-[200px] rounded-2xl bg-slate-100  overflow-scroll mt-8'>

<div className='md:block hidden'>

{isVisible && (
 <img
   src={gra} 
   alt="My Image"
   

   className={` object-cover absolute top-50 h-[400px] opacity-95  ${!isVisible && 'hidden'}`} // Hide using Tailwind CSS class
 />
)}
</div>

<div>
 <p className='flex m-4 font-bold text-2xl'>News</p>
</div>
{filteredData.map((item, index) => (
 <div className='bg-white m-4 shadow-xl rounded-2xl' key={index}>
   
   <h3 className='flex pt-3 px-2 font-bold text-xl'>{item.title}</h3>
   <p  className='flex pb-3 px-2'>{item.info}</p>
 </div>
 
 
))}
</div>
</div>
<div className='  justify-end md:flex hidden'>
{/* <button className='    text-black border-0' onClick={handleButtonClick}>{buttonText}</button> */}
<p className=' cursor-pointer text-lg font-bold mt-4 text-black border-0 mr-6' onClick={handleButtonClick}>{buttonText}</p>
</div>


</>
);
}

export default Data;