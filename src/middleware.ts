import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname; // to get the current path where user is
    const privatePath = path === '/chat';
    const token = request.cookies.get("token")?.value || "";
    
    // if user didn't login and is on private path then redirect him to signin page
    if(!token && privatePath){
        return NextResponse.redirect(new URL('/signin', request.url))
    }
    
    // if user is already logged in and is on public path then redirect him to home page
    const publicPath = path === '/signin' || path === '/signup';
    
    if(token && publicPath){
        return NextResponse.redirect(new URL('/', request.url))
    }
    return NextResponse.next();
}
 
// middleware will run on following path
export const config = {
  matcher: [
    '/',
    '/signup',
    '/signin',
    '/chat',
  ]
}