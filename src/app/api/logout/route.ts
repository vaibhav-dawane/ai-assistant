import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest)
{
    try {
        const cookieStore = await cookies();
        cookieStore.delete("token");
        return NextResponse.json({Message: "Logged out Successful"}, {status: 200});
    } catch (error) {
        console.log("Error Occured: ", error);
    }
}