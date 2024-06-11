import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { jobListingColumns } from "@/constants";
import { Badge } from "@/components/ui/badge";
import { MoreVerticalIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { Job } from "@prisma/client";
import { formatDate } from "@/lib/utils";
import moment from "moment";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export const revalidate = 0;

async function getJobList(companyId: string) {
  const jobs = await prisma.job.findMany({
    where: {
      companyId,
    },
  });

  return jobs;
}

const JobListingPage = async () => {
  const session = await getServerSession(authOptions);
  const jobs = await getJobList(String(session?.user.id));

  return (
    <>
      <h2 className="font-semibold text-3xl">Job Listings</h2>
      <Table>
        <TableHeader>
          <TableRow>
            {jobListingColumns.map((job) => (
              <TableHead key={job}>{job}</TableHead>
            ))}
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {jobs.map((job: Job, idx) => (
            <TableRow key={idx}>
              <TableCell>{job.roles}</TableCell>
              <TableCell>
                {moment(job.datePosted).isBefore(job.dueDate) ? (
                  <Badge className="bg-green-500 hover:bg-green-500">
                    Live
                  </Badge>
                ) : (
                  <Badge variant="destructive">Expired</Badge>
                )}
              </TableCell>
              <TableCell>{formatDate(job.datePosted)}</TableCell>
              <TableCell>{formatDate(job.dueDate)}</TableCell>
              <TableCell>
                <Badge variant="outline">{job.jobType}</Badge>
              </TableCell>
              <TableCell>{job.applicants}</TableCell>
              <TableCell>
                {job.applicants}/{job.needs}
              </TableCell>
              <TableCell>
                <Link href={`/job-detail/${job.id}`}>
                  <Button size="icon" variant="outline">
                    <MoreVerticalIcon className="w-4 h-4" />
                  </Button>
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default JobListingPage;
