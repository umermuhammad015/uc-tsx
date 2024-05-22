
"use server"

import prisma from "../../db";

export default async function FetchSociety(id:any) {

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
