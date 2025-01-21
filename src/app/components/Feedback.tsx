import { CircleCheckBig } from 'lucide-react';
import React from 'react';

const Feedback = () => {
    return (
        <div className='bg-gradient-to-b from-cyan-50 to-white mb-20'>
            <div className='flex justify-center text-4xl font-bold text-blue-800'>
                Trusted by Writers Worldwide
            </div>
            <div className='flex justify-center mt-16'>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                    <div className='w-[390px] h-[280px] rounded-2xl bg-white shadow-xl flex flex-col hover:-translate-y-3 duration-300 hover:shadow-2xl'>
                        <div className='h-1/2 flex justify-center mt-[-15px] '>
                            <div className='w-20 h-20 mt-12 flex justify-center items-center rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 relative'>
                                <div className='absolute inset-0 rounded-full blur-md bg-gradient-to-br from-purple-500 to-indigo-600'></div>
                                <img src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150' alt='' className='w-20 h-20 rounded-full z-10 border-4 border-white' />
                            </div>
                        </div>
                        <div className='mt-4'>
                            <p className='align-middle text-center px-8 text-lg text-gray-500'>
                            &quot;This tool has transformed my writing process. The AI suggestions are incredibly helpful.&quot;
                            </p>
                            <div className='flex justify-center mt-4 gap-2 text-yellow-400 font-semibold'>
                                <CircleCheckBig color='#facc15' /> 
                                Verified User
                            </div>
                        </div>
                    </div>
                    <div className='w-[390px] h-[280px] rounded-2xl bg-white shadow-xl flex flex-col hover:-translate-y-3 duration-300 hover:shadow-2xl'>
                        <div className='h-1/2 flex justify-center mt-[-15px] '>
                            <div className='w-20 h-20 mt-12 flex justify-center items-center rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 relative'>
                                <div className='absolute inset-0 rounded-full blur-md bg-gradient-to-br from-purple-500 to-indigo-600'></div>
                                <img src='https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150' alt='' className='w-20 h-20 rounded-full z-10 border-4 border-white' />
                            </div>
                        </div>
                        <div className='mt-4'>
                            <p className='align-middle text-center px-10 text-lg text-gray-500'>
                            &quot;The real-time editing feature has helped me catch errors I would have missed.&quot;
                            </p>
                            <div className='flex justify-center mt-4 gap-2 text-yellow-400 font-semibold'>
                                <CircleCheckBig color='#facc15' /> 
                                Verified User
                            </div>
                        </div>
                    </div>
                    <div className='w-[390px] h-[280px] rounded-2xl bg-white shadow-xl flex flex-col hover:-translate-y-3 duration-300 hover:shadow-2xl'>
                        <div className='h-1/2 flex justify-center mt-[-15px] '>
                            <div className='w-20 h-20 mt-12 flex justify-center items-center rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 relative'>
                                <div className='absolute inset-0 rounded-full blur-md bg-gradient-to-br from-purple-500 to-indigo-600'></div>
                                <img src='https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150' alt='' className='w-20 h-20 rounded-full z-10 border-4 border-white' />
                            </div>
                        </div>
                        <div className='mt-4'>
                            <p className='align-middle text-center px-8 text-lg text-gray-500'>
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
