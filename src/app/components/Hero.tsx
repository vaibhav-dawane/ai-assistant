'use client'
import { Sparkles, ArrowRight  } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const Hero = () => {
    return (
        <div className='bg-gradient-to-b from-cyan-50 to-white h-screen flex flex-col items-center'>
            <div className='flex items-center gap-1 text-blue-800 font-semibold mt-24 sm:mt-36'>
                <Sparkles className='animate-pulse' color='#2c5282' size={18} strokeWidth={1.75}/>
                AI-POWERED WRITING ASSISTANT
            </div>
            <div className='text-4xl sm:text-5xl md:text-6xl mt-6 sm:mt-8 font-bold text-center'>
                Write Better, <span className='text-blue-800'>Faster</span>
            </div>

            <div className='mt-4 sm:mt-6 text-gray-500 max-w-[90%] lg:w-[650px] text-center text-base sm:text-lg md:text-[20px] font-normal leading-7 sm:leading-8'>
                Enhance your writing with our AI-powered assistant. Get suggestions, improve clarity, and eliminate errors in real-time.
            </div>
            
            <div className='flex flex-col md:flex-row items-center mt-10 sm:mt-14 gap-4 sm:gap-7 animate-slowBounce duration-2000 select-none'>
                <Link href='/chat' prefetch>
                    <div className='text-white bg-blue-700 flex items-center py-4 px-8 rounded-full gap-1 bg-gradient-to-r from-blue-800 to-purple-500 hover:cursor-pointer hover:bg-gradient-to-r hover:from-blue-800 hover:to-purple-600 hover:scale-105 duration-500 text-sm sm:text-base'>
                        Get Started Free
                        <ArrowRight color='white' size={18}/>
                    </div>
                </Link>

                <div className='bg-white border-2 border-blue-200 py-4 px-8 text-sm sm:text-base rounded-full hover:cursor-pointer hover:border-blue-800 hover:scale-105 duration-500'>
                    Watch Demo
                </div>
            </div>
        </div>
    );
}
export default Hero
