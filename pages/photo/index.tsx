import React from 'react'
import Image from 'next/image'
import photo from '../../public/photo.jpg'
import Link from 'next/link'
import gallery from '../../public/gallery.png'
import heart from '../../public/heart.png'
import user from '../../public/user.png'
import bike from '../../public/bike.jpg'
import flower from '../../public/flower.jpg'
import langosta from '../../public/langosta.jpg'
import girl from '../../public/girl.jpeg'
import kid from '../../public/kid.png'
import coffe from '../../public/coffe.png'
import female from '../../public/female.jpg'
import man from '../../public/man.jpg'

const index = () => {
  return (
    <div className='min-h-screen bg-[#1C2333] mx-auto flex items-center justify-center p-40'>
        <div className='bg-white max-w-5xl max-h-screen p-10'>
            <div className='flex'>
            <div className='w-1/4'>
                <Image src={photo} alt='photo' className='h-full object-cover'/>
            </div>
            <div className='flex flex-col w-3/4 p-10'>
                <div className='flex'>
                <div className='pr-40'>
                    <h1 className='text-xl font-bold'>Joan Doe</h1>
                    <h3 className='text-gray-400'>Photography</h3>
                    <Link href='#' className='text-gray-400'>Timisora, RO</Link>
                </div>
                <div className='flex gap-x-10 pr-16'>
                    <div>
                        <Image src={gallery} alt='gallery' className='w-10 h-10'/>
                        <div className='text-lg font-bold'>127</div>
                    </div>
                    <div>
                        <Image src={heart} alt='png' className='w-10 h-10'/>
                        <div  className='text-lg font-bold'>354</div>
                    </div>
                    <div>
                        <Image src={user} alt='user' className='w-10 h-10'/>
                        <div  className='text-lg font-bold'>470</div>
                    </div>
                </div>
                <div className=''>
                    <button className='px-8 py-2 bg-[#FBB800] text-white'>Follow</button>
                </div>
                </div>
                <div className='flex mt-4'>
                <div className=' max-w-2xl'>
                <h2 className='mb-4 text-xl font-bold'>About me</h2>
                <p className='text-gray-400'>Dolor sit amet,utamur efficiantur ius cu, ludus eligendi adipisci
                    ex usu, per ne putent regione philosophia, Saperet civibus
                    quaerendum usu ex, ut alii habeo utroque qui.
                </p>
                <p className='text-gray-400'>Et inermis quaestio elaboraret pro.Habeo corrumpit assueverit
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
           </div>

            </div>
            
            <div>
                <h2 className='text-xl font-bold'>Pictures</h2>
            </div>
            <div className='gap-4 grid-cols-1 grid md:grid-cols-4 bg-white md:grid-rows-2 min-h-full grid-flow-row-dense max-w-5xl '>
                <Image src={bike} alt='bike' className='col-span-1 row-span-1 object-cover h-full'/>
                <Image src={langosta} alt='langosta' className='col-span-1 row-span-1 w-full object-cover h-full'/>
                <Image src={female} alt='female' className='col-span-1 object-cover h-full'/>
                <Image src={flower} alt='flower' className='col-span-1 row-span-1 object-cover h-full'/>
               
                <Image src={girl} alt='girl' className='col-span-1 object-cover h-full'/>
                <Image src={kid} alt='kid' className='col-span-1 object-cover h-full'/>
                <Image src={coffe} alt='coffe' className='col-span-1 object-cover h-full'/>
                
                <Image src={man} alt='man' className='col-span-1 object-cover h-full'/>
            </div>
            <div className='flex justify-end'>
                <button className='px-4 py-2 bg-gray-300 font-bold'>Load more</button>
            </div>
            

           
        </div>
        
    </div>
  )
}

export default index