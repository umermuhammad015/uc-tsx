import { Floors } from "@prisma/client";
import { prisma } from "@/app/db"

export default async function FetchFloor(id:number): Promise<Floors | null> {

    const floors = await prisma.floors.findUnique({
        where: {
            id: Number(id) as number
        },
    })

    return (floors)
}