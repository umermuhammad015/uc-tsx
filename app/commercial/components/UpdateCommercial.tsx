"use server"

import { redirect } from "next/navigation"
import { prisma } from "@/app/db"

export default async function editForm(data: FormData) {

    const commercial_id = data.get("commercial-id")?.valueOf();

    const commercial_survey_date = (new Date(data.get("commercial-survey-date")?.valueOf() as string)).toISOString().substring(0, 10);

    const commercial_city = data.get("commercial-city")?.valueOf();

    const commercial_zone_name = data.get("commercial-zone-name")?.valueOf();

    const commercial_zone = data.get("commercial-zone")?.valueOf();

    const commercial_type = data.get("commercial-type")?.valueOf();

    const commercial_location = data.get("commercial-location")?.valueOf();

    const commercial_project_status = data.get("commercial-project-status")?.valueOf();

    const commercial_launch_year = data.get("commercial-launch-year")?.valueOf();

    const commercial_grade = data.get("commercial-grade")?.valueOf();

    const commercial_area = data.get("commercial-area")?.valueOf();

    const commercial_occupancy = parseInt(data.get("commercial-occupancy")?.valueOf() as string);

    const total_plots = parseInt(data.get("total-plots")?.valueOf() as string);

    const total_shops = parseInt(data.get("total-shops")?.valueOf() as string);

    const total_offices = parseInt(data.get("total-offices")?.valueOf() as string);

    const total_apartments = parseInt(data.get("total-apartments")?.valueOf() as string);

    const property_feature = data.get("property-feature")?.valueOf();

    const property_title = data.get("property-title")?.valueOf();

    const remarks = data.get("remarks")?.valueOf();


    // console.log("Data is: ")
    // console.log(data)

    // console.log("ID is: ")
    // console.log(params.id)



    // console.log("Name is: ")
    // console.log(name)

    const update_query = {
        where: {
            id: Number(commercial_id) as number
        },
        data: {
            // name: name,
            // city: city
            survey_date: commercial_survey_date,
            city: commercial_city,
            commercial_zone_name,
            zone: commercial_zone,
            type: commercial_type,
            location: commercial_location,
            project_status: commercial_project_status,
            launch_year: Number(commercial_launch_year) as number,
            grade: commercial_grade,
            area: Number(commercial_area) as number,
            occupancy: commercial_occupancy,
            total_plots,
            total_shops,
            total_offices,
            total_apartments,
            property_feature,
            property_title,
            remarks





        }
    }

    console.log("Update Query is")
    console.log(update_query)

    await prisma.commercial.update(update_query)

    // const updateBuilding = await prisma.buildings.update(update_query)

    const created_commercial_copy = await prisma.commercial_history.create({
        data: {
            // name: name,
            // city: city
            commercial_id: Number(commercial_id) as number,
            survey_date: commercial_survey_date,
            city: commercial_city as string,
            commercial_zone_name: commercial_zone_name as string,
            zone: commercial_zone as string,
            type: commercial_type as string,
            location: commercial_location as string,
            project_status: commercial_project_status as string,
            launch_year: Number(commercial_launch_year) as number,
            grade: commercial_grade as string,
            area: Number(commercial_area) as number,
            occupancy: commercial_occupancy,
            total_plots,
            total_shops,
            total_offices,
            total_apartments,
            property_feature: property_feature as string,
            property_title: property_title as string,
            remarks: remarks as string
        }
    })

    console.log(created_commercial_copy)


    if (commercial_city === undefined) {

        redirect('/commercial')

    }
    else if (commercial_city === commercial_city) {
        redirect("/commercial?city=" + commercial_city)

    }

    redirect('/commercial')

}
