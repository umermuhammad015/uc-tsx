"use server"

import prisma from "../../db";

export default async function FetchCity(){

    console.log("FetchCity() called")

    const city_name = await prisma.societies.findMany({
        distinct: ['city'],
        select: {
            city: true,
        },
        orderBy: [
            {
                city: 'asc',
            },
        ]
    })

    // console.log("FetchCity()2")
    // console.log(city_name)

    return (city_name)
}
