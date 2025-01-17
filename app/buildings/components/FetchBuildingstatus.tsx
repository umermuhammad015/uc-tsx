"use server"

import { prisma } from "@/app/db"

export default async function FetchBuildingStatus() {

    // console.log("FetchDeveloper()")

    const types = await prisma.buildings.findMany({
        distinct: ['status'],
        select: {
            status: true,
        },
        orderBy: [
            {
                status: 'asc',
            }
         ],
        where: {
            NOT: {
                status: ''
            },

        },
    })

    // console.log("types")
    // console.log(types)

    return (types)
}
