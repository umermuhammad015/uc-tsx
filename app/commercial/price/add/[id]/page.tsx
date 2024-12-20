"use client";

import * as React from "react"
import prisma from "@/app/db";
import { useToast } from "@/components/ui/use-toast"
import Link from "next/link";
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useCallback, useEffect, useState } from "react";
import { Button } from "@/components/ui/button"
import FetchSociety from "@/app/societies/components/FatchSociety";
import createPrice from "@/app/actions/createPrice";
import AddPriceButton from "@/app/commercial/components/AddPriceButton";
import AddPrice from "@/app/commercial/components/AddPrice";
import { Toaster } from "@/components/ui/toaster";
type Props = {
    params: { id: number }
    // searchParams: { [key: string]: string | string[] | undefined }
}

// export const revalidate = 1 // revalidate at most every hour

export default function PriceAddPage({ params }: Props) {

    console.log("hi")

    // const [date, setDate] = useState<Date>()
    const { toast } = useToast()
    // const [current_society, setCurrent_society] = useState<any>([]);

    // const [pressAdd, setPress_Add] = useState<Number>(0);

    const [isAdding, setIsAdding] = useState(false);

    const [price, setPrice] = useState(0);
    const [plot_size, setPlot_size] = useState<any>();
    const [apartment_size, setApartment_size] = useState<any>();
    const [building_size, setBuilding_size] = useState<any>();
    // const [apartment_size_ft, setApartment_size_ft] = useState<any>();
    const [shop_size, setShop_size] = useState<any>();
    const [office_size, setOffice_size] = useState<any>();
    const [warehouse_size, setWarehouse_size] = useState<any>();
    const [total_floor, setTotal_floor] = useState<any>();
    const [building_sq, setBuilding_sq] = useState<any>();
    const [total_bed, setTotal_bed] = useState<any>();
    const [rent, setRent] = useState(0);
    const [down_payment, setDown_payment] = useState(0);
    const [total_price, setTotal_price] = useState(0);
    const [possession_amount, setpossession_Amount] = useState(0);
    const [installment_period, setInstallment_period] = useState(0);
    const [entryDate, setEntryDate] = useState<string>((new Date).toISOString().split('T')[0]);
    const [remarks, setRemarks] = useState<any>("");

    const [property_type, setProperty_type] = useState("Commercial Plot");

    const [payment_mode, setPayment_mode] = useState("Lumpsum Payment");

    const insertPrice = async () => {

        try {

            setIsAdding(true)

            // console.log("trying")
            // console.log(params.id)

            const add_price_output = await AddPrice(entryDate, params.id, price, plot_size, property_type,
                apartment_size, warehouse_size, building_size, shop_size, payment_mode, office_size, total_floor, total_bed,
                building_sq, rent, down_payment, total_price, possession_amount, installment_period, remarks)



            toast({
                className: "bg-green-600 rounded-lg",
                // title: "Add Price",
                description: "Commercial added successfully ",

            })



            setProperty_type("")
            setPlot_size("")
            setBuilding_size("")
            setTotal_floor("")
            setBuilding_sq("")
            setShop_size("")
            setOffice_size("")
            setWarehouse_size("")
            setApartment_size("")
            setTotal_bed("")
            setPayment_mode("")
            setPrice(0)
            setRent(0)
            setTotal_price(0)
            setInstallment_period(0)
            setDown_payment(0)
            setpossession_Amount(0)
            setRemarks("")







        } catch (error) {

            console.error('Error addign plot:', error);

        } finally {
            setIsAdding(false)
        }

    };

    return (
        <>
            <div className="text-lg">Price Information</div>
            <div className="">


                <form action={createPrice}>

                    <div className="p-4 container border-2 ">

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

                        {/*Date */}

                        <div className="relative max-w-sm mt-4">
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
                                value={property_type}
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
                                        value={plot_size}
                                        className="select w-full text-sm pl-2 h-10 max-w-xs border-2 rounded border-gray-400 bg-background"
                                        onChange={(e) => setPlot_size(e.target.value)}
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
                                        <option value="7,000">7,000</option>
                                        <option value="8,000">8,000</option>
                                        <option value="9,000">9,000</option>
                                        <option value="10,000">10,000</option>
                                        <option value="11,000">11,000</option>
                                        <option value="12,000">12,000</option>
                                        <option value="13,000">13,000</option>
                                        <option value="14,000">14,000</option>
                                        <option value="15,000">15,000</option>
                                        <option value="16,000">16,000</option>
                                        <option value="17,000">17,000</option>
                                        <option value="18,000">18,000</option>


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
                                        value={building_size}
                                        className="select  w-full text-sm pl-2 h-10 max-w-xs border-2 rounded border-gray-400 bg-background"
                                        onChange={(e) => setBuilding_size(e.target.value)}
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
                                        <option value="7,000">7,000</option>
                                        <option value="8,000">8,000</option>
                                        <option value="9,000">9,000</option>
                                        <option value="10,000">10,000</option>
                                        <option value="11,000">11,000</option>
                                        <option value="12,000">12,000</option>
                                        <option value="13,000">13,000</option>
                                        <option value="14,000">14,000</option>
                                        <option value="15,000">15,000</option>
                                        <option value="16,000">16,000</option>
                                        <option value="17,000">17,000</option>
                                        <option value="18,000">18,000</option>
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
                                        value={total_floor}
                                        className="input input-bordered w-full max-w-xs border-2 border-gray-400 "
                                        onChange={(e) => setTotal_floor(e.target.value)}
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
                                        value={building_sq}
                                        className="input input-bordered w-full max-w-xs border-2 border-gray-400 "
                                        onChange={(e) => setBuilding_sq(e.target.value)}
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
                                        value={shop_size}
                                        className="input input-bordered w-full max-w-xs border-2 border-gray-400 "
                                        onChange={(e) => setShop_size(e.target.value)}
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
                                        value={office_size}
                                        className="input input-bordered w-full max-w-xs border-2 border-gray-400 "
                                        onChange={(e) => setOffice_size(e.target.value)}
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
                                        value={apartment_size}
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
                                        value={total_bed}
                                        className="input input-bordered w-full max-w-xs border-2 border-gray-400 "
                                        onChange={(e) => setTotal_bed(e.target.value)}
                                        placeholder=""
                                    />
                                </div>
                            </>

                        }

                        {/* COMMERCIAL PLOT  */}
                        {
                            property_type === "Warehouse" &&
                            <>
                                <div className="mt-4">
                                    <label
                                        htmlFor="warehouse-size"
                                        className="block mb-2 text-sm font-medium"
                                    >
                                        Property Size (Sq. Yards):
                                    </label>
                                    <select
                                        id="warehouse-size"
                                        name="warehouse-size"
                                        value={warehouse_size}
                                        className="select w-full text-sm pl-2 h-10 max-w-xs border-2 rounded border-gray-400 bg-background"
                                        onChange={(e) => setWarehouse_size(e.target.value)}
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
                                        <option value="7,000">7,000</option>
                                        <option value="8,000">8,000</option>
                                        <option value="9,000">9,000</option>
                                        <option value="10,000">10,000</option>
                                        <option value="11,000">11,000</option>
                                        <option value="12,000">12,000</option>
                                        <option value="13,000">13,000</option>
                                        <option value="14,000">14,000</option>
                                        <option value="15,000">15,000</option>
                                        <option value="16,000">16,000</option>
                                        <option value="17,000">17,000</option>
                                        <option value="18,000">18,000</option>
                                    </select>
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
                                value={payment_mode}
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
                                    type="text"
                                    id="price"
                                    name="price"
                                    value={price}
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
                                    type="text"
                                    id="rent"
                                    name="rent"
                                    value={rent}
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
                                        Instalments Amount:
                                    </label>
                                    <div className="flex">
                                        <Input
                                            type="text"
                                            id="total-price"
                                            name="total-price"
                                            value={total_price}
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
                                            type="text"
                                            id="installment-period"
                                            name="installment-period"
                                            value={installment_period}
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
                                            type="text"
                                            id="down-payment"
                                            name="down-payment"
                                            value={down_payment}
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
                                            type="text"
                                            id="possession-amount"
                                            name="possession-amount"
                                            value={possession_amount}
                                            className="input input-bordered w-full max-w-xs border-2 border-gray-400 "
                                            placeholder="Rs."
                                            onChange={(e) => {
                                                setpossession_Amount(Number(e.target.value))
                                                console.log(e.target.value)
                                            }}
                                        />
                                        <div className="m-4">
                                            {Number(possession_amount).toLocaleString()}
                                        </div>
                                    </div>
                                </div>
                            </>

                        }






                        {/* Plot Remarks  */}
                        <div className="mt-4">
                            <label htmlFor="message" className="block mb-2 text-sm font-medium">
                                Remarks
                            </label>
                            <Textarea
                                id="remarks"
                                name="remarks"
                                value={remarks}
                                className="textarea w-full border-2 border-gray-400 "
                                onChange={(e) => setRemarks(e.target.value)}
                                placeholder="Leave a comment..."
                            ></Textarea>
                        </div>




                    </div>
                    {/* Submit button */}
                    <div className="flex gap-6 justify-center mt-3 mb-2">
                        <AddPriceButton />
                        {/* <Link href="/buildings" className="flex justify-center items-center border border-black px-2 py-1 rounded-xl bg-white text-black hover:bg-red-600 hover:text-white capitalize">Cancel</Link> */}

                        <Button variant='outline'
                            onClick={async (e) => {

                                e.preventDefault();
                                insertPrice()

                            }}

                        >
                            {isAdding ? "Saving...." : "Save and Add more"}

                        </Button>
                        <Toaster />
                        <Button asChild className="bg-transparent text-primary hover:bg-primary-foreground">
                            <Link href="/commercial" >Cancel</Link>
                        </Button>



                    </div>
                </form>



            </div >


        </>

    )
}