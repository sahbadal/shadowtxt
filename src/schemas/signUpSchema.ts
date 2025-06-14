import { z } from 'zod'

export const usernameValidation = z
   .string()
   .min(2, "username must be atlease two characters")
   .max(20, "username must not be more than 20 characters")
   .regex(/^[a-zA-Z0-9_]+$/, "username must not contain special characters")



export const signUpSchema = z.object({
    username:usernameValidation,
    email:z.string().email({message:"Invalid email address"}),
    password:z.string().min(6, {message:"Password must be atleast 6 characters"})
})