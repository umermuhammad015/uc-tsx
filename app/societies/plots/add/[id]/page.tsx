import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button"
import Link from "next/link";
import AddPlotButton from "../../../components/AddPlotButton";
import { Input } from "@/components/ui/input"
import prisma from "../../../../db";
import { Textarea } from "@/components/ui/textarea"




async function createPlots(data: FormData) {
    "use server";

    console.log("🚀 ~ file: page.tsx:10 ~ createPlots ~ data:", data);

    const society_id = data.get("society-id")?.valueOf();

    const plot_type = data.get("plot-type")?.valueOf();

    const plot_size = data.get("plot-size")?.valueOf();

    const plot_price = data.get("plot-price")?.valueOf();

    const plot_direction = data.get("plot-direction")?.valueOf();

    const is_corner = data.get("is-corner")?.valueOf();

    const instalment_period = data.get("instalment-period")

    const instalment_plan = data.get("instalment-plan")?.valueOf();

    const plot_remarks = data.get("plot-remarks")

    console.log("🚀 ~ file: page.tsx:9 ~ createPlots ~ society_id:", society_id);
    console.log("🚀 ~ file: page.tsx:9 ~ createPlots ~ plot_type:", plot_type);
    console.log("🚀 ~ file: page.tsx:9 ~ createPlots ~ plot_size:", plot_size);
    console.log("🚀 ~ file: page.tsx:9 ~ createPlots ~ plot_price:", plot_price);
    console.log("🚀 ~ file: page.tsx:9 ~ createPlots ~ plot_direction:", plot_direction);
    console.log("🚀 ~ file: page.tsx:9 ~ createPlots ~ instalment_period:", instalment_period);
    console.log("🚀 ~ file: page.tsx:9 ~ createPlots ~ instalment_plan:", instalment_plan);
    console.log("🚀 ~ file: page.tsx:9 ~ createPlots ~ plot_remarks:", plot_remarks);


    await prisma.plots.create({
        data: {
            society_id: society_id as string,
            type: plot_type as string,
            size: plot_size as string,
            price: plot_price as string,
            direction: plot_direction as string,
            is_corner: is_corner as string,
            instalment_period: instalment_period as string,
            instalment_plan: instalment_plan as string,
            remarks: plot_remarks as string
        },
    });

    redirect("/societies");
}

type Props = {
    params: { id: string }
    // searchParams: { [key: string]: string | string[] | undefined }
}

export default async function AddPlot({ params }: Props) {

    const society = await prisma.societies.findUnique({
        where: {
            id: params.id,
        },
    });

    return (
        <>
            <div className="text-lg">Plots Information</div>
            <div className="container border-2 ">

                <div className="mx-4">
                    <form action={createPlots}>
                        {/* Building ID  */}


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

                        {/* plot type */}
                        <div className="mt-4">
                            <label
                                htmlFor="plot-type"
                                className="block mb-2 text-sm font-medium"
                            >
                                Type:
                            </label>
                            <select
                                id="plot-type"
                                name="plot-type"
                                className="select  w-full max-w-xs border-2 border-gray-400 "
                            >
                                <option>Commercial</option>
                                <option>Residential</option>
                                
                            </select>
                        </div>


                        {/* plot size  */}
                        <div className="">

                            <div className="mt-4 ">
                                <label
                                    htmlFor="plot-size"
                                    className="block mb-2 text-sm font-medium "
                                >
                                    Size:
                                </label>
                                <Input
                                    type="text"
                                    id="plot-size"
                                    name="plot-size"
                                    className="input input-bordered w-full max-w-xs border-2 border-gray-400"
                                    placeholder=""
                                // value={type}

                                />
                            </div>
                        </div>

                        {/* plot price  */}
                        <div className=" ">

                            <div className="mt-4 ">
                                <label
                                    htmlFor="plot-price"
                                    className="block mb-2 text-sm font-medium "
                                >
                                    Price:
                                </label>
                                <Input
                                    type="text"
                                    id="plot-price"
                                    name="plot-price"
                                    className="input input-bordered w-full max-w-xs border-2 border-gray-400"
                                    placeholder=""
                                // value={type}

                                />
                            </div>
                        </div>


                        {/* plot direction  */}
                        <div className="mt-4">
                            <label
                                htmlFor="plot-direction"
                                className="block mb-2 text-sm font-medium"
                            >
                                Plot direction:
                            </label>
                            <select
                                id="plot-direction"
                                name="plot-direction"
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
                                Corner Plot?
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

                        {/* instalment period */}
                        <div className=" ">

                            <div className="mt-4 ">
                                <label
                                    htmlFor="instalment-period"
                                    className="block mb-2 text-sm font-medium "
                                >
                                    Instalment period:
                                </label>
                                <Input
                                    type="text"
                                    id="instalment-period"
                                    name="instalment-period"
                                    className="input input-bordered w-full max-w-xs border-2 border-gray-400"
                                    placeholder=""
                                // value={type}

                                />
                            </div>
                        </div>

                        {/* instalment plan */}
                        <div className=" ">

                            <div className="mt-4 ">
                                <label
                                    htmlFor="instalment-plan"
                                    className="block mb-2 text-sm font-medium "
                                >
                                    Instalment plan:
                                </label>
                                <Input
                                    type="text"
                                    id="instalment-plan"
                                    name="instalment-plan"
                                    className="input input-bordered w-full max-w-xs border-2 border-gray-400"
                                    placeholder=""
                                // value={type}

                                />
                            </div>
                        </div>

                        {/* Plot Remarks  */}
                        <div className="mt-4">
                            <label htmlFor="message" className="block mb-2 text-sm font-medium">
                                Your Remarks
                            </label>
                            <Textarea
                                id="remarks"
                                name="remarks"
                                className="textarea w-full border-2 border-gray-400 "
                                placeholder="Leave a comment..."
                            ></Textarea>
                        </div>


                        {/* Submit button */}
                        <div className="flex gap-6 justify-center mt-3 mb-2">
                            <AddPlotButton />
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