import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import OverviewForm from "@/components/forms/OverviewForm";
import SocialMediaForm from "@/components/forms/SocialMediaForm";
import TeamForm from "@/components/forms/TeamForm";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import React from "react";

const getDetailCompany = async () => {
  const session = await getServerSession(authOptions);
  const company = await prisma.company.findFirst({
    where: {
      id: session?.user.id,
    },
    include: {
      companyOverview: true,
      companySocialMedia: true,
      companyTeam: true,
    },
  });

  return company;
};

const SettingsPage = async () => {
  const company = await getDetailCompany();

  return (
    <>
      <h1 className="font-semibold text-3xl mb-5">Settings</h1>
      <Tabs defaultValue="overview">
        <TabsList className="mb-8">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="socialLinks">Social Links</TabsTrigger>
          <TabsTrigger value="teams">Teams</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          <OverviewForm detail={company?.companyOverview[0]} />
        </TabsContent>
        <TabsContent value="socialLinks">
          <SocialMediaForm detail={company?.companySocialMedia[0]} />
        </TabsContent>
        <TabsContent value="teams">
          <TeamForm teams={company?.companyTeam} />
        </TabsContent>
      </Tabs>
    </>
  );
};

export default SettingsPage;
