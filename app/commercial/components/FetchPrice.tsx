import { prisma } from "@/app/db"

export default async function FetchPrice(id:number) {

    const price = await prisma.price.findUnique({
        where: {
            id: Number(id) as number
        },
    })

    return (price)
}
