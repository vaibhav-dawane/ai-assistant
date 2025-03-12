import jwt from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest)
{
    try {
        const secret = process.env.JWT_SECRET || "yoursecret";

        const token = req.cookies.get("token")?.value;

        if(!token)
        {
            return NextResponse.json({messaged: "User is not logged in"}, {status: 404});
        }

        const decode = jwt.verify(token, secret);

        if(token && decode)
        {
            return NextResponse.json({user: decode}, {status: 200});
        }
    } catch (error) {
        console.log("Error Occured: ", error);
    }
}