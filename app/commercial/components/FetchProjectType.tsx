"use server"

import { prisma } from "@/app/db"

export default async function FetchProjectType() {

    // console.log("FetchDeveloper()")

    const types = await prisma.commercial.findMany({
        distinct: ['type'],
        select: {
            type: true,
        },
        orderBy: [
            {
                type: 'asc',
            }
         ],
        where: {
            NOT: {
                type: ''
            },

        },
    })

    // console.log("types")
    // console.log(types)

    return (types)
}
