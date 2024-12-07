"use server"

import prisma from "@/app/db"

export default async function AddPlot(entryDate: string, avg_sale_price: number, id: number, avg_monthly_rent: number, down_payment_amount: number,
    instalment_period: number, instalment_amount: number, possession_amount: number, size_min: number, size_max: number, floor_num: string,
    floor_type: string, unit_type: string, instalment_plan: string, occupancy: number, remarks: string) {



    // console.log("add plot called")


    // console.log(entryDate)
    // console.log(id)
    // console.log(plotType)
    // console.log(property_size)
    // console.log(apartment_size)

    try {
        const crt = await prisma.floors.create({
            data: {
                date: entryDate,
                building_id: Number(id) as number,
                floor_type: floor_type as string,
                floor_no: floor_num as string,
                unit_type: unit_type as string,
                occupancy: occupancy,
                size_min: size_min,
                size_max: size_max,
                avg_sale_price: avg_sale_price,
                avg_monthly_rent: avg_monthly_rent,
                instalment_plan: instalment_plan,
                instalment_period: instalment_period,
                down_payment_amount: down_payment_amount,
                instalment_amount: instalment_amount,
                possession_amount: possession_amount,
                remarks: remarks as string
            },
        });

        // console.log("plot inserted successfully")
        // console.log(crt)

        return ("created successfully")

        // setIsAdding(!isAdding)
    } catch (error) {

        console.error('Error adding plot:', error);
        return ('Error adding plot:');

        // setIsAdding(!isAdding)
    }


}

