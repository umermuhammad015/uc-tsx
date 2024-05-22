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
    params: { id: number }
    // searchParams: { [key: string]: string | string[] | undefined }
}



export default async function editPlotForm({ params }: Props) {


    console.log(params)

    // const homes = await prisma.homes.findUnique({
    //     where: {
    //         id: Number(params.id) as number
    //     },
    // })

    const plots = await FetchPlot(params.id)



    // async function updateHome(data: FormData) {
    //     "use server";

    //     console.log("🚀 ~ file: page.tsx:10 ~ createPlots ~ data:", data);

    //     const society_id = data.get("society-id")?.valueOf();

    //     const home_type = data.get("home-type")?.valueOf();

    //     const type = data.get("type")?.valueOf();

    //     const home_size = data.get("home-size")?.valueOf();

    //     const plot_price = data.get("plot-price")?.valueOf();

    //     const plot_rent = data.get("plot-rent")?.valueOf();

    //     const home_remarks = data.get("home-remarks")





    //     const update_query = {
    //         where: {
    //             id: Number(params.id) as number
    //         },
    //         data: {
    //             // name: name,
    //             // city: city

    //             society_id: Number(society_id) as number,
    //             home_type: home_type as string,
    //             type: type as string,
    //             size: home_size as string,
    //             plot_price: plot_price as string,
    //             plot_rent: plot_rent as string,
    //             remarks: home_remarks as string


    //         }
    //     }

    //     console.log("Update Query is")
    //     console.log("update_query")

    //     const updateSociety = await prisma.homes.update(update_query)
    //     // let updatedNote = await Note.findByIdAndUpdate({ _id: params.id }, { title, note });
    //     redirect('/societies/')

    // }

    // console.log(plots)

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