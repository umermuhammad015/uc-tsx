"use server"

import prisma from "../../db";

export default async function FetchSocietyName(societyKeywords: any) {

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
