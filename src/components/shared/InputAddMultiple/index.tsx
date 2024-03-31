import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { PlusIcon, X } from "lucide-react";
import { useRef, useState } from "react";

type InputAddMultipleProps = {
  form: any;
  name: string;
  label: string;
};

const InputAddMultiple = ({ form, name, label }: InputAddMultipleProps) => {
  const [isHide, setIsHide] = useState(false);
  const [values, setValues] = useState<Array<string>>([]);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleSave = () => {
    if (!inputRef.current?.value) return;
    let value = inputRef.current?.value as string;

    if (value === "") return;

    const newValue: string[] = [...values, value];

    setValues(newValue);

    form.setValue(name, newValue);
    inputRef.current.value = "";
  };

  const handleDelete = (item: string) => {
    const items = values.filter((value: string) => item !== value);
    setValues(items);
    form.setValue(name, items);
  };

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="block">{label}</FormLabel>
          <FormControl>
            <>
              <Button
                type="button"
                variant="outline"
                className="mb-2"
                onClick={() => setIsHide(!isHide)}
              >
                <PlusIcon className="w-4 h-4 mr-2" />
                {label}
              </Button>
              {isHide && (
                <div className="my-4 flex flex-row gap-4">
                  <Input ref={inputRef} className="w-[246px]" />
                  <Button type="button" onClick={handleSave}>
                    Save
                  </Button>
                </div>
              )}
              <div className="space-x-3">
                {values.map((item: string, idx: number) => (
                  <Badge
                    variant="outline"
                    key={idx}
                    onClick={() => handleDelete(item)}
                    className="py-1 px-3"
                  >
                    {item}
                    <X
                      width={13}
                      height={13}
                      className="hover:cursor-pointer"
                    />
                  </Badge>
                ))}
              </div>
            </>
          </FormControl>
        </FormItem>
      )}
    />
  );
};

export default InputAddMultiple;
