"use client"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import UpdatePlot from "./UpdatePlot"
import { useEffect, useState } from "react"
import UpdateHomeButton from "./UpdateHomeButton"
import Link from 'next/link'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import FetchSociety from "./FatchSociety"

// type PlotProps = {
//     id: number,

// }

// type Props = {
//     plots: { id: number }
// }
type Props = {
    params: { id: number }
    // searchParams: { [key: string]: string | string[] | undefined }
}

export default function UpdatePlotForm({ plots }: any) {


    const [price, setPrice] = useState(plots?.plot_price)
    const [rent, setRent] = useState(plots?.plot_rent)

    const [plotType, setPlotType] = useState(plots?.type)
    const [payment_mode, setPayment_mode] = useState(plots?.payment_mode)
    const [apartment_size_ft, setApartment_size_ft] = useState(plots?.apartment_size_ft);
    const [ins_total_price, setIns_total_price] = useState(plots?.ins_total_price);
    const [ins_down_payment, setIns_down_payment] = useState(plots?.ins_down_payment);
    const [ins_possession_Amount, setIns_possession_Amount] = useState(plots?.ins_possession_Amount);
    const [ins_period, setIns_Period] = useState(plots?.ins_period);


    // useEffect(() => {

    //     // console.log("use effect called")


    //     const getSocietyData = async () => {

    //         try {

    //             // console.log("trying")
    //             // console.log(params.id)

    //             const society_data = await FetchSociety(params.id)

    //             // console.log("Current_society_data")
    //             // console.log(society_data)


    //             setCurrent_society(society_data)

    //         } catch (error) {

    //             console.error('Error fetching society data:', error);

    //             // setIsAdding(!isAdding)
    //         }
    //     };


    //     getSocietyData();



    // }, []);



    return (
        <form action={UpdatePlot}>

            <div className="mt-4 ">
                <label
                    htmlFor="plot-id"
                    className="block mb-2 text-sm font-medium "
                >
                    Plot ID:
                </label>
                <Input
                    type="text"
                    id="plot-id"
                    name="plot-id"
                    className="input input-bordered  w-full max-w-xs border-2 border-gray-400 cursor-not-allowed disabled:bg-gray-200"
                    placeholder=""
                    value={plots?.id}

                />
            </div>

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
                    className="input input-bordered w-full max-w-xs border-2 border-gray-400 cursor-not-allowed disabled:bg-gray-200"
                    placeholder=""
                    value={plots?.society_id}

                />
            </div>
            {/* Survey Date */}

            <div className="relative max-w-sm mt-4">
                <label
                    htmlFor="surveyor-name"
                    className="block mb-2 text-sm font-medium"
                >
                    Date:

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
                    id="plot-date"
                    name="plot-date"
                    // defaultValue={societies?.survey_date as unknown as string}
                    defaultValue={plots?.date as string}
                    className="max-w-xs border-gray-400 border-2 text-sm rounded focus:ring-blue-500  block w-full p-2.5"
                    placeholder="Survey date"
                />
            </div>

            {/* plot type */}
            <div className="mt-4">
                <label
                    htmlFor="type"
                    className="block mb-2 text-sm font-medium"
                >
                    Property Type:
                </label>


                <select
                    id="type"
                    name="type"
                    className="select  w-full h-10 max-w-xs border-2 rounded border-gray-400 bg-background"
                    onChange={(e) => setPlotType(e.target.value)}
                    defaultValue={plots?.type as string}
                >
                    <option value="Residential Plot">Residential Plot</option>
                    <option value="Commercial Plot">Commercial Plot</option>
                    <option value="Bungalow">Bungalow</option>
                    <option value="Apartment">Apartment</option>
                    <option value="Shop">Shop</option>
                    <option value="Office">Office</option>
                    <option value="Files">Files</option>
                </select>

            </div>




            {/* plot size  */}

            {/* <button onClick={() => {
                console.log(plotType)
            }}>Check</button> */}
            {
                (plotType === "Residential Plot" || plotType === 'Commercial Plot' || plotType === 'Bungalow' ||
                    plotType === 'Files') &&
                <>
                    <div className="mt-4">
                        <label
                            htmlFor="plot-size"
                            className="block mb-2 text-sm font-medium"
                        >
                            Property Size (Sq. Yards):
                        </label>
                        <Select
                            defaultValue={plots?.size as string}
                            name="plot-size">
                            <SelectTrigger
                                id="plot-size"
                                className="select w-full max-w-xs border-2 border-gray-400 ">
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel></SelectLabel>
                                    <SelectItem value="87.5">87.5</SelectItem>
                                    <SelectItem value="100">100</SelectItem>
                                    <SelectItem value="125">125</SelectItem>
                                    <SelectItem value="200">200</SelectItem>
                                    <SelectItem value="250">250</SelectItem>
                                    <SelectItem value="300">300</SelectItem>
                                    <SelectItem value="500">500</SelectItem>
                                    <SelectItem value="600">600</SelectItem>
                                    <SelectItem value="800">800</SelectItem>
                                    <SelectItem value="1000">1,000</SelectItem>
                                    <SelectItem value="2000">2,000</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                </>

            }

            {
                plotType === "Apartment" &&
                <>
                    <div className="mt-4">
                        <label
                            htmlFor="apartment-size"
                            className="block mb-2 text-sm font-medium"
                        >
                            Apartment Type :
                        </label>
                        <Select
                            defaultValue={plots?.apartment_size as string}
                            name="apartment-size">
                            <SelectTrigger
                                id="apartment-size"
                                className="select w-full max-w-xs border-2 border-gray-400 ">
                                <SelectValue placeholder="Select Plot/Bungalow Size" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel></SelectLabel>
                                    <SelectItem value="Studio">Studio</SelectItem>
                                    <SelectItem value="1 Bed">1 Bed</SelectItem>
                                    <SelectItem value="2 Bed">2 Bed</SelectItem>
                                    <SelectItem value="3 Bed">3 Bed</SelectItem>
                                    <SelectItem value="4 Bed">4 Bed</SelectItem>
                                    <SelectItem value="5 Bed">5 Bed</SelectItem>
                                    <SelectItem value="Penthouse">Penthouse</SelectItem>
                                    <SelectItem value="Duplex">Duplex</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>

                    {/* apartment-size-ft  */}
                    <div className="mt-4">
                        <label
                            htmlFor="apartment-size-ft"
                            className="block mb-2 text-sm font-medium"
                        >
                            Apartment Size (Sq. Ft.):
                        </label>

                        <Input

                            type="number"
                            id="apartment-size-ft"
                            name="apartment-size-ft"
                            className="input input-bordered w-full max-w-xs border-2 border-gray-400 "
                            placeholder="(Sq. Yards)"
                            // onChange={(e) => {
                            //     setApartment_size_ft(Number(e.target.value))
                            //     // console.log(e.target.value)
                            // }}
                            defaultValue={plots?.apartment_size_ft as string}
                        />
                        {/* <div className="m-4">
                                            {Number(apartment_size_ft).toLocaleString()}
                                        </div> */}

                    </div>

                    {/* <div className="mt-4">
                        <label
                            htmlFor="apartment-size-ft"
                            className="block mb-2 text-sm font-medium"
                        >
                            Apartment Size (Sq. Ft.):
                        </label>
                        <Select
                            defaultValue={plots?.apartment_size_ft as string}
                            name="apartment-size-ft">
                            <SelectTrigger
                                id="apartment-size-ft"
                                className="select w-full max-w-xs border-2 border-gray-400 ">
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel></SelectLabel>
                                    <SelectItem value="400">400</SelectItem>
                                    <SelectItem value="550">550</SelectItem>
                                    <SelectItem value="650">650</SelectItem>
                                    <SelectItem value="800">800</SelectItem>
                                    <SelectItem value="900">900</SelectItem>
                                    <SelectItem value="1000">1000</SelectItem>
                                    <SelectItem value="1200">1200</SelectItem>
                                    <SelectItem value="1500">1500</SelectItem>
                                    <SelectItem value="1800">1800</SelectItem>
                                    <SelectItem value="2000">2000</SelectItem>
                                    <SelectItem value="2400">2400</SelectItem>
                                    <SelectItem value="2800">2800</SelectItem>
                                    <SelectItem value="3200">3200</SelectItem>
                                    <SelectItem value="4000">4000</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div> */}


                </>

            }

            {/* Shop size  */}
            {
                plotType === "Shop" &&
                <>
                    <div className="mt-4">
                        <label
                            htmlFor="shop-size"
                            className="block mb-2 text-sm font-medium"
                        >
                            Property Size (Sq. Ft.):
                        </label>
                        <Select
                            defaultValue={plots?.shop_size as string}
                            name="shop-size">
                            <SelectTrigger
                                id="shop-size"
                                className="select w-full max-w-xs border-2 border-gray-400 ">
                                <SelectValue placeholder="Select  Property Size" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel></SelectLabel>
                                    <SelectItem value="50">50</SelectItem>
                                    <SelectItem value="75">75</SelectItem>
                                    <SelectItem value="100">100</SelectItem>
                                    <SelectItem value="150">150</SelectItem>
                                    <SelectItem value="200">200</SelectItem>
                                    <SelectItem value="250">250</SelectItem>
                                    <SelectItem value="300">300</SelectItem>
                                    <SelectItem value="400">400</SelectItem>
                                    <SelectItem value="500">500</SelectItem>
                                    <SelectItem value="600">600</SelectItem>
                                    <SelectItem value="800">800</SelectItem>
                                    <SelectItem value="1000">1000</SelectItem>
                                    <SelectItem value="1500">1500</SelectItem>
                                    <SelectItem value="2000">2000</SelectItem>
                                    <SelectItem value="2500">2500</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                </>

            }

            {/* Office size  */}
            {
                plotType === "Office" &&
                <>
                    <div className="mt-4">
                        <label
                            htmlFor="office-size"
                            className="block mb-2 text-sm font-medium"
                        >
                            Property Size (Sq. Ft.):
                        </label>
                        <Select
                            defaultValue={plots?.office_size as string}
                            name="office-size">
                            <SelectTrigger
                                id="office-size"
                                className="select w-full max-w-xs border-2 border-gray-400">
                                <SelectValue placeholder="Select  Property Size" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel></SelectLabel>
                                    <SelectItem value="50">50</SelectItem>
                                    <SelectItem value="75">75</SelectItem>
                                    <SelectItem value="100">100</SelectItem>
                                    <SelectItem value="150">150</SelectItem>
                                    <SelectItem value="200">200</SelectItem>
                                    <SelectItem value="250">250</SelectItem>
                                    <SelectItem value="300">300</SelectItem>
                                    <SelectItem value="400">400</SelectItem>
                                    <SelectItem value="500">500</SelectItem>
                                    <SelectItem value="600">600</SelectItem>
                                    <SelectItem value="800">800</SelectItem>
                                    <SelectItem value="1000">1000</SelectItem>
                                    <SelectItem value="1500">1500</SelectItem>
                                    <SelectItem value="2000">2000</SelectItem>
                                    <SelectItem value="2500">2500</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                </>

            }

            {/* Payment Mode*/}
            <div className="mt-4">
                <label
                    htmlFor="payment-mode"
                    className="block mb-2 text-sm font-medium"
                >
                    Payment Mode:
                </label>
                <select
                    id="payment-mode"
                    name="payment-mode"
                    className="select  w-full text-sm pl-2 h-10 max-w-xs border-2 rounded border-gray-400 bg-background"
                    defaultValue={plots?.payment_mode as string}
                    onChange={(e) => setPayment_mode(e.target.value)}
                >
                    <option value="Lumpsum Payment">Lumpsum Payment</option>
                    <option value="Instalments">Instalments</option>
                </select>
            </div>

            {/* plot price  */}
            <div className="mt-4">
                <label
                    htmlFor="plot-price"
                    className="block mb-2 text-sm font-medium"
                >
                    Total Price:
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
                            // console.log(e.target.value)
                        }}
                    />
                    <div className="m-4">
                        {Number(price).toLocaleString()}
                    </div>
                </div>
            </div>

            {/* plot rent  */}
            <div className="">
                <label
                    htmlFor="plot-rent"
                    className="block mb-2 text-sm font-medium"
                >
                    Monthly Rent:
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

            {/* Total Amount: */}
            {/* Down Payment:      */}
            {/* Possession Amount  : */}
            {/* Instalment Period Years: */}

            {
                payment_mode === "Instalments" &&
                <>


                    <div className="">
                        <label
                            htmlFor="ins-down-payment"
                            className="block mb-2 text-sm font-medium"
                        >
                            Down Payment:
                        </label>
                        <div className="flex">
                            <Input
                                type="text"
                                id="ins-down-payment"
                                name="ins-down-payment"
                                className="input input-bordered w-full max-w-xs border-2 border-gray-400 "
                                defaultValue={plots?.ins_down_payment as string}
                                placeholder="Rs."
                                onChange={(e) => {
                                    setIns_down_payment(Number(e.target.value))
                                    console.log(e.target.value)
                                }}
                            />
                            <div className="m-4">
                                {Number(ins_down_payment).toLocaleString()}
                            </div>
                        </div>
                    </div>

                    <div className="">
                        <label
                            htmlFor="ins-total-price"
                            className="block mb-2 text-sm font-medium"
                        >
                            Installment Amount:
                        </label>
                        <div className="flex">
                            <Input
                                type="text"
                                id="ins-total-price"
                                name="ins-total-price"
                                className="input input-bordered w-full max-w-xs border-2 border-gray-400 "
                                defaultValue={plots?.ins_total_price as string}
                                placeholder="Rs."
                                onChange={(e) => {
                                    setIns_total_price(Number(e.target.value))
                                    console.log(e.target.value)
                                }}
                            />
                            <div className="m-4">
                                {Number(ins_total_price).toLocaleString()}
                            </div>
                        </div>
                    </div>

                    <div className="">
                        <label
                            htmlFor="ins-possession-Amount"
                            className="block mb-2 text-sm font-medium"
                        >
                            Possession Amount  :
                        </label>
                        <div className="flex">
                            <Input
                                type="text"
                                id="ins-possession-Amount"
                                name="ins-possession-Amount"
                                className="input input-bordered w-full max-w-xs border-2 border-gray-400 "
                                defaultValue={plots?.ins_possession_Amount as string}
                                placeholder="Rs."
                                onChange={(e) => {
                                    setIns_possession_Amount(Number(e.target.value))
                                    console.log(e.target.value)
                                }}
                            />
                            <div className="m-4">
                                {Number(ins_possession_Amount).toLocaleString()}
                            </div>
                        </div>
                    </div>

                    <div className="">
                        <label
                            htmlFor="ins-period"
                            className="block mb-2 text-sm font-medium"
                        >
                            Installment Period (Month):
                        </label>
                        <div className="flex">
                            <Input
                                type="text"
                                id="ins-period"
                                name="ins-period"
                                className="input input-bordered w-full max-w-xs border-2 border-gray-400 "
                                defaultValue={plots?.ins_period as string}
                                placeholder=""
                                onChange={(e) => {
                                    setIns_Period(Number(e.target.value))
                                    console.log(e.target.value)
                                }}
                            />
                            <div className="m-4">
                                {Number(ins_period).toLocaleString()}
                            </div>
                        </div>
                    </div>
                </>

            }



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

        </form >
    )
}

