import { FileIcon } from "lucide-react"

import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "@/components/ui/avatar"
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
} from "@/components/ui/card"
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table"


export function UsersReceivedFilesDetails() {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Received Files</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>File</TableHead>
              <TableHead>Size</TableHead>
              <TableHead>Received On</TableHead>
              <TableHead>Sender</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>
                <div className="flex items-center gap-2">
                  <FileIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                  <p>Project Proposal.docx</p>
                </div>
              </TableCell>
              <TableCell>3.7 MB</TableCell>
              <TableCell>June 12, 2023</TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Avatar className="h-6 w-6">
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <p>John Doe</p>
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <div className="flex items-center gap-2">
                  <FileIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                  <p>Design Assets.zip</p>
                </div>
              </TableCell>
              <TableCell>12.4 MB</TableCell>
              <TableCell>June 8, 2023</TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Avatar className="h-6 w-6">
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>OD</AvatarFallback>
                  </Avatar>
                  <p>Olivia Davis</p>
                </div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
