import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="pb-3 mb-5 border-b flex flex-rrow items-center justify-between">
      <div>
        <h1 className="text-xl">Company</h1>
        <h3 className="font-semibold">Google</h3>
      </div>
      <div>
        <Link href="/post-a-job">
          <Button className="rounded-none py-3 px-6">
            <PlusIcon className="mr-2 w-4 h-4" />
            Post a Job
          </Button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
