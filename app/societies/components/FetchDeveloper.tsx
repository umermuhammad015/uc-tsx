"use server"

import prisma from "../../db";

export default async function FetchDeveloper() {

    const developer_names = await prisma.societies.findMany({
        distinct: ['developer_name'],
        select: {
            developer_name: true,
        },
        orderBy: [
            {
                developer_name: 'asc',
            }
         ],
        where: {
            NOT: {
                developer_name: ''
            },

        },
    })

    // console.log("FetchSocietyNames society_name")
    // console.log(developer_names)

    return (developer_names)
}
