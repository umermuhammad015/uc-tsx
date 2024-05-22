"use server"

import prisma from "@/app/db"

export default async function AddPlot(entryDate: string, id: number, plotType: string, property_size: string, apartment_size: string, apartment_size_ft: string, shop_size: string, office_size: string, payment_mode: string,
    plot_price:number, plot_rent:number, ins_down_payment: number, ins_total_price: number, ins_period: number, ins_possession_Amount: number, remarks: string) {

    console.log("add plot called")

    console.log(entryDate)
    console.log(id)
    console.log(plotType)
    console.log(property_size)
    console.log(apartment_size)

    try {
        const crt = await prisma.plots.create({
            data: {
                date: entryDate,
                society_id: Number(id) as number,
                type: plotType as string,
                size: property_size as string,
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
                remarks: remarks as string
            },
        });

        console.log("plot inserted successfully")
        console.log(crt)

        return ("created successfully")

        // setIsAdding(!isAdding)
    } catch (error) {

        console.error('Error adding plot:', error);
        return ('Error adding plot:');

        // setIsAdding(!isAdding)
    }


}

