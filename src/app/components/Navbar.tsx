import React from 'react';
import { LogIn, Sparkles } from 'lucide-react';

const Navbar = () => {
    return (
        <div className='pb-4 bg-white/70 shadow drop-shadow-sm fixed z-50 backdrop-blur-md w-full'>
            <div className='flex justify-between mt-4 mx-16'>
                <div className='flex items-center gap-1 text-blue-800 font-semibold'>
                    <Sparkles className='animate-pulse' color="#2c5282" size={18} strokeWidth={1.75}/>
                    AI Writer
                </div>
                
                <div className='flex items-center gap-2 font-semibold text-white bg-blue-600 p-2 px-4 rounded-md hover:cursor-pointer hover:bg-blue-700'>
                    <LogIn size={16}/>
                    Sign In
                </div>
            </div>
        </div>
    );
}
export default Navbar