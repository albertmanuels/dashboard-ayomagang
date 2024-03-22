import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { PlusIcon } from "lucide-react";
import React, { useRef, useState } from "react";

type ModalAddBenefitProps = {
  updateBenefits: (item: any) => void;
};

const ModalAddBenefit = ({ updateBenefits }: ModalAddBenefitProps) => {
  const benefitRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleSaveBenefit = () => {
    const benefit = benefitRef.current?.value;
    const description = descriptionRef.current?.value;

    if (benefit === "" || description === "") return;

    updateBenefits({
      benefit,
      description,
    });
    setIsOpen(false);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button type="button" variant="outline" onClick={() => setIsOpen(true)}>
          <PlusIcon className="w-4 h-4 mr-2" onClick={() => setIsOpen(false)} />
          Add Benefit
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Benefit</DialogTitle>
          <DialogDescription>
            Make a new benefit, click save when you are done
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-8 mb-5">
          <div>
            <Label htmlFor="benefit">Benefit</Label>
            <Input
              id="benefit"
              placeholder="fill your benefit"
              ref={benefitRef}
            />
          </div>
          <div>
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              placeholder="fill your description"
              ref={descriptionRef}
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="button" onClick={handleSaveBenefit}>
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ModalAddBenefit;
