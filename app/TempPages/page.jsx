"use client"

import React , {useState} from 'react'
import Image from 'next/image'
import P1 from '@/public/assets/1.png'
import P2 from '@/public/assets/2.png'
import P3 from '@/public/assets/3.png'
import P4 from '@/public/assets/4.png'
import P5 from '@/public/assets/5.png'
import P6 from '@/public/assets/6.png'
import P7 from '@/public/assets/7.png'
import P8 from '@/public/assets/8.png'
import P9 from '@/public/assets/9.png'
import P10 from '@/public/assets/10.png'
import P11 from '@/public/assets/11.png'
import P12 from '@/public/assets/12.png'
import P13 from '@/public/assets/13.png'
import P14 from '@/public/assets/14.png'
import P15 from '@/public/assets/15.png'
import Page1 from '@/components/Page1'
import Page2 from '@/components/Page2'
import Page3 from '@/components/Page3'
import Page4 from '@/components/Page4'
import Page5 from '@/components/Page5'
import Page6 from '@/components/Page6'
import Page7 from '@/components/Page7'
import Page8 from '@/components/Page8'
import Page9 from '@/components/Page9'
import Page10 from '@/components/Page10'
import Page11 from '@/components/Page11'
import Page12 from '@/components/Page12'
import Page13 from '@/components/Page13'
import Page14 from '@/components/Page14'
import Page15 from '@/components/Page15'

export default function () {
    
    const [currentPage, setCurrentPage] = useState('page1'); // Default to page1

    const handleImageClick = (page) => {
      setCurrentPage(page);
    };
  return (
    <div className="flex flex-row xl:flex-col-reverse justify-center">
        <div className='md:flex flex-col xl:flex-row md:px-10 hidden md:w-[25%] xl:w-[100%] h-full justify-center align-middle items-center'>
            <div className="overflow-y-auto">
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
            <div className='flex w-14 h-20 my-5 mx-2 md:m-5 hover:shadow-xl shadow-slate-800' 
            onClick={() => handleImageClick('page6')}>
                <Image
                src={P6}
                />
            </div>
            <div className='flex w-14 h-20 my-5 mx-2 md:m-5 hover:shadow-xl shadow-slate-800' 
            onClick={() => handleImageClick('page7')}>
            <Image
                src={P7}
                />
            </div>
            <div className='flex w-14 h-20 my-5 mx-2 md:m-5 hover:shadow-xl shadow-slate-800' 
            onClick={() => handleImageClick('page8')}>
            <Image
                src={P8}
                />
            </div>
            <div className='flex w-14 h-20 my-5 mx-2 md:m-5 hover:shadow-xl shadow-slate-800' 
            onClick={() => handleImageClick('page9')}>
            <Image
                src={P9}
                />
            </div>
            <div className='flex w-14 h-20 my-5 mx-2 md:m-5 hover:shadow-xl shadow-slate-800' 
            onClick={() => handleImageClick('page10')}>
            <Image
                src={P10}
                />
            </div> 
            <div className='flex w-14 h-20 my-5 mx-2 md:m-5 hover:shadow-xl shadow-slate-800' 
            onClick={() => handleImageClick('page11')}>
                <Image
                src={P11}
                />
            </div>
            <div className='flex w-14 h-20 my-5 mx-2 md:m-5 hover:shadow-xl shadow-slate-800' 
            onClick={() => handleImageClick('page12')}>
            <Image
                src={P12}
                />
            </div>
            <div className='flex w-14 h-20 my-5 mx-2 md:m-5 hover:shadow-xl shadow-slate-800' 
            onClick={() => handleImageClick('page13')}>
            <Image
                src={P13}
                />
            </div>
            <div className='flex w-14 h-20 my-5 mx-2 md:m-5 hover:shadow-xl shadow-slate-800' 
            onClick={() => handleImageClick('page14')}>
            <Image
                src={P14}
                />
            </div>
            <div className='flex w-14 h-20 my-5 mx-2 md:m-5 hover:shadow-xl shadow-slate-800' 
            onClick={() => handleImageClick('page15')}>
            <Image
                src={P15}
                />
            </div>
            </div>
        </div>
        <div className='flex sticky top-0 mt-20 md:mt-0 w-[90%] md:w-[75%] h-full md:p-12 justify-center border border-y-0 border-l-2 xl:border-0 border-slate-900/20'>
            <div className='flex flex-col gap-y-5 md:w-[45%] h-[80vh] md:h-[520px]'>
            {currentPage === 'page1' && <Page1 />}
            {currentPage === 'page2' && <Page2 />}
            {currentPage === 'page3' && <Page3 />}
            {currentPage === 'page4' && <Page4 />}
            {currentPage === 'page5' && <Page5 />}
            {currentPage === 'page6' && <Page6 />}
            {currentPage === 'page7' && <Page7 />}
            {currentPage === 'page8' && <Page8 />}
            {currentPage === 'page9' && <Page9 />}
            {currentPage === 'page10' && <Page10 />}
            {currentPage === 'page11' && <Page11 />}
            {currentPage === 'page12' && <Page12 />}
            {currentPage === 'page13' && <Page13 />}
            {currentPage === 'page14' && <Page14 />}
            {currentPage === 'page15' && <Page15 />}
            </div>
        </div>
    </div>
  )
}
