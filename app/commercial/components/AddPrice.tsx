"use server"

import prisma from "@/app/db"

export default async function AddPrice(entryDate: string, id: number, price: number, plot_size: any, property_type: string,
    apartment_size: string, building_size: string, shop_size: string, payment_mode: string, office_size: string, total_floor: string, total_bed: string,
    building_sq: any, rent: number, down_payment: number, total_price: number, possession_amount: number, installment_period: number, remarks: string) {

    // console.log("add plot called")

    // console.log(entryDate)
    // console.log(id)
    // console.log(plotType)
    // console.log(property_size)
    // console.log(apartment_size)

    try {
        const crt = await prisma.price.create({
            data: {
                date: entryDate,
                commercial_id: Number(id) as number,
                property_type: property_type as string,
                plot_size: plot_size as string,
                building_size: building_size as string,
                total_floor: total_floor as string,
                building_size_sq: building_sq as string,
                shop_size: shop_size as string,
                office_size: office_size as string,
                apartment_size: apartment_size as string,
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

