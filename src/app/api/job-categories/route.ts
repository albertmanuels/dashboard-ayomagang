import prisma from "@/lib/prisma"
import { NextResponse } from "next/server"

export async function GET() {
  const categories = await prisma.categoryJob.findMany()

  const result = categories

  return NextResponse.json(result)
}