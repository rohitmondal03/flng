"use client"

import { FormEvent, useState } from "react"
import { InfoIcon, Plus } from "lucide-react"

import { addFileToDatabse } from "@/actions/file-handling-actions"
import { FileUploader } from "@/components/ui/file-uploader"
import { useToast } from "@/components/ui/use-toast"
import { DetailsInput } from "@/components/ui/details-input"
import { SubmitButton } from "@/components/buttons/submit-button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"


export default function ShareFilePage() {
  const { toast } = useToast()
  const [files, setFiles] = useState<File[]>([]);
  const [isPasswordProtected, setPasswordProtected] = useState(true);

  const handleAddFile = async (formdata: FormData) => {
    const response = await addFileToDatabse(formdata)

    // if (response?.error) {
    //   toast({
    //     title: "Error",
    //     description: response.error,
    //     duration: 3000,
    //   })
    // } else {
    //   toast({
    //     title: "Success",
    //     description: "File shared successfully",
    //   })
    // }
  }


  return (
    <form action={handleAddFile} className="grid md:grid-cols-2 gap-8 items-center justify-center py-10 px-16">
      <div className="space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">
            Share Your Files Securely
          </h1>
          <p className="text-gray-500 dark:text-gray-400">
            Choose how you want to share your file with others.
          </p>
        </div>
        {/* <FileUploader
          onValueChange={setFiles}
          value={files}
          maxFiles={3}
          name="file"
        /> */}
        <input type="file" name="file" />
      </div>
      <div className="bg-gray-100 dark:bg-gray-800 rounded-lg px-8 py-12 flex items-center justify-center">
        <div
          // action={handleAddFile}
          className="space-y-8 w-4/5"
        >
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-2">
              <DetailsInput
                label="Recipient's Name"
                name="receiver"
                id="receiver"
                placeholder="Enter receiver's username"
              />
              <Button
                size={"sm"}
                variant={"default"}
                className="w-full mt-6 text-xs"
              >
                Add Another Recipient
              </Button>
            </div>
            {isPasswordProtected && (
              <DetailsInput
                label="Password"
                name="password"
                id="password"
                type="password"
                autoComplete="off"
                placeholder="Enter password"
              />
            )}
            <div className="flex items-center justify-between">
              <div className="flex items-center justify-center gap-2">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <InfoIcon
                      className="w-5 h-5 text-gray-500 dark:text-gray-400 cursor-pointer hover:text-black dark:hover:text-white transition-colors duration-200"
                    />
                  </TooltipTrigger>
                  <TooltipContent className="w-80 leading-5">
                    Password protection will encrypt your file with a password. The receiver will need to enter the password to access the file.
                  </TooltipContent>
                </Tooltip>
                <Label className="text-muted-foreground">
                  Is this file password protected?
                </Label>
              </div>
              <Checkbox
                checked={isPasswordProtected}
                onCheckedChange={(check: boolean) => setPasswordProtected(check)}
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