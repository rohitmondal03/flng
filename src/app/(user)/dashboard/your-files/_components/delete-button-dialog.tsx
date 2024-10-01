"use client"

import { memo, useState } from "react";


import { deleteFile } from "@/actions/file-handling.actions";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { DialogTitle, DialogHeader, DialogDescription, Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";

type TDeleteButtonDialogPropos = {
  fileId: string;
  storageFileId: string;
  fileName: string;
  closeDialog: () => void;
}

function DeleteButtonDialog({ fileName, fileId, closeDialog, storageFileId }: TDeleteButtonDialogPropos) {
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(false);

  const handleDeleteFile = async () => {
    setIsLoading(true);
    const response = await deleteFile(fileId, storageFileId)
      .finally(() => setIsLoading(false));

    if (!response) {
      toast({
        title: "File deleted successfully !!",
        description: "Your file has been deleted successfully !!"
      })
      return;
    }
    else if (response?.error) {
      toast({
        title: "Error deleting file",
        description: response.error as string,
      });
      return;
    }

    toast({
      title: "File deleted successfully !!",
      description: `Your file ${fileName} has been deleted`
    })

    closeDialog();
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"destructive"} size={"sm"}>
          Delete File
        </Button>
      </DialogTrigger>
      <DialogContent className="dark:border-zinc-400">
        <DialogHeader>
          <DialogTitle className="text-xl">
            Are you sure you want to delete this file ?
          </DialogTitle>
          <DialogDescription>
            Clicking on "Yes" will delete this file and you'll not be able to retrieve it.
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center gap-6">
          <Button
            variant={"destructive"}
            size={"sm"}
            disabled={isLoading}
            onClick={handleDeleteFile}
          >
            Yes
          </Button>
          <Button
            size={"sm"}
            onClick={closeDialog}
            disabled={isLoading}
          >
            No
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export const DeleteDialog = memo(DeleteButtonDialog);