"use client"

import Link from "next/link";
import { Button } from "@/components/ui/button"
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
import UpdateCommercial from "./UpdateCommercial";
import { useState } from "react";
import UpdateButton from "./UpdateButton";
import { Commercial } from "@prisma/client";

type UpdateCommercialFormProps = {
    commercial: Commercial | null; // Use the type defined in the Prisma schema
};

export default function UpdateCommercialForm({ commercial }: UpdateCommercialFormProps) {


    const [area, setArea] = useState(commercial?.area);
    const [occupancy, setOccupancy] = useState(commercial?.occupancy);




    return (
        <>
            <div>{commercial?.commercial_zone_name}</div>

            <form
                action={UpdateCommercial}
            >
                <div className="p-5 border-2 border-b-0 border-gray-200 dark:border-gray-700">
                    <div className="relative max-w-sm">
                        <label
                            htmlFor="commercial-id"
                            className="block mb-2 text-sm font-medium"
                        >
                            Commercial ID

                        </label>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-20 pointer-events-none">
                        </div>
                        <Input
                            type="text"
                            id="commercial-id"
                            name="commercial-id"
                            // defaultValue={societies?.survey_date as unknown as string}
                            value={commercial?.id}
                            onChange={() => (commercial)}
                            className="max-w-xs border-gray-400 border-2 text-sm rounded focus:ring-blue-500  block w-full p-2.5"
                            placeholder="ID"
                        />
                    </div>

                    {/* Survey Date */}

                    <div className="relative max-w-sm mt-4">
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
                            defaultValue={commercial?.survey_date as string}
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

                        <select
                            id="commercial-city"
                            name="commercial-city"
                            className="select  w-full text-sm pl-2 h-10 max-w-xs border-2 rounded border-gray-400 bg-background"
                            defaultValue={commercial?.city as string}
                        >
                            <option value="Bahawalpur">Bahawalpur</option>
                            <option value="Faisalabad">Faisalabad</option>
                            <option value="Gujranwala">Gujranwala</option>
                            <option value="Islamabad">Islamabad</option>
                            <option value="Lahore">Lahore</option>
                            <option value="Multan">Multan</option>
                            <option value="Rawalpindi">Rawalpindi</option>
                            <option value="Hyderabad">Hyderabad</option>
                            <option value="Karachi">Karachi</option>
                            <option value="Peshawar">Peshawar</option>
                            <option value="Quetta">Quetta</option>

                        </select>
                        {/* <Select
                            defaultValue={commercial?.city}
                            name="comercial-city">
                            <SelectTrigger
                                id="comercial-city"
                                className="select  w-full max-w-xs border-2 border-gray-400">
                                <SelectValue />
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
                        </Select> */}
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
                            className="input input-bordered w-full max-w-xs border-2 border-gray-400 "
                            defaultValue={commercial?.commercial_zone_name as string}
                        />
                    </div> */}

                    <div className="mt-4">
                        <label
                            htmlFor="commercial-zone-name"
                            className="block mb-2 text-sm font-medium"
                        >
                            Commercial Zone name:
                        </label>
                        <Input
                            id="commercial-zone-name"
                            name="commercial-zone-name"
                            className="input input-bordered w-full max-w-xs border-2 border-gray-400 "
                            defaultValue={commercial?.commercial_zone_name as string}
                        />

                    </div>

                    {/* Zone */}
                    <div className="mt-4">
                        <label
                            htmlFor="commercial-zone"
                            className="block mb-2 text-sm font-medium"
                        >
                            Zone:
                        </label>
                        <Select
                            defaultValue={commercial?.zone as string}
                            name="commercial-zone">
                            <SelectTrigger
                                id="commercial-zone"
                                className="select  w-full max-w-xs border-2 border-gray-400">
                                <SelectValue />
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
                            Type:
                        </label>
                        <Select
                            defaultValue={commercial?.type as string}
                            name="commercial-type">
                            <SelectTrigger
                                id="commercial-type"
                                className="select  w-full max-w-xs border-2 border-gray-400 ">
                                <SelectValue />
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
                            defaultValue={commercial?.location as string}
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
                            defaultValue={commercial?.project_status as string}
                            name="commercial-project-status">
                            <SelectTrigger
                                id="commercial-project-status"
                                className="select  w-full max-w-xs border-2 border-gray-400 ">
                                <SelectValue />
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
                        <Input
                            type="text"
                            id="commercial-launch-year"
                            name="commercial-launch-year"
                            className="input input-bordered w-full max-w-xs border-2 border-gray-400  "
                            defaultValue={commercial?.launch_year as number}
                            placeholder=""
                        />
                    </div>

                    {/*Grade  */}
                    <div className="mt-4">
                        <label
                            htmlFor="commercial-grade"
                            className="block mb-2 text-sm font-medium"
                        >
                            Grade
                        </label>
                        <Select
                            defaultValue={commercial?.grade as string}
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
                                type="number"
                                id="commercial-area"
                                name="commercial-area"
                                className="input input-bordered w-full max-w-xs border-2 border-gray-400  "
                                placeholder=""
                                defaultValue={commercial?.area as number}
                                onChange={(e) => {
                                    setArea(Number(e.target.value))
                                    console.log(e.target.value)
                                }}
                            />

                            <div className="m-4">
                                {Number(area).toLocaleString()}
                            </div>
                        </div>
                    </div>

                    {/* Occupancy Ratio */}
                    <div className="">
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
                                type="number"
                                className="input input-bordered w-full max-w-xs border-2 border-gray-400 "
                                min={0}
                                max={100}
                                placeholder=""
                                defaultValue={commercial?.occupancy as number}
                                onChange={(e) => {
                                    setOccupancy(Number(e.target.value))
                                }}
                            />
                            <div className="m-4">
                                {occupancy === null ? "0%" : occupancy + "%"}
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
                        <Input
                            type="number"
                            id="total-plots"
                            name="total-plots"
                            className="input input-bordered w-full max-w-xs border-2 border-gray-400 "
                            defaultValue={commercial?.total_plots as number}
                            placeholder=""
                        />
                    </div>

                    {/* Total Shop*/}
                    <div className="mt-4">
                        <label
                            htmlFor="total-shops"
                            className="block mb-2 text-sm font-medium"
                        >
                            No of Shops:
                        </label>
                        <Input
                            type="number"
                            id="total-shops"
                            name="total-shops"
                            className="input input-bordered w-full max-w-xs border-2 border-gray-400 "
                            defaultValue={commercial?.total_shops as number}
                            placeholder=""
                        />
                    </div>

                    {/* Total office*/}
                    <div className="mt-4">
                        <label
                            htmlFor="total-offices"
                            className="block mb-2 text-sm font-medium"
                        >
                            No of Offices:
                        </label>
                        <Input
                            type="number"
                            id="total-offices"
                            name="total-offices"
                            className="input input-bordered w-full max-w-xs border-2 border-gray-400 "
                            defaultValue={commercial?.total_offices as number}
                            placeholder=""
                        />
                    </div>

                    {/* Total apartment*/}
                    <div className="mt-4">
                        <label
                            htmlFor="total-apartments"
                            className="block mb-2 text-sm font-medium"
                        >
                            No of Apartments:
                        </label>
                        <Input
                            type="number"
                            id="total-apartments"
                            name="total-apartments"
                            className="input input-bordered w-full max-w-xs border-2 border-gray-400 "
                            defaultValue={commercial?.total_apartments as number}
                            placeholder=""
                        />
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
                        <Select
                            defaultValue={commercial?.property_feature as string}
                            name="property-feature">
                            <SelectTrigger
                                id="property-feature"
                                className="select w-full max-w-xs border-2 border-gray-400  ">
                                <SelectValue />
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
                        <Select
                            defaultValue={commercial?.property_title as string}
                            name="property-title">
                            <SelectTrigger
                                id="property-title"
                                className="select w-full max-w-xs border-2 border-gray-400  ">
                                <SelectValue />
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
                            defaultValue={commercial?.remarks as string}
                            placeholder="Leave a comment..."
                        ></Textarea>
                    </div>
                </div>

                <div className="flex gap-2 justify-center mt-3">
                    <UpdateButton />
                    {/* <Link href="/societies" className="flex justify-center items-center border border-black px-2 py-1 rounded-xl bg-white text-black hover:bg-red-600 hover:text-white capitalize">Cancel</Link> */}

                    <Button asChild className="bg-transparent text-primary hover:bg-primary-foreground">
                        <Link href="/commercial">Cancel</Link>
                    </Button>

                </div>
            </form >
        </>
    )
}
