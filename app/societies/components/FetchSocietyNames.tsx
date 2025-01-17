"use server"

import { prisma } from "@/app/db"

export default async function FetchSocietyNames(nameKeywords:string) {

    const society_name = await prisma.societies.findMany({
        distinct: ['name'],
        select: {
            name: true,
        },
        where: {
            name: {
                contains: nameKeywords,
                mode: 'insensitive',
            }
        },
    })

    // console.log("FetchSocietyNames society_name")
    // console.log(society_name)

    return (society_name)
}