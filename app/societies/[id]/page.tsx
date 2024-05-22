import prisma from "../../db";
import { Badge } from "@/components/ui/badge"
import Link from "next/link";
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import DeleteHomeButton from "../components/DeleteHomeButton";
import DeletePlotDialog from "../components/DeletePlotDialog";




type Props = {
    params: { id: number }
    // searchParams: { [key: string]: string | string[] | undefined }
}

export default async function ViewBuilding({ params }: Props) {
    console.log(params);

    // Get building information
    const society = await prisma.societies.findUnique({
        where: {
            id: Number(params.id) as number
        },
    });

    const societies = await prisma.societies.findUnique({
        where: {
            id: Number(params.id) as number
        },
    });

    // console.log(society);

    // Get floors information
    // const plots = await prisma.plots.findMany({
    //     where: {
    //         society_id: Number(params.id) as number
    //     },
    // });

    // const houses = await prisma.houses.findMany({
    //     where: {
    //         society_id: Number(params.id) as number
    //     },
    // });

    const plots = await prisma.plots.findMany({
        where: {
            society_id: Number(params.id) as number
        },
    });

    // const societies = await prisma.societies.findMany({
    //     where: {
    //         societies: Number(params.id) as number
    //     },
    // });


    // console.log(plots);

    // async function deleteHouse(data: FormData) {
    //     "use server";

    //     const house_id = data.get("house-id")?.valueOf();
    //     console.log(house_id);

    //     await prisma.houses.delete({
    //         where: {
    //             id: Number(house_id) as number
    //         },
    //     });

    //     revalidatePath("/");
    //     redirect("/societies");
    // }

    // async function deletePlot(data: FormData) {
    //     "use server";

    //     const plot_id = data.get("plot-id")?.valueOf();
    //     console.log(plot_id);

    //     await prisma.plots.delete({
    //         where: {
    //             id: Number(plot_id) as number
    //         },
    //     });

    //     revalidatePath("/");
    //     redirect("/societies");
    // }

    async function deletePlot(data: FormData) {
        "use server";

        const plot_id = data.get("plot-id")?.valueOf();
        // console.log(plot_id);

        await prisma.plots.delete({
            where: {
                id: Number(plot_id) as number
            },
        });

        revalidatePath("/");
        redirect("/societies/" + params.id);
    }


    return (
        <>
            {/* <div className="flex justify-between">
                <h1></h1>
                <Link href={"/buildings/floor/add/" + params.id}>

                    <button className="btn bg-white text-black hover:bg-cyan-800 hover:text-white capitalize mb-2 text-base">Add Floor Information</button>
                </Link>
            </div> */}
            <div className="border border-gray-400 ">
                <Table className="">
                    <TableBody>
                        <TableRow>
                            <TableCell>City </TableCell> <TableCell>{society?.city}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Zone/ Region </TableCell> <TableCell>{society?.zone}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Soceity/Project Name </TableCell> <TableCell>{society?.name}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Location/Address</TableCell> <TableCell>{society?.address}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Project Status</TableCell> <TableCell>{society?.type}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Launch Year</TableCell> <TableCell>{society?.launch_year}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Grade</TableCell> <TableCell>{society?.grade}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Total Area of Society (Acres)</TableCell> <TableCell>{society?.area}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Total Phase/ Sectors/ Blocks</TableCell> <TableCell>{society?.blocks}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Occupancy Ratio</TableCell> <TableCell>{society?.occupancy === "" ? (society?.occupancy !== null) : (society?.occupancy + '%')}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Population</TableCell> <TableCell>{Number(society?.population).toLocaleString()}</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell>Total Plots Residential</TableCell> <TableCell>{Number(society?.total_plots_residential).toLocaleString()}</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell>Plot Sizes Residential (Sq. Yards)</TableCell>
                            <TableCell>
                                {society?.plot_sizes_residential_87_5 && (
                                    <Badge>87.5</Badge>
                                )}
                                {society?.plot_sizes_residential_125 && (
                                    <Badge>125</Badge>
                                )}
                                {society?.plot_sizes_residential_200 && (
                                    <Badge>200</Badge>
                                )}
                                {society?.plot_sizes_residential_250 && (
                                    <Badge>250</Badge>
                                )}
                                {society?.plot_sizes_residential_300 && (
                                    <Badge>300</Badge>
                                )}
                                {society?.plot_sizes_residential_400 && (
                                    <Badge>400</Badge>
                                )}
                                {society?.plot_sizes_residential_500 && (
                                    <Badge>500</Badge>
                                )}
                                {society?.plot_sizes_residential_600 && (
                                    <Badge>600</Badge>
                                )}
                                {society?.plot_sizes_residential_800 && (
                                    <Badge>800</Badge>
                                )}
                                {society?.plot_sizes_residential_1000 && (
                                    <Badge>1000</Badge>
                                )}
                                {society?.plot_sizes_residential_2000 && (
                                    <Badge>2000</Badge>
                                )}
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Total Plots Commercial </TableCell> <TableCell>{society?.total_plots_commercial}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Plot Sizes Commercial (Sq. Yards)</TableCell>
                            <TableCell>
                                {society?.plot_sizes_commercial_87_5 && (
                                    <Badge>87.5</Badge>
                                )}
                                {society?.plot_sizes_commercial_100 && (
                                    <Badge>100</Badge>
                                )}
                                {society?.plot_sizes_commercial_125 && (
                                    <Badge>125</Badge>
                                )}
                                {society?.plot_sizes_commercial_200 && (
                                    <Badge>200</Badge>
                                )}
                                {society?.plot_sizes_commercial_250 && (
                                    <Badge>250</Badge>
                                )}
                                {society?.plot_sizes_commercial_500 && (
                                    <Badge>500</Badge>
                                )}
                                {society?.plot_sizes_commercial_1000 && (
                                    <Badge>1000</Badge>
                                )}
                                {society?.plot_sizes_commercial_2000 && (
                                    <Badge>2000</Badge>
                                )}
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Total No. of Apartment</TableCell> <TableCell>{society?.total_apartments}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell> Apartment Type</TableCell>
                            <TableCell>
                                {society?.apartment_studio && (
                                    <Badge>Studio</Badge>
                                )}
                                {society?.apartment_one_bad && (
                                    <Badge>1 Bed</Badge>
                                )}
                                {society?.apartment_two_bad && (
                                    <Badge>2 Bed</Badge>
                                )}
                                {society?.apartment_three_bad && (
                                    <Badge>3 Bed</Badge>
                                )}
                                {society?.apartment_four_bad && (
                                    <Badge>4 Bed</Badge>
                                )}
                                {society?.apartment_five_bad && (
                                    <Badge>5 Bed</Badge>
                                )}
                                {society?.apartment_penthouse && (
                                    <Badge>Penthouse</Badge>
                                )}
                                {society?.apartment_duplex && (
                                    <Badge>Duplex</Badge>
                                )}

                            </TableCell>
                        </TableRow>
                        {/* <TableRow>
                            <TableCell>Plot Size (Yards)</TableCell> <TableCell>{society?.plot_size}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Plot Price Rs.</TableCell> <TableCell>{Number(society?.plot_price).toLocaleString()}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Bungalow/ Vilas Size (Yards)</TableCell> <TableCell>{society?.vilas_size}</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell>Bungalow/ Vilas Price Rs.</TableCell> <TableCell>{Number(society?.vilas_price).toLocaleString()}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Monthly Rent Rs.</TableCell> <TableCell>{Number(society?.vilas_monthly_rent).toLocaleString()}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Plot Size (Yards)</TableCell> <TableCell>{society?.commercial_plot_size}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Plot Price</TableCell> <TableCell>{Number(society?.commercial_plot_price).toLocaleString()}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Apartment Size</TableCell> <TableCell>{society?.apartment_size}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Minimum Apartment Price Rs.</TableCell> <TableCell>{Number(society?.min_apartments_price).toLocaleString()}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Maximum Apartment Price Rs.</TableCell> <TableCell>{Number(society?.max_apartments_price).toLocaleString()}</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell>Minimum Monthly Rent Rs.</TableCell> <TableCell>{Number(society?.min_apartments_monthly_rent).toLocaleString()}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Maximum Monthly Rent Rs.</TableCell> <TableCell>{Number(society?.max_apartments_monthly_rent).toLocaleString()}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Payment Terms:</TableCell> <TableCell>{society?.payment_terms}</TableCell>
                        </TableRow> */}

                        {/* <TableRow>
                            <TableCell>Payment Terms:</TableCell> <TableCell>{society?.instalment_total_amount}</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell>Payment Terms:</TableCell> <TableCell>{society?.instalment_down_payment}</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell>Payment Terms:</TableCell> <TableCell>{society?.instalment_possession_Amount}</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell>Payment Terms:</TableCell> <TableCell>{society?.instalment_period}</TableCell>
                        </TableRow> */}


                        <TableRow>
                            <TableCell>Features</TableCell>
                            <TableCell>
                                {society?.features_type_parks && (
                                    // <div className="badge bg-cyan-950 text-white">Park</div>
                                    <Badge>Park</Badge>
                                )}
                                {society?.features_type_school && (
                                    // <div className="badge bg-cyan-950 text-white">School</div>
                                    <Badge>School</Badge>
                                )}
                                {society?.features_type_university && (
                                    // <div className="badge bg-cyan-950 text-white">University</div>
                                    <Badge>University</Badge>
                                )}
                                {society?.features_type_hospital && (
                                    // <div className="badge bg-cyan-950 text-white">Hospital </div>
                                    <Badge>Hospital</Badge>
                                )}
                                {society?.features_type_commercial_market && (
                                    // <div className="badge bg-cyan-950 text-white">Commercial Market</div>
                                    <Badge>Commercial Market</Badge>
                                )}
                                {society?.features_type_zoo && (
                                    // <div className="badge bg-cyan-950 text-white">Zoo</div>
                                    <Badge>Zoo</Badge>
                                )}
                                {society?.features_type_food_arena && (
                                    // <div className="badge bg-cyan-950 text-white">Food Arena</div>
                                    <Badge>Food Arena</Badge>
                                )}
                                {society?.features_type_college && (
                                    // <div className="badge bg-cyan-950 text-white">Food Arena</div>
                                    <Badge>College</Badge>
                                )}
                                {society?.features_type_graveyard && (
                                    // <div className="badge bg-cyan-950 text-white">Gated Community</div>
                                    <Badge>Graveyard</Badge>
                                )}
                                {society?.features_type_grid_station && (
                                    // <div className="badge bg-cyan-950 text-white">Gated Community</div>
                                    <Badge>Grid Station</Badge>
                                )}
                                {society?.features_type_masjid && (
                                    // <div className="badge bg-cyan-950 text-white">Gated Community</div>
                                    <Badge>Masjid</Badge>
                                )}
                                {society?.features_type_community_club && (
                                    // <div className="badge bg-cyan-950 text-white">Gated Community</div>
                                    <Badge>Community Club</Badge>
                                )}
                                {society?.features_type_gated_community && (
                                    // <div className="badge bg-cyan-950 text-white">Gated Community</div>
                                    <Badge>Gated Community</Badge>
                                )}

                            </TableCell>
                        </TableRow>
                        {/* Utility */}
                        <TableRow>
                            <TableCell>Utility </TableCell>
                            <TableCell>
                                {society?.utilities_type_underground_electrification && (
                                    // <div className="badge bg-emerald-700 text-white">Underground Electrification</div>
                                    <Badge>Underground Electrification</Badge>
                                )}
                                {society?.utilities_type_gas && (
                                    // <div className="badge bg-emerald-700 text-white">Gas</div>
                                    <Badge>Gas</Badge>
                                )}
                                {society?.utilities_type_water && (
                                    // <div className="badge bg-emerald-700 text-white">Water</div>
                                    <Badge>Water</Badge>
                                )}
                                {society?.utilities_type_utilities_electricity && (
                                    // <div className="badge bg-emerald-700 text-white">Security</div>
                                    <Badge>Open Electrification</Badge>
                                )}
                                {society?.utilities_type_drainage && (
                                    // <div className="badge bg-emerald-700 text-white">Security</div>
                                    <Badge>Drainage</Badge>
                                )}
                            </TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell>Developer Name</TableCell>{" "}
                            <TableCell>{society?.developer_name}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Contact No</TableCell>{" "}
                            <TableCell>{society?.contact_no}</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell>Your Remarks</TableCell>{" "}
                            <TableCell>{society?.survery_remarks}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>

            </div >
            <div className="flex gap-2 justify-end mt-3">
                <Button asChild>
                    <Link href={"edit/" + societies?.id}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                        </svg>
                        Edit
                    </Link>
                </Button>
            </div>


            <div className="my-2 flex justify-between">
                <div className="text-center">
                    Property Prices
                </div>

            </div>
            <div className="border border-gray-400 overflow-auto" >
                <Table className="">
                    <TableHeader className="">
                        <TableRow>
                            <TableHead>Type</TableHead >
                            <TableHead>Size (Sq. Yards)</TableHead>
                            <TableHead>Payment Mode</TableHead>
                            <TableHead>Price</TableHead>
                            <TableHead>Monthly Rent</TableHead>
                            <TableHead>Total Price</TableHead>
                            <TableHead>Down Payment</TableHead>
                            <TableHead>Possession Amount</TableHead>
                            <TableHead>Instalment Period Years</TableHead>
                            <TableHead>Date</TableHead>
                            <TableHead>Remarks</TableHead >
                        </TableRow>
                    </TableHeader>
                    <TableBody className="">
                        {plots.map((plot) => (
                            <TableRow key={plot?.id} className="border-b border-gray-400 ">
                                <TableCell>
                                    <div className="">{plot?.type}</div>
                                </TableCell>
                                <TableCell>
                                    <div className="">

                                        {
                                            plot?.type === 'Apartment' ? plot?.apartment_size
                                                : plot?.type === 'Shop' ? plot?.shop_size
                                                    : plot?.type === 'Office' ? plot?.office_size
                                                        : plot?.size
                                        }

                                        {/* {plot?.type === 'Apartment' ? plot?.apartment_size : plot?.size} */}

                                        {/* {plot?.type === 'Shop' ? plot?.shop_size : plot?.size} */}

                                    </div>
                                    {/* <div className="">{plot?.shop_size}</div>
                                    <div className="">{plot?.office_size}</div> */}
                                </TableCell>
                                <TableCell>
                                    <div className="">{plot?.payment_mode}</div>
                                </TableCell>
                                <TableCell>{Number(plot?.plot_price).toLocaleString()}</TableCell>
                                <TableCell>{Number(plot?.plot_rent).toLocaleString()}</TableCell>
                                <TableCell>{Number(plot?.ins_total_price).toLocaleString()}</TableCell>
                                <TableCell>{Number(plot?.ins_down_payment).toLocaleString()}</TableCell>
                                <TableCell>{Number(plot?.ins_possession_Amount).toLocaleString()}</TableCell>
                                <TableCell>{Number(plot?.ins_period).toLocaleString()}</TableCell>
                                <TableCell>{plot?.date}</TableCell>
                                <TableCell>{plot?.remarks}</TableCell>
                                <TableCell>
                                    <Button asChild>
                                        <Link href={"/societies/plots/edit/" + plot?.id}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                            </svg>
                                            Edit
                                        </Link>
                                    </Button>

                                </TableCell>
                                <TableCell >

                                    <DeletePlotDialog plot_id={plot.id} />
                                </TableCell>

                            </TableRow>


                        ))}
                    </TableBody>
                </Table>

            </div>



            {/* <div className="mt-4">Add Plots</div>
            <div className="border  text-center border-gray-400 overflow-auto" >
                <Table className="">
                    <TableHeader className=" text-center">
                        <TableRow>
                            <TableHead>Type</TableHead >
                            <TableHead>Size</TableHead>
                            <TableHead>Price</TableHead>
                            <TableHead>Plot direction</TableHead>
                            <TableHead>Corner Plot</TableHead>
                            <TableHead>Instalment period</TableHead>
                            <TableHead>Instalment plan</TableHead>
                            <TableHead>Remarks</TableHead >
                        </TableRow>
                    </TableHeader>
                    <TableBody className="">
                        {plots.map((plots) => (
                            <TableRow key={plots?.id} className="border-b border-gray-400 text-center">
                                <TableCell>
                                    <div className=" text-left w-28">{plots?.type}</div>
                                </TableCell>
                                <TableCell>
                                    <div className="">{plots?.size}</div></TableCell>
                                <TableCell>{plots?.price}</TableCell>
                                <TableCell>{plots?.direction}</TableCell>
                                <TableCell>{plots?.is_corner}</TableCell>
                                <TableCell>{plots?.instalment_period}</TableCell>
                                <TableCell>{plots?.instalment_plan}</TableCell>
                                <TableCell>{plots?.remarks}</TableCell>
                                <TableCell>
                                    <Button asChild>
                                        <Link href={"/societies/plots/edit/" + plots?.id}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                            </svg>
                                            Edit
                                        </Link>
                                    </Button>

                                </TableCell>
                                <TableCell >
                                    <form action={deletePlot}>
                                        <input
                                            type="hidden"
                                            name="plot-id"
                                            value={plots.id}
                                        />
                                        <DeletePlotButton />
                                    </form>
                                </TableCell>

                            </TableRow>


                        ))}
                    </TableBody>
                </Table>

            </div> */}

            {/* <div className="mt-4">Add Houses</div>
            <div className="border  text-center border-gray-400 overflow-auto" >
                <Table className="">
                    <TableHeader className=" text-center">
                        <TableRow>
                            <TableHead>
                                <div className="">Type</div></TableHead >
                            <TableHead>Size</TableHead>
                            <TableHead>Price</TableHead>
                            <TableHead>House direction</TableHead>
                            <TableHead>Corner House</TableHead>
                            <TableHead>House Condition</TableHead>
                            <TableHead>House Floors</TableHead>
                            <TableHead>House Basement</TableHead>
                            <TableHead>Construction Year</TableHead>
                            <TableHead>Remarks</TableHead >
                        </TableRow>
                    </TableHeader>
                    <TableBody className="">
                        {houses.map((houses) => (
                            <TableRow key={houses?.id} className="border-b border-gray-400 ">
                                <TableCell>
                                    <div className="">{houses?.type}</div>
                                </TableCell>
                                <TableCell>
                                    <div className="">{houses?.size}</div></TableCell>
                                <TableCell>{houses?.price}</TableCell>
                                <TableCell>{houses?.direction}</TableCell>
                                <TableCell>{houses?.is_corner}</TableCell>
                                <TableCell>{houses?.condition}</TableCell>
                                <TableCell>{houses?.floors}</TableCell>
                                <TableCell>{houses?.has_basement}</TableCell>
                                <TableCell>{houses?.construction_year}</TableCell>
                                <TableCell>{houses?.remarks}</TableCell>
                                <TableCell>
                                    <Button asChild>
                                        <Link href={"/societies/houses/edit/" + houses?.id}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                            </svg>
                                            Edit
                                        </Link>
                                    </Button>

                                </TableCell>
                                <TableCell >
                                    <form action={deleteHouse}>
                                        <input
                                            type="hidden"
                                            name="house-id"
                                            value={houses.id}
                                        />
                                        <DeleteHouseButton />
                                    </form>
                                    
                                </TableCell>

                            </TableRow>


                        ))}
                    </TableBody>
                </Table>

            </div> */}
            < div className="flex gap-2 justify-end mt-3" >
                <Button className="bg-cyan-950 text-white">
                    <Link href={"/societies/plots/add/" + params.id}>
                        Add Price
                    </Link>
                </Button>
                {/* <Link href="/societies" className="flex justify-center items-center border border-black px-2 py-1 rounded-xl bg-white text-black hover:bg-blue-400 hover:text-white capitalize">Go Back</Link> */}
                <Button asChild>
                    <Link href="/societies">Go Back</Link>
                </Button>
                {/* <button type="submit" className="border border-gray-300 text-sm rounded-lg block p-2.5">Update</button> */}
            </div >






        </>
    );
}
