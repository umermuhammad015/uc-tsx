import prisma from "../../db";

export default async function FetchPlot(id:any) {

    const plots = await prisma.plots.findUnique({
        where: {
            id: Number(id) as number
        },
    })

    return (plots)
}
