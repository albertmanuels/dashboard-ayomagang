"use client";
import FieldInput from "@/components/shared/FieldInput";
import { InputBenefits } from "@/components/shared/InputBenefit";
import InputAddMultiple from "@/components/shared/InputAddMultiple";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { JOB_TYPES } from "@/constants";
import { jobFormSchema } from "@/lib/form-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import dynamic from "next/dynamic";

const PostJobPage = () => {
  const [editorLoaded, setEditorLoaded] = useState<boolean>(false);
  const form = useForm<z.infer<typeof jobFormSchema>>({
    mode: "onChange",
    resolver: zodResolver(jobFormSchema),
  });

  const onSubmit = (data: z.infer<typeof jobFormSchema>) => {
    console.log("data: ", data);
  };

  const Editor = dynamic(() => import("@/components/shared/CKEditor"), {
    ssr: false,
  });

  useEffect(() => {
    setEditorLoaded(true);
  }, [setEditorLoaded]);

  return (
    <div>
      <div className="inline-flex items-center gap-2">
        <Link href="/" className="cursor-pointer">
          <ArrowLeft className="w-7 h-7" />
        </Link>

        <h1 className="text-2xl font-semibold">Post a Job</h1>
      </div>

      <div className="my-5">
        <h4 className="text-lg font-semibold">Basic Information</h4>
        <h4 className="text-gray-400">List out your top perks and benefits</h4>
      </div>
      <Separator />

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="mt-5 space-y-6 pt-6"
        >
          <FieldInput
            title="Job Title"
            subtitle="Job titles must be describe one position"
          >
            <FormField
              control={form.control}
              name="roles"
              rules={{
                minLength: 80,
              }}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="e.g. Software Engineer"
                      className="w-[450px]"
                    />
                  </FormControl>
                  <FormDescription>At least 3 characters</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </FieldInput>
          <FieldInput
            title="Type of Employment"
            subtitle="You can select multiple type of employment"
          >
            <FormField
              control={form.control}
              name="jobType"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col space-y-1"
                    >
                      {JOB_TYPES.map((item: string, idx: number) => (
                        <FormItem
                          key={item}
                          className="flex flex-center space-x-3 space-y-0"
                        >
                          <FormControl>
                            <RadioGroupItem value={item} />
                          </FormControl>
                          <FormLabel className="font-normal">{item}</FormLabel>
                        </FormItem>
                      ))}
                    </RadioGroup>
                  </FormControl>
                </FormItem>
              )}
            />
          </FieldInput>
          <FieldInput
            title="Salary"
            subtitle="Please specify the estimated salary range for the role"
          >
            <div className="w-[450px] flex flex-row justify-between items-center">
              <FormField
                control={form.control}
                name="salaryFrom"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        {...field}
                        type="number"
                        className="w-full"
                        placeholder="$100"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <span className="text-center">To</span>
              <FormField
                control={form.control}
                name="salaryTo"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        {...field}
                        type="number"
                        className="w-full"
                        placeholder="$1000"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </FieldInput>
          <FieldInput title="Categories" subtitle="You can select job category">
            <FormField
              control={form.control}
              name="categoryId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Select from Categories</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl className="w-[450px]">
                      <SelectTrigger>
                        <SelectValue placeholder="Select Job Category" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="engineering">Engineering</SelectItem>
                      <SelectItem value="admin">Admin</SelectItem>
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />
          </FieldInput>
          <FieldInput
            title="Required Skills"
            subtitle="Add required skills for the job"
          >
            <InputAddMultiple
              form={form}
              label="Add Skills"
              name="requiredSkills"
            />
          </FieldInput>
          <FieldInput
            title="Job Description"
            subtitle="Job titles must be describe one position"
          >
            <Editor
              form={form}
              name="jobDescription"
              editorLoaded={editorLoaded}
            />
          </FieldInput>
          <FieldInput
            title="Responsibilities"
            subtitle="Outline the core responsibilities of the position"
          >
            <Editor
              form={form}
              name="responsibility"
              editorLoaded={editorLoaded}
            />
          </FieldInput>
          <FieldInput
            title="Who You Are"
            subtitle="Add your preferred candidates qualifications"
          >
            <Editor form={form} name="whoYouAre" editorLoaded={editorLoaded} />
          </FieldInput>
          <FieldInput
            title="Nice-To-Haves"
            subtitle="Add nice-to-have skills and qualifications for the role to encourage a more diverse set of candidates to apply"
          >
            <Editor form={form} name="niceToHave" editorLoaded={editorLoaded} />
          </FieldInput>
          <FieldInput
            title="Perks and Benefits"
            subtitle="Encourage more people to apply by sharing the attractive rewards and benefits you offer to your employees"
          >
            <InputBenefits form={form} />
          </FieldInput>
          <div className="flex justify-end">
            <Button size="lg">Review</Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default PostJobPage;
