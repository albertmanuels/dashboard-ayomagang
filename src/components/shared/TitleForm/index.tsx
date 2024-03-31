import React from "react";

type TitleFormProps = {
  title: string;
  subTitle?: string;
};

const TitleForm = ({ title, subTitle }: TitleFormProps) => {
  return (
    <>
      <h4 className="text-lg font-semibold">{title}</h4>
      <h4 className="text-gray-400">{subTitle}</h4>
    </>
  );
};

export default TitleForm;
