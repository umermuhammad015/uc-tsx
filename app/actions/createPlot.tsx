"use server";

import { redirect } from "next/navigation";
import prisma from "../db";
import { revalidatePath } from "next/cache";
import { z } from "zod"

// const fileSchema = z.instanceof(File, { message: "Required" })
// const imageSchema = fileSchema.refine(
//   file => file.size === 0 || file.type.startsWith("image/")
// )

// z.object({
//     image: imageSchema.refine(file => file.size > 0, "Required"),
// })

export default async function createPlot(data: FormData) {



    // console.log("🚀 ~ file: page.tsx:10 ~ createPlots ~ data:", data);


    const plot_date = (new Date(data.get("plot-date")?.valueOf() as string)).toISOString().substring(0, 10);


    const society_id = data.get("society-id")?.valueOf();

    const plot_type = data.get("plot-type")?.valueOf();

    const type = data.get("type")?.valueOf();

    const plot_size = data.get("plot-size")?.valueOf();

    const apartment_size = data.get("apartment-size")?.valueOf();

    const apartment_size_ft = data.get("apartment-size-ft")?.valueOf();

    const shop_size = data.get("shop-size")?.valueOf();

    const office_size = data.get("office-size")?.valueOf();

    const payment_mode = data.get("payment-mode")?.valueOf();

    const plot_price = parseInt(data.get("plot-price")?.valueOf() as string);

    const plot_rent = parseInt(data.get("plot-rent")?.valueOf() as string);

    const ins_total_price = parseInt(data.get("ins-total-price")?.valueOf() as string);

    const ins_down_payment = parseInt(data.get("ins-down-payment")?.valueOf() as string);

    const ins_possession_Amount = parseInt(data.get("ins-possession-Amount")?.valueOf() as string);

    const ins_period = parseInt(data.get("ins-period")?.valueOf() as string);

    const plot_remarks = data.get("plot-remarks")

    const add_more = data.get("add-more-plots")

    // console.log(plot_date)
    // console.log("🚀 ~ file: page.tsx:9 ~ createPlots ~ society_id:", society_id);
    // console.log("🚀 ~ file: page.tsx:9 ~ createPlots ~ plot_type:", plot_type);
    // console.log("🚀 ~ file: page.tsx:9 ~ createPlots ~ type:", type);
    // console.log("🚀 ~ file: page.tsx:9 ~ createPlots ~ plot_size:", plot_size);
    // console.log("🚀 ~ file: page.tsx:9 ~ createPlots ~ apartment_size_ft:", apartment_size_ft);
    // console.log("🚀 ~ file: page.tsx:9 ~ createPlots ~ plot_price:", plot_price);
    // console.log("🚀 ~ file: page.tsx:9 ~ createPlots ~ plot_rent:", plot_rent);
    // console.log("🚀 ~ file: page.tsx:9 ~ createPlots ~ plot_remarks:", plot_remarks);
    // console.log("🚀 ~ file: page.tsx:9 ~ createPlots ~ add_more:", add_more);


    const created_plot: any = await prisma.plots.create({
        data: {
            date: plot_date,
            society_id: Number(society_id) as number,
            plot_type: plot_type as string,
            type: type as string,
            size: plot_size as string,
            apartment_size: apartment_size as string,
            apartment_size_ft: apartment_size_ft as string,
            payment_mode: payment_mode as string,
            shop_size: shop_size as string,
            office_size: office_size as string,
            plot_price: plot_price,
            plot_rent: plot_rent,
            ins_down_payment: ins_down_payment,
            ins_total_price: ins_total_price,
            ins_period: ins_period,
            ins_possession_Amount: ins_possession_Amount,
            remarks: plot_remarks as string
        },
    });

    created_plot.plot_id = created_plot.id; // Copy the value of 'id' to 'building_id'
    delete created_plot.id; // Remove the old 'id' key

    // console.log(created_plot)

    const created_plot_copy = await prisma.plots_history.create({
        data: created_plot
    })

    if (add_more === "yes") {

        revalidatePath("/societies/plots/add/" + society_id,) // Update cached posts
        redirect("/societies/plots/add/" + society_id)

    } else {
        redirect("/societies/" + society_id)
    }





}

