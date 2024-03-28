
import prisma from "../../db";

export default async function FetchSociety(id:any) {

    const societies = await prisma.societies.findUnique({
        where: {
            id: Number(id) as number
        },
    })

    return (societies)
}
