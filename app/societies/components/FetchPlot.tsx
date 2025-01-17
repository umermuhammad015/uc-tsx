import { prisma } from "@/app/db"

export default async function FetchPlot(id:number) {

    const plots = await prisma.plots.findUnique({
        where: {
            id: Number(id) as number
        },
    })

    return (plots)
}
