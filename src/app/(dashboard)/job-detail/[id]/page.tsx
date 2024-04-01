import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ApplicantContentSection from "@/components/ApplicantContentSection";
import JobDetailContentSection from "@/components/JobDetailContentSection";

const JobDetail = () => {
  return (
    <>
      <div className="inline-flex items-center gap-5 mb-5">
        <div>
          <Link href="/job-listings">
            <ArrowLeftIcon className="w-9 h-9" />
          </Link>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-1">Brand Designer</h2>
          <span>Design . Full-Time . 1/10 Hired</span>
        </div>
      </div>

      <Tabs defaultValue="applicants">
        <TabsList className="mb-8">
          <TabsTrigger value="applicants">Applicants</TabsTrigger>
          <TabsTrigger value="jobDetails">Job Details</TabsTrigger>
        </TabsList>
        <TabsContent value="applicants">
          <ApplicantContentSection />
        </TabsContent>
        <TabsContent value="jobDetails">
          <JobDetailContentSection />
        </TabsContent>
      </Tabs>
    </>
  );
};

export default JobDetail;
