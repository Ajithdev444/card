import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import movie from '../../public/movie.jpg'

const index = () => {
  return (
    <div className='min-h-screen bg-[#F5F6FA] flex justify-center items-center'>
        <div className='max-w-7xl bg-[#FFFFF]'>
            <div>
                <h1>Star Wars:The Last Jedi</h1>
                <Link href="/movies">Action & Adventure</Link>
                <div>7.4/10</div>
            </div>

            <div className='flex'>
                <Image src={movie} alt='movie' className='w-36 h-60'/>
                <div>
                <h2>About the Movie</h2>
                <p>In Lucasfilm's Star Wars:The Last jedi, the Skywalker saga
                    continues as the heros of The Force Awakens join the galactic
                    legands in an epic adventure that unlocks new mysteries of the
                    Force and shocking revelations of the past.
                </p>   
                <div>

                </div>
                <div className='flex'>
                <div className='flex flex-col'>
                <h2>Actors</h2> 
                <Link href='#'>Oscar Isaac</Link>
                <Link href='#'>Mark Hamil</Link>
                <Link href='#'>Daisy Ridley</Link>
                <Link href='#'>John Boyega</Link>
                <Link href='#'>Kelly Marie Tran</Link>
                </div>
                <div className=''>
                    <h2>Director</h2>
                    <Link href='#'>Rian Johnson</Link>
                    <div className=''>
                    <h2>Screenwriter</h2>
                    <Link href='#'>Rian Johnson</Link>
                </div>
                </div>
                <div className='flex flex-col'>
                    <h2>Producers</h2>
                    <Link href='#'>Kathleen Kennedy</Link>
                    <Link href='#'>Ram Bergman</Link>
                </div> 
                </div>
                <div className=''>
                <button>More</button>
                </div>
                </div>
               
                
                

            </div>
            <div>
            </div>

            <div className='flex'>
                <div>$19.00</div>
                <button>Buy</button>
                <button>WATCH TRAILER</button>
                
            </div>

        </div>
    </div>
  )
}

export default index