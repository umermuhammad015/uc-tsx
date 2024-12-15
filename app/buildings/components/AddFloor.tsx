"use server"

import prisma from "@/app/db"

export default async function AddPlot(entryDate: string, avg_sale_price: number, id: number, avg_monthly_rent: number, down_payment_amount: number,
    instalment_period: number, instalment_amount: number, possession_amount: number, size_min: number, size_max: number, floor_num: string,
    floor_type: string, apart_studio: string, apart_1_bed: string, apart_2_bed: string, apart_3_bed: string, apart_4_bed: string, apart_5_bed: string,
    apart_duplex: string, apart_penthouse: string, apart_furnished: string, apart_semi_furnished: string, service_apartment: string, hotel_suites_apartment: string,
     unit_type: string, instalment_plan: string, occupancy: number, remarks: string) {



    // console.log("add plot called")


    console.log(entryDate)
    console.log(id)
    console.log(apart_1_bed)
    console.log(apart_studio)
    console.log(apart_4_bed)

    try {
        const crt = await prisma.floors.create({
            data: {
                date: entryDate,
                building_id: Number(id) as number,
                floor_type: floor_type as string,
                floor_no: floor_num as string,
                occupancy: occupancy,
                unit_type: unit_type as string,
                floor_apartments_studio: apart_studio,
                floor_apartments_1_bed: apart_1_bed as string,
                floor_apartments_2_bed: apart_2_bed as string,
                floor_apartments_3_bed: apart_3_bed as string,
                floor_apartments_4_bed: apart_4_bed as string,
                floor_apartments_5_bed: apart_5_bed as string,
                floor_apartments_duplex: apart_duplex as string,
                floor_apartments_penthouse: apart_penthouse as string,
                floor_has_furnished: apart_furnished as string,
                floor_has_semi_furnished: apart_semi_furnished as string,
                floor_has_service_apartments: service_apartment as string,
                floor_has_hotel_suites_apartments: hotel_suites_apartment as string,
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

