
import FetchSociety from '@/app/societies/components/FatchSociety'
import UpdateSocietyForm from '@/app/societies/components/UpdateSocietyForm';




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