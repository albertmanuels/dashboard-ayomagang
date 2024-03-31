import React from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { jobApplicantData, jobApplicantHeader } from "@/constants";

const ApplicantContentSection = () => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          {jobApplicantHeader.map((applicant) => (
            <TableHead key={applicant}>{applicant}</TableHead>
          ))}
          <TableHead />
        </TableRow>
      </TableHeader>
      <TableBody>
        {jobApplicantData.map((applicant, idx) => (
          <TableRow key={idx}>
            <TableCell>{applicant.name}</TableCell>
            <TableCell>{applicant.appliedDate}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ApplicantContentSection;
