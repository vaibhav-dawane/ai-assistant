import jwt from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest)
{
    const secret = process.env.JWT_SECRET || "yoursecret";

    const token = req.cookies.get("token")?.value;

    if(!token)  return NextResponse.json({error: "Unauthorised User"}, {status: 401});

    const decode = jwt.verify(token, secret);

    return NextResponse.json({user: decode});
}