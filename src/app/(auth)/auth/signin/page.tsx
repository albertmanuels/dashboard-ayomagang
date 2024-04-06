"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { signinFormSchema } from "@/lib/form-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { signIn } from "next-auth/react";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";

const SignInPage = () => {
  const { toast } = useToast();
  const router = useRouter();

  const form = useForm<z.infer<typeof signinFormSchema>>({
    resolver: zodResolver(signinFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleSignIn = async (val: z.infer<typeof signinFormSchema>) => {
    const authenticated = await signIn("credentials", {
      ...val,
      redirect: false,
    });

    if (authenticated?.status === 200) {
      toast({
        title: "Success",
        description: "Login success!",
        variant: "default",
        className: "bg-green-500 text-white",
      });

      router.push("/");
    } else {
      toast({
        title: "Error",
        description: "Email or Password is wrong!",
        variant: "destructive",
      });
    }
  };
  return (
    <div className="relative w-full h-screen">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="border border-border p-5">
          <h2 className="font-semibold text-center text-2xl mb-2">
            Login your account
          </h2>
          <p className="text-sm text-gray-500">
            Enter your email to access dashboard
          </p>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleSignIn)}
              className="mt-5 space-y-5"
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input {...field} type="email" placeholder="Email" />
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
                    <FormControl>
                      <Input
                        {...field}
                        type="password"
                        placeholder="Password"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button className="w-full">Sign In</Button>
              <div className="text-sm">
                Don&apos;t have an account?{" "}
                <Link href="/auth/signup" className="text-primary">
                  Sign Up
                </Link>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
