import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast"


import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { SignInValidation } from "@/lib/validation";
import { z } from "zod";
import { ButtonLoading } from "@/components/common/ButtonLoading";
import { Link, useNavigate } from "react-router-dom";
import { useSignInAccount } from "@/lib/react-query/QueriesAndMutations";
import { useUserContext } from "../context/AuthContext";

const SigninForm = () => {

  const {toast} = useToast();
  const {checkAuthUser, isLoading: isUserLoading} = useUserContext();
  const navigate = useNavigate();

  // const {mutateAsync: createUserAccount, isPending: isCreatinguser} = useCreateUserAccount();

  const {mutateAsync: signInAccount} = useSignInAccount();


  // Check the Shadcn Form and Zod Documentation for this
  // 1. Define your form.
  const form = useForm<z.infer<typeof SignInValidation>>({
    resolver: zodResolver(SignInValidation),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof SignInValidation>) {

    const session = await signInAccount({
      email: values.email,
      password: values.password
    })

    if(!session){
      return toast({
        title: "Sign in Failed! Please try again!"
      })
    }

    const isLoggedIn = await checkAuthUser();

    if(isLoggedIn){
      form.reset();
      navigate('/');
    }else{
      return toast({
        title: "Sign Up Failed! Please try again!",
      });
    }
  }

  return (
    <Form {...form}>
      <div className="sm:w-420 flex-center flex-col">
        <img src="/assets/images/logo-white.svg" alt="logo" className="w-36" />

        <h2 className="h3-bold md:h2-bold sm:pt-3">
          Log In.
        </h2>
        <p className="text-light-3 small-medium md:base-regular mt-2">Welcome Back!</p>

        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5 w-full mt-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" className="shad-input" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" className="shad-input" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="shad-button_primary">
            {
              isUserLoading ? (
                <div className="flex-center gap-2">
                  <ButtonLoading />
                </div>
              ) : 'Sign In'
            }
          </Button>

            {/* Sign in Details */}

            <p className="text-small-regular text-light-2 text-center mt-1">
              Don't have an account? 
              <Link to="/sign-up" className="text-primary-500 text-small-semibold ml-1">Sign up</Link>
            </p>
        </form>
      </div>
    </Form>
  );
};

export default SigninForm;
