"use client";

import * as React from "react"
import prisma from "@/app/db";
import Link from "next/link";
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useCallback, useEffect, useState } from "react";
import { Button } from "@/components/ui/button"
import FetchSociety from "@/app/societies/components/FatchSociety";
import createPrice from "@/app/actions/createPrice";
import AddPriceButton from "@/app/commercial/components/AddPriceButton";
type Props = {
    params: { id: number }
    // searchParams: { [key: string]: string | string[] | undefined }
}

// export const revalidate = 1 // revalidate at most every hour

export default function PriceAddPage({ params }: Props) {

    console.log("hi")

    // const [date, setDate] = useState<Date>()

    // const [current_society, setCurrent_society] = useState<any>([]);

    // const [pressAdd, setPress_Add] = useState<Number>(0);

    // const [isAdding, setIsAdding] = useState("no");

    const [price, setPrice] = useState(0);
    // const [property_size, setProperty_size] = useState<any>();
    const [apartment_size, setApartment_size] = useState<any>();
    // const [apartment_size_ft, setApartment_size_ft] = useState<any>();
    // const [shop_size, setShop_size] = useState<any>();
    // const [office_size, setOffice_size] = useState<any>();
    const [rent, setRent] = useState(0);
    const [down_payment, setDown_payment] = useState(0);
    const [total_price, setTotal_price] = useState(0);
    const [possession_Amount, setpossession_Amount] = useState(0);
    const [installment_period, setInstallment_period] = useState(0);
    const [entryDate, setEntryDate] = useState<string>((new Date).toISOString().split('T')[0]);
    const [remarks, setRemarks] = useState<any>("");

    const [property_type, setProperty_type] = useState("Commercial Plot");

    const [payment_mode, setPayment_mode] = useState("Lumpsum Payment");

    // useEffect(() => {

    //     console.log("use effect called")

    //     const getSocietyData = async () => {

    //         try {

    //             console.log("trying")
    //             console.log(params.id)

    //             const society_data = await FetchSociety(params.id)

    //             console.log("Current_society_data")
    //             console.log(society_data)


    //             setCurrent_society(society_data)

    //         } catch (error) {

    //             console.error('Error fetching society data:', error);

    //             // setIsAdding(!isAdding)
    //         }
    //     };

    //     getSocietyData();

    // }, []);



    // useEffect(() => {

    //     const insertPlot = async () => {

    //         try {

    //             console.log("trying")
    //             console.log(params.id)

    //             const add_plot_output = await AddPlot(entryDate, params.id, plotType, property_size,
    //                 apartment_size, apartment_size_ft, shop_size, payment_mode, office_size,
    //                 ins_down_payment, ins_total_price, ins_period, ins_possession_Amount, remarks)

    //             console.log("Plot added")
    //             console.log(add_plot_output)

    //         } catch (error) {

    //             console.error('Error addign plot:', error);

    //             // setIsAdding(!isAdding)
    //         }
    //     };

    //     insertPlot();


    // }, [pressAdd]);

    // function handleAddMoreClick() {

    //     console.log("plot inserted function running")





    //     console.log("Exitted")

    // }

    return (
        <>
            <div className="text-lg">Price Information</div>
            <div className="container border-2 ">

                <div className="m-4">
                    <form action={createPrice}>



                        <div className="mt-4 ">
                            <label
                                htmlFor="commercial-id"
                                className="block mb-2 text-sm font-medium "
                            >
                                Society ID:
                            </label>
                            <Input
                                type="text"
                                id="commercial-id"
                                name="commercial-id"
                                className="input input-bordered  w-full max-w-xs border-2 border-gray-400 cursor-not-allowed disabled:bg-gray-200"
                                placeholder=""
                                value={params?.id}

                            />
                        </div>

                        {/* plot type */}
                        <div className="mt-4">
                            <label
                                htmlFor="property-type"
                                className="block mb-2 text-sm font-medium"
                            >
                                Property Type:
                            </label>


                            <select
                                id="property-type"
                                name="property-type"
                                className="select  w-full text-sm pl-2 h-10 max-w-xs border-2 rounded border-gray-400 bg-background"
                                onChange={(e) => setProperty_type(e.target.value)}
                            >
                                <option value="">Select Property Type</option>
                                <option value="Commercial Plot">Commercial Plot</option>
                                <option value="Commercial Building">Commercial Building</option>
                                <option value="Shops">Shops</option>
                                <option value="Offices">Offices</option>
                                <option value="Apartments">Apartments</option>
                                <option value="Warehouse">Warehouse</option>
                            </select>


                        </div>


                        {/* COMMERCIAL PLOT  */}
                        {
                            property_type === "Commercial Plot" &&
                            <>
                                <div className="mt-4">
                                    <label
                                        htmlFor="plot-size"
                                        className="block mb-2 text-sm font-medium"
                                    >
                                        Property Size (Sq. Yards):
                                    </label>
                                    <select
                                        id="plot-size"
                                        name="plot-size"
                                        className="select w-full text-sm pl-2 h-10 max-w-xs border-2 rounded border-gray-400 bg-background"

                                    >
                                        <option value="">All</option>
                                        <option value="50">50</option>
                                        <option value="75">75</option>
                                        <option value="100">100</option>
                                        <option value="125">125</option>
                                        <option value="200">200</option>
                                        <option value="250">250</option>
                                        <option value="300">300</option>
                                        <option value="400">400</option>
                                        <option value="500">500</option>
                                        <option value="800">800</option>
                                        <option value="1,000">1,000</option>
                                        <option value="1,500">1,500</option>
                                        <option value="2,000">2,000</option>
                                        <option value="2,500">2,500</option>
                                        <option value="3,000">3,000</option>
                                        <option value="3,500">3,500</option>
                                        <option value="4,000">4,000</option>
                                        <option value="5,000">5,000</option>
                                        <option value="6,000">6,000</option>
                                    </select>
                                </div>
                            </>

                        }

                        {/* Commercial Building  */}
                        {
                            property_type === "Commercial Building" &&
                            <>
                                <div className="mt-4">
                                    <label
                                        htmlFor="building-size"
                                        className="block mb-2 text-sm font-medium"
                                    >
                                        Property Size (Sq. Ft.):
                                    </label>
                                    <select
                                        id="building-size"
                                        name="building-size"
                                        className="select  w-full text-sm pl-2 h-10 max-w-xs border-2 rounded border-gray-400 bg-background"
                                    >
                                        <option value="">All</option>
                                        <option value="50">50</option>
                                        <option value="75">75</option>
                                        <option value="100">100</option>
                                        <option value="125">125</option>
                                        <option value="200">200</option>
                                        <option value="250">250</option>
                                        <option value="300">300</option>
                                        <option value="400">400</option>
                                        <option value="500">500</option>
                                        <option value="800">800</option>
                                        <option value="1,000">1,000</option>
                                        <option value="1,500">1,500</option>
                                        <option value="2,000">2,000</option>
                                        <option value="2,500">2,500</option>
                                        <option value="3,000">3,000</option>
                                        <option value="3,500">3,500</option>
                                        <option value="4,000">4,000</option>
                                        <option value="5,000">5,000</option>
                                        <option value="6,000">6,000</option>
                                    </select>

                                </div>

                                <div className="mt-6">
                                    <label
                                        htmlFor="total-floor"
                                        className="block mb-2 text-sm font-medium"
                                    >
                                        No. of Floors:
                                    </label>
                                    <Input
                                        type="text"
                                        id="total-floor"
                                        name="total-floor"
                                        className="input input-bordered w-full max-w-xs border-2 border-gray-400 "
                                        placeholder=""
                                    />
                                </div>

                                <div className="mt-6">
                                    <label
                                        htmlFor="building-size-sq"
                                        className="block mb-2 text-sm font-medium"
                                    >
                                        Building Size (Sq.Ft.):
                                    </label>
                                    <Input
                                        type="text"
                                        id="building-size-sq"
                                        name="building-size-sq"
                                        className="input input-bordered w-full max-w-xs border-2 border-gray-400 "
                                        placeholder=""
                                    />
                                </div>
                            </>

                        }

                        {/* Shop size  */}
                        {
                            property_type === "Shops" &&
                            <>
                                <div className="mt-6">
                                    <label
                                        htmlFor="shop-size"
                                        className="block mb-2 text-sm font-medium"
                                    >
                                        Shop Size (Sq. Ft):
                                    </label>
                                    <Input
                                        type="text"
                                        id="shop-size"
                                        name="shop-size"
                                        className="input input-bordered w-full max-w-xs border-2 border-gray-400 "
                                        placeholder=""
                                    />
                                </div>
                            </>

                        }

                        {/* office size  */}
                        {
                            property_type === "Offices" &&
                            <>
                                <div className="mt-6">
                                    <label
                                        htmlFor="office-size"
                                        className="block mb-2 text-sm font-medium"
                                    >
                                        Office Size (Sq. Ft):
                                    </label>
                                    <Input
                                        type="text"
                                        id="office-size"
                                        name="office-size"
                                        className="input input-bordered w-full max-w-xs border-2 border-gray-400 "
                                        placeholder=""
                                    />
                                </div>
                            </>

                        }

                        {/* apartment size  */}
                        {
                            property_type === "Apartments" &&
                            <>
                                <div className="mt-6">
                                    <label
                                        htmlFor="apartment-size"
                                        className="block mb-2 text-sm font-medium"
                                    >
                                        Apartment Size (Sq. Ft):
                                    </label>
                                    <Input
                                        type="text"
                                        id="apartment-size"
                                        name="apartment-size"
                                        className="input input-bordered w-full max-w-xs border-2 border-gray-400 "
                                        placeholder=""
                                        onChange={(e) => setApartment_size(e.target.value)}
                                    />
                                </div>

                                <div className="mt-6">
                                    <label
                                        htmlFor="total-bed"
                                        className="block mb-2 text-sm font-medium"
                                    >
                                        No. of Beds:
                                    </label>
                                    <Input
                                        type="text"
                                        id="total-bed"
                                        name="total-bed"
                                        className="input input-bordered w-full max-w-xs border-2 border-gray-400 "
                                        placeholder=""
                                    />
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
                                onChange={(e) => setPayment_mode(e.target.value)}
                            >
                                <option value="Lumpsum Payment">Lumpsum Payment</option>
                                <option value="Instalments">Instalments</option>
                            </select>
                        </div>

                        {/*price  */}
                        <div className="mt-4">
                            <label
                                htmlFor="price"
                                className="block mb-2 text-sm font-medium"
                            >
                                Total Price:
                            </label>
                            <div className="flex">
                                <Input
                                    onChange={(e) => {
                                        setPrice(Number(e.target.value))
                                        // console.log(e.target.value)
                                    }}
                                    type="number"
                                    id="price"
                                    name="price"
                                    className="input input-bordered w-full max-w-xs border-2 border-gray-400 "
                                    placeholder="Rs."
                                />
                                <div className="m-4">
                                    {Number(price).toLocaleString()}
                                </div>
                            </div>
                        </div>

                        {/* rent  */}
                        <div className="mt-4">
                            <label
                                htmlFor="rent"
                                className="block mb-2 text-sm font-medium"
                            >
                                Monthly Rent:
                            </label>
                            <div className="flex">
                                <Input
                                    onChange={(e) => {
                                        setRent(Number(e.target.value))
                                        console.log(e.target.value)
                                    }}
                                    type="number"
                                    id="rent"
                                    name="rent"
                                    className="input input-bordered w-full max-w-xs border-2 border-gray-400 "
                                    placeholder="Rs."
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

                                <div className="mt-4">
                                    <label
                                        htmlFor="total-price"
                                        className="block mb-2 text-sm font-medium"
                                    >
                                        Total Price (Rs.):
                                    </label>
                                    <div className="flex">
                                        <Input
                                            type="number"
                                            id="total-price"
                                            name="total-price"
                                            className="input input-bordered w-full max-w-xs border-2 border-gray-400 "
                                            placeholder="Rs."
                                            onChange={(e) => {
                                                setTotal_price(Number(e.target.value))
                                                console.log(e.target.value)
                                            }}
                                        />
                                        <div className="m-4">
                                            {Number(total_price).toLocaleString()}
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-4">
                                    <label
                                        htmlFor="installment-period"
                                        className="block mb-2 text-sm font-medium"
                                    >
                                        Installment Period:
                                    </label>
                                    <div className="flex">
                                        <Input
                                            type="number"
                                            id="installment-period"
                                            name="installment-period"
                                            className="input input-bordered w-full max-w-xs border-2 border-gray-400 "

                                            onChange={(e) => {
                                                setInstallment_period(Number(e.target.value))
                                                console.log(e.target.value)
                                            }}
                                        />
                                        <div className="m-4">
                                            {Number(installment_period).toLocaleString()}
                                        </div>
                                    </div>
                                </div>


                                <div className="mt-4">
                                    <label
                                        htmlFor="down-payment"
                                        className="block mb-2 text-sm font-medium"
                                    >
                                        Down Payment:
                                    </label>
                                    <div className="flex">
                                        <Input
                                            type="number"
                                            id="down-payment"
                                            name="down-payment"
                                            className="input input-bordered w-full max-w-xs border-2 border-gray-400 "
                                            placeholder="Rs."
                                            onChange={(e) => {
                                                setDown_payment(Number(e.target.value))
                                                console.log(e.target.value)
                                            }}
                                        />
                                        <div className="m-4">
                                            {Number(down_payment).toLocaleString()}
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-4">
                                    <label
                                        htmlFor="possession-amount"
                                        className="block mb-2 text-sm font-medium"
                                    >
                                        Possession Amount:
                                    </label>
                                    <div className="flex">
                                        <Input
                                            type="number"
                                            id="possession-amount"
                                            name="possession-amount"
                                            className="input input-bordered w-full max-w-xs border-2 border-gray-400 "
                                            placeholder="Rs."
                                            onChange={(e) => {
                                                setpossession_Amount(Number(e.target.value))
                                                console.log(e.target.value)
                                            }}
                                        />
                                        <div className="m-4">
                                            {Number(possession_Amount).toLocaleString()}
                                        </div>
                                    </div>
                                </div>
                            </>

                        }





                        {/*Date */}

                        <div className="relative max-w-sm">
                            <label
                                htmlFor="surveyor-name"
                                className="block mb-2 text-sm font-medium "
                            >
                                Date:
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
                                id="date"
                                name="date"
                                // defaultValue="2024-12-13"
                                defaultValue={(new Date).toISOString().split('T')[0]}
                                // value="12/26/2024"
                                className="max-w-xs border-gray-400  border-2 text-sm rounded focus:ring-blue-500  block w-full p-2.5"
                                onChange={(e) => setEntryDate(e.target.value)}
                                placeholder="date"
                            />
                        </div>

                        <button onClick={() => {
                            console.log(apartment_size)
                        }}>Check</button>

                        {/* Plot Remarks  */}
                        <div className="mt-4">
                            <label htmlFor="message" className="block mb-2 text-sm font-medium">
                                Remarks
                            </label>
                            <Textarea
                                id="remarks"
                                name="remarks"
                                className="textarea w-full border-2 border-gray-400 "
                                onChange={(e) => setRemarks(e.target.value)}
                                placeholder="Leave a comment..."
                            ></Textarea>
                        </div>




                    </form>

                </div>

            </div>

            {/* Submit button */}
            <div className="flex gap-6 justify-center mt-3 mb-2">
                <AddPriceButton />
                {/* <Link href="/buildings" className="flex justify-center items-center border border-black px-2 py-1 rounded-xl bg-white text-black hover:bg-red-600 hover:text-white capitalize">Cancel</Link> */}

                {/* Add more */}

                <Button asChild className="bg-transparent text-primary hover:bg-primary-foreground">
                    <Link href="/commercial" >Cancel</Link>
                </Button>



            </div>
        </>

    )
}