import Link from "next/link";
import { Input } from "@/components/ui/input"
import prisma from "../db";
import { Feed } from "@/components/feed";
import SearchInput from "./components/SearchInput";
import { PageProps } from '../buildings/page';
import { redirect } from "next/navigation";
import DeleteBuildingButton from "./components/DeleteBuildingButton";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import ThemeToggleButton from "@/components/ThemeToggleButton";
import { useSearchParams } from 'next/navigation'
import { Pagination } from '../../components/pagination';



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

export const revalidate = 0; // revalidate the date at most every hour
export const dynamic = "force-dynamic";
const PAGE_SIZE = 5;

const GetBuildings = async ({ search = '', take = PAGE_SIZE, skip = 0 }) => {
  // async function getBuildings({ search = '', take = PAGE_SIZE, skip = 0 }) {
  console.log("GetBuildings");

  if (search === null || search === '') {

    console.log("inside if");

    const results = await prisma.buildings.findMany({
      take,
      skip,
      orderBy: {
        name: 'asc',
      },
    });

    const total = await prisma.buildings.count();

    revalidatePath('/buildings');

    const return_object = {
      data: results,
      metadata: {
        hasNextPage: skip + take < total,
        totalPages: Math.ceil(total / take),
      },
    };

    console.log("RO")
    console.log(return_object)

    return return_object

  } else {

    console.log("inside else");

    const results = await prisma.buildings.findMany({
      take,
      skip,
      where: {
        OR: [
          {
            name: {
              contains: search,
              mode: 'insensitive',
            },
          },
          {
            city: {
              contains: search,
              mode: 'insensitive',
            },
          },
        ]
      },
    })

    const total = await prisma.buildings.count({
      take,
      skip,
      where: {
        OR: [
          {
            name: {
              contains: search,
              mode: 'insensitive',
            },
          },
          {
            city: {
              contains: search,
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

    console.log("RO")
    console.log(return_object)

    return return_object

  }

}

type Props = {
  params: {};
  searchParams: { [key: string]: string | string[] | undefined };
}

export default async function List(props: PageProps) {

  const pageNumber = Number(props?.searchParams?.page || 1); // Get the page number. Default to 1 if not provided.

  const take = PAGE_SIZE;
  const skip = (pageNumber - 1) * take; // Calculate skip based on page number.
  const search = props?.searchParams?.search || ''

  // const buildings = await getBuildings({search, take, skip});
  const { data, metadata } = await GetBuildings({ search , take, skip });

  // const searchedBuildings = await getSearchedBuildings()

  // Function to delete building
  async function deleteBuilding(data: FormData) {
    "use server";

    const building_id = data.get("building-id")?.valueOf();
    console.log(building_id);

    await prisma.buildings.delete({
      where: {
        id: Number(building_id) as number
      },
    });

    revalidatePath("/");
    redirect("/buildings");
  }

  // await prisma.buildings.create({
  //   data:{
  //     name: "Hafeez Center",
  //     city: "Lahore"
  //   }})

  // console.log(searchParams);

  return (
    <>
      <SearchInput />

      <header className="flex justify-between items-center mt-4 ">
        <h1 className="text-2xl"></h1>
        <div>
          {/* <Link
            className="flex justify-center items-center"
            href="/buildings/new"
          ><div className="text-xl bg-slate-500 mr-2 px-1">+</div>
            Add New Buildings
          </Link> */}
          <Button asChild>
            <Link href="/buildings/new">
              <div>+</div>
              Add New Buildings
            </Link>
          </Button>
        </div>
      </header>
      <div className="mt-4">
        <Table className="table text-base ">
          <TableHeader>
            <TableRow className="">
              <TableHead>
                <div className=" text-lg">Buildings Names</div>
              </TableHead>
              <TableHead>
                <div className="text-lg">Status</div>
              </TableHead>
              <TableHead>
                <div className="text-lg">Facilities</div>
              </TableHead>
              <TableHead>
                <div className="text-lg">City</div>
              </TableHead>
              <TableHead>
                <div className="text-lg">Area</div>
              </TableHead>
              <TableHead>
                <div className="text-lg">Actions</div>
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
                  <TableCell>{building.status}</TableCell>
                  <TableCell>
                    <div className="flex flex-col ">
                      <div>
                        {building.type_retail && (
                          // <div className="badge bg-cyan-950 text-white p-2 m-2 text-xs">Retail</div>
                          <Badge>Retail</Badge>
                        )}
                        {building.type_offices && (
                          // <div className="badge bg-cyan-950 text-white p-2 m-2 text-xs">Offices</div>
                          <Badge>Offices</Badge>
                        )}
                        {building.type_apartments && (
                          // <div className="badge bg-cyan-950 text-white p-2 m-2 text-xs">Apartments</div>
                          <Badge>Apartments</Badge>
                        )}
                        {building.type_other && (
                          // <div className="badge bg-cyan-950 text-white p-2 m-2 text-xs">Other</div>
                          <Badge>Other</Badge>
                        )}
                      </div>
                      <div>
                        {building.is_centrally_air_conditioned && (
                          // <div className="badge bg-emerald-700 text-white p-2 m-2 text-xs">Security</div>
                          <Badge>Centrally Air Conditioned</Badge>
                        )}
                        {building.has_security && (
                          // <div className="badge bg-emerald-700 text-white p-2 m-2 text-xs">Security</div>
                          <Badge>Security</Badge>
                        )}
                        {building.has_escalators && (
                          // <div className="badge bg-emerald-700 text-white p-2 m-2 text-xs">Escalators</div>
                          <Badge>Escalators</Badge>
                        )}
                        {building.has_food_court && (
                          // <div className="badge bg-emerald-700 text-white p-2 m-2 text-xs">Footcourt</div>
                          <Badge>Footcourt</Badge>
                        )}
                        {building.has_entertainment_area && (
                          // <div className="badge bg-emerald-700 text-white p-2 m-2 text-xs w-32">Entertainment Area</div>
                          <Badge>Entertainment Area</Badge>
                        )}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>{building.city}</TableCell>
                  <TableCell>{building.area}</TableCell>
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

                        <form action={deleteBuilding}>
                          <input
                            type="hidden"
                            name="building-id"
                            value={building.id}
                          />
                          <DeleteBuildingButton />
                        </form>
                      </div>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          }

        </Table>
      </div>
      <Pagination {...props.searchParams} {...metadata} />


    </>
  );
}
