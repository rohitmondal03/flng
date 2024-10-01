import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { TFileSchema } from "@/lib/@types/prisma-schema.types";

type TProps = {
  fileData: Omit<TFileSchema, "user_id">
}

export function EditFileDialog({ fileData }: TProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant={"secondary"}
          size={"sm"}
        >
          Edit File
        </Button>
      </DialogTrigger>
      <DialogContent>
        Edit file form
      </DialogContent>
    </Dialog>
  )
}
