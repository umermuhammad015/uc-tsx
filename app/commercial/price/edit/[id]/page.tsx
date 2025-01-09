import UpdateHomeButton from '@/app/societies/components/UpdateHouseButton'
import Link from 'next/link'
// import React, { useState } from 'react'
import { Input } from "@/components/ui/input"
import prisma from "../../../../db";
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import FetchPlot from '@/app/societies/components/FetchPlot'
import UpdatePlotForm from '@/app/societies/components/UpdatePlotForm';

import { redirect } from "next/navigation"
import UpdatePriceForm from '@/app/commercial/components/UpdatePriceForm';
import FetchPrice from '@/app/commercial/components/FetchPrice';


type Props = {
    params: { id: number }
    // searchParams: { [key: string]: string | string[] | undefined }
}



export default async function editPriceForm({ params }: Props) {


    // console.log(params)

    // const homes = await prisma.homes.findUnique({
    //     where: {
    //         id: Number(params.id) as number
    //     },
    // })

    const price = await FetchPrice(params.id)



    
    return (
        <>
            <div className="text-lg">Price Information</div>
            <div className="container border-2 ">

                <div className="mx-4">
                <UpdatePriceForm price={price} />
                </div>
            </div>
        </>
    )
}