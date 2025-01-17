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
import { useToast } from "@/hooks/use-toast"
import { Button } from "@/components/ui/button"
import deleteBuilding from "./DeleteBuilding";


export default function DeleteCommercialDialog({building_id} : {building_id: number}) {

    const { toast } = useToast()
    const [isConfirmOpen, setIsConfirmOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false)

    async function handleDelete(){
       
        setIsLoading(true)

        await deleteBuilding(building_id)

        setIsLoading(false)

        

       toast({
            className: "bg-red-600 rounded-lg",
            title: "Delete Building",
            description: "your Building has been deleted ",

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
                           
                            handleDelete()
                           
                        }}
                        
                        >
                        Continue Deletion
                       
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
        <Toaster />
    

    </>)
}