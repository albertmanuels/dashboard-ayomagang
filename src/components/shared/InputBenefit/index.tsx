import React, { useState } from "react";
import ModalAddBenefit from "./components/ModalAddBenefit";
import { UseFormReturn } from "react-hook-form";
import { PartyPopper, X } from "lucide-react";
import { FormField, FormItem, FormMessage } from "@/components/ui/form";
import { jobFormSchema } from "@/lib/form-schema";
import { z } from "zod";

type InputBenefitsProps = {
  form: UseFormReturn<z.infer<typeof jobFormSchema>>;
};

export const InputBenefits = ({ form }: InputBenefitsProps) => {
  const [benefits, setBenefits] = useState<any[]>([]);

  const updateBenefits = (item: any) => {
    const newValue: any = [...benefits, item];
    setBenefits(newValue);
    form.setValue("benefits", newValue);
  };

  const deleteBenefit = (item: any) => {
    const deletedBenefits: any = benefits.filter(
      (benefit: any) => item !== benefit
    );

    setBenefits([...deletedBenefits]);
    form.setValue("benefits", deletedBenefits);
  };

  return (
    <div className="block">
      <ModalAddBenefit updateBenefits={updateBenefits} />
      <div className="grid grid-cols-3 gap-5 mt-5">
        {benefits.map((item: any, idx: number) => (
          <div
            key={idx}
            className="border border-gray-200 rounded-sm p-3 relative min-w-[150px] max-w-[200px]"
          >
            <PartyPopper className="w-7 h-7 mb-5 text-primary" />
            <div
              className="absolute top-2 right-2 cursor-pointer"
              onClick={() => deleteBenefit(item)}
            >
              <X className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-semibold mb-3">{item.benefit}</h3>
            <p className="text-gray-500 text-sm">{item.description}</p>
          </div>
        ))}
      </div>

      <FormField
        control={form.control}
        name="benefits"
        render={({ field }) => (
          <FormItem>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};
