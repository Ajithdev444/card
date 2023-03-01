import React from 'react'
import Image from 'next/image'
import deepscan from '../../public/deepscan.png'
import gamma from '../../public/gamma.jpg'
import google from '../../public/google.png'
import img1 from '../../public/img1.jpg'
import img2 from '../../public/img2.jpg'


const index = () => {
  return (
    
        <div className='min-h-screen p-10 mx-auto justify-center flex items-center bg-[#C1C0BC]'>
          <div className='gap-4 grid-cols-1 grid md:grid-cols-8 bg-white md:grid-rows-5 grid-flow-row max-w-6xl'>
          <Image src={img1} alt='img1' className='row-span-2 w-full object-cover'/>
          <Image src={google} alt='google' className='row-span-2 col-span-2 w-full h-32 object-cover'/>
          <Image src={gamma} alt='gamma' className='col-span-1 w-full h-32 object-cover'/>
          <Image src={deepscan} alt='deepscan' className='col-span-2 w-full h-32 object-cover'/>
          <Image src={img1} alt='img1' className='col-span-1 w-full h-32 object-cover'/>
          <Image src={img2} alt='img2' className='col-span-1 w-full h-32 object-cover '/>

          <Image src={img1} alt='img1' className='col-span-1 w-full h-32 object-cover'/>
          <Image src={google} alt='google' className='col-span-1 w-full h-32 object-cover'/>
          <Image src={gamma} alt='gamma' className='col-span-1 w-full h-32 object-cover'/>
          <Image src={deepscan} alt='deepscan' className='col-span-2 w-full h-32 object-cover'/>
          <Image src={img1} alt='img1' className='col-span-1 w-full h-32 object-cover'/>
          <Image src={img2} alt='img2' className='col-span-2 w-full h-32 object-cover '/>

          <Image src={img1} alt='img1' className='col-span-2 w-full h-32 object-cover'/>
          <Image src={google} alt='google' className='col-span-1 w-full h-32 object-cover'/>
          <Image src={gamma} alt='gamma' className='col-span-1 w-full h-32 object-cover'/>
          <Image src={deepscan} alt='deepscan' className='col-span-1 w-full h-32 object-cover'/>
          <Image src={img1} alt='img1' className='col-span-1 w-full h-32 object-cover'/>
          <Image src={img2} alt='img2' className='col-span-2 w-full h-32 object-cover '/>

          <Image src={img1} alt='img1' className='col-span-1 w-full h-32 object-cover'/>
          <Image src={google} alt='google' className='col-span-2 w-full h-32 object-cover'/>
          <Image src={gamma} alt='gamma' className='col-span-1 w-full h-32 object-cover'/>
          <Image src={deepscan} alt='deepscan' className='col-span-1 w-full h-32 object-cover'/>
          <Image src={img1} alt='img1' className='col-span-2 w-full h-32 object-cover'/>
          <Image src={img2} alt='img2' className='col-span-1 w-full h-32 object-cover '/>

          <Image src={img1} alt='img1' className='col-span-1 w-full h-32 object-cover'/>
          <Image src={google} alt='google' className='col-span-1 w-full h-32 object-cover'/>
          <Image src={gamma} alt='gamma' className='col-span-1 w-full h-32 object-cover'/>
          <Image src={deepscan} alt='deepscan' className='col-span-1 w-full h-32 object-cover'/>
          <Image src={img1} alt='img1' className='col-span-2 w-full h-32 object-cover'/>
          <Image src={img2} alt='img2' className='col-span-2 w-full h-32 object-cover '/>  
        </div>
        </div>
    
  )
}

export default index