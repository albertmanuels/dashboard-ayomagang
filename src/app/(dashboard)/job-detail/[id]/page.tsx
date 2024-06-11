import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Applicants from "@/components/Applicants";
import JobDetail from "@/components/JobDetail";

type JobDetailProps = {
  params: {
    id: string;
  };
};

const getJobDetail = async (companyId: string, id: string) => {
  const response = await prisma.job.findFirst({
    where: {
      id: id,
      companyId,
    },
    include: {
      applicant: {
        include: {
          user: true,
        },
      },
      categoryJob: true,
    },
  });

  return response;
};

const JobDetailPage = async ({ params }: JobDetailProps) => {
  const session = await getServerSession(authOptions);
  const job = await getJobDetail(String(session?.user.id), params.id);

  return (
    <>
      <div className="inline-flex items-center gap-5 mb-5">
        <div>
          <Link href="/job-listings">
            <ArrowLeftIcon className="w-9 h-9" />
          </Link>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-1">{job?.roles}</h2>
          <span>{`
          ${job?.categoryJob?.name}. ${job?.jobType}. ${job?.applicants ?? 0}/${
            job?.needs || 0
          }`}</span>
        </div>
      </div>

      <Tabs defaultValue="applicants">
        <TabsList className="mb-8">
          <TabsTrigger value="applicants">Applicants</TabsTrigger>
          <TabsTrigger value="jobDetails">Job Details</TabsTrigger>
        </TabsList>
        <TabsContent value="applicants">
          <Applicants applicants={job?.applicant} />
        </TabsContent>
        <TabsContent value="jobDetails">
          <JobDetail detail={job} />
        </TabsContent>
      </Tabs>
    </>
  );
};

export default JobDetailPage;
