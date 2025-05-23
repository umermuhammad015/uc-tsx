"use client";

import * as React from "react"
import { useToast } from "@/hooks/use-toast"
import Link from "next/link";
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button"
import AddPrice from "@/app/commercial/components/AddPrice";
import { Toaster } from "@/components/ui/toaster";
import { z } from "zod";
import { useRouter } from "next/navigation";
import FetchCommercial from "./FetchCommercial";
import { Commercial, Price } from "@prisma/client";

// const stringSchema = z.string().min(1, "Address is required").max(255, "Address cannot exceed 255 characters");
const numberSchema = z.number().nonnegative("Value must be a positive number").nullable();
const insallmentSchema = z
    .number()
    .int()
    .min(1, "Year must be no earlier than 1950")
    .max(100, "Year must be no later than 2024")
    .nullable();


export default function AddPriceForm({ commercial_id }: { commercial_id: number }) {

    const router = useRouter(); // Initialize the router
    const [isAdding, setIsAdding] = useState(false);
    const [isSaving, setIsSaving] = useState(false);
    const { toast } = useToast()

    const [current_name, setCurrent_name] = useState<Commercial | null>();
    const [plot_size, setPlot_size] = useState<string>();
    const [apartment_size, setApartment_size] = useState("");
    const [building_size, setBuilding_size] = useState<string>();
    // const [apartment_size_ft, setApartment_size_ft] = useState<any>();
    const [shop_size, setShop_size] = useState("");
    const [office_size, setOffice_size] = useState("");
    const [warehouse_size, setWarehouse_size] = useState<string>();
    const [total_floor, setTotal_floor] = useState("");
    const [building_sq, setBuilding_sq] = useState("");
    const [total_bed, setTotal_bed] = useState("");
    const [price, setPrice] = useState("");
    const [rent, setRent] = useState("");
    const [down_payment, setDown_payment] = useState("");
    const [total_price, setTotal_price] = useState("");
    const [possession_amount, setpossession_Amount] = useState("");
    const [installment_period, setInstallment_period] = useState("");
    const [entryDate, setEntryDate] = useState<string>((new Date).toISOString().split('T')[0]);
    const [remarks, setRemarks] = useState<string>("");

    const [property_type, setProperty_type] = useState<string>("");

    const [payment_mode, setPayment_mode] = useState<string>("");

    const handleSubmit = async () => {

        // console.log("1");
        // console.log("isAdding");
        // console.log(isAdding);

        const allFields = [


            { name: "total-floor", value: total_floor, schema: numberSchema },
            { name: "total-bed", value: total_bed, schema: numberSchema },
            { name: "building-size-sq", value: building_sq, schema: numberSchema },
            { name: "shop-size", value: shop_size, schema: numberSchema },
            { name: "office-size", value: office_size, schema: numberSchema },
            { name: "apartment-size", value: apartment_size, schema: numberSchema },
            { name: "price", value: price, schema: numberSchema },
            { name: "rent", value: rent, schema: numberSchema },
            { name: "total-price", value: total_price, schema: numberSchema },
            { name: "installment-period", value: installment_period, schema: insallmentSchema },
            { name: "down-payment", value: down_payment, schema: numberSchema },
            { name: "possession-amount", value: possession_amount, schema: numberSchema },
        ];

        // console.log("2");


        // const newErrors = {};
        let isValid = true;
        for (const field of allFields) {
            const result = field.schema.safeParse(field.value === "" ? null : Number(field.value));
            console.log(result)
            // const result = field.schema.safeParse(field.value);
            if (!result.success) {
                isValid = false;
                // newErrors[field.name] = result.error.errors[0].message;
            }
        }

        // console.log("3");


        if (!isValid) {
            // setErrors(newErrors);
            console.log("Not valid inputs")
            setIsAdding(false)
            setIsSaving(false)
            return false;
        }

        // console.log("Validation passed");

        try {

            const price_object = {
                date: entryDate,
                commercial_id: Number(commercial_id) as number,
                property_type: property_type as string,
                plot_size: plot_size as string,
                building_size: building_size as string,
                total_floor: isNaN(Number(total_floor)) ? null : Number(total_floor),
                building_size_sq: isNaN(Number(building_sq)) ? null : Number(building_sq),
                shop_size: isNaN(Number(shop_size)) ? null : Number(shop_size),
                office_size: isNaN(Number(apartment_size)) ? null : Number(office_size),
                apartment_size: isNaN(Number(apartment_size)) ? null : Number(apartment_size),
                warehouse_size: warehouse_size as string,
                total_bed: isNaN(Number(total_bed)) ? null : Number(total_bed),
                payment_mode: payment_mode as string,
                price: isNaN(Number(price)) ? null : Number(price),
                // rent: rent,
                rent: isNaN(Number(rent)) ? null : Number(rent),
                total_price: isNaN(Number(total_price)) ? null : Number(total_price),
                installment_period: isNaN(Number(installment_period)) ? null : Number(installment_period),
                down_payment: isNaN(Number(down_payment)) ? null : Number(down_payment),
                possession_amount: isNaN(Number(possession_amount)) ? null : Number(possession_amount),
                remarks: remarks as string,
            }

            // console.log("plot_object")
            // console.log(price)

            const added_price_id = await AddPrice(price_object as Price)

            console.log("add_price_output")
            console.log(added_price_id)


            // router.push("/commercial/" + added_price_id); // Replace with your desired route

        } catch (error) {

            console.error('Error submitting plot:', error);

        } finally {
            // setIsAdding(false)
            setIsSaving(false)


        }

        return true;

    };

    useEffect(() => {

        // console.log("use effect called")


        const getCommercialData = async () => {

            try {

                // console.log("trying")
                // console.log(params.id)

                const commercial_data = await FetchCommercial(commercial_id)

                // console.log("Current building data")
                // console.log(commercial_data)


                setCurrent_name(commercial_data)

            } catch (error) {

                console.error('Error fetching society data:', error);

                // setIsAdding(!isAdding)
            }
        };


        getCommercialData();



    }, [commercial_id]);

    return (
        <>
            <div className="text-lg">Price Information</div>
            <div className="">


                <form
                    onSubmit={async (e) => {
                        e.preventDefault();

                        if (!isAdding) {  // Only proceed if currently false
                            try {
                                setIsAdding(true);
                                const result = await handleSubmit();
                                if (result) {
                                    router.push("/commercial/" + commercial_id); // Wait for navigation to complete
                                }
                                console.log(result)
                            } catch (error) {
                                console.error('Error:', error);
                                setIsAdding(false); // Reset state if there's an error
                            } finally {
                                // await router.push("/buildings/" + building_id); // Wait for navigation to complete
                            }
                        }

                    }}
                //  action={handleSubmit}
                >
                    <div className="p-4 container border-2 ">

                        <div className="">
                            <label
                                htmlFor="building-name"
                                className="block mb-2 text-sm font-medium "
                            >
                                Commercial Zone Name: <Link href={'/commercial/' + commercial_id}>{current_name?.commercial_zone_name}</Link>
                            </label>

                            {/* <Input
                                    type="text"
                                    id="building-name"
                                    name="building-name"
                                    // value={current_building?.name}
                                    defaultValue={current_building.name}
                                    // onChange={() => (current_building?.name)}
                                    className="input input-bordered dark:bg-slate-700  w-full max-w-xs border-2 bg-gray-400 border-gray-400 cursor-not-allowed disabled:bg-gray-200"
                                    placeholder=""

                                /> */}
                        </div>

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
                                value={commercial_id}
                                // defaultValue={building_id}
                                onChange={() => (commercial_id)}


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
                                value={entryDate}
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
                                required
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
                                        <option value="">Select</option>
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
                                        <option value="">Select</option>
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

                                <div className="mt-4">
                                    <label
                                        htmlFor="total-floor"
                                        className="block mb-2 text-sm font-medium"
                                    >
                                        No. of Floors:
                                    </label>
                                    <div className="flex">
                                        <Input
                                            type="text"
                                            id="total-floor"
                                            name="total-floor"
                                            value={total_floor}
                                            className="input input-bordered w-full max-w-xs border-2 border-gray-400 "
                                            onChange={(e) => setTotal_floor(e.target.value)}
                                            placeholder=""
                                        />
                                        <div className="m-4">
                                            {isNaN(Number(total_floor)) ? <span className="text-red-500 text-sm mt-1">Enter number only</span> : Number(total_floor).toLocaleString()}
                                            {/* {Number(avg_sale_price).toLocaleString()} */}
                                        </div>
                                    </div>
                                </div>

                                <div className="">
                                    <label
                                        htmlFor="building-size-sq"
                                        className="block mb-2 text-sm font-medium"
                                    >
                                        Building Size (Sq.Ft.):
                                    </label>
                                    <div className="flex">
                                        <Input
                                            type="text"
                                            id="building-size-sq"
                                            name="building-size-sq"
                                            value={building_sq}
                                            className="input input-bordered w-full max-w-xs border-2 border-gray-400 "
                                            onChange={(e) => setBuilding_sq(e.target.value)}
                                            placeholder=""
                                        />
                                        <div className="m-4">
                                            {isNaN(Number(building_sq)) ? <span className="text-red-500 text-sm mt-1">Enter number only</span> : Number(building_sq).toLocaleString()}
                                            {/* {Number(avg_sale_price).toLocaleString()} */}
                                        </div>
                                    </div>
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
                                    <div className="flex">
                                        <Input
                                            type="text"
                                            id="shop-size"
                                            name="shop-size"
                                            value={shop_size}
                                            className="input input-bordered w-full max-w-xs border-2 border-gray-400 "
                                            onChange={(e) => setShop_size(e.target.value)}
                                            placeholder=""
                                        />
                                        <div className="m-4">
                                            {isNaN(Number(shop_size)) ? <span className="text-red-500 text-sm mt-1">Enter number only</span> : Number(shop_size).toLocaleString()}
                                            {/* {Number(avg_sale_price).toLocaleString()} */}
                                        </div>
                                    </div>
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
                                    <div className="flex">
                                        <Input
                                            type="text"
                                            id="office-size"
                                            name="office-size"
                                            // value={office_size}
                                            className="input input-bordered w-full max-w-xs border-2 border-gray-400 "
                                            value={office_size}
                                            onChange={(e) => setOffice_size(e.target.value)}
                                        />
                                        <div className="m-4">
                                            {isNaN(Number(office_size)) ? <span className="text-red-500 text-sm mt-1">Enter number only</span> : Number(office_size).toLocaleString()}
                                            {/* {Number(avg_sale_price).toLocaleString()} */}
                                        </div>
                                    </div>
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
                                    <div className="flex">
                                        <Input
                                            type="text"
                                            id="apartment-size"
                                            name="apartment-size"
                                            // value={apartment_size}
                                            className="input input-bordered w-full max-w-xs border-2 border-gray-400 "
                                            placeholder=""
                                            value={apartment_size}
                                            onChange={(e) => setApartment_size(e.target.value)}
                                        />
                                        <div className="m-4">
                                            {isNaN(Number(apartment_size)) ? <span className="text-red-500 text-sm mt-1">Enter number only</span> : Number(apartment_size).toLocaleString()}
                                            {/* {Number(avg_sale_price).toLocaleString()} */}
                                        </div>
                                    </div>
                                </div>

                                <div className="">
                                    <label
                                        htmlFor="total-bed"
                                        className="block mb-2 text-sm font-medium"
                                    >
                                        No. of Beds:
                                    </label>
                                    <div className="flex">
                                        <Input
                                            type="text"
                                            id="total-bed"
                                            name="total-bed"
                                            value={total_bed}
                                            className="input input-bordered w-full max-w-xs border-2 border-gray-400 "
                                            onChange={(e) => setTotal_bed(e.target.value)}
                                            placeholder=""
                                        />
                                        <div className="m-4">
                                            {isNaN(Number(total_bed)) ? <span className="text-red-500 text-sm mt-1">Enter number only</span> : Number(total_bed).toLocaleString()}
                                            {/* {Number(avg_sale_price).toLocaleString()} */}
                                        </div>
                                    </div>
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
                                        <option value="">Select</option>
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
                        <div className="mt-2">
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
                                <option value="">Select</option>
                                <option value="Lumpsum Payment">Lumpsum Payment</option>
                                <option value="Installment">Installment</option>
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

                                    type="text"
                                    id="price"
                                    name="price"
                                    className="input input-bordered w-full max-w-xs border-2 border-gray-400 "
                                    placeholder="Rs."
                                    value={price}
                                    onChange={(e) => setPrice(e.target.value)}
                                />
                                <div className="m-4">
                                    {isNaN(Number(price)) ? <span className="text-red-500 text-sm mt-1">Enter number only</span> : Number(price).toLocaleString()}
                                    {/* {Number(avg_sale_price).toLocaleString()} */}
                                </div>
                            </div>
                        </div>



                        {/* rent  */}
                        <div className="">
                            <label
                                htmlFor="rent"
                                className="block mb-2 text-sm font-medium"
                            >
                                Monthly Rent:
                            </label>
                            <div className="flex">
                                <Input
                                    type="text"
                                    id="rent"
                                    name="rent"
                                    className="input input-bordered w-full max-w-xs border-2 border-gray-400 "
                                    placeholder="Rs."
                                    value={rent}
                                    onChange={(e) => setRent(e.target.value)}
                                />
                                <div className="m-4">
                                    {isNaN(Number(rent)) ? <span className="text-red-500 text-sm mt-1">Enter number only</span> : Number(rent).toLocaleString()}
                                    {/* {Number(avg_sale_price).toLocaleString()} */}
                                </div>
                            </div>
                        </div>

                        {/* Total Amount: */}
                        {/* Down Payment:      */}
                        {/* Possession Amount  : */}
                        {/* Instalment Period Years: */}

                        {
                            payment_mode === "Installment" &&
                            <>
                                <div className="">
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
                                            value={down_payment}
                                            onChange={(e) => setDown_payment(e.target.value)}
                                        />
                                        <div className="m-4">
                                            {isNaN(Number(down_payment)) ? <span className="text-red-500 text-sm mt-1">Enter number only</span> : Number(down_payment).toLocaleString()}
                                            {/* {Number(avg_sale_price).toLocaleString()} */}
                                        </div>
                                    </div>
                                </div>

                                <div className="">
                                    <label
                                        htmlFor="total-price"
                                        className="block mb-2 text-sm font-medium"
                                    >
                                        Installment Amount:
                                    </label>
                                    <div className="flex">
                                        <Input
                                            type="text"
                                            id="total-price"
                                            name="total-price"

                                            className="input input-bordered w-full max-w-xs border-2 border-gray-400 "
                                            placeholder="Rs."
                                            value={total_price}
                                            onChange={(e) => setTotal_price(e.target.value)}
                                        />
                                        <div className="m-4">
                                            {isNaN(Number(total_price)) ? <span className="text-red-500 text-sm mt-1">Enter number only</span> : Number(total_price).toLocaleString()}
                                            {/* {Number(avg_sale_price).toLocaleString()} */}
                                        </div>
                                    </div>
                                </div>
                                <div className="">
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
                                            value={possession_amount}
                                            onChange={(e) => setpossession_Amount(e.target.value)}
                                        />
                                        <div className="m-4">
                                            {isNaN(Number(possession_amount)) ? <span className="text-red-500 text-sm mt-1">Enter number only</span> : Number(possession_amount).toLocaleString()}
                                            {/* {Number(avg_sale_price).toLocaleString()} */}
                                        </div>
                                    </div>
                                </div>

                                <div className="">
                                    <label
                                        htmlFor="installment-period"
                                        className="block mb-2 text-sm font-medium"
                                    >
                                        Installment Period (Month)
                                    </label>
                                    <div className="flex">
                                        <Input
                                            type="text"
                                            id="installment-period"
                                            name="installment-period"
                                            maxLength={2}
                                            className="input input-bordered w-full max-w-xs border-2 border-gray-400 "
                                            value={installment_period}
                                            onChange={(e) => setInstallment_period(e.target.value)}
                                        />

                                        <div className="m-3 mb-0">
                                            <div className="m-2">
                                                {isNaN(Number(installment_period)) ? <span className="text-red-500 text-sm mt-1">Enter number only</span> : Number(installment_period).toLocaleString()}
                                            </div>
                                            <div className="">
                                                {/* {((launch_year.toString().length >= 1) && (launch_year.toString().length < 4)) && <span className="text-red-500 text-sm mt-1">Year must be four characters longs</span>} */}
                                                {(installment_period && (Number(installment_period) < 0 || Number(installment_period) > 100)) && <span className="text-red-500 text-sm mt-1">Must be between 1 and 100</span>}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </>

                        }






                        {/* Plot Remarks  */}
                        <div className="">
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
                        <Button disabled={isAdding}>{isAdding ? 'Adding...' : 'Add'}</Button>
                        {/* <Link href="/buildings" className="flex justify-center items-center border border-black px-2 py-1 rounded-xl bg-white text-black hover:bg-red-600 hover:text-white capitalize">Cancel</Link> */}
                        {/* Add more */}
                        <Button variant='outline'
                            type="button"
                            onClick={async (e) => {

                                e.preventDefault();
                                // insertPlot()
                                // if (!isSaving) {  // Only proceed if currently false
                                //     setIsSaving(true);
                                //     await handleSubmit();
                                // }


                                if (!isSaving) {  // Only proceed if currently false
                                    try {
                                        setIsSaving(true);
                                        const result = await handleSubmit();
                                        console.log("result")
                                        console.log(result)

                                        if (result) {
                                            toast({
                                                className: "bg-green-600 rounded-lg",
                                                // title: "Add Price",
                                                description: "Floor added successfully ",

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
                                            setPrice("")
                                            setRent("")
                                            setTotal_price("")
                                            setInstallment_period("")
                                            setDown_payment("")
                                            setpossession_Amount("")
                                            setRemarks("")
                                            setEntryDate("")


                                            setIsSaving(false);

                                        }
                                    } catch (error) {
                                        console.error('Error:', error);
                                        setIsSaving(false); // Reset state if there's an error
                                    } finally {
                                    }
                                }

                            }}

                        >
                            {isSaving ? "Saving...." : "Save and Add more"}

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