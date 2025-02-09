'use client'
import { ArrowLeftToLine } from 'lucide-react';
import Link from 'next/link';
import React, { useRef } from 'react';

const SignIn = () => {

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
                <div className='w-[400px] h-[350px] shadow-xl rounded-md'>
                    <h1 className='flex justify-center mt-10 font-extrabold text-lg sm:text-xl'>Sign In</h1>
                    <div className='mt-2 mx-6'>
                        <div className='grid gap-1'>
                            <label htmlFor="email" className='text-gray-500'>Email</label>
                            <input type="text" placeholder='Your@email.com' className='border rounded-md h-10 px-3 outline-none' />
                        </div>
                        <div className='mt-3 grid gap-1'>
                            <label htmlFor="password" className='text-gray-500'>Password</label>
                            <input type="password" placeholder='*******' className='border rounded-md h-10 px-3 outline-none' />
                        </div>
                    </div>

                    <div className='mt-2 flex justify-between mx-4 sm:mx-6'>
                        <div className='flex gap-x-1 items-center' onClick={checkRememberMe}>
                            <input ref={checkRef} type="checkbox" name="rememberme" id="" />
                            <label className=''>Remember me</label>
                        </div>
                        <p className='cursor-pointer'>Forgot password?</p>
                    </div>
                    
                    <div className='flex justify-center mt-2'>
                        <button className='mx-6 w-full py-1 rounded-md bg-blue-700 text-white font-medium'>Sign In</button>
                    </div>
                    
                    <div className='flex justify-center mt-3 tracking-wider'>
                        Don&apos;t have an account? 
                        <Link href='/signup' prefetch>
                            <span className='text-blue-700 ml-2 cursor-pointer select-none hover:underline font-medium'>Sign up</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default SignIn
