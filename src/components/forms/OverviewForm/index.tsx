"use client";
import CustomUpload from "@/components/layouts/CustomUpload";
import FieldInput from "@/components/shared/FieldInput";
import InputAddMultiple from "@/components/shared/InputAddMultiple";
import TitleForm from "@/components/shared/TitleForm";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { employeeOptions, industryOptions, locationOptions } from "@/constants";
import { overviewFormSchema } from "@/lib/form-schema";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const OverviewForm = () => {
  const [editorLoaded, setEditorLoader] = useState(false);

  const form = useForm<z.infer<typeof overviewFormSchema>>({
    resolver: zodResolver(overviewFormSchema),
  });

  const handleOnSubmit = (val: z.infer<typeof overviewFormSchema>) => {
    console.log(val);
  };

  useEffect(() => {
    setEditorLoader(true);
  }, []);

  const Editor = dynamic(() => import("@/components/shared/CKEditor"), {
    ssr: false,
  });

  return (
    <>
      <div className="my-5">
        <TitleForm
          title="Basic Information"
          subTitle="This is company information that you can update anytime"
        />
      </div>
      <Separator />
      <div className="my-5">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleOnSubmit)}
            className="space-y-7"
          >
            <FieldInput
              title="Company Logo"
              subtitle="This image will be shown publicly as company logo"
            >
              <CustomUpload form={form} name="image" />
            </FieldInput>

            <FieldInput
              title="Company Details"
              subtitle="Introduce your company core infor quickly to users by fill up company details"
            >
              <div className="space-y-5">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Company Name</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          className="w-[450px]"
                          placeholder="Google"
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="website"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Website</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          className="w-[450px]"
                          placeholder="https://www.google.com"
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="location"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Location</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="w-[450px]">
                            <SelectValue placeholder="Select Location" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {locationOptions.map((item) => (
                            <SelectItem key={item.value} value={item.value}>
                              {item.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-2 gap-4 w-[450px]">
                  <FormField
                    control={form.control}
                    name="employee"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Employee</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select Employee Size" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {employeeOptions.map((item) => (
                              <SelectItem key={item.value} value={item.value}>
                                {item.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="industry"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Industry</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select Industry" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {industryOptions.map((item) => (
                              <SelectItem key={item.value} value={item.value}>
                                {item.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="dateFounded"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel>Date Founded</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant="outline"
                              className={cn(
                                "w-[450px] pl-3 text-left font-normal",
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              {field.value ? (
                                format(field.value, "PPP")
                              ) : (
                                <span>Pick a date</span>
                              )}
                              <CalendarIcon className="ml-auto w-4 h-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            disabled={(date) =>
                              date > new Date() || date < new Date("1900-01-01")
                            }
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                    </FormItem>
                  )}
                />

                <InputAddMultiple
                  form={form}
                  name="techstack"
                  label="Add Tech Stack"
                />
              </div>
            </FieldInput>

            <FieldInput
              title="About Company"
              subtitle="Brief description for your company. Urls are hyperlinked"
            >
              <Editor
                form={form}
                name="description"
                editorLoaded={editorLoaded}
              />
            </FieldInput>
            <div className="flex justify-end">
              <Button size="lg">Save</Button>
            </div>
          </form>
        </Form>
      </div>
    </>
  );
};

export default OverviewForm;
