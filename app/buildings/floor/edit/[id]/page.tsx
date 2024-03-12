import AddFloorButton from '@/app/buildings/components/AddFloorButton'
import UpdateFloorButton from '@/app/buildings/components/UpdateFloorButton'
import Link from 'next/link'
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import React from 'react'
import prisma from "../../../../db";
import { Button } from "@/components/ui/button"

import { redirect } from "next/navigation"


type Props = {
    params: { id: string }
    // searchParams: { [key: string]: string | string[] | undefined }
}

export default async function editFloorForm({ params }: Props) {

    console.log(params)

    // building = prisma.buildings.find(
    //     {
    //         _id: params.id
    //     }
    // )

    const floor = await prisma.floors.findUnique({
        where: {
            id: Number(params.id) as number
        },
    })

    async function updateFloor(data: FormData) {
        "use server";

        // const building_id = await prisma.floors.findUnique({
        //     data: {
        //         // name: name,
        //         // city: city

        //         building_id : building_id as string,



        //     }
        //     where: {
        //         id: params.id,
        //     },
        // })



        const unit_type = data.get("building-floor-unit-type")?.valueOf();
        const occupancy = data.get("building-floor-occupancy")?.valueOf();
        const size_min = data.get("building-floor-size-min")?.valueOf();
        const size_max = data.get("building-floor-size-max")?.valueOf();
        const avg_sale_price = data.get("building-floor-avg-sale-price")?.valueOf();
        const avg_monthly_rent = data.get("building-floor-avg-monthly-rent")?.valueOf();
        const instalment_plan = data.get("building-instalment-plan")?.valueOf();
        const instalment_period = data.get("building-floor-instalment-period")?.valueOf();
        const down_payment_amount = data.get("building-floor-down-payment-amount")?.valueOf();
        const instalment_amount = data.get("building-floor-instalment-amount")?.valueOf();
        const possession_amount = data.get("building-floor-possession-amount")?.valueOf();
        const remarks = data.get("building-floor-remarks")?.valueOf();


        console.log("unit_type is")
        console.log(unit_type);


        const update_query = {
            where: {
                id: Number(params.id) as number
            },
            data: {
                // name: name,
                // city: city

                unit_type, occupancy, size_min,
                size_max, avg_sale_price,
                avg_monthly_rent, instalment_plan,
                instalment_period, down_payment_amount,
                instalment_amount, possession_amount,
                remarks

            }
        }

        console.log("Update Query is")
        console.log("update_query")

        const updateBuilding = await prisma.floors.update(update_query)
        // let updatedNote = await Note.findByIdAndUpdate({ _id: params.id }, { title, note });
        redirect('/buildings/')

    }

    console.log(floor)

    return (
        <>
            <h2>Update Floor</h2>
            <div className="container border-2">

                <div className="mx-4">
                    <form action={updateFloor}>
                        {/* Floor ID  */}
                        <div className="grid grid-cols-3 gap-4">
                            {/* <div className="mt-4">
                            <label
                                htmlFor="floor-id"
                                className="block mb-2 text-sm font-medium"
                            >
                                Floor ID:
                            </label>
                            <input
                                type="text"
                                id="floor-id"
                                name="floor-id"
                                className="input input-bordered input-primary w-full max-w-xs"
                                placeholder=""

                            // defaultValue={building?.id}
                            // value="hi"
                            // defaultValue="hello"
                            // disabled
                            />
                        </div> */}




                            {/* Floor Number  */}
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
                                    className="select w-full max-w-xs border border-gray-400 "

                                >
                                    <option>Lower Ground</option>
                                    <option>Ground</option>
                                    <option>1st</option>
                                    <option>2nd</option>
                                    <option>3rd</option>
                                    <option>4th</option>
                                    <option>5th</option>
                                    <option>6th</option>
                                    <option>7th</option>
                                    <option>8th</option>
                                    <option>9th</option>
                                    <option>11th</option>
                                    <option>12th</option>
                                    <option>13th</option>
                                    <option>14th</option>
                                    <option>15th</option>
                                    <option>16th</option>
                                    <option>17th</option>
                                    <option>18th</option>
                                    <option>19th</option>
                                    <option>20th</option>
                                    <option>21th</option>
                                    <option>22th</option>
                                    <option>23th</option>
                                    <option>24th</option>
                                    <option>25th</option>
                                    <option>26th</option>
                                    <option>27th</option>
                                    <option>28th</option>
                                    <option>29th</option>
                                    <option>30th</option>
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
                                    className="select w-full max-w-xs border border-gray-400 "
                                >
                                    <option>Retails</option>
                                    <option>Offices</option>
                                    <option>Apartment</option>
                                    <option>Other</option>
                                </select>
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

                            {/* Building ID  */}
                            {/* <div className="mt-4">
          <label
            htmlFor="building-id"
            className="block mb-2 text-sm font-medium"
          >
            Building ID:
          </label>
          <input
            type="text"
            id="building-id"
            name="building-id"
            className="input input-bordered input-primary w-full max-w-xs"
            placeholder=""
            // value={building?.id}
            defaultValue={building?.id}
            disabled
          />
        </div> */}

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
                                <Input
                                    type="number"
                                    id="building-floor-size-min"
                                    name="building-floor-size-min"
                                    className="input input-bordered  w-full max-w-xs border border-gray-400 "
                                    defaultValue={floor?.size_min as string}
                                    placeholder=""
                                    min="0"
                                />
                            </div>

                            {/* Size Maximum (Sq. Ft.)  */}
                            <div className="mt-4">
                                <label
                                    htmlFor="building-floor-size-max"
                                    className="block mb-2 text-sm font-medium"
                                >
                                    Size Maximum (Sq. Ft.)
                                </label>
                                <Input
                                    type="number"
                                    id="building-floor-size-max"
                                    name="building-floor-size-max"
                                    className="input input-bordered  w-full max-w-xs border border-gray-400 "
                                    defaultValue={floor?.size_max as string}
                                    placeholder=""
                                    min="0"
                                />
                            </div>

                            {/* Avg. Sale Price */}
                            <div className="mt-4">
                                <label
                                    htmlFor="building-floor-avg-sale-price"
                                    className="block mb-2 text-sm font-medium"
                                >
                                    Average Sale Price (Per Sq. Ft.)
                                </label>
                                <Input
                                    type="number"
                                    id="building-floor-avg-sale-price"
                                    name="building-floor-avg-sale-price"
                                    className="input input-bordered  w-full max-w-xs border border-gray-400 "
                                    defaultValue={floor?.avg_sale_price as string}
                                    placeholder=""
                                    min="0"
                                />
                            </div>

                            {/* Avg. Monthly Rent */}
                            <div className="mt-4">
                                <label
                                    htmlFor="building-floor-avg-monthly-rent"
                                    className="block mb-2 text-sm font-medium"
                                >
                                    Average Monthly Rent
                                </label>
                                <Input
                                    type="number"
                                    id="building-floor-avg-monthly-rent"
                                    name="building-floor-avg-monthly-rent"
                                    className="input input-bordered  w-full max-w-xs border border-gray-400 "
                                    defaultValue={floor?.avg_monthly_rent as string}
                                    placeholder=""
                                    min="0"
                                />
                            </div>

                            {/* Installment Plan  */}
                            <div className="mt-4">
                                <label
                                    htmlFor="building-instalment-plan"
                                    className="block mb-2 text-sm font-medium"
                                >
                                    Installment Plan
                                </label>
                                <select
                                    id="building-instalment-plan"
                                    name="building-instalment-plan"
                                    className="select  w-full max-w-xs border border-gray-400 "
                                    defaultValue={floor?.instalment_plan as string}
                                >
                                    <option>Yes</option>
                                    <option>No</option>
                                </select>
                            </div>

                            {/* Installment Period (Years) */}
                            <div className="mt-4">
                                <label
                                    htmlFor="building-floor-instalment-period"
                                    className="block mb-2 text-sm font-medium"
                                >
                                    Installment Period (Years)
                                </label>
                                <Input
                                    type="number"
                                    id="building-floor-instalment-period"
                                    name="building-floor-instalment-period"
                                    className="input input-bordered  w-full max-w-xs border border-gray-400 "
                                    defaultValue={floor?.instalment_period as string}
                                    placeholder=""
                                    min="0"
                                />
                            </div>

                            {/* Down Payment */}
                            <div className="mt-4">
                                <label
                                    htmlFor="building-floor-down-payment-amount"
                                    className="block mb-2 text-sm font-medium"
                                >
                                    Down Payment
                                </label>
                                <Input
                                    type="number"
                                    id="building-floor-down-payment-amount"
                                    name="building-floor-down-payment-amount"
                                    className="input input-bordered w-full max-w-xs border border-gray-400 "
                                    defaultValue={floor?.down_payment_amount as string}
                                    placeholder=""
                                    min="0"
                                />
                            </div>

                            {/* Instalment Amount */}
                            <div className="mt-4">
                                <label
                                    htmlFor="building-floor-instalment-amount"
                                    className="block mb-2 text-sm font-medium"
                                >
                                    Instalment Amount
                                </label>
                                <Input
                                    type="number"
                                    id="building-floor-instalment-amount"
                                    name="building-floor-instalment-amount"
                                    className="input input-bordered w-full max-w-xs border border-gray-400 "
                                    defaultValue={floor?.instalment_amount as string}
                                    placeholder=""
                                    min="0"
                                />
                            </div>

                            {/* Possession Amount */}
                            <div className="mt-4">
                                <label
                                    htmlFor="building-floor-possession-amount"
                                    className="block mb-2 text-sm font-medium"
                                >
                                    Possession Amount
                                </label>
                                <Input
                                    type="number"
                                    id="building-floor-possession-amount"
                                    name="building-floor-possession-amount"
                                    className="input input-bordered border w-full max-w-xs border-gray-400 "
                                    defaultValue={floor?.possession_amount as string}
                                    placeholder=""
                                    min="0"
                                />
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
                    </form>
                </div>

            </div>
        </>
    )
}

