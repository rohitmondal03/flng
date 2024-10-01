import { type Dispatch, type SetStateAction } from "react";
import { ArrowUpRight, ArrowDown } from "lucide-react";

import type { TFileSchema } from "@/lib/@types/prisma-schema.types";
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
  return (
    <Dialog
      onOpenChange={(e) => setIsDeleteDialogOpen(e)}
      open={isDeleteDialogOpen}
    >
      <DialogTrigger asChild>
        <Button size={"sm"}>View File</Button>
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
          <Button
            size={"sm"}
            className="flex items-center gap-2"
          >
            Link <ArrowUpRight className="scale-75" />
          </Button>
          <Button
            size={"sm"}
            className="flex items-center gap-2"
          >
            Download <ArrowDown className="scale-75" />
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
