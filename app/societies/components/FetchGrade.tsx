"use server"

import prisma from "../../db";

export default async function FetchGrade() {

    // console.log("FetchDeveloper()")

    const grades = await prisma.societies.findMany({
        distinct: ['grade'],
        select: {
            grade: true,
        },
        orderBy: [
            {
                grade: 'asc',
            }
         ],
        where: {
            NOT: {
                grade: ''
            },

        },
    })

    console.log("grades")
    console.log(grades)

    return (grades)
}
