import Image from "next/image";
import React, { ChangeEvent, useEffect, useRef, useState } from "react";

type CustomUploadProps = {
  form: any;
  name: string;
};

const CustomUpload = ({ form, name }: CustomUploadProps) => {
  const [previewImg, setPreviewImg] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setPreviewImg(URL.createObjectURL(e.target.files[0]));
      form.setValue(name, e.target.files[0]);
    }
  };

  const handleUploadFile = () => {
    inputRef.current?.click();
  };

  // useEffect(() => {
  //   async function getImage () {

  //   }
  // }, [])

  return (
    <div className="inline-flex items-center">
      <div>
        {previewImg !== "" && (
          <Image
            width={120}
            height={120}
            src={previewImg}
            alt={previewImg}
            className="mr-8"
          />
        )}
      </div>
      <div
        className="py-6 px-10 border-2 cursor-pointer border-primary border-dashed w-max rounded-sm"
        onClick={handleUploadFile}
      >
        <div className="text-center">
          <span className="text-primary font-medium">Click to replace</span>{" "}
          <span className="text-gray-500">or drag and drop</span>
        </div>
        <p className="text-gray-500 text-sm">
          PNG, JPG, JPEG (max. 400px x 400px)
        </p>
        <input
          ref={inputRef}
          type="file"
          className="hidden"
          onChange={handleFileChange}
          accept="image/png, image/jpeg, image/jpg"
        />
      </div>
    </div>
  );
};

export default CustomUpload;
