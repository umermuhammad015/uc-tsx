"use server"

import { prisma } from "@/app/db"

export default async function FetchDate() {

    // console.log("FetchDeveloper()")

    const dates = await prisma.buildings.findMany({
        distinct: ['status'],
        select: {
            survey_date: true,
        },
        orderBy: [
            {
                survey_date: 'asc',
            }
        ],
        where: {

            survey_date: ''

        },
    })

    // console.log("types")
    // console.log(types)

    return (dates)
}
