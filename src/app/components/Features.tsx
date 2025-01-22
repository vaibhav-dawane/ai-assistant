import { Brain, MessageSquare, Zap } from 'lucide-react';
import React from 'react';

const Features = () => {
    return (
        <div className='mx-auto flex justify-center bg-gradient-to-b from-white to-cyan-50 h-auto py-12 px-4'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12'>
                <div className='w-full sm:w-[300px] md:w-[380px] h-[250px] rounded-2xl border border-blue-200 grid grid-rows-2 grid-flow-row shadow-xl hover:-translate-y-3 duration-300 hover:shadow-2xl'>
                    <div className='flex items-center'>
                        <div className='bg-gray-200 p-4 mx-4 md:mx-10 rounded-2xl mt-4'>
                            <Brain size={34} color='#2c5299'/>
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <div className='grid grid-rows-2 grid-flow-row mx-4 md:mx-8'>
                            <h1 className='text-lg md:text-[22px] font-semibold'>AI-Powered Suggestions</h1>
                            <p className='text-sm md:text-base text-gray-600'>Get intelligent writing suggestions powered by advanced AI models.</p>
                        </div>
                    </div>
                </div>

                <div className='w-full sm:w-[300px] md:w-[380px] h-[250px] rounded-2xl border border-blue-200 grid grid-rows-2 grid-flow-row shadow-xl hover:-translate-y-3 duration-300 hover:shadow-2xl'>
                    <div className='flex items-center'>
                        <div className='bg-gray-200 p-4 mx-4 md:mx-10 rounded-2xl mt-4'>
                            <Zap size={34} color='#2c5299'/>
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <div className='grid grid-rows-2 grid-flow-row mx-4 md:mx-8'>
                            <h1 className='text-lg md:text-[22px] font-semibold'>Real-Time Editing</h1>
                            <p className='text-sm md:text-base text-gray-600'>Edit and improve your writing in real-time with instant feedback.</p>
                        </div>
                    </div>
                </div>
                
                <div className='w-full sm:w-[300px] md:w-[380px] h-[250px] rounded-2xl border border-blue-200 grid grid-rows-2 grid-flow-row shadow-xl hover:-translate-y-3 duration-300 hover:shadow-2xl'>
                    <div className='flex items-center'>
                        <div className='bg-gray-200 p-4 mx-4 md:mx-10 rounded-2xl mt-4'>
                            <MessageSquare size={34} color='#2c5299'/>
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <div className='grid grid-rows-2 grid-flow-row mx-4 md:mx-8'>
                            <h1 className='text-lg md:text-[22px] font-semibold'>Style Analysis</h1>
                            <p className='text-sm md:text-base text-gray-600'>Get insights on tone, clarity, and writing style improvements.</p>
                        </div>
                    </div>
                </div>

                
            </div>
        </div>
    );
}
export default Features
