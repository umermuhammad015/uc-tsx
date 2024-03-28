import Link from "next/link";
import prisma from "../../../db";
import FetchSociety from '@/app/societies/components/FatchSociety'
import UpdateSocietyForm from '@/app/societies/components/UpdateSocietyForm';
import { redirect } from "next/navigation"
import UpdateButton from "../../components/UpdateButton";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"



// "use client"

// import * as React from "react"
// import { format } from "date-fns"
// import { Calendar as CalendarIcon } from "lucide-react"

// import { cn } from "@/lib/utils"
// import { Button } from "@/components/ui/button"
// import { Calendar } from "@/components/ui/calendar"
// import {
//     Popover,
//     PopoverContent,
//     PopoverTrigger,
// } from "@/components/ui/popover"

// export function DatePickerDemo() {
//     const [date, setDate] = React.useState<Date>()
// }

type Props = {
    params: { id: number }
    // searchParams: { [key: string]: string | string[] | undefined }
}

export default async function editForm({ params }: any) {

    console.log(params)

    const societies = await FetchSociety(params.id)

    // building = prisma.buildings.find(
    //     {
    //         _id: params.id
    //     }
    // )

    // const societies = await prisma.societies.findUnique({
    //     where: {
    //         id: Number(params.id) as number,
    //     },
    // })

    // // console.log(societies)
    // console.log(societies?.id)
    // console.log(societies?.survey_date)
    // // console.log(societies?.survey_date.toISOString().split('T')[0])

    // async function updateSociety(data: FormData) {
    //     "use server";
    //     // const societies_survey_date = new Date(data.get("societies-survey-date")?.valueOf() as string);
    //     // const societies_survey_date = (new Date(data.get("societies-survey-date")?.valueOf())).toISOString();

    //     const societies_survey_date = (new Date(data.get("societies-survey-date")?.valueOf() as string)).toISOString().substring(0, 10);

    //     const city = data.get("societies-city")?.valueOf();

    //     const project_type = data.get("societies-project-type")?.valueOf();


    //     const project_name = data.get("soceity-project-name")?.valueOf();

    //     const zone = data.get("societies-zone")?.valueOf();


    //     const address = data.get("societies-address")?.valueOf();


    //     const blocks = data.get("societies-blocks")?.valueOf();

    //     const grade = data.get("societies-grade")?.valueOf();

    //     const occupancy = data.get("societies-occupancy")?.valueOf();

    //     const area = data.get("societies-area")?.valueOf();

    //     const population = parseInt(data.get("societies-population")?.valueOf() as string);

    //     const launch_year = parseInt(data.get("societies-launch-year")?.valueOf() as string);

    //     const total_plots_residential = parseInt(data.get("total-plots-residential")?.valueOf() as string);

    //     const plot_sizes_residential = parseInt(data.get("plot-sizes-residential")?.valueOf() as string);

    //     const total_plots_commercial = parseInt(data.get("total-plots-commercial")?.valueOf() as string);

    //     const plot_sizes_commercial = parseInt(data.get("plot-sizes-commercial")?.valueOf() as string);

    //     const societies_total_apartments = parseInt(data.get("societies-total-apartments")?.valueOf() as string);

    //     const societies_apartment_size = parseInt(data.get("societies-apartment-size")?.valueOf() as string);

    //     const societies_plot_size = parseInt(data.get("societies-plot-size")?.valueOf() as string);

    //     const societies_plot_price = parseInt(data.get("societies-plot-price")?.valueOf() as string);

    //     const vilas_size = parseInt(data.get("vilas-size")?.valueOf() as string);

    //     const vilas_price = parseInt(data.get("vilas-price")?.valueOf() as string);

    //     const vilas_monthly_rent = parseInt(data.get("vilas-monthly-rent")?.valueOf() as string);

    //     const commercial_plot_size = parseInt(data.get("commercial-plot-size")?.valueOf() as string);

    //     const commercial_plot_price = parseInt(data.get("commercial-plot-price")?.valueOf() as string);

    //     const apartment_size = parseInt(data.get("apartment-size")?.valueOf() as string);

    //     const apartments_price = parseInt(data.get("apartments-price")?.valueOf() as string);

    //     const apartments_monthly_rent = parseInt(data.get("apartments-monthly-rent")?.valueOf() as string);

    //     const payment_terms = data.get("payment-terms")?.valueOf();

    //     const features_type_parks = data.get("features-type-parks")?.valueOf() === undefined ? null : "yes";

    //     const features_type_school = data.get("features-type-school")?.valueOf() === undefined ? null : "yes";

    //     const features_type_university = data.get("features-type-university")?.valueOf() === undefined ? null : "yes";

    //     const features_type_hospital = data.get("features-type-hospital")?.valueOf() === undefined ? null : "yes";

    //     const features_type_commercial_market = data.get("features-type-commercial-market")?.valueOf() === undefined ? null : "yes";

    //     const features_type_zoo = data.get("features-type-zoo")?.valueOf() === undefined ? null : "yes";

    //     const features_type_food_arena = data.get("features-type-food-arena")?.valueOf() === undefined ? null : "yes";

    //     const features_type_gated_community = data.get("features-type-gated-community")?.valueOf() === undefined ? null : "yes";

    //     const utilities_type_underground_electrification = data.get("utilities-type-underground-electrification")?.valueOf() === undefined ? null : "yes";

    //     const features_type_college = data.get("features-type-college")?.valueOf() === undefined ? null : "yes";

    //     const features_type_graveyard = data.get("features-type-graveyard")?.valueOf() === undefined ? null : "yes";

    //     const features_type_masjid = data.get("features-type-masjid")?.valueOf() === undefined ? null : "yes";

    //     const features_type_community_club = data.get("features-type-community_club")?.valueOf() === undefined ? null : "yes";

    //     const features_type_grid_station = data.get("features-type-grid_station")?.valueOf() === undefined ? null : "yes";

    //     const utilities_type_gas = data.get("utilities-type-gas")?.valueOf() === undefined ? null : "yes";

    //     const utilities_type_water = data.get("utilities-type-water")?.valueOf() === undefined ? null : "yes";

    //     const utilities_type_utilities_electricity = data.get("utilities-type-utilities-electricity")?.valueOf() === undefined ? null : "yes";

    //     const utilities_type_drainage = data.get("utilities-type-drainage")?.valueOf() === undefined ? null : "yes";

    //     const developer_name = data.get("developer-name")?.valueOf();

    //     const contact_no = data.get("contact-no")?.valueOf();

    //     const societies_survery_remarks = data.get("societies-survery-remarks")?.valueOf();


    //     console.log("Data is: ")
    //     // console.log(data)

    //     console.log("ID is: ")
    //     console.log(params.id)



    //     // console.log("Name is: ")
    //     // console.log(name)

    //     const update_query = {
    //         where: {
    //             id: Number(params.id) as number
    //         },
    //         data: {
    //             // name: name,
    //             // city: city
    //             city,
    //             type: project_type,
    //             name: project_name,
    //             zone,
    //             address,
    //             blocks,
    //             grade,
    //             occupancy,
    //             area,
    //             population,
    //             launch_year,
    //             total_plots_residential,
    //             plot_sizes_residential,
    //             total_plots_commercial,
    //             plot_sizes_commercial,
    //             total_apartments: societies_total_apartments,
    //             societies_apartment_size,
    //             plot_size: societies_plot_size,
    //             plot_price: societies_plot_price,
    //             vilas_size,
    //             vilas_price,
    //             vilas_monthly_rent,
    //             commercial_plot_size,
    //             commercial_plot_price,
    //             apartment_size,
    //             apartments_price,
    //             apartments_monthly_rent,
    //             payment_terms,
    //             features_type_parks,
    //             features_type_school,
    //             features_type_university,
    //             features_type_hospital,
    //             features_type_commercial_market,
    //             features_type_zoo,
    //             features_type_food_arena,
    //             features_type_gated_community,
    //             features_type_college,
    //             features_type_graveyard,
    //             features_type_masjid,
    //             features_type_community_club,
    //             features_type_grid_station,
    //             utilities_type_underground_electrification,
    //             utilities_type_gas,
    //             utilities_type_water,
    //             utilities_type_utilities_electricity,
    //             utilities_type_drainage,
    //             developer_name,
    //             contact_no,
    //             survery_remarks: societies_survery_remarks,
    //             survey_date: societies_survey_date


    //         }
    //     }

    //     console.log("Update Query is")
    //     console.log(update_query)

    //     const updateSociety = await prisma.societies.update(update_query)
    //     // let updatedNote = await Note.findByIdAndUpdate({ _id: params.id }, { title, note });
    //     redirect('/societies')
    // }


    // function getFormattedDate(date: Date) {
    //     // var year = date.getFullYear();

    //     // var month = (1 + date.getMonth()).toString();
    //     // month = month.length > 1 ? month : '0' + month;

    //     // var day = date.getDate().toString();
    //     // day = day.length > 1 ? day : '0' + day;

    //     // return month + '/' + day + '/' + year;
    //     return date
    // }

    console.log(societies)

    return (
        <>
            <div className="text-lg"></div>
            <div className="container">

                <div className="mx-4">
                <UpdateSocietyForm societies={societies} />
                </div>
            </div>
        </>
    )
}