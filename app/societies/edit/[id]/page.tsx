import Link from "next/link";
import prisma from "../../../db";
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

    // building = prisma.buildings.find(
    //     {
    //         _id: params.id
    //     }
    // )

    const societies = await prisma.societies.findUnique({
        where: {
            id: Number(params.id) as number,
        },
    })

    // console.log(societies)
    console.log(societies?.id)
    console.log(societies?.survey_date)
    // console.log(societies?.survey_date.toISOString().split('T')[0])

    async function updateSociety(data: FormData) {
        "use server";
        // const societies_survey_date = new Date(data.get("societies-survey-date")?.valueOf() as string);
        // const societies_survey_date = (new Date(data.get("societies-survey-date")?.valueOf())).toISOString();

        const societies_survey_date = (new Date(data.get("societies-survey-date")?.valueOf() as string)).toISOString().substring(0, 10);

        const city = data.get("societies-city")?.valueOf();

        const project_type = data.get("societies-project-type")?.valueOf();


        const project_name = data.get("soceity-project-name")?.valueOf();

        const zone = data.get("societies-zone")?.valueOf();


        const address = data.get("societies-address")?.valueOf();


        const blocks = data.get("societies-blocks")?.valueOf();

        const grade = data.get("societies-grade")?.valueOf();

        const occupancy = data.get("societies-occupancy")?.valueOf();

        const area = data.get("societies-area")?.valueOf();

        const population = parseInt(data.get("societies-population")?.valueOf() as string);

        const launch_year = parseInt(data.get("societies-launch-year")?.valueOf() as string);

        const total_plots_residential = parseInt(data.get("total-plots-residential")?.valueOf() as string);

        const plot_sizes_residential = parseInt(data.get("plot-sizes-residential")?.valueOf() as string);

        const total_plots_commercial = parseInt(data.get("total-plots-commercial")?.valueOf() as string);

        const plot_sizes_commercial = parseInt(data.get("plot-sizes-commercial")?.valueOf() as string);

        const societies_total_apartments = parseInt(data.get("societies-total-apartments")?.valueOf() as string);

        const societies_apartment_size = parseInt(data.get("societies-apartment-size")?.valueOf() as string);

        const societies_plot_size = parseInt(data.get("societies-plot-size")?.valueOf() as string);

        const societies_plot_price = parseInt(data.get("societies-plot-price")?.valueOf() as string);

        const vilas_size = parseInt(data.get("vilas-size")?.valueOf() as string);

        const vilas_price = parseInt(data.get("vilas-price")?.valueOf() as string);

        const vilas_monthly_rent = parseInt(data.get("vilas-monthly-rent")?.valueOf() as string);

        const commercial_plot_size = parseInt(data.get("commercial-plot-size")?.valueOf() as string);

        const commercial_plot_price = parseInt(data.get("commercial-plot-price")?.valueOf() as string);

        const apartment_size = parseInt(data.get("apartment-size")?.valueOf() as string);

        const apartments_price = parseInt(data.get("apartments-price")?.valueOf() as string);

        const apartments_monthly_rent = parseInt(data.get("apartments-monthly-rent")?.valueOf() as string);

        const payment_terms = data.get("payment-terms")?.valueOf();

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


        console.log("Data is: ")
        // console.log(data)

        console.log("ID is: ")
        console.log(params.id)



        // console.log("Name is: ")
        // console.log(name)

        const update_query = {
            where: {
                id: Number(params.id) as number
            },
            data: {
                // name: name,
                // city: city
                city,
                type: project_type,
                name: project_name,
                zone,
                address,
                blocks,
                grade,
                occupancy,
                area,
                population,
                launch_year,
                total_plots_residential,
                plot_sizes_residential,
                total_plots_commercial,
                plot_sizes_commercial,
                total_apartments: societies_total_apartments,
                societies_apartment_size,
                plot_size: societies_plot_size,
                plot_price: societies_plot_price,
                vilas_size,
                vilas_price,
                vilas_monthly_rent,
                commercial_plot_size,
                commercial_plot_price,
                apartment_size,
                apartments_price,
                apartments_monthly_rent,
                payment_terms,
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

        console.log("Update Query is")
        console.log(update_query)

        const updateSociety = await prisma.societies.update(update_query)
        // let updatedNote = await Note.findByIdAndUpdate({ _id: params.id }, { title, note });
        redirect('/societies')
    }


    function getFormattedDate(date: Date) {
        // var year = date.getFullYear();

        // var month = (1 + date.getMonth()).toString();
        // month = month.length > 1 ? month : '0' + month;

        // var day = date.getDate().toString();
        // day = day.length > 1 ? day : '0' + day;

        // return month + '/' + day + '/' + year;
        return date
    }

    return (
        <>
            <div>{societies?.name}</div>

            <form
                action={updateSociety}
            >
                <div className="p-5 border-2 border-gray-200 dark:border-gray-700">

                    {/* Survey Date */}

                    <div className="relative max-w-sm">
                        <label
                            htmlFor="surveyor-name"
                            className="block mb-2 text-sm font-medium"
                        >
                            Survey Date

                        </label>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-20 pointer-events-none">
                            <svg
                                className="w-4 h-4 text-gray-500 dark:text-gray-400 mt-6"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                            </svg>
                        </div>
                        <Input
                            type="date"
                            id="societies-survey-date"
                            name="societies-survey-date"
                            // defaultValue={societies?.survey_date as unknown as string}
                            defaultValue={societies?.survey_date as string}
                            className="max-w-xs border-gray-400 border-2 text-sm rounded focus:ring-blue-500  block w-full p-2.5"
                            placeholder="Survey date"
                        />
                    </div>

                    {/* <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-[280px] justify-start text-left font-normal",
                  !date && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
              />
            </PopoverContent>
          </Popover> */}

                    {/* City */}
                    <div className="mt-4">
                        <label
                            htmlFor="societies-city"
                            className="block mb-2 text-sm font-medium"
                        >
                            City
                        </label>
                        <select
                            id="societies-city"
                            name="societies-city"
                            className="select w-full max-w-xs border-2 border-gray-400 "
                            defaultValue={societies?.city}

                        >
                            <option>Bahawalpur</option>
                            <option>Faisalabad</option>
                            <option>Gujranwala</option>
                            <option>Hyderabad</option>
                            <option>Islamabad</option>
                            <option>Karachi</option>
                            <option>Lahore</option>
                            <option>Multan</option>
                            <option>Peshawar</option>
                            <option>Quetta</option>
                            <option>Rawalpindi</option>
                        </select>
                    </div>

                    {/* Project Type */}
                    <div className="mt-4">
                        <label
                            htmlFor="societies-project-type"
                            className="block mb-2 text-sm font-medium"
                        >
                            Project Type
                        </label>
                        <select
                            id="societies-project-type"
                            name="societies-project-type"
                            className="select  w-full max-w-xs border-2 border-gray-400"
                            // defaultChecked={societies?.type ? true : false}
                            defaultValue={societies?.type as string}

                        >
                            <option>New Launch</option>
                            <option>Existing</option>

                        </select>
                    </div>

                    {/* Soceity/Project Name  */}
                    <div className="mt-4">
                        <label
                            htmlFor="soceity-project-name"
                            className="block mb-2 text-sm font-medium"
                        >
                            Soceity/Project Name:
                        </label>
                        <Input
                            id="soceity-project-name"
                            name="soceity-project-name"
                            className="input input-bordered w-full max-w-xs border-2 border-gray-400 "
                            defaultValue={societies?.name as string}

                        />

                    </div>

                    {/* Zone/ Region  */}
                    <div className="mt-4">
                        <label
                            htmlFor="societies-zone"
                            className="block mb-2 text-sm font-medium"
                        >
                            Zone/ Region:
                        </label>
                        <select
                            id="societies-zone"
                            name="societies-zone"
                            className="select  w-full max-w-xs border-2 border-gray-400 "
                            // defaultChecked={societies?.zone ? true : false}
                            defaultValue={societies?.zone as string}
                        >
                            <option>East</option>
                            <option>West</option>
                            <option>North</option>
                            <option>South</option>
                            <option>Central</option>

                        </select>
                    </div>

                    {/* Location/Address  */}
                    <div className="mt-4">
                        <label htmlFor="societies-address" className="block mb-2 text-sm font-medium">
                            Location/Address:
                        </label>
                        <Input
                            type="text"
                            id="societies-address"
                            name="societies-address"
                            className="input input-bordered w-full max-w-xs border-2 border-gray-400 "
                            defaultValue={societies?.address as string}
                            placeholder="address"
                        />
                    </div>

                    {/* Total Phase/ Sectors/ Blocks*/}
                    <div className="mt-4">
                        <label
                            htmlFor="societies-blocks"
                            className="block mb-2 text-sm font-medium"
                        >
                            Total Phase/ Sectors/ Blocks:
                        </label>
                        <Input
                            type="text"
                            id="societies-blocks"
                            name="societies-blocks"
                            className="input input-bordered w-full max-w-xs border-2 border-gray-400 "
                            defaultValue={societies?.blocks as string}
                            placeholder=""
                        />
                    </div>


                    {/*Grade  */}
                    <div className="mt-4">
                        <label
                            htmlFor="societies-grade"
                            className="block mb-2 text-sm font-medium"
                        >
                            Grade
                        </label>
                        <select
                            id="societies-grade"
                            name="societies-grade"
                            className="select w-full max-w-xs border-2 border-gray-400 "
                            defaultChecked={societies?.grade ? true : false}
                        >
                            <option>A+</option>
                            <option>A</option>
                            <option>B+</option>
                            <option>B</option>
                            <option>C</option>
                            <option>D</option>
                        </select>
                    </div>

                    {/* Occupancy Ratio */}
                    <div className="mt-4">
                        <label
                            htmlFor="societies-occupancy"
                            className="block mb-2 text-sm font-medium"
                        >
                            Occupancy Ratio
                        </label>
                        <Input
                            type="text"
                            id="societies-occupancy"
                            name="societies-occupancy"
                            className="input input-bordered w-full max-w-xs border-2 border-gray-400"
                            defaultValue={societies?.occupancy as string}
                            placeholder=""
                        />
                    </div>

                    {/* Total Area of Society (Acres) */}
                    <div className="mt-4">
                        <label
                            htmlFor="societies-area"
                            className="block mb-2 text-sm font-medium"
                        >
                            Total Area of Society (Acres):
                        </label>
                        <Input
                            type="text"
                            id="societies-area"
                            name="societies-area"
                            className="input input-bordered w-full max-w-xs border-2 border-gray-400 "
                            defaultValue={societies?.area as string}
                            placeholder=""
                        />
                    </div>

                    {/* Population*/}
                    <div className="mt-4">
                        <label
                            htmlFor="societies-population"
                            className="block mb-2 text-sm font-medium"
                        >
                            Population:
                        </label>
                        <input
                            type="text"
                            id="societies-population"
                            name="societies-population"
                            className="input input-bordered w-full max-w-xs border-2 border-gray-400 "
                            defaultValue={societies?.population as number}
                            placeholder=""
                        />
                    </div>

                    {/* Launch Year*/}
                    <div className="mt-4">
                        <label
                            htmlFor="societies-launch-year"
                            className="block mb-2 text-sm font-medium"
                        >
                            Launch Year:
                        </label>
                        <Input
                            type="text"
                            id="societies-launch-year"
                            name="societies-launch-year"
                            className="input input-bordered w-full max-w-xs border-2 border-gray-400 "
                            defaultValue={societies?.launch_year as number}
                            placeholder=""
                        />
                    </div>

                    {/* Total Plots Residential*/}
                    <div className="mt-4">
                        <label
                            htmlFor="total-plots-residential"
                            className="block mb-2 text-sm font-medium"
                        >
                            Total Plots Residential:
                        </label>
                        <Input
                            type="text"
                            id="total-plots-residential"
                            name="total-plots-residential"
                            className="input input-bordered w-full max-w-xs border-2 border-gray-400 "
                            defaultValue={societies?.total_plots_residential as number}
                            placeholder=""
                        />
                    </div>

                    {/* Plot Sizes Residential (Sq. Yards)  */}
                    <div className="mt-4">
                        <label
                            htmlFor="plot-sizes-residential"
                            className="block mb-2 text-sm font-medium"
                        >
                            Plot Sizes Residential (Sq. Yards):
                        </label>
                        <Input
                            type="text"
                            id="plot-sizes-residential"
                            name="plot-sizes-residential"
                            className="input input-bordered w-full max-w-xs border-2 border-gray-400 "
                            defaultValue={societies?.plot_sizes_residential as number}
                            placeholder="(Sq. Yards)"
                        />
                    </div>

                    {/*Total Plots Commercial  */}
                    <div className="mt-4">
                        <label
                            htmlFor="total-plots-commercial"
                            className="block mb-2 text-sm font-medium"
                        >
                            Total Plots Commercial :
                        </label>
                        <Input
                            type="text"
                            id="total-plots-commercial"
                            name="total-plots-commercial"
                            className="input input-bordered w-full max-w-xs border-2 border-gray-400 "
                            defaultValue={societies?.total_plots_commercial as number}
                            placeholder=""
                        />
                    </div>

                    {/* Plot Sizes Commercial (Sq. Yards) */}
                    <div className="mt-4">
                        <label
                            htmlFor="plot-sizes-commercial"
                            className="block mb-2 text-sm font-medium"
                        >
                            Plot Sizes Commercial (Sq. Yards):
                        </label>
                        <Input
                            type="text"
                            id="plot-sizes-commercial"
                            name="plot-sizes-commercial"
                            className="input input-bordered w-full max-w-xs border-2 border-gray-400 "
                            defaultValue={societies?.plot_sizes_commercial as number}
                            placeholder="(Sq. Yards)"
                        />
                    </div>

                    {/* Total No. of Apartments  */}
                    <div className="mt-4">
                        <label
                            htmlFor="societies-total-apartments"
                            className="block mb-2 text-sm font-medium"
                        >
                            Total No. of Apartments:
                        </label>
                        <Input
                            type="text"
                            id="societies-total-apartments"
                            name="societies-total-apartments"
                            className="input input-bordered w-full max-w-xs border-2 border-gray-400 "
                            defaultValue={societies?.total_apartments as number}
                            placeholder=""
                        />
                    </div>

                    {/* Apartment Sizes (Sq. Ft)  */}
                    <div className="mt-4">
                        <label
                            htmlFor="societies-apartment-size"
                            className="block mb-2 text-sm font-medium"
                        >
                            Apartment Sizes (Sq. Ft):
                        </label>
                        <Input
                            type="text"
                            id="societies-apartment-size"
                            name="societies-apartment-size"
                            className="input input-bordered w-full max-w-xs border-2 border-gray-400 "
                            defaultValue={societies?.apartment_size as number}
                            placeholder="(Sq. Ft)"
                        />
                    </div>

                </div>

                {/* Residentiall Plots */}

                <div className="p-5 border-2 border-t-0 border-gray-200 dark:border-gray-700">
                    <div className="text-lg">Residentiall Plots:</div>
                    {/* Plot Size (Yards)*/}
                    <div className="mt-4">
                        <label
                            htmlFor="societies-plot-size"
                            className="block mb-2 text-sm font-medium"
                        >
                            Plot Size (Yards):
                        </label>
                        <select
                            id="societies-plot-size"
                            name="societies-plot-size"
                            className="select w-full max-w-xs border-2 border-gray-400 "
                            defaultChecked={societies?.plot_size ? true : false}
                        >
                            <option>87.5</option>
                            <option>125</option>
                            <option>200</option>
                            <option>250</option>
                            <option>500</option>
                            <option>1000</option>
                            <option>2000</option>
                        </select>
                    </div>


                    {/* Plot Price  */}
                    <div className="mt-4">
                        <label
                            htmlFor="societies-plot-price "
                            className="block mb-2 text-sm font-medium"
                        >
                            Plot Price :
                        </label>
                        <Input
                            type="text"
                            id="societies-plot-price"
                            name="societies-plot-price"
                            className="input input-bordered w-full max-w-xs border-2 border-gray-400 "
                            defaultValue={societies?.plot_price as number}
                            placeholder="Rs."
                        />
                    </div>
                </div>

                {/* Bungalows/ Vilas: */}
                <div className="p-5 border-2 border-t-0 border-gray-200 dark:border-gray-700">
                    <div className="text-lg">Bungalows/ Vilas:</div>
                    {/* Bungalows/ Vilas Size (Yards)*/}
                    <div className="mt-4">
                        <label
                            htmlFor=" vilas-size"
                            className="block mb-2 text-sm font-medium"
                        >
                            Bungalows/ Vilas Size (Yards):
                        </label>
                        <select
                            id="vilas-size"
                            name="vilas-size"
                            className="select w-full max-w-xs border-2 border-gray-400 "
                            defaultChecked={societies?.vilas_size ? true : false}

                        >
                            <option>87.5</option>
                            <option>125</option>
                            <option>200</option>
                            <option>250</option>
                            <option>500</option>
                            <option>1000</option>
                            <option>2000</option>
                        </select>
                    </div>


                    {/* Bungalows/ Vilas Price*/}
                    <div className="mt-4">
                        <label
                            htmlFor="vilas-price"
                            className="block mb-2 text-sm font-medium"
                        >
                            Bungalows/ Vilas Price:
                        </label>
                        <Input
                            type="text"
                            id="vilas-price"
                            name="vilas-price"
                            className="input input-bordered w-full max-w-xs border-2 border-gray-400 "
                            defaultValue={societies?.vilas_price as number}

                            placeholder="Rs."
                        />
                    </div>

                    {/* Monthly Rent*/}
                    <div className="mt-4">
                        <label
                            htmlFor="vilas-monthly-rent"
                            className="block mb-2 text-sm font-medium"
                        >
                            Monthly Rent:
                        </label>
                        <Input
                            type="text"
                            id="vilas-monthly-rent"
                            name="vilas-monthly-rent"
                            className="input input-bordered w-full max-w-xs border-2 border-gray-400 "
                            defaultValue={societies?.vilas_monthly_rent as number}
                            placeholder="Rs."
                        />
                    </div>
                </div>

                {/* Commercial Plots: */}
                <div className="p-5 border-2 border-t-0 border-gray-200 dark:border-gray-700">
                    <div className="text-lg">Commercial Plots:</div>
                    {/* Plot Size (Yards)*/}
                    <div className="mt-4">
                        <label
                            htmlFor="commercial-plot-size"
                            className="block mb-2 text-sm font-medium"
                        >
                            Plot Size (Yards):
                        </label>
                        <select
                            id="commercial-plot-size"
                            name="commercial-plot-size"
                            className="select w-full max-w-xs border-2 border-gray-400 "
                            defaultChecked={societies?.commercial_plot_size ? true : false}
                        >
                            <option>100</option>
                            <option>125</option>
                            <option>200</option>
                            <option>300</option>
                            <option>500</option>

                        </select>
                    </div>


                    {/* Plot Price */}
                    <div className="mt-4">
                        <label
                            htmlFor="commercial-plot-price"
                            className="block mb-2 text-sm font-medium"
                        >
                            Plot Price:
                        </label>
                        <Input
                            type="text"
                            id="commercial-plot-price"
                            name="commercial-plot-price"
                            className="input input-bordered w-full max-w-xs border-2 border-gray-400 "
                            defaultValue={societies?.commercial_plot_price as number}
                            placeholder="Rs."
                        />
                    </div>
                </div>

                {/*Apartment */}
                <div className="p-5 border-2 border-t-0 border-gray-200 dark:border-gray-700">
                    <div className="text-lg">Apartment:</div>
                    {/* Apartment Size*/}
                    <div className="mt-4">
                        <label
                            htmlFor="apartment-size"
                            className="block mb-2 text-sm font-medium"
                        >
                            Apartment Size:
                        </label>
                        <Input
                            type="text"
                            id="apartment-size"
                            name="apartment-size"
                            className="input input-bordered w-full max-w-xs border-2 border-gray-400 "
                            defaultValue={societies?.apartment_size as number}
                            placeholder=""
                        />
                    </div>


                    {/*Apartment Price*/}
                    <div className="mt-4">
                        <label
                            htmlFor="apartments-price"
                            className="block mb-2 text-sm font-medium"
                        >
                            Apartment Price:
                        </label>
                        <Input
                            type="text"
                            id="apartments-price"
                            name="apartments-price"
                            className="input input-bordered w-full max-w-xs border-2 border-gray-400 "
                            defaultValue={societies?.apartments_price as number}
                            placeholder="Rs."
                        />
                    </div>

                    {/* Monthly Rent*/}
                    <div className="mt-4">
                        <label
                            htmlFor="apartments-monthly-rent"
                            className="block mb-2 text-sm font-medium"
                        >
                            Monthly Rent:
                        </label>
                        <Input
                            type="text"
                            id="apartments-monthly-rent"
                            name="apartments-monthly-rent"
                            className="input input-bordered w-full max-w-xs border-2 border-gray-400 "
                            defaultValue={societies?.apartments_monthly_rent as number}
                            placeholder="Rs."
                        />
                    </div>
                </div>

                <div className="p-5 border-2 border-t-0 border-gray-200 dark:border-gray-700">

                    {/* Payment Terms*/}
                    <div className="mt-4">
                        <label
                            htmlFor="payment-terms"
                            className="block mb-2 text-sm font-medium"
                        >
                            Payment Terms:
                        </label>
                        <select
                            id="payment-terms"
                            name="payment-terms"
                            className="select  w-full max-w-xs border-2 border-gray-400  "
                            defaultValue={societies?.payment_terms as string}
                        >
                            <option value="Lumpsum Payment">Lumpsum Payment</option>
                            <option value="Instalments">Instalments</option>
                        </select>
                    </div>
                </div >

                {/* Features: */}
                <div className="p-5 border-2 border-t-0 border-gray-200 dark:border-gray-700">
                    <div className="mt-4">
                        <fieldset>

                            <legend className="block mb-2 text-sm font-medium">
                                Features:
                            </legend>

                            <div className="flex items-center mb-4 ml-2">
                                <input
                                    id="features-type-parks"
                                    name="features-type-parks"
                                    type="checkbox"
                                    value="yes"
                                    defaultChecked={societies?.features_type_parks ? true : false}
                                    className="checkbox checkbox-primary"
                                />
                                <label
                                    htmlFor="features-type-parks"
                                    className="ml-2 text-sm font-medium"
                                >
                                    Parks
                                </label>
                            </div>

                            <div className="flex items-center mb-4 ml-2">
                                <input
                                    id="features-type-school"
                                    name="features-type-school"
                                    type="checkbox"
                                    value="yes"
                                    defaultChecked={societies?.features_type_school ? true : false}
                                    className="checkbox checkbox-primary"
                                />
                                <label
                                    htmlFor="features-type-school"
                                    className="ml-2 text-sm font-medium "
                                >
                                    School
                                </label>
                            </div>

                            <div className="flex items-center mb-4 ml-2">
                                <input
                                    id="features-type-university"
                                    name="features-type-university"
                                    type="checkbox"
                                    value="yes"
                                    defaultChecked={societies?.features_type_university ? true : false}

                                    className="checkbox checkbox-primary"
                                />
                                <label
                                    htmlFor="features-type-university"
                                    className="ml-2 text-sm font-medium  "
                                >
                                    University
                                </label>
                            </div>

                            <div className="flex items-center mb-4 ml-2">
                                <input
                                    id="features-type-hospital"
                                    name="features-type-hospital"
                                    type="checkbox"
                                    value="yes"
                                    defaultChecked={societies?.features_type_hospital ? true : false}
                                    className="checkbox checkbox-primary"
                                />
                                <label
                                    htmlFor="features-type-hospital"
                                    className="ml-2 text-sm font-medium  "
                                >
                                    Hospital
                                </label>
                            </div>

                            <div className="flex items-center mb-4 ml-2">
                                <input
                                    id="features-type-commercial-market"
                                    name="features-type-commercial-market"
                                    type="checkbox"
                                    value="yes"
                                    defaultChecked={societies?.features_type_commercial_market ? true : false}
                                    className="checkbox checkbox-primary"
                                />
                                <label
                                    htmlFor="features-type-commercial-market"
                                    className="ml-2 text-sm font-medium "
                                >
                                    Commercial Market
                                </label>
                            </div>

                            <div className="flex items-center mb-4 ml-2">
                                <input
                                    id="features-type-zoo"
                                    name="features-type-zoo"
                                    type="checkbox"
                                    value="yes"
                                    defaultChecked={societies?.features_type_zoo ? true : false}
                                    className="checkbox checkbox-primary"
                                />
                                <label
                                    htmlFor="features-type-zoo"
                                    className="ml-2 text-sm font-medium "
                                >
                                    Zoo
                                </label>
                            </div>

                            <div className="flex items-center mb-4 ml-2">
                                <input
                                    id="features-type-food-arena"
                                    name="features-type-food-arena"
                                    type="checkbox"
                                    value="yes"
                                    defaultChecked={societies?.features_type_food_arena ? true : false}
                                    className="checkbox checkbox-primary"
                                />
                                <label
                                    htmlFor="features-type-food-arena"
                                    className="ml-2 text-sm font-medium "
                                >
                                    Food Arena
                                </label>
                            </div>

                            <div className="flex items-center mb-4 ml-2">
                                <input
                                    id="features-type-gated-community"
                                    name="features-type-gated-community"
                                    type="checkbox"
                                    value="yes"
                                    defaultChecked={societies?.features_type_gated_community ? true : false}
                                    className="checkbox checkbox-primary"
                                />
                                <label
                                    htmlFor="features-type-gated-community"
                                    className="ml-2 text-sm font-medium "
                                >
                                    Gated Community
                                </label>
                            </div>

                            <div className="flex items-center mb-4 ml-2">
                                <input
                                    id="features-type-college"
                                    name="features-type-college"
                                    type="checkbox"
                                    value="yes"
                                    defaultChecked={societies?.features_type_college ? true : false}
                                    className="checkbox checkbox-primary"
                                />
                                <label
                                    htmlFor="features-type-college"
                                    className="ml-2 text-sm font-medium  "
                                >
                                    College
                                </label>
                            </div>

                            <div className="flex items-center mb-4 ml-2">
                                <input
                                    id="features-type-graveyard"
                                    name="features-type-graveyard"
                                    type="checkbox"
                                    value="yes"
                                    defaultChecked={societies?.features_type_graveyard ? true : false}
                                    className="checkbox checkbox-primary"
                                />
                                <label
                                    htmlFor="features-type-graveyard"
                                    className="ml-2 text-sm font-medium  "
                                >
                                    Graveyard
                                </label>
                            </div>

                            <div className="flex items-center mb-4 ml-2">
                                <input
                                    id="features-type-masjid"
                                    name="features-type-masjid"
                                    type="checkbox"
                                    value="yes"
                                    defaultChecked={societies?.features_type_masjid ? true : false}
                                    className="checkbox checkbox-primary"
                                />
                                <label
                                    htmlFor="features-type-masjid"
                                    className="ml-2 text-sm font-medium  "
                                >
                                    Masjid
                                </label>
                            </div>

                            {/* <div className="flex items-center mb-4 ml-2">
                                <input
                                    id="features-type-community-club"
                                    name="features-type-community-club"
                                    type="checkbox"
                                    value="yes"
                                    defaultChecked={societies?.features_type_community_club ? true : false}
                                    className="checkbox checkbox-primary"
                                />
                                <label
                                    htmlFor="features-type-community-club"
                                    className="ml-2 text-sm font-medium"
                                >
                                    Community Club
                                </label>
                            </div> */}

                            {/* <div className="flex items-center mb-4 ml-2">
                                <input
                                    id="features-type-grid-station"
                                    name="features-type-grid-station"
                                    type="checkbox"
                                    value="yes"
                                    defaultChecked={societies?.features_type_grid_station ? true : false}
                                    className="checkbox checkbox-primary"
                                />
                                <label
                                    htmlFor="features-type-grid-station"
                                    className="ml-2 text-sm font-medium  "
                                >
                                    Grid Station
                                </label>
                            </div> */}
                        </fieldset>
                    </div>
                </div>


                <div className="p-5 border-2 border-t-0 border-gray-200 dark:border-gray-700">
                    {/*Utilities: */}
                    <div className="mt-4">
                        <fieldset>
                            <legend className="block mb-2 text-sm font-medium">
                                Utilities:
                            </legend>

                            <div className="flex items-center mb-4 ml-2">
                                <input
                                    id="utilities-type-underground-electrification"
                                    name="utilities-type-underground-electrification"
                                    type="checkbox"
                                    value="yes"
                                    defaultChecked={societies?.utilities_type_underground_electrification ? true : false}
                                    className="checkbox checkbox-primary"
                                />
                                <label
                                    htmlFor="utilities-type-underground-electrification"
                                    className="ml-2 text-sm font-medium "
                                >
                                    Underground Electrification
                                </label>
                            </div>

                            <div className="flex items-center mb-4 ml-2">
                                <input
                                    id="utilities-type-gas"
                                    name="utilities-type-gas"
                                    type="checkbox"
                                    value="yes"
                                    defaultChecked={societies?.utilities_type_gas ? true : false}
                                    className="checkbox checkbox-primary"
                                />
                                <label
                                    htmlFor="utilities-type-gas"
                                    className="ml-2 text-sm font-medium "
                                >
                                    Gas
                                </label>
                            </div>

                            <div className="flex items-center mb-4 ml-2">
                                <input
                                    id="utilities-type-water"
                                    name="utilities-type-water"
                                    type="checkbox"
                                    value="yes"
                                    defaultChecked={societies?.utilities_type_water ? true : false}
                                    className="checkbox checkbox-primary"
                                />
                                <label
                                    htmlFor="utilities-type-water"
                                    className="ml-2 text-sm font-medium  "
                                >
                                    Water
                                </label>
                            </div>

                            <div className="flex items-center mb-4 ml-2">
                                <input
                                    id="utilities-type-utilities-electricity"
                                    name="utilities-type-utilities-electricity"
                                    type="checkbox"
                                    value="yes"
                                    defaultChecked={societies?.utilities_type_utilities_electricity ? true : false}
                                    className="checkbox checkbox-primary"
                                />
                                <label
                                    htmlFor="utilities-type-utilities-electricity"
                                    className="ml-2 text-sm font-medium "
                                >
                                    Electricity
                                </label>
                            </div>

                            <div className="flex items-center mb-4 ml-2">
                                <input
                                    id="utilities-type-drainage "
                                    name="utilities-type-drainage "
                                    type="checkbox"
                                    value="yes"
                                    defaultChecked={societies?.utilities_type_drainage ? true : false}
                                    className="checkbox checkbox-primary"
                                />
                                <label
                                    htmlFor="utilities-type-drainage "
                                    className="ml-2 text-sm font-medium "
                                >
                                    Drainage
                                </label>
                            </div>


                        </fieldset>
                    </div>

                    {/* Developer Name*/}
                    <div className="mt-4">
                        <label
                            htmlFor="developer-name"
                            className="block mb-2 text-sm font-medium"
                        >
                            Developer Name:
                        </label>
                        <Input
                            type="text"
                            id="developer-name"
                            name="developer-name"
                            className="input input-bordered w-full max-w-xs border-2 border-gray-400  "
                            defaultValue={societies?.developer_name as string}
                            placeholder=""
                        />
                    </div>

                    {/*Contact No*/}
                    <div className="mt-4">
                        <label
                            htmlFor="contact-no"
                            className="block mb-2 text-sm font-medium"
                        >
                            Contact No:
                        </label>
                        <Input
                            type="text"
                            id="contact-no"
                            name="contact-no"
                            className="input input-bordered w-full max-w-xs border-2 border-gray-400  "
                            defaultValue={societies?.contact_no as string}
                            placeholder=""
                        />
                    </div>

                    {/* Remarks  */}
                    <div className="mt-4">
                        <label htmlFor="message" className="block mb-2 text-sm font-medium">
                            Your Remarks
                        </label>
                        <Textarea
                            id="societies-survery-remarks"
                            name="societies-survery-remarks"
                            className="textarea  w-full border-2 border-gray-400 "
                            defaultValue={societies?.survery_remarks as string}
                            placeholder="Leave a comment..."
                        ></Textarea>
                    </div>

                </div >
                <div className="flex gap-2 justify-end mt-3">
                    <UpdateButton />
                    {/* <Link href="/societies" className="flex justify-center items-center border border-black px-2 py-1 rounded-xl bg-white text-black hover:bg-red-600 hover:text-white capitalize">Cancel</Link> */}

                    <Button asChild className="bg-transparent text-primary hover:bg-primary-foreground">
                        <Link href="/societies" >Cancel</Link>
                    </Button>

                    {/* <button type="submit" className="border border-gray-300 text-sm rounded-lg block p-2.5">Update</button> */}

                </div>

                {/* <Popover>
                    <PopoverTrigger asChild>
                        <Button
                            variant={"outline"}
                            className={cn(
                                "w-[280px] justify-start text-left font-normal",
                                !societies?.survey_date && "text-muted-foreground"
                            )}
                        >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {societies?.survey_date ? format(societies?.survey_date, "PPP") : <span>Pick a date</span>}
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                        <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            initialFocus
                        />
                    </PopoverContent>
                </Popover> */}
            </form>
        </>
    )
}