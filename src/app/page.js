'use client'
import Image from "next/image";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from 'next/link'
import React, {useState} from "react";

export default function Home() {
  const [reminder,setReminder] = useState("")
  const [reminderArray,setReminderArray] = useState([])

  const handleSave=()=>{
   
    setReminderArray([...reminderArray,reminder]);
    setReminder("");
    
  }


  const lastReminder = ()=>{
    if(reminderArray.length > 1){
      return <p> {reminderArray[reminderArray.length-2]} </p>
    }else{
      return <p className="text-red-600">No previous Reminders</p>
    }
  }

  
  return (
    <>
      <h1 className="text-center mt-10 text-2xl">Reminders</h1>
      <Link className="mx-40" href='/new'>View All Reminders</Link>

      <div className="flex w-full max-w-sm items-center space-x-2 m-20">
        <Input type="text" value={reminder} onChange={(event) => setReminder(event.target.value)} placeholder="Type your Reminder" />
        <Button type="submit" onClick={handleSave}>Save</Button>
      </div>

      <div className="mx-20">
         Previous Reminder: 
        {lastReminder()}
      </div>
    </>
  );
}
