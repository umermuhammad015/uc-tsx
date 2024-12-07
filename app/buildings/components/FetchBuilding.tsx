"use server"

import prisma from "../../db";

export default async function FetchBuilding(id:any) {

    const buildings = await prisma.buildings.findUnique({
        where: {
            id: Number(id) as number
        },
    })

    return (buildings)
}
