import React, { useEffect, useState } from 'react';
import { LogIn, Sparkles } from 'lucide-react';
import Link from 'next/link';

const Navbar = () => {
    
    const [isLoggedIn, setisLoggedIn] = useState(false);
    useEffect(() => {
        async function verifyToken() {
            const response = await fetch('/api/verify-token');
            console.log("Response after refresh: ",response);
            if(response.ok){
                // console.log("User Is logged in");
                setisLoggedIn(true);
            }
            else
            {
                // console.log("Unauthorised User");
                setisLoggedIn(false);
            }
        }
        verifyToken();
    }, []);

    const logOut = () => {
        console.log("Log Out Successful");
    }

    return (
        <div className='bg-white/70 shadow drop-shadow-sm fixed z-50 backdrop-blur-md w-full'>
            <div className='flex flex-wrap items-center justify-between py-4 px-4 sm:px-8 lg:mx-16'>
                <div className='flex items-center gap-1 text-blue-800 font-semibold text-lg'>
                    <Sparkles className='animate-pulse' color='#2c5282' size={18} strokeWidth={1.75}/>
                    AI Writer
                </div>
                {isLoggedIn ? 
                    <div className='flex items-center gap-2 font-semibold text-sm sm:text-base text-white bg-blue-600 p-2 px-4 rounded-md hover:cursor-pointer hover:bg-blue-700 transition duration-300 select-none' aria-label="Sign In" onClick={logOut}>
                        <LogIn size={16}/>
                        Log out
                    </div>
                    :
                    <Link href='/signin' prefetch>
                        <div className='flex items-center gap-2 font-semibold text-sm sm:text-base text-white bg-blue-600 p-2 px-4 rounded-md hover:cursor-pointer hover:bg-blue-700 transition duration-300 select-none' aria-label="Sign In">
                            <LogIn size={16}/>
                            Log in
                        </div>
                    </Link>
                }
            </div>
        </div>
    );
}
export default Navbar