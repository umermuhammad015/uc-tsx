"use client";
import Link from "next/link";

import { useEffect, useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import AddPlot from "@/app/buildings/components/AddFloor";
import { useToast } from "@/hooks/use-toast"
import FetchBuilding from "@/app/buildings/components/FetchBuilding";
import { useRouter } from "next/navigation";

import { z } from "zod";

// const stringSchema = z.string().min(1, "Address is required").max(255, "Address cannot exceed 255 characters");
const numberSchema = z.number().nonnegative("Value must be a positive number").nullable();
const occupancySchema = z
    .number()
    .int()
    .min(0, "Year must be no earlier than 1950")
    .max(100, "Year must be no later than 2024");



export default function AddFloorForm({ building_id }: any) {
    // console.log(params.id);
    const router = useRouter(); // Initialize the router
    const [entryDate, setEntryDate] = useState<string>((new Date).toISOString().split('T')[0]);

    const [isAdding, setIsAdding] = useState(false);
    // const [isAdding, setIsAdding] = useState(0);
    // const [isSaving, setIsSaving] = useState(0);
    const [isSaving, setIsSaving] = useState(false);
    const { toast } = useToast()

    // const[currentBuildingData, setCurrentBuildingData] = useState<any>({})

    const [current_building, setCurrent_building] = useState<any>([]);
    // console.log("current_building")
    // console.log(current_building)
    // const [apartment_size, setApartment_size] = useState<any>();
    const [avg_sale_price, setAvg_Sale_Price] = useState<any>("");
    const [avg_monthly_rent, setAvg_Monthly_Rent] = useState<any>("");
    const [down_payment_amount, setDown_Payment_Amount] = useState<any>("");
    const [instalment_period, setInstalment_Period] = useState<any>("");
    const [instalment_amount, setInstalment_Amount] = useState<any>("");
    const [possession_amount, setPossession_Amount] = useState<any>("");
    const [size_min, setSize_Min] = useState<any>("");
    const [size_max, setSize_Max] = useState<any>("");
    const [floor_num, setFloor_num] = useState("");
    const [apart_studio, setApart_studio] = useState("");
    const [apart_1_bed, setApart_1_bed] = useState("");
    const [apart_2_bed, setApart_2_bed] = useState("");
    const [apart_3_bed, setApart_3_bed] = useState("");
    const [apart_4_bed, setApart_4_bed] = useState("");
    const [apart_5_bed, setApart_5_bed] = useState("");
    const [apart_duplex, setApart_duplex] = useState("");
    const [apart_penthouse, setApart_penthouse] = useState("");
    const [apart_furnished, setApart_furnished] = useState("");
    const [apart_semi_furnished, setApart_semi_furnished] = useState("");
    const [service_apartment, setService_apartment] = useState("");
    const [hotel_suites_apartment, setHotel_suites_apartment] = useState("");
    const [floor_type, setFloor_Type] = useState("");
    const [unit_type, setUnit_type] = useState<any>();
    const [instalment_plan, setInstalment_plan] = useState("");
    const [occupancy, setOccupancy] = useState<any>("")
    const [remarks, setRemarks] = useState<any>("");


    // const validateField = (name: any, value: any) => {
    //     let schema;
    //     if (name === "address") schema = addressSchema;
    //     else if (name === "launch-year" || name === "construction-year") schema = yearSchema;
    //     else schema = numberSchema;

    //     const result = schema.safeParse(value === "" ? "" : Number(value));
    //     setErrors((prev) => ({
    //         ...prev,
    //         [name]: result.success ? null : result.error.errors[0].message,
    //     }));
    // };


    // const handleSubmit_old = async (e: any) => {
    //     e.preventDefault();
    //     const allFields = [
    //         // { name: "building-floor-no", value: floor_num, schema: stringSchema },
    //         { name: "building-floor-avg-sale-price", value: avg_sale_price, schema: numberSchema },
    //         { name: "building-floor-avg-monthly-rent", value: avg_monthly_rent, schema: numberSchema },
    //         // { name: "building-floor-remarks", value: remarks, schema: stringSchema },

    //     ];

    //     const newErrors = {};
    //     let isValid = true;
    //     for (const field of allFields) {
    //         const result = field.schema.safeParse(field.value === "" ? null : Number(field.value));
    //         console.log(result)
    //         // const result = field.schema.safeParse(field.value);
    //         if (!result.success) {
    //             isValid = false;
    //             // newErrors[field.name] = result.error.errors[0].message;
    //         }
    //     }

    //     if (!isValid) {
    //         // setErrors(newErrors);
    //         console.log("Not valid inputs")
    //         return;
    //     }

    //     console.log("Validation passed");
    //     try {

    //         setIsAdding(true)

    //         const plot_object = {
    //             date: entryDate,
    //             building_id: Number(building_id) as number,
    //             floor_type: floor_type as string,
    //             floor_no: floor_num as string,
    //             occupancy: occupancy,
    //             unit_type: unit_type as string,
    //             floor_apartments_studio: apart_studio,
    //             floor_apartments_1_bed: apart_1_bed as string,
    //             floor_apartments_2_bed: apart_2_bed as string,
    //             floor_apartments_3_bed: apart_3_bed as string,
    //             floor_apartments_4_bed: apart_4_bed as string,
    //             floor_apartments_5_bed: apart_5_bed as string,
    //             floor_apartments_duplex: apart_duplex as string,
    //             floor_apartments_penthouse: apart_penthouse as string,
    //             floor_has_furnished: apart_furnished as string,
    //             floor_has_semi_furnished: apart_semi_furnished as string,
    //             floor_has_service_apartments: service_apartment as string,
    //             floor_has_hotel_suites_apartments: hotel_suites_apartment as string,
    //             size_min: size_min,
    //             size_max: size_max,
    //             avg_sale_price: isNaN(Number(avg_sale_price)) ? null : Number(avg_sale_price),
    //             avg_monthly_rent: isNaN(Number(avg_monthly_rent)) ? null : Number(avg_monthly_rent),
    //             instalment_plan: instalment_plan,
    //             instalment_period: instalment_period,
    //             down_payment_amount: down_payment_amount,
    //             instalment_amount: instalment_amount,
    //             possession_amount: possession_amount,
    //             remarks: remarks as string
    //         }

    //         console.log("plot_object")
    //         console.log(plot_object)

    //         const add_plot_output = await AddPlot(plot_object)

    //         console.log("redictecting")
    //         // redirect("/buildings/" + building_id);

    //         router.push("/buildings/" + building_id); // Replace with your desired route

    //         if (router) {
    //             router.push("/buildings/" + building_id);
    //         } else {
    //             console.log("router not found")
    //         }



    //     } catch (error) {

    //         console.error('Error submitting plot:', error);

    //     } finally {
    //         setIsAdding(false)
    //     }
    // };

    useEffect(() => {

        // console.log("use effect called")


        const getBuildingData = async () => {

            try {

                // console.log("trying")
                // console.log(params.id)

                const Building_data = await FetchBuilding(building_id)

                // console.log("Current building data")
                // console.log(Building_data)


                setCurrent_building(Building_data)

            } catch (error) {

                console.error('Error fetching society data:', error);

                // setIsAdding(!isAdding)
            }
        };


        getBuildingData();



    }, []);

    // const insertPlot = async () => {

    //     const allFields = [
    //         // { name: "building-floor-no", value: floor_num, schema: stringSchema },
    //         { name: "building-floor-avg-sale-price", value: avg_sale_price, schema: numberSchema },
    //         { name: "building-floor-avg-monthly-rent", value: avg_monthly_rent, schema: numberSchema },
    //         // { name: "building-floor-remarks", value: remarks, schema: stringSchema },

    //     ];

    //     const newErrors = {};
    //     let isValid = true;
    //     for (const field of allFields) {
    //         const result = field.schema.safeParse(field.value === "" ? null : Number(field.value));
    //         console.log(result)
    //         // const result = field.schema.safeParse(field.value);
    //         if (!result.success) {
    //             isValid = false;
    //             // newErrors[field.name] = result.error.errors[0].message;
    //         }
    //     }

    //     if (!isValid) {
    //         // setErrors(newErrors);
    //         console.log("Not valid inputs")
    //         return;
    //     }

    //     console.log("Validation passed");

    //     try {

    //         setIsAdding(true)

    //         const plot_object = {
    //             date: entryDate,
    //             building_id: Number(building_id) as number,
    //             floor_type: floor_type as string,
    //             floor_no: floor_num as string,
    //             occupancy: occupancy,
    //             unit_type: unit_type as string,
    //             floor_apartments_studio: apart_studio,
    //             floor_apartments_1_bed: apart_1_bed as string,
    //             floor_apartments_2_bed: apart_2_bed as string,
    //             floor_apartments_3_bed: apart_3_bed as string,
    //             floor_apartments_4_bed: apart_4_bed as string,
    //             floor_apartments_5_bed: apart_5_bed as string,
    //             floor_apartments_duplex: apart_duplex as string,
    //             floor_apartments_penthouse: apart_penthouse as string,
    //             floor_has_furnished: apart_furnished as string,
    //             floor_has_semi_furnished: apart_semi_furnished as string,
    //             floor_has_service_apartments: service_apartment as string,
    //             floor_has_hotel_suites_apartments: hotel_suites_apartment as string,
    //             size_min: size_min,
    //             size_max: size_max,
    //             avg_sale_price: isNaN(Number(avg_sale_price)) ? null : Number(avg_sale_price),
    //             avg_monthly_rent: isNaN(Number(avg_monthly_rent)) ? null : Number(avg_monthly_rent),
    //             instalment_plan: isNaN(Number(instalment_plan)) ? null : Number(instalment_plan),
    //             instalment_period: isNaN(Number(instalment_period)) ? null : Number(instalment_period),
    //             down_payment_amount: isNaN(Number(down_payment_amount)) ? null : Number(down_payment_amount),
    //             instalment_amount: isNaN(Number(instalment_amount)) ? null : Number(instalment_amount),
    //             possession_amount: isNaN(Number(possession_amount)) ? null : Number(possession_amount),
    //             remarks: remarks as string
    //         }

    //         console.log("plot_object")
    //         console.log(plot_object)

    //         const add_plot_output = await AddPlot(plot_object)


    //         //   console.log("Plot added")
    //         //   console.log(add_plot_output)

    //         toast({
    //             className: "bg-green-600 rounded-lg",
    //             // title: "Add Price",
    //             description: "Floor added successfully ",

    //         })

    //         //    if (error) {
    //         //     toast.error(error);
    //         //     return
    //         //    }

    //         // toast.success('Hello World')


    //         setInstalment_plan("")
    //         setOccupancy(0)
    //         setAvg_Sale_Price("")
    //         setAvg_Monthly_Rent("")
    //         setDown_Payment_Amount(0)
    //         setInstalment_Period(0)
    //         setInstalment_Amount(0)
    //         setPossession_Amount(0)
    //         setEntryDate("")
    //         setSize_Min(0)
    //         setSize_Max(0)
    //         setRemarks("")
    //         setFloor_num("")
    //         setFloor_Type("")
    //         setUnit_type("")
    //         setApart_studio("")
    //         setApart_1_bed("")
    //         setApart_2_bed("")
    //         setApart_3_bed("")
    //         setApart_4_bed("")
    //         setApart_5_bed("")
    //         setApart_duplex("")
    //         setApart_penthouse("")
    //         setApart_furnished("")
    //         setApart_semi_furnished("")
    //         setService_apartment("")
    //         setHotel_suites_apartment("")





    //         // redirect('/societies/plots/add/' + (params.id).toString(), "push")
    //         // redirect('/societies/plots/add/69', "push")
    //         // Router.relo
    //         // revalidatePath("/societies/plots/add/69")
    //         // router.refresh()
    //         // router.reload()


    //     } catch (error) {

    //         console.error('Error addign plot:', error);

    //     } finally {
    //         setIsAdding(false)
    //         setIsSaving(false)
    //     }

    // };


    const handleSubmit = async () => {

        // console.log("1");
        // console.log("isAdding");
        // console.log(isAdding);

        const allFields = [
            // { name: "building-floor-no", value: floor_num, schema: stringSchema },
            { name: "building-floor-occupancy", value: occupancy, schema: occupancySchema },
            { name: "building-floor-avg-sale-price", value: avg_sale_price, schema: numberSchema },
            { name: "building-floor-avg-monthly-rent", value: avg_monthly_rent, schema: numberSchema },
            { name: "building-floor-size-min", value: size_min, schema: numberSchema },
            { name: "building-floor-size-max", value: size_max, schema: numberSchema },
            { name: "building-floor-instalment-period", value: instalment_period, schema: numberSchema },
            { name: "building-floor-down-payment-amount", value: down_payment_amount, schema: numberSchema },
            { name: "building-floor-instalment-amount", value: instalment_amount, schema: numberSchema },
            { name: "building-floor-possession-amount", value: possession_amount, schema: numberSchema },
            // { name: "building-floor-remarks", value: remarks, schema: stringSchema },

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
                building_id: Number(building_id) as number,
                floor_type: floor_type as string,
                floor_no: floor_num as string,
                occupancy: isNaN(Number(size_min)) ? null : Number(size_min),
                unit_type: unit_type as string,
                floor_apartments_studio: apart_studio,
                floor_apartments_1_bed: apart_1_bed as string,
                floor_apartments_2_bed: apart_2_bed as string,
                floor_apartments_3_bed: apart_3_bed as string,
                floor_apartments_4_bed: apart_4_bed as string,
                floor_apartments_5_bed: apart_5_bed as string,
                floor_apartments_duplex: apart_duplex as string,
                floor_apartments_penthouse: apart_penthouse as string,
                floor_has_furnished: apart_furnished as string,
                floor_has_semi_furnished: apart_semi_furnished as string,
                floor_has_service_apartments: service_apartment as string,
                floor_has_hotel_suites_apartments: hotel_suites_apartment as string,
                size_min: isNaN(Number(size_min)) ? null : Number(size_min),
                size_max: isNaN(Number(size_max)) ? null : Number(size_max),
                avg_sale_price: isNaN(Number(avg_sale_price)) ? null : Number(avg_sale_price),
                avg_monthly_rent: isNaN(Number(avg_monthly_rent)) ? null : Number(avg_monthly_rent),
                instalment_plan: instalment_plan,
                instalment_period: isNaN(Number(instalment_period)) ? null : Number(instalment_period),
                down_payment_amount: isNaN(Number(down_payment_amount)) ? null : Number(down_payment_amount),
                instalment_amount: isNaN(Number(instalment_amount)) ? null : Number(instalment_amount),
                possession_amount: isNaN(Number(possession_amount)) ? null : Number(possession_amount),
                remarks: remarks as string
            }

            // console.log("plot_object")
            // console.log(plot_object)

            await AddPlot(plot_object)
            // console.log("add_plot_output")
            // console.log(add_plot_output)

            // console.log("isAdding 2");
            // console.log(isAdding);
            // if (isAdding) {
            //     console.log("redictecting")
            //     // redirect("/buildings/" + building_id);
            //     router.push("/buildings/" + building_id); // Replace with your desired route
            // }


        } catch (error) {

            console.error('Error submitting plot:', error);

        } finally {
            // setIsAdding(false)
            setIsSaving(false)


        }

        return true;

    };


    return (
        // 
        <>
            {/* <div className="text-lg">{building?.name}</div> */}
            <div className="text-lg">Add Floor Information</div>
            <div className="container border-2  ">
                {/* {building?.name} */}
                <div className="mx-4">
                    <form
                        onSubmit={async (e) => {
                            e.preventDefault();

                            if (!isAdding) {  // Only proceed if currently false
                                try {
                                    setIsAdding(true);
                                    const result = await handleSubmit();
                                    if (result) {
                                        router.push("/buildings/" + building_id); // Wait for navigation to complete
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

                        {/* Inputs  */}
                        <div className="">
                            {/* <Link href={'/buildings/' + building_id}>{building_id}</Link> */}


                            <div className="mt-4 ">
                                <label
                                    htmlFor="building-name"
                                    className="block mb-2 text-sm font-medium "
                                >
                                    Building Name: <Link href={'/buildings/' + building_id}>{current_building.name}</Link>
                                </label>


                            </div>
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

                            <div className="mt-4 ">
                                <label
                                    htmlFor="building-id"
                                    className="block mb-2 text-sm font-medium "
                                >
                                    Building ID:
                                </label>
                                <Input
                                    type="text"
                                    id="building-id"
                                    name="building-id"
                                    className="input input-bordered dark:bg-slate-700  w-full max-w-xs border-2 bg-gray-400 border-gray-400 cursor-not-allowed disabled:bg-gray-200"
                                    placeholder=""
                                    value={building_id}
                                    // defaultValue={building_id}
                                    onChange={() => (building_id)}

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
                                    id="floor-date"
                                    name="floor-date"
                                    // defaultValue="2024-12-13"
                                    // defaultValue={(new Date).toISOString().split('T')[0]}
                                    value={(new Date).toISOString().split('T')[0]}
                                    // value={entryDate}
                                    className="max-w-xs border-gray-400  border-2 text-sm rounded focus:ring-blue-500  block w-full p-2.5"
                                    onChange={(e) => setEntryDate(e.target.value)}
                                    placeholder="date"
                                />
                            </div>



                            {/* Floor Number  */}
                            <div className="mt-4">
                                <label
                                    htmlFor="building-floor-no"
                                    className="block mb-2 text-sm font-medium"
                                >
                                    Floor Number
                                </label>

                                <select
                                    key={Math.random()}
                                    id="building-floor-no"
                                    name="building-floor-no"
                                    value={floor_num}
                                    // defaultValue={floor_num}
                                    className="select  w-full text-sm pl-2 h-10 max-w-xs border-2 rounded border-gray-400 bg-background"
                                    onChange={(e) => setFloor_num(e.target.value)}
                                >
                                    <option value="">Select</option>
                                    <option value="Basement">Basement</option>
                                    <option value="Lower Ground">Lower Ground</option>
                                    <option value="Ground">Ground</option>
                                    <option value="mezzanine">mezzanine</option>
                                    <option value="1st">1st</option>
                                    <option value="2nd">2nd</option>
                                    <option value="3rd">3rd</option>
                                    <option value="4th">4th</option>
                                    <option value="5th">5th</option>
                                    <option value="6th">6th</option>
                                    <option value="7th">7th</option>
                                    <option value="8th">8th</option>
                                    <option value="9th">9th</option>
                                    <option value="10th">10th</option>
                                    <option value="11th">11th</option>
                                    <option value="12th">12th</option>
                                    <option value="13th">13th</option>
                                    <option value="14th">14th</option>
                                    <option value="15th">15th</option>
                                    <option value="16th">16th</option>
                                    <option value="17th">17th</option>
                                    <option value="18th">18th</option>
                                    <option value="19th">19th</option>
                                    <option value="20th">20th</option>
                                    <option value="21st">21st</option>
                                    <option value="22nd">22nd</option>
                                    <option value="23rd">23rd</option>
                                    <option value="24th">24th</option>
                                    <option value="25th">25th</option>
                                    <option value="26th">26th</option>
                                    <option value="27th">27th</option>
                                    <option value="28th">28th</option>
                                    <option value="29th">29th</option>
                                    <option value="30th">30th</option>
                                    <option value="31st">31st</option>
                                    <option value="32nd">32nd</option>
                                    <option value="33rd">33rd</option>
                                    <option value="34th">34th</option>
                                    <option value="35th">35th</option>
                                    <option value="36th">36th</option>
                                    <option value="37th">37th</option>
                                    <option value="38th">38th</option>
                                    <option value="39th">39th</option>
                                    <option value="40th">40th</option>
                                    <option value="41st">41st</option>
                                    <option value="42nd">42nd</option>
                                    <option value="43rd">43rd</option>
                                    <option value="44th">44th</option>
                                    <option value="45th">45th</option>
                                    <option value="46th">46th</option>
                                    <option value="47th">47th</option>
                                    <option value="48th">48th</option>
                                    <option value="49th">49th</option>
                                    <option value="50th">50th</option>
                                    <option value="51st">51st</option>
                                    <option value="52nd">52nd</option>
                                    <option value="53rd">53rd</option>
                                    <option value="54th">54th</option>
                                    <option value="55th">55th</option>
                                    <option value="56th">56th</option>
                                    <option value="57th">57th</option>
                                    <option value="58th">58th</option>
                                    <option value="59th">59th</option>
                                    <option value="60th">60th</option>
                                </select>

                                {/* <Select
                                    key={Math.random()}
                                    value={floor_num}
                                    // defaultValue={floor_num}
                                    onValueChange={(e) => setFloor_num(e.target.value)}
                                    name="building-floor-no">
                                    <SelectTrigger
                                        id="building-floor-no"
                                        className="select  w-full max-w-xs border-2 border-gray-400">
                                        <SelectValue placeholder="" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectLabel></SelectLabel>
                                            <SelectItem value="Basement">Basement</SelectItem>
                                            <SelectItem value="Lower Ground">Lower Ground</SelectItem>
                                            <SelectItem value="Ground">Ground</SelectItem>
                                            <SelectItem value="mezzanine">mezzanine</SelectItem>
                                            <SelectItem value="1st">1st</SelectItem>
                                            <SelectItem value="2nd">2nd</SelectItem>
                                            <SelectItem value="3rd">3rd</SelectItem>
                                            <SelectItem value="4th">4th</SelectItem>
                                            <SelectItem value="5th">5th</SelectItem>
                                            <SelectItem value="6th">6th</SelectItem>
                                            <SelectItem value="7th">7th</SelectItem>
                                            <SelectItem value="8th">8th</SelectItem>
                                            <SelectItem value="9th">9th</SelectItem>
                                            <SelectItem value="10th">10th</SelectItem>
                                            <SelectItem value="11th">11th</SelectItem>
                                            <SelectItem value="12th">12th</SelectItem>
                                            <SelectItem value="13th">13th</SelectItem>
                                            <SelectItem value="14th">14th</SelectItem>
                                            <SelectItem value="15th">15th</SelectItem>
                                            <SelectItem value="16th">16th</SelectItem>
                                            <SelectItem value="17th">17th</SelectItem>
                                            <SelectItem value="18th">18th</SelectItem>
                                            <SelectItem value="19th">19th</SelectItem>
                                            <SelectItem value="20th">20th</SelectItem>
                                            <SelectItem value="21st">21st</SelectItem>
                                            <SelectItem value="22nd">22nd</SelectItem>
                                            <SelectItem value="23rd">23rd</SelectItem>
                                            <SelectItem value="24th">24th</SelectItem>
                                            <SelectItem value="25th">25th</SelectItem>
                                            <SelectItem value="26th">26th</SelectItem>
                                            <SelectItem value="27th">27th</SelectItem>
                                            <SelectItem value="28th">28th</SelectItem>
                                            <SelectItem value="29th">29th</SelectItem>
                                            <SelectItem value="30th">30th</SelectItem>
                                            <SelectItem value="31st">31st</SelectItem>
                                            <SelectItem value="32nd">32nd</SelectItem>
                                            <SelectItem value="33rd">33rd</SelectItem>
                                            <SelectItem value="34th">34th</SelectItem>
                                            <SelectItem value="35th">35th</SelectItem>
                                            <SelectItem value="36th">36th</SelectItem>
                                            <SelectItem value="37th">37th</SelectItem>
                                            <SelectItem value="38th">38th</SelectItem>
                                            <SelectItem value="39th">39th</SelectItem>
                                            <SelectItem value="40th">40th</SelectItem>
                                            <SelectItem value="41st">41st</SelectItem>
                                            <SelectItem value="42nd">42nd</SelectItem>
                                            <SelectItem value="43rd">43rd</SelectItem>
                                            <SelectItem value="44th">44th</SelectItem>
                                            <SelectItem value="45th">45th</SelectItem>
                                            <SelectItem value="46th">46th</SelectItem>
                                            <SelectItem value="47th">47th</SelectItem>
                                            <SelectItem value="48th">48th</SelectItem>
                                            <SelectItem value="49th">49th</SelectItem>
                                            <SelectItem value="50th">50th</SelectItem>
                                            <SelectItem value="51st">51st</SelectItem>
                                            <SelectItem value="52nd">52nd</SelectItem>
                                            <SelectItem value="53rd">53rd</SelectItem>
                                            <SelectItem value="54th">54th</SelectItem>
                                            <SelectItem value="55th">55th</SelectItem>
                                            <SelectItem value="56th">56th</SelectItem>
                                            <SelectItem value="57th">57th</SelectItem>
                                            <SelectItem value="58th">58th</SelectItem>
                                            <SelectItem value="59th">59th</SelectItem>
                                            <SelectItem value="60th">60th</SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select> */}
                            </div>

                            {/* Floor Type  */}
                            <div className="mt-4">
                                <label
                                    htmlFor="building-floor-type"
                                    className="block mb-2 text-sm font-medium"
                                >
                                    Floor Type
                                </label>
                                <select
                                    key={Math.random()}
                                    id="building-floor-type"
                                    name="building-floor-type"
                                    value={floor_type}
                                    // defaultValue={floor_type}
                                    className="select  w-full text-sm pl-2 h-10 max-w-xs border-2 rounded border-gray-400 bg-background"
                                    onChange={(e) => setFloor_Type(e.target.value)}
                                >

                                    <option value="">Select</option>
                                    <option value="Retails">Retails</option>
                                    <option value="Penthouse">Penthouse</option>
                                    <option value="Offices">Offices</option>
                                    <option value="Apartment">Apartment</option>
                                    <option value="Other">Other</option>
                                </select>

                            </div>

                            {/* Apartment size  */}
                            {
                                floor_type === "Apartment" &&
                                <>
                                    {/* Unit Type  */}
                                    <div className="mt-4">
                                        <label
                                            // htmlFor="building-floor-unit-type"
                                            className="block mb-2 text-sm font-medium"
                                        >
                                            Unit Type:
                                        </label>



                                        <div className="grid grid-cols-6 gap-4 mt-4">


                                            {
                                                floor_type === "Apartment" &&
                                                <>
                                                    {
                                                        current_building.apartments_studio === "yes" &&
                                                        <>
                                                            <div className="flex items-center mb-4 ml-2">
                                                                <input
                                                                    id="floor-apartments-studio"
                                                                    name="floor-apartments-studio"
                                                                    type="checkbox"
                                                                    // value="yes"
                                                                    checked={apart_studio === "yes"}
                                                                    onChange={(e) => setApart_studio(e.target.checked ? "yes" : "")}

                                                                    // defaultValue={undefined}
                                                                    // onChange={(e) => setApart_studio(e.target.value)}
                                                                    className="checkbox checkbox-primary"
                                                                />
                                                                <label
                                                                    htmlFor="floor-apartments-studio"
                                                                    className="ml-2 text-sm font-medium  "
                                                                >
                                                                    Studio
                                                                </label>
                                                            </div>
                                                        </>

                                                    }
                                                    {
                                                        current_building.apartments_has_type_1_bed === "yes" &&
                                                        <>
                                                            <div className="flex items-center mb-4 ml-2">
                                                                <input
                                                                    id="floor-apartments-1-bed"
                                                                    name="floor-apartments-1-bed"
                                                                    type="checkbox"
                                                                    checked={apart_1_bed === "yes"}
                                                                    onChange={(e) => setApart_1_bed(e.target.checked ? "yes" : "")}
                                                                    className="checkbox checkbox-primary"
                                                                />
                                                                <label
                                                                    htmlFor="floor-apartments-1-bed"
                                                                    className="ml-2 text-sm font-medium  "
                                                                >
                                                                    1 Bed
                                                                </label>
                                                            </div>
                                                        </>

                                                    }
                                                    {
                                                        current_building.apartments_has_type_2_bed === "yes" &&
                                                        <>
                                                            <div className="flex items-center mb-4 ml-2">
                                                                <input
                                                                    id="floor-apartments-2-bed"
                                                                    name="floor-apartments-2-bed"
                                                                    type="checkbox"
                                                                    checked={apart_2_bed === "yes"}
                                                                    onChange={(e) => setApart_2_bed(e.target.checked ? "yes" : "")}
                                                                    className="checkbox checkbox-primary"
                                                                />
                                                                <label
                                                                    htmlFor="floor-apartments-2-bed"
                                                                    className="ml-2 text-sm font-medium  "
                                                                >
                                                                    2 Bed
                                                                </label>
                                                            </div>
                                                        </>

                                                    }
                                                    {
                                                        current_building.apartments_has_type_3_bed === "yes" &&
                                                        <>
                                                            <div className="flex items-center mb-4 ml-2">
                                                                <input
                                                                    id="floor-apartments-3-bed"
                                                                    name="floor-apartments-3-bed"
                                                                    checked={apart_3_bed === "yes"}
                                                                    onChange={(e) => setApart_3_bed(e.target.checked ? "yes" : "")}
                                                                    type="checkbox"
                                                                    className="checkbox checkbox-primary"
                                                                />
                                                                <label
                                                                    htmlFor="floor-apartments-3-bed"
                                                                    className="ml-2 text-sm font-medium  "
                                                                >
                                                                    3 Bed
                                                                </label>
                                                            </div>
                                                        </>

                                                    }
                                                    {
                                                        current_building.apartments_has_type_4_bed === "yes" &&
                                                        <>
                                                            <div className="flex items-center mb-4 ml-2">
                                                                <input
                                                                    id="floor-apartments-4-bed"
                                                                    name="floor-apartments-4-bed"
                                                                    type="checkbox"
                                                                    checked={apart_4_bed === "yes"}
                                                                    onChange={(e) => setApart_4_bed(e.target.checked ? "yes" : "")}
                                                                    className="checkbox checkbox-primary"
                                                                />
                                                                <label
                                                                    htmlFor="floor-apartments-4-bed"
                                                                    className="ml-2 text-sm font-medium  "
                                                                >
                                                                    4 Bed
                                                                </label>
                                                            </div>
                                                        </>

                                                    }
                                                    {
                                                        current_building.apartments_has_type_5_bed === "yes" &&
                                                        <>
                                                            <div className="flex items-center mb-4 ml-2">
                                                                <input
                                                                    id="floor-apartments-5-bed"
                                                                    name="floor-apartments-5-bed"
                                                                    type="checkbox"
                                                                    checked={apart_5_bed === "yes"}
                                                                    onChange={(e) => setApart_5_bed(e.target.checked ? "yes" : "")}
                                                                    className="checkbox checkbox-primary"
                                                                />
                                                                <label
                                                                    htmlFor="floor-apartments-5-bed"
                                                                    className="ml-2 text-sm font-medium  "
                                                                >
                                                                    5 Bed
                                                                </label>
                                                            </div>
                                                        </>

                                                    }
                                                    {
                                                        current_building.apartments_has_type_duplex === "yes" &&
                                                        <>
                                                            <div className="flex items-center mb-4 ml-2">
                                                                <input
                                                                    id="floor-apartments-duplex"
                                                                    name="floor-apartments-duplex"
                                                                    type="checkbox"
                                                                    checked={apart_duplex === "yes"}
                                                                    onChange={(e) => setApart_duplex(e.target.checked ? "yes" : "")}
                                                                    className="checkbox checkbox-primary"
                                                                />
                                                                <label
                                                                    htmlFor="floor-apartments-duplex"
                                                                    className="ml-2 text-sm font-medium  "
                                                                >
                                                                    Duplex
                                                                </label>
                                                            </div>
                                                        </>

                                                    }
                                                    {
                                                        current_building.apartments_has_type_penthouse === "yes" &&
                                                        <>
                                                            <div className="flex items-center mb-4 ml-2">
                                                                <input
                                                                    id="floor-apartments-penthouse"
                                                                    name="floor-apartments-penthouse"
                                                                    type="checkbox"
                                                                    checked={apart_penthouse === "yes"}
                                                                    onChange={(e) => setApart_penthouse(e.target.checked ? "yes" : "")}
                                                                    className="checkbox checkbox-primary"
                                                                />
                                                                <label
                                                                    htmlFor="floor-apartments-penthouse"
                                                                    className="ml-2 text-sm font-medium  "
                                                                >
                                                                    Penthhouse
                                                                </label>
                                                            </div>
                                                        </>

                                                    }
                                                    {
                                                        current_building.has_furnished === "yes" &&
                                                        <>
                                                            <div className="flex items-center mb-4 ml-2">
                                                                <input
                                                                    id="floor-has-furnished"
                                                                    name="floor-has-furnished"
                                                                    type="checkbox"
                                                                    checked={apart_furnished === "yes"}
                                                                    onChange={(e) => setApart_furnished(e.target.checked ? "yes" : "")}
                                                                    className="checkbox checkbox-primary"
                                                                />
                                                                <label
                                                                    htmlFor="floor-has-furnished"
                                                                    className="ml-2 text-sm font-medium  "
                                                                >
                                                                    Furnished
                                                                </label>
                                                            </div>
                                                        </>

                                                    }
                                                    {
                                                        current_building.has_semi_furnished === "yes" &&
                                                        <>
                                                            <div className="flex items-center mb-4 ml-2">
                                                                <input
                                                                    id="floor-has-semi-furnished"
                                                                    name="floor-has-semi-furnished"
                                                                    type="checkbox"
                                                                    checked={apart_semi_furnished === "yes"}
                                                                    onChange={(e) => setApart_semi_furnished(e.target.checked ? "yes" : "")}
                                                                    className="checkbox checkbox-primary"
                                                                />
                                                                <label
                                                                    htmlFor="floor-has-semi-furnished"
                                                                    className="ml-2 text-sm font-medium"
                                                                >
                                                                    Semi Furnished
                                                                </label>
                                                            </div>
                                                        </>

                                                    }
                                                    {
                                                        current_building.has_service_apartments === "yes" &&
                                                        <>
                                                            <div className="flex items-center mb-4 ml-2">
                                                                <input
                                                                    id="floor-has-service-apartments"
                                                                    name="floor-has-service-apartments"
                                                                    type="checkbox"
                                                                    checked={service_apartment === "yes"}
                                                                    onChange={(e) => setService_apartment(e.target.checked ? "yes" : "")}
                                                                    className="checkbox checkbox-primary"
                                                                />
                                                                <label
                                                                    htmlFor="floor-has-service-apartments"
                                                                    className="ml-2 text-sm font-medium"
                                                                >
                                                                    Service Apartments
                                                                </label>
                                                            </div>
                                                        </>

                                                    }
                                                    {
                                                        current_building.has_hotel_suites_apartments === "yes" &&
                                                        <>
                                                            <div className="flex items-center mb-4 ml-2">
                                                                <input
                                                                    id="floor-has-hotel-suites-apartments"
                                                                    name="floor-has-hotel-suites-apartments"
                                                                    type="checkbox"
                                                                    checked={hotel_suites_apartment === "yes"}
                                                                    onChange={(e) => setHotel_suites_apartment(e.target.checked ? "yes" : "")}
                                                                    className="checkbox checkbox-primary"
                                                                />
                                                                <label
                                                                    htmlFor="floor-has-hotel-suites-apartments"
                                                                    className="ml-2 text-sm font-medium"
                                                                >
                                                                    Hotel Suites Apartments
                                                                </label>
                                                            </div>
                                                        </>

                                                    }
                                                </>

                                            }


                                        </div>

                                    </div>
                                </>

                            }

                            {/* Building Floor Occupancy  */}
                            <div className="mt-4">
                                <label
                                    htmlFor="building-floor-occupancy"
                                    className="block mb-2 text-sm font-medium"
                                >
                                    Occupancy Ratio
                                </label>
                                <div className="flex">
                                    <Input
                                        type="text"
                                        id="building-floor-occupancy"
                                        name="building-floor-occupancy"
                                        className="input input-bordered w-full max-w-xs border-2 border-gray-400 "
                                        value={occupancy}
                                        // defaultValue={occupancy}
                                        placeholder=""

                                        onChange={(e) => setOccupancy(e.target.value)}
                                    />
                                    {/* {errors["building-floor-avg-sale-price"] && <p className="text-red-500 text-sm mt-1">*</p>} */}
                                    <div className="m-4">
                                        {isNaN(Number(occupancy)) ? <span className="text-red-500 text-sm mt-1">Enter number only</span> : (occupancy + "%").toLocaleString()}
                                        {/* {Number(avg_sale_price).toLocaleString()} */}
                                    </div>
                                    {/* <div className="m-4">
                                        {occupancy + "%"}
                                    </div> */}
                                </div>
                            </div>

                            {/* Size Minimum (Sq. Ft.)  */}
                            <div className="">
                                <label
                                    htmlFor="building-floor-size-min"
                                    className="block mb-2 text-sm font-medium"
                                >
                                    Size Minimum (Sq. Ft.)
                                </label>
                                <div className="flex">
                                    <Input
                                        type="text"
                                        id="building-floor-size-min"
                                        value={size_min}
                                        // defaultValue={size_min}
                                        name="building-floor-size-min"
                                        className="input input-bordered  w-full max-w-xs border-2 border-gray-400 "
                                        placeholder="(Sq. Ft.)"
                                        onChange={(e) => setSize_Min(e.target.value)}
                                    />
                                    {/* {errors["building-floor-avg-sale-price"] && <p className="text-red-500 text-sm mt-1">*</p>} */}
                                    <div className="m-4">
                                        {isNaN(Number(size_min)) ? <span className="text-red-500 text-sm mt-1">Enter number only</span> : Number(size_min).toLocaleString()}
                                        {/* {Number(avg_sale_price).toLocaleString()} */}
                                    </div>
                                </div>

                            </div>

                            {/* Size Maximum (Sq. Ft.)  */}
                            <div className="">
                                <label
                                    htmlFor="building-floor-size-max"
                                    className="block mb-2 text-sm font-medium"
                                >
                                    Size Maximum (Sq. Ft.)
                                </label>
                                <div className="flex">
                                    <Input
                                        type="text"
                                        id="building-floor-size-max"
                                        name="building-floor-size-max"
                                        className="input input-bordered w-full max-w-xs border-2 border-gray-400 "
                                        placeholder="(Sq. Ft.)"
                                        value={size_max}
                                        // defaultValue={size_max}
                                        onChange={(e) => setSize_Max(e.target.value)}
                                    />
                                    {/* {errors["building-floor-avg-sale-price"] && <p className="text-red-500 text-sm mt-1">*</p>} */}
                                    <div className="m-4">
                                        {isNaN(Number(size_max)) ? <span className="text-red-500 text-sm mt-1">Enter number only</span> : Number(size_max).toLocaleString()}
                                        {/* {Number(avg_sale_price).toLocaleString()} */}
                                    </div>
                                </div>
                            </div>

                            {/* Avg. Sale Price */}
                            <div className="">
                                <label
                                    htmlFor="building-floor-avg-sale-price"
                                    className="block mb-2 text-sm font-medium"
                                >
                                    Average Sale Price (Per Sq. Ft.)
                                </label>
                                <div className="flex">
                                    <Input
                                        type="text"
                                        id="building-floor-avg-sale-price"
                                        name="building-floor-avg-sale-price"
                                        className="input input-bordered  w-full max-w-xs border-2 border-gray-400 "
                                        placeholder="Rs."
                                        value={avg_sale_price}
                                        onChange={(e) => setAvg_Sale_Price(e.target.value)}
                                    />
                                    <div className="m-4">
                                        {isNaN(Number(avg_sale_price)) ? <span className="text-red-500 text-sm mt-1">Enter number only</span> : Number(avg_sale_price).toLocaleString()}
                                        {/* {Number(avg_sale_price).toLocaleString()} */}
                                    </div>
                                </div>
                            </div>

                            {/* Avg. Monthly Rent */}
                            <div className="">
                                <label
                                    htmlFor="building-floor-avg-monthly-rent"
                                    className="block mb-2 text-sm font-medium"
                                >
                                    Average Monthly Rent (Sq. Ft.)
                                </label>
                                <div className="flex">
                                    <Input
                                        type="text"
                                        id="building-floor-avg-monthly-rent"
                                        name="building-floor-avg-monthly-rent"
                                        className="input input-bordered  w-full max-w-xs border-2 border-gray-400 "
                                        placeholder="Rs."
                                        value={avg_monthly_rent}
                                        // defaultValue={avg_monthly_rent}
                                        // min="0"
                                        onChange={(e) => setAvg_Monthly_Rent(e.target.value)}
                                    />
                                    {/* {errors["building-floor-avg-monthly-rent"] && <p className="text-red-500 text-sm mt-1">{errors["building-floor-avg-monthly-rent"]}</p>} */}
                                    <div className="m-4">
                                        {isNaN(Number(avg_monthly_rent)) ? <span className="text-red-500 text-sm mt-1">Enter number only</span> : Number(avg_monthly_rent).toLocaleString()}
                                        {/* {Number(avg_sale_price).toLocaleString()} */}
                                    </div>
                                </div>
                            </div>

                            {/* Installment Plan  */}
                            <div className="">
                                <label
                                    htmlFor="building-instalment-plan"
                                    className="block mb-2 text-sm font-medium"
                                >
                                    Installment Plan
                                </label>

                                <select
                                    id="building-instalment-plan"
                                    name="building-instalment-plan"
                                    className="select  w-full text-sm pl-2 h-10 max-w-xs border-2 rounded border-gray-400 bg-background"
                                    // value={instalment_plan}
                                    // defaultValue={instalment_plan}
                                    onChange={(e) => setInstalment_plan(e.target.value)}
                                >
                                    <option value="">Select</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>

                            </div>

                            {/* Installment Period (Month) */}
                            <div className="mt-4 ">
                                <label
                                    htmlFor="building-floor-instalment-period"
                                    className="block mb-2 text-sm font-medium"
                                >
                                    Installment Period (Month)
                                </label>
                                <div className="flex">
                                    <Input
                                        type="text"
                                        id="building-floor-instalment-period"
                                        name="building-floor-instalment-period"
                                        className="input input-bordered  w-full max-w-xs border-2 border-gray-400 "
                                        placeholder=""
                                        value={instalment_period}
                                        // defaultValue={instalment_period}
                                        // value={avg_monthly_rent}
                                        // min="0"
                                        onChange={(e) => setInstalment_Period(e.target.value)}
                                    />
                                    {/* {errors["building-floor-avg-monthly-rent"] && <p className="text-red-500 text-sm mt-1">{errors["building-floor-avg-monthly-rent"]}</p>} */}
                                    <div className="m-4">
                                        {isNaN(Number(instalment_period)) ? <span className="text-red-500 text-sm mt-1">Enter number only</span> : Number(instalment_period).toLocaleString()}
                                        {/* {Number(avg_sale_price).toLocaleString()} */}
                                    </div>
                                </div>
                            </div>

                            {/* Down Payment */}
                            <div className="">
                                <label
                                    htmlFor="building-floor-down-payment-amount"
                                    className="block mb-2 text-sm font-medium"
                                >
                                    Down Payment
                                </label>
                                <div className="flex">
                                    <Input
                                        type="text"
                                        id="building-floor-down-payment-amount"
                                        name="building-floor-down-payment-amount"
                                        className="input input-bordered  w-full max-w-xs border-2 border-gray-400 "
                                        placeholder="Rs."
                                        value={down_payment_amount}
                                        // defaultValue={down_payment_amount}
                                        // value={avg_monthly_rent}
                                        // min="0"
                                        onChange={(e) => setDown_Payment_Amount(e.target.value)}
                                    />
                                    {/* {errors["building-floor-avg-monthly-rent"] && <p className="text-red-500 text-sm mt-1">{errors["building-floor-avg-monthly-rent"]}</p>} */}
                                    <div className="m-4">
                                        {isNaN(Number(down_payment_amount)) ? <span className="text-red-500 text-sm mt-1">Enter number only</span> : Number(down_payment_amount).toLocaleString()}
                                        {/* {Number(avg_sale_price).toLocaleString()} */}
                                    </div>
                                </div>
                            </div>

                            {/* Instalment Amount */}
                            <div className="">
                                <label
                                    htmlFor="building-floor-instalment-amount"
                                    className="block mb-2 text-sm font-medium"
                                >
                                    Total Sale Price
                                </label>
                                <div className="flex">
                                    <Input
                                        type="text"
                                        id="building-floor-instalment-amount"
                                        name="building-floor-instalment-amount"
                                        className="input input-bordered  w-full max-w-xs border-2 border-gray-400 "
                                        placeholder="Rs."
                                        value={instalment_amount}
                                        // defaultValue={instalment_amount}
                                        // value={avg_monthly_rent}
                                        // min="0"
                                        onChange={(e) => setInstalment_Amount(e.target.value)}
                                    />
                                    {/* {errors["building-floor-avg-monthly-rent"] && <p className="text-red-500 text-sm mt-1">{errors["building-floor-avg-monthly-rent"]}</p>} */}
                                    <div className="m-4">
                                        {isNaN(Number(instalment_amount)) ? <span className="text-red-500 text-sm mt-1">Enter number only</span> : Number(instalment_amount).toLocaleString()}
                                        {/* {Number(avg_sale_price).toLocaleString()} */}
                                    </div>
                                </div>
                            </div>

                            {/* Possession Amount */}
                            <div className="">
                                <label
                                    htmlFor="building-floor-possession-amount"
                                    className="block mb-2 text-sm font-medium"
                                >
                                    Possession Amount
                                </label>
                                <div className="flex">
                                    <Input
                                        type="text"
                                        id="building-floor-possession-amount"
                                        name="building-floor-possession-amount"
                                        className="input input-bordered  w-full max-w-xs border-2 border-gray-400 "
                                        placeholder="Rs."
                                        value={possession_amount}
                                        // defaultValue={possession_amount}
                                        // value={avg_monthly_rent}
                                        // min="0"
                                        onChange={(e) => setPossession_Amount(e.target.value)}
                                    />
                                    {/* {errors["building-floor-avg-monthly-rent"] && <p className="text-red-500 text-sm mt-1">{errors["building-floor-avg-monthly-rent"]}</p>} */}
                                    <div className="m-4">
                                        {isNaN(Number(possession_amount)) ? <span className="text-red-500 text-sm mt-1">Enter number only</span> : Number(possession_amount).toLocaleString()}
                                        {/* {Number(avg_sale_price).toLocaleString()} */}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Floor Remarks  */}
                        <div className="mt-4 mb-4">
                            <label htmlFor="message" className="block mb-2 text-sm font-medium">
                                Your Remarks
                            </label>
                            <Textarea
                                id="building-floor-remarks"
                                name="building-floor-remarks"
                                className="textarea w-full border-2 border-gray-400 "
                                placeholder="Leave a comment..."
                                value={remarks}
                                // defaultValue={remarks}
                                onChange={(e) => setRemarks(e.target.value)}
                            ></Textarea>
                            {/* {errors["building-floor-remarks"] && <p className="text-red-500 text-sm mt-1">{errors["building-floor-remarks"]}</p>} */}
                        </div>

                        {/* Submit button */}
                        <div className="flex gap-6 justify-center mt-3 mb-2">
                            {/* <AddFloorButton /> */}
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

                                                setInstalment_plan("")
                                                setOccupancy("")
                                                setAvg_Sale_Price("")
                                                setAvg_Monthly_Rent("")
                                                setDown_Payment_Amount("")
                                                setInstalment_Period("")
                                                setInstalment_Amount("")
                                                setPossession_Amount("")
                                                setEntryDate("")
                                                setSize_Min("")
                                                setSize_Max("")
                                                setRemarks("")
                                                setFloor_num("")
                                                setFloor_Type("")
                                                setUnit_type("")
                                                setApart_studio("")
                                                setApart_1_bed("")
                                                setApart_2_bed("")
                                                setApart_3_bed("")
                                                setApart_4_bed("")
                                                setApart_5_bed("")
                                                setApart_duplex("")
                                                setApart_penthouse("")
                                                setApart_furnished("")
                                                setApart_semi_furnished("")
                                                setService_apartment("")
                                                setHotel_suites_apartment("")

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
                                <Link href="/buildings" >Cancel</Link>
                            </Button>

                        </div>

                    </form>
                </div>
            </div>

        </>
    );
}

