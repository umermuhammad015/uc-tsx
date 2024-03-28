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

export default function UpdatePlotForm({ building }:any) {

    const [apartments_maintenance_fee, setApartments_Maintenance_Fee] = useState(building?.apartments_maintenance_fee)
    const [retail_floors_maintenance_fee, setRetail_Floors_Maintenance_Fee] = useState(building?.retail_floors_maintenance_fee)
    const [office_maintenance_fee, setOffice_Maintenance_Fee] = useState(building?.office_maintenance_fee)


    return (
        <>
            <div>{building?.name}</div>

            <form action={UpdateBuilding}>
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
                    <div className="relative max-w-sm">
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

                    <div className="mt-4">
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
                        <label htmlFor="area" className="block mb-2 text-sm font-medium ">
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
                        <div className="flex">
                            <Input

                                type="number"
                                id="apartments-maintenance-fee"
                                name="apartments-maintenance-fee"
                                min="0"
                                className="input input-bordered  w-full max-w-xs border-2 border-gray-400  "
                                defaultValue={building?.apartments_maintenance_fee as number}
                                placeholder="Rs."
                                onChange={(e) => {
                                    setApartments_Maintenance_Fee(e.target.value)
                                    console.log(e.target.value)
                                }}
                            />
                            <div className="m-4">
                                {Number(apartments_maintenance_fee).toLocaleString()}
                            </div>
                        </div>
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
                        <div className="flex">
                            <Input

                                type="number"
                                id="retail-floors-maintenance-fee"
                                name="retail-floors-maintenance-fee"
                                min="0"
                                className="input input-bordered  w-full max-w-xs border-2 border-gray-400 "
                                defaultValue={building?.retail_floors_maintenance_fee as number}
                                placeholder="Rs."
                                onChange={(e) => {
                                    setRetail_Floors_Maintenance_Fee(e.target.value)
                                    console.log(e.target.value)
                                }}
                            />
                            <div className="m-4">
                                {Number(retail_floors_maintenance_fee).toLocaleString()}
                            </div>
                        </div>
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
                        <div className="flex">
                            <Input

                                type="number"
                                id="office-maintenance-fee"
                                name="office-maintenance-fee"
                                min="0"
                                className="input input-bordered  w-full max-w-xs border-2 border-gray-400  "
                                defaultValue={building?.office_maintenance_fee as number}
                                placeholder="Rs."
                                onChange={(e) => {
                                    setOffice_Maintenance_Fee((e.target.value))
                                    console.log(e.target.value)
                                }}
                            />
                            <div className="m-4">
                                {Number(office_maintenance_fee).toLocaleString()}
                            </div>
                        </div>
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
