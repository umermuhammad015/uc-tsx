import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button"
import Link from "next/link";
import AddHouseButton from "../../../components/AddPlotButton";
import { Input } from "@/components/ui/input"
import prisma from "../../../../db";
import { Textarea } from "@/components/ui/textarea"




async function createHouses(data: FormData) {
    "use server";

    console.log("🚀 ~ file: page.tsx:10 ~ createPlots ~ data:", data);

    const society_id = data.get("society-id")?.valueOf();

    const house_type = data.get("house-type")?.valueOf();

    const house_size = data.get("house-size")?.valueOf();

    const house_price = data.get("house-price")?.valueOf();

    const house_direction = data.get("house-direction")?.valueOf();

    const is_corner = data.get("is-corner")?.valueOf();

    const house_condition = data.get("house-condition")

    const house_floors = data.get("house-floors")?.valueOf();

    const has_basement = data.get("has-basement")

    const construction_year = data.get("construction-year")

    const house_remarks = data.get("house-remarks")

    console.log("🚀 ~ file: page.tsx:9 ~ createPlots ~ society_id:", society_id);
    console.log("🚀 ~ file: page.tsx:9 ~ createPlots ~ house_type:", house_type);
    console.log("🚀 ~ file: page.tsx:9 ~ createPlots ~ house_size:", house_size);
    console.log("🚀 ~ file: page.tsx:9 ~ createPlots ~ house_price:", house_price);
    console.log("🚀 ~ file: page.tsx:9 ~ createPlots ~ house_direction:", house_direction);
    console.log("🚀 ~ file: page.tsx:9 ~ createPlots ~ is_corner:", is_corner);
    console.log("🚀 ~ file: page.tsx:9 ~ createPlots ~ house_condition:", house_condition);
    console.log("🚀 ~ file: page.tsx:9 ~ createPlots ~ house_floors:", house_floors);
    console.log("🚀 ~ file: page.tsx:9 ~ createPlots ~ has_basement:", has_basement);
    console.log("🚀 ~ file: page.tsx:9 ~ createPlots ~ construction_year:", construction_year);
    console.log("🚀 ~ file: page.tsx:9 ~ createPlots ~ house_remarks:", house_remarks);


    await prisma.houses.create({
        data: {
            society_id: Number(society_id) as number,
            type: house_type as string,
            size: house_size as string,
            price: house_price as string,
            direction: house_direction as string,
            is_corner: is_corner as string,
            condition: house_condition as string,
            floors: house_floors as string,
            has_basement: has_basement as string,
            construction_year: construction_year as string,
            remarks: house_remarks as string
        },
    });

    redirect("/societies");
}

type Props = {
    params: { id: number }
    // searchParams: { [key: string]: string | string[] | undefined }
}

export default async function AddHouse({ params }: Props) {

    const society = await prisma.societies.findUnique({
        where: {
            id: Number(params.id) as number
        },
    });

    return (
        <>
            {/* <div className="mt-4">
            <label
              htmlFor="societies-apartment-size"
              className="block mb-2 text-sm font-medium"
            >
              Apartment Sizes (Sq. Ft):
            </label>
            <div className="flex">
              <Input
                type="text"
                id="societies-apartment-size"
                name="societies-apartment-size"
                className="input input-bordered w-full max-w-xs border-2 border-gray-400 "
                placeholder="(Sq. Ft)"
                onChange={(e) => {
                  setSocieties_apartment_size(Number(e.target.value))
                  console.log(e.target.value)
                }}
              />
              <div className="m-4">
                {Number(societies_apartment_size).toLocaleString()}
              </div>
            </div>
          </div> */}






            {/* Plot Sizes (Yards)
        <div className="p-5 border-2 border-t-0 border-gray-200 dark:border-gray-700">
          <div className="text-lg">Commercial Plot Sizes</div>

          <div className="mt-4">
            <label
              htmlFor="societies-plot-sizes"
              className="block mb-2 text-sm font-medium"
            >
              Plot Size (Yards):
            </label>
            <select
              id="societies-plot-sizes"
              name="societies-plot-sizes"
              className="select w-full max-w-xs border-2 border-gray-400 "
              onChange={(e) => setPlotSizes(e.target.value)}
            >
              <option value="87.5">87.5</option>
              <option value="125">125</option>
              <option value="200">200</option>
              <option value="250">250</option>
              <option value="500">500</option>
              <option value="1000">1,000</option>
              <option value="2000">2,000</option>
            </select>
          </div>


          {/* Plot Price  87.5 yards */}



            {/* <div
            className={clsx({
              'hidden': plotSizes !== "87.5",


            })}>


            <div className="mt-4">
              <label
                htmlFor="plot-price-87-5 "
                className="block mb-2 text-sm font-medium"
              >
                Plot Price (87.5 Yards) :
              </label>
              <div className="flex">
                <Input
                  onChange={(e) => {
                    setPlot_price_87_5(Number(e.target.value))
                    console.log(e.target.value)
                  }}
                  type="text"
                  id="plot-price-87-5"
                  name="plot-price-87-5"
                  className="input input-bordered w-full max-w-xs border-2 border-gray-400 "
                  placeholder="Rs."
                />
                <div className="m-4">
                  {Number(plot_price_87_5).toLocaleString()}
                </div>
              </div>
            </div>
          </div>





          <div
            className={clsx({
              'hidden': plotSizes !== "125",


            })}>
            <div className="mt-4">
              <label
                htmlFor="plot-price-125 "
                className="block mb-2 text-sm font-medium"
              >
                Plot Price (125 Yards) :
              </label>
              <div className="flex">
                <Input
                  onChange={(e) => {
                    setPlot_price_125(Number(e.target.value))
                    console.log(e.target.value)
                  }}
                  type="text"
                  id="plot-price-125"
                  name="plot-price-125"
                  className="input input-bordered w-full max-w-xs border-2 border-gray-400 "
                  placeholder="Rs."
                />
                <div className="m-4">
                  {Number(plot_price_125).toLocaleString()}
                </div>
              </div>
            </div>
          </div>


          <div
            className={clsx({
              'hidden': plotSizes !== "200",


            })}>
            <div className="mt-4">
              <label
                htmlFor="plot-price-200"
                className="block mb-2 text-sm font-medium"
              >
                Plot Price (200 Yards) :
              </label>
              <div className="flex">
                <Input
                  onChange={(e) => {
                    setPlot_price_200(Number(e.target.value))
                    console.log(e.target.value)
                  }}
                  type="text"
                  id="plot-price-200"
                  name="plot-price-200"
                  className="input input-bordered w-full max-w-xs border-2 border-gray-400 "
                  placeholder="Rs."
                />
                <div className="m-4">
                  {Number(plot_price_200).toLocaleString()}
                </div>
              </div>
            </div>
          </div>





          <div
            className={clsx({
              'hidden': plotSizes !== "250",


            })}>
            <div className="mt-4">
              <label
                htmlFor="plot-price-250 "
                className="block mb-2 text-sm font-medium"
              >
                Plot Price (250 Yards) :
              </label>
              <div className="flex">
                <Input
                  onChange={(e) => {
                    setPlot_price_250(Number(e.target.value))
                    console.log(e.target.value)
                  }}
                  type="text"
                  id="plot-price-250"
                  name="plot-price-250"
                  className="input input-bordered w-full max-w-xs border-2 border-gray-400 "
                  placeholder="Rs."
                />
                <div className="m-4">
                  {Number(plot_price_250).toLocaleString()}
                </div>
              </div>
            </div>
          </div>





          <div
            className={clsx({
              'hidden': plotSizes !== "500",


            })}>
            <div className="mt-4">
              <label
                htmlFor="plot-price-500 "
                className="block mb-2 text-sm font-medium"
              >
                Plot Price (500 Yards) :
              </label>
              <div className="flex">
                <Input
                  onChange={(e) => {
                    setPlot_price_500(Number(e.target.value))
                    console.log(e.target.value)
                  }}
                  type="text"
                  id="plot-price-500"
                  name="plot-price-500"
                  className="input input-bordered w-full max-w-xs border-2 border-gray-400 "
                  placeholder="Rs."
                />
                <div className="m-4">
                  {Number(plot_price_500).toLocaleString()}
                </div>
              </div>
            </div>
          </div>





          <div
            className={clsx({
              'hidden': plotSizes !== "1000",


            })}>
            <div className="mt-4">
              <label
                htmlFor="plot-price-1000 "
                className="block mb-2 text-sm font-medium"
              >
                Plot Price (1000 Yards) :
              </label>
              <div className="flex">
                <Input
                  onChange={(e) => {
                    setPlot_price_1000(Number(e.target.value))
                    console.log(e.target.value)
                  }}
                  type="text"
                  id="plot-price-1000"
                  name="plot-price-1000"
                  className="input input-bordered w-full max-w-xs border-2 border-gray-400 "
                  placeholder="Rs."
                />
                <div className="m-4">
                  {Number(plot_price_1000).toLocaleString()}
                </div>
              </div>
            </div>
          </div>




          <div
            className={clsx({
              'hidden': plotSizes !== "2000",


            })}>
            <div className="mt-4">
              <label
                htmlFor="plot-price-2000 "
                className="block mb-2 text-sm font-medium"
              >
                Plot Price (2000 Yards) :
              </label>
              <div className="flex">
                <Input
                  onChange={(e) => {
                    setPlot_price_2000(Number(e.target.value))
                    console.log(e.target.value)
                  }}
                  type="text"
                  id="plot-price-2000"
                  name="plot-price-2000"
                  className="input input-bordered w-full max-w-xs border-2 border-gray-400 "
                  placeholder="Rs."
                />
                <div className="m-4">
                  {Number(plot_price_2000).toLocaleString()}
                </div>
              </div>
            </div>
          </div>



        </div> */}
            <div className="text-lg">Plots Information</div>
            <div className="container border-2 ">

                <div className="mx-4">
                    <form action={createHouses}>
                        {/* Society ID  */}


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
                                value={society?.id}
                            // defaultValue={building?.id}
                            // value="hi"
                            // defaultValue="hello"
                            // disabled
                            />
                        </div>

                        {/* society name */}
                        <div className="mt-4 ">
                            <label
                                htmlFor="society-name"
                                className="block mb-2 text-sm font-medium "
                            >
                                Society Name:
                            </label>
                            <Input
                                type="text"
                                id="society-name"
                                name="society-name"
                                className="input input-bordered  w-full max-w-xs border-2 border-gray-400 cursor-not-allowed disabled:bg-gray-200"
                                placeholder=""
                                value={society?.name as string}
                            // defaultValue={building?.id}
                            // value="hi"
                            // defaultValue="hello"
                            // disabled
                            />
                        </div>

                        {/* house type */}
                        <div className="mt-4">
                            <label
                                htmlFor="house-type"
                                className="block mb-2 text-sm font-medium"
                            >
                                Type:
                            </label>
                            <select
                                id="house-type"
                                name="house-type"
                                className="select  w-full max-w-xs border-2 border-gray-400 "
                            >
                                <option>Commercial</option>
                                <option>Residential</option>

                            </select>
                        </div>


                        {/* house size  */}
                        <div className="">

                            <div className="mt-4 ">
                                <label
                                    htmlFor="house-size"
                                    className="block mb-2 text-sm font-medium "
                                >
                                    Size:
                                </label>
                                <Input
                                    type="text"
                                    id="house-size"
                                    name="house-size"
                                    className="input input-bordered w-full max-w-xs border-2 border-gray-400"
                                    placeholder=""
                                // value={type}

                                />
                            </div>
                        </div>

                        {/* house price  */}
                        <div className=" ">

                            <div className="mt-4 ">
                                <label
                                    htmlFor="house-price"
                                    className="block mb-2 text-sm font-medium "
                                >
                                    Price:
                                </label>
                                <Input
                                    type="text"
                                    id="house-price"
                                    name="house-price"
                                    className="input input-bordered w-full max-w-xs border-2 border-gray-400"
                                    placeholder=""
                                // value={type}

                                />
                            </div>
                        </div>


                        {/* house direction  */}
                        <div className="mt-4">
                            <label
                                htmlFor="house-direction"
                                className="block mb-2 text-sm font-medium"
                            >
                                house direction:
                            </label>
                            <select
                                id="house-direction"
                                name="house-direction"
                                className="select  w-full max-w-xs border-2 border-gray-400 "
                            >
                                <option>East</option>
                                <option>West</option>
                                <option>North</option>
                                <option>South</option>
                            </select>
                        </div>

                        {/* corner  */}
                        <div className="mt-4">
                            <label
                                htmlFor="is-corner"
                                className="block mb-2 text-sm font-medium"
                            >
                                Corner House?
                            </label>
                            <select
                                id="is-corner"
                                name="is-corner"
                                className="select  w-full max-w-xs border-2 border-gray-400 "
                            >
                                <option>Yes</option>
                                <option>No</option>
                            </select>
                        </div>

                        {/* condition  */}
                        <div className="mt-4">
                            <label
                                htmlFor="house-condition"
                                className="block mb-2 text-sm font-medium"
                            >
                                House condition
                            </label>
                            <select
                                id="house-condition"
                                name="house-condition"
                                className="select  w-full max-w-xs border-2 border-gray-400 "
                            >
                                <option>Good</option>
                                <option>Average</option>
                                <option>Bad</option>
                            </select>
                        </div>

                        {/* house floors */}
                        <div className=" ">

                            <div className="mt-4 ">
                                <label
                                    htmlFor="house-floors"
                                    className="block mb-2 text-sm font-medium "
                                >
                                    House floors:
                                </label>
                                <Input
                                    type="text"
                                    id="house-floors"
                                    name="house-floors"
                                    className="input input-bordered w-full max-w-xs border-2 border-gray-400"
                                    placeholder=""
                                // value={type}

                                />
                            </div>
                        </div>

                        {/* basement  */}
                        <div className="mt-4">
                            <label
                                htmlFor="has-basement"
                                className="block mb-2 text-sm font-medium"
                            >
                                Basement?
                            </label>
                            <select
                                id="has-basement"
                                name="has-basement"
                                className="select  w-full max-w-xs border-2 border-gray-400 "
                            >
                                <option>Yes</option>
                                <option>No</option>
                            </select>
                        </div>

                        {/* construction year */}
                        <div className=" ">

                            <div className="mt-4 ">
                                <label
                                    htmlFor="construction-year"
                                    className="block mb-2 text-sm font-medium "
                                >
                                    construction year:
                                </label>
                                <Input
                                    type="text"
                                    id="construction-year"
                                    name="construction-year"
                                    className="input input-bordered w-full max-w-xs border-2 border-gray-400"
                                    placeholder=""
                                // value={type}

                                />
                            </div>
                        </div>

                        {/* house Remarks  */}
                        <div className="mt-4">
                            <label htmlFor="message" className="block mb-2 text-sm font-medium">
                                Your Remarks
                            </label>
                            <Textarea
                                id="house-remarks"
                                name="house-remarks"
                                className="textarea w-full border-2 border-gray-400 "
                                placeholder="Leave a comment..."
                            ></Textarea>
                        </div>


                        {/* Submit button */}
                        <div className="flex gap-6 justify-center mt-3 mb-2">
                            <AddHouseButton />
                            {/* <Link href="/buildings" className="flex justify-center items-center border border-black px-2 py-1 rounded-xl bg-white text-black hover:bg-red-600 hover:text-white capitalize">Cancel</Link> */}

                            <Button asChild className="bg-transparent text-primary hover:bg-primary-foreground">
                                <Link href="/societies" >Cancel</Link>
                            </Button>

                        </div>

                    </form>
                </div>
            </div>
        </>
    )
}