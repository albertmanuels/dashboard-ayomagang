import { Separator } from "@/components/ui/separator";
import React from "react";

type FieldInputProps = {
  children: React.ReactNode;
  subtitle: string;
  title: string;
};

const FieldInput = ({ children, subtitle, title }: FieldInputProps) => {
  return (
    <>
      <div className="flex flex-row items-start">
        <div className="w-[35%]">
          <div className="font-semibold">{title}</div>
          <div className="text-gray-400 w-80">{subtitle}</div>
        </div>
        {children}
      </div>
      <Separator />
    </>
  );
};

export default FieldInput;
