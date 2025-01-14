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
import deleteprice from "./DeletePrice";


export default function DeletePriceDialog({ price_id }: any) {

    const { toast } = useToast()
    const [isConfirmOpen, setIsConfirmOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false)

    async function handleDelete() {

        setIsLoading(true)

        const deleteplot = await deleteprice(price_id)

        setIsLoading(false)

        console.log("logging society_id")
        console.log(deleteplot)
        toast({
            className: "bg-red-600 rounded-lg",
            title: "Delete Society",
            description: "your Society has been deleted ",

        })

        // revalidatePath("/societies");
    }

    return (<>

    
        <AlertDialog open={isConfirmOpen} onOpenChange={setIsConfirmOpen}>
            <AlertDialogTrigger asChild>
                <Button variant="destructive">{isLoading ? "Deleting...." : "Delete"}</Button>
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
                        {/* <DeleteSocietyButton /> */}
                        {/* <form action={deleteSociety}>
                            <input type="hidden" name="societies-id" value={society_id} />
                            <DeleteSocietyButton />

                        </form> */}
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