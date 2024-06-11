"use client";
import { Button } from "@/components/ui/button";
import { supabaseGetPublicUrl } from "@/lib/supabase";
import Image from "next/image";
import React, { ChangeEvent, useEffect, useRef, useState } from "react";

type CustomUploadProps = {
  form: any;
  name: string;
};

const CustomUpload = ({ form, name }: CustomUploadProps) => {
  const [previewImg, setPreviewImg] = useState("");
  const [loading, setLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const data = e.target.files[0];
      let binaryData = [];
      binaryData.push(data);

      setPreviewImg(
        window.URL.createObjectURL(
          new Blob(binaryData, { type: "application/zip" })
        )
      );
      form.setValue(name, e.target.files[0]);
    }
  };

  const handleUploadFile = () => {
    inputRef.current?.click();
  };

  useEffect(() => {
    function getImage() {
      setLoading(true);
      const { publicUrl } = supabaseGetPublicUrl(
        form.getValues(name),
        "company"
      );

      setPreviewImg(publicUrl);
      setLoading(false);
    }

    if (form.getValues(name) !== "") {
      getImage();
    }
  }, [form, name]);

  return (
    <div className="inline-flex items-center">
      {previewImg ? (
        <div>
          <div className="relative w-[120px] h-[180px] cursor-pointer">
            <Image
              width={0}
              height={0}
              src={previewImg}
              alt={previewImg}
              className="mr-8"
              priority
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              quality={100}
              onClick={handleUploadFile}
              style={{
                objectFit: "contain",
                objectPosition: "center",
              }}
            />
          </div>
          <input
            ref={inputRef}
            type="file"
            className="hidden"
            onChange={handleFileChange}
            accept="image/png, image/jpeg, image/jpg"
          />
        </div>
      ) : (
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
      )}
    </div>
  );
};

export default CustomUpload;
