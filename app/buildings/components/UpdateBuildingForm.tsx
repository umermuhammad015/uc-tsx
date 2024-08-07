"use client"

import Link from "next/link";
import prisma from "../../db";
import { redirect } from "next/navigation"
import UpdateButton from "../components/UpdateButton";
import UpdateBuilding from "./UpdateBuilding"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export default function UpdatePlotForm({ building }: any) {

    const [apartments_maintenance_fee, setApartments_Maintenance_Fee] = useState(building?.apartments_maintenance_fee)
    const [retail_floors_maintenance_fee, setRetail_Floors_Maintenance_Fee] = useState(building?.retail_floors_maintenance_fee)
    const [office_maintenance_fee, setOffice_Maintenance_Fee] = useState(building?.office_maintenance_fee)
    const [plot_size, setPlot_Size] = useState(building?.plot_size)
    const [construction_area, setConstruction_Area] = useState(building?.construction_area)
    const [launch_year, setLaunch_year] = useState(building?.construction_area)


    return (
        <>
            <div>{building?.name}</div>

            <form action={UpdateBuilding}>
                <div className="p-5 border-2 border-b-0 border-gray-200 dark:border-gray-700">
                    {/* Building Id  */}
                    <div className="relative max-w-sm ">
                        <label
                            htmlFor="building-id"
                            className="block mb-2 text-sm font-medium"
                        >
                            Building ID

                        </label>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-20 pointer-events-none">
                        </div>
                        <Input
                            type="text"
                            id="building-id"
                            name="building-id"
                            // defaultValue={societies?.survey_date as unknown as string}
                            value={building?.id as string}
                            className="max-w-xs border-gray-400 border-2 text-sm rounded focus:ring-blue-500  block w-full p-2.5"
                            placeholder="ID"
                        />
                    </div>

                    {/* Survey Date */}
                    <div className="relative max-w-sm mt-4">
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
                            defaultValue={building?.survey_date as string}
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
                            City:
                        </label>
                        <Select
                            defaultValue={building?.city}
                            name="building-city">
                            <SelectTrigger
                                id="building-city"
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
                        </Select>
                    </div>

                    {/* Zone 
                    <div className="mt-4">
                        <label htmlFor="zone" className="block mb-2 text-sm font-medium">
                            Zone:
                        </label>
                        <Input
                            type="text"
                            name="zone"
                            id="zone"
                            placeholder="Type here"
                            defaultValue={building?.zone as string}
                            className="input input-bordered  w-full max-w-xs border-2 border-gray-400 "
                        />
                    </div> */}

                    {/* Zone/ Region  */}
                    <div className="mt-4">
                        <label
                            htmlFor="zone"
                            className="block mb-2 text-sm font-medium"
                        >
                            Zone/ Region:
                        </label>
                        <Select
                            defaultValue={building?.zone as string}
                            name="zone">
                            <SelectTrigger
                                id="zone"
                                className="select  w-full max-w-xs border-2 border-gray-400">
                                <SelectValue placeholder="" />
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
                            Area/Society:
                        </label>
                        <Input
                            type="text"
                            id="area"
                            name="area"
                            className="input input-bordered w-full max-w-xs border-2 border-gray-400 "
                            defaultValue={building?.area as string}
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
                                Building name:
                            </label>
                            <Input
                                type="text"
                                id="building-name"
                                name="building-name"
                                required
                                className="input input-bordered w-full max-w-xs border-2 border-gray-400 "
                                defaultValue={building?.name}
                            // placeholder="Building Name"
                            />
                        </div>
                    </div>



                    {/* Location/Address  */}
                    <div className="mt-4">
                        <label htmlFor="address" className="block mb-2 text-sm font-medium">
                            Location/Address:
                        </label>
                        <Input
                            type="text"
                            id="address"
                            name="address"
                            className="input input-bordered w-full max-w-xs border-2 border-gray-400"
                            defaultValue={building?.address as string}
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
                                        defaultChecked={building?.type_retail ? true : false}
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
                                        defaultChecked={building?.type_offices ? true : false}
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
                                        defaultChecked={building?.type_apartments ? true : false}
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
                        <Select
                            defaultValue={building?.status as string}
                            name="building-status">
                            <SelectTrigger
                                id="building-status"
                                className="select w-full max-w-xs border-2 border-gray-400 ">
                                <SelectValue placeholder="Select Status" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel></SelectLabel>
                                    <SelectItem value="Pre-Launch">Pre-Launch</SelectItem>
                                    <SelectItem value="Under Construction">Under Construction</SelectItem>
                                    <SelectItem value="Constructed">Constructed</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
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

                                type="number"
                                id="plot-size"
                                name="plot-size"
                                className="input input-bordered w-full max-w-xs border-2 border-gray-400 "
                                placeholder="(Sq. Yards)"
                                defaultValue={building?.plot_size as number}
                                onChange={(e) => {
                                    setPlot_Size(Number(e.target.value))
                                    console.log(e.target.value)
                                }}
                            />
                            <div className="m-4">
                                {Number(plot_size).toLocaleString()}
                            </div>
                        </div>
                    </div>

                    {/* Total Covered Area of Building (Sq. Yards)  */}
                    <div className="mt-4">
                        <label
                            htmlFor="construction-area"
                            className="block mb-2 text-sm font-medium"
                        >
                            Total Covered Area of Building (Sq Ft):
                        </label>
                        <div className="flex">
                            <Input
                                type="number"
                                id="construction-area"
                                name="construction-area"
                                defaultValue={building?.construction_area as number}
                                className="input input-bordered w-full max-w-xs border-2 border-gray-400  "
                                placeholder="(Sq. Yards)"
                                onChange={(e) => {
                                    setConstruction_Area(Number(e.target.value))
                                    console.log(e.target.value)
                                }}
                            />
                            <div className="m-4">
                                {Number(construction_area).toLocaleString()}
                            </div>
                        </div>
                    </div>

                    {/* Builder Name  */}
                    <div className="mt-4">
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
                            defaultValue={building?.builder_name as string}
                            placeholder=""
                        />
                    </div>

                    {/* Launch_year */}
                    <div className="mt-4">
                        <label
                            htmlFor="launch-year"
                            className="block mb-2 text-sm font-medium"
                        >
                            Launch Year:
                        </label>
                        <div className="flex">
                            <Input
                                type="number"
                                id="launch-year"
                                name="launch-year"
                                className="input input-bordered w-full max-w-xs border-2 border-gray-400"
                                defaultValue={building?.launch_year as number}
                                onChange={(e) => {
                                    setLaunch_year(Number(e.target.value))
                                    console.log(e.target.value)
                                }}
                            />
                            <div className="m-4">
                                {Number(launch_year).toLocaleString()}
                            </div>
                        </div>
                    </div>

                    {/* Construction Year  */}
                    <div className="mt-4">
                        <label
                            htmlFor="construction-year"
                            className="block mb-2 text-sm font-medium"
                        >
                            Construction Year:
                        </label>
                        <Input
                            type="number"
                            id="construction-year"
                            name="construction-year"
                            min="1900"
                            defaultValue={building?.construction_year as number}
                            className="input input-bordered input-primary w-full max-w-xs border-2 border-gray-400 "
                            placeholder=""
                        />
                    </div>

                    {/* Building Rank  */}
                    <div className="mt-4">
                        <label
                            htmlFor="building-rank"
                            className="block mb-2 text-sm font-medium"
                        >
                            Building Rank:
                        </label>
                        <Select
                            defaultValue={building?.building_rank as string}
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
                        <Input
                            type="number"
                            id="total-floors"
                            name="total-floors"
                            className="input input-bordered w-full max-w-xs border-2 border-gray-400  "
                            defaultValue={building?.total_floors as number}
                            placeholder=""
                        />
                    </div>

                    {/* Parking Floors  */}
                    <div className="mt-4">
                        <label
                            htmlFor="parking-floors"
                            className="block mb-2 text-sm font-medium"
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

                    {/* Facilities */}
                    <div className="mt-4">
                        <fieldset>
                            <legend className="block mb-2 text-sm font-medium">
                                Building Facilities:
                            </legend>
                            <div className="flex gap-8">
                                <div className="flex items-center ml-2">
                                    <input
                                        id="building-facility-centrally-air-conditioned"
                                        name="building-facility-centrally-air-conditioned"
                                        type="checkbox"
                                        value="yes"
                                        defaultChecked={building?.is_centrally_air_conditioned ? true : false}
                                        className="checkbox checkbox-primary"
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
                                        value="yes"
                                        defaultChecked={building?.has_security ? true : false}
                                        className="checkbox checkbox-primary"
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
                                        defaultChecked={building?.has_escalators ? true : false}
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
                                        defaultChecked={building?.is_centrally_air_conditioned ? true : false}
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
                                        defaultChecked={building?.has_entertainment_area ? true : false}
                                        className="checkbox checkbox-primary"
                                    />
                                    <label
                                        htmlFor="building-facility-entertainment-area"
                                        className="ml-2 text-sm font-medium  "
                                    >
                                        Entertainment Areas
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
                        <Input
                            type="number"
                            id="retail-floors-count"
                            name="retail-floors-count"
                            min="0"
                            defaultValue={building?.retail_floors_count as number}
                            className="input input-bordered  w-full max-w-xs border-2 border-gray-400  "
                            placeholder=""
                        />
                    </div>

                    {/* No. of Shops  */}
                    <div className="mt-4">
                        <label
                            htmlFor="retail-floors-shops-count"
                            className="block mb-2 text-sm font-medium"
                        >
                            No. of Shops:
                        </label>
                        <Input
                            type="number"
                            id="retail-floors-shops-count"
                            name="retail-floors-shops-count"
                            min="0"
                            className="input input-bordered  w-full max-w-xs border-2 border-gray-400 "
                            defaultValue={building?.retail_floors_shops_count as number}
                            placeholder=""
                        />
                    </div>


                    {/* Brands/Type of Products & Services: */}
                    <div className="mt-4">
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
                            defaultValue={building?.retail_floors_brands as string}
                        />
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
                        <Input
                            type="number"
                            id="apartment-floors-count"
                            name="apartment-floors-count"
                            className="input input-bordered input-primary w-full max-w-xs border-2 border-gray-400  "
                            defaultValue={building?.apartment_floors as number}
                            placeholder=""
                        />
                    </div>

                    {/* No. of Apartments  */}
                    <div className="mt-4">
                        <label
                            htmlFor="apartments-count"
                            className="block mb-2 text-sm font-medium"
                        >
                            No. of Apartment:
                        </label>
                        <Input
                            type="number"
                            id="apartments-count"
                            name="apartments-count"
                            min="0"
                            className="input input-bordered w-full max-w-xs border-2 border-gray-400 "
                            defaultValue={building?.apartments_count as number}
                            placeholder=""
                        />
                    </div>

                    {/* Apartments Type  */}
                    <div className="mt-4">
                        <fieldset>
                            <legend className="block mb-2 text-sm font-medium">
                                Apartments Type
                            </legend>

                            <div className="flex gap-10">
                                <div className="flex items-center mb-4 ml-2">
                                    <input
                                        id="apartment-studio"
                                        name="apartment-studio"
                                        type="checkbox"
                                        value="yes"
                                        defaultChecked={building?.apartments_studio ? true : false}
                                        className="checkbox checkbox-primary"
                                    />
                                    <label
                                        htmlFor="apartment-studio"
                                        className="ml-2 text-sm font-medium  "
                                    >
                                        Studio
                                    </label>
                                </div>

                                <div className="flex items-center mb-4 ml-2">
                                    <input
                                        id="apartment-has-type-1-bed"
                                        name="apartment-has-type-1-bed"
                                        type="checkbox"
                                        value="yes"
                                        defaultChecked={building?.apartments_has_type_1_bed ? true : false}
                                        className="checkbox checkbox-primary"
                                    />
                                    <label
                                        htmlFor="apartment-has-type-1-bed"
                                        className="ml-2 text-sm font-medium  "
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
                                        defaultChecked={building?.apartments_has_type_2_bed ? true : false}
                                        className="checkbox checkbox-primary"
                                    />
                                    <label
                                        htmlFor="apartment-has-type-2-bed"
                                        className="ml-2 text-sm font-medium  "
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
                                        defaultChecked={building?.apartments_has_type_3_bed ? true : false}
                                        className="checkbox checkbox-primary"
                                    />
                                    <label
                                        htmlFor="apartment-has-type-3-bed"
                                        className="ml-2 text-sm font-medium  "
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
                                        defaultChecked={building?.apartments_has_type_4_bed ? true : false}
                                        className="checkbox checkbox-primary"
                                    />
                                    <label
                                        htmlFor="apartment-has-type-4-bed"
                                        className="ml-2 text-sm font-medium  "
                                    >
                                        4-Bed
                                    </label>
                                </div>
                                <div className="flex items-center mb-4 ml-2">
                                    <input
                                        id="apartment-has-type-5-bed"
                                        name="apartment-has-type-5-bed"
                                        type="checkbox"
                                        value="yes"
                                        defaultChecked={building?.apartments_has_type_5_bed ? true : false}
                                        className="checkbox checkbox-primary"
                                    />
                                    <label
                                        htmlFor="apartment-has-type-5-bed"
                                        className="ml-2 text-sm font-medium  "
                                    >
                                        5-Bed
                                    </label>
                                </div>

                                <div className="flex items-center mb-4 ml-2">
                                    <input
                                        id="apartment-has-type-duplex"
                                        name="apartment-has-type-duplex"
                                        type="checkbox"
                                        value="yes"
                                        defaultChecked={building?.apartments_has_type_duplex ? true : false}
                                        className="checkbox checkbox-primary"
                                    />
                                    <label
                                        htmlFor="apartment-has-type-duplex"
                                        className="ml-2 text-sm font-medium  "
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
                                        defaultChecked={building?.apartments_has_type_penthouse ? true : false}
                                        className="checkbox checkbox-primary"
                                    />
                                    <label
                                        htmlFor="apartment-has-type-penthouse"
                                        className="ml-2 text-sm font-medium  "
                                    >
                                        Penthouse
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
                            Servant Quarter
                        </label>
                        <Select
                            defaultValue={building?.apartments_has_servant_quarter as string}
                            name="apartment-has-servant-quarter">
                            <SelectTrigger
                                id="apartment-has-servant-quarter"
                                className="select w-full max-w-xs border-2 mb-2 border-gray-400">
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

                    {/* Maintenance fee of apartment  */}
                    {/* <div className="mt-4">
  <label
    htmlFor="apartments-maintenance-fee"
    className="block mb-2 text-sm font-medium"
  >
    Maintenance Fee (Per Sq. Ft.):
  </label>
  <div className="flex">
    <Input
      onChange={(e) => {
        setApartments_Maintenance_Fee(Number(e.target.value))
        console.log(e.target.value)
      }}
      type="number"
      id="apartments-maintenance-fee"
      name="apartments-maintenance-fee"
      min="0"
      className="input input-bordered  w-full max-w-xs border-2 border-gray-400  "
      placeholder="Rs."
    />
    <div className="m-4">
      {Number(apartments_maintenance_fee).toLocaleString()}
    </div>
  </div>
</div> */}
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
                        <Input
                            type="number"
                            id="office-floors-count"
                            name="office-floors-count"
                            min="0"
                            defaultValue={building?.office_floors_count as number}
                            className="input input-bordered  w-full max-w-xs border-2 border-gray-400  "
                            placeholder=""
                        />
                    </div>

                    {/* No. of Offices */}
                    <div className="mt-4">
                        <label
                            htmlFor="offices-count"
                            className="block mb-2 text-sm font-medium"
                        >
                            No. of Offices:
                        </label>
                        <Input
                            type="number"
                            id="offices-count"
                            name="offices-count"
                            min="0"
                            defaultValue={building?.office_count as number}
                            className="input input-bordered w-full max-w-xs border-2 mb-2 border-gray-400  "
                            placeholder=""
                        />
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
                            defaultValue={building?.surveyor_name as string}
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
