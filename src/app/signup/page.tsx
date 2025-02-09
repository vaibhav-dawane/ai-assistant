'use client'
import { ArrowLeftToLine } from 'lucide-react';
import Link from 'next/link';
import React, { useRef } from 'react';

const page = () => {

    const checkRef = useRef<HTMLInputElement>(null);
        const checkRememberMe = () => {
            if (checkRef.current) {
                checkRef.current.checked = !checkRef.current.checked;
            }
        }

    return (
        <div className='w-full h-[100vh]'>
            <div className='h-1/6 p-8'>
                <Link href='/'>
                    <div className='cursor-pointer hover:bg-gray-100 p-2 inline-block rounded-full'>
                        <ArrowLeftToLine size={32}/>
                    </div>
                </Link>
            </div>
            <div className='flex justify-center items-center select-none'>
                <div className='w-[400px] h-[380px] shadow-xl rounded-md'>
                    <h1 className='flex justify-center mt-6 font-extrabold text-xl'>Sign Up</h1>
                    <div className='mt-2 mx-6'>
                        <div className='grid gap-1 mt-2'>
                            <label htmlFor="email" className='text-gray-500'>Name</label>
                            <input type="text" placeholder='John Carter' className='border rounded-md h-10 px-3 outline-none' />
                        </div>
                        <div className='grid gap-1 mt-2'>
                            <label htmlFor="email" className='text-gray-500'>Email</label>
                            <input type="text" placeholder='Your@email.com' className='border rounded-md h-10 px-3 outline-none' />
                        </div>
                        <div className='grid gap-1 mt-2'>
                            <label htmlFor="password" className='text-gray-500'>Password</label>
                            <input type="password" placeholder='*******' className='border rounded-md h-10 px-3 outline-none' />
                        </div>
                    </div>

                    <div className='mt-3 flex justify-between mx-6'>
                        <div className='flex gap-x-1 items-center' onClick={checkRememberMe}>
                            <input ref={checkRef} type="checkbox" name="rememberme" id="" />
                            <label className='cursor-pointer'>Remember me</label>
                        </div>
                    </div>

                    <div className='flex justify-center mt-3'>
                        <button className='mx-6 w-full py-1 rounded-md bg-blue-700 text-white font-medium'>Sign up</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default page
