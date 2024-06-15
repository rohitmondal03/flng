import Link from "next/link"
import { FileIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { DASHBOARD_NAV_LINKS } from "@/lib/data/dashboard"
import { Progress } from "@/components/ui/progress"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button, buttonVariants } from "@/components/ui/button"
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


export default function Component() {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <header className="flex items-center justify-between shadow-sm p-4 sm:py-10 sm:px-6">
        <p className="text-xl sm:text-2xl font-bold">
          <span className="underline underline-offset-4 decoration-gray-500">
            David&apos;s
          </span>
          {" "}
          Dashboard
        </p>
        <nav className="hidden md:flex items-center gap-4 text-sm">
          {DASHBOARD_NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(buttonVariants({
                variant: "link",
                // className: "hover:text-gray-600 dark:hover:text-gray-400"
                className: "text-muted-foreground"
              }))}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </header>
      <main className="flex-1 grid grid-cols-6 gap-4 lg:gap-8 container mx-auto py-4 md:py-8 lg:py-12 px-4 lg:px-20 bg-gray-100 dark:bg-slate-400 text-gray-900 dark:text-gray-100">
        <Card className="col-span-6 md:col-span-3">
          <CardHeader className="flex items-center gap-4">
            <Avatar className="h-16 w-16">
              <AvatarImage src="/placeholder-user.jpg" />
              <AvatarFallback>JP</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="text-lg font-medium">John Doe</h3>
              <p className="text-gray-500 dark:text-gray-400">john@example.com</p>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Joined on</p>
                <p className="text-base font-medium">June 15, 2023</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Total Files Shared</p>
                <p className="text-base font-medium">24</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Total Files Received</p>
                <p className="text-base font-medium">18</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-6 md:col-span-3">
          <CardHeader>
            <CardTitle>Settings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input id="name" defaultValue="John Doe" />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" defaultValue="john@example.com" />
              </div>
              <div>
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" />
              </div>
              <div className="flex justify-end">
                <Button>Save Changes</Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card
          id="shared-files"
          className="col-span-6"
        >
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

        <Card
          id="received-files"
          className="col-span-6"
        >
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

        <Card className="col-span-6">
          <CardHeader>
            <CardTitle>Storage Usage</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-500 dark:text-gray-400">Used Storage</p>
                <p className="text-base font-medium">18.2 GB</p>
              </div>
              <Progress value={65} />
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-500 dark:text-gray-400">Total Storage</p>
                <p className="text-base font-medium">28 GB</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
