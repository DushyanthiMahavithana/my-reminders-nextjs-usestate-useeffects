import Image from "next/image";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Home() {
  return (
    <>
    <h1 className="text-center mt-10 text-2xl">Reminders</h1>
    <div className="flex w-full max-w-sm items-center space-x-2 m-20">
    <Input type="text" placeholder="Type your Reminder" />
    <Button type="submit">Save</Button>
  </div>
  </>

  );
}
