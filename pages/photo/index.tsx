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

       <div className='bg-white max-w-5xl relative'>
       
                    <div className='w-16 h-72 bg-gray-400 absolute left-full top-0 right-0'>
                        <Image src={dots} alt='dots' className='w-10 h-10 mb-10 mt-4 ml-2'/>
                        <Image src={alarm} alt='alarm' className='w-6 h-6 mb-10 ml-4'/>
                        <Image src={pencil} alt='pencil' className='w-6 h-6 mb-10 ml-4'/>
                        <Image src={share} alt='share' className='w-6 h-6 mb-10 ml-4'/>
                    
        </div> 
            <div className='flex px-12'>
            <div className='w-1/4 relative'>
                <Image src={photo} alt='photo' className='h-full object-cover absolute'/>
            </div>
            <div className='flex flex-col w-3/4 px-10'>
                <div className='flex border-b-2 p-4'>
                <div className='w-full border-r-2'>
                    <h1 className='text-xl font-bold'>Joan Doe</h1>
                    
                    <h3 className='text-gray-400 text-xs'>Photography</h3>
                    <Link href='#' className='text-gray-400 text-xs'>Timisora, RO</Link>
                </div>
                
                <div className='flex gap-x-10 justify-end items-end w-full border-r-2 px-4'>
                    <div>
                        <Image src={gallery} alt='gallery' className='w-6 h-6 ml-2'/>
                        <div className='text-2xl font-bold'>127</div>
                    </div>
                    <div>
                        <Image src={heart} alt='png' className='w-6 h-6 ml-2'/>
                        <div  className='text-2xl font-bold'>354</div>
                    </div>
                    <div>
                        <Image src={user} alt='user' className='w-6 h-6 ml-2'/>
                        <div  className='text-2xl font-bold'>470</div>
                    </div>
                </div>
                  
                <div className='flex justify-center w-full'>
                    <button className='px-10 py-2 bg-[#FBB800] text-white'>Follow</button>
                </div>
                
                </div>
        
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
                    <div className='flex'>
                    <h3 className='text-xs text-gray-600 leading-6'>Equipment</h3>
                    <div className='relative p-3'>
                    <div className='w-14 h-1 bg-black absolute'></div>
                    <div className='rounded-full bg-black absolute w-3 h-3 right-8 bottom-2 '></div>
                    <div className='w-20 h-1 bg-gray-300'></div>
                    </div>
                    </div>

                    <div className='flex'>
                    <h3 className='text-xs text-gray-600 leading-6'>Editing</h3>
                    <div className='relative p-3'>
                    <div className='w-14 h-1 bg-black absolute'></div>
                    <div className='rounded-full bg-black absolute w-3 h-3 right-8 bottom-2'></div>
                    <div className='w-20 h-1 bg-gray-300 '></div>
                    </div>
                    </div>

                    <div className='flex'>
                    <h3 className='text-xs text-gray-600 leading-6'>Marketing</h3>
                    <div className='relative p-3'>
                    <div className='w-10 h-1 bg-black absolute'></div>
                    <div className='rounded-full bg-black absolute w-3 h-3 right-10 bottom-2'></div>
                    <div className='w-20 h-1 bg-gray-300 '></div>
                    </div>
                    

                    </div>
                    <div className='flex'>
                    <h3 className='text-xs text-gray-600 leading-6'>Retouching</h3>
                    <div className='relative p-3'>
                    <div className='w-8 h-1 bg-black absolute'></div>
                    <div className='rounded-full bg-black absolute w-3 h-3 right-12 bottom-2'></div>
                    <div className='w-20 h-1 bg-gray-300 '></div>

                    </div>
                    
                    </div>  
                </div> 
                </div>
           </div>
            </div>            
            
            <div className='ml-12 mt-4'>
                <h2 className='text-xl font-bold'>Pictures</h2>
            </div>
            <div className='gap-4 grid-cols-1 grid md:grid-cols-7 bg-white md:grid-rows-4 grid-flow-row-dense px-12 py-2 '>
                <div className='relative col-span-2 row-span-2 '>
                <Image src={bike} fill alt='bike' className='object-cover'/>
                <div className='bg-black'>
                <div className='absolute left-0 bg-black bottom-0 text-white p-2 '>❤️12 Likes</div>
                </div>
                </div>

                <div className='relative col-span-3 row-span-1'>
                <Image src={langosta} fill alt='langosta' className='object-cover'/>
                <div className='bg-black'>
                <div className='absolute left-0 bg-black bottom-0 text-white p-2 '>❤️9 Likes</div>
                </div>
                </div>

                <div className='relative col-span-2 row-span-2'>
                <Image src={female} fill alt='female' className='object-cover'/>
                <div className='bg-black'>
                <div className='absolute left-0 bg-black bottom-0 text-white p-2 '>❤️43 Likes</div>
                </div>
                </div>

                <div className='relative col-span-2 row-span-2'>
                <Image src={flower} fill alt='flower' className='object-cover'/>
                <div className='bg-black'>
                <div className='absolute left-0 bg-black bottom-0 text-white p-2 '>❤️24 Likes</div>
                </div>
                </div>

                <div className='relative col-span-1 row-span-2'>
                <Image src={girl} fill alt='girl' className='object-cover'/>
                <div className='bg-black'>
                <div className='absolute left-0 bg-black bottom-0 text-white p-2 '>❤️62 Likes</div>
                </div>
                </div>

                <div className='relative col-span-2 row-span-2'>
                <Image src={kid} fill alt='kid' className='object-cover'/>
                <div className='bg-black'>
                <div className='absolute left-0 bg-black bottom-0 text-white p-2 '>❤️78 Likes</div>
                </div>
                </div>
               
                <div className='relative col-span-2 row-span-2'>
                <Image src={coffe} fill  alt='coffe' className='object-cover'/>
                <div className='bg-black'>
                <div className='absolute left-0 bg-black bottom-0 text-white p-2 '>❤️36 Likes</div>
                </div>
                </div>

                <div className='relative col-span-3 row-span-1'>
                <Image src={man} alt='man' className='object-cover'/>
                <div className='bg-black'>
                <div className='absolute left-0 bg-black bottom-0 text-white p-2 '>❤️98 Likes</div>
                </div>
                </div>
                
                
            </div>
            <div className='flex justify-end px-12 pb-4'>
                <button className='px-4 py-2 bg-gray-200 text-sm'>Load more</button>
            </div> 
     
        </div>
               
    </div>
  )
}
export default index