"use server"

import prisma from "../../db";

export default async function FetchBuildingChart() {

    // console.log("FetchDeveloper()")

    // const cityCounts = await prisma.buildings.groupBy({
    //     by: ['city'],
    //     where: {
    //         city: {
    //             not: '',
    //         },
    //     },
    //     _count: {
    //         city: true,
    //     },
    //     orderBy: {
    //         city: 'asc',
    //     },
    // });

    const cityCounts = await prisma.$queryRaw`

    SELECT city, 
        CAST(count(city) AS INT) as count 
    FROM public."Buildings"
    where city != ''
    group by city
    ORDER BY city ASC
    `;

    // console.log("cityCounts")
    // console.log(cityCounts)

    return cityCounts;
}

