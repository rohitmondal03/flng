import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { FileUploader } from "./_components/file"


export default function Component() {
  return (
    <section className="grid md:grid-cols-2 gap-8 items-center justify-center py-10 px-16">
      <div className="space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">
            Share Your Files Securely
          </h1>
          <p className="text-gray-500 dark:text-gray-400">
            Choose how you want to share your file with others.
          </p>
        </div>
        {/* FILES INPUT AND SHOWING SMALL PREVIEW !! */}
        <FileUploader />
      </div>
      <div className="bg-gray-100 dark:bg-gray-800 rounded-lg px-8 py-12 flex items-center justify-center">
        <div className="space-y-10">
          <div className="space-y-4">
            <RadioGroup defaultValue="private" className="space-y-2">
              <div className="flex items-center gap-2">
                <RadioGroupItem
                  id="private"
                  value="private"
                />
                <Label htmlFor="private">
                  Keep Private and Share with Receiver
                </Label>
              </div>
              <div className="flex items-center gap-2">
                <RadioGroupItem
                  id="password"
                  value="password"
                />
                <Label htmlFor="password">
                  Keep Private with Password
                </Label>
              </div>
              <div className="flex items-center gap-2">
                <RadioGroupItem
                  id="public"
                  value="public"
                />
                <Label htmlFor="public">
                  Make Public
                </Label>
              </div>
            </RadioGroup>
          </div>
          <div className="space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="receiver">
                Recipient's Name
              </Label>
              <Input
                id="receiver"
                placeholder="Enter recipient's name"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">
                Password
              </Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter password"
              />
            </div>
          </div>
          <div className="grid gap-2">
            <p className="">
              File Size: {" "}
              <span className="font-semibold">10 GB (10,240 MB)</span>
            </p>
            <Button
              type="submit"
              className="w-full"
            >
              Share File
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}