"use client";
import Link from "next/link";
import prisma from "../../../../db";
import { useCallback, useEffect, useState } from "react";

import { redirect } from "next/navigation";
import AddFloorButton from "../../../components/AddFloorButton";
import createFloor from "../../../../actions/createFloor"
import { Toaster } from "@/components/ui/toaster";
import { Button } from "@/components/ui/button"
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
import AddPlot from "@/app/buildings/components/AddFloor";
import { useToast } from "@/components/ui/use-toast";
import FetchBuilding from "@/app/buildings/components/FetchBuilding";



//   "use server";
//   const building_id = data.get("building-id")?.valueOf();
//   const building_test = data.get("building_test")?.valueOf();
//   console.log("building_test", building_test);

//   const building_name = data.get("building-name")?.valueOf();

//   const floor_no = data.get("building-floor-no")?.valueOf();

//   const floor_type = data.get("building-floor-type")?.valueOf();

//   const floor_unit_type = data.get("building-floor-unit-type")?.valueOf();

//   const floor_occupancy = data.get("building-floor-occupancy")?.valueOf();

//   const floor_size_min = data.get("building-floor-size-min")?.valueOf();

//   const floor_size_max = data.get("building-floor-size-max")?.valueOf();

//   const floor_avg_sale_price = data
//     .get("building-floor-avg-sale-price")
//     ?.valueOf();

//   const floor_avg_monthly_rent = data
//     .get("building-floor-avg-monthly-rent")

//     ?.valueOf();

//   const floor_instalment_plan = data.get("building-instalment-plan")?.valueOf();

//   const floor_instalment_period = data
//     .get("building-floor-instalment-period")

//     ?.valueOf();
//   const floor_down_payment_amount = data
//     .get("building-floor-down-payment-amount")
//     ?.valueOf();
//   const floor_instalment_amount = data
//     .get("building-floor-instalment-amount")
//     ?.valueOf();
//   const floor_possession_amount = data
//     .get("building-floor-possession-amount")
//     ?.valueOf();
//   const floor_remarks = data.get("building-floor-remarks")?.valueOf();
//   await prisma.floors.create({
//     data: {
//       building_id: Number (building_id) as number,
//       floor_type: floor_type as string,
//       floor_no: floor_no as string,
//       unit_type: floor_unit_type as string,
//       occupancy: floor_occupancy as string,
//       size_min: floor_size_min as string,
//       size_max: floor_size_max as string,
//       avg_sale_price: floor_avg_sale_price as string,
//       avg_monthly_rent: floor_avg_monthly_rent as string,
//       instalment_plan: floor_instalment_plan as string,
//       instalment_period: floor_instalment_period as string,
//       down_payment_amount: floor_down_payment_amount as string,
//       instalment_amount: floor_instalment_amount as string,
//       possession_amount: floor_possession_amount as string,
//       remarks: floor_remarks as string

//     },
//   });

//   redirect("/buildings");
// }

type Props = {
  params: { id: number, name: string }
  // searchParams: { [key: string]: string | string[] | undefined }
}

export default function Page({ params }: Props) {
  // console.log(params.id);
  const [entryDate, setEntryDate] = useState<string>((new Date).toISOString().split('T')[0]);

  const [isAdding, setIsAdding] = useState(false);
  const { toast } = useToast()

  // const[currentBuildingData, setCurrentBuildingData] = useState<any>({})

  const [current_building, setCurrent_building] = useState<any>([]);
  // const [apartment_size, setApartment_size] = useState<any>();
  const [avg_sale_price, setAvg_Sale_Price] = useState(0);
  const [avg_monthly_rent, setAvg_Monthly_Rent] = useState(0);
  const [down_payment_amount, setDown_Payment_Amount] = useState(0);
  const [instalment_period, setInstalment_Period] = useState(0);
  const [instalment_amount, setInstalment_Amount] = useState(0);
  const [possession_amount, setPossession_Amount] = useState(0);
  const [size_min, setSize_Min] = useState(0);
  const [size_max, setSize_Max] = useState(0);
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
  const [occupancy, setOccupancy] = useState(0);
  const [remarks, setRemarks] = useState<any>("");


  useEffect(() => {

    // console.log("use effect called")


    const getBuildingData = async () => {

      try {

        // console.log("trying")
        // console.log(params.id)

        const Building_data = await FetchBuilding(params.id)

        console.log("Current building data")
        console.log(Building_data)


        setCurrent_building(Building_data)

      } catch (error) {

        console.error('Error fetching society data:', error);

        // setIsAdding(!isAdding)
      }
    };


    getBuildingData();



  }, []);

  const insertPlot = async () => {

    try {

      setIsAdding(true)

      // console.log("trying")
      // console.log(params.id)

      const add_plot_output = await AddPlot(entryDate, avg_sale_price, params.id, avg_monthly_rent, down_payment_amount,
        instalment_period, instalment_amount, possession_amount, size_min, size_max, floor_num, floor_type, apart_studio,
        apart_1_bed, apart_2_bed, apart_3_bed, apart_4_bed, apart_5_bed, apart_duplex, apart_penthouse, apart_furnished,
        apart_semi_furnished, service_apartment, hotel_suites_apartment, unit_type, instalment_plan, occupancy, remarks)

      console.log("Plot added")
      console.log(add_plot_output)

      toast({
        className: "bg-green-600 rounded-lg",
        // title: "Add Price",
        description: "Floor added successfully ",

      })

      //    if (error) {
      //     toast.error(error);
      //     return
      //    }

      // toast.success('Hello World')


      setInstalment_plan("")
      setOccupancy(0)
      setAvg_Sale_Price(0)
      setAvg_Monthly_Rent(0)
      setDown_Payment_Amount(0)
      setInstalment_Period(0)
      setInstalment_Amount(0)
      setPossession_Amount(0)
      setEntryDate("")
      setSize_Min(0)
      setSize_Max(0)
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

  return (
    // 
    <>
      {/* <div className="text-lg">{building?.name}</div> */}
      <div className="text-lg">Add Floor Information</div>
      <div className="container border-2  ">
        {/* {building?.name} */}
        <div className="mx-4">
          <form action={createFloor}>

            {/* Building ID  */}
            <div className="">

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
                  value={params?.id}
                // defaultValue={building?.id}
                // value="hi"
                // defaultValue="hello"
                // disabled
                />
              </div>

              <div className="mt-4 ">
                <label
                  htmlFor="building-name"
                  className="block mb-2 text-sm font-medium "
                >
                  Building Name:
                </label>
                <Input
                  type="text"
                  id="building-name"
                  name="building-name"
                  value={current_building.name}
                  className="input input-bordered dark:bg-slate-700  w-full max-w-xs border-2 bg-gray-400 border-gray-400 cursor-not-allowed disabled:bg-gray-200"
                  placeholder=""
                  // value={params?.name}
                // defaultValue={building?.id}
                // value="hi"
                // defaultValue="hello"
                // disabled
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
                  defaultValue={(new Date).toISOString().split('T')[0]}
                  // value="12/26/2024"
                  // value={entryDate}
                  className="max-w-xs border-gray-400  border-2 text-sm rounded focus:ring-blue-500  block w-full p-2.5"
                  onChange={(e) => setEntryDate(e.target.value)}
                  placeholder="date"
                />
              </div>


              {/* Building Name 
              <div className="mt-4 ">
                <label
                  htmlFor="building-name"
                  className="block mb-2 text-sm font-medium"
                >
                  Building Name:
                </label>
                <Input
                  type="text"
                  id="building-name"
                  name="building-name"
                  className="input input-bordered  w-full max-w-xs border-2 border-gray-400 cursor-not-allowed disabled:bg-gray-200"
                  placeholder=""
                  defaultValue={params?.name}
                  disabled
                />
              </div> */}


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


                    {/* <select
                      id="building-floor-unit-type"
                      name="building-floor-unit-type"
                      className="select  w-full text-sm pl-2 h-10 max-w-xs border-2 rounded border-gray-400 bg-background"
                      value={unit_type}
                      onChange={(e) => setUnit_type(e.target.value)}
                    >
                      <option value="">Select</option>
                      {(current_building.apartments_studio === "yes") && <option value="Studio">Studio</option>}
                      {(current_building.apartments_has_type_1_bed === "yes") && <option value="1 Bed">1 Bed</option>}
                      {(current_building.apartments_has_type_2_bed === "yes") && <option value="2 Bed">2 Bed</option>}
                      {(current_building.apartments_has_type_3_bed === "yes") && <option value="3 Bed">3 Bed</option>}
                      {(current_building.apartments_has_type_4_bed === "yes") && <option value="4 Bed">4 Bed</option>}
                      {(current_building.apartments_has_type_5_bed === "yes") && <option value="5 Bed">5 Bed</option>}
                      {(current_building.apartments_has_type_penthouse === "yes") && <option value="Penthouse">Penthouse</option>}
                      {(current_building.apartments_has_type_duplex === "yes") && <option value="Duplex">Duplex</option>}
                      {(current_building.has_furnished === "yes") && <option value="Furished">Furished</option>}
                      {(current_building.has_semi_furnished === "yes") && <option value="Semi Furnished">Semi Furnished</option>}
                      {(current_building.has_service_apartments === "yes") && <option value="Service Apartments">Service Apartments</option>}
                      {(current_building.has_hotel_suites_apartments === "yes") && <option value="Hotel Suites Apartments">Hotel Suites Apartments</option>}
                    </select> */}

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
                                  value="yes"
                                  onChange={(e) => setApart_studio(e.target.value)}
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
                                  value="yes"
                                  // value={apart_1_bed}
                                  onChange={(e) => setApart_1_bed(e.target.value)}
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
                                  value="yes"
                                  // value={apart_2_bed}
                                  onChange={(e) => setApart_2_bed(e.target.value)}
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
                                  // value={apart_3_bed}
                                  onChange={(e) => setApart_3_bed(e.target.value)}
                                  type="checkbox"
                                  value="yes"
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
                                  value="yes"
                                  // value={apart_4_bed}
                                  onChange={(e) => setApart_4_bed(e.target.value)}
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
                                  value="yes"
                                  // value={apart_5_bed}
                                  onChange={(e) => setApart_5_bed(e.target.value)}
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
                                  value="yes"
                                  // value={apart_duplex}
                                  onChange={(e) => setApart_duplex(e.target.value)}
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
                                  value="yes"
                                  // value={apart_penthouse}
                                  onChange={(e) => setApart_penthouse(e.target.value)}
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
                                  value="yes"
                                  // value={apart_furnished}
                                  onChange={(e) => setApart_furnished(e.target.value)}
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
                                  value="yes"
                                  // value={apart_semi_furnished}
                                  onChange={(e) => setApart_semi_furnished(e.target.value)}
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
                                  value="yes"
                                  // value={service_apartment}
                                  onChange={(e) => setService_apartment(e.target.value)}
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
                                  value="yes"
                                  // value={hotel_suites_apartment}
                                  onChange={(e) => setHotel_suites_apartment(e.target.value)}
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

                      {/* <div className="flex items-center mb-4 ml-2">
                        <input
                          id="apartment-has-type-1-bed"
                          name="apartment-has-type-1-bed"
                          type="checkbox"
                          value="yes"
                          className="checkbox checkbox-primary"
                        />
                        <label
                          htmlFor="apartment-has-type-1-bed"
                          className="ml-2 text-sm font-medium  "
                        >
                          1-Bed
                        </label>
                      </div>

                      <div className="flex items-center mb-4 ml-2">
                        <input
                          id="apartment-has-type-2-bed"
                          name="apartment-has-type-2-bed"
                          type="checkbox"
                          value="yes"
                          className="checkbox checkbox-primary"
                        />
                        <label
                          htmlFor="apartment-has-type-2-bed"
                          className="ml-2 text-sm font-medium  "
                        >
                          2-Bed
                        </label>
                      </div>

                      <div className="flex items-center mb-4 ml-2">
                        <input
                          id="apartment-has-type-3-bed"
                          name="apartment-has-type-3-bed"
                          type="checkbox"
                          value="yes"
                          className="checkbox checkbox-primary"
                        />
                        <label
                          htmlFor="apartment-has-type-3-bed"
                          className="ml-2 text-sm font-medium  "
                        >
                          3-Bed
                        </label>
                      </div>

                      <div className="flex items-center mb-4 ml-2">
                        <input
                          id="apartment-has-type-4-bed"
                          name="apartment-has-type-4-bed"
                          type="checkbox"
                          value="yes"
                          className="checkbox checkbox-primary"
                        />
                        <label
                          htmlFor="apartment-has-type-4-bed"
                          className="ml-2 text-sm font-medium  "
                        >
                          4-Bed
                        </label>
                      </div>
                      <div className="flex items-center mb-4 ml-2">
                        <input
                          id="apartment-has-type-5-bed"
                          name="apartment-has-type-5-bed"
                          type="checkbox"
                          value="yes"
                          className="checkbox checkbox-primary"
                        />
                        <label
                          htmlFor="apartment-has-type-5-bed"
                          className="ml-2 text-sm font-medium  "
                        >
                          5-Bed
                        </label>
                      </div>

                      <div className="flex items-center mb-4 ml-2">
                        <input
                          id="apartment-has-type-duplex"
                          name="apartment-has-type-duplex"
                          type="checkbox"
                          value="yes"
                          className="checkbox checkbox-primary"
                        />
                        <label
                          htmlFor="apartment-has-type-duplex"
                          className="ml-2 text-sm font-medium  "
                        >
                          Duplex
                        </label>
                      </div>

                      <div className="flex items-center mb-4 ml-2">
                        <input
                          id="apartment-has-type-penthouse"
                          name="apartment-has-type-penthouse"
                          type="checkbox"
                          value="yes"
                          className="checkbox checkbox-primary"
                        />
                        <label
                          htmlFor="apartment-has-type-penthouse"
                          className="ml-2 text-sm font-medium  "
                        >
                          Penthouse
                        </label>
                      </div>

                      <div className="flex items-center mb-4 ml-2">
                        <input
                          id="has-furnished"
                          name="has-furnished"
                          type="checkbox"
                          value="yes"
                          className="checkbox checkbox-primary"
                        />
                        <label
                          htmlFor="has-furnished"
                          className="ml-2 text-sm font-medium  "
                        >
                          Furnished
                        </label>
                      </div>


                      <div className="flex items-center mb-4 ml-2">
                        <input
                          id="has-semi-furnished"
                          name="has-semi-furnished"
                          type="checkbox"
                          value="yes"
                          className="checkbox checkbox-primary"
                        />
                        <label
                          htmlFor="has-semi-furnished"
                          className="ml-2 text-sm font-medium  "
                        >
                          Semi-Furnished
                        </label>
                      </div>

                      <div className="flex items-center mb-4 ml-2">
                        <input
                          id="has-service-apartments"
                          name="has-service-apartments"
                          type="checkbox"
                          value="yes"
                          className="checkbox checkbox-primary"
                        />
                        <label
                          htmlFor="has-service-apartments"
                          className="ml-2 text-sm font-medium  "
                        >
                          Service Apartments
                        </label>
                      </div>

                      <div className="flex items-center mb-4 ml-2">
                        <input
                          id="has-hotel-suites-apartments"
                          name="has-hotel-suites-apartments"
                          type="checkbox"
                          value="yes"
                          className="checkbox checkbox-primary"
                        />
                        <label
                          htmlFor="has-hotel-suites-apartments"
                          className="ml-2 text-sm font-medium  "
                        >
                          Hotel Suites Apartments
                        </label>
                      </div> */}
                    </div>

                  </div>
                </>

              }



              {/* Building ID  */}
              {/* <div className="mt-4">
            <label
              htmlFor="building-id"
              className="block mb-2 text-sm font-medium"
            >
              Building ID:
            </label>
            <input
              type="text"
              id="building-id"
              name="building-id"
              className="input input-bordered input-primary w-full "
              placeholder=""
              // value={building?.id}
              defaultValue={building?.id}
              disabled
            />
          </div> */}

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
                    type="number"
                    id="building-floor-occupancy"
                    name="building-floor-occupancy"
                    className="input input-bordered w-full max-w-xs border-2 border-gray-400 "
                    value={occupancy}
                    placeholder=""
                    min={0}
                    max={100}
                    onChange={(e) => {
                      setOccupancy(Number(e.target.value))
                    }}
                  />
                  <div className="m-4">
                    {occupancy + "%"}
                  </div>
                </div>
              </div>

              {/* Size Minimum (Sq. Ft.)  */}
              <div className="mt-4">
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
                    name="building-floor-size-min"
                    className="input input-bordered  w-full max-w-xs border-2 border-gray-400 "
                    placeholder="(Sq. Ft.)"
                    min="0"
                    onChange={(e) => {
                      setSize_Min(Number(e.target.value))
                      // console.log(e.target.value)
                    }}
                  />
                  <div className="m-4">
                    {size_min ? Number(size_min).toLocaleString() : "0"}
                  </div>
                </div>

              </div>

              {/* Size Maximum (Sq. Ft.)  */}
              <div className="mt-4">
                <label
                  htmlFor="building-floor-size-max"
                  className="block mb-2 text-sm font-medium"
                >
                  Size Maximum (Sq. Ft.)
                </label>
                <div className="flex">
                  <Input
                    type="number"
                    id="building-floor-size-max"
                    name="building-floor-size-max"
                    className="input input-bordered w-full max-w-xs border-2 border-gray-400 "
                    placeholder="(Sq. Ft.)"
                    value={size_max}
                    min="0"
                    onChange={(e) => {
                      setSize_Max(Number(e.target.value))
                      // console.log(e.target.value)
                    }}
                  />
                  <div className="m-4">
                    {Number(size_max).toLocaleString()}
                  </div>
                </div>
              </div>

              {/* Avg. Sale Price */}
              <div className="mt-4">
                <label
                  htmlFor="building-floor-avg-sale-price"
                  className="block mb-2 text-sm font-medium"
                >
                  Average Sale Price (Per Sq. Ft.)
                </label>
                <div className="flex">
                  <Input
                    type="number"
                    id="building-floor-avg-sale-price"
                    name="building-floor-avg-sale-price"
                    className="input input-bordered  w-full max-w-xs border-2 border-gray-400 "
                    placeholder="Rs."
                    value={avg_sale_price}
                    min="0"
                    onChange={(e) => {
                      setAvg_Sale_Price(Number(e.target.value))
                      // console.log(e.target.value)
                    }}
                  />
                  <div className="m-4">
                    {Number(avg_sale_price).toLocaleString()}
                  </div>
                </div>
              </div>

              {/* Avg. Monthly Rent */}
              <div className="mt-4">
                <label
                  htmlFor="building-floor-avg-monthly-rent"
                  className="block mb-2 text-sm font-medium"
                >
                  Average Monthly Rent (Sq. Ft.)
                </label>
                <div className="flex">
                  <Input
                    type="number"
                    id="building-floor-avg-monthly-rent"
                    name="building-floor-avg-monthly-rent"
                    className="input input-bordered  w-full max-w-xs border-2 border-gray-400 "
                    placeholder="Rs."
                    value={avg_monthly_rent}
                    min="0"
                    onChange={(e) => {
                      setAvg_Monthly_Rent(Number(e.target.value))
                      // console.log(e.target.value)
                    }}
                  />
                  <div className="m-4">
                    {Number(avg_monthly_rent).toLocaleString()}
                  </div>
                </div>
              </div>

              {/* Installment Plan  */}


              <div className="mt-4">
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
                  value={instalment_plan}
                  onChange={(e) => setInstalment_plan(e.target.value)}
                >
                  <option value="">Select</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>

              </div>

              {/* Installment Period (Month) */}
              <div className="mt-4">
                <label
                  htmlFor="building-floor-instalment-period"
                  className="block mb-2 text-sm font-medium"
                >
                  Installment Period (Month)
                </label>
                <div className="flex">
                  <Input
                    type="number"
                    id="building-floor-instalment-period"
                    name="building-floor-instalment-period"
                    className="input input-bordered  w-full max-w-xs border-2 border-gray-400 "
                    placeholder=""
                    value={instalment_period}
                    min="0"
                    onChange={(e) => {
                      setInstalment_Period(Number(e.target.value))
                      // console.log(e.target.value)
                    }}
                  />
                  <div className="m-4">
                    {Number(instalment_period).toLocaleString()}
                  </div>
                </div>
              </div>





              {/* Down Payment */}
              <div className="mt-4">
                <label
                  htmlFor="building-floor-down-payment-amount"
                  className="block mb-2 text-sm font-medium"
                >
                  Down Payment
                </label>
                <div className="flex">
                  <Input
                    type="number"
                    id="building-floor-down-payment-amount"
                    name="building-floor-down-payment-amount"
                    className="input input-bordered  w-full max-w-xs border-2 border-gray-400 "
                    placeholder="Rs."
                    value={down_payment_amount}
                    min="0"
                    onChange={(e) => {
                      setDown_Payment_Amount(Number(e.target.value))
                      // console.log(e.target.value)
                    }}
                  />
                  <div className="m-4">
                    {Number(down_payment_amount).toLocaleString()}
                  </div>
                </div>
              </div>

              {/* Instalment Amount */}
              <div className="mt-4">
                <label
                  htmlFor="building-floor-instalment-amount"
                  className="block mb-2 text-sm font-medium"
                >
                  Total Sale Price
                </label>
                <div className="flex">
                  <Input
                    type="number"
                    id="building-floor-instalment-amount"
                    name="building-floor-instalment-amount"
                    className="input input-bordered  w-full max-w-xs border-2 border-gray-400 "
                    placeholder="Rs."
                    value={instalment_amount}
                    min="0"
                    onChange={(e) => {
                      setInstalment_Amount(Number(e.target.value))
                      // console.log(e.target.value)
                    }}
                  />
                  <div className="m-4">
                    {Number(instalment_amount).toLocaleString()}
                  </div>
                </div>
              </div>

              {/* Possession Amount */}
              <div className="mt-4">
                <label
                  htmlFor="building-floor-possession-amount"
                  className="block mb-2 text-sm font-medium"
                >
                  Possession Amount
                </label>
                <div className="flex">
                  <Input
                    type="number"
                    id="building-floor-possession-amount"
                    name="building-floor-possession-amount"
                    className="input input-bordered  w-full max-w-xs border-2 border-gray-400 "
                    placeholder="Rs."
                    value={possession_amount}
                    min="0"
                    onChange={(e) => {
                      setPossession_Amount(Number(e.target.value))
                      // console.log(e.target.value)
                    }}
                  />
                  <div className="m-4">
                    {Number(possession_amount).toLocaleString()}
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
                onChange={(e) => setRemarks(e.target.value)}
              ></Textarea>
            </div>

            {/* Submit button */}
            <div className="flex gap-6 justify-center mt-3 mb-2">
              <AddFloorButton />
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
              <Button asChild className="bg-transparent text-primary hover:bg-primary-foreground">
                <Link href="/buildings" >Cancel</Link>
              </Button>


              {/* <button
            type="submit"
            className="border border-gray-300 text-sm rounded-lg block p-2.5"
          >
            Create
          </button> */}
            </div>

          </form>
        </div>
      </div>

    </>
  );
}

