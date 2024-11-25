"use server"

import { redirect } from "next/navigation"
import prisma from "../../db";

export default async function editForm(data: FormData) {

    const building_id = data.get("building-id")?.valueOf();
    const name = data.get("building-name")?.valueOf();
    const city = data.get("building-city")?.valueOf();
    const is_centrally_air_conditioned = data
        .get("building-facility-centrally-air-conditioned")
        ?.valueOf() === undefined ? null : "yes";
    const has_security = data.get("building-facility-security")?.valueOf() === undefined ? null : "yes";
    const has_escalators = data.get("building-facility-escalators")?.valueOf() === undefined ? null : "yes";
    const has_food_court = data.get("building-facility-food-court")?.valueOf() === undefined ? null : "yes";
    const has_none = data.get("building-facility-none")?.valueOf() === undefined ? null : "yes";
    const has_entertainment_area = data
        .get("building-facility-entertainment-area")
        ?.valueOf() === undefined ? null : "yes";

    const status = data.get("building-status")?.valueOf();

    const type_mixed_use = data.get("building-type-mixed-use")?.valueOf() === undefined ? null : "yes";

    const type_retail = data.get("building-type-retail")?.valueOf() === undefined ? null : "yes";

    const type_offices = data.get("building-type-offices")?.valueOf() === undefined ? null : "yes";

    const type_apartments = data.get("building-type-apartments")?.valueOf() === undefined ? null : "yes";

    const type_other = data.get("building-type-other")?.valueOf() === undefined ? null : "yes";

    const zone = data.get("zone")?.valueOf();
    const area = data.get("area")?.valueOf();
    const address = data.get("address")?.valueOf();
    const builder_name = data.get("builder-name")?.valueOf();
    const building_rank = data.get("building-rank")?.valueOf();
    const apartment_has_servant_quarter = data.get("apartment-has-servant-quarter")?.valueOf();

    const surveyor_name = data.get("surveyor-name")?.valueOf();
    // const survey_date = data.get("survey-date")?.valueOf();

    const survey_date = (new Date(data.get("survey-date")?.valueOf() as string)).toISOString().substring(0, 10);

    const plot_size = parseInt(data.get("plot-size")?.valueOf() as string);

    const apartments_studio = data.get("apartment-studio")?.valueOf() === undefined ? null : "yes";
    const apartments_has_type_1_bed = data.get("apartment-has-type-1-bed")?.valueOf() === undefined ? null : "yes";
    const apartments_has_type_2_bed = data.get("apartment-has-type-2-bed")?.valueOf() === undefined ? null : "yes";
    const apartments_has_type_3_bed = data.get("apartment-has-type-3-bed")?.valueOf() === undefined ? null : "yes";
    const apartments_has_type_4_bed = data.get("apartment-has-type-4-bed")?.valueOf() === undefined ? null : "yes";
    const apartments_has_type_5_bed = data.get("apartment-has-type-5-bed")?.valueOf() === undefined ? null : "yes";
    const apartments_has_type_duplex = data.get("apartment-has-type-duplex")?.valueOf() === undefined ? null : "yes";
    const apartments_has_type_penthouse = data.get("apartment-has-type-penthouse")?.valueOf() === undefined ? null : "yes";


    const construction_area = parseInt(data.get("construction-area")?.valueOf() as string);
    const launch_year = parseInt(data.get("launch-year")?.valueOf() as string);
    const construction_year = parseInt(data.get("construction-year")?.valueOf() as string);
    const total_floors = parseInt(data.get("total-floors")?.valueOf() as string);
    const apartments_maintenance_fee = parseInt(data.get("apartments-maintenance-fee")?.valueOf() as string);
    const retail_floors_count = parseInt(data.get("retail-floors-count")?.valueOf() as string);
    const retail_floors_shops_count = parseInt(data.get("retail-floors-shops-count")?.valueOf() as string);
    const retail_floors_maintenance_fee = parseInt(data.get("retail-floors-maintenance-fee")?.valueOf() as string);
    const office_floors_count = parseInt(data.get("office-floors-count")?.valueOf() as string);
    const offices_count = parseInt(data.get("offices-count")?.valueOf() as string);
    const office_maintenance_fee = parseInt(data.get("office-maintenance-fee")?.valueOf() as string);
    const apartment_floors = parseInt(data.get("apartment-floors-count")?.valueOf() as string);
    const parking_floors = parseInt(data.get("parking-floors")?.valueOf() as string);
    const apartments_count = parseInt(data.get("apartments-count")?.valueOf() as string);
    const building_survery_remarks = data.get("building-survery-remarks")?.valueOf();



    // console.log(type_mixed_use)
    // console.log(type_retail)
    // console.log(type_offices)
    // console.log(type_apartments)
    // console.log(type_other)
    // console.log(is_centrally_air_conditioned)
    // console.log(has_security)
    // console.log(has_escalators)
    // console.log(has_food_court)
    // console.log(apartments_has_type_1_bed)
    // console.log(apartments_has_type_2_bed)
    // console.log(apartments_has_type_3_bed)
    // console.log(apartments_has_type_4_bed)
    // console.log(apartments_has_type_duplex)
    // console.log(apartments_has_type_penthouse)
    console.log("Date is: ")
    console.log(survey_date)



    // console.log(data)

    console.log("ID is: ")
    // console.log(params.id)



    console.log("Name is: ")
    console.log(name)

    const update_query = {
        where: {
            id: Number(building_id) as number
        },
        data: {
            // name: name,
            // city: city
            name: name,
            city: city,
            status,
            zone: zone,
            area: area,
            is_centrally_air_conditioned: is_centrally_air_conditioned,
            has_security: has_security,
            has_escalators: has_escalators,
            has_food_court: has_food_court,
            has_none: has_none,
            has_entertainment_area: has_entertainment_area,
            apartments_has_servant_quarter: apartment_has_servant_quarter,

            type_mixed_use: type_mixed_use,
            type_retail: type_retail,
            type_offices: type_offices,
            type_apartments: type_apartments,
            type_other: type_other,
            launch_year,
            address: address,
            builder_name: builder_name,
            building_rank: building_rank,
            surveyor_name: surveyor_name,
            plot_size: plot_size,
            construction_area: construction_area,
            construction_year: construction_year,
            total_floors: total_floors,
            apartments_maintenance_fee: apartments_maintenance_fee,
            retail_floors_count: retail_floors_count,
            retail_floors_shops_count: retail_floors_shops_count,
            retail_floors_maintenance_fee: retail_floors_maintenance_fee,
            office_floors_count: office_floors_count,
            offices_count: offices_count,
            office_maintenance_fee: office_maintenance_fee,
            apartment_floors: apartment_floors,
            parking_floors: parking_floors,
            apartments_studio: apartments_studio,
            apartments_has_type_1_bed: apartments_has_type_1_bed,
            apartments_has_type_2_bed: apartments_has_type_2_bed,
            apartments_has_type_3_bed: apartments_has_type_3_bed,
            apartments_has_type_4_bed: apartments_has_type_4_bed,
            apartments_has_type_5_bed: apartments_has_type_5_bed,
            apartments_has_type_duplex: apartments_has_type_duplex,
            apartments_has_type_penthouse: apartments_has_type_penthouse,
            apartments_count: apartments_count,
            building_survery_remarks: building_survery_remarks,
            survey_date: survey_date
        }
    }

    console.log("Update Query is")
    console.log(update_query)

    const updateBuilding = await prisma.buildings.update(update_query)
    redirect('/buildings')

}
