import UpdateHouseButton from '@/app/societies/components/UpdateHouseButton'
import Link from 'next/link'
import React from 'react'
import { Input } from "@/components/ui/input"
import prisma from "../../../../db";
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

import { redirect } from "next/navigation"


type Props = {
    params: { id: number }
    // searchParams: { [key: string]: string | string[] | undefined }
}



export default async function editHouseForm({ params }: Props) {

    console.log(params)



    const house = await prisma.houses.findUnique({
        where: {
            id: Number(params.id) as number
        },
    })

    async function updateHouse(data: FormData) {
        "use server";

        const house_type = data.get("house-type")?.valueOf();

        const house_size = data.get("house-size")?.valueOf();

        const house_price = data.get("house-price")?.valueOf();

        const house_direction = data.get("house-direction")?.valueOf();

        const is_corner = data.get("is-corner")?.valueOf();

        const house_condition = data.get("house-condition")?.valueOf();

        const house_floors = data.get("house-floors")?.valueOf();

        const has_basement = data.get("has-basement")?.valueOf();

        const construction_year = data.get("construction-year")?.valueOf();

        const house_remarks = data.get("house-remarks")?.valueOf();




        const update_query = {
            where: {
                id: Number(params.id) as number
            },
            data: {
                // name: name,
                // city: city

                type: house_type,
                size: house_size,
                price: house_price,
                direction: house_direction,
                is_corner,
                condition: house_condition,
                floors: house_floors,
                has_basement,
                construction_year,
                remarks: house_remarks


            }
        }

        console.log("Update Query is")
        console.log("update_query")

        const updateSociety = await prisma.houses.update(update_query)
        // let updatedNote = await Note.findByIdAndUpdate({ _id: params.id }, { title, note });
        redirect('/societies/')

    }

    console.log(house)

    return (
        <>
            <div className="text-lg">Plots Information</div>
            <div className="container border-2 ">

                <div className="mx-4">
                    <form action={updateHouse}>

                        {/* plot type */}
                        <div className="mt-4">
                            <label
                                htmlFor="house-type"
                                className="block mb-2 text-sm font-medium"
                            >
                                Type:
                            </label>
                            <select
                                id="house-type"
                                name="house-type"
                                className="select  w-full max-w-xs border-2 border-gray-400 "
                                defaultValue={house?.type as string}
                            >
                                <option>Commercial</option>
                                <option>Residential</option>

                            </select>
                        </div>


                        {/* house size  */}
                        <div className="">

                            <div className="mt-4 ">
                                <label
                                    htmlFor="house-size"
                                    className="block mb-2 text-sm font-medium "
                                >
                                    Size:
                                </label>
                                <Input
                                    type="text"
                                    id="house-size"
                                    name="house-size"
                                    className="input input-bordered w-full max-w-xs border-2 border-gray-400"
                                    defaultValue={house?.size as string}
                                    placeholder=""
                                // value={type}

                                />
                            </div>
                        </div>

                        {/* house price  */}
                        <div className=" ">

                            <div className="mt-4 ">
                                <label
                                    htmlFor="house-price"
                                    className="block mb-2 text-sm font-medium "
                                >
                                    Price:
                                </label>
                                <Input
                                    type="text"
                                    id="house-price"
                                    name="house-price"
                                    className="input input-bordered w-full max-w-xs border-2 border-gray-400"
                                    defaultValue={house?.price as string}
                                    placeholder=""
                                // value={type}

                                />
                            </div>
                        </div>


                        {/* house direction  */}
                        <div className="mt-4">
                            <label
                                htmlFor="house-direction"
                                className="block mb-2 text-sm font-medium"
                            >
                                house direction:
                            </label>
                            <select
                                id="house-direction"
                                name="house-direction"
                                className="select  w-full max-w-xs border-2 border-gray-400 "
                                defaultValue={house?.direction as string}
                            >
                                <option>East</option>
                                <option>West</option>
                                <option>North</option>
                                <option>South</option>
                            </select>
                        </div>

                        {/* corner  */}
                        <div className="mt-4">
                            <label
                                htmlFor="is-corner"
                                className="block mb-2 text-sm font-medium"
                            >
                                Corner House?
                            </label>
                            <select
                                id="is-corner"
                                name="is-corner"
                                className="select  w-full max-w-xs border-2 border-gray-400 "
                                defaultValue={house?.is_corner as string}
                            >
                                <option>Yes</option>
                                <option>No</option>
                            </select>
                        </div>

                        {/* condition  */}
                        <div className="mt-4">
                            <label
                                htmlFor="house-condition"
                                className="block mb-2 text-sm font-medium"
                            >
                                House condition
                            </label>
                            <select
                                id="house-condition"
                                name="house-condition"
                                className="select  w-full max-w-xs border-2 border-gray-400 "
                                defaultValue={house?.condition as string}
                            >
                                <option>Good</option>
                                <option>Average</option>
                                <option>Bad</option>
                            </select>
                        </div>

                        {/* house floors */}
                        <div className=" ">

                            <div className="mt-4 ">
                                <label
                                    htmlFor="house-floors"
                                    className="block mb-2 text-sm font-medium "
                                >
                                    House floors:
                                </label>
                                <Input
                                    type="text"
                                    id="house-floors"
                                    name="house-floors"
                                    className="input input-bordered w-full max-w-xs border-2 border-gray-400"
                                    defaultValue={house?.floors as string}
                                    placeholder=""
                                // value={type}

                                />
                            </div>
                        </div>

                        {/* basement  */}
                        <div className="mt-4">
                            <label
                                htmlFor="has-basement"
                                className="block mb-2 text-sm font-medium"
                            >
                                Basement?
                            </label>
                            <select
                                id="has-basement"
                                name="has-basement"
                                className="select  w-full max-w-xs border-2 border-gray-400 "
                                defaultValue={house?.has_basement as string}
                            >
                                <option>Yes</option>
                                <option>No</option>
                            </select>
                        </div>

                        {/* construction year */}
                        <div className=" ">

                            <div className="mt-4 ">
                                <label
                                    htmlFor="construction-year"
                                    className="block mb-2 text-sm font-medium "
                                >
                                    construction year:
                                </label>
                                <Input
                                    type="text"
                                    id="construction-year"
                                    name="construction-year"
                                    className="input input-bordered w-full max-w-xs border-2 border-gray-400"
                                    defaultValue={house?.construction_year as string}
                                    placeholder=""
                                // value={type}

                                />
                            </div>
                        </div>

                        {/* house Remarks  */}
                        <div className="mt-4">
                            <label htmlFor="message" className="block mb-2 text-sm font-medium">
                                Your Remarks
                            </label>
                            <Textarea
                                id="house-remarks"
                                name="house-remarks"
                                className="textarea w-full border-2 border-gray-400 "
                                defaultValue={house?.remarks as string}
                                placeholder="Leave a comment..."
                            ></Textarea>
                        </div>


                        {/* Submit button */}
                        <div className="flex gap-6 justify-center mt-3 mb-2">
                            <UpdateHouseButton />
                            {/* <Link href="/buildings" className="flex justify-center items-center border border-black px-2 py-1 rounded-xl bg-white text-black hover:bg-red-600 hover:text-white capitalize">Cancel</Link> */}

                            <Button asChild className="bg-transparent text-primary hover:bg-primary-foreground">
                                <Link href="/societies" >Cancel</Link>
                            </Button>

                        </div>


                    </form>
                </div>
            </div>
        </>
    )
}