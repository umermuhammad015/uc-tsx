'use client'

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
// import { createUser } from '@/app/actions';
import { useState } from 'react';

export default function NewUser() {
	const [isOpen, setIsOpen] = useState(false);
	
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button>Create user</Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create user</DialogTitle>
        </DialogHeader>

	      <form
	        action={async (formData) => {
	        //   await createUser(formData);
            console.log("form submitted")
	          setIsOpen(false);
	        }}
	      >
          <input name='username' />
          <button type='submit'>Add user</button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
