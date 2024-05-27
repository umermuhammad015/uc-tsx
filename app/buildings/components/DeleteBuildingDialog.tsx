"use client"

import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
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
import { useToast } from "@/components/ui/use-toast"
import { Button } from "@/components/ui/button"

import prisma from "@/app/db";
import { revalidate } from "../List";
import { revalidatePath } from "next/cache";
import deleteBuilding from "./DeleteBuilding";


export default function DeleteCommercialDialog({building_id}:any) {

    const { toast } = useToast()
    const [open, setOpen] = useState(false);
    const [isConfirmOpen, setIsConfirmOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false)

    async function handleDelete(){
       
        setIsLoading(true)

        const deleteCom = await deleteBuilding(building_id)

        setIsLoading(false)

        // console.log("logging society_id")
        // console.log(deleteCom)

       toast({
            className: "bg-red-600 rounded-lg",
            title: "Delete Commercial Zone",
            description: "your Commercial Zone has been deleted ",

        })

    }

    return (<>

       
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