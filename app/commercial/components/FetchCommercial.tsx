
"use server"

import prisma from "../../db";

export default async function FetchCommercial(id:any) {

    const commercial = await prisma.commercial.findUnique({
        where: {
            id: Number(id) as number,
            
        },
    })

    // console.log(societies)

    return (commercial)
}
