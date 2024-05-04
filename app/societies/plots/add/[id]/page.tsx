"use client";

import * as React from "react"

import AddHomeButton from "../../../components/AddHomeButton";
import Link from "next/link";
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


import createPlot from "../../../../actions/createPlot"
import { useState } from "react";
import { Button } from "@/components/ui/button"
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
            <div className="text-lg">Plots/Bungalow Information</div>
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
                        {/* <div className="mt-4">
                            <label
                                htmlFor="plot-type"
                                className="block mb-2 text-sm font-medium"
                            >
                                Type:
                            </label>

                            <Select
                                name="plot-type">
                                <SelectTrigger
                                    id="plot-type"
                                    className="select  w-full max-w-xs border-2 border-gray-400 ">
                                    <SelectValue placeholder="Select Type" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel></SelectLabel>
                                        <SelectItem value="Plot">Plot</SelectItem>
                                        <SelectItem value="Bungalow">Bungalow</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div> */}
                        {/* plot type */}
                        <div className="mt-4">
                            <label
                                htmlFor="type"
                                className="block mb-2 text-sm font-medium"
                            >
                                Plot/Bungalow Type:
                            </label>
                            {/* <select
                                id="type"
                                name="type"
                                className="select  w-full max-w-xs border-2 border-gray-400 "
                            >
                                <option>Commercial</option>
                                <option>Residential</option>

                            </select> */}
                            <Select
                                name="type">
                                <SelectTrigger
                                    id="type"
                                    className="select  w-full max-w-xs border-2 border-gray-400 ">
                                    <SelectValue placeholder="Select Plot/Bungalow Type" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel></SelectLabel>
                                        <SelectItem value="Residential">Residential Plot</SelectItem>
                                        <SelectItem value="Commercial">Commercial Plot</SelectItem>
                                        <SelectItem value="Bungalow">Bungalow</SelectItem>

                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>


                        {/* plot size  */}
                        <div className="mt-4">
                            <label
                                htmlFor="plot-size"
                                className="block mb-2 text-sm font-medium"
                            >
                                Plot/Bungalow Size :
                            </label>
                            <Select
                                name="plot-size">
                                <SelectTrigger
                                    id="plot-size"
                                    className="select w-full max-w-xs border-2 border-gray-400 ">
                                    <SelectValue placeholder="Select Plot/Bungalow Size" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel></SelectLabel>
                                        <SelectItem value="87.5">87.5</SelectItem>
                                        <SelectItem value="125">125</SelectItem>
                                        <SelectItem value="200">200</SelectItem>
                                        <SelectItem value="250">250</SelectItem>
                                        <SelectItem value="500">500</SelectItem>
                                        <SelectItem value="1000">1,000</SelectItem>
                                        <SelectItem value="2000">2,000</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
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

                        {/*Date */}

                        <div className="relative max-w-sm">
                            <label
                                htmlFor="surveyor-name"
                                className="block mb-2 text-sm font-medium "
                            >
                                Date

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
                                id="plot-date"
                                name="plot-date"
                                // defaultValue="2024-12-13"
                                defaultValue={(new Date).toISOString().split('T')[0]}
                                // value="12/26/2024"
                                className="max-w-xs border-gray-400  border-2 text-sm rounded focus:ring-blue-500  block w-full p-2.5"
                                placeholder="date"
                            />
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