import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import {serialize } from 'cookie';
import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';
const prisma = new PrismaClient();

export async function POST(req: Request)
{
    try {
        const userData = await req.json(); 
        // console.log("Received data:", userData);

        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(userData.password, saltRounds);

        await prisma.user.create({data: {
            name: userData.name,
            email: userData.email,
            password: hashedPassword
        }})
        

        const SECRET_KEY = process.env.JWT_SECRET || "yourSecret";
        const token = jwt.sign({ email: userData.email, password: userData.password}, SECRET_KEY, { expiresIn: "1h" });
        
        const cookie = serialize("token", token, {
            httpOnly: true,
            path: "/",
            maxAge: 60 * 60, // 1 hour
        });
    
        const response = NextResponse.json({ message: "Signup successful" });
        response.headers.set("Set-Cookie", cookie);
        return response;
    } catch (error) {
        console.log("Error Occured: ", error);
    }
    finally{
        await prisma.$disconnect();
    }
}