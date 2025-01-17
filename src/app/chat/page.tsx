'use client'
import React, { useRef, useState } from 'react';
import {ArrowLeft, Send, BotMessageSquare, User } from 'lucide-react';

const page = () => {
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const [messages, setMessages] = useState([
        { id: 1, text: "Hello! I'm your AI writing assistant. How can I help you today?" },
      ]);
    return (
        <div className='flex justify-center w-full'>
            <div className='mt-4 w-[900px] h-[530px] border rounded-t-2xl shadow-2xl'>
                <div className='w-full h-24 border-b-2 flex justify-start '>
                    <div className='flex items-center ml-8'>
                    <div className='hover:bg-slate-100 p-2 rounded-full cursor-pointer'>
                        <ArrowLeft size={20}/>
                    </div>

                        <div className='ml-6'>
                            <h1 className='text-2xl font-bold text-black opacity-80'>AI Writing Assistant</h1>
                            <p className='text-gray-500 text-base font-normal'>Your personal writing companion</p>
                        </div>
                    </div>
                </div>

                <div className='h-[350px] border-b '>
                    <div className="flex-1 overflow-y-auto p-5 space-y-4">
                        {messages.map((msg) => (
                            <div className='flex items-center'>
                                <div key={msg.id}>
                                    <BotMessageSquare color='#fff' size={34} className='bg-slate-900 p-[8px] rounded-full'/>
                                </div>
                                <div
                                    key={msg.id}
                                    className="p-2 shadow-sm rounded-lg max-w-[530px]"
                                >
                                    {msg.text}
                                </div>
                            </div>
                        ))}
                        {messages.map((msg) => (
                            <div className='flex justify-end items-center'>
                                <div
                                    key={msg.id}
                                    className="p-2 shadow-sm rounded-lg max-w-[530px] bg-slate-700 text-white"
                                >
                                    {msg.text}
                                </div>
                                <div key={msg.id}>
                                    <User color='#000' size={34} className='ml-3 bg-slate-100 p-[8px] rounded-full'/>
                                </div>
                            </div>
                        ))}
                        {/* Scroll Target */}
                        <div ref={messagesEndRef} />
                    </div>
                </div>
                
                <div className='flex justify-center mt-5'>
                    <input
                    type="text"
                    placeholder="Type a message..."
                    className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-[2px] focus:ring-slate-900 w-[800px]"
                    />
                    <Send className='ml-3 mt-[2px] cursor-pointer hover:bg-slate-800 rounded-lg bg-slate-900 p-2' size={38} color='#fff'/>
                </div>
            </div>

        </div>
    );
}
export default page
