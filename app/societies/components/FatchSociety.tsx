
"use server"

import { Societies } from "@prisma/client";
import { prisma } from "@/app/db"

export default async function FetchSociety(id:number): Promise<Societies | null> {

    const societies = await prisma.societies.findUnique({
        // select: {
        //     plot_sizes_residential_87_5: true
        // },
        where: {
            id: Number(id) as number,
            
        },
    })

    // console.log(societies)

    return (societies)
}
