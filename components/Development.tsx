import React from 'react'
import Image from 'next/image'
import img2 from '../public/img2.jpg'

const Development = () => {
  return (
    <div className='relative bg-[#E9ECF1] h-screen'>
        <div className='w-2/3 h-80 bg-[#151D4B] absolute mt-72'>

        </div>
        <div className='max-h-auto border mx-40 my-24 absolute bg-[#FFF] flex rounded-xl'>
            <div className='py-12 px-28 col-span-2 w-3/4'>
            <div className='mb-4'>
            <h1 className='text-base font-semibold text-[#272A3D]'>Development</h1>
            <h2 className='text-lg font-bold text-[#323248]'>Compatible Inkjet Cartridge</h2>
            </div>
            <div>
                <Image src={img2} alt='development' className='w-full h-44 object-cover rounded-md'/>
            </div>
            <div className='grid grid-cols-3 w-full py-6 gap-8'>
                <div>
                    <h2 className='text-xs font-bold'>Life Advice Looking Through A Window</h2>
                    <p className='text-[10px] py-2'>Life is a journey of twists and turns,peaks and
                        valleys, mountains to climb and oceans to explore.
                    </p>
                </div>
                <div>
                    <h2 className='text-xs font-bold'>Choosing The Best Photo Printer</h2>
                    <p className='text-[10px] py-2'>Life is a journey of twists and turns,peaks and
                        valleys, mountains to climb and oceans to explore. </p>
                </div>
                <div>
                    <h2 className='text-xs font-bold'>Unmatched Toner Cartridge Quality 20
                        Less Than Oem Price
                    </h2>
                    <p className='text-[10px] py-2'>Life is a journey of twists and turns,peaks and
                        valleys, mountains to climb and oceans to explore.</p>
                </div>
            </div>
            <div>
                <button className='px-4 py-2 border-[1px] border-[#000] rounded-md font-semibold text-xs'>
                    Read more</button>
            </div>
            </div>
            <div className='bg-[#151D4B] w-1/5 h-60 my-28 mx-[-80px] rounded-md'>
                <div className='p-8'>
                <h2 className='text-xs font-bold text-white'>Party Jokes Starting But Unnecessary</h2>
                <p className='text-[10px] text-white'>Life is a journey of twists and turns,peaks and
                        valleys, mountains to climb and oceans to explore.</p>
                 <button className='px-4 py-2 border-[1px] border-[#000] rounded-md font-semibold text-xs bg-white'>
                    Read more</button>       
            </div>
            </div>
         
            
        </div>
  
    </div>
  )
}

export default Development