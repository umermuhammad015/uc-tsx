"use server"

import { prisma } from "@/app/db"

export default async function FetchSocietyName(societyKeywords: string) {

    // console.log("FetchDeveloper()")

    const types = await prisma.societies.findMany({

        where: {
            name: {
              contains: societyKeywords,
              mode: 'insensitive', // Case-insensitive matching
            },
          },

        distinct: ['name'],
        select: {
            name: true,
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
