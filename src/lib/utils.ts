import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import bycrypt from "bcryptjs"
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const hashPassword = async (password: string) => {
  const hashedPassword = await bycrypt.hash(password, 8)
  return hashedPassword
}

export const comparePassword = async (password:  string, hashedPassword: string) => {
  const isPasswordMatch = await bycrypt.compare(password, hashedPassword)

  return isPasswordMatch
}
