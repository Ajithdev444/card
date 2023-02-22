import React from 'react'
import Image from 'next/image'
import instabug from '../../public/instabug.png'
import octobox from '../../public/octobox.png'
import gamma from '../../public/gamma.jpg'
import deepscan from '../../public/deepscan.png'
import leanboard from '../../public/leanboard.jpg'
import ocd from '../../public/ocd.jpg'

const index = () => {
  return (
    <div className='bg-[#10182F] h-screen flex justify-center items-center'>
        <div className='bg-white h-4/5 w-10/12 rounded-md'>
            <div className='text-center py-6'>
                <h1 className='text-base font-bold' >Recently added</h1>
                <p className='text-xs'>The latest tools that help you and your team
                    building software better,together.
                </p>
            </div>
            <div className='grid grid-cols-2 p-16 gap-8'>
                <div className='flex items-center lg:w-4/6 gap-4'>
                    <Image src={instabug} alt='instabug' className='w-10 h-10 rounded-full'/>
                    <div>     
                    <h2 className='text-sm font-semibold'>Instabug</h2>
                    <p className='text-xs'>The top apps in the world rely on instabug for bug
                        reporting, crash reporting, and in-app user 
                        feedback.
                    </p>
                    </div>  
                </div>

                <div className='flex items-center lg:w-4/6 gap-4'>
                    <Image src={deepscan} alt='deepscan' className='w-10 h-10 rounded-full'/>
                    <div>
                    <h2 className='text-sm font-semibold'>DeepScan</h2>
                    <p className='text-xs'>DeepScan is an advanced static analysis tools
                        engineered to support JavaScript, TypeSCRIPT,
                        React, and Vue.js.
                    </p>
                    </div>
                </div>

                <div className='flex items-center lg:w-4/6 gap-4'>
                    <Image src={octobox} alt='octobox' className='w-10 h-10 rounded-full'/>
                    <div>
                    <h2 className='text-sm font-semibold'>Octobox</h2>
                    <p className='text-xs'>Octobox helps you manage your notifications in 
                        the same way Gmail helps you manage your 
                        email.
                    </p>
                    </div>
                   
                </div>

                <div className='flex items-center lg:w-4/6 gap-4'>
                    <Image src={leanboard} alt='leanboard' className='w-10 h-10 rounded-full'/>
                    <div>
                    <h2 className='text-sm font-semibold'>LeanBoard</h2>
                    <p className='text-xs'>Lean Board is a collaborative whiteboard with
                         sticky notes which seamlessly connects with your
                         GitHub issue.</p>
                    </div>
                </div>

                <div className='flex items-center lg:w-4/6 gap-4'>
                    <Image src={gamma} alt='gamma' className='w-10 h-10 rounded-full'/>
                    <div>
                    <h2 className='text-sm font-semibold'>Gammma Data Leak Prevention</h2>
                    <p className='text-xs'>69% of data branches start with negligence. one
                        negligent employee could cost your company a 
                        decade worth of reputataion.
                    </p>
                    </div>
                    
                </div>
               
                
                <div className='flex items-center lg:w-4/6 gap-4'>
                    <Image src={ocd} alt='ocd' className='w-10 h-10 rounded-full'/>
                    <div>
                    <h2 className='text-sm font-semibold'>ODIN</h2>
                    <p className='text-xs'>The top apps in the world relay on Instabug for bug
                        reporting, crash reporting, and in-app user 
                        feedback.
                    </p>
                    </div>
                </div>

            </div>
            <div className='text-center'>
                <button className='px-6 py-2 bg-black text-white text-xs font-semibold'>View all</button>
            </div>
        </div>
    </div>
  )
}

export default index