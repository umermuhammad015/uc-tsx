import Link from "next/link";
import { Input } from "@/components/ui/input"
import prisma from "../db";
import { Feed } from "@/components/feed";
import SearchInput from "./components/SearchInput";
// import { PageProps } from '../buildings/page';
import { redirect } from "next/navigation";
import DeleteBuildingButton from "./components/DeleteBuildingButton";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import ThemeToggleButton from "@/components/ThemeToggleButton";
import { useSearchParams } from 'next/navigation'
// import { Pagination } from '../../components/pagination';



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
import CityInput from "./components/CityInput";
import DeleteBuildingDialog from "./components/DeleteBuildingDialog";
import BuildingStatus from "./components/Building_status";
import Pagination from "@/components/pagination";

export const revalidate = 0; // revalidate the date at most every hour
export const dynamic = "force-dynamic";
const PAGE_SIZE = 5;

const getBuildings = async ({
  pageNumber = 1,
  search_string = '',
  take = PAGE_SIZE,
  skip = 0,
  city = "",
  building_status = ""
}) => {

  // async function getBuildings({ search = '', take = PAGE_SIZE, skip = 0 }) {
  // console.log("GetSocieties");

  // console.log("developer_name GetSocieties")
  // console.log(developer)

  if (search_string === null || search_string === '') {

    // console.log("developer inside if")
    // console.log(developer)

    const results = await prisma.buildings.findMany({
      take,
      skip,
      where: {
        city: city === "" ? undefined : city,
        status: building_status === "" ? undefined : building_status,

      },
      orderBy: {
        name: 'asc',
      },
    });

    const total = await prisma.buildings.count();

    revalidatePath('/commercial');

    const return_object = {
      data: results,
      metadata: {
        page: pageNumber,
        hasNextPage: skip + take < total,
        totalPages: Math.ceil(total / take),
      },
    };

    // console.log("RO")
    // console.log(return_object)

    return return_object

  } else {

    // console.log("inside else developer_name");
    // console.log(developer_name);

    const results = await prisma.buildings.findMany({
      take,
      skip,
      where: {
        OR: [
          {
            name: {
              contains: search_string,
              mode: 'insensitive',
            },
          },
          {
            city: {
              contains: search_string,
              mode: 'insensitive',
            },
          },
          {
            area: {
              contains: search_string,
              mode: 'insensitive',
            },
          },
        ],
        city: city === "" ? undefined : city,
        status: building_status === "" ? undefined : building_status,

      },
    })

    // console.log(results);

    const total = await prisma.buildings.count({
      take,
      skip,
      where: {
        OR: [
          {
            name: {
              contains: search_string,
              mode: 'insensitive',
            },
          },
          {
            city: {
              contains: search_string,
              mode: 'insensitive',
            },
          },

        ]
      },
    });

    revalidatePath('/buildings');

    const return_object = {
      data: results,
      metadata: {
        hasNextPage: skip + take < total,
        totalPages: Math.ceil(total / take),
      },
    };

    // console.log("RO")
    // console.log(return_object)


    return return_object

  }



}

type Props = {
  params: {};
  searchParams: { [key: string]: string | string[] | undefined };
}



// export default async function List(props: PageProps) {
export default async function List({ city, page, search, building_status }: any) {

  // console.log("developer list ")
  // console.log(developer)

  // const pageNumber = Number(props?.searchParams?.page || 1); // Get the page number. Default to 1 if not provided.
  const pageNumber = Number(page || 1); // Get the page number. Default to 1 if not provided.

  const take = PAGE_SIZE;
  const skip = (pageNumber - 1) * take; // Calculate skip based on page number.
  // const search = props?.searchParams?.search || ''
  const search_string = search || ''

  // const buildings = await getBuildings({search, take, skip});
  const { data, metadata } = await getBuildings({ pageNumber, search_string, take, skip, city, building_status });

  return (
    <>
      <SearchInput />

      <header className="flex justify-between items-center mt-4 ">
        <div className="flex gap-5">
          <CityInput />
          <BuildingStatus />
          {/* <DeveloperName /> */}
          {/* <Grade />
                    <ProjectType /> */}
        </div>
        <div className="">



          <Button asChild>
            <Link href="/buildings/new"
            >
              <span>+</span>
              <span className="ml-2">Add New Buildings</span></Link>
          </Button>

        </div>
      </header>
      <div className="mt-4">
        <Table className="table text-base ">
          <TableHeader>
            <TableRow className="">
              <TableHead>
                <div className=" text-lg">Building Names</div>
              </TableHead>
              <TableHead>
                <div className="text-lg">Location</div>
              </TableHead>
              <TableHead>
                <div className="text-lg">Building Type</div>
              </TableHead>
              <TableHead>
                <div className="text-lg">Grade</div>
              </TableHead>
              <TableHead>
                <div className="text-lg">Plot Size</div>
              </TableHead>
              <TableHead>
                <div className="text-lg">Constructed Area</div>
              </TableHead>
              <TableHead>
                <div className="text-lg">Actions</div>
                {/* <Button asChild>
                  <Link href="/api/tables/floor?format=xlsx"
                  >

                    <svg xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="lucide lucide-download">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="7 10 12 15 17 10" />
                      <line x1="12" x2="12" y1="15" y2="3" />
                    </svg>
                    <span className="ml-2">Export</span>
                  </Link>
                </Button> */}
              </TableHead>
            </TableRow>
          </TableHeader>
          {
            data &&
            <TableBody>
              {data.map((building) => (
                <TableRow key={building.id} className="">
                  <TableCell>
                    <Link href={"buildings/" + building.id}>{building.name}</Link>
                  </TableCell>
                  <TableCell>{building.area}</TableCell>
                  <TableCell>
                    {building?.type_retail && (
                      // <div className="badge bg-cyan-800 text-white">1 Bed</div>
                      <Badge>Retail</Badge>
                    )}
                    {building?.type_apartments && (
                      // <div className="badge bg-cyan-800 text-white">2 Bed</div>
                      <Badge>Apartment</Badge>
                    )}
                    {building?.type_offices && (
                      // <div className="badge bg-cyan-800 text-white">2 Bed</div>
                      <Badge>office</Badge>
                    )}
                  </TableCell>
                  <TableCell>{building.building_rank}</TableCell>
                  <TableCell>{building.plot_size}</TableCell>
                  <TableCell>{building.construction_area}</TableCell>
                  <TableCell>
                    <div className="flex justify-around">
                      <div className="flex gap-4">


                        <Button asChild>
                          <Link href={"buildings/edit/" + building.id}>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              className="w-6 h-6"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                              />
                            </svg>
                            Edit
                          </Link>
                        </Button>

                        <Button asChild>
                          <Link href={"buildings/floor/add/" + building.id}>
                            Add floor information
                          </Link>
                        </Button>

                        <DeleteBuildingDialog building_id={building.id} />

                      </div>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          }

        </Table>
      </div>
      <div className="mt-6">
        <Pagination metadata={metadata} />
      </div>

    </>
  );
}
