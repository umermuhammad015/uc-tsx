"use server"

import { redirect } from "next/navigation"
import prisma from "../../db";

export default async function UpdateFloor(data: FormData) {

    const building_id = data.get("building-id")?.valueOf();
    const unit_type = data.get("building-floor-unit-type")?.valueOf();
    const occupancy = data.get("building-floor-occupancy")?.valueOf();
    const size_min = data.get("building-floor-size-min")?.valueOf();
    const size_max = data.get("building-floor-size-max")?.valueOf();
    const avg_sale_price = data.get("building-floor-avg-sale-price")?.valueOf();
    const avg_monthly_rent = data.get("building-floor-avg-monthly-rent")?.valueOf();
    const instalment_plan = data.get("building-instalment-plan")?.valueOf();
    const instalment_period = data.get("building-floor-instalment-period")?.valueOf();
    const down_payment_amount = data.get("building-floor-down-payment-amount")?.valueOf();
    const instalment_amount = data.get("building-floor-instalment-amount")?.valueOf();
    const possession_amount = data.get("building-floor-possession-amount")?.valueOf();
    const remarks = data.get("building-floor-remarks")?.valueOf();


    console.log("unit_type is")
    console.log(unit_type);


    const update_query = {
        where: {
            id: Number(building_id) as number
        },
        data: {
            // name: name,
            // city: city

            unit_type, occupancy, size_min,
            size_max, avg_sale_price,
            avg_monthly_rent, instalment_plan,
            instalment_period, down_payment_amount,
            instalment_amount, possession_amount,
            remarks

        }
    }

    console.log("Update Query is")
    console.log("update_query")

    const updateBuilding = await prisma.floors.update(update_query)
    // let updatedNote = await Note.findByIdAndUpdate({ _id: params.id }, { title, note });
    redirect('/buildings/')

}
