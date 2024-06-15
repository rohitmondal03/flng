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


export function UsersSharedFilesDetails() {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Shared Files</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>File</TableHead>
              <TableHead>Size</TableHead>
              <TableHead>Shared On</TableHead>
              <TableHead>Recipients</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>
                <div className="flex items-center gap-2">
                  <FileIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                  <p>Annual Report.pdf</p>
                </div>
              </TableCell>
              <TableCell>2.3 MB</TableCell>
              <TableCell>June 10, 2023</TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Avatar className="h-6 w-6">
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <Avatar className="h-6 w-6">
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>OD</AvatarFallback>
                  </Avatar>
                  <Avatar className="h-6 w-6">
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>SM</AvatarFallback>
                  </Avatar>
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <div className="flex items-center gap-2">
                  <FileIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                  <p>Marketing Presentation.pptx</p>
                </div>
              </TableCell>
              <TableCell>5.1 MB</TableCell>
              <TableCell>June 5, 2023</TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Avatar className="h-6 w-6">
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <Avatar className="h-6 w-6">
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>OD</AvatarFallback>
                  </Avatar>
                </div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
