"use client"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import UpdateFloor from "@/app/buildings/components/UpdateFloor"
import { useState } from "react"
import UpdateFloorButton from "./UpdateFloorButton"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"


import Link from 'next/link'

export default function UpdatePlotForm({ floor }: any) {

    // const [price, setPrice] = useState(plots?.plot_price)
    // const [rent, setRent] = useState(plots?.plot_rent)
    const [avg_sale_price, setAvg_Sale_Price] = useState(floor?.avg_sale_price)
    const [avg_monthly_rent, setAvg_Monthly_Rent] = useState(floor?.avg_monthly_rent)
    const [down_payment_amount, setDown_Payment_Amount] = useState(floor?.down_payment_amount)
    const [instalment_period, setInstalment_Period] = useState(floor?.instalment_period)
    const [instalment_amount, setInstalment_Amount] = useState(floor?.instalment_amount)
    const [possession_amount, setPossession_Amount] = useState(floor?.possession_amount)
    const [size_min, setSize_Min] = useState(floor?.size_min)
    const [size_max, setSize_Max] = useState(floor?.size_max)
    const [occupancy, setOccupancy] = useState(floor?.occupancy);
    // const [current_building, setCurrent_building] = useState(floor?.current_building);
    const [floor_type, setFloor_Type] = useState(floor?.floor_type);

    

    // console.log(current_building)



    return (
        <>

            <div className="container border-2">

                <div className="mx-4">
                    <form action={UpdateFloor}>
                        {/* Floor ID  */}
                        <div className="">
                            <div className="mt-4 ">
                                <label
                                    htmlFor="floor-id"
                                    className="block mb-2 text-sm font-medium "
                                >
                                    Floor ID:
                                </label>
                                <Input
                                    type="text"
                                    id="floor-id"
                                    name="floor-id"
                                    className="input input-bordered  w-full max-w-xs border-2 border-gray-400 cursor-not-allowed disabled:bg-gray-200"
                                    placeholder=""
                                    value={floor?.id}

                                />
                            </div>

                            <div className="mt-4 ">
                                <label
                                    htmlFor="building-id"
                                    className="block mb-2 text-sm font-medium "
                                >
                                    Building ID:
                                </label>
                                <Input
                                    type="text"
                                    id="building-id"
                                    name="building-id"
                                    className="input input-bordered  w-full max-w-xs border-2 border-gray-400 cursor-not-allowed disabled:bg-gray-200"
                                    placeholder=""
                                    value={floor?.building_id}

                                />
                            </div>




                            {/* Floor Number  */}
                            {/* <div className="mt-4">
                                <label
                                    htmlFor="building-floor-no"
                                    className="block mb-2 text-sm font-medium"
                                >
                                    Floor Number
                                </label>
                                <Select
                                    defaultValue={floor?.floor_no as string}
                                    name="building-floor-no"
                                >
                                    <SelectTrigger
                                        id="building-floor-no"
                                        className="select w-full max-w-xs border border-gray-400 "
                                    >
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectLabel></SelectLabel>
                                            <SelectItem value="Lower Ground">Lower Ground</SelectItem>
                                            <SelectItem value="Ground">Ground</SelectItem>
                                            <SelectItem value="1st">1st</SelectItem>
                                            <SelectItem value="2nd">2nd</SelectItem>
                                            <SelectItem value="3rd">3rd</SelectItem>
                                            <SelectItem value="4th">4th</SelectItem>
                                            <SelectItem value="5th">5th</SelectItem>
                                            <SelectItem value="6th">6th</SelectItem>
                                            <SelectItem value="7th">7th</SelectItem>
                                            <SelectItem value="8th">8th</SelectItem>
                                            <SelectItem value="9th">9th</SelectItem>
                                            <SelectItem value="10th">10th</SelectItem>
                                            <SelectItem value="11th">11th</SelectItem>
                                            <SelectItem value="12th">12th</SelectItem>
                                            <SelectItem value="13th">13th</SelectItem>
                                            <SelectItem value="14th">14th</SelectItem>
                                            <SelectItem value="15th">15th</SelectItem>
                                            <SelectItem value="16th">16th</SelectItem>
                                            <SelectItem value="17th">17th</SelectItem>
                                            <SelectItem value="18th">18th</SelectItem>
                                            <SelectItem value="19th">19th</SelectItem>
                                            <SelectItem value="20th">20th</SelectItem>
                                            <SelectItem value="21st">21st</SelectItem>
                                            <SelectItem value="22nd">22nd</SelectItem>
                                            <SelectItem value="23rd">23rd</SelectItem>
                                            <SelectItem value="24th">24th</SelectItem>
                                            <SelectItem value="25th">25th</SelectItem>
                                            <SelectItem value="26th">26th</SelectItem>
                                            <SelectItem value="27th">27th</SelectItem>
                                            <SelectItem value="28th">28th</SelectItem>
                                            <SelectItem value="29th">29th</SelectItem>
                                            <SelectItem value="30th">30th</SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </div> */}

                            {/* Survey Date */}
                            <div className="relative max-w-sm mt-4">
                                <label
                                    htmlFor="floor-date"
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
                                    id="floor-date"
                                    name="floor-date"
                                    defaultValue={floor?.date as string}
                                    className="max-w-xs border-gray-400  border-2 text-sm rounded focus:ring-blue-500  block w-full p-2.5"
                                    placeholder="Survey date"
                                />
                            </div>

                            <div className="mt-4">
                                <label
                                    htmlFor="building-floor-no"
                                    className="block mb-2 text-sm font-medium"
                                >
                                    Floor Number
                                </label>

                                <select
                                    id="building-floor-no"
                                    name="building-floor-no"
                                    defaultValue={floor?.floor_no as string}
                                    className="select  w-full text-sm pl-2 h-10 max-w-xs border-2 rounded border-gray-400 bg-background"
                                >
                                    <option value="">Select</option>
                                    <option value="Basement">Basement</option>
                                    <option value="Lower Ground">Lower Ground</option>
                                    <option value="Ground">Ground</option>
                                    <option value="mezzanine">mezzanine</option>
                                    <option value="1st">1st</option>
                                    <option value="2nd">2nd</option>
                                    <option value="3rd">3rd</option>
                                    <option value="4th">4th</option>
                                    <option value="5th">5th</option>
                                    <option value="6th">6th</option>
                                    <option value="7th">7th</option>
                                    <option value="8th">8th</option>
                                    <option value="9th">9th</option>
                                    <option value="10th">10th</option>
                                    <option value="11th">11th</option>
                                    <option value="12th">12th</option>
                                    <option value="13th">13th</option>
                                    <option value="14th">14th</option>
                                    <option value="15th">15th</option>
                                    <option value="16th">16th</option>
                                    <option value="17th">17th</option>
                                    <option value="18th">18th</option>
                                    <option value="19th">19th</option>
                                    <option value="20th">20th</option>
                                    <option value="21st">21st</option>
                                    <option value="22nd">22nd</option>
                                    <option value="23rd">23rd</option>
                                    <option value="24th">24th</option>
                                    <option value="25th">25th</option>
                                    <option value="26th">26th</option>
                                    <option value="27th">27th</option>
                                    <option value="28th">28th</option>
                                    <option value="29th">29th</option>
                                    <option value="30th">30th</option>
                                    <option value="31st">31st</option>
                                    <option value="32nd">32nd</option>
                                    <option value="33rd">33rd</option>
                                    <option value="34th">34th</option>
                                    <option value="35th">35th</option>
                                    <option value="36th">36th</option>
                                    <option value="37th">37th</option>
                                    <option value="38th">38th</option>
                                    <option value="39th">39th</option>
                                    <option value="40th">40th</option>
                                    <option value="41st">41st</option>
                                    <option value="42nd">42nd</option>
                                    <option value="43rd">43rd</option>
                                    <option value="44th">44th</option>
                                    <option value="45th">45th</option>
                                    <option value="46th">46th</option>
                                    <option value="47th">47th</option>
                                    <option value="48th">48th</option>
                                    <option value="49th">49th</option>
                                    <option value="50th">50th</option>
                                    <option value="51st">51st</option>
                                    <option value="52nd">52nd</option>
                                    <option value="53rd">53rd</option>
                                    <option value="54th">54th</option>
                                    <option value="55th">55th</option>
                                    <option value="56th">56th</option>
                                    <option value="57th">57th</option>
                                    <option value="58th">58th</option>
                                    <option value="59th">59th</option>
                                    <option value="60th">60th</option>
                                </select>

                            </div>

                            {/* Floor Type  */}
                            <div className="mt-4">
                                <label
                                    htmlFor="building-floor-type"
                                    className="block mb-2 text-sm font-medium"
                                >
                                    Floor Type
                                </label>

                                <select
                                    id="building-floor-type"
                                    name="building-floor-type"
                                    className="select  w-full h-10 max-w-xs border-2 rounded border-gray-400 bg-background"
                                    onChange={(e) => setFloor_Type(e.target.value)}
                                    defaultValue={floor?.floor_type as string}
                                >
                                    <option value="Retails">Retails</option>
                                    <option value="Penthouse">Penthouse</option>
                                    <option value="Offices">Offices</option>
                                    <option value="Apartment">Apartment</option>
                                    <option value="Other">Other</option>
                                    {/* <option value="Office">Office</option>
                                    <option value="Files">Files</option> */}
                                </select>



                            </div>



                            {/* Unit Type  */}
                            {/* <div className="mt-4">
                                <label
                                    htmlFor="building-floor-unit-type"
                                    className="block mb-2 text-sm font-medium"
                                >
                                    Unit Type:
                                </label>
                                <Input
                                    type="text"
                                    id="building-floor-unit-type"
                                    name="building-floor-unit-type"
                                    className="input input-bordered  w-full max-w-xs border border-gray-400"
                                    placeholder=""
                                    defaultValue={floor?.unit_type as string}
                                />
                            </div> */}

                            {/* Apartment size  */}
                            {
                                floor_type === "Apartment" &&
                                <>
                                    {/* Unit Type  */}
                                    <div className="mt-4">
                                        <label
                                            // htmlFor="building-floor-unit-type"
                                            className="block mb-2 text-sm font-medium"
                                        >
                                            Unit Type:
                                        </label>


                                        {/* <select
                      id="building-floor-unit-type"
                      name="building-floor-unit-type"
                      className="select  w-full text-sm pl-2 h-10 max-w-xs border-2 rounded border-gray-400 bg-background"
                      value={unit_type}
                      onChange={(e) => setUnit_type(e.target.value)}
                    >
                      <option value="">Select</option>
                      {(current_building.apartments_studio === "yes") && <option value="Studio">Studio</option>}
                      {(current_building.apartments_has_type_1_bed === "yes") && <option value="1 Bed">1 Bed</option>}
                      {(current_building.apartments_has_type_2_bed === "yes") && <option value="2 Bed">2 Bed</option>}
                      {(current_building.apartments_has_type_3_bed === "yes") && <option value="3 Bed">3 Bed</option>}
                      {(current_building.apartments_has_type_4_bed === "yes") && <option value="4 Bed">4 Bed</option>}
                      {(current_building.apartments_has_type_5_bed === "yes") && <option value="5 Bed">5 Bed</option>}
                      {(current_building.apartments_has_type_penthouse === "yes") && <option value="Penthouse">Penthouse</option>}
                      {(current_building.apartments_has_type_duplex === "yes") && <option value="Duplex">Duplex</option>}
                      {(current_building.has_furnished === "yes") && <option value="Furished">Furished</option>}
                      {(current_building.has_semi_furnished === "yes") && <option value="Semi Furnished">Semi Furnished</option>}
                      {(current_building.has_service_apartments === "yes") && <option value="Service Apartments">Service Apartments</option>}
                      {(current_building.has_hotel_suites_apartments === "yes") && <option value="Hotel Suites Apartments">Hotel Suites Apartments</option>}
                    </select> */}

                                        <div className="grid grid-cols-6 gap-4 mt-4">


                                            {
                                                floor_type === "Apartment" &&
                                                <>

                                                    <div className="flex items-center mb-4 ml-2">
                                                        <input
                                                            id="floor-apartments-studio"
                                                            name="floor-apartments-studio"
                                                            type="checkbox"
                                                            value="yes"
                                                            defaultChecked={floor?.floor_apartments_studio ? true : false}
                                                            className="checkbox checkbox-primary"
                                                        />
                                                        <label
                                                            htmlFor="floor-apartments-studio"
                                                            className="ml-2 text-sm font-medium  "
                                                        >
                                                            Studio
                                                        </label>
                                                    </div>
                                                    <div className="flex items-center mb-4 ml-2">
                                                        <input
                                                            id="floor-apartments-1-bed"
                                                            name="floor-apartments-1-bed"
                                                            type="checkbox"
                                                            value="yes"
                                                            defaultChecked={floor?.floor_apartments_1_bed ? true : false}
                                                            className="checkbox checkbox-primary"
                                                        />
                                                        <label
                                                            htmlFor="floor-apartments-1-bed"
                                                            className="ml-2 text-sm font-medium  "
                                                        >
                                                            1 Bed
                                                        </label>
                                                    </div>
                                                    <div className="flex items-center mb-4 ml-2">
                                                        <input
                                                            id="floor-apartments-2-bed"
                                                            name="floor-apartments-2-bed"
                                                            type="checkbox"
                                                            defaultChecked={floor?.floor_apartments_2_bed ? true : false}
                                                            value="yes"
                                                            className="checkbox checkbox-primary"
                                                        />
                                                        <label
                                                            htmlFor="floor-apartments-2-bed"
                                                            className="ml-2 text-sm font-medium  "
                                                        >
                                                            2 Bed
                                                        </label>
                                                    </div>
                                                    <div className="flex items-center mb-4 ml-2">
                                                        <input
                                                            id="floor-apartments-3-bed"
                                                            name="floor-apartments-3-bed"
                                                            type="checkbox"
                                                            defaultChecked={floor?.floor_apartments_3_bed ? true : false}
                                                            value="yes"
                                                            className="checkbox checkbox-primary"
                                                        />
                                                        <label
                                                            htmlFor="floor-apartments-3-bed"
                                                            className="ml-2 text-sm font-medium  "
                                                        >
                                                            3 Bed
                                                        </label>
                                                    </div>
                                                    <div className="flex items-center mb-4 ml-2">
                                                        <input
                                                            id="floor-apartments-4-bed"
                                                            name="floor-apartments-4-bed"
                                                            type="checkbox"
                                                            defaultChecked={floor?.floor_apartments_4_bed ? true : false}
                                                            value="yes"
                                                            className="checkbox checkbox-primary"
                                                        />
                                                        <label
                                                            htmlFor="floor-apartments-4-bed"
                                                            className="ml-2 text-sm font-medium  "
                                                        >
                                                            4 Bed
                                                        </label>
                                                    </div>
                                                    <div className="flex items-center mb-4 ml-2">
                                                        <input
                                                            id="floor-apartments-5-bed"
                                                            name="floor-apartments-5-bed"
                                                            type="checkbox"
                                                            defaultChecked={floor?.floor_apartments_5_bed ? true : false}
                                                            value="yes"
                                                            className="checkbox checkbox-primary"
                                                        />
                                                        <label
                                                            htmlFor="floor-apartments-5-bed"
                                                            className="ml-2 text-sm font-medium  "
                                                        >
                                                            5 Bed
                                                        </label>
                                                    </div>
                                                    <div className="flex items-center mb-4 ml-2">
                                                        <input
                                                            id="floor-apartments-duplex"
                                                            name="floor-apartments-duplex"
                                                            type="checkbox"
                                                            defaultChecked={floor?.floor_apartments_duplex ? true : false}
                                                            value="yes"
                                                            className="checkbox checkbox-primary"
                                                        />
                                                        <label
                                                            htmlFor="floor-apartments-duplex"
                                                            className="ml-2 text-sm font-medium  "
                                                        >
                                                            Duplex
                                                        </label>
                                                    </div>
                                                    <div className="flex items-center mb-4 ml-2">
                                                        <input
                                                            id="floor-apartments-penthouse"
                                                            name="floor-apartments-penthouse"
                                                            type="checkbox"
                                                            defaultChecked={floor?.floor_apartments_penthouse ? true : false}
                                                            value="yes"
                                                            className="checkbox checkbox-primary"
                                                        />
                                                        <label
                                                            htmlFor="floor-apartments-penthouse"
                                                            className="ml-2 text-sm font-medium  "
                                                        >
                                                            Penthhouse
                                                        </label>
                                                    </div>
                                                    <div className="flex items-center mb-4 ml-2">
                                                        <input
                                                            id="floor-has-furnished"
                                                            name="floor-has-furnished"
                                                            type="checkbox"
                                                            value="yes"
                                                            defaultChecked={floor?.floor_has_furnished ? true : false}
                                                            className="checkbox checkbox-primary"
                                                        />
                                                        <label
                                                            htmlFor="floor-has-furnished"
                                                            className="ml-2 text-sm font-medium  "
                                                        >
                                                            Furnished
                                                        </label>
                                                    </div>
                                                    <div className="flex items-center mb-4 ml-2">
                                                        <input
                                                            id="floor-has-semi-furnished"
                                                            name="floor-has-semi-furnished"
                                                            type="checkbox"
                                                            value="yes"
                                                            defaultChecked={floor?.floor_has_semi_furnished ? true : false}
                                                            className="checkbox checkbox-primary"
                                                        />
                                                        <label
                                                            htmlFor="floor-has-semi-furnished"
                                                            className="ml-2 text-sm font-medium"
                                                        >
                                                            Semi Furnished
                                                        </label>
                                                    </div>
                                                    <div className="flex items-center mb-4 ml-2">
                                                        <input
                                                            id="floor-has-service-apartments"
                                                            name="floor-has-service-apartments"
                                                            type="checkbox"
                                                            value="yes"
                                                            defaultChecked={floor?.floor_has_service_apartments ? true : false}
                                                            className="checkbox checkbox-primary"
                                                        />
                                                        <label
                                                            htmlFor="floor-has-service-apartments"
                                                            className="ml-2 text-sm font-medium"
                                                        >
                                                            Service Apartments
                                                        </label>
                                                    </div>
                                                    <div className="flex items-center mb-4 ml-2">
                                                        <input
                                                            id="floor-has-hotel-suites-apartments"
                                                            name="floor-has-hotel-suites-apartments"
                                                            type="checkbox"
                                                            value="yes"
                                                            defaultChecked={floor?.floor_has_hotel_suites_apartments ? true : false}
                                                            className="checkbox checkbox-primary"
                                                        />
                                                        <label
                                                            htmlFor="floor-has-hotel-suites-apartments"
                                                            className="ml-2 text-sm font-medium"
                                                        >
                                                            Hotel Suites Apartments
                                                        </label>
                                                    </div>
                                                </>

                                            }
                                        </div>

                                    </div>
                                </>

                            }



                            {/* Building Floor Occupancy  */}
                            <div className="mt-4">
                                <label
                                    htmlFor="building-floor-occupancy"
                                    className="block mb-2 text-sm font-medium"
                                >
                                    Occupancy Ratio
                                </label>
                                <div className="flex">
                                    <Input
                                        type="text"
                                        id="building-floor-occupancy"
                                        name="building-floor-occupancy"
                                        className="input input-bordered  w-full max-w-xs border border-gray-400 "
                                        placeholder=""
                                        defaultValue={floor?.occupancy as number}
                                        min={0}
                                        max={100}
                                        onChange={(e) => {
                                            setOccupancy(Number(e.target.value))
                                        }}
                                    />
                                    <div className="m-4">
                                        {(occupancy + "%") === null ? 0 : (occupancy + "%")}
                                    </div>
                                </div>
                            </div>

                            {/* Size Minimum (Sq. Ft.)  */}
                            <div className="">
                                <label
                                    htmlFor="building-floor-size-min"
                                    className="block mb-2 text-sm font-medium"
                                >
                                    Size Minimum (Sq. Ft.)
                                </label>
                                <div className="flex">
                                    <Input
                                        type="number"
                                        id="building-floor-size-min"
                                        name="building-floor-size-min"
                                        className="input input-bordered  w-full max-w-xs border border-gray-400 "
                                        defaultValue={floor?.size_min as number}
                                        placeholder=""
                                        min="0"
                                        onChange={(e) => {
                                            setSize_Min(Number(e.target.value))
                                            // console.log(e.target.value)
                                        }}
                                    />

                                    <div className="m-4">
                                        {Number(size_min).toLocaleString()}
                                    </div>
                                </div>
                            </div>

                            {/* Size Maximum (Sq. Ft.)  */}
                            <div className="">
                                <label
                                    htmlFor="building-floor-size-max"
                                    className="block mb-2 text-sm font-medium"
                                >
                                    Size Maximum (Sq. Ft.)
                                </label>
                                <div className="flex">
                                    <Input
                                        type="number"
                                        id="building-floor-size-max"
                                        name="building-floor-size-max"
                                        className="input input-bordered  w-full max-w-xs border border-gray-400 "
                                        defaultValue={floor?.size_max as number}
                                        placeholder=""
                                        min="0"
                                        onChange={(e) => {
                                            setSize_Max(Number(e.target.value))
                                            // console.log(e.target.value)
                                        }}
                                    />
                                    <div className="m-4">
                                        {Number(size_max).toLocaleString()}
                                    </div>
                                </div>
                            </div>

                            {/* Avg. Sale Price */}
                            <div className="">
                                <label
                                    htmlFor="building-floor-avg-sale-price"
                                    className="block mb-2 text-sm font-medium"
                                >
                                    Average Sale Price (Per Sq. Ft.)
                                </label>
                                <div className="flex">
                                    <Input
                                        type="number"
                                        id="building-floor-avg-sale-price"
                                        name="building-floor-avg-sale-price"
                                        className="input input-bordered  w-full max-w-xs border border-gray-400 "
                                        defaultValue={floor?.avg_sale_price as number}
                                        placeholder=""
                                        min="0"
                                        onChange={(e) => {
                                            setAvg_Sale_Price(Number(e.target.value))
                                            // console.log(e.target.value)
                                        }}
                                    />
                                    <div className="m-4">
                                        {Number(avg_sale_price).toLocaleString()}
                                    </div>
                                </div>
                            </div>

                            {/* Avg. Monthly Rent */}
                            <div className="">
                                <label
                                    htmlFor="building-floor-avg-monthly-rent"
                                    className="block mb-2 text-sm font-medium"
                                >
                                    Average Monthly Rent (Sq. Ft.)
                                </label>
                                <div className="flex">
                                    <Input
                                        type="number"
                                        id="building-floor-avg-monthly-rent"
                                        name="building-floor-avg-monthly-rent"
                                        className="input input-bordered  w-full max-w-xs border border-gray-400 "
                                        defaultValue={floor?.avg_monthly_rent as number}
                                        placeholder=""
                                        min="0"
                                        onChange={(e) => {
                                            setAvg_Monthly_Rent(Number(e.target.value))
                                            // console.log(e.target.value)
                                        }}
                                    />
                                    <div className="m-4">
                                        {Number(avg_monthly_rent).toLocaleString()}
                                    </div>

                                </div>


                                {/* <div className="mt-4">
                                    <label
                                        htmlFor="building-instalment-plan"
                                        className="block mb-2 text-sm font-medium"
                                    >
                                        Installment Plan
                                    </label>

                                    <Select
                                        defaultValue={floor?.instalment_plan as string}
                                        name="building-instalment-plan">
                                        <SelectTrigger
                                            id="building-instalment-plan"
                                            className="select  w-full max-w-xs border-2 border-gray-400 ">
                                            <SelectValue placeholder="Select Type" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectLabel></SelectLabel>
                                                <SelectItem value="Yes">Yes</SelectItem>
                                                <SelectItem value="No">No</SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>


                                </div> */}

                                {/* Installment Plan  */}

                                <div className="">
                                    <label
                                        htmlFor="building-instalment-plan"
                                        className="block mb-2 text-sm font-medium"
                                    >
                                        Installment Plan
                                    </label>

                                    <select
                                        id="building-instalment-plan"
                                        name="building-instalment-plan"
                                        className="select  w-full text-sm pl-2 h-10 max-w-xs border-2 rounded border-gray-400 bg-background"
                                        defaultValue={floor?.instalment_plan as string}
                                    >
                                        <option value="">Select</option>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>

                                </div>
                                {/* Installment Period (Years) */}
                                <div className="mt-4">
                                    <label
                                        htmlFor="building-floor-instalment-period"
                                        className="block mb-2 text-sm font-medium"
                                    >
                                        Installment Period (Month)
                                    </label>
                                    <div className="flex">
                                        <Input
                                            type="number"
                                            id="building-floor-instalment-period"
                                            name="building-floor-instalment-period"
                                            className="input input-bordered  w-full max-w-xs border border-gray-400 "
                                            defaultValue={floor?.instalment_period as number}
                                            placeholder=""
                                            min="0"
                                            onChange={(e) => {
                                                setInstalment_Period(Number(e.target.value))
                                                // console.log(e.target.value)
                                            }}
                                        />
                                        <div className="m-4">
                                            {Number(instalment_period).toLocaleString()}
                                        </div>
                                    </div>
                                </div>





                                {/* Down Payment */}
                                <div className="">
                                    <label
                                        htmlFor="building-floor-down-payment-amount"
                                        className="block mb-2 text-sm font-medium"
                                    >
                                        Down Payment
                                    </label>
                                    <div className="flex">
                                        <Input
                                            type="number"
                                            id="building-floor-down-payment-amount"
                                            name="building-floor-down-payment-amount"
                                            className="input input-bordered w-full max-w-xs border border-gray-400 "
                                            defaultValue={floor?.down_payment_amount as number}
                                            placeholder=""
                                            min="0"
                                            onChange={(e) => {
                                                setDown_Payment_Amount(Number(e.target.value))
                                                // console.log(e.target.value)
                                            }}
                                        />
                                        <div className="m-4">
                                            {Number(down_payment_amount).toLocaleString()}
                                        </div>
                                    </div>
                                </div>

                                {/* Instalment Amount */}
                                <div className="">
                                    <label
                                        htmlFor="building-floor-instalment-amount"
                                        className="block mb-2 text-sm font-medium"
                                    >
                                        Total Sale Price
                                    </label>
                                    <div className="flex">
                                        <Input
                                            type="number"
                                            id="building-floor-instalment-amount"
                                            name="building-floor-instalment-amount"
                                            className="input input-bordered w-full max-w-xs border border-gray-400 "
                                            defaultValue={floor?.instalment_amount as number}
                                            placeholder=""
                                            min="0"
                                            onChange={(e) => {
                                                setInstalment_Amount(Number(e.target.value))
                                                // console.log(e.target.value)
                                            }}
                                        />
                                        <div className="m-4">
                                            {Number(instalment_amount).toLocaleString()}
                                        </div>
                                    </div>
                                </div>

                                {/* Possession Amount */}
                                <div className="">
                                    <label
                                        htmlFor="building-floor-possession-amount"
                                        className="block mb-2 text-sm font-medium"
                                    >
                                        Possession Amount
                                    </label>
                                    <div className="flex">
                                        <Input
                                            type="number"
                                            id="building-floor-possession-amount"
                                            name="building-floor-possession-amount"
                                            className="input input-bordered border w-full max-w-xs border-gray-400 "
                                            defaultValue={floor?.possession_amount as number}
                                            placeholder=""
                                            min="0"
                                            onChange={(e) => {
                                                setPossession_Amount(Number(e.target.value))
                                                // console.log(e.target.value)
                                            }}
                                        />
                                        <div className="m-4">
                                            {Number(possession_amount).toLocaleString()}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Floor Remarks  */}
                            <div className="mb-3">
                                <label htmlFor="message" className="block mb-2 text-sm font-medium">
                                    Your Remarks
                                </label>
                                <Textarea
                                    id="building-floor-remarks"
                                    name="building-floor-remarks"
                                    className="textarea border  w-full border-gray-400 "
                                    defaultValue={floor?.remarks as string}
                                    placeholder="Leave a comment..."
                                ></Textarea>
                            </div>

                            {/* Submit button */}
                            {/* update button */}
                            <div className="flex gap-6 justify-center mt-3">
                                <UpdateFloorButton />
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

                        </div>

                    </form>

                </div>

            </div>


        </>
    )
}

