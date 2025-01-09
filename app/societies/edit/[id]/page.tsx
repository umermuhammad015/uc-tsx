import Link from "next/link";
import prisma from "../../../db";
import FetchSociety from '@/app/societies/components/FatchSociety'
import UpdateSocietyForm from '@/app/societies/components/UpdateSocietyForm';
import { redirect } from "next/navigation"
import UpdateButton from "../../components/UpdateButton";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"



// "use client"

// import * as React from "react"
// import { format } from "date-fns"
// import { Calendar as CalendarIcon } from "lucide-react"

// import { cn } from "@/lib/utils"
// import { Button } from "@/components/ui/button"
// import { Calendar } from "@/components/ui/calendar"
// import {
//     Popover,
//     PopoverContent,
//     PopoverTrigger,
// } from "@/components/ui/popover"

// export function DatePickerDemo() {
//     const [date, setDate] = React.useState<Date>()
// }

type Props = {
    params: { id: number }
    // searchParams: { [key: string]: string | string[] | undefined }
}

export default async function editForm({ params }: any) {

    // console.log(params)

    const societies = await FetchSociety(params.id)

    return (
        <>
            <div className="text-lg"></div>
            <div className="container">

                <div className="mx-4">
                <UpdateSocietyForm societies={societies} />
                </div>
            </div>
        </>
    )
}