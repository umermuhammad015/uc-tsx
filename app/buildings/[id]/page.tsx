import prisma from "../../db";
import Link from "next/link";
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
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

export default async function ViewBuilding({ params, searchParams }:
  {
    params: any,
    searchParams: { [key: string]: string | string[] | undefined }
  }) {
  // console.log(params);

  const { id } = await params;

  // Get building information
  const building = await prisma.buildings.findUnique({
    where: {
      id: Number(id) as number
    },
  });

  // console.log(building);

  const Buildings = await prisma.buildings.findUnique({
    where: {
      id: Number(id) as number
    },
  });


  // Get floors information
  const floors = await prisma.floors.findMany({
    where: {
      building_id: Number(id) as number
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
    redirect("/buildings" + id);
  }

  const queryParams = new URLSearchParams();

  // Object.entries(searchParams).forEach(([key, value]) => {
  //   if (value) {
  //     if (Array.isArray(value)) {
  //       // If the value is an array, append all values
  //       value.forEach((v) => queryParams.append(key, v));
  //     } else {
  //       // If the value is a string, append it
  //       queryParams.append(key, value);
  //     }
  //   }
  // });

  // console.log(floors);

  return (
    <>
      <div className="flex justify-between mb-4">
        {/* {
  building?.building_draft === "yes" ? "This building has been drafted" : " " 
  } */}
        <h1></h1>
        <Button asChild>
          <Link href={"/buildings/floor/add/" + id}>
            Add floor information</Link>
        </Button>
      </div>
      <div className="border border-gray-400 ">
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>Name </TableCell>
              <TableCell>{building?.name}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>City </TableCell>
              <TableCell>{building?.city}</TableCell>
            </TableRow>
            {/* Facilities */}
            <TableRow>
              <TableCell>Zone </TableCell>
              <TableCell>{building?.zone}</TableCell>
            </TableRow>
            {/* Type */}
            <TableRow>
              <TableCell>Area/Society: </TableCell>
              <TableCell>{building?.area}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Building Name </TableCell>
              <TableCell>{building?.address}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Building Type </TableCell>
              <TableCell>
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
              <TableCell>Building Status</TableCell>
              <TableCell>{building?.status}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Plot Size (Sq. Yards)</TableCell>
              <TableCell>{Number(building?.plot_size).toLocaleString()}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Total Covered Area of Building (Sq Ft)</TableCell>
              <TableCell>{Number(building?.construction_area).toLocaleString()}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Builder Name</TableCell>
              <TableCell>{building?.builder_name}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Launch Year </TableCell>
              <TableCell>{building?.launch_year}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Construction Year </TableCell>
              <TableCell>{building?.construction_year}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Building Rank</TableCell>
              <TableCell>{building?.building_rank}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Total Floors</TableCell>
              <TableCell>{building?.total_floors}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Parking Floors</TableCell>
              <TableCell>{building?.parking_floors}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Facilities </TableCell>
              <TableCell>
                {building?.is_centrally_air_conditioned && (
                  <Badge>Centrally Air conditioned </Badge>
                )}
                {building?.has_security && (
                  <Badge>Security</Badge>
                )}
                {building?.has_escalators && (
                  <Badge>Escalators</Badge>
                )}
                {building?.has_food_court && (
                  <Badge>Food Court</Badge>
                )}
                {building?.has_entertainment_area && (
                  <Badge>Entertainment Area</Badge>
                )}
                {building?.has_none && (
                  <Badge>None of these</Badge>
                )}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>No. of Retail Floors</TableCell>
              <TableCell>{building?.retail_floors_count}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Retails shops</TableCell>
              <TableCell>{building?.retail_floors_shops_count}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Retail Categories </TableCell>
              <TableCell>
                {building?.has_fashion_health && (
                  <Badge>Fashion & Health</Badge>
                )}
                {building?.has_electronics_appliancecs && (
                  <Badge>Electronics & Appliances</Badge>
                )}
                {building?.has_home_living && (
                  <Badge>Home & Living</Badge>
                )}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Food & Beverage Categorie</TableCell>
              <TableCell>
                {building?.has_restaurants_courts && (
                  <Badge>Restaurants/Food courts</Badge>
                )}
                {building?.has_bakery_ice && (
                  <Badge>Bakery/Ice cream</Badge>
                )}
                {building?.has_grocery_supermarkets && (
                  <Badge>Grocery & Supermarkets</Badge>
                )}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Services Categories</TableCell>
              <TableCell>
                {building?.has_banks_atm && (
                  <Badge>Banks & ATMs</Badge>
                )}
                {building?.has_real_estate && (
                  <Badge>Real Estate Agencies</Badge>
                )}
                {building?.has_labs_pharmacies && (
                  <Badge>Labs/Pharmacies</Badge>
                )}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Entertainment & Leisure</TableCell>
              <TableCell>
                {building?.has_play_fitness && (
                  <Badge>Play Areas/Fitness Centers </Badge>
                )}
                {building?.has_swimming_pool && (
                  <Badge>Swimming Pool</Badge>
                )}
                {building?.has_cinema && (
                  <Badge> cinema</Badge>
                )}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Apartment Floors</TableCell>
              <TableCell>{building?.apartment_floors}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>No. of Apartment</TableCell>
              <TableCell>{building?.apartments_count}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Apartment Types</TableCell>
              <TableCell>
                {building?.apartments_studio && (
                  <Badge>Studio</Badge>
                )}
                {building?.apartments_has_type_1_bed && (
                  <Badge>1 Bed</Badge>
                )}
                {building?.apartments_has_type_2_bed && (
                  <Badge>2 Bed</Badge>
                )}
                {building?.apartments_has_type_3_bed && (
                  <Badge>3 Bed</Badge>
                )}
                {building?.apartments_has_type_4_bed && (
                  <Badge>4 Bed</Badge>
                )}
                {building?.apartments_has_type_5_bed && (
                  <Badge>5 Bed</Badge>
                )}
                {building?.apartments_has_type_duplex && (
                  <Badge>Duplex</Badge>
                )}
                {building?.apartments_has_type_penthouse && (
                  <Badge>Penthouse</Badge>
                )}
                {building?.has_furnished && (
                  <Badge>Furnished</Badge>
                )}
                {building?.has_semi_furnished && (
                  <Badge>Semi Furnished</Badge>
                )}
                {building?.has_service_apartments && (
                  <Badge>Service Apartments</Badge>
                )}
                {building?.has_hotel_suites_apartments && (
                  <Badge>Hotel Suites Apartments</Badge>
                )}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Servant Quarter</TableCell>
              <TableCell>{building?.apartments_has_servant_quarter}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Office Floors</TableCell>
              <TableCell>{building?.office_floors_count}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Offices</TableCell>
              <TableCell>{building?.office_floors_count}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>surveyor name</TableCell>
              <TableCell>{building?.surveyor_name}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Your Remarks</TableCell>
              <TableCell>{building?.building_survery_remarks}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
      <div className="flex gap-2 justify-end mt-3">
        <Button asChild>
          <Link href={"edit/" + Buildings?.id}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
            </svg>
            Edit
          </Link>
        </Button>
      </div>
      <div className="mt-4">
        Building Form
      </div>
      <div className="border text-center border-gray-400 overflow-auto">
        <Table className="">
          <TableHeader className=" text-center">
            <TableRow>
              <TableHead>
                Floor No
              </TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Occupancy Ratio</TableHead>
              <TableHead>Min Size</TableHead>
              <TableHead>Max size</TableHead>
              <TableHead>Avg. Sale Price</TableHead>
              <TableHead>Monthly Rent</TableHead>
              <TableHead>Instalment Plan</TableHead>
              <TableHead>Instalment Period</TableHead>
              <TableHead>Down Payment</TableHead>
              <TableHead>Total Sale Price</TableHead>
              <TableHead>Possession Amount</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Remarks</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="">
            {floors.map((floor) => (
              <TableRow key={floor?.id} className="border-b border-gray-400 text-center">
                <TableCell>
                  {floor?.floor_no}
                </TableCell>
                <TableCell>
                  {floor?.floor_type}
                </TableCell>
                <TableCell>{(floor?.occupancy === null ? "0%" : floor?.occupancy + "%")}</TableCell>
                <TableCell>{Number(floor?.size_min).toLocaleString()}</TableCell>
                <TableCell>{Number(floor?.size_max).toLocaleString()}</TableCell>
                <TableCell>{Number(floor?.avg_sale_price).toLocaleString()}</TableCell>
                <TableCell>{Number(floor?.avg_monthly_rent).toLocaleString()}</TableCell>
                <TableCell>{floor?.instalment_plan}</TableCell>
                <TableCell>{Number(floor?.instalment_period).toLocaleString()}</TableCell>
                <TableCell>{Number(floor?.down_payment_amount).toLocaleString()}</TableCell>
                <TableCell>{Number(floor?.instalment_amount).toLocaleString()}</TableCell>
                <TableCell>{Number(floor?.possession_amount).toLocaleString()}</TableCell>
                <TableCell>{floor?.date}</TableCell>
                <TableCell>{floor?.remarks}</TableCell>
                <TableCell>
                  <Button asChild>
                    <Link href={"/buildings/floor/edit/" + floor?.id}>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                      </svg>
                      Edit
                    </Link>
                  </Button>
                </TableCell>
                <TableCell>
                  <DeleteFloorDialog floor_id={floor.id} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="flex justify-end mt-2 gap-2">
        {/* 
  <Link href={"/buildings/floor/add/" + id}>
  <button className="btn mt-2 bg-white text-black hover:bg-cyan-800 hover:text-white capitalize mb-2 text-base">Add Floor Information</button>
  </Link> */}
        <Button asChild>
          <Link href={"/buildings/floor/add/" + id}>
            Add floor information</Link>
        </Button>
        <Button asChild>
          {/* 
    <Link href="/buildings">
    Go Back</Link> */}
          <Link href={`/buildings${queryParams.toString() ? `?${queryParams.toString()}` : ""}`}>Go Back</Link>
        </Button>
      </div>
    </>
  );
}
