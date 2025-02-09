import { Hash } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { FaLinkedin, FaSquareGithub, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className='mt-4 border-t-2 border-gray-200 bg-gray-100 w-full h-16 flex justify-between'>
            <div className='flex items-center ml-2 sm:ml-6 gap-x-1 sm:gap-x-2'>
                <Hash color='#71797E'/>
                <p className='text-gray-600 text-sm sm:text-base font-medium'>
                Copyright © 2025 - All right reserved
                </p>
            </div>

            <div className='flex items-center gap-x-3 mr-2 sm:mr-10'>
                <div className='text-lg sm:text-2xl'>
                    <Link href='https://github.com/vaibhav-dawane/ai-assistant'>
                        <FaSquareGithub color='#585858' className='cursor-pointer'/>
                    </Link>
                </div>
                <div className='text-lg sm:text-2xl'>
                    <Link href='https://x.com/vaibhav_dawane'>
                        <FaXTwitter color='#585858' className='cursor-pointer'/>
                    </Link>
                </div>
                <div className='text-lg sm:text-2xl'>
                    <Link href='https://www.linkedin.com/in/vaibhav-dawane/'>
                        <FaLinkedin color='#585858' className='cursor-pointer'/>
                    </Link>
                </div>
            </div>
        </div>
    );
}
export default Footer
