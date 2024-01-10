import * as React from "react"
 
import { Button } from "@/components/ui/Button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card"
import { Input } from "@/components/ui/Input"
import { Label } from "@/components/ui/Label"
import { useDropzone } from "react-dropzone"
import { Icons } from "@/components/Icons"
import { uploadToS3 } from "@/lib/utils/s3"
import { toast } from "react-hot-toast";
 
export function GCard() {
  const { getRootProps, getInputProps } = useDropzone({
    accept: { "application/pdf": [".pdf"] },
    maxFiles: 1,
    onDrop: async (acceptedFiles) => {
      const file = acceptedFiles[0]
      if (file.size > 100 * 1024 * 1024) {
        // bigger than 100mb!
        toast.error("File too large");
        return; 
      }

      try {
        const data = await uploadToS3(file);
        console.log("data", data);
        toast.success('Successfully uploaded!');
      } catch (error) {
        console.log(error)
      }
    }
  })
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Governance</CardTitle>
        <CardDescription>Corporate governance guidelines, ethical business practices, risk management frameworks.</CardDescription>
      </CardHeader>
      <div className="p-2 bg-white rounded-xl">
        <div
          {...getRootProps({
            className:
              "border-dashed border-2 rounded-xl cursor-pointer bg-gray-50 py-8 flex justify-center items-center flex-col",
          })}
        >
          <input {...getInputProps()} />
          <>
            <Icons.Inbox className="w-10 h-10 text-blue-500"/>
            <p className="mt-2 text-sm text-slate-400">Drop your PDF here</p>
          </>
        </div>
      </div>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col items-center gap-4">
                <Label htmlFor="framework">OR</Label>
                <Input id="name" placeholder="Paste your URL" />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button >Upload</Button>
      </CardFooter>
    </Card>
  )
}