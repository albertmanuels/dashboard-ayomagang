import React, { useEffect, useRef } from "react";
import { UseFormReturn } from "react-hook-form";
import { CKEditor as TextEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { FormField, FormItem, FormMessage } from "@/components/ui/form";

type CKEditorProps = {
  form: any;
  name: string;
  editorLoaded?: boolean;
};

const CKEditor = ({ form, name, editorLoaded }: CKEditorProps) => {
  return (
    <>
      {editorLoaded ? (
        <>
          <TextEditor
            editor={ClassicEditor}
            data={form.getValues(name)}
            onChange={(_, editor) => {
              const data = editor.getData();
              form.setValue(name, data);
            }}
          />
          <FormField
            control={form.control}
            name={name}
            render={() => (
              <FormItem>
                <FormMessage className="mt-3" />
              </FormItem>
            )}
          />
        </>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default CKEditor;
