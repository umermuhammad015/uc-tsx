"use server";

import { redirect } from "next/navigation";
import prisma from "../db";
import { revalidatePath } from "next/cache";

export default async function createPlot(data: FormData) {

    console.log("🚀 ~ file: page.tsx:10 ~ createPlots ~ data:", data);


    const plot_date = (new Date(data.get("plot-date")?.valueOf() as string)).toISOString().substring(0, 10);


    const society_id = data.get("society-id")?.valueOf();

    const plot_type = data.get("plot-type")?.valueOf();

    const type = data.get("type")?.valueOf();

    const plot_size = data.get("plot-size")?.valueOf();

    const apartment_size = data.get("apartment-size")?.valueOf();

    const plot_price = data.get("plot-price")?.valueOf();

    const plot_rent = data.get("plot-rent")?.valueOf();

    const banglow_price = data.get("banglow-price")?.valueOf();

    const banglow_rent = data.get("banglow_rent")?.valueOf();


    const plot_direction = data.get("plot-direction")?.valueOf();

    const is_corner = data.get("is-corner")?.valueOf();

    const instalment_period = data.get("instalment-period")

    const instalment_plan = data.get("instalment-plan")?.valueOf();

    const plot_remarks = data.get("plot-remarks")

    const add_more = data.get("add-more-plots")

    console.log(plot_date)
    console.log("🚀 ~ file: page.tsx:9 ~ createPlots ~ society_id:", society_id);
    console.log("🚀 ~ file: page.tsx:9 ~ createPlots ~ plot_type:", plot_type);
    console.log("🚀 ~ file: page.tsx:9 ~ createPlots ~ type:", type);
    console.log("🚀 ~ file: page.tsx:9 ~ createPlots ~ plot_size:", plot_size);
    console.log("🚀 ~ file: page.tsx:9 ~ createPlots ~ plot_price:", plot_price);
    console.log("🚀 ~ file: page.tsx:9 ~ createPlots ~ plot_rent:", plot_rent);
    console.log("🚀 ~ file: page.tsx:9 ~ createPlots ~ banglow_price:", banglow_price);
    console.log("🚀 ~ file: page.tsx:9 ~ createPlots ~ banglow_rent:", banglow_rent);
    console.log("🚀 ~ file: page.tsx:9 ~ createPlots ~ plot_direction:", plot_direction);
    console.log("🚀 ~ file: page.tsx:9 ~ createPlots ~ instalment_period:", instalment_period);
    console.log("🚀 ~ file: page.tsx:9 ~ createPlots ~ instalment_plan:", instalment_plan);
    console.log("🚀 ~ file: page.tsx:9 ~ createPlots ~ plot_remarks:", plot_remarks);
    console.log("🚀 ~ file: page.tsx:9 ~ createPlots ~ add_more:", add_more);


    await prisma.plots.create({
        data: {
            date: plot_date,
            society_id: Number(society_id) as number,
            plot_type: plot_type as string,
            type: type as string,
            size: plot_size as string,
            apartment_size: apartment_size as string,
            plot_price: plot_price as string,
            plot_rent: plot_rent as string,
            banglow_price: banglow_price as string,
            banglow_rent: banglow_rent as string,
            direction: plot_direction as string,
            is_corner: is_corner as string,
            instalment_period: instalment_period as string,
            instalment_plan: instalment_plan as string,
            remarks: plot_remarks as string
        },
    });

    if (add_more === "yes") {

        revalidatePath("/societies/plots/add/" + society_id, ) // Update cached posts
        redirect("/societies/plots/add/" + society_id)

    } else {
        redirect("/societies/" + society_id) 
    } 

}

