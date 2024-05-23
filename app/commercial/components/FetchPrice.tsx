import prisma from "../../db";

export default async function FetchPrice(id:any) {

    const price = await prisma.price.findUnique({
        where: {
            id: Number(id) as number
        },
    })

    return (price)
}
