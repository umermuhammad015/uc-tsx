"use server";

import { redirect } from "next/navigation";
import prisma from "../db";
import { revalidatePath } from "next/cache";

export default async function createPrice(data: FormData) {

    // console.log("🚀 ~ file: page.tsx:10 ~ createPlots ~ data:", data);


    const date = (new Date(data.get("date")?.valueOf() as string)).toISOString().substring(0, 10);

    const commercial_id = data.get("commercial-id")?.valueOf();

    const property_type = data.get("property-type")?.valueOf();


    const building_size = data.get("building-size")?.valueOf();

    const plot_size = data.get("plot-size")?.valueOf();

    const total_floor = data.get("total-floor")?.valueOf();

    const building_size_sq = data.get("building-size-sq")?.valueOf();

    const shop_size = data.get("shop-size")?.valueOf();

    const office_size = data.get("office-size")?.valueOf();

    const warehouse_size = data.get("warehouse-size")?.valueOf();

    const apartment_size = data.get("apartment-size")?.valueOf();

    const total_bed = data.get("total-bed")?.valueOf();

    const payment_mode = data.get("payment-mode")?.valueOf();

    const price = parseInt(data.get("price")?.valueOf() as string);

    const rent = parseInt(data.get("rent")?.valueOf() as string);

    const total_price = parseInt(data.get("total-price")?.valueOf() as string);

    const installment_period = parseInt(data.get("installment-period")?.valueOf() as string);

    const down_payment = parseInt(data.get("down-payment")?.valueOf() as string);

    const possession_amount = parseInt(data.get("possession-amount")?.valueOf() as string);

    const remarks = data.get("remarks")?.valueOf();


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


    const created_price: any = await prisma.price.create({
        data: {
            date: date,
            commercial_id: Number(commercial_id) as number,
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
    });

    created_price.price_id = created_price.id; // Copy the value of 'id' to 'building_id'
    delete created_price.id; // Remove the old 'id' key

    // console.log(created_floor)

    const created_price_copy = await prisma.price_history.create({
        data: created_price
    })

    // redirect("/commercial");
    redirect("/commercial/" + commercial_id);


}

