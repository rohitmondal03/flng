"use client";

import { useRouter } from "next/navigation";

import { Button } from "../ui/button";
import {
  Drawer,
  DrawerHeader,
  DrawerContent,
  DrawerDescription,
  DrawerTrigger,
  DrawerTitle,
} from "../ui/drawer";


export default function SignOutBtn() {
  const router = useRouter();

  const handleSignOut = async () => {
    const response = await fetch("/api/sign-out", {
      method: "POST",
      redirect: "manual",
    });

    if (response.status === 0) {
      // redirected
      // when using `redirect: "manual"`, response status 0 is returned
      return router.refresh();
    }
  };


  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button
          variant="destructive"
          className="w-fit text-left"
        >
          Sign out
        </Button>
      </DrawerTrigger>
      <DrawerContent className="mx-auto text-center h-64">
        <DrawerHeader>
          <DrawerTitle className="text-center text-3xl">
            Are you sure you want to sign out?
          </DrawerTitle>
          <DrawerDescription className="text-center">
            You will need to sign in again to access your account.
          </DrawerDescription>
        </DrawerHeader>
        <div className="flex flex-col items-center justify-center gap-3">
          <Button
            variant="destructive"
            onClick={handleSignOut}
            className="w-[30vw]"
          >
            Sign out
          </Button>
          <Button
            variant={"default"}
            className="w-[30vw]"
          >
            Cancel
          </Button>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
