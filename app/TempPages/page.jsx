"use client"

import React , {useState} from 'react'
import Image from 'next/image'
import P1 from '@/public/assets/11.png'
import P2 from '@/public/assets/12.png'
import P3 from '@/public/assets/13.png'
import P4 from '@/public/assets/14.png'
import P5 from '@/public/assets/15.png'
import Page1 from '@/components/Page1'
import Page2 from '@/components/Page2'
import Page3 from '@/components/Page3'
import Page4 from '@/components/Page4'
import Page5 from '@/components/Page5'

export default function () {
    
    const [currentPage, setCurrentPage] = useState('page1'); // Default to page1

    const handleImageClick = (page) => {
      setCurrentPage(page);
    };
  return (
    <div className="flex flex-row justify-center align-middle items-center">
        <div className='md:flex flex-col md:px-10 py-2 hidden md:w-[25%] h-full justify-center align-middle items-center'>
            <div className='flex w-14 h-20 my-5 mx-2 md:m-5 hover:shadow-xl shadow-slate-800' 
            onClick={() => handleImageClick('page1')}>
                <Image
                src={P1}
                />
            </div>
            <div className='flex w-14 h-20 my-5 mx-2 md:m-5 hover:shadow-xl shadow-slate-800' 
            onClick={() => handleImageClick('page2')}>
            <Image
                src={P2}
                />
            </div>
            <div className='flex w-14 h-20 my-5 mx-2 md:m-5 hover:shadow-xl shadow-slate-800' 
            onClick={() => handleImageClick('page3')}>
            <Image
                src={P3}
                />
            </div>
            <div className='flex w-14 h-20 my-5 mx-2 md:m-5 hover:shadow-xl shadow-slate-800' 
            onClick={() => handleImageClick('page4')}>
            <Image
                src={P4}
                />
            </div>
            <div className='flex w-14 h-20 my-5 mx-2 md:m-5 hover:shadow-xl shadow-slate-800' 
            onClick={() => handleImageClick('page5')}>
            <Image
                src={P5}
                />
            </div>
        </div>
        <div className='flex mt-20 md:mt-0 w-[90%] md:w-[75%] h-full md:p-12 justify-center border border-y-0 border-l-2 border-slate-900/20'>
            <div className='flex flex-col gap-y-5 md:w-[45%] h-[80vh] md:h-[520px]'>
            {currentPage === 'page1' && <Page1 />}
            {currentPage === 'page2' && <Page2 />}
            {currentPage === 'page3' && <Page3 />}
            {currentPage === 'page4' && <Page4 />}
            {currentPage === 'page5' && <Page5 />}
            </div>
        </div>
    </div>
  )
}
