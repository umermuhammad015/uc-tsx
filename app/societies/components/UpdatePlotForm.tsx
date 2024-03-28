"use client"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import UpdatePlot from "./UpdatePlot"
import { useState } from "react"
import UpdateHomeButton from "./UpdateHomeButton"
import Link from 'next/link'

// type PlotProps = {
//     id: number,

// }

// type Props = {
//     plots: { id: number }
// }

export default function UpdatePlotForm({ plots }: any) {

    const [price, setPrice] = useState(plots?.plot_price)
    const [rent, setRent] = useState(plots?.plot_rent)


    return (
        <form action={UpdatePlot}>

            <div className="mt-4 ">
                <label
                    htmlFor="society-id"
                    className="block mb-2 text-sm font-medium "
                >
                    Society ID:
                </label>
                <Input
                    type="text"
                    id="society-id"
                    name="society-id"
                    className="input input-bordered  w-full max-w-xs border-2 border-gray-400 cursor-not-allowed disabled:bg-gray-200"
                    placeholder=""
                    value={plots?.id}

                />
            </div>
            {/* <div className="mt-4 ">
        <label
            htmlFor="society-name"
            className="block mb-2 text-sm font-medium "
        >
            Society Name:
        </label>
        <Input
            type="text"
            id="society-name"
            name="society-name"
            className="input input-bordered  w-full max-w-xs border-2 border-gray-400 cursor-not-allowed disabled:bg-gray-200"
            placeholder=""
            value={society?.name as string}

        />
    </div> */}
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
                    defaultValue={plots?.plot_type as string}
                >
                    <option>Plot</option>
                    <option>Bungalow</option>

                </select>
            </div>
            {/* plot type */}
            <div className="mt-4">
                <label
                    htmlFor="type"
                    className="block mb-2 text-sm font-medium"
                >
                    Plot/Bungalow Type:
                </label>
                <select
                    id="type"
                    name="type"
                    className="select  w-full max-w-xs border-2 border-gray-400 "
                    defaultValue={plots?.type as string}
                >
                    <option>Commercial</option>
                    <option>Residential</option>

                </select>
            </div>


            {/* plot size  */}
            <div className="mt-4">
                <label
                    htmlFor="plot-size"
                    className="block mb-2 text-sm font-medium"
                >
                    Plot/Bungalow Size :
                </label>
                <select
                    id="plot-size"
                    name="plot-size"
                    className="select w-full max-w-xs border-2 border-gray-400 "
                    defaultValue={plots?.size as string}
                >
                    <option>87.5</option>
                    <option>125</option>
                    <option>200</option>
                    <option>250</option>
                    <option>500</option>
                    <option>1000</option>
                    <option>2000</option>
                </select>
            </div>

            {/* plot price  */}
            <div className="mt-4">
                <label
                    htmlFor="plot-price"
                    className="block mb-2 text-sm font-medium"
                >
                    Price:
                </label>
                <div className="flex">
                    <Input
                        type="text"
                        id="plot-price"
                        name="plot-price"
                        className="input input-bordered w-full max-w-xs border-2 border-gray-400 "
                        defaultValue={plots?.plot_price as string}
                        placeholder="Rs."
                        onChange={(e) => {
                            setPrice(e.target.value)
                            console.log(e.target.value)
                        }}
                    />
                    <div className="m-4">
                        {Number(price).toLocaleString()}
                    </div>
                </div>
            </div>

            {/* plot rent  */}
            <div className="mt-4">
                <label
                    htmlFor="plot-rent"
                    className="block mb-2 text-sm font-medium"
                >
                    Rental Value:
                </label>
                <div className="flex">
                    <Input
                        type="text"
                        id="plot-rent"
                        name="plot-rent"
                        className="input input-bordered w-full max-w-xs border-2 border-gray-400 "
                        defaultValue={plots?.plot_rent as string}
                        placeholder="Rs."
                        onChange={(e) => {
                            setRent(e.target.value)
                            console.log(e.target.value)
                        }}
                    />
                    <div className="m-4">

                        {Number(rent).toLocaleString()}
                    </div>
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
                    defaultValue={plots?.remarks as string}
                    placeholder="Leave a comment..."
                ></Textarea>
            </div>


            {/* Submit button */}
            <div className="flex gap-6 justify-center mt-3 mb-2">
                <UpdateHomeButton />
                {/* <Link href="/buildings" className="flex justify-center items-center border border-black px-2 py-1 rounded-xl bg-white text-black hover:bg-red-600 hover:text-white capitalize">Cancel</Link> */}

                <Button asChild className="bg-transparent text-primary hover:bg-primary-foreground">
                    <Link href="/societies" >Cancel</Link>
                </Button>

            </div>

        </form>
    )
}

