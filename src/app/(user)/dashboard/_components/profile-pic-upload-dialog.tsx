"use client"

import { type FC, memo } from 'react'

import { uploadProfilePicAction } from "@/actions/users.action"
import { toast } from "@/components/ui/use-toast"
import { SubmitButton } from "@/components/buttons/submit-button"

type ProfilePicUploadDialogContentProps = {
  profilePicURL: string;
}

export const ProfilePicUploadDialogContent: FC<ProfilePicUploadDialogContentProps> = memo(({ profilePicURL }) => {
  // add a new profile pic
  const uploadProfilePic = async (formData: FormData) => {
    const profilePicture = formData.get("picture") as File;

    if (!profilePicture) {
      toast({
        title: "Please select a image to continue !!"
      })
      return;
    }

    const resp = await uploadProfilePicAction(formData)

    if (resp) {
      toast({
        title: resp.error as string
      })
    }
  }

  return (
    <div className='space-y-8'>
      {profilePicURL ? (
        <img
          src={profilePicURL}
          alt='Profile-pic'
          width={250}
          height={250}
          className='mx-auto rounded-2xl'
        />
      ) : undefined}
      <form action={uploadProfilePic}>
        <input type="file" name="picture" accept="image/*" />
        <SubmitButton>Add profile pic</SubmitButton>
      </form>
    </div>
  )
})
