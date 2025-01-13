"use server"

import prisma from "@/app/db"

// export default async function AddPlot(entryDate: string, avg_sale_price: number, building_id: number, avg_monthly_rent: number, down_payment_amount: number,
//     instalment_period: number, instalment_amount: number, possession_amount: number, size_min: number, size_max: number, floor_num: string,
//     floor_type: string, apart_studio: string, apart_1_bed: string, apart_2_bed: string, apart_3_bed: string, apart_4_bed: string, apart_5_bed: string,
//     apart_duplex: string, apart_penthouse: string, apart_furnished: string, apart_semi_furnished: string, service_apartment: string, hotel_suites_apartment: string,
//      unit_type: string, instalment_plan: string, occupancy: number, remarks: string) {
export default async function AddPlot(plot_object: any) {



    // console.log("add plot called")


    // console.log(entryDate)
    // console.log(building_id)
    // console.log(apart_1_bed)
    // console.log(apart_studio)
    // console.log(apart_4_bed)

    try {
        const crt = await prisma.floors.create({
            data: plot_object,
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

