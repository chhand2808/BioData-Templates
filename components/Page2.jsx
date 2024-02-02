import React from 'react'
import Image from 'next/image'
import avatar from '@/public/assets/avatar1.png'

export default function () {
  return (
    <div className='cust-class2 w-full'>
        <div className="header text-center justify-center align-middle items-center mt-8 text-[#DCB786]">
        <h1 className='font-extrabold'>BIODATA</h1>
      </div>

      <form action="#" method="post" className="info-form max-w-full my-5 px-8">
        <div className='flex flex-row w-full text-[#DCB786] text-[10px]'>
            <div className='flex flex-col w-full'>
                <div className='flex flex-col w-full'>
                    <h1 className='mb-2 font-extrabold'>Personal Details</h1>
                    <div className="flex flex-row">
                        <label for="name">Name:</label>
                        <input className='w-[60%] bg-transparent ml-2' type="text" id="name" name="name" required/>
                    </div>
                    <div className="flex flex-row">
                        <label for="name">Date of birth:</label>
                        <input className='w-[50%] bg-transparent ml-2 text-[#DCB786]' type="text" id="dob" name="dob" required/>
                    </div>
                    <div className="flex flex-row">
                        <label for="name">Place of birth:</label>
                        <input className='w-[50%] bg-transparent ml-2' type="text" id="name" name="name" required/>
                    </div>
                    <div className="flex flex-row">
                        <label for="name">Rashi:</label>
                        <input className='w-[50%] bg-transparent ml-2' type="text" id="name" name="name" required/>
                    </div>
                    <div className="flex flex-row">
                        <label for="name">Nakshatra:</label>
                        <input className='w-[50%] bg-transparent ml-2' type="text" id="name" name="name" required/>
                    </div>
                    <div className="flex flex-row">
                        <label for="name">Education:</label>
                        <input className='w-[50%] bg-transparent ml-2' type="text" id="name" name="name" required/>
                    </div>
                    <div className="flex flex-row">
                        <label for="name">Occupation:</label>
                        <input className='w-[50%] bg-transparent ml-2' type="text" id="name" name="name" required/>
                    </div>
                </div>
                <div className='flex flex-col w-full mt-5'>
                    <h1 className='mb-2 font-extrabold'>Family Details</h1>
                    <div className="flex flex-row">
                        <label for="name">Father's name:</label>
                        <input className='w-[50%] bg-transparent ml-2' type="text" id="name" name="name" required/>
                    </div>
                    <div className="flex flex-row">
                        <label for="name">Father's job:</label>
                        <input className='w-[50%] bg-transparent ml-2' type="text" id="name" name="name" required/>
                    </div>
                    <div className="flex flex-row">
                        <label for="name">Mother's name:</label>
                        <input className='w-[50%] bg-transparent ml-2' type="text" id="name" name="name" required/>
                    </div>
                    <div className="flex flex-row">
                        <label for="name">Mother's job:</label>
                        <input className='w-[50%] bg-transparent ml-2' type="text" id="name" name="name" required/>
                    </div>
                    <div className="flex flex-row">
                        <label for="name">Brother's name:</label>
                        <input className='w-[50%] bg-transparent ml-2' type="text" id="name" name="name" required/>
                    </div>
                    <div className="flex flex-row">
                        <label for="name">Brother's job:</label>
                        <input className='w-[50%] bg-transparent ml-2' type="text" id="name" name="name" required/>
                    </div>
                    <div className="flex flex-row">
                        <label for="name">Sister's name:</label>
                        <input className='w-[50%] bg-transparent ml-2' type="text" id="name" name="name" required/>
                    </div>
                    <div className="flex flex-row">
                        <label for="name">Sister's job:</label>
                        <input className='w-[50%] bg-transparent ml-2' type="text" id="name" name="name" required/>
                    </div>
                </div>
                <div className='flex flex-col mt-4'>
                    <h1 className='mb-4 font-extrabold'>Contact Details</h1>
                    <div className='flex flex-row'>
                        <label for="contactNumber">Contact Number:</label>
                        <input className='w-[50%] ml-2 bg-transparent' type="tel" id="contactNumber" name="contactNumber" required/>
                    </div>
                    <div className="flex flex-row">
                        <label className='mt-2' for="contactAddress">Contact Address:</label>
                        <textarea className='w-[50%] ml-2 mt-2 bg-transparent' id="contactAddress" name="contactAddress" rows="4" required></textarea>
                    </div>
                </div>
            </div>
            <div>
            <Image
                src={avatar}
                width={100}
                height={100}
                className='rounded-full mr-20'
                />
            </div>
        </div>
      </form>
    </div>
  )
}
