"use server"

import { prisma } from "@/app/db"

export default async function FetchList(skip: number) {

    const data_summary = await prisma.societies.findMany({
        // select: {
        //     playerDob: true
        // },
        skip: skip * 2,
        take: 2,
        // where: {
        //     playerDob: {
        //         contains: name
        //     }
        // },
        // distinct: ['playerDob'],
    });

    console.log(data_summary)

    return (data_summary)
}