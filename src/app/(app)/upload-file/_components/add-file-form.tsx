"use client"

import { useState } from "react"
import { InfoIcon } from "lucide-react"

import { addFileToDatabase } from "@/actions/file-handling.actions"
import { useToast } from "@/components/ui/use-toast"
import { DetailsInput } from "@/components/ui/details-input"
import { SubmitButton } from "@/components/buttons/submit-button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"


export function AddFileForm() {
  const { toast } = useToast()
  const [isPrivate, setIsPrivate] = useState(true);

  // Add a new file
  const handleAddFile = async (formdata: FormData) => {
    const file = formdata.get("file") as File;
    const fileName = formdata.get("file-name")?.toString();

    var format = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

    if (!file.name) {
      toast({
        title: "Choose a file",
        description: "Please choose file to upload",
      })
      return;
    }
    else if (!fileName || fileName.trim().length === 0) {
      toast({
        title: "Enter File Name",
        description: "File name cannot be left empty",
      })
      return;
    }
    else if (format.test(fileName)) {
      toast({
        title: "Correct file name format",
        description: "File name can only contains alphabets and numbers",
      });
      return;
    }

    const response = await addFileToDatabase(formdata);

    if (response) {
      toast({
        title: "Error adding your file !!",
        description: String(response.error),
      })
      return;
    }
  }


  return (
    <form
      action={handleAddFile}
      className="grid md:grid-cols-2 gap-8 items-center justify-center py-10 px-16"
    >
      <div className="space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">
            Share Your Files Securely
          </h1>
          <p className="text-gray-500 dark:text-gray-400">
            Choose how you want to share your file with others.
          </p>
        </div>
        <Input
          type="file"
          name="file"
          accept="application/*, image/*"
        />
      </div>
      <div className="bg-gray-100 dark:bg-gray-800 rounded-lg px-8 py-12 flex items-center justify-center">
        <div className="space-y-8 w-4/5">
          <div className="space-y-6">
            <DetailsInput
              name="file-name"
              label="Name of File"
              placeholder="File name with which it'll be stored"
              id="file-name"
              autoComplete="off"
            />
            <div className="flex items-center justify-between">
              <div className="flex items-center justify-center gap-2">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <InfoIcon
                      className="w-5 h-5 text-gray-500 dark:text-gray-400 cursor-pointer hover:text-black dark:hover:text-white transition-colors duration-200"
                    />
                  </TooltipTrigger>
                  <TooltipContent className="w-80 leading-5">
                    Private file means that it will not be publically available.
                  </TooltipContent>
                </Tooltip>
                <Label className="">
                  Is this file private?
                </Label>
              </div>
              <Checkbox
                name="private-checkbox"
                checked={isPrivate}
                onCheckedChange={(check: boolean) => setIsPrivate(check)}
              />
            </div>
          </div>
          <SubmitButton variant={"destructive"}>
            Share File
          </SubmitButton>
        </div>
      </div>
    </form>
  )
}