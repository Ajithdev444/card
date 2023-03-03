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
import man from '../../public/man1.jpg'
import share from '../../public/share.png'
import pencil from '../../public/pencil.png'
import alarm from '../../public/alarm.png'
import dots from '../../public/dots.png'


const index = () => {
  return (
    <div className='min-h-screen bg-[#1C2333] flex justify-center p-20'>

       <div className='bg-white max-w-5xl'>
        <div className='relative'>
                    <div className='w-16 h-80 bg-gray-400 absolute left-full top-0 right-0'>
                        <Image src={dots} alt='dots' className='w-10 h-10 mb-10 mt-10 ml-2'/>
                        <Image src={alarm} alt='alarm' className='w-6 h-6 mb-10 ml-4'/>
                        <Image src={pencil} alt='pencil' className='w-6 h-6 mb-10 ml-4'/>
                        <Image src={share} alt='share' className='w-6 h-6 mb-10 ml-4'/>
                    </div>
        </div> 
            <div className='flex p-12'>
            <div className='w-1/4 relative'>
                <Image src={photo} alt='photo' className='h-full object-cover absolute'/>
            </div>
            <div className='flex flex-col w-3/4 p-10'>
                <div className='flex'>
                <div className='pr-32'>
                    <h1 className='text-xl font-bold'>Joan Doe</h1>
                    
                    <h3 className='text-gray-400 text-xs'>Photography</h3>
                    <Link href='#' className='text-gray-400 text-xs'>Timisora, RO</Link>
                </div>
                <div className='w-0.5 h-full bg-gray-200'></div>
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
                <div className='w-0.5 h-full bg-gray-200'></div>  
                <div className='justify-end'>
                    <button className='px-8 py-2 bg-[#FBB800] text-white'>Follow</button>
                </div>
                
                </div>
                <div className='h-0.5 bg-gray-200'></div>
                <div className='flex mt-4'>
                <div className=' max-w-sm'>
                <h2 className='mb-4 text-xl font-bold'>About me</h2>
                <p className='text-gray-400 text-xs'>Dolor sit amet,utamur efficiantur ius cu, ludus eligendi adipisci
                    ex usu, per ne putent regione philosophia, Saperet civibus
                    quaerendum usu ex, ut alii habeo utroque qui.
                </p>
                <p className='text-gray-400 text-xs mt-5'>Et inermis quaestio elaboraret pro.Habeo corrumpit assueverit
                    per at. Justo ad has, solet definitiones ad mel.
                </p>
                
                </div>
                <div className='px-20'>
                    <h2 className='mb-4 text-xl font-bold'>Skills</h2>
                    <div className='relative'>
                    <h3 className='text-xs text-gray-600 leading-6'>Equipment</h3>
                    <div className='w-14 h-1 bg-black absolute bottom-0'></div>
                    <div className='rounded-full bg-black absolute w-3 h-3 right-4 top-5'></div>
                    <div className='w-20 h-1 bg-gray-300 '></div>

                    </div>

                    <div className='relative'>
                    <h3 className='text-xs text-gray-600 leading-6'>Editing</h3>
                    <div className='w-14 h-1 bg-black absolute bottom-0'></div>
                    <div className='rounded-full bg-black absolute w-3 h-3 right-4 top-5'></div>
                    <div className='w-20 h-1 bg-gray-300 '></div>

                    </div>
                    <div className='relative'>
                    <h3 className='text-xs text-gray-600 leading-6'>Marketing</h3>
                    <div className='w-10 h-1 bg-black absolute bottom-0'></div>
                    <div className='rounded-full bg-black absolute w-3 h-3 right-7 top-5'></div>
                    <div className='w-20 h-1 bg-gray-300 '></div>

                    </div>
                    <div className='relative'>
                    <h3 className='text-xs text-gray-600 leading-6'>Retouching</h3>
                    <div className='w-8 h-1 bg-black absolute bottom-0'></div>
                    <div className='rounded-full bg-black absolute w-3 h-3 right-9 top-5'></div>
                    <div className='w-20 h-1 bg-gray-300 '></div>
                    </div>  
                </div> 
                </div>
           </div>
            </div>            
            
            <div className='ml-12'>
                <h2 className='text-xl font-bold'>Pictures</h2>
            </div>
            <div className='gap-4 grid-cols-1 grid md:grid-cols-4 bg-white md:grid-rows-2 grid-flow-row-dense p-12 '>
                <div className='relative'>
                <Image src={bike} alt='bike' className='col-span-1 row-span-1 object-cover h-full'/>
                <div className='relative bg-black'>
                <div className='absolute left-0 bg-black bottom-0 text-white p-2 '>❤️12 Likes</div>
                </div>
                </div>

                <div className='relative'>
                <Image src={langosta} alt='langosta' className='col-span-1 row-span-1 w-full object-cover h-full'/>
                <div className='relative bg-black'>
                <div className='absolute left-0 bg-black bottom-0 text-white p-2 '>❤️9 Likes</div>
                </div>
                </div>

                <div className='relative'>
                <Image src={female} alt='female' className='col-span-1 object-cover h-full'/>
                <div className='relative bg-black'>
                <div className='absolute left-0 bg-black bottom-0 text-white p-2 '>❤️43 Likes</div>
                </div>
                </div>

                <div className='relative'>
                <Image src={flower} alt='flower' className='col-span-1 row-span-1 object-cover h-full'/>
                <div className='relative bg-black'>
                <div className='absolute left-0 bg-black bottom-0 text-white p-2 '>❤️24 Likes</div>
                </div>
                </div>

                <div className='relative'>
                <Image src={girl} alt='girl' className='col-span-1 object-cover h-full'/>
                <div className='relative bg-black'>
                <div className='absolute left-0 bg-black bottom-0 text-white p-2 '>❤️62 Likes</div>
                </div>
                </div>

                <div className='relative'>
                <Image src={kid} alt='kid' className='col-span-1 object-cover h-full'/>
                <div className='relative bg-black'>
                <div className='absolute left-0 bg-black bottom-0 text-white p-2 '>❤️78 Likes</div>
                </div>
                </div>
               
                <div className='relative'>
                <Image src={coffe} alt='coffe' className='col-span-1 object-cover h-full'/>
                <div className='relative bg-black'>
                <div className='absolute left-0 bg-black bottom-0 text-white p-2 '>❤️36 Likes</div>
                </div>
                </div>

                <div className='relative'>
                <Image src={man} alt='man' className='col-span-1 object-cover h-full'/>
                <div className='relative bg-black'>
                <div className='absolute left-0 bg-black bottom-0 text-white p-2 '>❤️98 Likes</div>
                </div>
                </div>
                
                
            </div>
            <div className='flex justify-end mr-4'>
                <button className='px-4 py-2 bg-gray-200 text-sm'>Load more</button>
            </div> 
     
        </div>
               
    </div>
  )
}
export default index