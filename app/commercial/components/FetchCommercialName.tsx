"use server"

import { prisma } from "@/app/db"

export default async function FetchCommercialName(commercialKeywords: string) {

    // console.log("FetchDeveloper()")

    const types = await prisma.commercial.findMany({

        where: {
            commercial_zone_name: {
              contains: commercialKeywords,
              mode: 'insensitive', // Case-insensitive matching
            },
          },

        distinct: ['commercial_zone_name'],
        select: {
            commercial_zone_name: true,
        },
        orderBy: [
            {
                commercial_zone_name: 'asc',
            }
        ],
        take: 5,

    })

    // console.log("types")
    // console.log(types)

    return (types)
}
