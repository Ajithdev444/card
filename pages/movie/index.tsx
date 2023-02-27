import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import movie from '../../public/movie.jpg'

const index = () => {
  return (
    <div className='min-h-screen bg-[#F6F8FC] flex justify-center items-center p-20'>
        <div className='max-w-5xl bg-[#FFF] p-20 shadow-2xl'>
            <div className='grid justify-items-stretch mb-4'>
                <h1 className='text-2xl font-bold'>Star Wars: The Last Jedi</h1>
                <div className='inline'>
                <Link href="#" className='text-blue-700'>Action & Adventure</Link>
                <span className='text-blue-700 font-bold flex justify-end'>7.4<span className='text-gray-400 font-normal'> / 10</span></span>
               
               

                </div>
               
            </div>

            <div className='flex'>
                <Image src={movie} alt='movie' className='w-60 h-96'/>
                <div className='ml-10'>
                <h2 className='text-xl font-bold mb-2'>About the Movie</h2>
                <p className='text-lg'>In Lucasfilm's Star Wars: The Last jedi, the Skywalker saga
                    continues as the heros of The Force Awakens join the galactic
                    legands in an epic adventure that unlocks new mysteries of the
                    Force and shocking revelations of the past.
                </p>   
                <div>

                </div>
                <div className='flex mt-10 gap-14'>
                <div className='flex flex-col'>
                <h2 className='text-xl font-bold pb-2'>Actors</h2> 
                <Link className='text-md text-blue-700' href='#'>Oscar Isaac</Link>
                <Link className='text-md text-blue-700' href='#'>Mark Hamil</Link>
                <Link className='text-md text-blue-700' href='#'>Daisy Ridley</Link>
                <Link className='text-md text-blue-700' href='#'>John Boyega</Link>
                <Link className='text-md text-blue-700' href='#'>Kelly Marie Tran</Link>
                </div>
                <div className=''>
                    <h2 className='text-xl font-bold pb-2'>Director</h2>
                    <Link className='text-md text-blue-700' href='#'>Rian Johnson</Link>
                    <div className='mt-6'>
                    <h2 className='text-xl font-bold pb-2'>Screenwriter</h2>
                    <Link className='text-md text-blue-700' href='#'>Rian Johnson</Link>
                </div>
                </div>
                <div className='flex flex-col'>
                    <h2 className='text-xl font-bold pb-2'>Producers</h2>
                    <Link className='text-md text-blue-700' href='#'>Kathleen Kennedy</Link>
                    <Link className='text-md text-blue-700' href='#'>Ram Bergman</Link>
                </div> 
                </div>
                <div className=''>
                <button className='text-lg text-blue-700 underline font-bold pt-4'>More</button>
                </div>
                </div>
               
                
                

            </div>
            <div>
            </div>

            <div className='flex mt-6'>
                <div className='text-xl font-bold'>$19.00</div>
                <button className='text-sm rounded-full border-[2px] border-black px-6 py-1 font-bold ml-20'>BUY</button>
                <button className='text-sm rounded-full bg-black px-6 py-1 text-white ml-96'>WATCH TRAILER</button> 
            </div>
        </div>
    </div>
  )
}

export default index