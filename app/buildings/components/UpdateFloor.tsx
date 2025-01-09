"use server"

import { redirect } from "next/navigation"
import prisma from "../../db";
// import { date } from "zod";

console.log("hiiiiiiiiii")

export default async function UpdateFloor(data: FormData) {

    console.log("UpdateFloor called")

    const floor_date = (new Date(data.get("floor-date")?.valueOf() as string)).toISOString().substring(0, 10);
    const floor_id = data.get("floor-id")?.valueOf();
    const building_id = data.get("building-id")?.valueOf();
    // const unit_type = data.get("building-floor-unit-type")?.valueOf();
    const floor_apartments_studio = data.get("floor-apartments-studio")?.valueOf() === undefined ? null : "yes";
    const floor_apartments_1_bed = data.get("floor-apartments-1-bed")?.valueOf() === undefined ? null : "yes";
    const floor_apartments_2_bed = data.get("floor-apartments-2-bed")?.valueOf() === undefined ? null : "yes";
    const floor_apartments_3_bed = data.get("floor-apartments-3-bed")?.valueOf() === undefined ? null : "yes";
    const floor_apartments_4_bed = data.get("floor-apartments-4-bed")?.valueOf() === undefined ? null : "yes";
    const floor_apartments_5_bed = data.get("floor-apartments-5-bed")?.valueOf() === undefined ? null : "yes";
    const floor_apartments_duplex = data.get("floor-apartments-duplex")?.valueOf() === undefined ? null : "yes";
    const floor_apartments_penthouse = data.get("floor-apartments-penthouse")?.valueOf() === undefined ? null : "yes";
    const floor_has_furnished = data.get("floor-has-furnished")?.valueOf() === undefined ? null : "yes";
    const floor_has_semi_furnished = data.get("floor-has-semi-furnished")?.valueOf() === undefined ? null : "yes";
    const floor_has_service_apartments = data.get("floor-has-service-apartments")?.valueOf() === undefined ? null : "yes";
    const floor_has_hotel_suites_apartments = data.get("floor-has-hotel-suites-apartments")?.valueOf() === undefined ? null : "yes";
    const floor_no = data.get("building-floor-no")?.valueOf();
    const floor_type = data.get("building-floor-type")?.valueOf();
    const occupancy = parseInt(data.get("building-floor-occupancy")?.valueOf() as string);
    const size_min = parseInt(data.get("building-floor-size-min")?.valueOf() as string);
    const size_max = parseInt(data.get("building-floor-size-max")?.valueOf() as string);
    const avg_sale_price = parseInt(data.get("building-floor-avg-sale-price")?.valueOf() as string);
    const avg_monthly_rent = parseInt(data.get("building-floor-avg-monthly-rent")?.valueOf() as string);
    const instalment_plan = data.get("building-instalment-plan")?.valueOf();
    const instalment_period = parseInt(data.get("building-floor-instalment-period")?.valueOf() as string);
    const down_payment_amount = parseInt(data.get("building-floor-down-payment-amount")?.valueOf() as string);
    const instalment_amount = parseInt(data.get("building-floor-instalment-amount")?.valueOf() as string);
    const possession_amount = parseInt(data.get("building-floor-possession-amount")?.valueOf() as string);
    const remarks = data.get("building-floor-remarks")?.valueOf();


    // console.log("unit_type is")
    // console.log(unit_type);


    const update_query = {
        where: {
            id: Number(floor_id) as number
        },
        data: {
            // name: name,
            // city: city


            occupancy: occupancy,
            size_min: size_min,
            floor_no: floor_no as string,
            floor_type: floor_type as string,
            floor_apartments_studio: floor_apartments_studio,
            floor_apartments_1_bed: floor_apartments_1_bed,
            floor_apartments_2_bed: floor_apartments_2_bed,
            floor_apartments_3_bed: floor_apartments_3_bed,
            floor_apartments_4_bed: floor_apartments_4_bed,
            floor_apartments_5_bed: floor_apartments_5_bed,
            floor_apartments_duplex: floor_apartments_duplex,
            floor_apartments_penthouse: floor_apartments_penthouse,
            floor_has_furnished: floor_has_furnished,
            floor_has_semi_furnished: floor_has_semi_furnished,
            floor_has_service_apartments: floor_has_service_apartments,
            floor_has_hotel_suites_apartments: floor_has_hotel_suites_apartments,
            size_max: size_max,
            avg_sale_price: avg_sale_price,
            avg_monthly_rent: avg_monthly_rent,
            instalment_plan: instalment_plan as string,
            instalment_period: instalment_period,
            down_payment_amount: down_payment_amount,
            instalment_amount: instalment_amount,
            possession_amount: possession_amount,
            remarks: remarks as string,
            date: floor_date

        }
    }

    const updateFloor = await prisma.floors.update(update_query)

    const created_floor_copy = await prisma.floors_history.create({
        data: {
            // name: name,
            // city: city

            floor_id: Number(floor_id) as number,
            building_id: Number(building_id) as number,
            occupancy: occupancy,
            size_min: size_min,
            floor_no: floor_no as string,
            floor_type: floor_type as string,
            floor_apartments_studio: floor_apartments_studio as string,
            floor_apartments_1_bed: floor_apartments_1_bed as string,
            floor_apartments_2_bed: floor_apartments_2_bed as string,
            floor_apartments_3_bed: floor_apartments_3_bed as string,
            floor_apartments_4_bed: floor_apartments_4_bed as string,
            floor_apartments_5_bed: floor_apartments_5_bed as string,
            floor_apartments_duplex: floor_apartments_duplex as string,
            floor_apartments_penthouse: floor_apartments_penthouse as string,
            floor_has_furnished: floor_has_furnished as string,
            floor_has_semi_furnished: floor_has_semi_furnished as string,
            floor_has_service_apartments: floor_has_service_apartments as string,
            floor_has_hotel_suites_apartments: floor_has_hotel_suites_apartments as string,
            size_max: size_max,
            avg_sale_price: avg_sale_price,
            avg_monthly_rent: avg_monthly_rent,
            instalment_plan: instalment_plan as string,
            instalment_period: instalment_period,
            down_payment_amount: down_payment_amount,
            instalment_amount: instalment_amount,
            possession_amount: possession_amount,
            remarks: remarks as string,
            date: floor_date

        }
    })



    // console.log("Update Query is")
    // console.log(update_query)
    // console.log("created_floor_copy")
    // console.log(created_floor_copy)

    // const updateBuilding = await prisma.floors.update(update_query)
    // redirect('/buildings/')
    const updateBuilding = await prisma.floors.update(update_query)
    redirect("/buildings/" + building_id)

}
