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


type Props = {
    params: { id: string }

    // searchParams: { [key: string]: string | string[] | undefined }
}



export default async function editPlotForm({ params }: Props) {

    const { id } = await params;


    // const { id } = await params;

    // const floors = await FetchFloor(id)

    const plots = await FetchPlot(id)




    return (
        <>
            <div className="text-lg">Plots/Bungalows Information</div>
            <div className="container border-2 ">

                <div className="mx-4">
                    <UpdatePlotForm plots={plots} />
                </div>
            </div>
        </>
    )
}