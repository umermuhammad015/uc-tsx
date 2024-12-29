"use server"

import prisma from "../db";
import { redirect } from "next/navigation";

export default async function createFloor(data: FormData) {


  // console.log("🚀 ~ file: page.tsx:10 ~ createFloor ~ data:", data);
  const floor_date = (new Date(data.get("floor-date")?.valueOf() as string)).toISOString().substring(0, 10);

  const building_id = data.get("building-id")?.valueOf();
  // console.log(
  //   "🚀 ~ file: page.tsx:10 ~ createFloor ~ building_id (for create floor):",
  //   building_id
  // );

  const building_test = data.get("building_test")?.valueOf();
  // console.log("building_test", building_test);

  const building_name = data.get("building-name")?.valueOf();

  const floor_no = data.get("building-floor-no")?.valueOf();

  const floor_type = data.get("building-floor-type")?.valueOf();

  const floor_unit_type = data.get("building-floor-unit-type")?.valueOf();

  const floor_apartments_studio = data.get("floor-apartments-studio")?.valueOf();

  const floor_apartments_1_bed = data.get("floor-apartments-1-bed")?.valueOf();

  const floor_apartments_2_bed = data
    .get("floor-apartments-2-bed")
    ?.valueOf();

  const floor_apartments_3_bed = data
    .get("floor-apartments-3-bed")
    ?.valueOf();

  const floor_apartments_4_bed = data
    .get("floor-apartments-4-bed")
    ?.valueOf();

  const floor_apartments_5_bed = data
    .get("floor-apartments-5-bed")
    ?.valueOf();

  const floor_apartments_duplex = data
    .get("floor-apartments-duplex")
    ?.valueOf();

  const floor_has_furnished = data
    .get("floor-has-furnished")
    ?.valueOf();

  const floor_has_semi_furnished = data
    .get("floor-has-semi-furnished")
    ?.valueOf();

  const floor_has_service_apartments = data
    .get("floor-has-service-apartments")
    ?.valueOf();

  const floor_has_hotel_suites_apartments = data
    .get("floor-has-hotel-suites-apartments")
    ?.valueOf();

  const floor_apartments_penthouse = data
    .get("floor-apartments-penthouse")
    ?.valueOf();

  const floor_occupancy = parseInt(data.get("building-floor-occupancy")?.valueOf() as string);

  const floor_size_min = parseInt(data.get("building-floor-size-min")?.valueOf() as string);

  const floor_size_max = parseInt(data.get("building-floor-size-max")?.valueOf() as string);

  const floor_avg_sale_price = parseInt(data
    .get("building-floor-avg-sale-price")
    ?.valueOf() as string);

  const floor_avg_monthly_rent = parseInt(data
    .get("building-floor-avg-monthly-rent")

    ?.valueOf() as string);

  const floor_instalment_plan = data.get("building-instalment-plan")?.valueOf();

  const floor_instalment_period = parseInt(data
    .get("building-floor-instalment-period")

    ?.valueOf() as string);
  const floor_down_payment_amount = parseInt(data
    .get("building-floor-down-payment-amount")
    ?.valueOf() as string);
  const floor_instalment_amount = parseInt(data
    .get("building-floor-instalment-amount")
    ?.valueOf() as string);
  const floor_possession_amount = parseInt(data
    .get("building-floor-possession-amount")
    ?.valueOf() as string);
  const floor_remarks = data.get("building-floor-remarks")?.valueOf();

  // console.log("🚀 ~ file: page.tsx:9 ~ createFloor ~ floor_no:", floor_no);
  // console.log("🚀 ~ file: page.tsx:11 ~ createFloor ~ floor_type:", floor_type);
  // console.log(
  //   "🚀 ~ file: page.tsx:13 ~ createFloor ~ floor_unit_type:",
  //   floor_unit_type
  // );
  // console.log(
  //   "🚀 ~ file: page.tsx:15 ~ createFloor ~ floor_occupancy:",
  //   floor_occupancy
  // );
  // console.log(
  //   "🚀 ~ file: page.tsx:17 ~ createFloor ~ floor_size_min:",
  //   floor_size_min
  // );
  // console.log(
  //   "🚀 ~ file: page.tsx:19 ~ createFloor ~ floor_size_max:",
  //   floor_size_max
  // );
  // console.log(
  //   "🚀 ~ file: page.tsx:22 ~ createFloor ~ floor_avg_sale_price:",
  //   floor_avg_sale_price
  // );
  // console.log(
  //   "🚀 ~ file: page.tsx:26 ~ createFloor ~ floor_avg_monthly_rent:",
  //   floor_avg_monthly_rent
  // );
  // console.log(
  //   "🚀 ~ file: page.tsx:29 ~ createFloor ~ floor_instalment_plan:",
  //   floor_instalment_plan
  // );
  // console.log(
  //   "🚀 ~ file: page.tsx:32 ~ createFloor ~ floor_instalment_period:",
  //   floor_instalment_period
  // );
  // console.log(
  //   "🚀 ~ file: page.tsx:36 ~ createFloor ~ floor_down_payment_amount:",
  //   floor_down_payment_amount
  // );
  // console.log(
  //   "🚀 ~ file: page.tsx:40 ~ createFloor ~ floor_instalment_amount:",
  //   floor_instalment_amount
  // );
  // console.log(
  //   "🚀 ~ file: page.tsx:44 ~ createFloor ~ floor_possession_amount:",
  //   floor_possession_amount
  // );
  // console.log(
  //   "🚀 ~ file: page.tsx:47 ~ createFloor ~ floor_remarks:",
  //   floor_remarks
  // );

  const created_floor: any = await prisma.floors.create({
    data: {
      date: floor_date,
      building_id: Number(building_id) as number,
      floor_type: floor_type as string,
      floor_no: floor_no as string,
      unit_type: floor_unit_type as string,
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
      occupancy: floor_occupancy,
      size_min: floor_size_min,
      size_max: floor_size_max,
      avg_sale_price: floor_avg_sale_price,
      avg_monthly_rent: floor_avg_monthly_rent,
      instalment_plan: floor_instalment_plan as string,
      instalment_period: floor_instalment_period,
      down_payment_amount: floor_down_payment_amount,
      instalment_amount: floor_instalment_amount,
      possession_amount: floor_possession_amount,
      remarks: floor_remarks as string

    },
  });

  created_floor.floor_id = created_floor.id; // Copy the value of 'id' to 'building_id'
  delete created_floor.id; // Remove the old 'id' key

  // console.log(created_floor)

  const created_building_copy = await prisma.floors_history.create({
    data: created_floor
  })

  // if (add_more === "yes") {

  //   revalidatePath("/societies/plots/add/" + society_id,) // Update cached posts
  //   redirect("/societies/plots/add/" + society_id)

  // } else {
  //   redirect("/societies/" + society_id)
  // }

 
  redirect("/buildings/" + building_id);

}
