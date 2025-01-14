"use server"
import { redirect } from "next/navigation"
import prisma from "../../db";

export default async function UpdatePrice(data: FormData) {

    console.log("🚀 ~ file: page.tsx:10 ~ createPrice ~ data:", data);

    const date = (new Date(data.get("date")?.valueOf() as string)).toISOString().substring(0, 10);

    const price_id = data.get("price-id")?.valueOf();

    const commercial_id = data.get("commercial-id")?.valueOf();

    const property_type = data.get("property-type")?.valueOf();

    const plot_size = data.get("plot-size")?.valueOf();

    const building_size = data.get("building-size")?.valueOf();

    const total_floor = data.get("total-floor")?.valueOf();

    const building_size_sq = data.get("building-size-sq")?.valueOf();

    const shop_size = data.get("shop-size")?.valueOf();

    const office_size = data.get("office-size")?.valueOf();

    const apartment_size = data.get("apartment-size")?.valueOf();

    const warehouse_size = data.get("warehouse-size")?.valueOf();

    const total_bed = data.get("total-bed")?.valueOf();

    const payment_mode = data.get("payment-mode")?.valueOf();

    const price = parseInt(data.get("price")?.valueOf() as string);

    const rent = parseInt(data.get("rent")?.valueOf() as string);

    const total_price = parseInt(data.get("total-price")?.valueOf() as string);

    const installment_period = parseInt(data.get("installment-period")?.valueOf() as string);

    const down_payment = parseInt(data.get("down-payment")?.valueOf() as string);

    const possession_amount = parseInt(data.get("possession-amount")?.valueOf() as string);

    const remarks = data.get("remarks")?.valueOf();



    const update_query = {
        where: {
            id: Number(price_id) as number
        },
        data: {
            date: date,
            property_type: property_type as string,
            plot_size: plot_size as string,
            building_size: building_size as string,
            total_floor: total_floor as string,
            building_size_sq: building_size_sq as string,
            shop_size: shop_size as string,
            office_size: office_size as string,
            apartment_size: apartment_size as string,
            warehouse_size: warehouse_size as string,
            total_bed: total_bed as string,
            payment_mode: payment_mode as string,
            price: price,
            rent: rent,
            total_price: total_price,
            installment_period: installment_period,
            down_payment: down_payment,
            possession_amount: possession_amount,
            remarks: remarks as string,





        },
    }


    const created_price_copy = await prisma.price_history.create({
        data: {
            // name: name,
            // city: city

            price_id: Number(price_id) as number,
            commercial_id: Number(commercial_id) as number,
            date: date,
            property_type: property_type as string,
            plot_size: plot_size as string,
            building_size: building_size as string,
            total_floor: total_floor as string,
            building_size_sq: building_size_sq as string,
            shop_size: shop_size as string,
            office_size: office_size as string,
            apartment_size: apartment_size as string,
            warehouse_size: warehouse_size as string,
            total_bed: total_bed as string,
            payment_mode: payment_mode as string,
            price: price,
            rent: rent,
            total_price: total_price,
            installment_period: installment_period,
            down_payment: down_payment,
            possession_amount: possession_amount,
            remarks: remarks as string,

        }
    })



    console.log("Update Query is")
    console.log("update_query")

    const UpdateCommercial = await prisma.price.update(update_query)
    redirect("/commercial/" + commercial_id)

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
