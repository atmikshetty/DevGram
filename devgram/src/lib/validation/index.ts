import { z } from "zod";

export const SignUpValidation = z.object({
    name: z.string().min(3,{
        message: "Name must be atleast 3 characters."
    }),
    username: z.string().min(3, {
      message: "Username must be at least 3 characters.",
    }),
    email: z.string().email(),
    password: z.string().min(8,{
        message: "Password must be atleast 8 characters."
    })
  });

  export const SignInValidation = z.object({
    email: z.string().email(),
    password: z.string().min(8,{
        message: "Password must be atleast 8 characters."
    })
  });