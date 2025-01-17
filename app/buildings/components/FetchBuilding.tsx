"use server"

import { Buildings } from "@prisma/client";
import { prisma } from "@/app/db"

export default async function FetchBuilding(id:number): Promise<Buildings | null>  {

    const buildings = await prisma.buildings.findUnique({
        where: {
            id: Number(id) as number
        },
    })

    return (buildings)
}
