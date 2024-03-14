"use client"

import { useFormStatus } from 'react-dom'
import { Button } from "@/components/ui/button"


function DeletePlotButton() {
  const { pending } = useFormStatus()

  return (

    // <button className={`btn bg-red-700 text-white hover:bg-red-800 capitalize  ${active === 'b1' ? 'bg-blue-500' : 'bg-blue-300'}`{disabled={pending}>{pending ? 'Deleting...' : 'Delete'}}
    //   onClick={() => setActive('b1')}></button>
    // <button className="btn bg-red-700 text-white hover:bg-red-800 capitalize disabled:text-black " disabled={pending}>{pending ? 'Deleting...' : 'Delete'}</button>

    <Button variant="destructive" disabled={pending}>{pending ? 'Deleting...' : 'Delete'}</Button>

  )
}

export default DeletePlotButton