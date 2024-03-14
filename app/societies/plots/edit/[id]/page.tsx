import UpdatePlotButton from '@/app/societies/components/UpdatePlotButton'
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



export default async function editPlotForm({ params }: Props) {

    console.log(params)



    const plot = await prisma.plots.findUnique({
        where: {
            id:Number(params.id) as number
        },
    })

    async function updatePlot(data: FormData) {
        "use server";


        const plot_type = data.get("plot-type")?.valueOf();

        const plot_size = data.get("plot-size")?.valueOf();

        const plot_price = data.get("plot-price")?.valueOf();

        const plot_direction = data.get("plot-direction")?.valueOf();

        const is_corner = data.get("is-corner")?.valueOf();

        const instalment_period = data.get("instalment-period")?.valueOf();

        const instalment_plan = data.get("instalment-plan")?.valueOf();

        const plot_remarks = data.get("plot-remarks")?.valueOf();




        const update_query = {
            where: {
                id: Number(params.id) as number
            },
            data: {
                // name: name,
                // city: city

                type:plot_type, 
                size:plot_size, 
                price:plot_price,
                direction:plot_direction,
                is_corner,
                instalment_plan, instalment_period,
                remarks:plot_remarks
                

            }
        }

        console.log("Update Query is")
        console.log("update_query")

        const updateSociety = await prisma.plots.update(update_query)
        // let updatedNote = await Note.findByIdAndUpdate({ _id: params.id }, { title, note });
        redirect('/societies/')

    }

    console.log(plot)

    return (
        <>
            <div className="text-lg">Plots Information</div>
            <div className="container border-2 ">

                <div className="mx-4">
                    <form action={updatePlot}>
                       
                        {/* plot type */}
                        <div className="mt-4">
                            <label
                                htmlFor="plot-type"
                                className="block mb-2 text-sm font-medium"
                            >
                                Type:
                            </label>
                            <select
                                id="plot-type"
                                name="plot-type"
                                className="select  w-full max-w-xs border-2 border-gray-400 "
                                defaultValue={plot?.type as string}
                            >
                                <option>Commercial</option>
                                <option>Residential</option>

                            </select>
                        </div>


                        {/* plot size  */}
                        <div className="">

                            <div className="mt-4 ">
                                <label
                                    htmlFor="plot-size"
                                    className="block mb-2 text-sm font-medium "
                                >
                                    Size:
                                </label>
                                <Input
                                    type="text"
                                    id="plot-size"
                                    name="plot-size"
                                    className="input input-bordered w-full max-w-xs border-2 border-gray-400"
                                    placeholder=""
                                    defaultValue={plot?.size as string}
                                // value={type}

                                />
                            </div>
                        </div>

                        {/* plot price  */}
                        <div className=" ">

                            <div className="mt-4 ">
                                <label
                                    htmlFor="plot-price"
                                    className="block mb-2 text-sm font-medium "
                                >
                                    Price:
                                </label>
                                <Input
                                    type="text"
                                    id="plot-price"
                                    name="plot-price"
                                    className="input input-bordered w-full max-w-xs border-2 border-gray-400"
                                    placeholder=""
                                    defaultValue={plot?.price as string}
                                // value={type}

                                />
                            </div>
                        </div>


                        {/* plot direction  */}
                        <div className="mt-4">
                            <label
                                htmlFor="plot-direction"
                                className="block mb-2 text-sm font-medium"
                            >
                                Plot direction:
                            </label>
                            <select
                                id="plot-direction"
                                name="plot-direction"
                                className="select  w-full max-w-xs border-2 border-gray-400 "
                                defaultValue={plot?.direction as string}
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
                                Corner Plot?
                            </label>
                            <select
                                id="is-corner"
                                name="is-corner"
                                className="select  w-full max-w-xs border-2 border-gray-400 "
                                defaultValue={plot?.is_corner as string}
                            >
                                <option>Yes</option>
                                <option>No</option>
                            </select>
                        </div>

                        {/* instalment period */}
                        <div className=" ">

                            <div className="mt-4 ">
                                <label
                                    htmlFor="instalment-period"
                                    className="block mb-2 text-sm font-medium "
                                >
                                    Instalment period:
                                </label>
                                <Input
                                    type="text"
                                    id="instalment-period"
                                    name="instalment-period"
                                    className="input input-bordered w-full max-w-xs border-2 border-gray-400"
                                    placeholder=""
                                    defaultValue={plot?.instalment_period as string}
                                // value={type}

                                />
                            </div>
                        </div>

                        {/* instalment plan */}
                        <div className=" ">

                            <div className="mt-4 ">
                                <label
                                    htmlFor="instalment-plan"
                                    className="block mb-2 text-sm font-medium "
                                >
                                    Instalment plan:
                                </label>
                                <Input
                                    type="text"
                                    id="instalment-plan"
                                    name="instalment-plan"
                                    className="input input-bordered w-full max-w-xs border-2 border-gray-400"
                                    placeholder=""
                                    defaultValue={plot?.instalment_plan as string}
                                // value={type}

                                />
                            </div>
                        </div>

                        {/* Plot Remarks  */}
                        <div className="mt-4">
                            <label htmlFor="message" className="block mb-2 text-sm font-medium">
                                Your Remarks
                            </label>
                            <Textarea
                                id="plot-remarks"
                                name="plot-remarks"
                                className="textarea w-full border-2 border-gray-400 "
                                defaultValue={plot?.remarks as string}
                                placeholder="Leave a comment..."
                            ></Textarea>
                        </div>


                        {/* Submit button */}
                        <div className="flex gap-6 justify-center mt-3 mb-2">
                            <UpdatePlotButton />
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