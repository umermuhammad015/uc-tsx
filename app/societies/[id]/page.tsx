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

// export default async function ViewBuilding({ params }: Props) {
export default async function ViewBuilding({ params, searchParams }:
    {
        params: any,
        searchParams: { [key: string]: string | string[] | undefined }
    }) {
    // console.log(params);
    // console.log(searchParams.city);

    const { id } = await params;

    // Get building information
    const society = await prisma.societies.findUnique({
        where: {
            id: Number(id) as number
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

    // console.log("plots")
    // console.log(plots)

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

    const queryParams = new URLSearchParams();

    // Object.entries(searchParams).forEach(([key, value]) => {
    //     if (value) {
    //         if (Array.isArray(value)) {
    //             // If the value is an array, append all values
    //             value.forEach((v) => queryParams.append(key, v));
    //         } else {
    //             // If the value is a string, append it
    //             queryParams.append(key, value);
    //         }
    //     }
    // });

    // const href = `/societies${queryParams.toString() ? `?${queryParams.toString()}` : ""}`;



    return (
        <>
            <div className="border border-gray-400">
                <Table className="">
                    <TableBody>
                        <TableRow>
                            <TableCell>Date </TableCell>
                            <TableCell>{society?.survey_date}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>City </TableCell>
                            <TableCell>{society?.city}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Zone/ Region </TableCell>
                            <TableCell>{society?.zone}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Soceity/Project Name </TableCell>
                            <TableCell>{society?.name}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Location/Address</TableCell>
                            <TableCell>{society?.address}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Project Status</TableCell>
                            <TableCell>{society?.type}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Launch Year</TableCell>
                            <TableCell>{society?.launch_year}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Grade</TableCell>
                            <TableCell>{society?.grade}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Total Area of Society (Acres)</TableCell>
                            <TableCell>{society?.area}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Total Phase/ Sectors</TableCell>
                            <TableCell>{society?.phase}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Total Blocks</TableCell>
                            <TableCell>{society?.blocks}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Occupancy Ratio</TableCell>
                            <TableCell>{society?.occupancy === "" ? (society?.occupancy !== null) : (society?.occupancy + '%')}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Population</TableCell>
                            <TableCell>{Number(society?.population).toLocaleString()}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Total Plots Residential</TableCell>
                            <TableCell>{Number(society?.total_plots_residential).toLocaleString()}</TableCell>
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
                            <TableCell>Total Plots Commercial </TableCell>
                            <TableCell>{society?.total_plots_commercial}</TableCell>
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
                            <TableCell>Total No. of Apartment</TableCell>
                            <TableCell>{society?.total_apartments}</TableCell>
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
                        <TableRow>
                            <TableCell>Features</TableCell>
                            <TableCell>
                                {society?.features_type_parks && (
                                    <Badge>Park</Badge>
                                )}
                                {society?.features_type_school && (
                                    <Badge>School</Badge>
                                )}
                                {society?.features_type_university && (
                                    <Badge>University</Badge>
                                )}
                                {society?.features_type_hospital && (
                                    <Badge>Hospital</Badge>
                                )}
                                {society?.features_type_commercial_market && (
                                    <Badge>Commercial Market</Badge>
                                )}
                                {society?.features_type_zoo && (
                                    <Badge>Zoo</Badge>
                                )}
                                {society?.features_type_food_arena && (
                                    <Badge>Food Arena</Badge>
                                )}
                                {society?.features_type_college && (
                                    <Badge>College</Badge>
                                )}
                                {society?.features_type_graveyard && (
                                    <Badge>Graveyard</Badge>
                                )}
                                {society?.features_type_grid_station && (
                                    <Badge>Grid Station</Badge>
                                )}
                                {society?.features_type_masjid && (
                                    <Badge>Masjid</Badge>
                                )}
                                {society?.features_type_community_club && (
                                    <Badge>Community Club</Badge>
                                )}
                                {society?.features_type_gated_community && (
                                    <Badge>Gated Community</Badge>
                                )}
                            </TableCell>
                        </TableRow>
                        {/* Utility */}
                        <TableRow>
                            <TableCell>Utility </TableCell>
                            <TableCell>
                                {society?.utilities_type_underground_electrification && (
                                    <Badge>Underground Electrification</Badge>
                                )}
                                {society?.utilities_type_gas && (
                                    <Badge>Gas</Badge>
                                )}
                                {society?.utilities_type_water && (
                                    <Badge>Water</Badge>
                                )}
                                {society?.utilities_type_utilities_electricity && (
                                    <Badge>Open Electrification</Badge>
                                )}
                                {society?.utilities_type_drainage && (
                                    <Badge>Drainage</Badge>
                                )}
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Developer Name</TableCell>
                            <TableCell>{society?.developer_name}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Contact No</TableCell>
                            <TableCell>{society?.contact_no}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Your Remarks</TableCell>
                            <TableCell>{society?.survery_remarks}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Draft</TableCell>
                            <TableCell>
                                {
                                    societies?.societies_draft === "yes" ? "yes" : "no"
                                }
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div >
            <div className="flex gap-2 justify-end mt-3">
                <Button asChild>
                    <Link href={"edit/" + societies?.id}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
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
                            <TableHead>Installment Amount</TableHead>
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
                                    {plot?.type}
                                </TableCell>
                                <TableCell>
                                    {
                                        plot?.type === 'Apartment' ? plot?.apartment_size
                                            : plot?.type === 'Shop' ? plot?.shop_size
                                                : plot?.type === 'Office' ? plot?.office_size
                                                    : plot?.size
                                    }
                                </TableCell>
                                <TableCell>
                                    {plot?.payment_mode}
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
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                            </svg>
                                            Edit
                                        </Link>
                                    </Button>
                                </TableCell>
                                <TableCell>
                                    <DeletePlotDialog plot_id={plot.id} />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
            < div className="flex gap-2 justify-end mt-3" >
                <Button className="bg-cyan-950 text-white">
                    <Link href={"/societies/plots/add/" + params.id}>
                        Add Price
                    </Link>
                </Button>
                {/* 
<Link href="/societies" className="flex justify-center items-center border border-black px-2 py-1 rounded-xl bg-white text-black hover:bg-blue-400 hover:text-white capitalize">
Go Back</Link> */}
                <Button asChild>
                    {/* 
  <Link href="/societies">
  Go Back</Link> */}
                    <Link href={`/societies${queryParams.toString() ? `?${queryParams.toString()}` : ""}`}>Go Back</Link>
                </Button>
                {/* <button type="submit" className="border border-gray-300 text-sm rounded-lg block p-2.5">Update</button> */}
            </div >
        </>
    );
}
