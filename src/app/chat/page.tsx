'use client'
import React, { useEffect, useRef, useState } from 'react';
import {ArrowLeft, Send, BotMessageSquare, User, Loader } from 'lucide-react';
import Link from 'next/link';

interface ChatMessage {
    id: number,
    question: string,
    answer: string,
    loading: boolean
}

const ChatPage = () => {
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const [input, setInput] = useState('');
    const [messages, setMessages] = useState<ChatMessage[]>([]);

    const [idCounter, setIdCounter] = useState(0);

    const SendPrompt = async () => {
        if (!input.trim()) return;
        const newId = idCounter;
        
        const prompt = input;
        setMessages((prev) => [
            ...prev,
            { id: newId, question: prompt, answer:'', loading: true },
        ]);
        
        setInput('');
        inputRef.current!.value = '';

        setIdCounter((prev) => prev + 1);

        try {
            const response = await fetch('/api/gemini', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ prompt }),
            });

            const data = await response.json();

            // console.log("From page.tsx: ",data);
            if (data.error) {
                console.error(data.error);
                return;
            }

            setMessages((prev) =>
                prev.map((msg) =>
                    msg.id === newId ? { ...msg, answer: data || 'No response from AI', loading: false } : msg
                )
            );
        } catch (error) {
            console.error('Unable to send request: ', error);
        }
    }

   
    const formatText = (text: string) => {
        // Split the text into lines for processing line breaks
        const lines = text.split('\n');
        return lines.map((line, i) => {
            // Check for bullet points at the beginning of the line
            if (line.trim().startsWith('* ')) {
                return (
                    <div key={i} style={{ marginLeft: '20px', marginBottom: '8px' }}>
                        • {line.trim().slice(2)} {/* Remove '* ' and display the rest */}
                    </div>
                );
            }
    
            // Process other inline formatting like **bold** or *italic*
            const chunks = line.split(/(\*\*.*?\*\*|\*.*?\*)/g);
            return (
                <p key={i} style={{ marginBottom: '12px' }}>
                    {chunks.map((chunk, j) => {
                        if (/^\*\*.*\*\*$/.test(chunk)) {
                            // Bold text
                            return (
                                <strong key={j}>
                                    {chunk.slice(2, -2)} {/* Remove '**' */}
                                </strong>
                            );
                        } else if (/^\*.*\*$/.test(chunk)) {
                            // Italic text
                            return (
                                <em key={j}>
                                    {chunk.slice(1, -1)} {/* Remove '*' */}
                                </em>
                            );
                        }
                        return chunk; // Regular text
                    })}
                </p>
            );
        });
    };
    
    const handleEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            SendPrompt();
        }
    }

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    return (
        <div className='flex justify-center w-full'>
            <div className='mt-4 w-[90%] sm:w-[900px] h-[530px] border rounded-t-2xl shadow-2xl'>
                <div className='w-full h-24 border-b-2 flex items-center justify-start px-3'>
                    <div className='flex items-center ml-2 sm:ml-4'>
                        <Link href='/' prefetch>
                            <div className='hover:bg-slate-100 p-2 rounded-full cursor-pointer'>
                                <ArrowLeft size={20}/>
                            </div>
                        </Link>

                        <div className='ml-3'>
                            <h1 className='text-2xl font-bold text-black opacity-80'>AI Writing Assistant</h1>
                            <p className='text-gray-500 text-base font-normal'>Your personal writing companion</p>
                        </div>
                    </div>
                </div>

                {/* <div className=''> */}

                    <div className='h-[350px] border-b overflow-y-auto p-5 space-y-4' 
                        style={{
                        maxHeight: '350px',
                    }}>
                        {/* default bot message */}
                        <div className='flex items-center'>
                                <BotMessageSquare color='#fff' size={34} className='bg-slate-900 p-[8px] rounded-full'/>
                            <div className='pl-2 shadow-sm rounded-lg max-w-[630px]'
                            style={{
                                wordBreak: 'break-word',
                            }}
                            >
                                Hello! I&apos;m your AI writing assistant. How can I help you today?
                            </div>
                        </div>

                        {/* user's question */}
                        {messages?.map((msg) => (
                            <div key={msg.id}>
                                <div className='flex justify-end items-center'>
                                    <div
                                        className='p-2 shadow-sm rounded-lg max-w-[400px] bg-slate-700 text-white text-justify'
                                        >
                                        {msg.question}
                                    </div>
                                    <div>
                                        <User color='#000' size={34} className='ml-3 bg-slate-100 p-[8px] rounded-full'/>
                                    </div>
                                </div>
                                <div className='flex items-start mt-2'>
                                        <BotMessageSquare color='#fff' size={34} className='bg-slate-900 p-[8px] rounded-full'/>
                                    <div className='p-2 shadow-sm rounded-lg max-w-[630px] text-justify'>
                                        {/* { formatText(msg.answer) || (loading && <Loader size={20}  className='animate-spin' />)} */}
                                        {msg.loading ? (
                                            <Loader size={20} className='animate-spin' />
                                        ) : (
                                            formatText(msg.answer)
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                        
                        {/* Scroll Target */}
                        <div ref={messagesEndRef} />
                    </div>
                {/* </div> */}

                <div className='flex justify-center mt-5 px-4'>
                    <input
                        ref={inputRef}
                        type='text'
                        placeholder='Type a message...'
                        className='border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-[2px] focus:ring-slate-900 w-full sm:w-[800px]'
                        onChange={(e) => {
                            setInput(e.target.value);
                        }}
                        onKeyDown={handleEnter}
                        value={input}
                        aria-label="Type a message"
                    />
                    <Send className='ml-3 mt-[2px] cursor-pointer hover:bg-slate-800 rounded-lg bg-slate-900 p-2' size={38} color='#fff' onClick={SendPrompt} aria-label="Send message"/>
                </div>
            </div>
        </div>
    );
}
export default ChatPage;
