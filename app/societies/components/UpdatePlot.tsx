"use server"
import { redirect } from "next/navigation"
import prisma from "../../db";
import { revalidatePath } from "next/cache";

export default async function UpdatePlot(data: FormData) {

    console.log("🚀 ~ file: page.tsx:10 ~ createPlots ~ data:", data);

    const plot_date = (new Date(data.get("plot-date")?.valueOf() as string)).toISOString().substring(0, 10);

    const society_id = data.get("society-id")?.valueOf();

    const plot_type = data.get("plot-type")?.valueOf();

    const type = data.get("type")?.valueOf();

    const apartment_size = data.get("apartment-size")?.valueOf();

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
            apartment_size: apartment_size as string,
            size: plot_size as string,
            plot_price: plot_price as string,
            plot_rent: plot_rent as string,
            remarks: plot_remarks as string,
            date: plot_date
        }
    }

    console.log("Update Query is")
    console.log("update_query")

    const updateSociety = await prisma.plots.update(update_query)
    redirect('/societies/')

    // if (add_more === "yes") {

    //     revalidatePath("/societies/plots/add/" + society_id, ) // Update cached posts
    //     redirect("/societies/plots/add/" + society_id)

    // } else {
    //     redirect("/societies/" + society_id) 
    // } 

    // return (
    //     <div>UpdatePlot</div>
    // )
}
