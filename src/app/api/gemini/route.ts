import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai'

export async function POST(req: Request) {

    try {
        const { prompt } = await req.json(); // Get the user's question from the request body
        const genAI = new GoogleGenerativeAI(process.env.API_KEY!);
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        const result = await model.generateContent(prompt);
        const data = result.response.text();
        console.log(data);

        return NextResponse.json(data); // Send the API's response back to the frontend
    } catch (error) {
        console.error('Error fetching from Gemini API:', error);
        return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
    }
}
