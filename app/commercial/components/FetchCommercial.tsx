
"use server"

import { Commercial } from "@prisma/client";
import { prisma } from "@/app/db"

export default async function FetchCommercial(id:number): Promise<Commercial | null>   {

    const commercial = await prisma.commercial.findUnique({
        where: {
            id: Number(id) as number,
            
        },
    })

    // console.log(societies)

    return (commercial)
}
