import prisma from "../../db";
import Link from "next/link";
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import DeleteFloorButton from "../components/DeleteFloorButton";
export const revalidate = 3600 // revalidate the date at most every hour

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
import DeleteFloorDialog from "../components/DeleteFloorDialog";

type Props = {
  params: { id: number }
  // searchParams: { [key: string]: string | string[] | undefined }
}

export default async function ViewBuilding({ params }: Props) {
  // console.log(params);

  // Get building information
  const building = await prisma.buildings.findUnique({
    where: {
      id: Number(params.id) as number
    },
  });

  // console.log(building);

  const Buildings = await prisma.buildings.findUnique({
    where: {
      id: Number(params.id) as number
    },
  });


  // Get floors information
  const floors = await prisma.floors.findMany({
    where: {
      building_id: Number(params.id) as number
    },
  });

  async function deleteFloor(data: FormData) {
    "use server";

    const floor_id = data.get("floor-id")?.valueOf();
    // console.log(floor_id);

    await prisma.floors.delete({
      where: {
        id: Number(floor_id) as number
      },
    });

    revalidatePath("/");
    redirect("/buildings" + params.id);
  }

  // console.log(floors);

  return (
    <>
      <div className="flex justify-between mb-4">
        {/* {
          building?.building_draft === "yes" ? "This building has been drafted" : " " 

        } */}
        <h1></h1>
        <Button asChild>
          <Link href={"/buildings/floor/add/" + params.id}
          >
            Add floor information</Link>
        </Button>
      </div>
      <div className="border border-gray-400 ">
        <Table>
          <TableBody>

            <TableRow>
              <TableCell  >Name </TableCell > <TableCell >{building?.name}</TableCell >
            </TableRow>
            <TableRow>
              <TableCell >City </TableCell > <TableCell >{building?.city}</TableCell >
            </TableRow>
            {/* Facilities */}
            <TableRow>
              <TableCell >Zone </TableCell >
              <TableCell >{building?.zone}</TableCell >
            </TableRow>
            {/* Type */}
            <TableRow>
              <TableCell >Area/Society: </TableCell >
              <TableCell >{building?.area}</TableCell >
            </TableRow>
            <TableRow>
              <TableCell >Building Name </TableCell > <TableCell >{building?.address}</TableCell >
            </TableRow>
            <TableRow>
              <TableCell >Building Type </TableCell >
              <TableCell >
                {building?.type_retail && (
                  <Badge>Retail</Badge>
                )}
                {building?.type_offices && (
                  <Badge>Offices</Badge>
                )}
                {building?.type_apartments && (
                  <Badge>Apartments</Badge>
                )}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell >Building Status</TableCell >
              <TableCell >{building?.status}</TableCell >
            </TableRow>
            <TableRow>
              <TableCell >Plot Size (Sq. Yards)</TableCell > <TableCell >{Number(building?.plot_size).toLocaleString()}</TableCell >

            </TableRow>
            <TableRow>
              <TableCell >Total Covered Area of Building (Sq Ft)</TableCell > <TableCell >{Number(building?.construction_area).toLocaleString()}</TableCell >
            </TableRow>
            <TableRow>
              <TableCell >Builder Name</TableCell > <TableCell >{building?.builder_name}</TableCell >
            </TableRow>
            <TableRow>
              <TableCell >Launch Year </TableCell > <TableCell >{building?.launch_year}</TableCell >
            </TableRow>
            <TableRow>
              <TableCell >Construction Year </TableCell > <TableCell >{building?.construction_year}</TableCell >
            </TableRow>
            <TableRow>
              <TableCell >Building Rank</TableCell > <TableCell >{building?.building_rank}</TableCell >
            </TableRow>
            <TableRow>
              <TableCell >Total Floors</TableCell > <TableCell >{building?.total_floors}</TableCell >
            </TableRow>
            <TableRow>
              <TableCell >Parking Floors</TableCell > <TableCell >{building?.parking_floors}</TableCell >
            </TableRow>
            <TableRow>
              <TableCell >Facilities </TableCell >
              <TableCell >
                {building?.is_centrally_air_conditioned && (
                  // <div className="badge bg-emerald-700 text-white ">Centrally Airconditioned </div>
                  <Badge>Centrally Air conditioned </Badge>
                )}
                {building?.has_security && (
                  // <div className="badge bg-emerald-700 text-white">Security</div>
                  <Badge>Security</Badge>
                )}
                {building?.has_escalators && (
                  // <div className="badge bg-emerald-700 text-white">Escalators</div>
                  <Badge>Escalators</Badge>
                )}
                {building?.has_food_court && (
                  // <div className="badge bg-emerald-700 text-white">Entertainment Area</div>
                  <Badge>Food Court</Badge>
                )}
                {building?.has_entertainment_area && (
                  // <div className="badge bg-emerald-700 text-white">Entertainment Area</div>
                  <Badge>Entertainment Area</Badge>
                )}
                {building?.has_none && (
                  // <div className="badge bg-emerald-700 text-white">Entertainment Area</div>
                  <Badge>None of these</Badge>
                )}
              </TableCell >
            </TableRow>
            <TableRow>
              <TableCell >No. of Retail Floors</TableCell >{" "}
              <TableCell >{building?.retail_floors_count}</TableCell >
            </TableRow>
            <TableRow>
              <TableCell >Retails shops</TableCell >{" "}
              <TableCell >{building?.retail_floors_shops_count}</TableCell >
            </TableRow>
            {/* <TableRow>
              <TableCell >Shop Maintenance Fee Rs. (Per Sq. Ft.)</TableCell >{" "}
              <TableCell >{Number(building?.apartments_maintenance_fee).toLocaleString()}</TableCell >
            </TableRow> */}
            {/* <TableRow>
              <TableCell >Brands</TableCell > <TableCell >{building?.retail_floors_brands}</TableCell >
            </TableRow> */}
            <TableRow>
              <TableCell >Retail Categories </TableCell >
              <TableCell >
                {building?.has_fashion_health && (
                  // <div className="badge bg-emerald-700 text-white ">Centrally Airconditioned </div>
                  <Badge>Fashion & Health</Badge>
                )}
                {building?.has_electronics_appliancecs && (
                  // <div className="badge bg-emerald-700 text-white">Security</div>
                  <Badge>Electronics & Appliances</Badge>
                )}
                {building?.has_home_living && (
                  // <div className="badge bg-emerald-700 text-white">Escalators</div>
                  <Badge>Home & Living</Badge>
                )}
              </TableCell >
            </TableRow>
            <TableRow>
              <TableCell >Food & Beverage Categories</TableCell >
              <TableCell >
                {building?.has_restaurants_courts && (
                  // <div className="badge bg-emerald-700 text-white ">Centrally Airconditioned </div>
                  <Badge>Restaurants/Food courts</Badge>
                )}
                {building?.has_bakery_ice && (
                  // <div className="badge bg-emerald-700 text-white">Security</div>
                  <Badge>Bakery/Ice cream</Badge>
                )}
                {building?.has_grocery_supermarkets && (
                  // <div className="badge bg-emerald-700 text-white">Escalators</div>
                  <Badge>Grocery & Supermarkets</Badge>
                )}
              </TableCell >
            </TableRow>
            <TableRow>
              <TableCell >Services Categories</TableCell >
              <TableCell >
                {building?.has_banks_atm && (
                  // <div className="badge bg-emerald-700 text-white ">Centrally Airconditioned </div>
                  <Badge>Banks & ATMs</Badge>
                )}
                {building?.has_real_estate && (
                  // <div className="badge bg-emerald-700 text-white">Security</div>
                  <Badge>Real Estate Agencies</Badge>
                )}
                {building?.has_labs_pharmacies && (
                  // <div className="badge bg-emerald-700 text-white">Escalators</div>
                  <Badge>Labs/Pharmacies</Badge>
                )}
              </TableCell >
            </TableRow>
            <TableRow>
              <TableCell >Entertainment & Leisure</TableCell >
              <TableCell >
                {building?.has_banks_atm && (
                  // <div className="badge bg-emerald-700 text-white ">Centrally Airconditioned </div>
                  <Badge>Play Areas/Fitness Centers </Badge>
                )}

              </TableCell >
            </TableRow>
            <TableRow>
              <TableCell >Apartment Floors</TableCell > <TableCell >{building?.apartment_floors}</TableCell >
            </TableRow>
            <TableRow>
              <TableCell >No. of Apartment</TableCell > <TableCell >{building?.apartments_count}</TableCell >
            </TableRow>
            <TableRow>
              <TableCell >Apartment Types</TableCell >
              <TableCell >
                {building?.apartments_studio && (
                  // <div className="badge bg-cyan-800 text-white">1 Bed</div>
                  <Badge>Studio</Badge>
                )}
                {building?.apartments_has_type_1_bed && (
                  // <div className="badge bg-cyan-800 text-white">1 Bed</div>
                  <Badge>1 Bed</Badge>
                )}
                {building?.apartments_has_type_2_bed && (
                  // <div className="badge bg-cyan-800 text-white">2 Bed</div>
                  <Badge>2 Bed</Badge>
                )}
                {building?.apartments_has_type_3_bed && (
                  // <div className="badge bg-cyan-800 text-white">3 Bed</div>
                  <Badge>3 Bed</Badge>
                )}
                {building?.apartments_has_type_4_bed && (
                  // <div className="badge bg-cyan-800 text-white">4 Bed</div>
                  <Badge>4 Bed</Badge>
                )}
                {building?.apartments_has_type_5_bed && (
                  // <div className="badge bg-cyan-800 text-white">4 Bed</div>
                  <Badge>5 Bed</Badge>
                )}
                {building?.apartments_has_type_duplex && (
                  // <div className="badge bg-cyan-800 text-white">Duplex</div>
                  <Badge>Duplex</Badge>
                )}
                {building?.apartments_has_type_penthouse && (
                  // <div className="badge bg-cyan-800 text-white">Penthouse</div>
                  <Badge>Penthouse</Badge>
                )}
                {building?.has_furnished && (
                  // <div className="badge bg-cyan-800 text-white">Penthouse</div>
                  <Badge>Furnished</Badge>
                )}
                {building?.has_semi_furnished && (
                  // <div className="badge bg-cyan-800 text-white">Penthouse</div>
                  <Badge>Semi Furnished</Badge>
                )}
                {building?.has_service_apartments && (
                  // <div className="badge bg-cyan-800 text-white">Penthouse</div>
                  <Badge>Service Apartments</Badge>
                )}
                {building?.has_hotel_suites_apartments && (
                  // <div className="badge bg-cyan-800 text-white">Penthouse</div>
                  <Badge>Hotel Suites Apartments</Badge>
                )}
              </TableCell >
            </TableRow>
            <TableRow>
              <TableCell >Servant Quarter</TableCell >{" "}
              <TableCell >{building?.apartments_has_servant_quarter}</TableCell >
            </TableRow>
            {/* <TableRow>
              <TableCell >Apartment Maintenance Fee Rs. (Per Sq. Ft.)</TableCell >{" "}
              <TableCell >{Number(building?.apartments_maintenance_fee).toLocaleString()}</TableCell >
            </TableRow> */}



            <TableRow>
              <TableCell >Office Floors</TableCell > <TableCell >{building?.office_floors_count}</TableCell >
            </TableRow>
            <TableRow>
              <TableCell >Offices</TableCell > <TableCell >{building?.office_floors_count}</TableCell >
            </TableRow>
            {/* <TableRow>
              <TableCell >Maintenance Fee Rs. (Per Sq. Ft.)</TableCell >{" "}
              <TableCell >{Number(building?.office_maintenance_fee).toLocaleString()}</TableCell >
            </TableRow> */}

            <TableRow>
              <TableCell >surveyor name</TableCell > <TableCell >{building?.surveyor_name}</TableCell >
            </TableRow>
            <TableRow>
              <TableCell >Your Remarks</TableCell > <TableCell >{building?.building_survery_remarks}</TableCell >
            </TableRow>
            <TableRow>
              <TableCell >Draft</TableCell > <TableCell > <div className="">
                {/* {building?.building_draft} */}
                {
                  building?.building_draft === "yes" ? "yes" : "no"

                }

                {/* {plot?.type === 'Apartment' ? plot?.apartment_size : plot?.size} */}

                {/* {plot?.type === 'Shop' ? plot?.shop_size : plot?.size} */}

              </div></TableCell >
            </TableRow>
            {/* <TableRow>
              <td>Remarks</td> <td>{building.building_survery_remarks}</td>
            </TableRow> */}

            {/* <tr>
            <td> </td> <td>{building.}</td>
          </tr>
          <tr>
            <td> </td> <td>{building.}</td>
          </tr> */}
          </TableBody>
        </Table>
      </div>

      <div className="flex gap-2 justify-end mt-3">
        <Button asChild>
          <Link href={"edit/" + Buildings?.id}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
            </svg>
            Edit
          </Link>
        </Button>
      </div>

      <div className="mt-4 ">
        Building Form
      </div>
      <div className="border text-center border-gray-400 overflow-auto" >
        <Table className="">
          <TableHeader className=" text-center">
            <TableRow>
              <TableHead >
                <div className=" text-left">Floor No</div></TableHead >
              <TableHead >Type</TableHead >
              {/* <TableHead >Unit</TableHead > */}
              <TableHead >Occupancy Ratio</TableHead >
              <TableHead >Min Size</TableHead >
              <TableHead >Max size</TableHead >
              <TableHead >Avg. Sale Price</TableHead >
              <TableHead >Monthly Rent</TableHead >
              <TableHead >Instalment Plan</TableHead >
              <TableHead >Instalment Period</TableHead >
              <TableHead >Down Payment</TableHead >
              <TableHead >Total Sale Price</TableHead >
              <TableHead >Possession Amount</TableHead >
              <TableHead >Date</TableHead >
              <TableHead >Remarks</TableHead >
            </TableRow>
          </TableHeader>
          <TableBody className="">
            {floors.map((floor) => (
              <TableRow key={floor?.id} className="border-b border-gray-400 text-center">
                <TableCell >
                  <div className=" text-left w-28">{floor?.floor_no}</div>
                </TableCell >
                <TableCell >
                  <div className="">{floor?.floor_type}</div></TableCell >
                {/* <TableCell >
                  {floor?.floor_apartments_studio && (
                    // <div className="badge bg-cyan-800 text-white">1 Bed</div>
                    <Badge>Studio</Badge>
                  )}
                  {floor?.floor_apartments_1_bed && (
                    // <div className="badge bg-cyan-800 text-white">1 Bed</div>
                    <Badge>1 Bed</Badge>
                  )}
                  {floor?.floor_apartments_2_bed && (
                    // <div className="badge bg-cyan-800 text-white">2 Bed</div>
                    <Badge>2 Bed</Badge>
                  )}
                  {floor?.floor_apartments_3_bed && (
                    // <div className="badge bg-cyan-800 text-white">3 Bed</div>
                    <Badge>3 Bed</Badge>
                  )}
                  {floor?.floor_apartments_4_bed && (
                    // <div className="badge bg-cyan-800 text-white">4 Bed</div>
                    <Badge>4 Bed</Badge>
                  )}
                  {floor?.floor_apartments_5_bed && (
                    // <div className="badge bg-cyan-800 text-white">4 Bed</div>
                    <Badge>5 Bed</Badge>
                  )}
                  {floor?.floor_apartments_duplex && (
                    // <div className="badge bg-cyan-800 text-white">Duplex</div>
                    <Badge>Duplex</Badge>
                  )}
                  {floor?.floor_apartments_penthouse && (
                    // <div className="badge bg-cyan-800 text-white">Penthouse</div>
                    <Badge>Penthouse</Badge>
                  )}
                  {floor?.floor_has_furnished && (
                    // <div className="badge bg-cyan-800 text-white">Penthouse</div>
                    <Badge>Furnished</Badge>
                  )}
                  {floor?.floor_has_semi_furnished && (
                    // <div className="badge bg-cyan-800 text-white">Penthouse</div>
                    <Badge>Semi Furnished</Badge>
                  )}
                  {floor?.floor_has_service_apartments && (
                    // <div className="badge bg-cyan-800 text-white">Penthouse</div>
                    <Badge>Service Apartments</Badge>
                  )}
                  {floor?.floor_has_hotel_suites_apartments && (
                    // <div className="badge bg-cyan-800 text-white">Penthouse</div>
                    <Badge>Hotel Suites Apartments</Badge>
                  )}
                </TableCell > */}
                {/* <TableCell >{floor?.occupancy}</TableCell > */}
                <TableCell>{(floor?.occupancy === null ? "0%" : floor?.occupancy + "%")}</TableCell>
                <TableCell >{Number(floor?.size_min).toLocaleString()}</TableCell >
                <TableCell >{Number(floor?.size_max).toLocaleString()}</TableCell >
                <TableCell >{Number(floor?.avg_sale_price).toLocaleString()}</TableCell >
                <TableCell >{Number(floor?.avg_monthly_rent).toLocaleString()}</TableCell >
                <TableCell >{floor?.instalment_plan}</TableCell >
                <TableCell >{Number(floor?.instalment_period).toLocaleString()}</TableCell >
                <TableCell >{Number(floor?.down_payment_amount).toLocaleString()}</TableCell >
                <TableCell >{Number(floor?.instalment_amount).toLocaleString()}</TableCell >
                <TableCell >{Number(floor?.possession_amount).toLocaleString()}</TableCell >
                <TableCell>{floor?.date}</TableCell>
                <TableCell >{floor?.remarks}</TableCell >
                <TableCell >
                  {/* <div className="flex justify-center items-center border border-slate-400 px-2 py-1 rounded hover:bg-cyan-800 outline-none hover:text-white">
                    <Link

                      className="flex"
                      href={"/buildings/floor/edit/" + floor?.id}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                      </svg>

                      Edit
                    </Link>
                  </div> */}

                  <Button asChild>
                    <Link href={"/buildings/floor/edit/" + floor?.id}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                      </svg>
                      Edit
                    </Link>
                  </Button>
                </TableCell >
                <TableCell >

                  <DeleteFloorDialog floor_id={floor.id} />
                </TableCell>





              </TableRow>


            ))}
          </TableBody>
        </Table>

      </div>
      <div className="flex justify-end mt-2 gap-2">
        {/* <Link href={"/buildings/floor/add/" + params.id}>

          <button className="btn mt-2 bg-white text-black hover:bg-cyan-800 hover:text-white capitalize mb-2 text-base">Add Floor Information</button>
        </Link> */}

        <Button asChild>
          <Link href={"/buildings/floor/add/" + params.id}
          >
            Add floor information</Link>
        </Button>
        <Button asChild>
          <Link href="/buildings">Go Back</Link>
        </Button>
      </div>


    </>
  );
}
