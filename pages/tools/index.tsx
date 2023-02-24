import React from 'react'
import Image from 'next/image'
import instabug from '../../public/instabug.png'
import octobox from '../../public/octobox.png'
import gamma from '../../public/gamma.jpg'
import deepscan from '../../public/deepscan.png'
import leanboard from '../../public/leanboard.jpg'
import ocd from '../../public/ocd.jpg'
import success from '../../public/success.png'

const index = () => {
  return (
    <div className='bg-[#10182F] max-w-full mx-auto p-32 flex items-center'>
            <div className='bg-white rounded-md p-24'>
            <div className='text-center mb-10'>
                <h1 className='text-base font-bold mb-2'>Recently added</h1>
                <p className='text-sm'>The latest tools that help you and your team
                    building software better,together.
                </p>
            </div>
            <div className='grid grid-cols-2 gap-20 '>
                <div className='flex items-center gap-8'>
                    <div className='bg-gray-200 rounded-full p-5 shrink-0'>
                    <Image src={instabug} alt='instabug' className='w-12 h-12 rounded-full'/>
                    </div>
                    <div> 
                    <span className='inline-flex items-center'>
                    <span className='text-base font-semibold mb-2'>Instabug</span> 
                    <Image src={success} alt='success' className='w-6 h-6 ml-2'/>
                    </span>    
                   
                    <p className='text-sm'>The top apps in the world rely on instabug for bug
                        reporting, crash reporting, and in-app user 
                        feedback.
                    </p>  
                    </div>      
                </div>

                <div className='flex items-center space-x-6'>
                    <div className='bg-blue-800 rounded-full p-5 shrink-0'>
                      <Image src={deepscan} alt='deepscan' className='w-12 h-12 rounded-full'/>
                    </div>
                   
                    <div>
                    <span className='inline-flex items-center'>
                    <span className='text-base font-semibold mb-2'>DeepScan</span> 
                    <Image src={success} alt='success' className='w-6 h-6 ml-2'/>
                    </span>   
                    <p className='text-sm'>DeepScan is an advanced static analysis tools
                        engineered to support JavaScript, TypeSCRIPT,
                        React, and Vue.js.
                    </p>
                    </div>
                </div>

                <div className='flex items-center space-x-6'>
                    <div className='bg-black rounded-full p-5 shrink-0'>
                    <Image src={octobox} alt='octobox' className='w-12 h-12 rounded-full'/>
                    </div>
                   
                    <div>
                    <span className='inline-flex items-center'>
                    <span className='text-base font-semibold mb-2'>Octobox</span> 
                    <Image src={success} alt='success' className='w-6 h-6 ml-2'/>
                    </span>   
                    <p className='text-sm'>Octobox helps you manage your notifications in 
                        the same way Gmail helps you manage your 
                        email.
                    </p>
                    </div>
                   
                </div>

                <div className='flex items-center space-x-6'>
                    <div className='bg-gray-200 rounded-full p-5 shrink-0'>
                       <Image src={leanboard} alt='leanboard' className='w-12 h-12 rounded-full'/>
                    </div>
                    
                    <div>
                    <span className='inline-flex items-center'>
                    <span className='text-base font-semibold mb-2'>LeanBoard</span> 
                    <Image src={success} alt='success' className='w-6 h-6 ml-2'/>
                    </span>   
                    <p className='text-sm'>Lean Board is a collaborative whiteboard with
                         sticky notes which seamlessly connects with your
                         GitHub issue.</p>
                    </div>
                </div>

                <div className='flex items-center space-x-6'>
                    <div className='bg-gray-200 rounded-full p-5 shrink-0'>
                       <Image src={gamma} alt='gamma' className='w-12 h-12 rounded-full'/>
                    </div>
                   
                    <div>
                    <span className='inline-flex items-center'>
                    <span className='text-base font-semibold mb-2'>Gamma Data Leak Prevention</span> 
                    <Image src={success} alt='success' className='w-6 h-6 ml-2'/>
                    </span>   
                    <p className='text-sm'>69% of data branches start with negligence. one
                        negligent employee could cost your company a 
                        decade worth of reputataion.
                    </p>
                    </div>
                    
                </div>
               
                
                <div className='flex items-center space-x-6'>
                    <div className='bg-gray-200 rounded-full p-5 shrink-0'>
                    <Image src={ocd} alt='ocd' className='w-10 h-10 rounded-full'/>
                    </div>
                    <div>
                    <span className='inline-flex items-center'>
                    <span className='text-base font-semibold mb-2'>ODIN</span> 
                    <Image src={success} alt='success' className='w-6 h-6 ml-2'/>
                    </span>   
        
                    <p className='text-sm'>The top apps in the world relay on Instabug for bug
                        reporting, crash reporting, and in-app user 
                        feedback.
                    </p>
                    </div>
                </div>

            </div>
            <div className='text-center mt-10'>
                <button className='px-8 py-4 bg-black text-white text-xs font-semibold'>View all</button>
            </div>
        </div>
    </div>
  )
}

export default index