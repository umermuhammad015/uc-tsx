import AddFloorButton from '@/app/buildings/components/AddFloorButton'
import UpdateFloorButton from '@/app/buildings/components/UpdateFloorButton'
import Link from 'next/link'
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import UpdateFloorForm from '@/app/buildings/components/UpdateFloorForm';
import FetchFloor from '@/app/buildings/components/FetchFloor';
import React from 'react'
import prisma from "../../../../db";
import { Button } from "@/components/ui/button"

import { redirect } from "next/navigation"


type Props = {
    params: { id: string }
    // searchParams: { [key: string]: string | string[] | undefined }
}

export default async function editFloorForm({ params }: Props) {

    console.log(params)

    // building = prisma.buildings.find(
    //     {
    //         _id: params.id
    //     }
    // )

    // const floors = await prisma.floors.findUnique({
    //     where: {
    //         id: Number(params.id) as number
    //     },
    // })

    const floors = await FetchFloor(params.id)

    // async function updateFloor(data: FormData) {
    //     "use server";

    // const building_id = await prisma.floors.findUnique({
    //     data: {
    //         // name: name,
    //         // city: city

    //         building_id : building_id as string,



    //     }
    //     where: {
    //         id: params.id,
    //     },
    // })



    //     const unit_type = data.get("building-floor-unit-type")?.valueOf();
    //     const occupancy = data.get("building-floor-occupancy")?.valueOf();
    //     const size_min = data.get("building-floor-size-min")?.valueOf();
    //     const size_max = data.get("building-floor-size-max")?.valueOf();
    //     const avg_sale_price = data.get("building-floor-avg-sale-price")?.valueOf();
    //     const avg_monthly_rent = data.get("building-floor-avg-monthly-rent")?.valueOf();
    //     const instalment_plan = data.get("building-instalment-plan")?.valueOf();
    //     const instalment_period = data.get("building-floor-instalment-period")?.valueOf();
    //     const down_payment_amount = data.get("building-floor-down-payment-amount")?.valueOf();
    //     const instalment_amount = data.get("building-floor-instalment-amount")?.valueOf();
    //     const possession_amount = data.get("building-floor-possession-amount")?.valueOf();
    //     const remarks = data.get("building-floor-remarks")?.valueOf();


    //     console.log("unit_type is")
    //     console.log(unit_type);


    //     const update_query = {
    //         where: {
    //             id: Number(params.id) as number
    //         },
    //         data: {
    //             // name: name,
    //             // city: city

    //             unit_type, occupancy, size_min,
    //             size_max, avg_sale_price,
    //             avg_monthly_rent, instalment_plan,
    //             instalment_period, down_payment_amount,
    //             instalment_amount, possession_amount,
    //             remarks

    //         }
    //     }

    //     console.log("Update Query is")
    //     console.log("update_query")

    //     const updateBuilding = await prisma.floors.update(update_query)
    //     // let updatedNote = await Note.findByIdAndUpdate({ _id: params.id }, { title, note });
    //     redirect('/buildings/')

    // }

    // console.log(floor)

    return (
        <>
            <h2>Update Floor</h2>
            <div className="">
                <UpdateFloorForm floor={floors} />
            </div>
        </>
    )
}



