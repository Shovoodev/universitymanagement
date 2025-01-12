import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req) {
  
}
export async function POST(req) {
  try {
    const res = await req.json();
    
    const { email, password } = res;
    
    if ( !email || !password) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }
    console.log({  email , password});
    
    if( req.method === "POST"){
        const result = await prisma.user.findUnique({
            where : {
                email : {
                  email
                }
            }
        })
        return NextResponse.json(result, { status: 200 });
    }
  } catch (err) {
    console.error("API Error:", err);
    return NextResponse.json({ error: "Failed to get user" }, { status: 500 });
  }
}

export async function PATCH(req) {
  return NextResponse.json(
    { message: "This is a patch request" },
    { status: 200 }
  );
}
