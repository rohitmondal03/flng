import { useState, type Dispatch, type SetStateAction } from "react";
import { ArrowDown } from "lucide-react";

import type { TFileSchema } from "@/lib/@types/prisma-schema.types";
import { downloadFile } from "@/actions/file-handling.actions";
import { toast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";

type TProps = {
  file: Omit<TFileSchema, "user_id">;
  isDeleteDialogOpen: boolean;
  setIsDeleteDialogOpen: Dispatch<SetStateAction<boolean>>
}

export function ViewFileDialog({ file, isDeleteDialogOpen, setIsDeleteDialogOpen }: TProps) {
  const [isLoading, setIsLoading] = useState(false)

  // for downloading file
  const handleDownloadFile = async () => {
    setIsLoading(true);
    const response = await downloadFile(file.name)
      .finally(() => setIsLoading(false));

    if (response) {
      toast({
        title: "Error downloading file !!",
        description: `${file.name} cannot be downloaded !!`,
        variant: "destructive",
      })
      return;
    }
  }

  return (
    <Dialog
      onOpenChange={(e) => setIsDeleteDialogOpen(e)}
      open={isDeleteDialogOpen}
    >
      <DialogTrigger asChild>
        <Button size={"sm"}>View Details</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{file.name} Details</DialogTitle>
          <DialogDescription>
            You can see your file details and also download the file from here
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-[2px]">
          <p>
            File Type: <span className="font-semibold">{file.file_type}</span>
          </p>
          <p>
            Private or Public: <span className="font-semibold">{file.is_private ? "Private" : "Public"}</span>
          </p>
          <p>
            Uploaded at: <span className="font-semibold">{new Date(file.uploaded_at).toDateString()}</span>
          </p>
        </div>
        <div className="flex items-center justify-between">
          {/* <Button
            size={"sm"}
            className="flex items-center gap-2"
          >
            Link <ArrowUpRight className="scale-75" />
          </Button> */}
          <Button
            size={"sm"}
            disabled={isLoading}
            className="flex items-center gap-2"
            onClick={handleDownloadFile}
          >
            Download <ArrowDown className="scale-75" />
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
