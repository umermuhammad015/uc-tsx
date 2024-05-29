"use client";
import Link from "next/link";
import prisma from "../../../../db";
import { useState } from "react";

import { redirect } from "next/navigation";
import AddFloorButton from "../../../components/AddFloorButton";
import createFloor from "../../../../actions/createFloor"

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
  params: { id: number }
  // searchParams: { [key: string]: string | string[] | undefined }
}

export default function Page({ params }: Props) {
  console.log(params.id);



  const [avg_sale_price, setAvg_Sale_Price] = useState(0);
  const [avg_monthly_rent, setAvg_Monthly_Rent] = useState(0);
  const [down_payment_amount, setDown_Payment_Amount] = useState(0);
  const [instalment_period, setInstalment_Period] = useState(0);
  const [instalment_amount, setInstalment_Amount] = useState(0);
  const [possession_amount, setPossession_Amount] = useState(0);
  const [size_min, setSize_Min] = useState(0);
  const [size_max, setSize_Max] = useState(0);

  return (
    <><div className="text-lg">Add Floor Information</div>
      <div className="container border-2  ">

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
                  className="input input-bordered  w-full max-w-xs border-2 border-gray-400 cursor-not-allowed disabled:bg-gray-200"
                  placeholder=""
                  value={params?.id}
                // defaultValue={building?.id}
                // value="hi"
                // defaultValue="hello"
                // disabled
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
                <Select
                  name="building-floor-no">
                  <SelectTrigger
                    id="building-floor-no"
                    className="select  w-full max-w-xs border-2 border-gray-400">
                    <SelectValue placeholder="Select Floor" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel></SelectLabel>
                      <SelectItem value="Lower Ground">Lower Ground</SelectItem>
                      <SelectItem value="Ground">Ground</SelectItem>
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
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>

              {/* Floor Type  */}
              <div className="mt-4">
                <label
                  htmlFor="building-floor-type"
                  className="block mb-2 text-sm font-medium"
                >
                  Floor Type
                </label>
                <Select
                  name="building-floor-type">
                  <SelectTrigger
                    id="building-floor-type"
                    className="select w-full max-w-xs border-2 border-gray-400">
                    <SelectValue placeholder="Select Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel></SelectLabel>
                      <SelectItem value="Retails">Retails</SelectItem>
                      <SelectItem value="Penthouse">Penthouse</SelectItem>
                      <SelectItem value="Offices">Offices</SelectItem>
                      <SelectItem value="Apartment">Apartment</SelectItem>
                      <SelectItem value="Other">Other</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>

              {/* Unit Type  */}
              <div className="mt-4">
                <label
                  htmlFor="building-floor-unit-type"
                  className="block mb-2 text-sm font-medium"
                >
                  Unit Type:
                </label>
                <Input
                  type="text"
                  id="building-floor-unit-type"
                  name="building-floor-unit-type"
                  className="input input-bordered  w-full max-w-xs border-2 border-gray-400 "
                  placeholder=""
                />
              </div>

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
                <Input
                  type="number"
                  id="building-floor-occupancy"
                  name="building-floor-occupancy"
                  className="input input-bordered w-full max-w-xs border-2 border-gray-400 "
                  placeholder=""
                  min="0"
                  max="100"
                />
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
                    type="number"
                    id="building-floor-size-min"
                    name="building-floor-size-min"
                    className="input input-bordered  w-full max-w-xs border-2 border-gray-400 "
                    placeholder="(Sq. Ft.)"
                    min="0"
                    onChange={(e) => {
                      setSize_Min(Number(e.target.value))
                      console.log(e.target.value)
                    }}
                  />
                  <div className="m-4">
                    {Number(size_min).toLocaleString()}
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
                    min="0"
                    onChange={(e) => {
                      setSize_Max(Number(e.target.value))
                      console.log(e.target.value)
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
                    min="0"
                    onChange={(e) => {
                      setAvg_Sale_Price(Number(e.target.value))
                      console.log(e.target.value)
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
                    min="0"
                    onChange={(e) => {
                      setAvg_Monthly_Rent(Number(e.target.value))
                      console.log(e.target.value)
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
                <Select
                  name="building-instalment-plan">
                  <SelectTrigger
                    id="building-instalment-plan"
                    className="select  w-full max-w-xs border-2 border-gray-400 ">
                    <SelectValue placeholder="Select Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel></SelectLabel>
                      <SelectItem value="Yes">Yes</SelectItem>
                      <SelectItem value="No">No</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>

              {/* Installment Period (Years) */}
              <div className="mt-4">
                <label
                  htmlFor="building-floor-instalment-period"
                  className="block mb-2 text-sm font-medium"
                >
                  Installment Period (Years)
                </label>
                <div className="flex">
                  <Input
                    type="text"
                    id="building-floor-instalment-period"
                    name="building-floor-instalment-period"
                    className="input input-bordered  w-full max-w-xs border-2 border-gray-400 "
                    placeholder=""
                    min="0"
                    onChange={(e) => {
                      setInstalment_Period(Number(e.target.value))
                      console.log(e.target.value)
                    }}
                  />
                  <div className="m-4">
                    {Number(instalment_period).toLocaleString()}
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
                    min="0"
                    onChange={(e) => {
                      setInstalment_Amount(Number(e.target.value))
                      console.log(e.target.value)
                    }}
                  />
                  <div className="m-4">
                    {Number(instalment_amount).toLocaleString()}
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
                    min="0"
                    onChange={(e) => {
                      setDown_Payment_Amount(Number(e.target.value))
                      console.log(e.target.value)
                    }}
                  />
                  <div className="m-4">
                    {Number(down_payment_amount).toLocaleString()}
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
                    min="0"
                    onChange={(e) => {
                      setPossession_Amount(Number(e.target.value))
                      console.log(e.target.value)
                    }}
                  />
                  <div className="m-4">
                    {Number(possession_amount).toLocaleString()}
                  </div>
                </div>
              </div>
            </div>


            {/* Floor Remarks  */}
            <div className="mt-4">
              <label htmlFor="message" className="block mb-2 text-sm font-medium">
                Your Remarks
              </label>
              <Textarea
                id="building-floor-remarks"
                name="building-floor-remarks"
                className="textarea w-full border-2 border-gray-400 "
                placeholder="Leave a comment..."
              ></Textarea>
            </div>

            {/* Submit button */}
            <div className="flex gap-6 justify-center mt-3 mb-2">
              <AddFloorButton />
              {/* <Link href="/buildings" className="flex justify-center items-center border border-black px-2 py-1 rounded-xl bg-white text-black hover:bg-red-600 hover:text-white capitalize">Cancel</Link> */}

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

