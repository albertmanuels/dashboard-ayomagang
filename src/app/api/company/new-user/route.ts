
import prisma from "@/lib/prisma"
import { hashPassword } from "@/lib/utils"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  const data = await req.json()

  const hashedPassword = await hashPassword(data.password)

  const result = await prisma.company.create({ 
    data: {
      name: data.name,
      email: data.email,
      password: hashedPassword
  }})

  return NextResponse.json(result)
}