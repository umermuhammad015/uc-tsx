"use server"

import { prisma } from "@/app/db"

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

    // Validate the response structure to ensure it matches ChartDataItem[]
    if (!Array.isArray(cityCounts) || !cityCounts.every(item => typeof item.city === 'string' && typeof item.count === 'number')) {
        throw new Error('Invalid response format');
    }


    return cityCounts;
}

