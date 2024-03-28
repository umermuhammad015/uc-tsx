import prisma from "../../db";

export default async function FetchFloor(id:any) {

    const floors = await prisma.floors.findUnique({
        where: {
            id: Number(id) as number
        },
    })

    return (floors)
}