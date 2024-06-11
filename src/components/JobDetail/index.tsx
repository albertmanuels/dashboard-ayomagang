"use client";
import React from "react";
import { Progress } from "../ui/progress";
import { Separator } from "../ui/separator";
import { Badge } from "../ui/badge";
import { PartyPopperIcon } from "lucide-react";

import { formatDate } from "@/lib/utils";

type JobDetailProps = {
  detail: any;
};

const JobDetail = ({ detail }: JobDetailProps) => {
  return (
    <>
      <div className="grid grid-cols-3 w-full gap-5">
        <div className="col-span-2 space-y-10">
          <div>
            <h2 className="text-3xl font-semibold">Description</h2>
            <p
              className="text-gray-500 min-h-[8vh]"
              dangerouslySetInnerHTML={{ __html: detail?.description }}
            />
          </div>
          <div>
            <h2 className="text-3xl font-semibold">Responsibilities</h2>
            <p
              className="text-gray-500 min-h-[8vh]"
              dangerouslySetInnerHTML={{ __html: detail?.responsibility }}
            />
          </div>
          <div>
            <h2 className="text-3xl font-semibold">Who You Are</h2>
            <p
              className="text-gray-500 min-h-[8vh]"
              dangerouslySetInnerHTML={{ __html: detail?.whoYouAre }}
            />
          </div>
          <div>
            <h2 className="text-3xl font-semibold">Nice-To-Haves</h2>
            <p
              className="text-gray-500 min-h-[8vh]"
              dangerouslySetInnerHTML={{ __html: detail.niceToHaves }}
            />
          </div>
        </div>
        <div>
          <h2 className="text-3xl font-semibold">About this role</h2>
          <div className="shadow p-3 text-center mt-6 mb-5">
            {detail.applicants}{" "}
            <span className="text-gray-500">{`of ${detail.needs} capacity`}</span>
            <Progress
              className="mt-3"
              value={detail.applicants / detail.needs / 100}
            />
          </div>
          <div className="mb-10 space-y-5">
            <div className="flex justify-between">
              <p className="text-lg text-gray-500">Apply Before</p>
              <p className="font-semibold">{formatDate(detail.dueDate)}</p>
            </div>

            <div className="flex justify-between">
              <p className="text-lg text-gray-500">Job Posted On</p>
              <p className="font-semibold">{formatDate(detail.datePosted)}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-lg text-gray-500">Job Type</p>
              <p className="font-semibold">{detail.jobType}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-lg text-gray-500">Salary</p>
              <p className="font-semibold">{`$${detail.salaryFrom} - $${detail.salaryTo}`}</p>
            </div>
          </div>
          <Separator />

          <div className="my-10">
            <h2 className="text-3xl font-semibold mb-4">Category</h2>
            <div className="space-x-5">
              <Badge>{detail.categoryJob?.name}</Badge>
            </div>
          </div>

          <Separator />

          <div className="my-10">
            <h2 className="text-3xl font-semibold mb-4">Required Skills</h2>
            <div className="flex flex-wrap gap-3">
              {detail.requiredSkills?.map((item: string) => (
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
          {detail?.benefits?.map((item: any) => (
            <div key={item.id} className="shadow p-5">
              <PartyPopperIcon className="w-10 h-10 text-primary mb-6" />
              <h3 className="text-lg font-semibold mb-3">{item.benefit}</h3>
              <p className="text-gray-500">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default JobDetail;
