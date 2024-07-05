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
import AddPlot from "@/app/buildings/components/AddFloor";



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

  const [isAdding, setIsAdding] = useState(false);

  const [avg_sale_price, setAvg_Sale_Price] = useState(0);
  const [avg_monthly_rent, setAvg_Monthly_Rent] = useState(0);
  const [down_payment_amount, setDown_Payment_Amount] = useState(0);
  const [instalment_period, setInstalment_Period] = useState(0);
  const [instalment_amount, setInstalment_Amount] = useState(0);
  const [possession_amount, setPossession_Amount] = useState(0);
  const [size_min, setSize_Min] = useState(0);
  const [size_max, setSize_Max] = useState(0);
  const [floor_num, setFloor_num] = useState("");
  const [floor_type, setFloor_Type] = useState("");
  const [unit_type, setUnit_type] = useState("");
  const [instalment_plan, setInstalment_plan] = useState("");
  const [occupancy, setOccupancy] = useState(0);
  const [remarks, setRemarks] = useState<any>("");

  const insertPlot = async () => {

    try {

      setIsAdding(true)

      // console.log("trying")
      // console.log(params.id)

      const add_plot_output = await AddPlot(avg_sale_price, params.id, avg_monthly_rent, down_payment_amount,
        instalment_period, instalment_amount, possession_amount, size_min, size_max, floor_num, floor_type,
        unit_type, instalment_plan, occupancy, remarks)

      // console.log("Plot added")
      // console.log(add_plot_output)

      // toast({
      //     className: "bg-green-600 rounded-lg",
      //     // title: "Add Price",
      //     description: "Plot added successfully ",

      // })

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
      setSize_Min(0)
      setSize_Max(0)
      setRemarks("")
      setFloor_num("")
      setFloor_Type("")
      setUnit_type("")




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

                <select
                  key={Math.random()}
                  id="building-floor-no"
                  name="building-floor-no"
                  value={floor_num}
                  className="select  w-full text-sm pl-2 h-10 max-w-xs border-2 rounded border-gray-400 bg-background"
                  onChange={(e) => setFloor_num(e.target.value)}
                >
                  <option value="Lower Ground">Lower Ground</option>
                  <option value="Ground">Ground</option>
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

                  <option value="Retails">Retails</option>
                  <option value="Penthouse">Penthouse</option>
                  <option value="Offices">Offices</option>
                  <option value="Apartment">Apartment</option>
                  <option value="Other">Other</option>
                </select>
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
                  onChange={(e) => {
                    setUnit_type(e.target.value)
                    // console.log(e.target.value)
                  }}
                  type="text"
                  id="building-floor-unit-type"
                  name="building-floor-unit-type"
                  value={unit_type}
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
                <div className="flex">
                  <Input
                    type="text"
                    id="building-floor-occupancy"
                    name="building-floor-occupancy"
                    className="input input-bordered w-full max-w-xs border-2 border-gray-400 "
                    value={occupancy}
                    placeholder=""
                    min="0"
                    max="100"
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
                    type="text"
                    id="building-floor-size-max"
                    name="building-floor-size-max"
                    className="input input-bordered w-full max-w-xs border-2 border-gray-400 "
                    placeholder="(Sq. Ft.)"
                    value={size_max}
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
                    type="text"
                    id="building-floor-avg-sale-price"
                    name="building-floor-avg-sale-price"
                    className="input input-bordered  w-full max-w-xs border-2 border-gray-400 "
                    placeholder="Rs."
                    value={avg_sale_price}
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
                    type="text"
                    id="building-floor-avg-monthly-rent"
                    name="building-floor-avg-monthly-rent"
                    className="input input-bordered  w-full max-w-xs border-2 border-gray-400 "
                    placeholder="Rs."
                    value={avg_monthly_rent}
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

                <select
                  id="building-instalment-plan"
                  name="building-instalment-plan"
                  className="select  w-full text-sm pl-2 h-10 max-w-xs border-2 rounded border-gray-400 bg-background"
                  value={instalment_plan}
                  onChange={(e) => setInstalment_plan(e.target.value)}
                >
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>

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
                    value={instalment_period}
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
                    type="text"
                    id="building-floor-instalment-amount"
                    name="building-floor-instalment-amount"
                    className="input input-bordered  w-full max-w-xs border-2 border-gray-400 "
                    placeholder="Rs."
                    value={instalment_amount}
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
                    type="text"
                    id="building-floor-down-payment-amount"
                    name="building-floor-down-payment-amount"
                    className="input input-bordered  w-full max-w-xs border-2 border-gray-400 "
                    placeholder="Rs."
                    value={down_payment_amount}
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
                    type="text"
                    id="building-floor-possession-amount"
                    name="building-floor-possession-amount"
                    className="input input-bordered  w-full max-w-xs border-2 border-gray-400 "
                    placeholder="Rs."
                    value={possession_amount}
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

