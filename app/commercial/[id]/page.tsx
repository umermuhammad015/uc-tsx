import prisma from "../../db";
import Link from "next/link";
import { Button } from "@/components/ui/button"

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import DeletePriceDialog from "../components/DeletePriceDailog";
// import DeleteHomeButton from "../components/DeleteHomeButton";




type Props = {
    params: { id: number }
    // searchParams: { [key: string]: string | string[] | undefined }
}

export default async function ViewCommercail({ params }:
    {
        params: { [key: string]: string },
        searchParams: { [key: string]: string | string[] | undefined }
    }) {
    // console.log(params);
    const { id } = await params;
    // Get commercial zone information
    const commercial = await prisma.commercial.findUnique({
        where: {
            id: Number(id) as number
        },
    });

    // Eidt
    const commercials = await prisma.commercial.findUnique({
        where: {
            id: Number(id) as number
        },
    });

    const price = await prisma.price.findMany({
        where: {
            commercial_id: Number(id) as number
        },
    });

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
                            <TableCell>City </TableCell>
                            <TableCell>{commercial?.city}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Commercial Zone name</TableCell>
                            <TableCell>{commercial?.commercial_zone_name}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Zone</TableCell>
                            <TableCell>{commercial?.zone}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Type</TableCell>
                            <TableCell>{commercial?.type}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Location</TableCell>
                            <TableCell>{commercial?.location}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Project Status</TableCell>
                            <TableCell>{commercial?.project_status}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Launch Year</TableCell>
                            <TableCell>{commercial?.launch_year}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Grade</TableCell>
                            <TableCell>{commercial?.grade}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Total Area of Society (Acres)</TableCell>
                            <TableCell>{commercial?.area}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Occupancy Ratio</TableCell>
                            <TableCell>{(commercial?.occupancy === null ? "0%" : commercial?.occupancy + "%")}</TableCell>

                        </TableRow>
                        <TableRow>
                            <TableCell>No of Plots</TableCell>
                            <TableCell>{Number(commercial?.total_plots).toLocaleString()}</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell>No of Shops</TableCell>
                            <TableCell>{Number(commercial?.total_shops).toLocaleString()}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>No of Offices</TableCell>
                            <TableCell>{Number(commercial?.total_offices).toLocaleString()}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>No of Apartments</TableCell>
                            <TableCell>{Number(commercial?.total_apartments).toLocaleString()}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Property Feature</TableCell>
                            <TableCell>{commercial?.property_feature}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Property Title</TableCell>
                            <TableCell>{commercial?.property_title}</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell>Your Remarks</TableCell>
                            <TableCell>{commercial?.remarks}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>

            </div >
            <div className="flex gap-2 justify-end mt-3">
                <Button asChild>
                    <Link href={"edit/" + commercials?.id}
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
                            <TableHead>Property Type</TableHead >
                            <TableHead>Property Size</TableHead>
                            <TableHead>Payment Mode</TableHead>
                            <TableHead>Sale Price</TableHead>
                            <TableHead>Monthly Rent</TableHead>
                            <TableHead>Total Price</TableHead>
                            <TableHead>Instalment Period</TableHead>
                            <TableHead>Down Payment</TableHead>
                            <TableHead>Possession Amount</TableHead>
                            <TableHead>Date</TableHead>
                            <TableHead>Remarks</TableHead >
                        </TableRow>
                    </TableHeader>
                    <TableBody className="">
                        {price.map((price) => (
                            <TableRow key={price?.id} className="border-b border-gray-400 ">
                                <TableCell>
                                    {price?.property_type}
                                </TableCell>
                                <TableCell>
                                    {/* <div className="">{price?.property_type === 'Apartments' ? price?.apartment_size : price?.plot_size}</div>
                                    <div className="">{price?.shop_size}</div>
                                    <div className="">{price?.office_size}</div>
                                    <div className="">{price?.building_size}</div> */}
                                    {
                                        price?.property_type === 'Apartments' ? price?.apartment_size
                                            : price?.property_type === 'Shops' ? price?.shop_size
                                                : price?.property_type === 'Offices' ? price?.office_size
                                                    : price?.property_type === 'Commercial Plot' ? price?.plot_size
                                                        : price?.property_type === 'Warehouse' ? price?.warehouse_size
                                                            : price?.building_size
                                    }

                                </TableCell>
                                <TableCell>
                                    {price?.payment_mode}
                                </TableCell>
                                <TableCell>{Number(price?.price).toLocaleString()}</TableCell>
                                <TableCell>{Number(price?.rent).toLocaleString()}</TableCell>
                                <TableCell>{Number(price?.total_price).toLocaleString()}</TableCell>
                                <TableCell>{Number(price?.installment_period).toLocaleString()}</TableCell>
                                <TableCell>{Number(price?.down_payment).toLocaleString()}</TableCell>
                                <TableCell>{Number(price?.possession_amount).toLocaleString()}</TableCell>

                                <TableCell>{price?.date}</TableCell>
                                <TableCell>{price?.remarks}</TableCell>
                                <TableCell>
                                    <Button asChild>
                                        <Link href={"/commercial/price/edit/" + price?.id}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                            </svg>
                                            Edit
                                        </Link>
                                    </Button>

                                </TableCell>
                                <TableCell>
                                    <DeletePriceDialog price_id={price.id} />
                                </TableCell>
                                {/* <TableCell>

                                    <DeletePlotDialog plot_id={plot.id} />
                                </TableCell> */}

                            </TableRow>


                        ))}
                    </TableBody>
                </Table>

            </div>




            < div className="flex gap-2 justify-end mt-3" >
                <Button className="bg-cyan-950 text-white">
                    <Link href={"/commercial/price/add/" + id}>
                        Add Price
                    </Link>
                </Button>
                <Button asChild>
                    {/* <Link href="/commercial">Go Back</Link> */}
                    <Link href={`/commercial${queryParams.toString() ? `?${queryParams.toString()}` : ""}`}>Go Back</Link>
                </Button>
                {/* <button type="submit" className="border border-gray-300 text-sm rounded-lg block p-2.5">Update</button> */}
            </div >






        </>
    );
}
