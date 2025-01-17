"use server"

import { prisma } from "@/app/db"

export default async function FetchBuildingName(buildingKeywords: string) {

    // console.log("FetchDeveloper()")

    const types = await prisma.buildings.findMany({

        where: {
            name: {
              contains: buildingKeywords,
              mode: 'insensitive', // Case-insensitive matching
            },
          },

        distinct: ['name'],
        select: {
            name: true,
            id: true,
        },
        orderBy: [
            {
                name: 'asc',
            }
        ],
        take: 5,

    })

    // console.log("types")
    // console.log(types)

    return (types)
}
