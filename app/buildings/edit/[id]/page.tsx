import Link from "next/link";
import prisma from "../../../db";
import { redirect } from "next/navigation"
import UpdateButton from "../../components/UpdateButton";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

type Props = {
    params: { id: string }
    // searchParams: { [key: string]: string | string[] | undefined }
}

export default async function editForm({ params }: any) {

    console.log(params)

    // building = prisma.buildings.find(
    //     {
    //         _id: params.id
    //     }
    // )

    const building = await prisma.buildings.findUnique({
        where: {
            id: params.id,
        },
    })

    console.log(building)

    async function updateBuilding(data: FormData) {
        "use server";
        const name = data.get("building-name")?.valueOf();
        const city = data.get("building-city")?.valueOf();
        const is_centrally_air_conditioned = data
            .get("building-facility-centrally-air-conditioned")
            ?.valueOf() === undefined ? null : "yes";
        const has_security = data.get("building-facility-security")?.valueOf() === undefined ? null : "yes";
        const has_escalators = data.get("building-facility-escalators")?.valueOf() === undefined ? null : "yes";
        const has_food_court = data.get("building-facility-food-court")?.valueOf() === undefined ? null : "yes";
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

        const surveyor_name = data.get("surveyor-name")?.valueOf();
        // const survey_date = data.get("survey-date")?.valueOf();

        const survey_date = (new Date(data.get("survey-date")?.valueOf() as string)).toISOString().substring(0,10) ;

        const plot_size = parseInt(data.get("plot-size")?.valueOf() as string);

        const apartments_has_type_1_bed = data.get("apartment-has-type-1-bed")?.valueOf() === undefined ? null : "yes";
        const apartments_has_type_2_bed = data.get("apartment-has-type-2-bed")?.valueOf() === undefined ? null : "yes";
        const apartments_has_type_3_bed = data.get("apartment-has-type-3-bed")?.valueOf() === undefined ? null : "yes";
        const apartments_has_type_4_bed = data.get("apartment-has-type-4-bed")?.valueOf() === undefined ? null : "yes";
        const apartments_has_type_duplex = data.get("apartment-has-type-duplex")?.valueOf() === undefined ? null : "yes";
        const apartments_has_type_penthouse = data.get("apartment-has-type-penthouse")?.valueOf() === undefined ? null : "yes";


        const construction_area = parseInt(data.get("construction-area")?.valueOf() as string);
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
        console.log(params.id)



        console.log("Name is: ")
        console.log(name)

        const update_query = {
            where: {
                id: params.id
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
                has_entertainment_area: has_entertainment_area,

                type_mixed_use: type_mixed_use,
                type_retail: type_retail,
                type_offices: type_offices,
                type_apartments: type_apartments,
                type_other: type_other,

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
                apartments_has_type_1_bed: apartments_has_type_1_bed,
                apartments_has_type_2_bed: apartments_has_type_2_bed,
                apartments_has_type_3_bed: apartments_has_type_3_bed,
                apartments_has_type_4_bed: apartments_has_type_4_bed,
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
        // let updatedNote = await Note.findByIdAndUpdate({ _id: params.id }, { title, note });
        redirect('/buildings')
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
            <div>{building?.name}</div>

            <form action={updateBuilding}>
                {/* Building Name  */}
                <div className="mt-4">
                    <label htmlFor="building-name" className="block mb-2 text-sm font-medium">Building name:</label>
                    <Input
                        type="text"
                        id="building-name"
                        name="building-name"
                        className="border-2 text-sm border-gray-400  rounded-lg block w-full p-2.5"
                        placeholder="Building Name"
                        defaultValue={building?.name} />
                </div>

                {/* City */}
                <div className="mt-4">
                    <label htmlFor="building-city"
                        className="block mb-2 text-sm font-medium">Citys</label>
                    <select id="building-city" name="building-city" defaultValue={building?.city}
                        className="border-2 border-b-0 border-gray-400  text-sm rounded-lg rounded-b-none block w-full p-2.5">
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

                <div className="p-5 border-2 border-b-0 border-gray-400 dark:border-gray-700">
                    {/* Building Status */}                <div className="mt-4">
                        <label
                            htmlFor="building-status"
                            className="block mb-2 text-sm font-medium "
                        >
                            Building Status
                        </label>
                        <select
                            id="building-status"
                            name="building-status"
                            className="select  w-full max-w-xs border-2 border-gray-400  "
                            defaultValue={building?.status as string}
                        >
                            <option>New Launch</option>
                            <option>Pre-Launch</option>
                            <option>Existing</option>
                            <option>Other</option>
                        </select>
                    </div>

                    {/* Building Status
                <div className="p-5 border-2 border-b-0 border-gray-400  text-black">
                    <div className="mt-4">
                        <fieldset>
                            <legend className="block mb-2 text-sm font-medium">
                                Building Status:
                            </legend>

                            <div className="flex items-center mb-4 ml-2">
                                <input
                                    id="building-status-1"
                                    type="radio"
                                    name="building-status"
                                    value="New Launch"
                                    className="radio radio-md"
                                    checked
                                />
                                <label
                                    htmlFor="building-status-1"
                                    className="block ml-2 text-sm font-medium text-black"
                                >
                                    New Launch
                                </label>
                            </div>

                            <div className="flex items-center mb-4 ml-2">
                                <input
                                    id="building-status-2"
                                    type="radio"
                                    name="building-status"
                                    value="Pre-Launch"
                                    className="radio radio-primary"
                                    checked={false}
                                />
                                <label
                                    htmlFor="building-status-2"
                                    className="block ml-2 text-sm font-medium text-black"
                                >
                                    Pre-Launch
                                </label>
                            </div>

                            <div className="flex items-center mb-4 ml-2">
                                <input
                                    id="building-status-3"
                                    type="radio"
                                    name="building-status"
                                    value="Existing"
                                    className="radio radio-primary"

                                />
                                <label
                                    htmlFor="building-status-3"
                                    className="block ml-2 text-sm font-medium text-black"
                                >
                                    Existing
                                </label>
                            </div>

                            <div className="flex items-center mb-4 ml-2">
                                <input
                                    id="building-status-4"
                                    type="radio"
                                    name="building-status"
                                    value="Other"
                                    className="radio radio-primary"

                                />
                                <label
                                    htmlFor="building-status-4"
                                    className="block ml-2 text-sm font-medium text-black"
                                >
                                    Other
                                </label>
                            </div>
                        </fieldset>
                    </div>

                    {/* Facilities */}
                    <div className="mt-4">
                        <fieldset>
                            <legend className="block mb-2 text-sm font-medium">
                                Building Facilities
                            </legend>

                            <div className="flex items-center mb-4 ml-2">
                                <input
                                    id="building-facility-centrally-air-conditioned"
                                    name="building-facility-centrally-air-conditioned"
                                    type="checkbox"
                                    // value="yes"
                                    className="checkbox checkbox-primary"
                                    defaultChecked={building?.is_centrally_air_conditioned ? true : false}
                                />
                                <label
                                    htmlFor="building-facility-centrally-air-conditioned"
                                    className="ml-2 text-sm font-medium  "
                                >
                                    Centrally Air Conditioned
                                </label>
                            </div>

                            <div className="flex items-center mb-4 ml-2">
                                <input
                                    id="building-facility-security"
                                    name="building-facility-security"
                                    type="checkbox"
                                    // value={building?.has_security === "yes" ? "yes" : "no"}
                                    className="checkbox checkbox-primary"
                                    defaultChecked={building?.has_security ? true : false}
                                />
                                <label
                                    htmlFor="building-facility-security"
                                    className="ml-2 text-sm font-medium "
                                >
                                    Security
                                </label>
                            </div>

                            <div className="flex items-center mb-4 ml-2">
                                <input
                                    id="building-facility-escalators"
                                    name="building-facility-escalators"
                                    type="checkbox"
                                    // value="yes"
                                    className="checkbox checkbox-primary"
                                    defaultChecked={building?.has_escalators ? true : false}
                                />
                                <label
                                    htmlFor="building-facility-escalators"
                                    className="ml-2 text-sm font-medium "
                                >
                                    Escalators
                                </label>
                            </div>

                            <div className="flex items-center mb-4 ml-2">
                                <input
                                    id="building-facility-food-court"
                                    name="building-facility-food-court"
                                    type="checkbox"
                                    // value="yes"
                                    className="checkbox checkbox-primary"
                                    defaultChecked={building?.has_food_court ? true : false}
                                />
                                <label
                                    htmlFor="building-facility-food-court"
                                    className="ml-2 text-sm font-medium "
                                >
                                    Food Court
                                </label>
                            </div>

                            <div className="flex items-center mb-4 ml-2">
                                <input
                                    id="building-facility-entertainment-area"
                                    name="building-facility-entertainment-area"
                                    type="checkbox"
                                    // value="yes"
                                    className="checkbox checkbox-primary"
                                    defaultChecked={building?.has_entertainment_area ? true : false}
                                />
                                <label
                                    htmlFor="building-facility-entertainment-area"
                                    className="ml-2 text-sm font-medium "
                                >
                                    Entertain Area
                                </label>
                            </div>
                        </fieldset>
                    </div>


                    {/* Building Type  */}
                    <div className="mt-4">
                        <fieldset>
                            <legend className="block mb-2 text-sm font-medium">
                                Building Type
                            </legend>

                            <div className="flex items-center mb-4 ml-2">
                                <input
                                    id="building-type-mixed-use"
                                    name="building-type-mixed-use"
                                    type="checkbox"
                                    // value="yes"
                                    className="checkbox checkbox-primary"
                                    defaultChecked={building?.type_mixed_use ? true : false}
                                />
                                <label
                                    htmlFor="building-type-mixed-use"
                                    className="ml-2 text-sm font-medium "
                                >
                                    Mixed use
                                </label>
                            </div>

                            <div className="flex items-center mb-4 ml-2">
                                <input
                                    id="building-type-retail"
                                    name="building-type-retail"
                                    type="checkbox"
                                    // value="yes"
                                    className="checkbox checkbox-primary"
                                    defaultChecked={building?.type_retail ? true : false}
                                />
                                <label
                                    htmlFor="building-type-retail"
                                    className="ml-2 text-sm font-medium "
                                >
                                    Retail
                                </label>
                            </div>

                            <div className="flex items-center mb-4 ml-2">
                                <input
                                    id="building-type-offices"
                                    name="building-type-offices"
                                    type="checkbox"
                                    // value="yes"
                                    className="checkbox checkbox-primary"
                                    defaultChecked={building?.type_offices ? true : false}
                                />
                                <label
                                    htmlFor="building-type-offices"
                                    className="ml-2 text-sm font-medium "
                                >
                                    Offices
                                </label>
                            </div>

                            <div className="flex items-center mb-4 ml-2">
                                <input
                                    id="building-type-apartments"
                                    name="building-type-apartments"
                                    type="checkbox"
                                    // value="yes"
                                    className="checkbox checkbox-primary"
                                    defaultChecked={building?.type_apartments ? true : false}
                                />
                                <label
                                    htmlFor="building-type-apartments"
                                    className="ml-2 text-sm font-medium "
                                >
                                    Apartments
                                </label>
                            </div>

                            <div className="flex items-center mb-4 ml-2">
                                <input
                                    id="building-type-other"
                                    name="building-type-other"
                                    type="checkbox"
                                    // value="yes"
                                    className="checkbox checkbox-primary"
                                    defaultChecked={building?.type_other ? true : false}
                                />
                                <label
                                    htmlFor="building-type-other"
                                    className="ml-2 text-sm font-medium "
                                >
                                    Other
                                </label>
                            </div>
                        </fieldset>
                    </div>
                </div>


                {/* Location/Address Section */}
                <div className="grid grid-cols-3 gap-4 p-5 border-2 border-b-0 border-gray-400 dark:border-gray-700">
                    {/* Zone  */}
                    <div className="mt-4">
                        <label htmlFor="zone" className="block mb-2 text-sm font-medium ">
                            Zone:
                        </label>
                        <Input
                            type="text"
                            name="zone"
                            id="zone"
                            placeholder="Type here"
                            className="input input-bordered w-full max-w-xs border-2 border-gray-400  "
                            defaultValue={building?.zone as string}
                        />
                    </div>

                    {/* Area/Society  */}
                    <div className="mt-4">
                        <label htmlFor="area" className="block mb-2 text-sm font-medium text-black">
                            Area/Society:
                        </label>
                        <Input
                            type="text"
                            id="area"
                            name="area"
                            className="input input-bordered  w-full border-2 border-gray-400   max-w-xs"
                            defaultValue={building?.area as string}
                            placeholder=""
                        />
                    </div>

                    {/* Location/Address  */}
                    <div className="mt-4">
                        <label htmlFor="address" className="block mb-2 text-sm font-medium ">
                            Location/Address:
                        </label>
                        <Input
                            type="text"
                            id="address"
                            name="address"
                            className="input input-bordered  w-full border-2 border-gray-400   max-w-xs"
                            defaultValue={building?.address as string}
                            placeholder="address"
                        />
                    </div>
                </div>


                <div className="p-5 border-2 border-t-0 border-gray-400 dark:border-gray-700">
                    {/* Plot size  */}
                    <div className="mt-4">
                        <label
                            htmlFor="plot-size"
                            className="block mb-2 text-sm font-medium "
                        >
                            Plot Size (Sq. Yards):
                        </label>
                        <Input
                            type="number"
                            id="plot-size"
                            name="plot-size"

                            className="input input-bordered  border-2 border-gray-400   w-full max-w-xs"
                            defaultValue={building?.plot_size as number}
                            placeholder="(Sq. Yards)"
                        />
                    </div>

                    {/* Construction Area (Sq. Yards)  */}
                    <div className="mt-4">
                        <label
                            htmlFor="construction-area"
                            className="block mb-2 text-sm font-medium "
                        >
                            Construction Area (Sq. Yards): :
                        </label>
                        <Input
                            type="number"
                            id="construction-area"
                            name="construction-area"
                            className="input input-bordered  border-2 border-gray-400   w-full max-w-xs"
                            defaultValue={building?.construction_area as number}
                            placeholder="(Sq. Yards)"
                        />
                    </div>

                    {/* Construction Year  */}
                    <div className="mt-4">
                        <label
                            htmlFor="construction-year"
                            className="block mb-2 text-sm font-medium "
                        >
                            Construction Year:
                        </label>
                        <Input
                            type="number"
                            id="construction-year"
                            name="construction-year"
                            min="1900"
                            className="input input-bordered  w-full max-w-xs border-2 border-gray-400  "
                            defaultValue={building?.construction_year as number}
                            placeholder=""
                        />
                    </div>

                    {/* Builder Name  */}
                    <div className="mt-4">
                        <label
                            htmlFor="builder-name"
                            className="block mb-2 text-sm font-medium "
                        >
                            Builder Name:
                        </label>
                        <Input
                            id="builder-name"
                            name="builder-name"
                            className="input input-bordered  w-full max-w-xs border-2 border-gray-400  "
                            defaultValue={building?.builder_name as string}
                            placeholder=""
                        />
                    </div>

                    {/* Building Rank  */}
                    <div className="mt-4">
                        <label
                            htmlFor="building-rank"
                            className="block mb-2 text-sm font-medium "
                        >
                            Building Rank
                        </label>
                        <select
                            id="building-rank"
                            name="building-rank"
                            className="select  w-full max-w-xs border-2 border-gray-400  "
                            defaultValue={building?.building_rank as string}
                        >
                            <option>A+</option>
                            <option>A</option>
                            <option>B+</option>
                            <option>B</option>
                            <option>C</option>
                        </select>
                    </div>

                    {/* Total Floors  */}
                    <div className="mt-4">
                        <label
                            htmlFor="total-floors"
                            className="block mb-2 text-sm font-medium "
                        >
                            Total Floors:
                        </label>
                        <Input
                            type="number"
                            id="total-floors"
                            name="total-floors"
                            className="input input-bordered  w-full max-w-xs border-2 border-gray-400 "
                            defaultValue={building?.total_floors as number}
                            placeholder=""
                        />
                    </div>

                    {/* Parking Floors  */}
                    <div className="mt-4">
                        <label
                            htmlFor="parking-floors"
                            className="block mb-2 text-sm font-medium "
                        >
                            Parking Floors:
                        </label>
                        <Input
                            type="number"
                            id="parking-floors"
                            name="parking-floors"
                            className="input input-bordered  w-full max-w-xs border-2 border-gray-400  "
                            defaultValue={building?.parking_floors as number}
                            placeholder=""
                        />
                    </div>
                </div>

                {/* Apartments section */}
                <div className="p-5 border-2 border-t-0 border-gray-400 dark:border-gray-700">
                    {/* No. of Apartment Floors  */}
                    <div className="mt-4">
                        <label
                            htmlFor="apartment-floors-count"
                            className="block mb-2 text-sm font-medium "
                        >
                            No. of Apartment Floors:
                        </label>
                        <Input
                            type="number"
                            id="apartment-floors-count"
                            name="apartment-floors-count"
                            className="input input-bordered  border-2 border-gray-400  w-full max-w-xs"
                            defaultValue={building?.apartment_floors as number}
                            placeholder=""
                        />
                    </div>

                    {/* No. of Apartments  */}
                    <div className="mt-4">
                        <label
                            htmlFor="apartments-count"
                            className="block mb-2 text-sm font-medium "
                        >
                            No. of Apartment:
                        </label>
                        <Input
                            type="number"
                            id="apartments-count"
                            name="apartments-count"
                            min="0"
                            className="input input-bordered  w-full max-w-xs border-2 border-gray-400  "
                            defaultValue={building?.apartments_count as number}
                            placeholder=""
                        />
                    </div>

                    {/* Apartments Type  */}
                    <div className="mt-4">
                        <fieldset>
                            <legend className="block mb-2 text-sm font-medium ">
                                Apartments Type
                            </legend>

                            <div className="flex items-center mb-4 ml-2">
                                <input
                                    id="apartment-has-type-1-bed"
                                    name="apartment-has-type-1-bed"
                                    type="checkbox"
                                    value="yes"
                                    className="checkbox checkbox-primary"
                                    defaultChecked={building?.apartments_has_type_1_bed ? true : false}
                                />

                                <label
                                    htmlFor="apartment-has-type-1-bed"
                                    className="ml-2 text-sm font-medium "
                                >
                                    1-Bed
                                </label>
                            </div>

                            <div className="flex items-center mb-4 ml-2">
                                <input
                                    id="apartment-has-type-2-bed"
                                    name="apartment-has-type-2-bed"
                                    type="checkbox"
                                    value="yes"
                                    className="checkbox checkbox-primary"
                                    defaultChecked={building?.apartments_has_type_2_bed ? true : false}
                                />
                                <label
                                    htmlFor="apartment-has-type-2-bed"
                                    className="ml-2 text-sm font-medium "
                                >
                                    2-Bed
                                </label>
                            </div>

                            <div className="flex items-center mb-4 ml-2">
                                <input
                                    id="apartment-has-type-3-bed"
                                    name="apartment-has-type-3-bed"
                                    type="checkbox"
                                    value="yes"
                                    className="checkbox checkbox-primary"
                                    defaultChecked={building?.apartments_has_type_3_bed ? true : false}
                                />
                                <label
                                    htmlFor="apartment-has-type-3-bed"
                                    className="ml-2 text-sm font-medium "
                                >
                                    3-Bed
                                </label>
                            </div>

                            <div className="flex items-center mb-4 ml-2">
                                <input
                                    id="apartment-has-type-4-bed"
                                    name="apartment-has-type-4-bed"
                                    type="checkbox"
                                    value="yes"
                                    className="checkbox checkbox-primary"
                                    defaultChecked={building?.apartments_has_type_4_bed ? true : false}
                                />
                                <label
                                    htmlFor="apartment-has-type-4-bed"
                                    className="ml-2 text-sm font-medium "
                                >
                                    4-Bed
                                </label>
                            </div>

                            <div className="flex items-center mb-4 ml-2">
                                <input
                                    id="apartment-has-type-duplex"
                                    name="apartment-has-type-duplex"
                                    type="checkbox"
                                    value="yes"
                                    className="checkbox checkbox-primary"
                                    defaultChecked={building?.apartments_has_type_duplex ? true : false}
                                />
                                <label
                                    htmlFor="apartment-has-type-duplex"
                                    className="ml-2 text-sm font-medium "
                                >
                                    Duplex
                                </label>
                            </div>

                            <div className="flex items-center mb-4 ml-2">
                                <input
                                    id="apartment-has-type-penthouse"
                                    name="apartment-has-type-penthouse"
                                    type="checkbox"
                                    value="yes"
                                    className="checkbox checkbox-primary"
                                    defaultChecked={building?.apartments_has_type_penthouse ? true : false}
                                />
                                <label
                                    htmlFor="apartment-has-type-penthouse"
                                    className="ml-2 text-sm font-medium "
                                >
                                    Penthouse
                                </label>
                            </div>
                        </fieldset>
                    </div>

                    {/* Servant Quarter  */}
                    <div className="mt-4">
                        <label
                            htmlFor="apartment-has-servant-quarter"
                            className="block mb-2 text-sm font-medium "
                        >
                            Servant Quarter
                        </label>
                        <select
                            id="apartment-has-servant-quarter"
                            name="apartment-has-servant-quarter"
                            className="select  w-full max-w-xs border-2 border-gray-400  "
                            defaultValue={building?.apartments_has_servant_quarter as string}
                        >
                            <option>Yes</option>
                            <option>No</option>
                        </select>
                    </div>

                    {/* Maintenance fee of apartment  */}
                    <div className="mt-4">
                        <label
                            htmlFor="apartments-maintenance-fee"
                            className="block mb-2 text-sm font-medium "
                        >
                            Maintenance Fee (Per Sq. Ft.):
                        </label>
                        <Input
                            type="number"
                            id="apartments-maintenance-fee"
                            name="apartments-maintenance-fee"
                            min="0"
                            className="input input-bordered  w-full max-w-xs border-2 border-gray-400  "
                            defaultValue={building?.apartments_maintenance_fee as number}
                            placeholder="Rs."
                        />
                    </div>
                </div>

                {/* Retail floors */}
                <div className="p-5 border-2 border-t-0 border-gray-400 dark:border-gray-700">
                    {/* No. of Retail Floors */}
                    <div className="mt-4">
                        <label
                            htmlFor="retail-floors-count"
                            className="block mb-2 text-sm font-medium "
                        >
                            No. of Retail Floors:
                        </label>
                        <Input
                            type="number"
                            id="retail-floors-count"
                            name="retail-floors-count"
                            min="0"
                            className="input input-bordered  border-2 border-gray-400   w-full max-w-xs"
                            defaultValue={building?.retail_floors_count as number}
                            placeholder=""
                        />
                    </div>

                    {/* No. of Shops  */}
                    <div className="mt-4">
                        <label
                            htmlFor="retail-floors-shops-count"
                            className="block mb-2 text-sm font-medium "
                        >
                            No. of Shops:
                        </label>
                        <Input
                            type="number"
                            id="retail-floors-shops-count"
                            name="retail-floors-shops-count"
                            min="0"
                            className="input input-bordered w-full max-w-xs border-2 border-gray-400  "
                            defaultValue={building?.retail_floors_shops_count as number}
                            placeholder=""
                        />
                    </div>

                    {/* Maintenance Fee */}
                    <div className="mt-4">
                        <label
                            htmlFor="retail-floors-maintenance-fee"
                            className="block mb-2 text-sm font-medium "
                        >
                            Maintenance Fee:
                        </label>
                        <Input
                            type="number"
                            id="retail-floors-maintenance-fee"
                            name="retail-floors-maintenance-fee"
                            min="0"
                            className="input input-bordered  w-full max-w-xs border-2 border-gray-400 "
                            defaultValue={building?.retail_floors_maintenance_fee as number}
                            placeholder="Rs."
                        />
                    </div>

                    {/* Brands/Type of Products & Services: */}
                    <div className="mt-4">
                        <label
                            htmlFor="retail-floors-brands-type"
                            className="block mb-2 text-sm font-medium "
                        >
                            Brands/Type of Products & Services:
                        </label>
                        <Input
                            type="text"
                            id="retail-floors-brands-type"
                            name="retail-floors-brands-type"
                            className="input input-bordered  w-full max-w-xs border-2 border-gray-400  "
                            defaultValue={building?.retail_floors_brands as string}

                            placeholder=""
                        />
                    </div>
                </div>

                {/* Office floors section */}
                <div className="p-5 border-2 border-t-0 border-gray-400 dark:border-gray-700">
                    {/* No. of Office Floors */}
                    <div className="mt-4">
                        <label
                            htmlFor="office-floors-count"
                            className="block mb-2 text-sm font-medium "
                        >
                            No. of Office Floors:
                        </label>
                        <Input
                            type="number"
                            id="office-floors-count"
                            name="office-floors-count"
                            min="0"
                            className="input input-bordered  w-full max-w-xs border-2 border-gray-400  "
                            defaultValue={building?.office_floors_count as number}

                            placeholder=""
                        />
                    </div>

                    {/* No. of Offices */}
                    <div className="mt-4">
                        <label
                            htmlFor="offices-count"
                            className="block mb-2 text-sm font-medium "
                        >
                            No. of Offices:
                        </label>
                        <Input
                            type="number"
                            id="offices-count"
                            name="offices-count"
                            min="0"
                            className="input input-bordered  w-full max-w-xs border-2 border-gray-400  "
                            defaultValue={building?.office_floors_count as number}
                            placeholder=""
                        />
                    </div>

                    {/* Maintenance fee of offices */}
                    <div className="mt-4">
                        <label
                            htmlFor="office-maintenance-fee"
                            className="block mb-2 text-sm font-medium "
                        >
                            Maintenance Fee (Per Sq. Ft.):
                        </label>
                        <Input
                            type="number"
                            id="office-maintenance-fee"
                            name="office-maintenance-fee"
                            min="0"
                            className="input input-bordered  w-full max-w-xs border-2 border-gray-400  "
                            defaultValue={building?.office_maintenance_fee as number}
                            placeholder="Rs."
                        />
                    </div>
                </div>

                {/* Survey date and feedback */}
                <div className="p-5 border-2 border-t-0 border-gray-400 dark:border-gray-700">
                    {/* Survey Date */}

                    <div className="relative max-w-sm ">
                        <label
                            htmlFor="surveyor-name"
                            className="block mb-2 text-sm font-medium "
                        >
                            Date: (Month/Day/year)
                        </label>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-20 pointer-events-none">
                            <svg
                                className="w-4 h-4  dark:text-gray-400 mt-6"
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
                            id="survey-date"
                            name="survey-date"
                            className="max-w-xs border-2 border-gray-400   text-sm rounded focus:ring-blue-500  block w-full p-2.5"
                            // defaultValue={getFormattedDate(building?.survey_date as Date)}
                            // defaultValue={building?.survey_date as unknown as string}
                            // defaultValue={building?.survey_date.toISOString().split('T')[0]}
                            defaultValue={building?.survey_date as string}
                            placeholder="Survey date"
                        />
                    </div>

                    {/* Surveyor Name  */}
                    <div className="mt-4">
                        <label
                            htmlFor="surveyor-name"
                            className="block mb-2 text-sm font-medium"
                        >
                            Surveyor Name:
                        </label>
                        <Input
                            type="text"
                            id="surveyor-name"
                            name="surveyor-name"
                            className="input input-bordered  w-full max-w-xs border-2 border-gray-400 "
                            defaultValue={building?.surveyor_name as string}
                            placeholder=""
                        />
                    </div>

                    {/* Remarks  */}
                    <div className="mt-4">
                        <label htmlFor="message" className="block mb-2 text-sm font-medium ">
                            Your Remarks
                        </label>
                        <Textarea
                            id="building-survery-remarks"
                            name="building-survery-remarks"
                            className="textarea  w-full border-2 border-gray-400  "
                            defaultValue={building?.building_survery_remarks as string}
                            placeholder="Leave a comment..."
                        ></Textarea>
                    </div>
                </div>

                <div className="flex gap-1 justify-end mt-3">
                    <UpdateButton />
                    {/* <Link href="/buildings" className="flex justify-center items-center border border-black px-2 py-1 rounded-xl bg-white text-black hover:bg-red-600 hover:text-white capitalize">Cancel</Link> */}

                    <Button asChild className="bg-transparent text-primary hover:bg-primary-foreground">
                        <Link href="/buildings">Cancel</Link>
                    </Button>

                    {/* <button type="submit" className="border border-gray-300 text-sm rounded-lg block p-2.5">Update</button> */}

                </div>
            </form >
        </>
    )
}