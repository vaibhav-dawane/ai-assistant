'use client'
import { Sparkles, ArrowRight  } from 'lucide-react';
import { redirect } from 'next/navigation';
import React from 'react';

const Hero = () => {
    return (
        <div className='bg-gradient-to-b from-cyan-50 to-white h-screen flex flex-col items-center'>
            <div className='flex items-center gap-1 text-blue-800 font-semibold mt-24'>
                <Sparkles className='animate-pulse' color="#2c5282" size={18} strokeWidth={1.75}/>
                AI-POWERED WRITING ASSISTANT
            </div>
            <div className='text-6xl mt-8 font-bold'>
                Write Better, <span className='text-blue-800'>Faster</span>
            </div>

            <div className='mt-6 text-gray-500 w-[650px] text-center text-[20px] font-normal leading-8'>
                Enhance your writing with our AI-powered assistant. Get suggestions, improve clarity, and eliminate errors in real-time.
            </div>
            
            <div className='flex items-center mt-14 gap-7 animate-slowBounce duration-2000 select-none'>
                <div className='text-white bg-blue-700 flex items-center p-[19px] px-8 rounded-full gap-1 bg-gradient-to-r from-blue-800 to-purple-500 hover:cursor-pointer hover:bg-gradient-to-r hover:from-blue-800 hover:to-purple-600 hover:scale-105 duration-500' onClick={() => redirect('/chat')}>
                    Get Started Free
                    <ArrowRight color='white' size={18}/>
                </div>

                <div className='bg-white border-2 border-blue-200 p-4 px-8 rounded-full hover:cursor-pointer hover:border-blue-800 hover:scale-105 duration-500'>
                    Watch Demo
                </div>
            </div>
        </div>
    );
}
export default Hero
