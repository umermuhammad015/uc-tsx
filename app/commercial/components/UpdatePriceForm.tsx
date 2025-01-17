"use client"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"
import Link from 'next/link'
import UpdatePrice from "./UpdatePrice"
import UpdatePriceButton from "./UpdatePriceButton"
import { Price } from "@prisma/client"

// type PlotProps = {
//     id: number,

// }

// type Props = {
//     plots: { id: number }
// }
// type Props = {
//     params: { id: number }
//     // searchParams: { [key: string]: string | string[] | undefined }
// }
type UpdatePriceFormProps = {
    price: Price | null; // Use the type defined in the Prisma schema
};
export default function UpdatePlotForm({ price }: UpdatePriceFormProps) {

    const [property_type, setProperty_type] = useState(price?.property_type);
    const [payment_mode, setPayment_mode] = useState(price?.payment_mode);
    const [prices, setPrices] = useState(price?.price);
    const [rent, setRent] = useState(price?.rent);
    const [down_payment, setDown_payment] = useState(price?.down_payment);
    const [total_price, setTotal_price] = useState(price?.total_price);
    const [possession_amount, setpossession_Amount] = useState(price?.possession_amount);
    const [installment_period, setInstallment_period] = useState(price?.installment_period);



    return (
        <form action={UpdatePrice}>


            <div className="mt-4 ">
                <label
                    htmlFor="price-id"
                    className="block mb-2 text-sm font-medium "
                >
                    Plot ID:
                </label>
                <Input
                    type="text"
                    id="price-id"
                    name="price-id"
                    className="input input-bordered  w-full max-w-xs border-2 border-gray-400 cursor-not-allowed disabled:bg-gray-200"
                    placeholder=""
                    onChange={() => (price)}
                    value={price?.id}

                />
            </div>


            <div className="mt-4 ">
                <label
                    htmlFor="commercial-id"
                    className="block mb-2 text-sm font-medium "
                >
                    Commercial ID:
                </label>
                <Input
                    type="text"
                    id="commercial-id"
                    name="commercial-id"
                    className="input input-bordered  w-full max-w-xs border-2 border-gray-400 cursor-not-allowed disabled:bg-gray-200"
                    placeholder=""
                    onChange={() => (price)}
                    value={price?.commercial_id}

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
                    // defaultValue={(new Date).toISOString().split('T')[0]}
                    defaultValue={price?.date as string}
                    // value="12/26/2024"
                    className="max-w-xs border-gray-400  border-2 text-sm rounded focus:ring-blue-500  block w-full p-2.5"

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
                    className="select  w-full text-sm pl-2 h-10 max-w-xs border-2 rounded border-gray-400 bg-background"
                    onChange={(e) => setProperty_type(e.target.value)}
                    defaultValue={price?.property_type as string}
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
                            defaultValue={price?.plot_size as string}
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
                            defaultValue={price?.building_size as string}
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
                            defaultValue={price?.total_floor as string}
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
                            defaultValue={price?.building_size_sq as string}
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
                            defaultValue={price?.shop_size as string}
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
                            defaultValue={price?.office_size as string}
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
                            defaultValue={price?.apartment_size as string}
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
                            defaultValue={price?.total_bed as string}
                            placeholder=""
                        />
                    </div>
                </>

            }

            {/* WAREHOUSE  */}
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
                            className="select w-full text-sm pl-2 h-10 max-w-xs border-2 rounded border-gray-400 bg-background"
                            defaultValue={price?.warehouse_size as string}
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
                    defaultValue={price?.payment_mode as string}
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
                            setPrices(Number(e.target.value))
                            // console.log(e.target.value)
                        }}
                        type="text"
                        id="price"
                        name="price"
                        className="input input-bordered w-full max-w-xs border-2 border-gray-400 "
                        defaultValue={price?.price as number}
                        placeholder="Rs."
                    />
                    <div className="m-4">
                        {Number(prices).toLocaleString()}
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
                            // console.log(e.target.value)
                        }}
                        type="text"
                        id="rent"
                        name="rent"
                        className="input input-bordered w-full max-w-xs border-2 border-gray-400 "
                        defaultValue={price?.rent as number}
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
                                className="input input-bordered w-full max-w-xs border-2 border-gray-400 "
                                placeholder="Rs."
                                defaultValue={price?.total_price as number}
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
                            Installment Period (Month):
                        </label>
                        <div className="flex">
                            <Input
                                type="text"
                                id="installment-period"
                                name="installment-period"
                                className="input input-bordered w-full max-w-xs border-2 border-gray-400 "
                                defaultValue={price?.installment_period as number}
                                placeholder="Rs."
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
                                className="input input-bordered w-full max-w-xs border-2 border-gray-400 "
                                placeholder="Rs."
                                defaultValue={price?.down_payment as number}
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
                                className="input input-bordered w-full max-w-xs border-2 border-gray-400 "
                                placeholder="Rs."
                                defaultValue={price?.possession_amount as number}
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
                    className="textarea w-full border-2 border-gray-400 "
                    defaultValue={price?.remarks as string}
                    placeholder="Leave a comment..."
                ></Textarea>
            </div>

            {/* Submit button */}
            <div className="flex gap-6 justify-center mt-3 mb-2">
                <UpdatePriceButton />
                {/* <Link href="/buildings" className="flex justify-center items-center border border-black px-2 py-1 rounded-xl bg-white text-black hover:bg-red-600 hover:text-white capitalize">Cancel</Link> */}

                <Button asChild className="bg-transparent text-primary hover:bg-primary-foreground">
                    <Link href="/commercial" >Cancel</Link>
                </Button>

            </div>




        </form>

    )
}

