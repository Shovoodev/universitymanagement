import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req) {
  
}
export async function POST(req) {
  try {
    const res = await req.json();
    const { username, email, password } = res;

    if (!username || !email || !password) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }
    console.log({username , email , password});
    
    if (req.method === 'POST') {
    const result = await prisma.user.create({
      data: { name : username, email : email, password: password },
    });

    return NextResponse.json(result, { status: 200 });
  }
  } catch (err) {
    console.error("API Error:", err);
    return NextResponse.json({ error: "Failed to create user" }, { status: 500 });
  }
}

export async function PATCH(req) {
  return NextResponse.json(
    { message: "This is a patch request" },
    { status: 200 }
  );
}
