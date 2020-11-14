import * as z from "zod"

export const SignupInput = z.object({
  email: z.string().min(10),
  password: z.string().min(10).max(100),
  name: z.string()
})
export type SignupInputType = z.infer<typeof SignupInput>

export const LoginInput = z.object({
  email: z.string().min(10),
  password: z.string(),
})
export type LoginInputType = z.infer<typeof LoginInput>
