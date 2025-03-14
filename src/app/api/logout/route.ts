import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST()
{
    try {
        const cookieStore = await cookies();
        cookieStore.delete("token");
        return NextResponse.json({Message: "Logged out Successful"}, {status: 200});
    } catch (error) {
        console.log("Error Occured: ", error);
    }
}