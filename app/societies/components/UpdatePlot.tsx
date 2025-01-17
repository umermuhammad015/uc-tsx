"use server"
import { redirect } from "next/navigation"
import { prisma } from "@/app/db"
// import { revalidatePath } from "next/cache";

export default async function UpdatePlot(data: FormData) {

    console.log("🚀 ~ file: page.tsx:10 ~ createPlots ~ data:", data);

    const plot_date = (new Date(data.get("plot-date")?.valueOf() as string)).toISOString().substring(0, 10);

    const plot_id = data.get("plot-id")?.valueOf();

    const society_id = data.get("society-id")?.valueOf();

    const plot_type = data.get("plot-type")?.valueOf();

    const type = data.get("type")?.valueOf();

    const apartment_size = data.get("apartment-size")?.valueOf();

    const apartment_size_ft = data.get("apartment-size-ft")?.valueOf();

    const shop_size = data.get("shop-size")?.valueOf();

    const office_size = data.get("office-size")?.valueOf();

    const payment_mode = data.get("payment-mode")?.valueOf();

    const plot_size = data.get("plot-size")?.valueOf();

    const plot_price = parseInt(data.get("plot-price")?.valueOf() as string);

    const plot_rent = parseInt(data.get("plot-rent")?.valueOf() as string);

    const ins_total_price = parseInt(data.get("ins-total-price")?.valueOf() as string);

    const ins_down_payment = parseInt(data.get("ins-down-payment")?.valueOf() as string);

    const ins_possession_Amount = parseInt(data.get("ins-possession-Amount")?.valueOf() as string);

    const ins_period = parseInt(data.get("ins-period")?.valueOf() as string);


    const plot_remarks = data.get("plot-remarks")



    const update_query = {
        where: {
            id: Number(plot_id) as number
        },
        data: {
            plot_type: plot_type as string,
            type: type as string,
            apartment_size: apartment_size as string,
            apartment_size_ft: apartment_size_ft as string,
            shop_size: shop_size as string,
            office_size: office_size as string,
            payment_mode: payment_mode as string,
            size: plot_size as string,
            plot_price: plot_price,
            plot_rent: plot_rent,
            ins_down_payment: ins_down_payment,
            ins_total_price: ins_total_price,
            ins_period: ins_period,
            ins_possession_Amount: ins_possession_Amount,
            remarks: plot_remarks as string,
            date: plot_date
        }
    }

    await prisma.plots_history.create({
        data: {
            // name: name,
            // city: city

            plot_id: Number(plot_id) as number,
            society_id: Number(society_id) as number,
            plot_type: plot_type as string,
            type: type as string,
            apartment_size: apartment_size as string,
            apartment_size_ft: apartment_size_ft as string,
            shop_size: shop_size as string,
            office_size: office_size as string,
            payment_mode: payment_mode as string,
            size: plot_size as string,
            plot_price: plot_price,
            plot_rent: plot_rent,
            ins_down_payment: ins_down_payment,
            ins_total_price: ins_total_price,
            ins_period: ins_period,
            ins_possession_Amount: ins_possession_Amount,
            remarks: plot_remarks as string,
            date: plot_date

        }
    })

    // console.log("Update Query is")
    // console.log("update_query")

    await prisma.plots.update(update_query)

    redirect("/societies/" + society_id)

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
