"use client"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
// import { useToast } from "@/components/ui/use-toast"
import { useToast } from "@/hooks/use-toast"
import { Button } from "@/components/ui/button"
import deleteCommercial from "./DeleteCommercial";


export default function DeleteCommercialDialog({commercial_id}:any) {

    const { toast } = useToast()
    const [isConfirmOpen, setIsConfirmOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false)

    async function handleDelete(){
       
        setIsLoading(true)

        const deleteCom = await deleteCommercial(commercial_id)

        setIsLoading(false)

        console.log("logging society_id")
        console.log(deleteCom)

       toast({
            className: "bg-red-600 rounded-lg",
            title: "Delete Commercial Zone",
            description: "your Commercial Zone has been deleted ",

        })

    }

    return (<>

        {/* <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button variant="destructive">Delete</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>Delete Society</DialogTitle>
                    <DialogDescription>
                        Are you absolutely sure?
                    </DialogDescription>
                </DialogHeader>
                <div className="flex items-center space-x-2">

                </div>
                <DialogFooter className="sm:justify-start">
                    <DialogClose asChild>
                        <Button type="button" variant="secondary">
                            Close
                        </Button>

                    </DialogClose>
                    <form action={deleteSociety}>
                        <input type="hidden" name="societies-id" value={society_id} />
                        <DeleteSocietyButton setOpen={setOpen} />

                    </form>
                </DialogFooter>
            </DialogContent>
        </Dialog> */}
        {/* <AlertDialog open={open} onOpenChange={setOpen}> */}
        <AlertDialog open={isConfirmOpen} onOpenChange={setIsConfirmOpen}>
            <AlertDialogTrigger asChild>
                <Button variant="destructive">{isLoading ? "Deleting...." : "Delete" }</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Delete</AlertDialogTitle>
                    <AlertDialogDescription>
                        Are you absolutely sure?
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>

                    <AlertDialogAction 
                        onClick={() => {
                            // console.log("delete")

                            // console.log("Deleteing inside deleteSociety")
                            // console.log(society_id)
                            handleDelete()
                            // const societies_id = data.get("societies-id")?.valueOf();
                            // console.log(societies_id);
                        }}
                        
                        >
                        Continue Deletion
                       
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
        <Toaster />
        {/* <Button
            onClick={() => {
                setIsConfirmOpen(true)
            }}
        >Delete</Button> */}

    </>)
}