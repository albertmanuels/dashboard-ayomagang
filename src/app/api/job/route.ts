import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request){
const data = await req.json()


  const result = await prisma.job.create({
    data
  })
  
  return NextResponse.json(result)
}