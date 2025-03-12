import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import {serialize } from 'cookie';
import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';
const prisma = new PrismaClient();

export async function POST(req: Request)
{
    try {
        const { email, password } = await req.json(); 
        // console.log("Received data:", email);

        // to check user
        const user = await prisma.user.findUnique({where: {
            email
        }})

        // console.log("User is: ", user);
    
        // check if user exist or not
        if(!user)
        {
            return NextResponse.json({message: "User Does not Exist"})
        }

        //compare password
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch)    return NextResponse.json({message: "Incorrect Credentials"})

        // console.log("Matched User: ", user);
        
        const SECRET_KEY = process.env.JWT_SECRET || "yourSecret";
        const token = jwt.sign({ email: email, id: user.id}, SECRET_KEY, { expiresIn: "1h" });
        
        const cookie = serialize("token", token, {
            httpOnly: true,
            path: "/",
            maxAge: 60 * 60, // 1 hour
        });
    
        const response = NextResponse.json({ message: "LogIn Successful" });
        response.headers.set("Set-Cookie", cookie);
        return response;
        
    } catch (error) {   
        console.log("Error Occured: ", error);
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
    finally{
        await prisma.$disconnect();
    }
}