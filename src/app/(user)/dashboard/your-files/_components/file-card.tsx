"use client"

import { useState } from "react";

import type { TFileSchema } from "@/lib/@types/prisma-schema.types";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DeleteDialog } from "./delete-button-dialog";
import { ViewFileDialog } from "./view-file-dialog";
import { EditFileDialog } from "./edit-file-dialog";

type TFileCardProps = Omit<TFileSchema, "user_id">;

export function FileCard(file: TFileCardProps) {
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);

  return (
    <Card className="border-zinc-500">
      <CardHeader>
        <CardTitle>
          {file.name}
        </CardTitle>
        <CardDescription>
          File Size - {(file.size / 1024 / 1024).toFixed(3)} MB
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-5 font-semibold text-sm">
        <p>
          <span className="text-zinc-500 dark:text-zinc-400">Uploaded at -</span> {" "}
          {new Date(file.uploaded_at).toDateString()}
        </p>
        <div className="flex items-center gap-4">
          <p className="text-zinc-500 dark:text-zinc-400">
            Is this file private ?
          </p>
          <Checkbox checked={file.is_private} />
        </div>
        <div className="flex items-center justify-between">
          <ViewFileDialog
            file={file}
            isDeleteDialogOpen={isDeleteDialogOpen}
            setIsDeleteDialogOpen={setIsDeleteDialogOpen}
          />
          <EditFileDialog fileData={file} />
          <DeleteDialog
            fileName={file.name}
            fileId={file.id}
            storageFileId={file.db_file_id}
            closeDialog={() => setIsDeleteDialogOpen(false)}
          />
        </div>
      </CardContent>
    </Card>
  )
}
