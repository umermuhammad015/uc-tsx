"use client";

import * as React from "react"
// import { useToast } from "@/components/ui/use-toast"
import { useToast } from "@/hooks/use-toast"
import Link from "next/link";
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
// import toast from "react-hot-toast"
import AddPlot from "@/app/societies/components/AddPlot";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button"
import FetchSociety from "@/app/societies/components/FatchSociety";
import { useRouter } from 'next/navigation'
import { Toaster } from "@/components/ui/toaster"
import { z } from "zod";
import { Plots, Societies } from "@prisma/client";

// const stringSchema = z.string().min(1, "Address is required").max(255, "Address cannot exceed 255 characters");
const numberSchema = z.number().nonnegative("Value must be a positive number").nullable();
// const occupancySchema = z
//     .number()
//     .int()
//     .min(0, "Year must be no earlier than 1950")
//     .max(100, "Year must be no later than 2024");
// export const revalidate = 1 // revalidate at most every hour


export default function AddPlotForm({ society_id }: { society_id: number }) {

    const router = useRouter()

    // console.log("hi")


    const [current_society, setCurrent_society] = useState<Societies | null>();
    const { toast } = useToast()
    // const [pressAdd, setPress_Add] = useState<Number>(0);
    const [isSaving, setIsSaving] = useState(false);
    const [isAdding, setIsAdding] = useState(false);

    const [plot_price, setplot_Price] = useState("");
    const [property_size, setProperty_size] = useState<string>();
    const [apartment_size, setApartment_size] = useState<string>();
    const [apartment_size_ft, setApartment_size_ft] = useState<string>();
    const [shop_size, setShop_size] = useState<string>();
    const [office_size, setOffice_size] = useState<string>();
    const [plot_rent, setplot_Rent] = useState("");
    const [ins_total_price, setIns_total_price] = useState("");
    const [ins_down_payment, setIns_down_payment] = useState("");
    const [ins_possession_Amount, setIns_possession_Amount] = useState("");
    const [ins_period, setIns_Period] = useState("");
    const [entryDate, setEntryDate] = useState<string>((new Date).toISOString().split('T')[0]);
    const [remarks, setRemarks] = useState("");

    const [plotType, setPlotType] = useState("");

    // const [payment_mode, setPayment_mode] = useState("Lumpsum Payment");
    const [payment_mode, setPayment_mode] = useState("");

    useEffect(() => {

        // console.log("use effect called")


        const getSocietyData = async () => {

            try {

                // console.log("trying")
                // console.log(params.id)

                const society_data = await FetchSociety(society_id)

                // console.log("Current_society_data")
                // console.log(society_data)


                setCurrent_society(society_data)

            } catch (error) {

                console.error('Error fetching society data:', error);

                // setIsAdding(!isAdding)
            }
        };


        getSocietyData();



    }, [society_id]);

    const handleSubmit = async () => {

        // console.log("1");
        // console.log("isAdding");
        // console.log(isAdding);

        const allFields = [

            { name: "plot-price", value: plot_price, schema: numberSchema },
            { name: "plot-rent", value: plot_rent, schema: numberSchema },
            { name: "ins-down-payment", value: ins_down_payment, schema: numberSchema },
            { name: "ins-total-price", value: ins_total_price, schema: numberSchema },
            { name: "ins-possession-Amount", value: ins_possession_Amount, schema: numberSchema },
            { name: "ins-period", value: ins_period, schema: numberSchema },


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

            const plot_object = {
                date: entryDate,
                society_id: Number(society_id) as number,
                type: plotType as string,
                size: property_size,
                apartment_size: apartment_size,
                apartment_size_ft: apartment_size_ft,
                payment_mode: payment_mode as string,
                shop_size: shop_size,
                office_size: office_size,
                plot_price: isNaN(Number(plot_price)) ? null : Number(plot_price),
                plot_rent: isNaN(Number(plot_rent)) ? null : Number(plot_rent),
                ins_down_payment: isNaN(Number(ins_down_payment)) ? null : Number(ins_down_payment),
                ins_total_price: isNaN(Number(ins_total_price)) ? null : Number(ins_total_price),
                ins_period: isNaN(Number(ins_period)) ? null : Number(ins_period),
                ins_possession_Amount: isNaN(Number(ins_possession_Amount)) ? null : Number(ins_possession_Amount),
                remarks: remarks as string
            }

            const added_plot_id = await AddPlot(plot_object as Plots)

            console.log("add_plot_output")
            console.log(added_plot_id)


            router.push("/societies/" + added_plot_id); // Replace with your desired route


        } catch (error) {

            console.error('Error submitting plot:', error);

        } finally {
            // setIsAdding(false)
            setIsSaving(false)


        }

        return true;

    };

    return (
        <>
            <div className="text-lg">Pricing Information</div>
            <div className="container border-2 ">

                <div className="mx-4">
                    <form
                        onSubmit={async (e) => {
                            e.preventDefault();

                            if (!isAdding) {  // Only proceed if currently false
                                try {
                                    setIsAdding(true);
                                    const result = await handleSubmit();
                                    if (result) {
                                        router.push("/societies/" + society_id); // Wait for navigation to complete
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

                        <div className="mt-4 ">
                            <label
                                htmlFor="building-name"
                                className="block mb-2 text-sm font-medium "
                            >
                                Society Name: <Link href={'/societies/' + society_id}>{current_society?.name}</Link>
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
                                htmlFor="society-id"
                                className="block mb-2 text-sm font-medium "
                            >
                                Society ID:
                            </label>
                            <Input
                                type="text"
                                id="society-id"
                                name="society-id"
                                className="input input-bordered dark:bg-slate-700  w-full max-w-xs border-2 bg-gray-400 border-gray-400 cursor-not-allowed disabled:bg-gray-200"
                                placeholder=""
                                value={society_id}
                                onChange={() => (society_id)}
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
                                id="plot-date"
                                name="plot-date"
                                // defaultValue="2024-12-13"
                                defaultValue={(new Date).toISOString().split('T')[0]}
                                // value="12/26/2024"
                                // value={entryDate}
                                className="max-w-xs border-gray-400  border-2 text-sm rounded focus:ring-blue-500  block w-full p-2.5"
                                onChange={(e) => setEntryDate(e.target.value)}
                                placeholder="date"
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
                                key={Math.random()}
                                id="type"
                                name="type"
                                value={plotType}
                                className="select  w-full text-sm pl-2 h-10 max-w-xs border-2 rounded border-gray-400 bg-background"
                                onChange={(e) => setPlotType(e.target.value)}
                            >
                                <option value="">Select Property Type</option>
                                <option value="Residential Plot">Residential Plot</option>
                                <option value="Commercial Plot">Commercial Plot</option>
                                <option value="Bungalow">Bungalow</option>
                                <option value="Apartment">Apartment</option>
                                <option value="Shop">Shop</option>
                                <option value="Office">Office</option>
                                <option value="Residential Files">Residential Files</option>
                                <option value="Commercial Files">Commercial Files</option>
                            </select>
                            {/* <Select
                                    id="type"
                                    className="select  w-full max-w-xs border-2 border-gray-400 ">
                                    <SelectValue placeholder="Select Plot/Bungalow Type" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel></SelectLabel>
                                        <SelectItem value="Residential Plot">Residential Plot</SelectItem>
                                        <SelectItem value="Commercial Plot">Commercial Plot</SelectItem>
                                        <SelectItem value="Bungalow">Bungalow</SelectItem>
                                        <SelectItem value="Apartment">Apartment</SelectItem>

                                    </SelectGroup>
                                </SelectContent>
                            </Select> */}

                        </div>

                        {/* plot size  */}

                        {
                            (plotType === "Residential Plot" || plotType === 'Commercial Plot' || plotType === 'Bungalow' ||
                                plotType === 'Commercial Files' || plotType === 'Residential Files') &&
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
                                        className="select  w-full text-sm pl-2 h-10 max-w-xs border-2 rounded border-gray-400 bg-background"
                                        value={property_size}
                                        onChange={(e) => setProperty_size(e.target.value)}
                                    >
                                        {(current_society?.plot_sizes_residential_87_5 === "yes" || current_society?.plot_sizes_commercial_87_5 === "yes") && <option value="87.5">87.5</option>}
                                        {(current_society?.plot_sizes_commercial_100 === "yes") && <option value="100">100</option>}
                                        {(current_society?.plot_sizes_residential_125 === "yes" || current_society?.plot_sizes_commercial_125 === "yes") && <option value="125">125</option>}
                                        {(current_society?.plot_sizes_residential_200 === "yes" || current_society?.plot_sizes_commercial_200 === "yes") && <option value="200">200</option>}
                                        {(current_society?.plot_sizes_residential_250 === "yes" || current_society?.plot_sizes_commercial_250 === "yes") && <option value="250">250</option>}
                                        {(current_society?.plot_sizes_residential_300 === "yes" && <option value="300">300</option>)}
                                        {(current_society?.plot_sizes_residential_500 === "yes" || current_society?.plot_sizes_commercial_500 === "yes") && <option value="500">500</option>}
                                        {(current_society?.plot_sizes_residential_600 === "yes" && <option value="600">600</option>)}
                                        {(current_society?.plot_sizes_residential_800 === "yes" && <option value="800">800</option>)}
                                        {(current_society?.plot_sizes_residential_1000 === "yes" || current_society?.plot_sizes_commercial_1000 === "yes") && <option value="1000">1,000</option>}
                                        {(current_society?.plot_sizes_residential_2000 === "yes" || current_society?.plot_sizes_commercial_2000 === "yes") && <option value="2000">2,000</option>}
                                    </select>

                                </div>
                            </>
                        }

                        {/* Apartment size  */}
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
                                    <select
                                        id="apartment-size"
                                        name="apartment-size"
                                        className="select  w-full text-sm pl-2 h-10 max-w-xs border-2 rounded border-gray-400 bg-background"
                                        value={apartment_size}
                                        onChange={(e) => setApartment_size(e.target.value)}
                                    >
                                        <option value="">Select</option>
                                        {(current_society?.apartment_studio === "yes") && <option value="Studio">Studio</option>}
                                        {(current_society?.apartment_one_bad === "yes") && <option value="1 Bed">1 Bed</option>}
                                        {(current_society?.apartment_two_bad === "yes") && <option value="2 Bed">2 Bed</option>}
                                        {(current_society?.apartment_three_bad === "yes") && <option value="3 Bed">3 Bed</option>}
                                        {(current_society?.apartment_four_bad === "yes") && <option value="4 Bed">4 Bed</option>}
                                        {(current_society?.apartment_five_bad === "yes") && <option value="5 Bed">5 Bed</option>}
                                        {(current_society?.apartment_penthouse === "yes") && <option value="Penthouse">Penthouse</option>}
                                        {(current_society?.apartment_duplex === "yes") && <option value="Duplex">Duplex</option>}
                                    </select>

                                </div>

                                {/* apartment-size-ft  */}
                                <div className="mt-4">
                                    <label
                                        htmlFor="apartment-size-ft"
                                        className="block mb-2 text-sm font-medium"
                                    >
                                        Apartment Size (Sq. Ft.):
                                    </label>
                                    <div className="flex">
                                        <Input

                                            type="text"
                                            id="apartment-size-ft"
                                            name="apartment-size-ft"
                                            className="input input-bordered w-full max-w-xs border-2 border-gray-400 "
                                            placeholder="(Sq. Yards)"
                                            onChange={(e) => {
                                                setApartment_size_ft((e.target.value))
                                                // console.log(e.target.value)
                                            }}
                                            value={apartment_size_ft}

                                        />
                                        {/* <div className="m-4">
                                            {Number(apartment_size_ft).toLocaleString()}
                                        </div> */}
                                    </div>
                                </div>

                                {/* <div className="mt-4">
                                    <label
                                        htmlFor="apartment-size-ft"
                                        className="block mb-2 text-sm font-medium"
                                    >
                                        Apartment Size (Sq. Ft.):
                                    </label>
                                    <select
                                        id="apartment-size-ft"
                                        name="apartment-size-ft"
                                        className="select  w-full text-sm pl-2 h-10 max-w-xs border-2 rounded border-gray-400 bg-background"
                                        value={apartment_size_ft}
                                        onChange={(e) => setApartment_size_ft(e.target.value)}
                                    >
                                        <option value="">Select</option>
                                        <option value="400">400</option>
                                        <option value="550">550</option>
                                        <option value="650">650</option>
                                        <option value="800">800</option>
                                        <option value="900">900</option>
                                        <option value="1000">1,000</option>
                                        <option value="1200">1,200</option>
                                        <option value="1500">1,500</option>
                                        <option value="1800">1,800</option>
                                        <option value="2000">2,000</option>
                                        <option value="2400">2,400</option>
                                        <option value="2800">2,800</option>
                                        <option value="3200">3,200</option>
                                        <option value="4000">4,000</option>
                                    </select>
                                   
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
                                    <select
                                        id="shop-size"
                                        name="shop-size"
                                        className="select  w-full text-sm pl-2 h-10 max-w-xs border-2 rounded border-gray-400 bg-background"
                                        value={shop_size}
                                        onChange={(e) => setShop_size(e.target.value)}
                                    >
                                        <option value="">Select</option>
                                        <option value="50">50</option>
                                        <option value="75">75</option>
                                        <option value="100">100</option>
                                        <option value="150">150</option>
                                        <option value="200">200</option>
                                        <option value="250">250</option>
                                        <option value="300">300</option>
                                        <option value="400">400</option>
                                        <option value="500">500</option>
                                        <option value="600">600</option>
                                        <option value="800">800</option>
                                        <option value="1000">1,000</option>
                                        <option value="1500">1,500</option>
                                        <option value="2000">2,000</option>
                                        <option value="2500">2,500</option>
                                    </select>
                                    {/* <Select
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
                                    </Select> */}
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
                                    <select
                                        id="office-size"
                                        name="office-size"
                                        className="select  w-full text-sm pl-2 h-10 max-w-xs border-2 rounded border-gray-400 bg-background"
                                        value={office_size}
                                        onChange={(e) => setOffice_size(e.target.value)}
                                    >
                                        <option value="">Select</option>
                                        <option value="50">50</option>
                                        <option value="75">75</option>
                                        <option value="100">100</option>
                                        <option value="150">150</option>
                                        <option value="200">200</option>
                                        <option value="250">250</option>
                                        <option value="300">300</option>
                                        <option value="400">400</option>
                                        <option value="500">500</option>
                                        <option value="600">600</option>
                                        <option value="800">800</option>
                                        <option value="1000">1,000</option>
                                        <option value="1500">1,500</option>
                                        <option value="2000">2,000</option>
                                        <option value="2500">2,500</option>
                                    </select>
                                    {/* <Select
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
                                    </Select> */}
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
                                value={payment_mode}
                                onChange={(e) => setPayment_mode(e.target.value)}
                            >
                                <option value="">Select</option>
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
                                    value={plot_price}
                                    placeholder="Rs."
                                    onChange={(e) => setplot_Price(e.target.value)}
                                />
                                {/* {errors["building-floor-avg-sale-price"] && <p className="text-red-500 text-sm mt-1">*</p>} */}
                                <div className="m-4">
                                    {isNaN(Number(plot_price)) ? <span className="text-red-500 text-sm mt-1">Enter number only</span> : Number(plot_price).toLocaleString()}
                                    {/* {Number(avg_sale_price).toLocaleString()} */}
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
                                    value={plot_rent}
                                    placeholder="Rs."
                                    onChange={(e) => setplot_Rent(e.target.value)}
                                />
                                {/* {errors["building-floor-avg-sale-price"] && <p className="text-red-500 text-sm mt-1">*</p>} */}
                                <div className="m-4">
                                    {isNaN(Number(plot_rent)) ? <span className="text-red-500 text-sm mt-1">Enter number only</span> : Number(plot_rent).toLocaleString()}
                                    {/* {Number(avg_sale_price).toLocaleString()} */}
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
                                            placeholder="Rs."
                                            value={ins_down_payment}
                                            onChange={(e) => setIns_down_payment(e.target.value)}
                                        />
                                        {/* {errors["building-floor-avg-sale-price"] && <p className="text-red-500 text-sm mt-1">*</p>} */}
                                        <div className="m-4">
                                            {isNaN(Number(ins_down_payment)) ? <span className="text-red-500 text-sm mt-1">Enter number only</span> : Number(ins_down_payment).toLocaleString()}
                                            {/* {Number(avg_sale_price).toLocaleString()} */}
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
                                            placeholder="Rs."
                                            value={ins_total_price}
                                            onChange={(e) => setIns_total_price(e.target.value)}
                                        />
                                        {/* {errors["building-floor-avg-sale-price"] && <p className="text-red-500 text-sm mt-1">*</p>} */}
                                        <div className="m-4">
                                            {isNaN(Number(ins_total_price)) ? <span className="text-red-500 text-sm mt-1">Enter number only</span> : Number(ins_total_price).toLocaleString()}
                                            {/* {Number(avg_sale_price).toLocaleString()} */}
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
                                            placeholder="Rs."
                                            value={ins_possession_Amount}
                                            onChange={(e) => setIns_possession_Amount(e.target.value)}
                                        />
                                        {/* {errors["building-floor-avg-sale-price"] && <p className="text-red-500 text-sm mt-1">*</p>} */}
                                        <div className="m-4">
                                            {isNaN(Number(ins_possession_Amount)) ? <span className="text-red-500 text-sm mt-1">Enter number only</span> : Number(ins_possession_Amount).toLocaleString()}
                                            {/* {Number(avg_sale_price).toLocaleString()} */}
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
                                            placeholder=""
                                            value={ins_period}
                                            onChange={(e) => setIns_Period(e.target.value)}
                                        />
                                        {/* {errors["building-floor-avg-sale-price"] && <p className="text-red-500 text-sm mt-1">*</p>} */}
                                        <div className="m-4">
                                            {isNaN(Number(ins_period)) ? <span className="text-red-500 text-sm mt-1">Enter number only</span> : Number(ins_period).toLocaleString()}
                                            {/* {Number(avg_sale_price).toLocaleString()} */}
                                        </div>
                                    </div>
                                </div>
                            </>

                        }


                        {/* <FileUpload /> */}




                        {/* <button onClick={() => {
                            console.log(entryDate)
                        }}>Check</button> */}

                        {/* Plot Remarks  */}
                        <div className="mt-4">
                            <label htmlFor="message" className="block mb-2 text-sm font-medium">
                                Remarks
                            </label>
                            <Textarea
                                id="plot-remarks"
                                name="plot-remarks"
                                className="textarea w-full border-2 border-gray-400 "
                                value={remarks}
                                onChange={(e) => setRemarks(e.target.value)}
                                placeholder="Leave a comment..."
                            ></Textarea>
                        </div>


                        {/* <div className="flex items-center mb-4 ml-2">
                            <input
                                id="add-more-plots"
                                name="add-more-plots"
                                type="checkbox"
                                value="yes"
                                className="checkbox checkbox-primary"
                            />
                            <label
                                htmlFor="add-more-plots"
                                className="ml-2 text-sm font-medium "
                            >
                                Add more
                            </label>
                        </div> */}

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

                                                setPlotType("")
                                                setPayment_mode("")
                                                setplot_Price("")
                                                setplot_Rent("")
                                                setIns_down_payment("")
                                                setIns_total_price("")
                                                setIns_possession_Amount("")
                                                setIns_Period("")
                                                setIns_Period("")
                                                setEntryDate("")
                                                setRemarks("")
                                                setApartment_size("")
                                                setApartment_size_ft("")
                                                setProperty_size("")
                                                setShop_size("")
                                                setOffice_size("")

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
                            {/* <Button onClick={() => }>
                                Go for toast
                            </Button> */}


                            <Button asChild className="bg-transparent text-primary hover:bg-primary-foreground">
                                <Link href="/societies" >Cancel</Link>
                            </Button>



                        </div>

                    </form>
                </div>
                {/* <Toaster /> */}
            </div>
        </>

    )
}