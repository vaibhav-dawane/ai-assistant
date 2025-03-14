import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai'

// to store prior exchanges
let conversationContext: string[] = [];

export async function POST(req: Request) {    
    try {
        const { prompt } = await req.json(); // Get the user's question from the request body
        conversationContext.push(prompt);
        const genAI = new GoogleGenerativeAI(process.env.API_KEY!);

        const instructions = "You are an AI Writing Assistant designed to generate clear, concise, and high-quality content tailored to the user's needs. Maintain an engaging, professional tone while respecting any specific guidelines provided in the prompt"

        const model = genAI.getGenerativeModel({ 
            model: 'gemini-2.0-flash',
            systemInstruction: instructions,
        });

        // for line breaking, it will store new message exchange in new line
        const context = conversationContext.join('\n');

        const result = await model.generateContent(context);

        const assistantResponse = result.response.text();

        conversationContext.push(assistantResponse);
        
        console.log('Context Store: ', conversationContext);
        
        if (conversationContext.length > 20) {
            conversationContext = conversationContext.slice(-20); // Keep only the last 20 messages
        }

        // console.log(assistantResponse);

        return NextResponse.json(assistantResponse); // Send the API's response back to the frontend
    } catch (error) {
        console.error('Error fetching from Gemini API:', error);
        return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
    }
}
