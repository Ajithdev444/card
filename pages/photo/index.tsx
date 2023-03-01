import React from 'react'
import Image from 'next/image'
import movie from '../../public/movie.jpg'
import Link from 'next/link'

const index = () => {
  return (
    <div className='min-h-screen bg-[#1C2333] mx-auto flex items-center justify-center'>
        <div className='bg-white max-w-5xl flex flex-row'>
            <div>
                <Image src={movie} alt='photo' className='h-48 w-32'/>
            </div>
            <div>
                <div className=''>
                    <h1>Joan Doe</h1>
                    <h3>Photography</h3>
                    <Link href='#'>Timisora, RO</Link>
                </div>
                <div className='flex-row flex'>
                    <div>127</div>
                    <div>354</div>
                    <div>470</div>
                </div>
                <div className='flex-row flex'>
                    <button>Follow</button>

                </div>
            </div>

            <div>
                <div>
                <h2>About me</h2>
                <p>Dolor sit amet,utamur efficiantur ius cu, ludus eligendi adipisci
                    ex usu, per ne putent regione philosophia, Saperet civibus
                    quaerendum usu ex, ut alii habeo utroque qui.
                </p>
                <p>Et inermis quaestio elaboraret pro.Habeo corrumpit assueverit
                    per at. Justo ad has, solet definitiones ad mel.
                </p>

                </div>

                <div>
                    <h2>Skills</h2>
                    <h3>Equipment</h3>
                    <h3>Editing</h3>
                    <h3>Marketing</h3>
                    <h3>Retouching</h3>
                </div>  
            </div>
            <div>
        
            </div>
        </div>
    </div>
  )
}

export default index