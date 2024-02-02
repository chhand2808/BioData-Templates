import React from 'react'
import Image from 'next/image'
import avatar from '@/public/assets/avatar1.png'

export default function () {
  return (
    <div className='cust-class1 w-full'>
        <div className="header text-center justify-center align-middle items-center mt-16 text-[#ecd08e]">
        <h1 className='font-extrabold'>BIODATA</h1>
        <Image
        src={avatar}
        width={100}
        height={100}
        className='rounded-full mx-auto mt-3'
        />
      </div>

      <form action="#" method="post" className="info-form max-w-full my-5 px-8">
        <div className='flex flex-col w-full text-[#ecd08e] text-[10px]'>
            <div className='flex flex-row w-full'>
                <div className='flex flex-col w-[50%]'>
                    <h1 className='mb-2 font-extrabold'>Personal Details</h1>
                    <div className="flex flex-row">
                        <label>Name:</label>
                        <input className='w-[60%] bg-transparent ml-2' type="text" id="name" name="name" required/>
                    </div>
                    <div className="flex flex-row">
                        <label>Date of birth:</label>
                        <input className='w-[40%] bg-transparent ml-2 text-[#ecd08e]' type="text" id="dob" name="dob" required/>
                    </div>
                    <div className="flex flex-row">
                        <label>Place of birth:</label>
                        <input className='w-[40%] bg-transparent ml-2' type="text" id="name" name="name" required/>
                    </div>
                    <div className="flex flex-row">
                        <label>Rashi:</label>
                        <input className='w-[50%] bg-transparent ml-2' type="text" id="name" name="name" required/>
                    </div>
                    <div className="flex flex-row">
                        <label>Nakshatra:</label>
                        <input className='w-[50%] bg-transparent ml-2' type="text" id="name" name="name" required/>
                    </div>
                    <div className="flex flex-row">
                        <label>Education:</label>
                        <input className='w-[50%] bg-transparent ml-2' type="text" id="name" name="name" required/>
                    </div>
                    <div className="flex flex-row">
                        <label>Occupation:</label>
                        <input className='w-[50%] bg-transparent ml-2' type="text" id="name" name="name" required/>
                    </div>
                </div>
                <div className='flex flex-col w-[50%] pl-1'>
                    <h1 className='mb-2 font-extrabold'>Family Details</h1>
                    <div className="flex flex-row">
                        <label>Father's name:</label>
                        <input className='w-[40%] bg-transparent ml-2' type="text" id="name" name="name" required/>
                    </div>
                    <div className="flex flex-row">
                        <label>Father's job:</label>
                        <input className='w-[40%] bg-transparent ml-2' type="text" id="name" name="name" required/>
                    </div>
                    <div className="flex flex-row">
                        <label>Mother's name:</label>
                        <input className='w-[40%] bg-transparent ml-2' type="text" id="name" name="name" required/>
                    </div>
                    <div className="flex flex-row">
                        <label>Mother's job:</label>
                        <input className='w-[40%] bg-transparent ml-2' type="text" id="name" name="name" required/>
                    </div>
                    <div className="flex flex-row">
                        <label>Brother's name:</label>
                        <input className='w-[40%] bg-transparent ml-2' type="text" id="name" name="name" required/>
                    </div>
                    <div className="flex flex-row">
                        <label>Brother's job:</label>
                        <input className='w-[40%] bg-transparent ml-2' type="text" id="name" name="name" required/>
                    </div>
                    <div className="flex flex-row">
                        <label>Sister's name:</label>
                        <input className='w-[40%] bg-transparent ml-2' type="text" id="name" name="name" required/>
                    </div>
                    <div className="flex flex-row">
                        <label>Sister's job:</label>
                        <input className='w-[40%] bg-transparent ml-2' type="text" id="name" name="name" required/>
                    </div>
                </div>
            </div>
                <div className='flex flex-col mt-4'>
                    <h1 className='mb-4 font-extrabold'>Contact Details</h1>
                    <div className='flex flex-row'>
                        <label>Contact Number:</label>
                        <input className='ml-2 bg-transparent' type="tel" id="contactNumber" name="contactNumber" required/>
                    </div>
                    <div className="flex flex-row">
                        <label className='mt-2'>Contact Address:</label>
                        <textarea className='ml-2 mt-2 bg-transparent' id="contactAddress" name="contactAddress" rows="4" required></textarea>
                    </div>
                </div>
        </div>
      </form>
    </div>
  )
}
