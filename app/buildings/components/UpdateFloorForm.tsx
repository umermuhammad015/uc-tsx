"use client"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import UpdateFloor from "./UpdateFloor"
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
                            <div className="mt-4">
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
                            </div>

                            {/* Floor Type  */}
                            <div className="mt-4">
                                <label
                                    htmlFor="building-floor-type"
                                    className="block mb-2 text-sm font-medium"
                                >
                                    Floor Type
                                </label>

                                <Select
                                    defaultValue={floor?.floor_type as string}
                                    name="building-floor-type">
                                    <SelectTrigger
                                        id="building-floor-type"
                                        className="select w-full max-w-xs border-2 border-gray-400">
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectLabel></SelectLabel>
                                            <SelectItem value="Retails">Retails</SelectItem>
                                            <SelectItem value="Penthouse">Penthouse</SelectItem>
                                            <SelectItem value="Offices">Offices</SelectItem>
                                            <SelectItem value="Apartment">Apartment</SelectItem>
                                            <SelectItem value="Other">Other</SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </div>

                            {/* Unit Type  */}
                            <div className="mt-4">
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
                            </div>



                            {/* Building Floor Occupancy  */}
                            <div className="mt-4">
                                <label
                                    htmlFor="building-floor-occupancy"
                                    className="block mb-2 text-sm font-medium"
                                >
                                    Occupancy Ratio
                                </label>
                                <Input
                                    type="number"
                                    id="building-floor-occupancy"
                                    name="building-floor-occupancy"
                                    className="input input-bordered  w-full max-w-xs border border-gray-400 "
                                    placeholder=""
                                    defaultValue={floor?.occupancy as string}
                                    min="0"
                                    max="100"
                                />
                            </div>

                            {/* Size Minimum (Sq. Ft.)  */}
                            <div className="mt-4">
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
                                        defaultValue={floor?.size_min as string}
                                        placeholder=""
                                        min="0"
                                        onChange={(e) => {
                                            setSize_Min(Number(e.target.value))
                                            console.log(e.target.value)
                                        }}
                                    />

                                    <div className="m-4">
                                        {Number(size_min).toLocaleString()}
                                    </div>
                                </div>
                            </div>

                            {/* Size Maximum (Sq. Ft.)  */}
                            <div className="mt-4">
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
                                        defaultValue={floor?.size_max as string}
                                        placeholder=""
                                        min="0"
                                        onChange={(e) => {
                                            setSize_Max(Number(e.target.value))
                                            console.log(e.target.value)
                                        }}
                                    />
                                    <div className="m-4">
                                        {Number(size_max).toLocaleString()}
                                    </div>
                                </div>
                            </div>

                            {/* Avg. Sale Price */}
                            <div className="mt-4">
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
                                        defaultValue={floor?.avg_sale_price as string}
                                        placeholder=""
                                        min="0"
                                        onChange={(e) => {
                                            setAvg_Sale_Price(Number(e.target.value))
                                            console.log(e.target.value)
                                        }}
                                    />
                                    <div className="m-4">
                                        {Number(avg_sale_price).toLocaleString()}
                                    </div>
                                </div>
                            </div>

                            {/* Avg. Monthly Rent */}
                            <div className="mt-4">
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
                                        defaultValue={floor?.avg_monthly_rent as string}
                                        placeholder=""
                                        min="0"
                                        onChange={(e) => {
                                            setAvg_Monthly_Rent(Number(e.target.value))
                                            console.log(e.target.value)
                                        }}
                                    />
                                    <div className="m-4">
                                        {Number(avg_monthly_rent).toLocaleString()}
                                    </div>

                                </div>

                                {/* Installment Plan  */}
                                <div className="mt-4">
                                    <label
                                        htmlFor="building-instalment-plan"
                                        className="block mb-2 text-sm font-medium"
                                    >
                                        Installment Plan
                                    </label>
                                    {/* <select
                                    id="building-instalment-plan"
                                    name="building-instalment-plan"
                                    className="select  w-full max-w-xs border border-gray-400 "
                                    defaultValue={floor?.instalment_plan as string}
                                >
                                    <option>Yes</option>
                                    <option>No</option>
                                </select> */}
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


                                </div>

                                {/* Installment Period (Years) */}
                                <div className="mt-4">
                                    <label
                                        htmlFor="building-floor-instalment-period"
                                        className="block mb-2 text-sm font-medium"
                                    >
                                        Installment Period (Years)
                                    </label>
                                    <div className="flex">
                                        <Input
                                            type="number"
                                            id="building-floor-instalment-period"
                                            name="building-floor-instalment-period"
                                            className="input input-bordered  w-full max-w-xs border border-gray-400 "
                                            defaultValue={floor?.instalment_period as string}
                                            placeholder=""
                                            min="0"
                                            onChange={(e) => {
                                                setInstalment_Period(Number(e.target.value))
                                                console.log(e.target.value)
                                            }}
                                        />
                                        <div className="m-4">
                                            {Number(instalment_period).toLocaleString()}
                                        </div>
                                    </div>
                                </div>



                                {/* Instalment Amount */}
                                <div className="mt-4">
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
                                            defaultValue={floor?.instalment_amount as string}
                                            placeholder=""
                                            min="0"
                                            onChange={(e) => {
                                                setInstalment_Amount(Number(e.target.value))
                                                console.log(e.target.value)
                                            }}
                                        />
                                        <div className="m-4">
                                            {Number(instalment_amount).toLocaleString()}
                                        </div>
                                    </div>
                                </div>

                                {/* Down Payment */}
                                <div className="mt-4">
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
                                            defaultValue={floor?.down_payment_amount as string}
                                            placeholder=""
                                            min="0"
                                            onChange={(e) => {
                                                setDown_Payment_Amount(Number(e.target.value))
                                                console.log(e.target.value)
                                            }}
                                        />
                                        <div className="m-4">
                                            {Number(down_payment_amount).toLocaleString()}
                                        </div>
                                    </div>
                                </div>

                                {/* Possession Amount */}
                                <div className="mt-4">
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
                                            defaultValue={floor?.possession_amount as string}
                                            placeholder=""
                                            min="0"
                                            onChange={(e) => {
                                                setPossession_Amount(Number(e.target.value))
                                                console.log(e.target.value)
                                            }}
                                        />
                                        <div className="m-4">
                                            {Number(possession_amount).toLocaleString()}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Floor Remarks  */}
                            <div className="mt-4">
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
                            <div className="flex gap-6 justify-center mt-3 mb-3">
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

