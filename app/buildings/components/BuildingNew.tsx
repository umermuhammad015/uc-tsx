"use client"

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FormEvent, useEffect, useState } from "react";
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import FetchBuildingName from "../components/FetchBuildingName";
import { Command, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { useRouter } from "next/navigation";

import { z } from "zod";
import AddBuilding from "../components/AddBuilding";

import { Buildings } from "@prisma/client";

// const stringSchema = z.string().min(1, "Address is required").max(255, "Address cannot exceed 255 characters");
const numberSchema = z.number().nonnegative("Value must be a positive number").nullable();
const yearSchema = z
    .number()
    .int()
    .min(1950, "Year must be no earlier than 1950")
    .max(2025, "Year must be no later than 2024");


type BuildingNamesProps = {
    name: string | null;
};
export default function BuildingNew() {

    const router = useRouter()
    const [isAdding, setIsAdding] = useState(false);
    const [plot_size, setPlot_Size] = useState("");
    const [construction_area, setConstruction_Area] = useState("");
    const [launch_year, setLaunch_year] = useState("");
    const [construction_year, setConstruction_year] = useState("");
    const [total_floors, setTotal_floors] = useState("");
    const [parking_floor, setParking_floor] = useState("");
    const [retail_floors_num, setRetail_floors_num] = useState("");
    const [shop_num, setShop_num] = useState("");
    const [apartment_floor_num, setApartment_floor_num] = useState("");
    const [apartment_num, setApartment_num] = useState("");
    const [office_floor_num, setOffice_floor_num] = useState("");
    const [office_num, setOffice_num] = useState("");

    // const [entryDate, setEntryDate] = useState<string>((new Date).toISOString().split('T')[0]);
    // const [city, setCity] = useState("");
    // const [zone, setZone] = useState("");
    // const [area, setArea] = useState("");
    // const [building_name, setBuilding_name] = useState("");
    // const [address, setAddress] = useState("");
    // const [type, setType] = useState("");
    // const [status, setStatus] = useState("");
    // const [builder_name, setBuilder_name] = useState("");
    // const [building_rank, setBuilding_rank] = useState("");
    // const [air_condition, setAir_condition] = useState("");
    // const [security, setSecurity] = useState("");
    // const [food_court, setFood_court] = useState("");
    // const [entertainment, setEntertainment] = useState("");
    // const [escalators, setEscalators] = useState("");
    // const [none, setNone] = useState("");
    // const [type_retail, setType_retail] = useState("");
    // const [type_offices, setType_offices] = useState("");
    // const [type_apartments, setType_apartments] = useState("");
    // const [apartments_studio, setApartments_studio] = useState("");
    // const [apartments_1_bed, setApartments_1_bed] = useState("");
    // const [apartments_2_bed, setApartments_2_bed] = useState("");
    // const [apartments_3_bed, setApartments_3_bed] = useState("");
    // const [apartments_4_bed, setApartments_4_bed] = useState("");
    // const [apartments_5_bed, setApartments_5_bed] = useState("");
    // const [apartments_duplex, setApartments_duplex] = useState("");
    // const [apartments_penthouse, setApartments_penthouse] = useState("");
    // const [furnished, setFurnished] = useState("");
    // const [semi_furnished, setSemi_furnished] = useState("");
    // const [service_apartments, setService_apartments] = useState("");
    // const [hotel_suites_apartments, setHotel_service_apartments] = useState("");
    // const [servant_quarter, setServant_quarter] = useState("");
    // const [fashion_health, setFashion_health] = useState("");
    // const [electronics_appliancecs, setElectronics_appliancecs] = useState("");
    // const [home_living, setHome_living] = useState("");
    // const [restaurants_courts, setRestaurants_courts] = useState("");
    // const [bakery_ice, setBakery_ice] = useState("");
    // const [banks_atm, setBanks_atm] = useState("");
    // const [real_estate, setReal_estate] = useState("");
    // const [labs_pharmacies, setLabs_pharmacies] = useState("");
    // const [play_fitness, setPlay_fitness] = useState("");
    // const [swimming_pool, setSwimming_pool] = useState("");
    // const [cinema, setCinema] = useState("");
    // const [surveyor_name, setSurveyor_name] = useState("");
    // const [remarks, setRemarks] = useState("");



    const [isSearching, setSearching] = useState(false);
    const [buildingNames, setBuildingNames] = useState <BuildingNamesProps[]>([])
    const [buildingKeywords, setBuildingKeywords] = useState("")

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {

        setIsAdding(true);

        // console.log("isAdding")
        // console.log(isAdding)

        e.preventDefault();

        if (!isAdding) {

            const formData = new FormData(e.currentTarget)

            console.log("buildingggg name")
            console.log(formData.get("building-name")); // foo

            console.log("1");
            console.log("isAdding");
            console.log(isAdding);

            const allFields = [
                // { name: "building-floor-no", value: floor_num, schema: stringSchema },
                { name: "launch-year", value: launch_year, schema: yearSchema },
                { name: "construction-year", value: construction_year, schema: yearSchema },
                { name: "construction-area", value: construction_area, schema: numberSchema },
                { name: "total-floors", value: total_floors, schema: numberSchema },
                { name: "parking-floors", value: parking_floor, schema: numberSchema },
                { name: "apartment-floors-count", value: apartment_floor_num, schema: numberSchema },
                { name: "apartments-count", value: apartment_num, schema: numberSchema },
                { name: "office-floors-count", value: office_floor_num, schema: numberSchema },
                { name: "offices-count", value: office_num, schema: numberSchema },
                { name: "retail-floors-count", value: retail_floors_num, schema: numberSchema },
                { name: "retail-floors-shops-count", value: shop_num, schema: numberSchema },

            ];

            console.log("2");


            // const newErrors = {};
            let isValid = true;
            for (const field of allFields) {
                const result = field.schema.safeParse(field.value === "" ? null : Number(field.value));
                console.log(result)
                // const result = field.schema.safeParse(field.value);
                if (!result.success) {
                    isValid = false;
                    // newErrors[field.name] = result.error.errors[0].message;
                }
            }

            console.log("3");


            if (!isValid) {
                // setErrors(newErrors);
                console.log("Not valid inputs")
                setIsAdding(false)
                // setIsSaving(false)
                return false;
            }

            console.log("Validation passed");



            try {

                const building_object = {
                    // id: Number(building_id) as number,
                    name: buildingKeywords,
                    city: formData.get("building-city"),
                    status: formData.get("building-status"),
                    zone: formData.get("zone"),
                    area: formData.get("area"),
                    address: formData.get("address"),
                    plot_size: isNaN(Number(plot_size)) ? null : Number(plot_size),
                    construction_area: isNaN(Number(construction_area)) ? null : Number(construction_area),
                    construction_year: isNaN(Number(construction_year)) ? null : Number(construction_year),
                    launch_year: isNaN(Number(launch_year)) ? null : Number(launch_year),
                    builder_name: formData.get("builder-name"),
                    building_rank: formData.get("building-rank"),
                    total_floors: isNaN(Number(total_floors)) ? null : Number(total_floors),
                    parking_floors: isNaN(Number(parking_floor)) ? null : Number(parking_floor),
                    apartment_floors: isNaN(Number(apartment_floor_num)) ? null : Number(apartment_floor_num),
                    apartments_count: isNaN(Number(apartment_num)) ? null : Number(apartment_num),
                    office_floors_count: isNaN(Number(office_floor_num)) ? null : Number(office_floor_num),
                    offices_count: isNaN(Number(office_num)) ? null : Number(office_num),
                    retail_floors_count: isNaN(Number(retail_floors_num)) ? null : Number(retail_floors_num),
                    retail_floors_shops_count: isNaN(Number(shop_num)) ? null : Number(shop_num),
                    is_centrally_air_conditioned: formData.get("building-facility-centrally-air-conditioned"),
                    has_security: formData.get("building-facility-security"),
                    has_escalators: formData.get("building-facility-security"),
                    has_food_court: formData.get("building-facility-food-court"),
                    has_entertainment_area: formData.get("building-facility-entertainment-area"),
                    has_none: formData.get("building-facility-none"),
                    type_retail: formData.get("building-type-retail"),
                    type_offices: formData.get("building-type-offices"),
                    type_apartments: formData.get("building-type-apartments"),
                    apartments_studio: formData.get("apartments-studio"),
                    apartments_has_type_1_bed: formData.get("apartments-has-type-1-bed"),
                    apartments_has_type_2_bed: formData.get("apartments-has-type-2-bed"),
                    apartments_has_type_3_bed: formData.get("apartments-has-type-3-bed"),
                    apartments_has_type_4_bed: formData.get("apartments-has-type-4-bed"),
                    apartments_has_type_5_bed: formData.get("apartments-has-type-5-bed"),
                    apartments_has_type_duplex: formData.get("apartments-has-type-duplex"),
                    apartments_has_type_penthouse: formData.get("apartments-has-type-penthouse"),
                    has_furnished: formData.get("has-furnished"),
                    has_semi_furnished: formData.get("has-semi-furnished"),
                    has_service_apartments: formData.get("has-service-apartments"),
                    has_hotel_suites_apartments: formData.get("has-hotel-suites-apartments"),
                    apartments_has_servant_quarter: formData.get("apartment-has-servant-quarter"),
                    has_fashion_health: formData.get("has-fashion-health"),
                    has_electronics_appliancecs: formData.get("has-electronics-appliancecs"),
                    has_home_living: formData.get("has-home-living"),
                    has_restaurants_courts: formData.get("has-restaurants-courts"),
                    has_bakery_ice: formData.get("has-bakery-ice"),
                    has_banks_atm: formData.get("has-banks-atm"),
                    has_real_estate: formData.get("has-real-estate"),
                    has_labs_pharmacies: formData.get("has-labs-pharmacies"),
                    has_play_fitness: formData.get("has-play-fitness"),
                    has_swimming_pool: formData.get("has-swimming-pool"),
                    has_cinema: formData.get("has-cinema"),
                    survey_date: formData.get("survey-date"),
                    surveyor_name: formData.get("surveyor-name"),
                    building_survery_remarks: formData.get("building-survery-remarks"),
                }
                // console.log("building_object")
                // console.log(building_object)

                const added_building_id = await AddBuilding(building_object as Buildings)


                // const add_building_output = await prisma.buildings.create({
                //   data: building_object
                // });

                console.log("add_building_output")
                console.log(added_building_id)


                router.push("/buildings/" + added_building_id); // Replace with your desired route


            } catch (error) {

                console.error('Error submitting building:', error);

            }
            finally {
                setIsAdding(false)
                // setIsSaving(false)
                console.log("finally")


                // return true;

            }



        }



    };

    useEffect(() => {


        if (buildingKeywords.length >= 3) {
            const fetchData = async () => {
                try {
                    setSearching(true)

                    // console.log("CityInput use effect trying")
                    const all_buildings = await FetchBuildingName(buildingKeywords)
                    setSearching(false)
                    setBuildingNames(all_buildings);



                } catch (error) {

                    console.error('Error fetching cities list:', error);
                }
            };
            fetchData();

        }



    }, [buildingKeywords]);

    // useEffect(() => {

    //   // console.log("use effect called")


    //   const getBuildingData = async () => {

    //     try {

    //       // console.log("trying")
    //       // console.log(params.id)

    //       const Building_data = await FetchBuilding()

    //       // console.log("Current building data")
    //       // console.log(Building_data)


    //       setCurrent_building(Building_data)

    //     } catch (error) {

    //       console.error('Error fetching society data:', error);

    //       // setIsAdding(!isAdding)
    //     }
    //   };


    //   getBuildingData();



    // }, []);


    return (
        <>
            <Link href="/buildings" className="text-lg">Buildings</Link>

            <form
                onSubmit={handleSubmit}
            // onSubmit={async (e) => {
            // e.preventDefault();

            // await handleSubmit();

            // if (!isAdding) {  // Only proceed if currently false
            //   try {
            //     setIsAdding(true);
            //     const result = await handleSubmit();
            //     if (result) {
            //       router.push("/buildings"); // Wait for navigation to complete
            //     }
            //     console.log(result)
            //   } catch (error) {
            //     console.error('Error:', error);
            //     setIsAdding(false); // Reset state if there's an error
            //   } finally {
            //     // await router.push("/buildings/" + building_id); // Wait for navigation to complete
            //   }
            // }

            // }}
            // action={createBuilding}
            >
                <div className="p-5 border-2 border-b-0 border-gray-200 dark:border-gray-700">

                    {/* Survey Date */}
                    <div className="relative max-w-sm">
                        <label
                            htmlFor="surveyor-name"
                            className="block mb-2 text-sm font-medium "
                        >
                            Date: (Month/Day/year)
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
                            id="survey-date"
                            name="survey-date"
                            defaultValue={(new Date).toISOString().split('T')[0]}
                            className="max-w-xs border-gray-400  border-2 text-sm rounded focus:ring-blue-500  block w-full p-2.5"
                            placeholder="Survey date"
                        />
                    </div>

                    {/* City */}
                    <div className="mt-4">
                        <label
                            htmlFor="building-city"
                            className="block mb-2 text-sm font-medium"
                        >
                            City:<span className="text-red-700">*</span>
                        </label>
                        <Select
                            name="building-city">
                            <SelectTrigger
                                id="building-city"
                                aria-required
                                className="select  w-full max-w-xs border-2 border-gray-400"

                            >
                                <SelectValue placeholder="Select city" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel className="text-lg">Punjab</SelectLabel>
                                    <SelectItem value="Bahawalpur">Bahawalpur</SelectItem>
                                    <SelectItem value="Faisalabad">Faisalabad</SelectItem>
                                    <SelectItem value="Gujranwala">Gujranwala</SelectItem>
                                    <SelectItem value="Islamabad">Islamabad</SelectItem>
                                    <SelectItem value="Lahore">Lahore</SelectItem>
                                    <SelectItem value="Multan">Multan</SelectItem>
                                    <SelectItem value="Rawalpindi">Rawalpindi</SelectItem>
                                </SelectGroup>
                                <SelectGroup>
                                    <SelectLabel className="text-lg">Sindh</SelectLabel>
                                    <SelectItem value="Hyderabad">Hyderabad</SelectItem>
                                    <SelectItem value="Karachi">Karachi</SelectItem>
                                </SelectGroup>
                                <SelectGroup>
                                    <SelectLabel className="text-lg">KPK</SelectLabel>
                                    <SelectItem value="Peshawar">Peshawar</SelectItem>
                                </SelectGroup>
                                <SelectGroup>
                                    <SelectLabel className="text-lg">Balochistan</SelectLabel>
                                    <SelectItem value="Quetta">Quetta</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>

                    {/* Zone */}
                    <div className="mt-4">
                        <label
                            htmlFor="zone"
                            className="block mb-2 text-sm font-medium"
                        >
                            Zone: <span className="text-red-700">*</span>
                        </label>
                        {/* <select
                            id="zone"
                            required
                            name="zone"
                            className="select  w-full text-sm pl-2 h-10 max-w-xs border-2 rounded border-gray-400 bg-background"

                        >
                            <option value="">Select</option>
                            <option value="East">East</option>
                            <option value="West">West</option>
                            <option value="North">North</option>
                            <option value="South">South</option>
                            <option value="Central">Central</option>
                        </select> */}
                        <Select
                            name="zone">
                            <SelectTrigger
                                id="zone"
                                className="select  w-full max-w-xs border-2 border-gray-400">
                                <SelectValue placeholder="Select Zone" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel></SelectLabel>
                                    <SelectItem value="East">East</SelectItem>
                                    <SelectItem value="West">West</SelectItem>
                                    <SelectItem value="North">North</SelectItem>
                                    <SelectItem value="South">South</SelectItem>
                                    <SelectItem value="Central">Central</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>

                    {/* Area/Society  */}
                    <div className="mt-4">
                        <label htmlFor="area" className="block mb-2 text-sm font-medium">
                            Area / Society: <span className="text-red-700">*</span>
                        </label>
                        <Input
                            type="text"
                            id="area"
                            name="area"
                            required
                            className="input input-bordered w-full max-w-xs border-2 border-gray-400 "
                            placeholder=""
                        />
                    </div>

                    {/* Building Name  */}
                    <div className="mt-4">
                        <div className="">
                            <label
                                htmlFor="building-name"
                                className="block mb-2 text-sm font-medium"
                            >
                                Building name:<span className="text-red-700">*</span>
                            </label>
                            {/* <Input
                type="text"
                id="building-name"
                name="building-name"
                required
                className="input input-bordered w-full max-w-xs border-2 border-gray-400 "
                placeholder="Building Name"
              /> */}
                        </div>
                    </div>

                    <div className="w-full max-w-xs">


                        <Command className="rounded-lg border shadow-md  ">

                            <CommandInput
                                // type="text"
                                id="building-name"
                                name="building-name"
                                required
                                className="input w-full max-w-xs border-2 border-gray-400 "
                                placeholder="Type a building name..."

                                onValueChange={(value) => setBuildingKeywords(value)} // Update searchKeyword on input change
                            />

                            {(buildingKeywords.length >= 3 && !isSearching) ? (

                                <CommandList className="">
                                    <CommandGroup>
                                        {buildingNames.map((building: BuildingNamesProps) => (
                                            <CommandItem
                                                key={building.name}

                                            >
                                                {building.name}
                                            </CommandItem>
                                        ))}
                                    </CommandGroup>


                                </CommandList>
                            ) :
                                <CommandList>{(isSearching) && <span>Loading</span>}</CommandList>
                            }


                        </Command>
                    </div>

                    {/* Location/Address  */}
                    <div className="mt-4">
                        <label htmlFor="address" className="block mb-2 text-sm font-medium">
                            Location / Address:<span className="text-red-700">*</span>
                        </label>
                        <Input
                            type="text"
                            id="address"
                            required
                            name="address"
                            className="input input-bordered w-full max-w-xs border-2 border-gray-400"
                            placeholder="address"
                        />
                    </div>

                    {/* Building Type  */}
                    <div className="mt-4">
                        <fieldset>
                            <legend className="block mb-2 text-sm font-medium">
                                Building Type:
                            </legend>


                            <div className="flex gap-10">
                                <div className="flex items-center ml-2">
                                    <input
                                        id="building-type-retail"
                                        name="building-type-retail"
                                        type="checkbox"
                                        value="yes"
                                        className="checkbox checkbox-primary"
                                    />
                                    <label
                                        htmlFor="building-type-retail"
                                        className="ml-2 text-sm font-medium  "
                                    >
                                        Retail
                                    </label>
                                </div>

                                <div className="flex items-center  ml-2">
                                    <input
                                        id="building-type-offices"
                                        name="building-type-offices"
                                        type="checkbox"
                                        value="yes"
                                        className="checkbox checkbox-primary"
                                    />
                                    <label
                                        htmlFor="building-type-offices"
                                        className="ml-2 text-sm font-medium  "
                                    >
                                        Offices
                                    </label>
                                </div>

                                <div className="flex items-center ml-2">
                                    <input
                                        id="building-type-apartments"
                                        name="building-type-apartments"
                                        type="checkbox"
                                        value="yes"
                                        className="checkbox checkbox-primary"
                                    />
                                    <label
                                        htmlFor="building-type-apartments"
                                        className="ml-2 text-sm font-medium  "
                                    >
                                        Apartments
                                    </label>
                                </div>
                            </div>


                        </fieldset>
                    </div>

                    {/* Building Status */}
                    <div className="mt-4">
                        <label
                            htmlFor="building-status"
                            className="block mb-2 text-sm font-medium"
                        >
                            Building Status:
                        </label>
                        <select
                            id="building-status"
                            name="building-status"
                            className="select  w-full text-sm pl-2 h-10 max-w-xs border-2 rounded border-gray-400 bg-background"

                        >
                            <option value="">Select</option>
                            <option value="Pre-Launch">Pre-Launch</option>
                            <option value="Under Construction">Under Construction</option>
                            <option value="Constructed">Constructed</option>
                        </select>

                    </div>

                    {/* Plot size  */}
                    <div className="mt-4">
                        <label
                            htmlFor="plot-size"
                            className="block mb-2 text-sm font-medium"
                        >
                            Plot Size (Sq. Yards):
                        </label>
                        <div className="flex">
                            <Input

                                type="text"
                                id="plot-size"
                                name="plot-size"
                                className="input input-bordered w-full max-w-xs border-2 border-gray-400 "
                                placeholder="(Sq. Yards)"
                                value={plot_size}
                                onChange={(e) => setPlot_Size(e.target.value)}
                            />
                            <div className="m-4">
                                {isNaN(Number(plot_size)) ? <span className="text-red-500 text-sm mt-1">Enter number only</span> : Number(plot_size).toLocaleString()}

                            </div>
                        </div>
                    </div>

                    {/* Total Covered Area of Building (Sq. Yards)  */}
                    <div className="">
                        <label
                            htmlFor="construction-area"
                            className="block mb-2 text-sm font-medium"
                        >
                            Total Covered Area of Building (Sq Ft):
                        </label>
                        <div className="flex">
                            <Input
                                type="text"
                                id="construction-area"
                                name="construction-area"
                                className="input input-bordered w-full max-w-xs border-2 border-gray-400  "
                                placeholder="(Sq. Yards)"
                                value={construction_area}
                                // className="input input-bordered w-full max-w-xs border-2 border-gray-400"
                                onChange={(e) => setConstruction_Area(e.target.value)}
                            />
                            {/* {errors["building-floor-avg-monthly-rent"] && <p className="text-red-500 text-sm mt-1">{errors["building-floor-avg-monthly-rent"]}</p>} */}
                            <div className="m-4">
                                {isNaN(Number(construction_area)) ? <span className="text-red-500 text-sm mt-1">Enter number only</span> : Number(construction_area).toLocaleString()}
                                {/* {Number(avg_sale_price).toLocaleString()} */}
                            </div>
                        </div>
                    </div>

                    {/* Builder Name  */}
                    <div className="">
                        <label
                            htmlFor="builder-name"
                            className="block mb-2 text-sm font-medium"
                        >
                            Builder Name:
                        </label>
                        <Input
                            id="builder-name"
                            name="builder-name"
                            className="input input-bordered w-full max-w-xs border-2 border-gray-400 "
                            placeholder=""
                        />
                    </div>

                    {/* Launch_year */}
                    <div className="mt-4">
                        <label
                            htmlFor="launch-year"
                            className="block mb-2 text-sm font-medium"
                        >
                            Launch Year:<span className="text-red-700">*</span>
                        </label>
                        <div className="flex">
                            <Input
                                type="text"
                                id="launch-year"
                                name="launch-year"
                                value={launch_year}
                                className="input input-bordered w-full max-w-xs border-2 border-gray-400"
                                onChange={(e) => setLaunch_year(e.target.value)}
                            />
                            {/* {errors["building-floor-avg-monthly-rent"] && <p className="text-red-500 text-sm mt-1">{errors["building-floor-avg-monthly-rent"]}</p>} */}
                            <div className="m-4">
                                {isNaN(Number(launch_year)) ? <span className="text-red-500 text-sm mt-1">Enter number only</span> : Number(launch_year)}
                                {/* {Number(avg_sale_price).toLocaleString()} */}
                            </div>
                        </div>
                    </div>

                    {/* Construction Year  */}
                    <div className="">
                        <label
                            htmlFor="construction-year"
                            className="block mb-2 text-sm font-medium"
                        >
                            Construction Year:<span className="text-red-700">*</span>
                        </label>
                        <div className="flex">
                            <Input
                                type="text"
                                id="construction-year"
                                name="construction-year"
                                minLength={1}
                                maxLength={4}
                                className="input input-bordered input-primary w-full max-w-xs border-2 border-gray-400 "
                                placeholder=""
                                value={construction_year}
                                onChange={(e) => setConstruction_year(e.target.value)}
                            />
                            {/* {errors["building-floor-avg-monthly-rent"] && <p className="text-red-500 text-sm mt-1">{errors["building-floor-avg-monthly-rent"]}</p>} */}
                            <div className="m-4">
                                {isNaN(Number(construction_year)) ? <span className="text-red-500 text-sm mt-1">Enter number only</span> : Number(construction_year)}
                                {/* {Number(avg_sale_price).toLocaleString()} */}
                            </div>
                        </div>
                    </div>

                    {/* Building Rank  */}
                    <div className="">
                        <label
                            htmlFor="building-rank"
                            className="block mb-2 text-sm font-medium"
                        >
                            Building Rank:
                        </label>
                        {/* <select
                            id="building-rank"
                            name="building-rank"
                            className="select  w-full text-sm pl-2 h-10 max-w-xs border-2 rounded border-gray-400 bg-background"

                        >
                            <option value="">Select</option>
                            <option value="A+">A+</option>
                            <option value="A">A</option>
                            <option value="B">B</option>
                            <option value="C">C</option>
                        </select> */}

                        <Select
                            name="building-rank">
                            <SelectTrigger
                                id="building-rank"
                                className="select w-full max-w-xs border-2 border-gray-400  ">
                                <SelectValue placeholder="Select Rank" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel></SelectLabel>
                                    <SelectItem value="A+">A+</SelectItem>
                                    <SelectItem value="A">A</SelectItem>
                                    <SelectItem value="B">B</SelectItem>
                                    <SelectItem value="C">C</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>

                    {/* Total Floors  */}
                    <div className="mt-4">
                        <label
                            htmlFor="total-floors"
                            className="block mb-2 text-sm font-medium"
                        >
                            Total Floors:
                        </label>
                        <div className="flex">
                            <Input
                                type="text"
                                id="total-floors"
                                name="total-floors"
                                className="input input-bordered w-full max-w-xs border-2 border-gray-400  "
                                placeholder=""
                                value={total_floors}
                                onChange={(e) => setTotal_floors(e.target.value)}
                            />
                            {/* {errors["building-floor-avg-monthly-rent"] && <p className="text-red-500 text-sm mt-1">{errors["building-floor-avg-monthly-rent"]}</p>} */}
                            <div className="m-4">
                                {isNaN(Number(total_floors)) ? <span className="text-red-500 text-sm mt-1">Enter number only</span> : Number(total_floors).toLocaleString()}
                                {/* {Number(avg_sale_price).toLocaleString()} */}
                            </div>
                        </div>
                    </div>

                    {/* Parking Floors  */}
                    <div className="">
                        <label
                            htmlFor="parking-floors"
                            className="block mb-2 text-sm font-medium"
                        >
                            Parking Floors:
                        </label>
                        <div className="flex">
                            <Input
                                type="text"
                                id="parking-floors"
                                name="parking-floors"
                                className="input input-bordered  w-full max-w-xs border-2 border-gray-400  "
                                placeholder=""
                                value={parking_floor}
                                onChange={(e) => setParking_floor(e.target.value)}
                            />
                            {/* {errors["building-floor-avg-monthly-rent"] && <p className="text-red-500 text-sm mt-1">{errors["building-floor-avg-monthly-rent"]}</p>} */}
                            <div className="m-4">
                                {isNaN(Number(parking_floor)) ? <span className="text-red-500 text-sm mt-1">Enter number only</span> : Number(parking_floor).toLocaleString()}
                                {/* {Number(avg_sale_price).toLocaleString()} */}
                            </div>
                        </div>
                    </div>

                    {/* Facilities */}
                    <div className="">
                        <fieldset >
                            <legend className="block mb-2 text-sm font-medium">
                                Building Facilities:
                            </legend>
                            <div className="flex gap-8">
                                <div className="flex items-center ml-2">
                                    <input
                                        id="building-facility-centrally-air-conditioned"
                                        name="building-facility-centrally-air-conditioned"
                                        type="checkbox"
                                        className="checkbox checkbox-primary"
                                        value="yes"
                                    />
                                    <label
                                        htmlFor="building-facility-centrally-air-conditioned"
                                        className="ml-2 text-sm font-medium  "
                                    >
                                        Centrally Air Conditioned
                                    </label>
                                </div>

                                <div className="flex items-center ml-2">
                                    <input
                                        id="building-facility-security"
                                        name="building-facility-security"
                                        type="checkbox"
                                        className="checkbox checkbox-primary"
                                        value="yes"
                                    />
                                    <label
                                        htmlFor="building-facility-security"
                                        className="ml-2 text-sm font-medium  "
                                    >
                                        Security
                                    </label>
                                </div>

                                <div className="flex items-center ml-2">
                                    <input
                                        id="building-facility-escalators"
                                        name="building-facility-escalators"
                                        type="checkbox"
                                        value="yes"
                                        className="checkbox checkbox-primary"
                                    />
                                    <label
                                        htmlFor="building-facility-escalators"
                                        className="ml-2 text-sm font-medium  "
                                    >
                                        Escalators
                                    </label>
                                </div>

                                <div className="flex items-center ml-2">
                                    <input
                                        id="building-facility-food-court"
                                        name="building-facility-food-court"
                                        type="checkbox"
                                        value="yes"
                                        className="checkbox checkbox-primary"
                                    />
                                    <label
                                        htmlFor="building-facility-food-court"
                                        className="ml-2 text-sm font-medium  "
                                    >
                                        Food Court
                                    </label>
                                </div>

                                <div className="flex items-center ml-2">
                                    <input
                                        id="building-facility-entertainment-area"
                                        name="building-facility-entertainment-area"
                                        type="checkbox"
                                        value="yes"
                                        className="checkbox checkbox-primary"
                                    />
                                    <label
                                        htmlFor="building-facility-entertainment-area"
                                        className="ml-2 text-sm font-medium  "
                                    >
                                        Entertainment Areas
                                    </label>
                                </div>

                                <div className="flex items-center ml-2">
                                    <input
                                        id="building-facility-none"
                                        name="building-facility-none"
                                        type="checkbox"
                                        value="yes"
                                        className="checkbox checkbox-primary"
                                    />
                                    <label
                                        htmlFor="building-facility-none"
                                        className="ml-2 text-sm font-medium  "
                                    >
                                        None
                                    </label>
                                </div>
                            </div>
                        </fieldset>
                    </div>

                </div>

                {/* Retail floors */}
                <div className="p-5 border-2 border-b-0 border-gray-200 dark:border-gray-700">
                    {/* No. of Retail Floors */}
                    <div className="">
                        Retail Section:
                    </div>
                    <div className="mt-4">
                        <label
                            htmlFor="retail-floors-count"
                            className="block mb-2 text-sm font-medium"
                        >
                            No. of Retail Floors:
                        </label>
                        <div className="flex">
                            <Input
                                type="text"
                                id="retail-floors-count"
                                name="retail-floors-count"
                                min="0"
                                className="input input-bordered  w-full max-w-xs border-2 border-gray-400  "
                                placeholder=""
                                value={retail_floors_num}
                                onChange={(e) => setRetail_floors_num(e.target.value)}
                            />
                            {/* {errors["building-floor-avg-monthly-rent"] && <p className="text-red-500 text-sm mt-1">{errors["building-floor-avg-monthly-rent"]}</p>} */}
                            <div className="m-4">
                                {isNaN(Number(retail_floors_num)) ? <span className="text-red-500 text-sm mt-1">Enter number only</span> : Number(retail_floors_num)}
                                {/* {Number(avg_sale_price).toLocaleString()} */}
                            </div>
                        </div>
                    </div>

                    {/* No. of Shops  */}
                    <div className="">
                        <label
                            htmlFor="retail-floors-shops-count"
                            className="block mb-2 text-sm font-medium"
                        >
                            No. of Shops:
                        </label>
                        <div className="flex">
                            <Input
                                type="text"
                                id="retail-floors-shops-count"
                                name="retail-floors-shops-count"
                                min="0"
                                className="input input-bordered  w-full max-w-xs border-2 border-gray-400 "
                                placeholder=""
                                value={shop_num}
                                onChange={(e) => setShop_num(e.target.value)}
                            />
                            {/* {errors["building-floor-avg-monthly-rent"] && <p className="text-red-500 text-sm mt-1">{errors["building-floor-avg-monthly-rent"]}</p>} */}
                            <div className="m-4">
                                {isNaN(Number(shop_num)) ? <span className="text-red-500 text-sm mt-1">Enter number only</span> : Number(shop_num)}
                                {/* {Number(avg_sale_price).toLocaleString()} */}
                            </div>
                        </div>
                    </div>

                    {/* Maintenance Fee */}
                    {/* <div className="mt-4">
            <label
              htmlFor="retail-floors-maintenance-fee"
              className="block mb-2 text-sm font-medium"
            >
              Maintenance Fee:
            </label>
            <div className="flex">
              <Input
                onChange={(e) => {
                  setRetail_Floors_Maintenance_Fee(Number(e.target.value))
                  console.log(e.target.value)
                }}
                type="number"
                id="retail-floors-maintenance-fee"
                name="retail-floors-maintenance-fee"
                min="0"
                className="input input-bordered w-full max-w-xs border-2 border-gray-400 "
                placeholder="Rs."
              />
              <div className="m-4">
                {Number(retail_floors_maintenance_fee).toLocaleString()}
              </div>
            </div>
          </div> */}


                    {/* <div className="mt-4">
            <label
              htmlFor="retail-floors-brands-type"
              className="block mb-2 text-sm font-medium"
            >
              Brands/Type of Products & Services:
            </label>
            <Input
              type="text"
              id="retail-floors-brands-type"
              name="retail-floors-brands-type"
              className="input input-bordered w-full mb-2 max-w-xs border-2 border-gray-400  "
              placeholder=""
            />
          </div> */}

                    {/* Brands/Type of Products & Services: */}
                    <div className="mt-4">Brands/Type of Products & Services:</div>
                    <div className="flex gap-12">
                        {/* Retail Categories */}
                        <div className="mt-4">
                            <fieldset >
                                <legend className="block mb-2  font-medium">
                                    Retail Categories:
                                </legend>
                                <div className=" flex flex-col gap-2">
                                    <div className="flex items-center ml-2">
                                        <input
                                            id="has-fashion-health"
                                            name="has-fashion-health"
                                            type="checkbox"
                                            value="yes"
                                            className="checkbox checkbox-primary"
                                        />
                                        <label
                                            htmlFor="has-fashion-health"
                                            className="ml-2 text-sm font-medium  "
                                        >
                                            Fashion & Health
                                        </label>
                                    </div>

                                    <div className="flex items-center ml-2">
                                        <input
                                            id="has-electronics-appliancecs"
                                            name="has-electronics-appliancecs"
                                            type="checkbox"
                                            value="yes"
                                            className="checkbox checkbox-primary"
                                        />
                                        <label
                                            htmlFor="has-electronics-appliancecs"
                                            className="ml-2 text-sm font-medium  "
                                        >
                                            Electronics & Appliances
                                        </label>
                                    </div>

                                    <div className="flex items-center ml-2">
                                        <input
                                            id="has-home-living"
                                            name="has-home-living"
                                            type="checkbox"
                                            value="yes"
                                            className="checkbox checkbox-primary"
                                        />
                                        <label
                                            htmlFor="has-home-living"
                                            className="ml-2 text-sm font-medium  "
                                        >
                                            Home & Living
                                        </label>
                                    </div>


                                </div>
                            </fieldset>
                        </div>

                        {/* Food & Beverage Categories */}
                        <div className="mt-4">
                            <fieldset >
                                <legend className="block mb-2 font-medium">
                                    Food & Beverage Categories:
                                </legend>
                                <div className="flex flex-col gap-2">
                                    <div className="flex items-center ml-2">
                                        <input
                                            id="has-restaurants-courts"
                                            name="has-restaurants-courts"
                                            type="checkbox"
                                            value="yes"
                                            className="checkbox checkbox-primary"
                                        />
                                        <label
                                            htmlFor="has-restaurants-courts"
                                            className="ml-2 text-sm font-medium  "
                                        >
                                            Restaurants/Food courts
                                        </label>
                                    </div>

                                    <div className="flex items-center ml-2">
                                        <input
                                            id="has-bakery-ice"
                                            name="has-bakery-ice"
                                            type="checkbox"
                                            value="yes"
                                            className="checkbox checkbox-primary"
                                        />
                                        <label
                                            htmlFor="has-bakery-ice"
                                            className="ml-2 text-sm font-medium  "
                                        >
                                            Bakery/Ice cream
                                        </label>
                                    </div>

                                    <div className="flex items-center ml-2">
                                        <input
                                            id="has-grocery-supermarkets"
                                            name="has-grocery-supermarkets"
                                            type="checkbox"
                                            value="yes"
                                            className="checkbox checkbox-primary"
                                        />
                                        <label
                                            htmlFor="has-grocery-supermarkets"
                                            className="ml-2 text-sm font-medium  "
                                        >
                                            Grocery & Supermarkets
                                        </label>
                                    </div>


                                </div>
                            </fieldset>
                        </div>

                        {/* Services Categories */}
                        <div className="mt-4">
                            <fieldset >
                                <legend className="block mb-2  font-medium">
                                    Services Categories:
                                </legend>
                                <div className="flex flex-col gap-2">
                                    <div className="flex items-center ml-2">
                                        <input
                                            id="has-banks-atm"
                                            name="has-banks-atm"
                                            type="checkbox"
                                            value="yes"
                                            className="checkbox checkbox-primary"
                                        />
                                        <label
                                            htmlFor="has-banks-atm"
                                            className="ml-2 text-sm font-medium  "
                                        >
                                            Banks & ATMs
                                        </label>
                                    </div>

                                    <div className="flex items-center ml-2">
                                        <input
                                            id="has-real-estate"
                                            name="has-real-estate"
                                            type="checkbox"
                                            value="yes"
                                            className="checkbox checkbox-primary"
                                        />
                                        <label
                                            htmlFor="has-real-estate"
                                            className="ml-2 text-sm font-medium  "
                                        >
                                            Real Estate Agencies
                                        </label>
                                    </div>

                                    <div className="flex items-center ml-2">
                                        <input
                                            id="has-labs-pharmacies"
                                            name="has-labs-pharmacies"
                                            type="checkbox"
                                            value="yes"
                                            className="checkbox checkbox-primary"
                                        />
                                        <label
                                            htmlFor="has-labs-pharmacies"
                                            className="ml-2 text-sm font-medium  "
                                        >
                                            Labs & Pharmacies
                                        </label>
                                    </div>


                                </div>
                            </fieldset>
                        </div>

                        {/* Entertainment & Leisure */}
                        <div className="mt-4">
                            <fieldset >
                                <legend className="block mb-2 font-medium">
                                    Entertainment & Leisure:
                                </legend>
                                <div className="flex flex-col gap-2">
                                    <div className="flex items-center ml-2">
                                        <input
                                            id="has-play-fitness"
                                            name="has-play-fitness"
                                            type="checkbox"
                                            value="yes"
                                            className="checkbox checkbox-primary"
                                        />
                                        <label
                                            htmlFor="has-play-fitness"
                                            className="ml-2 text-sm font-medium  "
                                        >
                                            Play Areas & Fitness Centers
                                        </label>
                                    </div>

                                    <div className="flex items-center ml-2">
                                        <input
                                            id="has-swimming-pool"
                                            name="has-swimming-pool"
                                            type="checkbox"
                                            value="yes"
                                            className="checkbox checkbox-primary"
                                        />
                                        <label
                                            htmlFor="has-swimming-pool"
                                            className="ml-2 text-sm font-medium  "
                                        >
                                            Swimming Pool
                                        </label>
                                    </div>

                                    <div className="flex items-center ml-2">
                                        <input
                                            id="has-cinema"
                                            name="has-cinema"
                                            type="checkbox"
                                            value="yes"
                                            className="checkbox checkbox-primary"
                                        />
                                        <label
                                            htmlFor="has-cinema"
                                            className="ml-2 text-sm font-medium  "
                                        >
                                            Cinema
                                        </label>
                                    </div>
                                </div>
                            </fieldset>
                        </div>
                    </div>
                </div>

                {/* <div className="p-5 border-2 border-b-0 border-gray-200 dark:border-gray-700">
        </div> */}



                {/* <div className="p-5 border-2 border-b-0 border-gray-200 dark:border-gray-700">


        </div>  */}

                {/* <div className="p-5 border-2 border-t-0 border-gray-200 dark:border-gray-700">



        </div> */}

                {/* Apartments section */}
                <div className="p-5 border-2 border-gray-200 dark:border-gray-700">
                    <div className="">
                        Apartment Section:
                    </div>
                    {/* No. of Apartment Floors  */}
                    <div className="mt-4">
                        <label
                            htmlFor="apartment-floors-count"
                            className="block mb-2 text-sm font-medium"
                        >
                            No. of Apartment Floors:
                        </label>
                        <div className="flex">
                            <Input
                                type="text"
                                id="apartment-floors-count"
                                name="apartment-floors-count"
                                className="input input-bordered input-primary w-full max-w-xs border-2 border-gray-400  "
                                placeholder=""
                                value={apartment_floor_num}
                                onChange={(e) => setApartment_floor_num(e.target.value)}
                            />
                            {/* {errors["building-floor-avg-monthly-rent"] && <p className="text-red-500 text-sm mt-1">{errors["building-floor-avg-monthly-rent"]}</p>} */}
                            <div className="m-4">
                                {isNaN(Number(apartment_floor_num)) ? <span className="text-red-500 text-sm mt-1">Enter number only</span> : Number(apartment_floor_num)}
                                {/* {Number(avg_sale_price).toLocaleString()} */}
                            </div>
                        </div>
                    </div>

                    {/* No. of Apartments  */}
                    <div className="">
                        <label
                            htmlFor="apartments-count"
                            className="block mb-2 text-sm font-medium"
                        >
                            No. of Apartment:
                        </label>
                        <div className="flex">
                            <Input
                                type="text"
                                id="apartments-count"
                                name="apartments-count"
                                min="0"
                                className="input input-bordered w-full max-w-xs border-2 border-gray-400 "
                                placeholder=""
                                value={apartment_num}
                                onChange={(e) => setApartment_num(e.target.value)}
                            />
                            {/* {errors["building-floor-avg-monthly-rent"] && <p className="text-red-500 text-sm mt-1">{errors["building-floor-avg-monthly-rent"]}</p>} */}
                            <div className="m-4">
                                {isNaN(Number(apartment_num)) ? <span className="text-red-500 text-sm mt-1">Enter number only</span> : Number(apartment_num)}
                                {/* {Number(avg_sale_price).toLocaleString()} */}
                            </div>
                        </div>
                    </div>

                    {/* Apartments Type  */}
                    <div className="">
                        <fieldset>
                            <legend className="block mb-2 text-sm font-medium">
                                Apartments Type:
                            </legend>

                            <div className="grid grid-cols-6 gap-4">
                                <div className="flex items-center mb-4 ml-2">
                                    <input
                                        id="apartments-studio"
                                        name="apartments-studio"
                                        type="checkbox"
                                        value="yes"
                                        className="checkbox checkbox-primary"
                                    />
                                    <label
                                        htmlFor="apartments-studio"
                                        className="ml-2 text-sm font-medium  "
                                    >
                                        Studio
                                    </label>
                                </div>

                                <div className="flex items-center mb-4 ml-2">
                                    <input
                                        id="apartments-has-type-1-bed"
                                        name="apartments-has-type-1-bed"
                                        type="checkbox"
                                        value="yes"
                                        className="checkbox checkbox-primary"
                                    />
                                    <label
                                        htmlFor="apartments-has-type-1-bed"
                                        className="ml-2 text-sm font-medium  "
                                    >
                                        1-Bed
                                    </label>
                                </div>

                                <div className="flex items-center mb-4 ml-2">
                                    <input
                                        id="apartments-has-type-2-bed"
                                        name="apartments-has-type-2-bed"
                                        type="checkbox"
                                        value="yes"
                                        className="checkbox checkbox-primary"
                                    />
                                    <label
                                        htmlFor="apartments-has-type-2-bed"
                                        className="ml-2 text-sm font-medium  "
                                    >
                                        2-Bed
                                    </label>
                                </div>

                                <div className="flex items-center mb-4 ml-2">
                                    <input
                                        id="apartments-has-type-3-bed"
                                        name="apartments-has-type-3-bed"
                                        type="checkbox"
                                        value="yes"
                                        className="checkbox checkbox-primary"
                                    />
                                    <label
                                        htmlFor="apartments-has-type-3-bed"
                                        className="ml-2 text-sm font-medium  "
                                    >
                                        3-Bed
                                    </label>
                                </div>

                                <div className="flex items-center mb-4 ml-2">
                                    <input
                                        id="apartments-has-type-4-bed"
                                        name="apartments-has-type-4-bed"
                                        type="checkbox"
                                        value="yes"
                                        className="checkbox checkbox-primary"
                                    />
                                    <label
                                        htmlFor="apartments-has-type-4-bed"
                                        className="ml-2 text-sm font-medium  "
                                    >
                                        4-Bed
                                    </label>
                                </div>
                                <div className="flex items-center mb-4 ml-2">
                                    <input
                                        id="apartments-has-type-5-bed"
                                        name="apartments-has-type-5-bed"
                                        type="checkbox"
                                        value="yes"
                                        className="checkbox checkbox-primary"
                                    />
                                    <label
                                        htmlFor="apartments-has-type-5-bed"
                                        className="ml-2 text-sm font-medium  "
                                    >
                                        5-Bed
                                    </label>
                                </div>

                                <div className="flex items-center mb-4 ml-2">
                                    <input
                                        id="apartments-has-type-duplex"
                                        name="apartments-has-type-duplex"
                                        type="checkbox"
                                        value="yes"
                                        className="checkbox checkbox-primary"
                                    />
                                    <label
                                        htmlFor="apartments-has-type-duplex"
                                        className="ml-2 text-sm font-medium  "
                                    >
                                        Duplex
                                    </label>
                                </div>

                                <div className="flex items-center mb-4 ml-2">
                                    <input
                                        id="apartments-has-type-penthouse"
                                        name="apartments-has-type-penthouse"

                                        type="checkbox"
                                        value="yes"
                                        className="checkbox checkbox-primary"
                                    />
                                    <label
                                        htmlFor="apartments-has-type-penthouse"
                                        className="ml-2 text-sm font-medium  "
                                    >
                                        Penthouse
                                    </label>
                                </div>

                                <div className="flex items-center mb-4 ml-2">
                                    <input
                                        id="has-furnished"
                                        name="has-furnished"
                                        type="checkbox"
                                        value="yes"
                                        className="checkbox checkbox-primary"
                                    />
                                    <label
                                        htmlFor="has-furnished"
                                        className="ml-2 text-sm font-medium  "
                                    >
                                        Furnished
                                    </label>
                                </div>


                                <div className="flex items-center mb-4 ml-2">
                                    <input
                                        id="has-semi-furnished"
                                        name="has-semi-furnished"
                                        type="checkbox"
                                        value="yes"
                                        className="checkbox checkbox-primary"
                                    />
                                    <label
                                        htmlFor="has-semi-furnished"
                                        className="ml-2 text-sm font-medium  "
                                    >
                                        Semi-Furnished
                                    </label>
                                </div>

                                <div className="flex items-center mb-4 ml-2">
                                    <input
                                        id="has-service-apartments"
                                        name="has-service-apartments"
                                        type="checkbox"
                                        value="yes"
                                        className="checkbox checkbox-primary"
                                    />
                                    <label
                                        htmlFor="has-service-apartments"
                                        className="ml-2 text-sm font-medium  "
                                    >
                                        Service Apartments
                                    </label>
                                </div>

                                <div className="flex items-center mb-4 ml-2">
                                    <input
                                        id="has-hotel-suites-apartments"
                                        name="has-hotel-suites-apartments"
                                        type="checkbox"
                                        value="yes"
                                        className="checkbox checkbox-primary"
                                    />
                                    <label
                                        htmlFor="has-hotel-suites-apartments"
                                        className="ml-2 text-sm font-medium  "
                                    >
                                        Hotel Suites Apartments
                                    </label>
                                </div>
                            </div>
                        </fieldset>
                    </div>

                    {/* Servant Quarter  */}
                    <div className="mt-4">
                        <label
                            htmlFor="apartment-has-servant-quarter"
                            className="block mb-2 text-sm font-medium"
                        >
                            Servant Quarter:
                        </label>

                        {/* <select
                            id="apartment-has-servant-quarter"
                            name="apartment-has-servant-quarter"
                            className="select  w-full text-sm pl-2 h-10 max-w-xs border-2 rounded border-gray-400 bg-background"

                        >
                            <option value="">Select</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select> */}

                        <Select
                            name="apartment-has-servant-quarter">
                            <SelectTrigger
                                id="apartment-has-servant-quarter"
                                className="select w-full max-w-xs border-2 border-gray-400  ">
                                <SelectValue placeholder="Select" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel></SelectLabel>
                                    <SelectItem value="Yes">Yes</SelectItem>
                                    <SelectItem value="No">No</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>

                    </div>



                </div>



                {/* Office floors section */}
                <div className="p-5 border-2 border-t-0 border-gray-200 dark:border-gray-700">
                    <div className="">
                        Office Section:
                    </div>
                    {/* No. of Office Floors */}
                    <div className="mt-4">
                        <label
                            htmlFor="office-floors-count"
                            className="block mb-2 text-sm font-medium"
                        >
                            No. of Office Floors:
                        </label>
                        <div className="flex">
                            <Input
                                type="text"
                                id="office-floors-count"
                                name="office-floors-count"
                                min="0"
                                className="input input-bordered  w-full max-w-xs border-2 border-gray-400  "
                                placeholder=""
                                value={office_floor_num}
                                onChange={(e) => setOffice_floor_num(e.target.value)}
                            />
                            <div className="m-4">
                                {isNaN(Number(office_floor_num)) ? <span className="text-red-500 text-sm mt-1">Enter number only</span> : Number(office_floor_num).toLocaleString()}

                            </div>
                        </div>
                    </div>

                    {/* No. of Offices */}
                    <div className="">
                        <label
                            htmlFor="offices-count"
                            className="block mb-2 text-sm font-medium"
                        >
                            No. of Offices:
                        </label>
                        <div className="flex">
                            <Input
                                type="text"
                                id="offices-count"
                                name="offices-count"
                                min="0"
                                className="input input-bordered w-full max-w-xs border-2 mb-2 border-gray-400  "
                                placeholder=""
                                value={office_num}
                                onChange={(e) => setOffice_num(e.target.value)}
                            />
                            <div className="m-4">
                                {isNaN(Number(office_num)) ? <span className="text-red-500 text-sm mt-1">Enter number only</span> : Number(office_num).toLocaleString()}

                            </div>
                        </div>
                    </div>

                </div>

                {/* feedback */}
                <div className="p-5 border-2 border-t-0 border-gray-200 dark:border-gray-700">
                    {/* Surveyor Name  */}
                    <div className="">
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
                            className="input input-bordered w-full max-w-xs border-2 border-gray-400  "
                            placeholder=""
                        />
                    </div>

                    {/* Remarks  */}
                    <div className="mt-4">
                        <label htmlFor="message" className="block mb-2 text-sm font-medium">
                            Your Remarks:
                        </label>
                        <Textarea
                            id="building-survery-remarks"
                            name="building-survery-remarks"
                            className="textarea  w-full border-2 border-gray-400  "
                            placeholder="Leave a comment..."
                        ></Textarea>
                    </div>


                    {/* <div className="flex items-center mt-4 ml-2">
                        <input
                            id="building-draft"
                            name="building-draft"
                            type="checkbox"
                            value="yes"
                            className="checkbox checkbox-primary"
                        />
                        <label
                            htmlFor="building-draft"
                            className="ml-2 text-sm font-medium  "
                        >
                            Draft:
                        </label>
                    </div> */}
                </div>

                {/* Submit button */}
                <div className="flex gap-6 justify-center mt-3">
                    {/* <AddButton /> */}
                    <Button disabled={isAdding}>{isAdding ? 'Adding...' : 'Add'}</Button>
                    {/* <Link href="/buildings" className="flex justify-center items-center border border-black px-2 py-1 rounded-xl bg-white text-black hover:bg-red-600 hover:text-white capitalize">Cancel</Link> */}

                    <Button asChild className="bg-transparent text-primary hover:bg-primary-foreground">
                        <Link href="/buildings">Cancel</Link>
                    </Button>


                    {/* <button
            type="submit"
            className="border border-gray-300 text-sm rounded-lg block p-2.5"
          >
            Create
          </button> */}
                </div>
            </form >
        </>
    );
}
