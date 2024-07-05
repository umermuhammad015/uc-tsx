"use server"

import { redirect } from "next/navigation"
import prisma from "../../db";

export default async function UpdateFloor(data: FormData) {

    const floor_id = data.get("floor-id")?.valueOf();
    const building_id = data.get("building-id")?.valueOf();
    const unit_type = data.get("building-floor-unit-type")?.valueOf();
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


    console.log("unit_type is")
    console.log(unit_type);


    const update_query = {
        where: {
            id: Number(floor_id) as number
        },
        data: {
            // name: name,
            // city: city

            unit_type: unit_type as string,
            occupancy: occupancy,
            size_min: size_min,
            floor_no: floor_no as string,
            floor_type: floor_type as string,
            size_max: size_max,
            avg_sale_price: avg_sale_price,
            avg_monthly_rent: avg_monthly_rent,
            instalment_plan: instalment_plan as string,
            instalment_period: instalment_period,
            down_payment_amount: down_payment_amount,
            instalment_amount: instalment_amount,
            possession_amount: possession_amount,
            remarks: remarks as string

        }
    }

    // console.log("Update Query is")
    // console.log("update_query")

    // const updateBuilding = await prisma.floors.update(update_query)
    // redirect('/buildings/')
    const updateBuilding = await prisma.floors.update(update_query)
    redirect("/buildings/" + building_id)

}
