"use client";

import * as React from "react"
import { useToast } from "@/components/ui/use-toast"
import prisma from "@/app/db";
import { Label } from "@/components/ui/label"
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

// import toast from "react-hot-toast"
import AddPlot from "@/app/societies/components/AddPlot";

import createPlot from "../../../../actions/createPlot"
import { useCallback, useEffect, useState } from "react";
import { Button } from "@/components/ui/button"
import FetchSociety from "@/app/societies/components/FatchSociety";
import { redirect } from "next/dist/server/api-utils";
import { useRouter } from 'next/navigation'
import { revalidatePath } from "next/cache";
import { Toaster } from "@/components/ui/toaster";
import { Image } from "lucide-react";
// import FileUpload from "@/app/societies/components/FileUpload";

// import { Toaster, toast } from "sonner"
// import { Toaster } from "@/components/ui/sonner"

type Props = {
    params: { id: number }
    // searchParams: { [key: string]: string | string[] | undefined }
}

// export const revalidate = 1 // revalidate at most every hour

export default function PlotAddPage({ params }: Props) {

    const router = useRouter()

    console.log("hi")

    // const [date, setDate] = useState<Date>()

    const [current_society, setCurrent_society] = useState<any>([]);
    const { toast } = useToast()
    // const [pressAdd, setPress_Add] = useState<Number>(0);

    const [isAdding, setIsAdding] = useState(false);

    const [plot_price, setplot_Price] = useState(0);
    const [property_size, setProperty_size] = useState<any>();
    const [apartment_size, setApartment_size] = useState<any>();
    const [apartment_size_ft, setApartment_size_ft] = useState<any>();
    const [shop_size, setShop_size] = useState<any>();
    const [office_size, setOffice_size] = useState<any>();
    const [plot_rent, setplot_Rent] = useState(0);
    const [ins_total_price, setIns_total_price] = useState(0);
    const [ins_down_payment, setIns_down_payment] = useState(0);
    const [ins_possession_Amount, setIns_possession_Amount] = useState(0);
    const [ins_period, setIns_Period] = useState(0);
    const [entryDate, setEntryDate] = useState<string>((new Date).toISOString().split('T')[0]);
    const [remarks, setRemarks] = useState<any>("");

    const [plotType, setPlotType] = useState("");

    const [payment_mode, setPayment_mode] = useState("Lumpsum Payment");

    useEffect(() => {

        // console.log("use effect called")


        const getSocietyData = async () => {

            try {

                // console.log("trying")
                // console.log(params.id)

                const society_data = await FetchSociety(params.id)

                // console.log("Current_society_data")
                // console.log(society_data)


                setCurrent_society(society_data)

            } catch (error) {

                console.error('Error fetching society data:', error);

                // setIsAdding(!isAdding)
            }
        };


        getSocietyData();



    }, []);

    const insertPlot = async () => {

        try {

            setIsAdding(true)

            // console.log("trying")
            // console.log(params.id)

            const add_plot_output = await AddPlot(entryDate, params.id, plotType, property_size,
                apartment_size, apartment_size_ft, shop_size, payment_mode, office_size, plot_price, plot_rent,
                ins_down_payment, ins_total_price, ins_period, ins_possession_Amount, remarks)

            // console.log("Plot added")
            // console.log(add_plot_output)

            toast({
                className: "bg-green-600 rounded-lg",
                // title: "Add Price",
                description: "Plot added successfully ",

            })

            //    if (error) {
            //     toast.error(error);
            //     return
            //    }

            // toast.success('Hello World')

            setPlotType("")
            setPayment_mode("")
            setplot_Price(0)
            setplot_Rent(0)
            setIns_down_payment(0)
            setIns_total_price(0)
            setIns_possession_Amount(0)
            setIns_Period(0)
            setIns_Period(0)
            setEntryDate("")
            setRemarks("")
            setApartment_size("")
            setApartment_size_ft("")
            setProperty_size("")
            setShop_size("")
            setOffice_size("")



            // redirect('/societies/plots/add/' + (params.id).toString(), "push")
            // redirect('/societies/plots/add/69', "push")
            // Router.relo
            // revalidatePath("/societies/plots/add/69")
            // router.refresh()
            // router.reload()


        } catch (error) {

            console.error('Error addign plot:', error);

        } finally {
            setIsAdding(false)
        }

    };


    // useEffect(() => {

    //     setIsAdding(true)



    //     insertPlot();


    // }, []);

    // function handleAddMoreClick() {

    //     // console.log("plot inserted function running")





    //     // console.log("Exitted")

    // }

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
                                <option value="Files">Files</option>
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
                                plotType === 'Files') &&
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
                                        {(current_society.plot_sizes_residential_87_5 === "yes" || current_society.plot_sizes_commercial_87_5 === "yes") && <option value="87.5">87.5</option>}
                                        {(current_society.plot_sizes_residential_100 === "yes" || current_society.plot_sizes_commercial_100 === "yes") && <option value="100">100</option>}
                                        {(current_society.plot_sizes_residential_125 === "yes" || current_society.plot_sizes_commercial_125 === "yes") && <option value="125">125</option>}
                                        {(current_society.plot_sizes_residential_200 === "yes" || current_society.plot_sizes_commercial_200 === "yes") && <option value="200">200</option>}
                                        {(current_society.plot_sizes_residential_250 === "yes" || current_society.plot_sizes_commercial_250 === "yes") && <option value="250">250</option>}
                                        {(current_society.plot_sizes_residential_300 === "yes" || current_society.plot_sizes_commercial_300 === "yes") && <option value="300">300</option>}
                                        {(current_society.plot_sizes_residential_500 === "yes" || current_society.plot_sizes_commercial_500 === "yes") && <option value="500">500</option>}
                                        {(current_society.plot_sizes_residential_600 === "yes" || current_society.plot_sizes_commercial_600 === "yes") && <option value="600">600</option>}
                                        {(current_society.plot_sizes_residential_800 === "yes" || current_society.plot_sizes_commercial_800 === "yes") && <option value="800">800</option>}
                                        {(current_society.plot_sizes_residential_1000 === "yes" || current_society.plot_sizes_commercial_1000 === "yes") && <option value="1000">1,000</option>}
                                        {(current_society.plot_sizes_residential_2000 === "yes" || current_society.plot_sizes_commercial_2000 === "yes") && <option value="2000">2,000</option>}
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
                                        {(current_society.apartment_studio === "yes") && <option value="Studio">Studio</option>}
                                        {(current_society.apartment_one_bad === "yes") && <option value="1 Bed">1 Bed</option>}
                                        {(current_society.apartment_two_bad === "yes") && <option value="2 Bed">2 Bed</option>}
                                        {(current_society.apartment_three_bad === "yes") && <option value="3 Bed">3 Bed</option>}
                                        {(current_society.apartment_four_bad === "yes") && <option value="4 Bed">4 Bed</option>}
                                        {(current_society.apartment_five_bad === "yes") && <option value="5 Bed">5 Bed</option>}
                                        {(current_society.apartment_penthouse === "yes") && <option value="Penthouse">Penthouse</option>}
                                        {(current_society.apartment_duplex === "yes") && <option value="Duplex">Duplex</option>}
                                    </select>

                                </div>

                                <div className="mt-4">
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
                                    {/* <Select
                                        name="apartment-size-ft">
                                        <SelectTrigger
                                            id="apartment-size-ft"
                                            className="select w-full max-w-xs border-2 border-gray-400 ">
                                            <SelectValue placeholder="Select Apartment Size" />
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
                                    </Select> */}
                                </div>
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
                                    onChange={(e) => {
                                        setplot_Price(Number(e.target.value))
                                        // console.log(e.target.value)
                                    }}
                                    type="text"
                                    id="plot-price"
                                    name="plot-price"
                                    className="input input-bordered w-full max-w-xs border-2 border-gray-400 "
                                    value={plot_price}
                                    placeholder="Rs."
                                />
                                <div className="m-4">
                                    {Number(plot_price).toLocaleString()}
                                </div>
                            </div>
                        </div>

                        {/* plot rent  */}
                        <div className="mt-4">
                            <label
                                htmlFor="plot-rent"
                                className="block mb-2 text-sm font-medium"
                            >
                                Monthly Rent:
                            </label>
                            <div className="flex">
                                <Input
                                    onChange={(e) => {
                                        setplot_Rent(Number(e.target.value))
                                        // console.log(e.target.value)
                                    }}
                                    type="text"
                                    id="plot-rent"
                                    name="plot-rent"
                                    className="input input-bordered w-full max-w-xs border-2 border-gray-400 "
                                    value={plot_rent}
                                    placeholder="Rs."
                                />
                                <div className="m-4">
                                    {Number(plot_rent).toLocaleString()}
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

                                <div className="mt-4">
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
                                            onChange={(e) => {
                                                setIns_total_price(Number(e.target.value))
                                                // console.log(e.target.value)
                                            }}
                                        />
                                        <div className="m-4">
                                            {Number(ins_total_price).toLocaleString()}
                                        </div>
                                    </div>
                                </div>


                                <div className="mt-4">
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

                                <div className="mt-4">
                                    <label
                                        htmlFor="ins-period"
                                        className="block mb-2 text-sm font-medium"
                                    >
                                        Instalment Period Years:
                                    </label>
                                    <div className="flex">
                                        <Input
                                            type="text"
                                            id="ins-period"
                                            name="ins-period"
                                            className="input input-bordered w-full max-w-xs border-2 border-gray-400 "
                                            placeholder=""
                                            value={ins_period}
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


                        {/* <FileUpload /> */}


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
                            <AddHomeButton />
                            {/* <Link href="/buildings" className="flex justify-center items-center border border-black px-2 py-1 rounded-xl bg-white text-black hover:bg-red-600 hover:text-white capitalize">Cancel</Link> */}

                            {/* Add more */}
                            <Button variant='outline'
                                onClick={async (e) => {

                                    e.preventDefault();
                                    insertPlot()

                                    // setPress_Add(pressAdd => pressAdd + 1);

                                    // console.log(pressAdd)

                                    // handleAddMoreClick()
                                    // console.log(plot_price)
                                    // console.log(plot_rent)
                                    // console.log(plotType)
                                    // console.log()
                                    // console.log(property_size)
                                    // console.log(apartment_size)
                                    // console.log(apartment_size_ft)
                                    // console.log(shop_size)
                                    // console.log(paymentTerms)
                                    // console.log(office_size)
                                    // console.log(ins_total_price)
                                    // console.log(ins_down_payment)
                                    // console.log(ins_possession_Amount)
                                    // console.log(date)
                                    // console.log(remarks)

                                    // setIsAdding(!isAdding);

                                    // console.log(isAdding);

                                }}

                            >
                                {isAdding ? "Saving...." : "Save and Add more"}

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