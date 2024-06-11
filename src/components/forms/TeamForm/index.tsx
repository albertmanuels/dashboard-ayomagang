"use client";

import AddTeamModal from "@/components/shared/AddTeamModal";
import FieldInput from "@/components/shared/FieldInput";
import { CompanyTeam } from "@prisma/client";
import { InstagramIcon, LinkedinIcon } from "lucide-react";

import React from "react";

type TeamFormProps = {
  teams: CompanyTeam[] | undefined;
};

const TeamForm = ({ teams }: TeamFormProps) => {
  return (
    <>
      <FieldInput
        title="Basic Information"
        subtitle="Add team members of your company"
      >
        <div className="mb-5">
          <div className="flex flex-row justify-between items-center">
            <h2 className="text-lg font-semibold">{teams?.length} Members</h2>
            <AddTeamModal />
          </div>
          <div className="grid grid-cols-3 gap-5 mt-6">
            {teams?.map((item) => (
              <div key={item.id} className="w-60 h-50 p-3 shadow text-center">
                <div className="w-10 h-10 rounded-full bg-gray-500 mx-auto mb-4" />
                <h4 className="text-lg font-semibold">{item.name}</h4>
                <h6 className="text-xs text-gray-500">{item.position}</h6>

                <div className="inline-flex gap-2 mx-auto mt-5">
                  <InstagramIcon className="w-4 h-4" />
                  <LinkedinIcon className="w-4 h-4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </FieldInput>
    </>
  );
};

export default TeamForm;
