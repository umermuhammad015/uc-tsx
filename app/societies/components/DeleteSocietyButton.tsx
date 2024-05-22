"use client"

import { useFormStatus } from 'react-dom'
import { Button } from "@/components/ui/button"
import { useEffect } from 'react'



function DeleteSocietyButton() {
  const { pending } = useFormStatus()

  console.log("pending")
  console.log(pending)

  return (

    <Button variant="destructive" disabled={pending}>{pending ? 'Deleting...' : 'Delete'}</Button>


  )
}

export default DeleteSocietyButton