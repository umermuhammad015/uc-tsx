"use server"

import prisma from "../db";
import { redirect } from "next/navigation";

export default async function createFloor(data: FormData) {


    console.log("🚀 ~ file: page.tsx:10 ~ createFloor ~ data:", data);

    const building_id = data.get("building-id")?.valueOf();
    console.log(
      "🚀 ~ file: page.tsx:10 ~ createFloor ~ building_id (for create floor):",
      building_id
    );
  
    const building_test = data.get("building_test")?.valueOf();
    console.log("building_test", building_test);
  
    const building_name = data.get("building-name")?.valueOf();
  
    const floor_no = data.get("building-floor-no")?.valueOf();
  
    const floor_type = data.get("building-floor-type")?.valueOf();
  
    const floor_unit_type = data.get("building-floor-unit-type")?.valueOf();
  
    const floor_occupancy = parseInt(data.get("building-floor-occupancy")?.valueOf() as string);
    
    const floor_size_min =  parseInt(data.get("building-floor-size-min")?.valueOf() as string);
  
    const floor_size_max = parseInt(data.get("building-floor-size-max")?.valueOf() as string);
  
    const floor_avg_sale_price = parseInt(data
      .get("building-floor-avg-sale-price")
      ?.valueOf() as string);
  
    const floor_avg_monthly_rent = parseInt(data
      .get("building-floor-avg-monthly-rent")
  
      ?.valueOf() as string);
  
    const floor_instalment_plan = data.get("building-instalment-plan")?.valueOf() ;
  
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
  
    console.log("🚀 ~ file: page.tsx:9 ~ createFloor ~ floor_no:", floor_no);
    console.log("🚀 ~ file: page.tsx:11 ~ createFloor ~ floor_type:", floor_type);
    console.log(
      "🚀 ~ file: page.tsx:13 ~ createFloor ~ floor_unit_type:",
      floor_unit_type
    );
    console.log(
      "🚀 ~ file: page.tsx:15 ~ createFloor ~ floor_occupancy:",
      floor_occupancy
    );
    console.log(
      "🚀 ~ file: page.tsx:17 ~ createFloor ~ floor_size_min:",
      floor_size_min
    );
    console.log(
      "🚀 ~ file: page.tsx:19 ~ createFloor ~ floor_size_max:",
      floor_size_max
    );
    console.log(
      "🚀 ~ file: page.tsx:22 ~ createFloor ~ floor_avg_sale_price:",
      floor_avg_sale_price
    );
    console.log(
      "🚀 ~ file: page.tsx:26 ~ createFloor ~ floor_avg_monthly_rent:",
      floor_avg_monthly_rent
    );
    console.log(
      "🚀 ~ file: page.tsx:29 ~ createFloor ~ floor_instalment_plan:",
      floor_instalment_plan
    );
    console.log(
      "🚀 ~ file: page.tsx:32 ~ createFloor ~ floor_instalment_period:",
      floor_instalment_period
    );
    console.log(
      "🚀 ~ file: page.tsx:36 ~ createFloor ~ floor_down_payment_amount:",
      floor_down_payment_amount
    );
    console.log(
      "🚀 ~ file: page.tsx:40 ~ createFloor ~ floor_instalment_amount:",
      floor_instalment_amount
    );
    console.log(
      "🚀 ~ file: page.tsx:44 ~ createFloor ~ floor_possession_amount:",
      floor_possession_amount
    );
    console.log(
      "🚀 ~ file: page.tsx:47 ~ createFloor ~ floor_remarks:",
      floor_remarks
    );
  
    await prisma.floors.create({
      data: {
        building_id: Number (building_id) as number,
        floor_type: floor_type as string,
        floor_no: floor_no as string,
        unit_type: floor_unit_type as string,
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
  
    redirect("/buildings");
  }
  