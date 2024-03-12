import Link from "next/link";
import prisma from "../../../../db";
import { redirect } from "next/navigation";
import AddFloorButton from "../../../components/AddFloorButton";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

async function createFloor(data: FormData) {
  "use server";

  console.log("🚀 ~ file: page.tsx:10 ~ createFloor ~ data:", data);

  const building_id = data.get("building-id")?.valueOf();
  console.log(
    "🚀 ~ file: page.tsx:10 ~ createFloor ~ building_id (for create floor):",
    building_id
  );

  const building_test = data.get("building_test")?.valueOf();
  console.log("building_test", building_test);

  const building_name = data.get("building-name")?.valueOf();

  const floor_no = data.get("building-floor-no")?.valueOf();

  const floor_type = data.get("building-floor-type")?.valueOf();

  const floor_unit_type = data.get("building-floor-unit-type")?.valueOf();

  const floor_occupancy = data.get("building-floor-occupancy")?.valueOf();

  const floor_size_min = data.get("building-floor-size-min")?.valueOf();

  const floor_size_max = data.get("building-floor-size-max")?.valueOf();

  const floor_avg_sale_price = data
    .get("building-floor-avg-sale-price")
    ?.valueOf();

  const floor_avg_monthly_rent = data
    .get("building-floor-avg-monthly-rent")

    ?.valueOf();

  const floor_instalment_plan = data.get("building-instalment-plan")?.valueOf();

  const floor_instalment_period = data
    .get("building-floor-instalment-period")

    ?.valueOf();
  const floor_down_payment_amount = data
    .get("building-floor-down-payment-amount")
    ?.valueOf();
  const floor_instalment_amount = data
    .get("building-floor-instalment-amount")
    ?.valueOf();
  const floor_possession_amount = data
    .get("building-floor-possession-amount")
    ?.valueOf();
  const floor_remarks = data.get("building-floor-remarks")?.valueOf();

  console.log("🚀 ~ file: page.tsx:9 ~ createFloor ~ floor_no:", floor_no);
  console.log("🚀 ~ file: page.tsx:11 ~ createFloor ~ floor_type:", floor_type);
  console.log(
    "🚀 ~ file: page.tsx:13 ~ createFloor ~ floor_unit_type:",
    floor_unit_type
  );
  console.log(
    "🚀 ~ file: page.tsx:15 ~ createFloor ~ floor_occupancy:",
    floor_occupancy
  );
  console.log(
    "🚀 ~ file: page.tsx:17 ~ createFloor ~ floor_size_min:",
    floor_size_min
  );
  console.log(
    "🚀 ~ file: page.tsx:19 ~ createFloor ~ floor_size_max:",
    floor_size_max
  );
  console.log(
    "🚀 ~ file: page.tsx:22 ~ createFloor ~ floor_avg_sale_price:",
    floor_avg_sale_price
  );
  console.log(
    "🚀 ~ file: page.tsx:26 ~ createFloor ~ floor_avg_monthly_rent:",
    floor_avg_monthly_rent
  );
  console.log(
    "🚀 ~ file: page.tsx:29 ~ createFloor ~ floor_instalment_plan:",
    floor_instalment_plan
  );
  console.log(
    "🚀 ~ file: page.tsx:32 ~ createFloor ~ floor_instalment_period:",
    floor_instalment_period
  );
  console.log(
    "🚀 ~ file: page.tsx:36 ~ createFloor ~ floor_down_payment_amount:",
    floor_down_payment_amount
  );
  console.log(
    "🚀 ~ file: page.tsx:40 ~ createFloor ~ floor_instalment_amount:",
    floor_instalment_amount
  );
  console.log(
    "🚀 ~ file: page.tsx:44 ~ createFloor ~ floor_possession_amount:",
    floor_possession_amount
  );
  console.log(
    "🚀 ~ file: page.tsx:47 ~ createFloor ~ floor_remarks:",
    floor_remarks
  );

  await prisma.floors.create({
    data: {
      building_id: Number (building_id) as number,
      floor_type: floor_type as string,
      floor_no: floor_no as string,
      unit_type: floor_unit_type as string,
      occupancy: floor_occupancy as string,
      size_min: floor_size_min as string,
      size_max: floor_size_max as string,
      avg_sale_price: floor_avg_sale_price as string,
      avg_monthly_rent: floor_avg_monthly_rent as string,
      instalment_plan: floor_instalment_plan as string,
      instalment_period: floor_instalment_period as string,
      down_payment_amount: floor_down_payment_amount as string,
      instalment_amount: floor_instalment_amount as string,
      possession_amount: floor_possession_amount as string,
      remarks: floor_remarks as string

    },
  });

  redirect("/buildings");
}

type Props = {
  params: { id: number }
  // searchParams: { [key: string]: string | string[] | undefined }
}

export default async function AddFloor({ params }: Props) {
  console.log(params.id);

  const building = await prisma.buildings.findUnique({
    where: {
      id: Number(params.id) as number
    },
  });

  return (
    <><div className="text-lg">Add Floor Information</div>
      <div className="container border-2 ">

        <div className="mx-4">
          <form action={createFloor}>
            {/* Building ID  */}
            <div className="grid grid-cols-3 gap-4 ">

              <div className="mt-4 col-span-2">
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
                  value={building?.id}
                // defaultValue={building?.id}
                // value="hi"
                // defaultValue="hello"
                // disabled
                />
              </div>


              {/* Building Name  */}
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
                  defaultValue={building?.name}
                  disabled
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
                  id="building-floor-no"
                  name="building-floor-no"
                  className="select  w-full max-w-xs border-2 border-gray-400 "
                >
                  <option>Lower Ground</option>
                  <option>Ground</option>
                  <option>1st</option>
                  <option>2nd</option>
                  <option>3rd</option>
                  <option>4th</option>
                  <option>5th</option>
                  <option>6th</option>
                  <option>7th</option>
                  <option>8th</option>
                  <option>9th</option>
                  <option>10th</option>
                  <option>11th</option>
                  <option>12th</option>
                  <option>13th</option>
                  <option>14th</option>
                  <option>15th</option>
                  <option>16th</option>
                  <option>17th</option>
                  <option>18th</option>
                  <option>19th</option>
                  <option>20th</option>
                  <option>21th</option>
                  <option>22th</option>
                  <option>23th</option>
                  <option>24th</option>
                  <option>25th</option>
                  <option>26th</option>
                  <option>27th</option>
                  <option>28th</option>
                  <option>29th</option>
                  <option>30th</option>
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
                  id="building-floor-type"
                  name="building-floor-type"
                  className="select w-full max-w-xs border-2 border-gray-400 "
                >
                  <option>Retails</option>
                  <option>Penthouse</option>
                  <option>Offices</option>
                  <option>Apartment</option>
                  <option>Other</option>
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
                <Input
                  type="number"
                  id="building-floor-size-min"
                  name="building-floor-size-min"
                  className="input input-bordered  w-full max-w-xs border-2 border-gray-400 "
                  placeholder="(Sq. Ft.)"
                  min="0"
                />
              </div>

              {/* Size Maximum (Sq. Ft.)  */}
              <div className="mt-4">
                <label
                  htmlFor="building-floor-size-max"
                  className="block mb-2 text-sm font-medium"
                >
                  Size Maximum (Sq. Ft.)
                </label>
                <Input
                  type="number"
                  id="building-floor-size-max"
                  name="building-floor-size-max"
                  className="input input-bordered w-full max-w-xs border-2 border-gray-400 "
                  placeholder="(Sq. Ft.)"
                  min="0"
                />
              </div>

              {/* Avg. Sale Price */}
              <div className="mt-4">
                <label
                  htmlFor="building-floor-avg-sale-price"
                  className="block mb-2 text-sm font-medium"
                >
                  Average Sale Price (Per Sq. Ft.)
                </label>
                <Input
                  type="number"
                  id="building-floor-avg-sale-price"
                  name="building-floor-avg-sale-price"
                  className="input input-bordered  w-full max-w-xs border-2 border-gray-400 "
                  placeholder="Rs."
                  min="0"
                />
              </div>

              {/* Avg. Monthly Rent */}
              <div className="mt-4">
                <label
                  htmlFor="building-floor-avg-monthly-rent"
                  className="block mb-2 text-sm font-medium"
                >
                  Average Monthly Rent
                </label>
                <Input
                  type="number"
                  id="building-floor-avg-monthly-rent"
                  name="building-floor-avg-monthly-rent"
                  className="input input-bordered  w-full max-w-xs border-2 border-gray-400 "
                  placeholder="Rs."
                  min="0"
                />
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
                  className="select  w-full max-w-xs border-2 border-gray-400 "
                >
                  <option>Yes</option>
                  <option>No</option>
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
                <Input
                  type="number"
                  id="building-floor-instalment-period"
                  name="building-floor-instalment-period"
                  className="input input-bordered  w-full max-w-xs border-2 border-gray-400 "
                  placeholder=""
                  min="0"
                />
              </div>

              {/* Down Payment */}
              <div className="mt-4">
                <label
                  htmlFor="building-floor-down-payment-amount"
                  className="block mb-2 text-sm font-medium"
                >
                  Down Payment
                </label>
                <Input
                  type="number"
                  id="building-floor-down-payment-amount"
                  name="building-floor-down-payment-amount"
                  className="input input-bordered  w-full max-w-xs border-2 border-gray-400 "
                  placeholder="Rs."
                  min="0"
                />
              </div>

              {/* Instalment Amount */}
              <div className="mt-4">
                <label
                  htmlFor="building-floor-instalment-amount"
                  className="block mb-2 text-sm font-medium"
                >
                  Total Sale Price
                </label>
                <Input
                  type="number"
                  id="building-floor-instalment-amount"
                  name="building-floor-instalment-amount"
                  className="input input-bordered  w-full max-w-xs border-2 border-gray-400 "
                  placeholder="Rs."
                  min="0"
                />
              </div>

              {/* Possession Amount */}
              <div className="mt-4">
                <label
                  htmlFor="building-floor-possession-amount"
                  className="block mb-2 text-sm font-medium"
                >
                  Possession Amount
                </label>
                <Input
                  type="number"
                  id="building-floor-possession-amount"
                  name="building-floor-possession-amount"
                  className="input input-bordered  w-full max-w-xs border-2 border-gray-400 "
                  placeholder="Rs."
                  min="0"
                />
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
