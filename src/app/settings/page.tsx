import OverviewForm from "@/components/forms/OverviewForm";
import SocialMediaForm from "@/components/forms/SocialMediaForm";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";

const SettingsPage = () => {
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
          <OverviewForm />
        </TabsContent>
        <TabsContent value="socialLinks">
          <SocialMediaForm />
        </TabsContent>
        <TabsContent value="teams">
          <p className="text-gray-500">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Perferendis, voluptatem accusamus reiciendis ullam porro alias
            fugiat neque commodi dicta numquam, quis deserunt! Ipsa cumque culpa
            voluptatem itaque perspiciatis nemo consequuntur.
          </p>
        </TabsContent>
      </Tabs>
    </>
  );
};

export default SettingsPage;
