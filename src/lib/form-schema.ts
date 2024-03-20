import { JOB_TYPES } from "@/constants"
import {z} from "zod"

export const jobFormSchema =  z.object({
  roles: z.string({required_error: "Job Title is required"}).min(3, {message: "Job Title must be at least 3 characters"}),
  jobType: z.enum(JOB_TYPES , {required_error: "You need to select a job type"}),
  salaryFrom: z.string({required_error: "Salary From is Required"}),
  salaryTo: z.string({required_error: "Salary To is Required"}),
  categoryId: z.string({required_error: "You need to select a category"}),
  jobDescription: z.string({required_error: "Job Description is required"}).min(10, {message: "Job Description must be at least 10 characters"}),
  responsibility: z.string({required_error: "Responsibility is required"}).min(10, {message: "Responsibility must be at least 10 characters"}),
  whoYouAre: z.string({required_error: "Who You Are is required"}).min(10, {message: "Who You Are must be at least 10 characters"}),
  niceToHave: z.string({required_error: "Nice to Have is required"}).min(10, {message: "Nice To Have must be at least 10 characters"}),
  requiredSkills: z.string().array()
})