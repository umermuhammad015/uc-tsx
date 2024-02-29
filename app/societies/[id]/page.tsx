import prisma from "../../db";
import { Badge } from "@/components/ui/badge"
import Link from "next/link";
import { Button } from "@/components/ui/button"

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";




type Props = {
    params: { id: string }
    // searchParams: { [key: string]: string | string[] | undefined }
}

export default async function ViewBuilding({ params }: Props) {
    console.log(params);

    // Get building information
    const society = await prisma.societies.findUnique({
        where: {
            id: params.id,
        },
    });

    console.log(society);

    // Get floors information
    // const floors = await prisma.floors.findMany({
    //     where: {
    //         building_id: params.id,
    //     },
    // });

    // console.log(floors);

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
                            <TableCell>Project Type </TableCell> <TableCell >{society?.type}</TableCell >
                        </TableRow>

                        <TableRow>
                            <TableCell >Soceity/Project Name </TableCell > <TableCell >{society?.name}</TableCell >
                        </TableRow>
                        <TableRow>
                            <TableCell >Zone/ Region </TableCell > <TableCell >{society?.zone}</TableCell >
                        </TableRow>
                        <TableRow>
                            <TableCell >Location/Address</TableCell > <TableCell >{society?.address}</TableCell >
                        </TableRow>
                        <TableRow>
                            <TableCell >Total Phase/ Sectors/ Blocks</TableCell > <TableCell >{society?.blocks}</TableCell >
                        </TableRow>
                        <TableRow>
                            <TableCell >Grade</TableCell > <TableCell >{society?.grade}</TableCell >
                        </TableRow>
                        <TableRow>
                            <TableCell >Occupancy Ratio</TableCell > <TableCell >{society?.occupancy}</TableCell >
                        </TableRow>
                        <TableRow>
                            <TableCell >Total Area of Society (Acres)</TableCell > <TableCell >{society?.area}</TableCell >
                        </TableRow>
                        <TableRow>
                            <TableCell >Population</TableCell > <TableCell >{society?.population}</TableCell >
                        </TableRow>
                        <TableRow>
                            <TableCell >Launch Year</TableCell > <TableCell >{society?.launch_year}</TableCell >
                        </TableRow>
                        <TableRow>
                            <TableCell >Total Plots Residential</TableCell > <TableCell >{society?.total_plots_residential}</TableCell >
                        </TableRow>

                        <TableRow>
                            <TableCell >Plot Sizes Residential (Sq. Yards)</TableCell > <TableCell >{society?.plot_sizes_residential}</TableCell >
                        </TableRow>
                        <TableRow>
                            <TableCell >Total Plots Commercial </TableCell > <TableCell >{society?.total_plots_commercial}</TableCell >
                        </TableRow>
                        <TableRow>
                            <TableCell >Plot Sizes Commercial (Sq. Yards)</TableCell > <TableCell >{society?.plot_sizes_commercial}</TableCell >
                        </TableRow>
                        <TableRow>
                            <TableCell >Total No. of Apartments</TableCell > <TableCell >{society?.total_apartments}</TableCell >
                        </TableRow>
                        <TableRow>
                            <TableCell >Apartment Sizes (Sq. Ft)</TableCell > <TableCell >{society?.societies_apartment_size}</TableCell >
                        </TableRow>
                        <TableRow>
                            <TableCell >Plot Size (Yards)</TableCell > <TableCell >{society?.plot_size}</TableCell >
                        </TableRow>
                        <TableRow>
                            <TableCell >Plot Price Rs.</TableCell > <TableCell >{society?.plot_price}</TableCell >
                        </TableRow>
                        <TableRow>
                            <TableCell >Bungalows/ Vilas Size (Yards)</TableCell > <TableCell >{society?.vilas_size}</TableCell >
                        </TableRow>

                        <TableRow>
                            <TableCell >Bungalows/ Vilas Price Rs.</TableCell > <TableCell >{society?.vilas_price}</TableCell >
                        </TableRow>
                        <TableRow>
                            <TableCell >Monthly Rent Rs.</TableCell > <TableCell >{society?.vilas_monthly_rent}</TableCell >
                        </TableRow>
                        <TableRow>
                            <TableCell >Plot Size (Yards)</TableCell > <TableCell >{society?.commercial_plot_size}</TableCell >
                        </TableRow>
                        <TableRow>
                            <TableCell >Plot Price</TableCell > <TableCell >{society?.commercial_plot_price}</TableCell >
                        </TableRow>
                        <TableRow>
                            <TableCell >Apartment Size</TableCell > <TableCell >{society?.apartment_size}</TableCell >
                        </TableRow>
                        <TableRow>
                            <TableCell >Apartment Price Rs.</TableCell > <TableCell >{society?.apartments_price}</TableCell >
                        </TableRow>

                        <TableRow>
                            <TableCell >Monthly Rent Rs.</TableCell > <TableCell >{society?.apartments_monthly_rent}</TableCell >
                        </TableRow>
                        <TableRow>
                            <TableCell >Payment Terms:</TableCell > <TableCell >{society?.payment_terms}</TableCell >
                        </TableRow>
                        <TableRow>
                            <TableCell >Features</TableCell >
                            <TableCell >
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
                                {society?.features_type_gated_community && (
                                    // <div className="badge bg-cyan-950 text-white">Gated Community</div>
                                    <Badge>Gated Community</Badge>
                                )}

                            </TableCell >
                        </TableRow>
                        {/* Utility */}
                        <TableRow>
                            <TableCell >Utility </TableCell >
                            <TableCell >
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
                                {society?.utilities_type_security && (
                                    // <div className="badge bg-emerald-700 text-white">Security</div>
                                    <Badge>Security</Badge>
                                )}
                            </TableCell >
                        </TableRow>

                        <TableRow>
                            <TableCell >Developer Name</TableCell >{" "}
                            <TableCell >{society?.developer_name}</TableCell >
                        </TableRow>
                        <TableRow>
                            <TableCell >Contact No</TableCell >{" "}
                            <TableCell >{society?.contact_no}</TableCell >
                        </TableRow>

                        <TableRow>
                            <TableCell >Your Remarks</TableCell >{" "}
                            <TableCell >{society?.survery_remarks}</TableCell >
                        </TableRow>

                        {/* <TableRow>
              <td>Remarks</td> <td>{building.building_survery_remarks}</td>
            </tr> */}

                        {/* <tr>
            <td> </td> <td>{building.}</td>
          </tr>
          <tr>
            <td> </td> <td>{building.}</td>
          </tr> */}
                    </TableBody>
                </Table>
            </div >

            {/* <div className="border mt-4 text-center overflow-scroll border-gray-400" >
                <table className="table ">
                    <thead className="text-black text-center">
                        <th>
                            <div className=" text-left">Floor No</div></th>
                        <th>Type</th>
                        <th>Unit</th>
                        <th>Occupancy Ratio</th>
                        <th>Min Size</th>
                        <th>Max size</th>
                        <th>Avg. Sale Price</th>
                        <th>Monthly Rent</th>
                        <th>Instalment Plan</th>
                        <th>Instalment Period</th>
                        <th>Down Payment</th>
                        <th>Total Sale Price</th>
                        <th>Possession Amount</th>
                        <th>Remarks</th>
                    </thead>
                    <tbody className="">
                        {floors.map((floor) => (
                            <tr key={floor?.id} className="border-b border-gray-400 text-center">
                                <td>
                                    <div className=" text-left w-28">{floor?.floor_no}</div>
                                </td>
                                <td>
                                    <div className="">{floor?.floor_type}</div></td>
                                <td>{floor?.unit_type}</td>
                                <td>{floor?.occupancy}</td>
                                <td>{floor?.size_min}</td>
                                <td>{floor?.size_max}</td>
                                <td>{floor?.avg_sale_price}</td>
                                <td>{floor?.avg_monthly_rent}</td>
                                <td>{floor?.instalment_plan}</td>
                                <td>{floor?.instalment_period}</td>
                                <td>{floor?.down_payment_amount}</td>
                                <td>{floor?.instalment_amount}</td>
                                <td>{floor?.possession_amount}</td>
                                <td>{floor?.remarks}</td>
                                <td>
                                    <div className="flex justify-center items-center border border-slate-400 px-2 py-1 rounded hover:bg-cyan-800 outline-none hover:text-white">
                                        <Link

                                            className="flex"
                                            href={"/buildings/floor/edit/" + floor?.id}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                            </svg>

                                            Edit
                                        </Link>
                                    </div>
                                </td>

                            </tr>


                        ))}
                    </tbody>
                </table>

            </div> */}
            < div className="flex gap-1 justify-end mt-3" >
                {/* <Link href="/societies" className="flex justify-center items-center border border-black px-2 py-1 rounded-xl bg-white text-black hover:bg-blue-400 hover:text-white capitalize">Go Back</Link> */}
                <Button asChild>
                    <Link href="/societies">Go Back</Link>
                </Button>
                {/* <button type="submit" className="border border-gray-300 text-sm rounded-lg block p-2.5">Update</button> */}
            </div >






        </>
    );
}
