"use server";

import { redirect } from "next/navigation";
import prisma from "../db";
import { Prisma } from '@prisma/client';

export default async function createCommercial(data: FormData) {


    const commercial_survey_date = (new Date(data.get("commercial-survey-date")?.valueOf() as string)).toISOString().substring(0, 10);
    // console.log(commercial_survey_date)

    // const commercial_city = data.get("commercial-city")?.valueOf();
    // console.log(commercial_city)

    const commercial_city = data.get("commercial-city")?.valueOf();
    // console.log("🚀 ~ createcommercial ~ commercial_city:", commercial_city)


    const commercial_zone_name = data.get("commercial-zone-name")?.valueOf();
    // console.log("🚀 ~ createcommercial ~ commercial_zone_name:", commercial_zone_name)

    const commercial_zone = data.get("commercial-zone")?.valueOf();
    // console.log("🚀 ~ createcommercial ~ commercial_zone:", commercial_zone)

    const commercial_type = data.get("commercial-type")?.valueOf();
    // console.log("🚀 ~ createcommercial ~ commercial_type:", commercial_type)

    const commercial_location = data.get("commercial-location")?.valueOf();
    // console.log("🚀 ~ createcommercial ~ commercial_location:", commercial_location)

    const commercial_project_status = data.get("commercial-project-status")?.valueOf();
    // console.log("🚀 ~ createcommercial ~ commercial_project_status:", commercial_project_status)

    const commercial_launch_year = data.get("commercial-launch-year")?.valueOf();
    // console.log("🚀 ~ createcommercial ~ commercial_launch_year:", commercial_launch_year)

    const commercial_grade = data.get("commercial-grade")?.valueOf();
    // console.log("🚀 ~ createcommercial ~ commercial_grade:", commercial_grade)

    const commercial_area = data.get("commercial-area")?.valueOf();
    // console.log("🚀 ~ createcommercial ~ commercial_area:", commercial_area)

    const commercial_occupancy = parseInt(data.get("commercial-occupancy")?.valueOf() as string);
    // console.log("🚀 ~ createcommercial ~ commercial_occupancy:", commercial_occupancy)

    const total_plots = parseInt(data.get("total-plots")?.valueOf() as string);
    // console.log("🚀 ~ createcommercial ~ total_plots:", total_plots)

    const total_shops = parseInt(data.get("total-shops")?.valueOf() as string);
    // console.log("🚀 ~ createcommercial ~ total_shops:", total_shops)

    const total_offices = parseInt(data.get("total-offices")?.valueOf() as string);
    // console.log("🚀 ~ createcommercial ~ total_offices:", total_offices)

    const total_apartments = parseInt(data.get("total-apartments")?.valueOf() as string);
    // console.log("🚀 ~ createcommercial ~ total_apartments:", total_apartments)

    const property_feature = data.get("property-feature")?.valueOf();
    // console.log("🚀 ~ createcommercial ~ property_feature:", property_feature)

    const property_title = data.get("property-title")?.valueOf();
    // console.log("🚀 ~ createcommercial ~ property_title:", property_title)

    const remarks = data.get("remarks")?.valueOf();
    // console.log("🚀 ~ createcommercial ~ remarks:", remarks)




    // if (typeof name !== "string" || name.length === 0) {
    //   throw new Error("Invalid name");
    // }

    // if(typeof city !== "string" || city.length === 0){
    //     throw new Error ("Invalid city")
    // }
      

    const created_commercial: any = await prisma.commercial.create({
        data: {
            survey_date: commercial_survey_date,
            city: commercial_city as string,
            commercial_zone_name: commercial_zone_name as string,
            zone: commercial_zone as string,
            type: commercial_type as string,
            location: commercial_location as string,
            project_status: commercial_project_status as string,
            launch_year: commercial_launch_year as number,
            grade: commercial_grade as string,
            area: commercial_area as number,
            occupancy: commercial_occupancy,
            total_plots: total_plots,
            total_shops: total_shops,
            total_offices: total_offices,
            total_apartments: total_apartments,
            property_feature: property_feature as string,
            property_title: property_title as string,
            remarks: remarks as string
        },
    });
    // console.log("created_building")
    // console.log(created_building)

    created_commercial.commercial_id = created_commercial.id as number; // Copy the value of 'id' to 'building_id'
    delete created_commercial.id; // Remove the old 'id' key

    // console.log(created_commerial)

    await prisma.commercial_history.create({
        data: created_commercial
    })

    // console.log("created_commerial_copy")
    // console.log(created_commerial)

    // console.log("Hi")

    redirect("/commercial/" + created_commercial.commercial_id);
    // redirect("/commercial");
}