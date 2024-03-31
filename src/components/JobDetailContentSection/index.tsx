"use client";
import React from "react";
import { Progress } from "../ui/progress";
import { Separator } from "../ui/separator";
import { Badge } from "../ui/badge";
import { PartyPopperIcon } from "lucide-react";

const JobDetailContentSection = () => {
  const requiredSkills = ["HTML", "JavaScript", "xx"];

  const benefits = [
    {
      id: 1234,
      name: "Full Heathcare",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero voluptate sapiente quod? Reiciendis ratione, possimus",
    },
    {
      id: 1432,
      name: "Paid Leave",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero voluptate sapiente quod? Reiciendis ratione, possimus",
    },
    {
      id: 1452,
      name: "Laptop Ownership",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero voluptate sapiente quod? Reiciendis ratione, possimus",
    },
  ];

  return (
    <>
      <div className="grid grid-cols-3 w-full gap-5">
        <div className="col-span-2 space-y-10">
          <div>
            <h2 className="text-3xl font-semibold">Description</h2>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
              soluta numquam odio fuga dolorem hic nobis recusandae impedit
              ratione, veritatis enim? Ut nemo repellendus fugit eos officiis
              laudantium accusamus veritatis.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-semibold">Responsibilities</h2>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
              soluta numquam odio fuga dolorem hic nobis recusandae impedit
              ratione, veritatis enim? Ut nemo repellendus fugit eos officiis
              laudantium accusamus veritatis.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-semibold">Who You Are</h2>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
              soluta numquam odio fuga dolorem hic nobis recusandae impedit
              ratione, veritatis enim? Ut nemo repellendus fugit eos officiis
              laudantium accusamus veritatis.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-semibold">Nice-To-Haves</h2>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
              soluta numquam odio fuga dolorem hic nobis recusandae impedit
              ratione, veritatis enim? Ut nemo repellendus fugit eos officiis
              laudantium accusamus veritatis.
            </p>
          </div>
        </div>
        <div>
          <h2 className="text-3xl font-semibold">About this role</h2>
          <div className="shadow p-3 text-center mt-6 mb-5">
            1 <span className="text-gray-500">of 10 capacity</span>
            <Progress className="mt-3" value={10} />
          </div>
          <div className="mb-10 space-y-5">
            <div className="flex justify-between">
              <p className="text-lg text-gray-500">Apply Before</p>
              <p className="font-semibold">12 Aug 2023</p>
            </div>
            <div className="flex justify-between">
              <p className="text-lg text-gray-500">Due Date</p>
              <p className="font-semibold">12 Aug 2023</p>
            </div>
            <div className="flex justify-between">
              <p className="text-lg text-gray-500">Job Posted On</p>
              <p className="font-semibold">12 Aug 2023</p>
            </div>
            <div className="flex justify-between">
              <p className="text-lg text-gray-500">Job Type</p>
              <p className="font-semibold">Full-Time</p>
            </div>
            <div className="flex justify-between">
              <p className="text-lg text-gray-500">Salary</p>
              <p className="font-semibold">$100 - $1000</p>
            </div>
          </div>
          <Separator />

          <div className="my-10">
            <h2 className="text-3xl font-semibold mb-4">Category</h2>
            <div className="space-x-5">
              <Badge>Design</Badge>
            </div>
          </div>

          <Separator />

          <div className="my-10">
            <h2 className="text-3xl font-semibold mb-4">Required Skills</h2>
            <div className="space-x-5">
              {requiredSkills.map((item) => (
                <Badge variant="outline" key={item} className="w-min-[80px]">
                  {item}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Separator className="my-8" />

      <div>
        <h2 className="text-3xl font-semibold">Perks & Benefits</h2>
        <p className="text-gray-500">
          This job comes with several perks and benefits
        </p>

        <div className="grid grid-cols-4 gap-5 mt-9">
          {benefits.map((item) => (
            <div key={item.id} className="shadow p-5">
              <PartyPopperIcon className="w-10 h-10 text-primary mb-6" />
              <h3 className="text-lg font-semibold mb-3">{item.name}</h3>
              <p className="text-gray-500">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default JobDetailContentSection;
