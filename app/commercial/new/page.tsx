"use client"

import Link from "next/link";
import { Button } from "@/components/ui/button"
// import AddButton from "../components/AddButton";
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

import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import createCommercial from "@/app/actions/creatCommercial";
import AddButton from "../components/AddButton";
import FetchCommercialName from "../components/FetchCommercialName";
import { Command, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import AddCommercial from "../components/AddCommerical";
import { z } from "zod";

const stringSchema = z.string().min(1, "Address is required").max(255, "Address cannot exceed 255 characters");
const numberSchema = z.number().nonnegative("Value must be a positive number").nullable();
const yearSchema = z
    .number()
    .int()
    .min(1950, "Year must be no earlier than 1950")
    .max(2025, "Year must be no later than 2024");

export default function Page() {


    const [isAdding, setIsAdding] = useState(false);
    const [area, setArea] = useState<any>("");
    const [occupancy, setOccupancy] = useState<any>("");
    const [launch_year, setLaunch_year] = useState<any>("");
    const [total_plots, setTotal_plots] = useState<any>("");
    const [total_shops, setTotal_shops] = useState<any>("");
    const [total_offices, setTotal_offices] = useState<any>("");
    const [total_apartments, setTotal_apartments] = useState<any>("");

    const [commercialNames, setCommercialNames] = useState<any>([])

    const [commercialKeywords, setCommercialKeywords] = useState<any>("")
    const [isSearching, setSearching] = useState(false);

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
                { name: "commercial-launch-year", value: launch_year, schema: yearSchema },
                { name: "commercial-occupancy", value: occupancy, schema: numberSchema },
                { name: "commercial-area", value: area, schema: numberSchema },
                { name: "total-plots", value: total_plots, schema: numberSchema },
                { name: "total-shops", value: total_shops, schema: numberSchema },
                { name: "total-offices", value: total_offices, schema: numberSchema },
                { name: "total-apartments", value: total_apartments, schema: numberSchema },


            ];

            console.log("2");


            const newErrors = {};
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

                const commerical_object = {
                    // date: entryDate,
                    survey_date: formData.get("commercial-survey-date"),
                    city: formData.get("commercial-city"),
                    commercial_zone_name: commercialKeywords,
                    zone: formData.get("commercial-zone"),
                    type: formData.get("commercial-type"),
                    location: formData.get("commercial-location"),
                    project_status: formData.get("commercial-project-status"),
                    launch_year: isNaN(Number(launch_year)) ? null : Number(launch_year),
                    grade: formData.get("commercial-grade"),
                    area: isNaN(Number(area)) ? null : Number(area),
                    occupancy: isNaN(Number(occupancy)) ? null : Number(occupancy),
                    total_plots: isNaN(Number(total_plots)) ? null : Number(total_plots),
                    total_shops: isNaN(Number(total_shops)) ? null : Number(total_shops),
                    total_offices: isNaN(Number(total_offices)) ? null : Number(total_offices),
                    total_apartments: isNaN(Number(total_apartments)) ? null : Number(total_apartments),
                    property_feature: formData.get("property-feature"),
                    property_title: formData.get("property-title"),
                    remarks: formData.get("remarks"),


                }
                console.log("commerical_object")
                console.log(commerical_object)

                const add_commercial_output = await AddCommercial(commerical_object)

                // const add_building_output = await prisma.buildings.create({
                //   data: building_object
                // });


                console.log("commerical_object")
                console.log(add_commercial_output)

                // console.log("isAdding 2");
                // console.log(isAdding);
                // if (isAdding) {
                //     console.log("redictecting")
                //     // redirect("/buildings/" + building_id);
                // router.push("/buildings/" + add_building_output); // Replace with your desired route
                // }

            } catch (error) {

                console.error('Error submitting commercial:', error);

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

        // console.log(buildingKeywords)
        // console.log(buildingNames)

        if (commercialKeywords.length >= 3) {
            const fetchData = async () => {
                try {
                    setSearching(true)

                    // console.log("CityInput use effect trying")
                    const all_Commercials = await FetchCommercialName(commercialKeywords)

                    // console.log("all_buildings");
                    // console.log(all_buildings);

                    setTimeout(() => {
                        // console.log("Hello, World!");

                    }, 3000);
                    setSearching(false)
                    setCommercialNames(all_Commercials);



                } catch (error) {

                    console.error('Error fetching cities list:', error);
                }
            };
            fetchData();

        }



    }, [commercialKeywords]);

    return (
        <>
            <Link href="/commercial" className="text-lg">Commercial</Link>

            <form
                // action={createCommercial}
                onSubmit={handleSubmit}
            >
                <div className="p-5 border-2 border-b-0 border-gray-200 dark:border-gray-700">
                    {/* Survey Date */}

                    <div className="relative max-w-sm">
                        <label
                            htmlFor="commercial-survey-date"
                            className="block mb-2 text-sm font-medium "
                        >
                            Survey Date: (Month/Day/year)

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
                            id="commercial-survey-date"
                            name="commercial-survey-date"
                            // defaultValue="2024-12-13"
                            defaultValue={(new Date).toISOString().split('T')[0]}
                            // value="12/26/2024"
                            className="max-w-xs border-gray-400  border-2 text-sm rounded focus:ring-blue-500  block w-full p-2.5"
                            placeholder="Survey date"
                        />
                    </div>
                    {/* City */}
                    <div className="mt-4">
                        <label
                            htmlFor="commercial-city"
                            className="block mb-2 text-sm font-medium"
                        >
                            City
                        </label>
                        <Select
                            name="commercial-city">
                            <SelectTrigger
                                id="commercial-city"
                                className="select  w-full max-w-xs border-2 border-gray-400">
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

                    {/*Commercial Zone name*/}

                    {/* <div className="mt-4">
                        <label
                            htmlFor="commercial-zone-name"
                            className="block mb-2 text-sm font-medium"
                        >
                            Commercial Zone name:
                        </label>
                        <Input
                            type="text"
                            id="commercial-zone-name"
                            name="commercial-zone-name"
                            required
                            className="input input-bordered w-full max-w-xs border-2 border-gray-400 "
                            placeholder="Zone name"
                        />
                    </div> */}

                    <div className="mt-4">
                        <div className="">
                            <label
                                htmlFor="commercial-zone-name"
                                className="block mb-2 text-sm font-medium"
                            >
                                Commercial Zone name:<span className="text-red-700">*</span>
                            </label>
                        </div>


                        <div className="w-full max-w-xs">
                            <Command className="rounded-lg border shadow-md ">
                                <CommandInput
                                    // type="text"
                                    id="commercial-zone-name"
                                    name="commercial-zone-name"
                                    required
                                    className="input input-bordered w-full max-w-xs border-2 border-gray-400 "
                                    placeholder="Type a Commercial zone name..."
                                    onValueChange={(value) => setCommercialKeywords(value)} // Update searchKeyword on input change
                                />

                                {(commercialKeywords.length >= 3 && !isSearching) ? (

                                    <CommandList className="">
                                        <CommandGroup>
                                            {commercialNames.map((commercial: any) => (
                                                <CommandItem
                                                    key={commercial.commercial_zone_name}
                                                // onSelect={() => {
                                                //   setBuildingKeywords(building.name); // Update input with selected building
                                                //   setIsOpen(false); // Close the list after selection
                                                // }}
                                                >
                                                    {commercial.commercial_zone_name}
                                                </CommandItem>
                                            ))}
                                        </CommandGroup>


                                    </CommandList>
                                ) : <CommandList>{(isSearching) && <span>Loading</span>}</CommandList>}

                            </Command>
                        </div>
                    </div>



                    {/* Zone */}
                    <div className="mt-4">
                        <label
                            htmlFor="commercial-zone"
                            className="block mb-2 text-sm font-medium"
                        >
                            Zone:<span className="text-red-700">*</span>
                        </label>
                        {/* <select
                            id="commercial-zone"
                            required
                            name="commercial-zone"
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
                            name="commercial-zone">
                            <SelectTrigger
                                id="commercial-zone"
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
                </div>

                <div className="p-5 border-2 border-b-0 border-gray-200 dark:border-gray-700">
                    {/* Project Type */}
                    <div className="">
                        <label
                            htmlFor="commercial-type"
                            className="block mb-2 text-sm font-medium"
                        >
                            Type:<span className="text-red-700">*</span>
                        </label>
                        {/* <select
                            id="commercial-type"
                            required
                            name="commercial-type"
                            className="select  w-full text-sm pl-2 h-10 max-w-xs border-2 rounded border-gray-400 bg-background"

                        >
                            <option value="">Select</option>
                            <option value="CBD">CBD</option>
                            <option value="Whole Sale Market">Whole Sale Market</option>
                            <option value="Retail Market">Retail Market</option>
                            <option value="Specialized Market">Specialized Market</option>
                            <option value="Highway Oriented Ribbons">Highway Oriented Ribbons</option>
                            <option value="Occasional Bazar">Occasional Bazar</option>
                        </select> */}
                        <Select
                            name="commercial-type">
                            <SelectTrigger
                                id="commercial-type"
                                className="select  w-full max-w-xs border-2 border-gray-400 ">
                                <SelectValue placeholder="Select Type" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel></SelectLabel>
                                    <SelectItem value="CBD">CBD</SelectItem>
                                    <SelectItem value="Whole Sale Market">Whole Sale Market</SelectItem>
                                    <SelectItem value="Retail Market">Retail Market</SelectItem>
                                    <SelectItem value="Specialized Market">Specialized Market</SelectItem>
                                    <SelectItem value="Highway Oriented Ribbons">Highway Oriented Ribbons</SelectItem>
                                    <SelectItem value="Occasional Bazar">Occasional Bazar</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>

                    {/* Location/Address  */}
                    <div className="mt-4">
                        <label htmlFor="commercial-location" className="block mb-2 text-sm font-medium">
                            Location:
                        </label>
                        <Input
                            type="text"
                            id="commercial-location"
                            name="commercial-location"
                            className="input input-bordered w-full max-w-xs border-2 border-gray-400 "
                            placeholder="Location"
                        />
                    </div>

                    {/* Project Type */}
                    <div className="mt-4">
                        <label
                            htmlFor="commercial-project-status"
                            className="block mb-2 text-sm font-medium"
                        >
                            Project Status
                        </label>
                        <Select
                            name="commercial-project-status">
                            <SelectTrigger
                                id="commercial-project-status"
                                className="select  w-full max-w-xs border-2 border-gray-400 ">
                                <SelectValue placeholder="Select Status" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel></SelectLabel>
                                    <SelectItem value="Developed">Developed</SelectItem>
                                    <SelectItem value="Under Developed">Under Developed</SelectItem>
                                    <SelectItem value="New Launch">New Launch</SelectItem>
                                    <SelectItem value="Files">Files</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                </div>

                <div className="p-5 border-2 border-b-0 border-gray-200 dark:border-gray-700">
                    {/* Launch Year*/}
                    <div className="">
                        <label
                            htmlFor="commercial-launch-year"
                            className="block mb-2 text-sm font-medium"
                        >
                            Launch Year:
                        </label>
                        <div className="flex">
                            <Input
                                type="text"
                                id="commercial-launch-year"
                                name="commercial-launch-year"
                                className="input input-bordered w-full max-w-xs border-2 border-gray-400  "
                                placeholder=""
                                value={launch_year}
                                onChange={(e) => setLaunch_year(e.target.value)}
                            />

                            <div className="m-3">
                                {isNaN(Number(launch_year)) ? <span className="text-red-500 text-sm mt-1">Enter number only</span> : Number(launch_year)}

                            </div>
                        </div>
                    </div>

                    {/*Grade  */}
                    <div className="mt-4">
                        <label
                            htmlFor="commercial-grade"
                            className="block mb-2 text-sm font-medium"
                        >
                            Grade
                        </label>
                        {/* <select
                            id="commercial-grade"
                            name="commercial-grade"
                            className="select  w-full text-sm pl-2 h-10 max-w-xs border-2 rounded border-gray-400 bg-background"

                        >
                            <option value="">Select</option>
                            <option value="A+">A+</option>
                            <option value="A">A</option>
                            <option value="B">B</option>
                            <option value="C">C</option>
                            <option value="D">D</option>
                        </select> */}
                        <Select
                            name="commercial-grade">
                            <SelectTrigger
                                id="commercial-grade"
                                className="select w-full max-w-xs border-2 border-gray-400  ">
                                <SelectValue placeholder="Select Grade" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel></SelectLabel>
                                    <SelectItem value="A+">A+</SelectItem>
                                    <SelectItem value="A">A</SelectItem>
                                    <SelectItem value="B">B</SelectItem>
                                    <SelectItem value="C">C</SelectItem>
                                    <SelectItem value="D">D</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>

                    {/* Total Area of Society (Acres) */}
                    <div className="mt-4">
                        <label
                            htmlFor="commercial-area"
                            className="block mb-2 text-sm font-medium"
                        >
                            Total Area:
                        </label>
                        <div className="flex">
                            <Input
                                type="text"
                                id="commercial-area"
                                name="commercial-area"
                                className="input input-bordered w-full max-w-xs border-2 border-gray-400  "
                                placeholder=""
                                value={area}
                                onChange={(e) => setArea(e.target.value)}
                            />
                            <div className="m-3">
                                {isNaN(Number(area)) ? <span className="text-red-500 text-sm mt-1">Enter number only</span> : Number(area).toLocaleString()}
                            </div>
                        </div>
                    </div>

                    {/* Occupancy Ratio */}
                    <div className="mt-4">
                        <label
                            htmlFor="commercial-occupancy"
                            className="block mb-2 text-sm font-medium"
                        >
                            Occupancy Ratio (1 to 100)
                        </label>
                        <div className="flex">
                            <Input
                                // type="number"
                                id="commercial-occupancy"
                                name="commercial-occupancy"
                                type="text"
                                className="input input-bordered w-full max-w-xs border-2 border-gray-400 "
                                min={0}
                                max={100}
                                placeholder=""
                                value={occupancy}
                                onChange={(e) => setOccupancy(e.target.value)}
                            />
                            <div className="m-3">
                                {isNaN(Number(occupancy)) ? <span className="text-red-500 text-sm mt-1">Enter number only</span> : Number(occupancy)}
                            </div>
                        </div>

                    </div>
                </div>

                <div className="p-5 border-2 border-b-0 border-gray-200 dark:border-gray-700">
                    {/* Total Plots */}
                    <div className="">
                        <label
                            htmlFor="total-plots"
                            className="block mb-2 text-sm font-medium"
                        >
                            No of Plots:
                        </label>
                        <div className="flex">
                            <Input
                                type="text"
                                id="total-plots"
                                name="total-plots"
                                className="input input-bordered w-full max-w-xs border-2 border-gray-400 "
                                placeholder=""
                                value={total_plots}
                                onChange={(e) => setTotal_plots(e.target.value)}
                            />
                            <div className="m-3">
                                {isNaN(Number(total_plots)) ? <span className="text-red-500 text-sm mt-1">Enter number only</span> : Number(total_plots).toLocaleString()}
                            </div>
                        </div>
                    </div>

                    {/* Total Shop*/}
                    <div className="">
                        <label
                            htmlFor="total-shops"
                            className="block mb-2 text-sm font-medium"
                        >
                            No of Shops:
                        </label>
                        <div className="flex">
                            <Input
                                type="text"
                                id="total-shops"
                                name="total-shops"
                                className="input input-bordered w-full max-w-xs border-2 border-gray-400 "
                                placeholder=""
                                value={total_shops}
                                onChange={(e) => setTotal_shops(e.target.value)}
                            />
                            <div className="m-3">
                                {isNaN(Number(total_shops)) ? <span className="text-red-500 text-sm mt-1">Enter number only</span> : Number(total_shops).toLocaleString()}
                            </div>
                        </div>
                    </div>

                    {/* Total office*/}
                    <div className="">
                        <label
                            htmlFor="total-offices"
                            className="block mb-2 text-sm font-medium"
                        >
                            No of Offices:
                        </label>
                        <div className="flex">
                            <Input
                                type="text"
                                id="total-offices"
                                name="total-offices"
                                className="input input-bordered w-full max-w-xs border-2 border-gray-400 "
                                placeholder=""
                                value={total_offices}
                                onChange={(e) => setTotal_offices(e.target.value)}
                            />
                            <div className="m-3">
                                {isNaN(Number(total_offices)) ? <span className="text-red-500 text-sm mt-1">Enter number only</span> : Number(total_offices).toLocaleString()}
                            </div>
                        </div>
                    </div>

                    {/* Total apartment*/}
                    <div className="">
                        <label
                            htmlFor="total-apartments"
                            className="block mb-2 text-sm font-medium"
                        >
                            No of Apartments:
                        </label>
                        <div className="flex">
                            <Input
                                type="text"
                                id="total-apartments"
                                name="total-apartments"
                                className="input input-bordered w-full max-w-xs border-2 border-gray-400 "
                                placeholder=""
                                value={total_apartments}
                                onChange={(e) => setTotal_apartments(e.target.value)}
                            />
                            <div className="m-3">
                                {isNaN(Number(total_apartments)) ? <span className="text-red-500 text-sm mt-1">Enter number only</span> : Number(total_apartments).toLocaleString()}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="p-5 border-2 border-gray-200 dark:border-gray-700">
                    {/* Property Feature */}
                    <div className="">
                        <label
                            htmlFor="property-feature"
                            className="block mb-2 text-sm font-medium"
                        >
                            Property Feature
                        </label>
                        {/* <select
                            id="property-feature"
                            name="property-feature"
                            className="select  w-full text-sm pl-2 h-10 max-w-xs border-2 rounded border-gray-400 bg-background"

                        >
                            <option value="">Select</option>
                            <option value="Main Boulevard Facing">Main Boulevard Facing</option>
                            <option value="Anchor Facing">Anchor Facing</option>
                            <option value="Rear Facing">Rear Facing</option>

                        </select> */}
                        <Select
                            name="property-feature">
                            <SelectTrigger
                                id="property-feature"
                                className="select w-full max-w-xs border-2 border-gray-400  ">
                                <SelectValue placeholder="Select Feature" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel></SelectLabel>
                                    <SelectItem value="Main Boulevard Facing">Main Boulevard Facing</SelectItem>
                                    <SelectItem value="Anchor Facing">Anchor Facing</SelectItem>
                                    <SelectItem value="Rear Facing">Rear Facing</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>

                    {/* Property Title */}
                    <div className="mt-4">
                        <label
                            htmlFor="property-title"
                            className="block mb-2 text-sm font-medium"
                        >
                            Property Title
                        </label>
                        {/* <select
                            id="property-title"
                            name="property-title"
                            className="select  w-full text-sm pl-2 h-10 max-w-xs border-2 rounded border-gray-400 bg-background"

                        >
                            <option value="">Select</option>
                            <option value="Ownership">Ownership</option>
                            <option value="Lease">Lease</option>
                            <option value="Unapproved">Unapproved</option>

                        </select> */}
                        <Select
                            name="property-title">
                            <SelectTrigger
                                id="property-title"
                                className="select w-full max-w-xs border-2 border-gray-400  ">
                                <SelectValue placeholder="Select Feature" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel></SelectLabel>
                                    <SelectItem value="Ownership">Ownership</SelectItem>
                                    <SelectItem value="Lease">Lease</SelectItem>
                                    <SelectItem value="Unapproved">Unapproved</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>



                    {/* Remarks  */}
                    <div className="mt-4">
                        <label htmlFor="message" className="block mb-2 text-sm font-medium">
                            Your Remarks
                        </label>
                        <Textarea
                            id="remarks"
                            name="remarks"
                            className="textarea  w-full border-2 border-gray-400  "
                            placeholder="Leave a comment..."
                        ></Textarea>
                    </div>
                </div>

                <div className="flex gap-2 justify-center mt-3">
                    {/* <AddButton /> */}
                    <Button disabled={isAdding}>{isAdding ? 'Adding...' : 'Add'}</Button>
                    {/* <Link href="/societies" className="flex justify-center items-center border border-black px-2 py-1 rounded-xl bg-white text-black hover:bg-red-600 hover:text-white capitalize">Cancel</Link> */}

                    <Button asChild className="bg-transparent text-primary hover:bg-primary-foreground">
                        <Link href="/commercial">Cancel</Link>
                    </Button>

                </div>

            </form >
        </>
    );
}
