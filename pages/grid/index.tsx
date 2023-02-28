import React from 'react'
import Image from 'next/image'
import de from '../../public/de.jpeg'
import deepscan from '../../public/deepscan.png'
import gamma from '../../public/gamma.jpg'
import google from '../../public/google.png'
import img1 from '../../public/img1.jpg'
import img2 from '../../public/img2.jpg'


const index = () => {
  return (
    
        <div className='min-h-screen p-10 mx-auto justify-center flex items-center bg-[#C1C0BC]'>
          <div className='gap-4 grid grid-cols-8 bg-white grid-rows-5 grid-flow-row max-w-6xl'>
          <Image src={img1} alt='de' className='col-span-1 w-full h-32 object-cover'/>
          <Image src={google} alt='de' className='col-span-2 w-full h-32 object-cover'/>
          <Image src={gamma} alt='de' className='col-span-1 w-full h-32 object-cover'/>
          <Image src={deepscan} alt='de' className='col-span-2 w-full h-32 object-cover'/>
          <Image src={img1} alt='de' className='col-span-1 w-full h-32 object-cover'/>
          <Image src={img2} alt='de' className='col-span-1 w-full h-32 object-cover '/>

          <Image src={img1} alt='de' className='col-span-1 w-full h-32 object-cover'/>
          <Image src={google} alt='de' className='col-span-1 w-full h-32 object-cover'/>
          <Image src={gamma} alt='de' className='col-span-1 w-full h-32 object-cover'/>
          <Image src={deepscan} alt='de' className='col-span-2 w-full h-32 object-cover'/>
          <Image src={img1} alt='de' className='col-span-1 w-full h-32 object-cover'/>
          <Image src={img2} alt='de' className='col-span-2 w-full h-32 object-cover '/>

          <Image src={img1} alt='de' className='col-span-2 w-full h-32 object-cover'/>
          <Image src={google} alt='de' className='col-span-1 w-full h-32 object-cover'/>
          <Image src={gamma} alt='de' className='col-span-1 w-full h-32 object-cover'/>
          <Image src={deepscan} alt='de' className='col-span-1 w-full h-32 object-cover'/>
          <Image src={img1} alt='de' className='col-span-1 w-full h-32 object-cover'/>
          <Image src={img2} alt='de' className='col-span-2 w-full h-32 object-cover '/>

          <Image src={img1} alt='de' className='col-span-1 w-full h-32 object-cover'/>
          <Image src={google} alt='de' className='col-span-2 w-full h-32 object-cover'/>
          <Image src={gamma} alt='de' className='col-span-1 w-full h-32 object-cover'/>
          <Image src={deepscan} alt='de' className='col-span-1 w-full h-32 object-cover'/>
          <Image src={img1} alt='de' className='col-span-2 w-full h-32 object-cover'/>
          <Image src={img2} alt='de' className='col-span-1 w-full h-32 object-cover '/>

          <Image src={img1} alt='de' className='col-span-1 w-full h-32 object-cover'/>
          <Image src={google} alt='de' className='col-span-1 w-full h-32 object-cover'/>
          <Image src={gamma} alt='de' className='col-span-1 w-full h-32 object-cover'/>
          <Image src={deepscan} alt='de' className='col-span-1 w-full h-32 object-cover'/>
          <Image src={img1} alt='de' className='col-span-2 w-full h-32 object-cover'/>
          <Image src={img2} alt='de' className='col-span-2 w-full h-32 object-cover '/>

          

          
        </div>
        </div>
    
  )
}

export default index