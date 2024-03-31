"use client";

import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { jobListingColumns, jobListingData } from "@/constants";
import { Badge } from "@/components/ui/badge";
import { MoreVerticalIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const JobListingPage = () => {
  const router = useRouter();

  return (
    <>
      <h2 className="font-semibold text-3xl">Job Listings</h2>
      <Table>
        <TableHeader>
          <TableRow>
            {jobListingColumns.map((job) => (
              <TableHead key={job}>{job}</TableHead>
            ))}
            <TableHead />
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {jobListingData.map((job, idx) => (
            <TableRow key={idx}>
              <TableCell>{job.roles}</TableCell>
              <TableCell>
                <Badge>{job.status}</Badge>
              </TableCell>
              <TableCell>{job.datePosted}</TableCell>
              <TableCell>{job.dueDate}</TableCell>
              <TableCell>
                <Badge variant="outline">{job.jobType}</Badge>
              </TableCell>
              <TableCell>{job.applicants}</TableCell>
              <TableCell>{job.needs}</TableCell>
              <TableCell>
                {job.applicants}/{job.needs}
              </TableCell>
              <TableCell>
                <Button
                  size="icon"
                  variant="outline"
                  onClick={() => router.push(`/job-detail/${idx}`)}
                >
                  <MoreVerticalIcon className="w-4 h-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableCaption>A list of your recent invoices.</TableCaption>
      </Table>
    </>
  );
};

export default JobListingPage;
