"use server"

import { redirect } from "next/navigation"
import prisma from "../../db";

export default async function editForm(data: FormData) {

    const society_id = data.get("societies-id")?.valueOf();

    const societies_survey_date = (new Date(data.get("societies-survey-date")?.valueOf() as string)).toISOString().substring(0, 10);

    const city = data.get("societies-city")?.valueOf();

    const project_type = data.get("societies-project-type")?.valueOf();


    const project_name = data.get("soceity-project-name")?.valueOf();

    const zone = data.get("societies-zone")?.valueOf();


    const address = data.get("societies-address")?.valueOf();


    const blocks = data.get("societies-blocks")?.valueOf() as string;

    const phase = data.get("societies-phase")?.valueOf() as string;

    const grade = data.get("societies-grade")?.valueOf();

    const occupancy = data.get("societies-occupancy")?.valueOf() as string;

    const area = data.get("societies-area")?.valueOf() as string;

    const population = parseInt(data.get("societies-population")?.valueOf() as string);

    const launch_year = parseInt(data.get("societies-launch-year")?.valueOf() as string);

    const total_plots_residential = parseInt(data.get("total-plots-residential")?.valueOf() as string);

    const plot_sizes_residential = parseInt(data.get("plot-sizes-residential")?.valueOf() as string);

    const plot_sizes_residential_87_5 = data.get("plot-sizes-residential-87-5")?.valueOf() === undefined ? null : "yes";

    const plot_sizes_residential_125 = data.get("plot-sizes-residential-125")?.valueOf() === undefined ? null : "yes";

    const plot_sizes_residential_200 = data.get("plot-sizes-residential-200")?.valueOf() === undefined ? null : "yes";

    const plot_sizes_residential_250 = data.get("plot-sizes-residential-250")?.valueOf() === undefined ? null : "yes";

    const plot_sizes_residential_300 = data.get("plot-sizes-residential-300")?.valueOf() === undefined ? null : "yes";

    const plot_sizes_residential_400 = data.get("plot-sizes-residential-400")?.valueOf() === undefined ? null : "yes";

    const plot_sizes_residential_500 = data.get("plot-sizes-residential-500")?.valueOf() === undefined ? null : "yes";

    const plot_sizes_residential_600 = data.get("plot-sizes-residential-600")?.valueOf() === undefined ? null : "yes";

    const plot_sizes_residential_800 = data.get("plot-sizes-residential-800")?.valueOf() === undefined ? null : "yes";

    const plot_sizes_residential_1000 = data.get("plot-sizes-residential-1000")?.valueOf() === undefined ? null : "yes";

    const plot_sizes_residential_2000 = data.get("plot-sizes-residential-2000")?.valueOf() === undefined ? null : "yes";

    const total_plots_commercial = parseInt(data.get("total-plots-commercial")?.valueOf() as string);

    const plot_sizes_commercial = parseInt(data.get("plot-sizes-commercial")?.valueOf() as string);

    const plot_sizes_commercial_87_5 = data.get("plot-sizes-commercial-87-5")?.valueOf() === undefined ? null : "yes";

    const plot_sizes_commercial_100 = data.get("plot-sizes-commercial-100")?.valueOf() === undefined ? null : "yes";

    const plot_sizes_commercial_125 = data.get("plot-sizes-commercial-125")?.valueOf() === undefined ? null : "yes";

    const plot_sizes_commercial_200 = data.get("plot-sizes-commercial-200")?.valueOf() === undefined ? null : "yes";

    const plot_sizes_commercial_250 = data.get("plot-sizes-commercial-250")?.valueOf() === undefined ? null : "yes";

    const plot_sizes_commercial_500 = data.get("plot-sizes-commercial-500")?.valueOf() === undefined ? null : "yes";

    const plot_sizes_commercial_1000 = data.get("plot-sizes-commercial-1000")?.valueOf() === undefined ? null : "yes";

    const plot_sizes_commercial_2000 = data.get("plot-sizes-commercial-2000")?.valueOf() === undefined ? null : "yes";

    const societies_total_apartments = parseInt(data.get("societies-total-apartments")?.valueOf() as string);

    const societies_apartment_size = parseInt(data.get("societies-apartment-size")?.valueOf() as string);

    const apartment_studio = data.get("apartment-studio")?.valueOf() === undefined ? null : "yes";

    const apartment_one_bad = data.get("apartment-one-bad")?.valueOf() === undefined ? null : "yes";

    const apartment_two_bad = data.get("apartment-two-bad")?.valueOf() === undefined ? null : "yes";

    const apartment_three_bad = data.get("apartment-three-bad")?.valueOf() === undefined ? null : "yes";

    const apartment_four_bad = data.get("apartment-four-bad")?.valueOf() === undefined ? null : "yes";

    const apartment_five_bad = data.get("apartment-five-bad")?.valueOf() === undefined ? null : "yes";

    const apartment_penthouse = data.get("apartment-penthouse")?.valueOf() === undefined ? null : "yes";

    const apartment_duplex = data.get("apartment-duplex")?.valueOf() === undefined ? null : "yes";

    const societies_plot_size = parseInt(data.get("societies-plot-size")?.valueOf() as string);

    const societies_plot_price = parseInt(data.get("societies-plot-price")?.valueOf() as string);

    const vilas_size = parseInt(data.get("vilas-size")?.valueOf() as string);

    const vilas_price = parseInt(data.get("vilas-price")?.valueOf() as string);

    const vilas_monthly_rent = parseInt(data.get("vilas-monthly-rent")?.valueOf() as string);

    const commercial_plot_size = parseInt(data.get("commercial-plot-size")?.valueOf() as string);

    const commercial_plot_price = parseInt(data.get("commercial-plot-price")?.valueOf() as string);

    const apartment_size = parseInt(data.get("apartment-size")?.valueOf() as string);

    const min_apartments_price = parseInt(data.get("min-apartments-price")?.valueOf() as string);

    const max_apartments_price = parseInt(data.get("max-apartments-price")?.valueOf() as string);

    const min_apartments_monthly_rent = parseInt(data.get("min-apartments-monthly-rent")?.valueOf() as string);

    const max_apartments_monthly_rent = parseInt(data.get("max-apartments-monthly-rent")?.valueOf() as string);

    const payment_terms = data.get("payment-terms")?.valueOf();

    const instalment_total_amount = parseInt(data.get("instalment-total-amount")?.valueOf() as string);

    const instalment_down_payment = parseInt(data.get("instalment-down-payment")?.valueOf() as string);

    const instalment_possession_Amount = parseInt(data.get("instalment-possession-Amount")?.valueOf() as string);

    const instalment_period = parseInt(data.get("instalment-period")?.valueOf() as string);

    const features_type_parks = data.get("features-type-parks")?.valueOf() === undefined ? null : "yes";

    const features_type_school = data.get("features-type-school")?.valueOf() === undefined ? null : "yes";

    const features_type_university = data.get("features-type-university")?.valueOf() === undefined ? null : "yes";

    const features_type_hospital = data.get("features-type-hospital")?.valueOf() === undefined ? null : "yes";

    const features_type_commercial_market = data.get("features-type-commercial-market")?.valueOf() === undefined ? null : "yes";

    const features_type_zoo = data.get("features-type-zoo")?.valueOf() === undefined ? null : "yes";

    const features_type_food_arena = data.get("features-type-food-arena")?.valueOf() === undefined ? null : "yes";

    const features_type_gated_community = data.get("features-type-gated-community")?.valueOf() === undefined ? null : "yes";

    const utilities_type_underground_electrification = data.get("utilities-type-underground-electrification")?.valueOf() === undefined ? null : "yes";

    const features_type_college = data.get("features-type-college")?.valueOf() === undefined ? null : "yes";

    const features_type_graveyard = data.get("features-type-graveyard")?.valueOf() === undefined ? null : "yes";

    const features_type_masjid = data.get("features-type-masjid")?.valueOf() === undefined ? null : "yes";

    const features_type_community_club = data.get("features-type-community_club")?.valueOf() === undefined ? null : "yes";

    const features_type_grid_station = data.get("features-type-grid_station")?.valueOf() === undefined ? null : "yes";

    const utilities_type_gas = data.get("utilities-type-gas")?.valueOf() === undefined ? null : "yes";

    const utilities_type_water = data.get("utilities-type-water")?.valueOf() === undefined ? null : "yes";

    const utilities_type_utilities_electricity = data.get("utilities-type-utilities-electricity")?.valueOf() === undefined ? null : "yes";

    const utilities_type_drainage = data.get("utilities-type-drainage")?.valueOf() === undefined ? null : "yes";

    const developer_name = data.get("developer-name")?.valueOf();

    const contact_no = data.get("contact-no")?.valueOf();

    const societies_survery_remarks = data.get("societies-survery-remarks")?.valueOf();


    // console.log("Data is: ")
    // console.log(data)

    // console.log("ID is: ")
    // console.log(params.id)



    // console.log("Name is: ")
    // console.log(name)

    const update_query = {
        where: {
            id: Number(society_id) as number
        },
        data: {
            // name: name,
            // city: city
            city,
            type: project_type,
            name: project_name,
            zone,
            address,
            blocks: blocks,
            phase: phase,
            grade,
            occupancy,
            area: area,
            population,
            launch_year,
            total_plots_residential,
            plot_sizes_residential,
            plot_sizes_residential_87_5,
            plot_sizes_residential_125,
            plot_sizes_residential_200,
            plot_sizes_residential_250,
            plot_sizes_residential_300,
            plot_sizes_residential_400,
            plot_sizes_residential_500,
            plot_sizes_residential_600,
            plot_sizes_residential_800,
            plot_sizes_residential_1000,
            plot_sizes_residential_2000,
            total_plots_commercial,
            plot_sizes_commercial,
            plot_sizes_commercial_87_5,
            plot_sizes_commercial_100,
            plot_sizes_commercial_125,
            plot_sizes_commercial_200,
            plot_sizes_commercial_250,
            plot_sizes_commercial_500,
            plot_sizes_commercial_1000,
            plot_sizes_commercial_2000,
            total_apartments: societies_total_apartments,
            societies_apartment_size,
            apartment_studio,
            apartment_one_bad,
            apartment_two_bad,
            apartment_three_bad,
            apartment_four_bad,
            apartment_five_bad,
            apartment_penthouse,
            apartment_duplex,
            plot_size: societies_plot_size,
            plot_price: societies_plot_price,
            vilas_size,
            vilas_price,
            vilas_monthly_rent,
            commercial_plot_size,
            commercial_plot_price,
            apartment_size,
            min_apartments_price,
            max_apartments_price,
            min_apartments_monthly_rent,
            max_apartments_monthly_rent,
            payment_terms,
            instalment_total_amount,
            instalment_down_payment,
            instalment_possession_Amount,
            instalment_period,
            features_type_parks,
            features_type_school,
            features_type_university,
            features_type_hospital,
            features_type_commercial_market,
            features_type_zoo,
            features_type_food_arena,
            features_type_gated_community,
            features_type_college,
            features_type_graveyard,
            features_type_masjid,
            features_type_community_club,
            features_type_grid_station,
            utilities_type_underground_electrification,
            utilities_type_gas,
            utilities_type_water,
            utilities_type_utilities_electricity,
            utilities_type_drainage,
            developer_name,
            contact_no,
            survery_remarks: societies_survery_remarks,
            survey_date: societies_survey_date


        }
    }

    const updateSociety = await prisma.societies.update(update_query)

    const created_society_copy = await prisma.societies_history.create({
        data: {

            // city: city
            society_id: Number(society_id) as number,
            city: city as string,
            type: project_type as string,
            name: project_name as string,
            zone: zone as string,
            address: address as string,
            blocks: blocks as unknown as number,
            phase: phase as unknown as number,
            grade: grade as string,
            occupancy,
            area: area as unknown as number,
            population,
            launch_year,
            total_plots_residential,
            plot_sizes_residential,
            plot_sizes_residential_87_5,
            plot_sizes_residential_125,
            plot_sizes_residential_200,
            plot_sizes_residential_250,
            plot_sizes_residential_300,
            plot_sizes_residential_400,
            plot_sizes_residential_500,
            plot_sizes_residential_600,
            plot_sizes_residential_800,
            plot_sizes_residential_1000,
            plot_sizes_residential_2000,
            total_plots_commercial,
            plot_sizes_commercial,
            plot_sizes_commercial_87_5,
            plot_sizes_commercial_100,
            plot_sizes_commercial_125,
            plot_sizes_commercial_200,
            plot_sizes_commercial_250,
            plot_sizes_commercial_500,
            plot_sizes_commercial_1000,
            plot_sizes_commercial_2000,
            total_apartments: societies_total_apartments,
            societies_apartment_size,
            apartment_studio,
            apartment_one_bad,
            apartment_two_bad,
            apartment_three_bad,
            apartment_four_bad,
            apartment_five_bad,
            apartment_penthouse,
            apartment_duplex,
            plot_size: societies_plot_size,
            plot_price: societies_plot_price,
            vilas_size,
            vilas_price,
            vilas_monthly_rent,
            commercial_plot_size,
            commercial_plot_price,
            apartment_size,
            min_apartments_price,
            max_apartments_price,
            min_apartments_monthly_rent,
            max_apartments_monthly_rent,
            payment_terms: payment_terms as string,
            instalment_total_amount,
            instalment_down_payment,
            instalment_possession_Amount,
            instalment_period,
            features_type_parks,
            features_type_school,
            features_type_university,
            features_type_hospital,
            features_type_commercial_market,
            features_type_zoo,
            features_type_food_arena,
            features_type_gated_community,
            features_type_college,
            features_type_graveyard,
            features_type_masjid,
            features_type_community_club,
            features_type_grid_station,
            utilities_type_underground_electrification,
            utilities_type_gas,
            utilities_type_water,
            utilities_type_utilities_electricity,
            utilities_type_drainage,
            developer_name: developer_name as string,
            contact_no: contact_no as number,
            survery_remarks: societies_survery_remarks as string,
            survey_date: societies_survey_date


        }
    })

    console.log("Update Query is")
    console.log(update_query)

    if (city === undefined) {

        redirect('/societies')

    }
    else if (city === city) {
        redirect("/societies?city=" + city)

    }


}
