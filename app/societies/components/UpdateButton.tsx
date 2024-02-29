"use client"
import { Button } from "@/components/ui/button"

import { useFormStatus } from 'react-dom'

function UpdateButton() {
    const { pending } = useFormStatus()
 
    return (
      // <button className='btn bg-cyan-800 hover:bg-cyan-800 text-white capitalize disabled:text-black' disabled={pending}>{pending ? 'Updating...' : 'Update'}</button>

      <Button className='btn' disabled={pending}>{pending ? 'Updating...' : 'Update'}</Button>
    )
}

export default UpdateButton