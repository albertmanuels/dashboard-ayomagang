"use client";

import FieldInput from "@/components/shared/FieldInput";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { socialMediaFormSchema } from "@/lib/form-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { CompanySocialMedia } from "@prisma/client";
import { useSession } from "next-auth/react";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

type SocialMediaFormProps = {
  detail: CompanySocialMedia | undefined;
};

const SocialMediaForm = ({ detail }: SocialMediaFormProps) => {
  const { data: session } = useSession();
  const { toast } = useToast();

  const form = useForm<z.infer<typeof socialMediaFormSchema>>({
    resolver: zodResolver(socialMediaFormSchema),
    defaultValues: {
      facebook: detail?.facebook,
      instagram: detail?.instagram,
      linkedin: detail?.linkedin,
      twitter: detail?.twitter,
      youtube: detail?.youtube,
    },
  });

  const handleOnSubmit = async (val: z.infer<typeof socialMediaFormSchema>) => {
    try {
      const payload = {
        ...val,
        companyId: session?.user.id,
      };

      await fetch("/api/company/social-media", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      toast({
        title: "Success",
        description: "Edit Social Media Success",
        variant: "success",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Edit Social Media Error, Try again",
      });
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleOnSubmit)} className="space-y-7">
        <FieldInput
          title="Basic Information"
          subtitle="Add elsewhere links to your company profile. You can add oy username without full https links"
        >
          <div className="flex flex-col gap-4">
            <FormField
              control={form.control}
              name="facebook"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Facebook</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      className="w-[450px]"
                      placeholder="https://www.facebook.com"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="instagram"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Instagram</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      className="w-[450px]"
                      placeholder="https://www.instagram.com"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="linkedin"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Linkedin</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      className="w-[450px]"
                      placeholder="https://www.linkedin.com"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="youtube"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Youtube</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      className="w-[450px]"
                      placeholder="https://www.youtube.com"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="twitter"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Twitter</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      className="w-[450px]"
                      placeholder="https://www.twitter.com"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </FieldInput>
        <div className="flex justify-end">
          <Button type="submit" size="lg">
            Save
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default SocialMediaForm;
