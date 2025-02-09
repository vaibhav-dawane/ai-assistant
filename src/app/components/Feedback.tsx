import { CircleCheckBig } from 'lucide-react';
import React from 'react';

const Feedback = () => {
    return (
        <div className='bg-gradient-to-b from-cyan-50 to-white mb-20 px-4 sm:px-6 lg:px-8 sm:pt-24'>
            <div className='flex justify-center text-2xl sm:text-4xl font-bold text-blue-800 text-center'>
                Trusted by Writers Worldwide
            </div>
            
            <div className='flex justify-center mt-10 sm:mt-16'>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8'>

                    <div className='w-full max-w-sm h-[280px] rounded-2xl bg-white shadow-xl flex flex-col hover:-translate-y-3 duration-300 hover:shadow-2xl'>
                        <div className='h-1/2 flex justify-center -mt-4'>
                            <div className='w-20 h-20 mt-8 flex justify-center items-center rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 relative'>
                                <div className='absolute inset-0 rounded-full blur-md opacity-55 bg-gradient-to-br from-purple-500 to-indigo-600'></div>
                                <img src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150' alt='' className='w-20 h-20 rounded-full z-10 border-4 border-white' />
                            </div>
                        </div>
                        <div className='mt-4 px-4 sm:px-6 text-center'>
                            <p className='text-gray-500 text-sm sm:text-base'>
                            &quot;This tool has transformed my writing process. The AI suggestions are incredibly helpful.&quot;
                            </p>
                            <div className='flex justify-center mt-4 gap-2 text-yellow-400 font-semibold'>
                                <CircleCheckBig color='#facc15' /> 
                                Verified User
                            </div>
                        </div>
                    </div>

                    <div className='w-full max-w-sm h-[280px] rounded-2xl bg-white shadow-xl flex flex-col hover:-translate-y-3 duration-300 hover:shadow-2xl'>
                        <div className='h-1/2 flex justify-center -mt-4'>
                            <div className='w-20 h-20 mt-8 flex justify-center items-center rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 relative'>
                                <div className='absolute inset-0 rounded-full blur-md opacity-55 bg-gradient-to-br from-purple-500 to-indigo-600'></div>
                                <img src='https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150' alt='' className='w-20 h-20 rounded-full z-10 border-4 border-white' />
                            </div>
                        </div>
                        <div className='mt-4 px-4 sm:px-6 text-center'>
                            <p className='text-gray-500 text-sm sm:text-base'>
                            &quot;The real-time editing feature has helped me catch errors I would have missed.&quot;
                            </p>
                            <div className='flex justify-center mt-4 gap-2 text-yellow-400 font-semibold'>
                                <CircleCheckBig color='#facc15' /> 
                                Verified User
                            </div>
                        </div>
                    </div>
                    
                    <div className='w-full max-w-sm h-[280px] rounded-2xl bg-white shadow-xl flex flex-col hover:-translate-y-3 duration-300 hover:shadow-2xl'>
                        <div className='h-1/2 flex justify-center -mt-4'>
                            <div className='w-20 h-20 mt-8 flex justify-center items-center rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 relative'>
                                <div className='absolute inset-0 rounded-full blur-md opacity-55 bg-gradient-to-br from-purple-500 to-indigo-600'></div>
                                <img src='https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150' alt='' className='w-20 h-20 rounded-full z-10 border-4 border-white' />
                            </div>
                        </div>
                        <div className='mt-4 px-4 sm:px-6 text-center'>
                            <p className='text-gray-500 text-sm sm:text-base'>
                            &quot;A game-changer for content creators. The style analysis is spot on.&quot;
                            </p>
                            <div className='flex justify-center mt-4 gap-2 text-yellow-400 font-semibold'>
                                <CircleCheckBig color='#facc15' /> 
                                Verified User
                            </div>
                        </div>
                    </div>                    
                </div>
            </div>
        </div>
    );
}
export default Feedback
