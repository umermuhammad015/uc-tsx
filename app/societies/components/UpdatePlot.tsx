"use server"
import { redirect } from "next/navigation"
import prisma from "../../db";

export default async function UpdatePlot(data: FormData) {

    console.log("🚀 ~ file: page.tsx:10 ~ createPlots ~ data:", data);

    const society_id = data.get("society-id")?.valueOf();

    const plot_type = data.get("plot-type")?.valueOf();

    const type = data.get("type")?.valueOf();

    const plot_size = data.get("plot-size")?.valueOf();

    const plot_price = data.get("plot-price")?.valueOf();

    const plot_rent = data.get("plot-rent")?.valueOf();

    const plot_remarks = data.get("plot-remarks")

    const update_query = {
        where: {
            id: Number(society_id) as number
        },
        data: {
            // name: name,
            // city: city
            plot_type: plot_type as string,
            type: type as string,
            size: plot_size as string,
            plot_price: plot_price as string,
            plot_rent: plot_rent as string,
            remarks: plot_remarks as string
        }
    }

    console.log("Update Query is")
    console.log("update_query")

    const updateSociety = await prisma.plots.update(update_query)
    // let updatedNote = await Note.findByIdAndUpdate({ _id: params.id }, { title, note });
    redirect('/societies/')

    // return (
    //     <div>UpdatePlot</div>
    // )
}
