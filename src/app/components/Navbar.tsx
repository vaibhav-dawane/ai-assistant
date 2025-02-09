import React from 'react';
import { LogIn, Sparkles } from 'lucide-react';
import Link from 'next/link';

const Navbar = () => {
    return (
        <div className='bg-white/70 shadow drop-shadow-sm fixed z-50 backdrop-blur-md w-full'>
            <div className='flex flex-wrap items-center justify-between py-4 px-4 sm:px-8 lg:mx-16'>
                <div className='flex items-center gap-1 text-blue-800 font-semibold text-lg'>
                    <Sparkles className='animate-pulse' color='#2c5282' size={18} strokeWidth={1.75}/>
                    AI Writer
                </div>
                <Link href='/signin' prefetch>
                    <div className='flex items-center gap-2 font-semibold text-sm sm:text-base text-white bg-blue-600 p-2 px-4 rounded-md hover:cursor-pointer hover:bg-blue-700 transition duration-300 select-none' aria-label="Sign In">
                        <LogIn size={16}/>
                        Sign In
                    </div>
                </Link>
            </div>
        </div>
    );
}
export default Navbar