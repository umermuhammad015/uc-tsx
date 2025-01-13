"use client"

import { useFormStatus } from 'react-dom'
import { Button } from "@/components/ui/button"

function DeleteFloorButton() {
    const { pending } = useFormStatus()
 
    return (
      // <button className="btn bg-red-700 text-white hover:bg-red-800 capitalize disabled:text-black" disabled={pending}>{pending ? 'Deleting...' : 'Delete'}</button>
      <Button variant="destructive" disabled={pending}>{pending ? 'Deleting...' : 'Delete'}</Button>
    )
}

export default DeleteFloorButton