import { Button } from "@/components/ui/button";
import {
  Building2,
  CalendarCheck,
  ClipboardList,
  Home,
  LogOut,
  LucideProps,
  Mail,
  Settings,
  Users,
} from "lucide-react";
import Link from "next/link";
import React from "react";

const SIDEBAR_MENU = [
  {
    name: "Home",
    url: "/",
    icon: (props: LucideProps) => <Home {...props} />,
  },
  {
    name: "Messages",
    url: "/message",
    icon: (props: LucideProps) => <Mail {...props} />,
  },
  {
    name: "Company Profile",
    url: "/company-profile",
    icon: (props: LucideProps) => <Building2 {...props} />,
  },
  {
    name: "All Applicants",
    url: "/all-applicants",
    icon: (props: LucideProps) => <Users {...props} />,
  },
  {
    name: "Job Listings",
    url: "/job-listings",
    icon: (props: LucideProps) => <ClipboardList {...props} />,
  },
  {
    name: "My Schedule",
    url: "/my-schedule",
    icon: (props: LucideProps) => <CalendarCheck {...props} />,
  },
];

const Sidebar = () => {
  return (
    <aside className="pb-12 min-h-screen">
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold">Dashboard</h2>
          <div className="space-y-4">
            {SIDEBAR_MENU.map((menu) => (
              <Link key={menu.name} href={menu.url}>
                <Button
                  variant={"ghost"}
                  className="w-full justify-start items-center border-none hover:text-primary"
                >
                  {menu.icon({ className: "mr-2", width: 20 })}
                  {menu.name}
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold">Settings</h2>
          <Link href="/settings">
            <Button
              variant={"ghost"}
              className="w-full justify-start items-center border-none hover:text-primary"
            >
              <Settings className="mr-2" width={20} />
              Settings
            </Button>
          </Link>
          <Link href="/logout">
            <Button
              variant={"ghost"}
              className="w-full text-red-500 hover:bg-red-200 hover:text-red-500 justify-start items-center border-none"
            >
              <LogOut className="mr-2" width={20} />
              Logout
            </Button>
          </Link>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
