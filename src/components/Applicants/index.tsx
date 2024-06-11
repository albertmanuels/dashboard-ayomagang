import React from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { jobApplicantHeader } from "@/constants";

type ApplicantsProps = {
  applicants: any;
};
const Applicants = ({ applicants }: ApplicantsProps) => {
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
        {applicants &&
          applicants.map((applicant: any, idx: number) => (
            <TableRow key={idx}>
              <TableCell>{applicant.name}</TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  );
};

export default Applicants;
