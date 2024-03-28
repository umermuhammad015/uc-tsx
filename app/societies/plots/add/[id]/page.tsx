"use client";

import * as React from "react"

import AddHomeButton from "../../../components/AddHomeButton";
import Link from "next/link";
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

import createPlot from "../../../../actions/createPlot"

import { redirect } from "next/navigation";
// import AddButton from "../components/AddButton";

import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"

import { useState } from "react";

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

type Props = {
    params: { id: number }
    // searchParams: { [key: string]: string | string[] | undefined }
}

export default function PlotAddPage({ params }: Props) {

    // const [date, setDate] = useState<Date>()

    const [price, setPrice] = useState(0);
    const [rent, setRent] = useState(0);

    return (
        <>
            <div className="text-lg">Plots/Bungalows Information</div>
            <div className="container border-2 ">

                <div className="mx-4">
                    <form action={createPlot}>



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
                                value={params?.id}

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
                            >
                                <option value='87.5'>87.5</option>
                                <option value='125'>125</option>
                                <option value='200'>200</option>
                                <option value='250'>250</option>
                                <option value='500'>500</option>
                                <option value='1000'>1,000</option>
                                <option value='2000'>2,000</option>
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
                                    onChange={(e) => {
                                        setPrice(Number(e.target.value))
                                        console.log(e.target.value)
                                    }}
                                    type="text"
                                    id="plot-price"
                                    name="plot-price"
                                    className="input input-bordered w-full max-w-xs border-2 border-gray-400 "
                                    placeholder="Rs."
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
                                    onChange={(e) => {
                                        setRent(Number(e.target.value))
                                        console.log(e.target.value)
                                    }}
                                    type="text"
                                    id="plot-rent"
                                    name="plot-rent"
                                    className="input input-bordered w-full max-w-xs border-2 border-gray-400 "
                                    placeholder="Rs."
                                />
                                <div className="m-4">
                                    {Number(rent).toLocaleString()}
                                </div>
                            </div>
                        </div>


                        {/* Plot Remarks  */}
                        <div className="mt-4">
                            <label htmlFor="message" className="block mb-2 text-sm font-medium">
                                Remarks
                            </label>
                            <Textarea
                                id="remarks"
                                name="remarks"
                                className="textarea w-full border-2 border-gray-400 "
                                placeholder="Leave a comment..."
                            ></Textarea>
                        </div>


                        {/* Submit button */}
                        <div className="flex gap-6 justify-center mt-3 mb-2">
                            <AddHomeButton />
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