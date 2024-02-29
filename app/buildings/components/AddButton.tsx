"use client"
import { Button } from "@/components/ui/button"

import { useFormStatus } from 'react-dom'

function AddButton() {
    const { pending } = useFormStatus()
 
    return (
      // <button className="btn  text-white hover:bg-cyan-800 bg-cyan-800 hover:text-white capitalize disabled:text-black" disabled={pending}>{pending ? 'Adding...' : 'Add'}</button>

      <Button disabled={pending}>{pending ? 'Adding...' : 'Add'}</Button>

      
    )
}

export default AddButton