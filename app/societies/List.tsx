import Link from "next/link";
import prisma from "../db";
import SearchInput from "./components/SearchInput";
import { redirect } from "next/navigation";
import { PageProps } from '../buildings/page';
import DeleteSocietyButton from "./components/DeleteSocietyButton";
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { revalidatePath } from "next/cache";
import { Pagination } from "@/components/pagination";

export const revalidate = 1; // revalidate the date at most every hour
export const dynamic = "force-dynamic";
const PAGE_SIZE = 5;

const GetSocieties = async ({ search = '', take = PAGE_SIZE, skip = 0 }) => {
    // async function getBuildings({ search = '', take = PAGE_SIZE, skip = 0 }) {
    console.log("GetSocieties");

    if (search === null || search === '') {

        console.log("inside if");

        const results = await prisma.societies.findMany({
            take,
            skip,
            orderBy: {
                name: 'asc',
            },
        });

        const total = await prisma.societies.count();

        revalidatePath('/societies');

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

        const results = await prisma.societies.findMany({
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

        const total = await prisma.societies.count({
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

        revalidatePath('/societies');

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
    const { data, metadata } = await GetSocieties({ search, take, skip });

    // const searchedBuildings = await getSearchedBuildings()

    // Function to delete building
    async function deleteSociety(data: FormData) {
        "use server";

        const societies_id = data.get("societies-id")?.valueOf();
        console.log(societies_id);

        await prisma.societies.delete({
            where: {
                id: Number(societies_id) as number
            },
        });

        revalidatePath("/");
        redirect("/societies");
    }

    return (
        <>

            <SearchInput />
            <header className="flex justify-between items-center mt-4 ">
                <h1 className="text-2xl"></h1>
                <div className=" ">

                    {/* <Link
                        className="flex justify-center items-center"
                        href="/societies/new"
                    ><div className="text-xl bg-slate-500 mr-2 px-1">+</div>
                        Add New Society
                    </Link> */}

                    <Button asChild>
                        <Link href="/societies/new"
                        >
                            <span>+</span>
                            <span className="ml-2">Add Society</span></Link>
                    </Button>


                </div>

            </header>
            <div className="mt-4">
                <Table className="table text-base">
                    <TableHeader>
                        <TableRow className="">
                            <TableHead>
                                <div className="text-lg">Societies Names</div>
                            </TableHead>
                            <TableHead>
                                <div className="text-lg">Location</div>
                            </TableHead>
                            <TableHead>
                                <div className="text-lg">Project Type</div>
                            </TableHead>

                            <TableHead>
                                <div className="text-lg">Grade</div>
                            </TableHead>
                            <TableHead>
                                <div className="text-lg">size</div>
                            </TableHead>
                            <TableHead>
                                <div className="text-lg">Occupancy</div>
                            </TableHead>
                            <TableHead>
                                <div className="text-lg">Action</div>
                            </TableHead>


                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {data.map((societies) => (
                            <TableRow key={societies.id} className="">
                                <TableCell><Link href={"societies/" + societies.id}>{societies.name}</Link></TableCell>
                                <TableCell>{societies.address}</TableCell>
                                <TableCell>{societies.type}</TableCell>

                                <TableCell>{societies.grade}</TableCell>
                                <TableCell>

                                    <div className="">
                                        {societies.plot_sizes_commercial_87_5 && (
                                            // <div className="badge bg-cyan-950 text-white p-2 m-2 text-xs">Park</div>
                                            <Badge>87.7 (Sq.Y)</Badge>
                                        )}
                                        {societies.plot_sizes_commercial_100 && (
                                            // <div className="badge bg-cyan-950 text-white p-2 m-2 text-xs">School</div>
                                            <Badge>100 (Sq.Y)</Badge>
                                        )}
                                        {societies.plot_sizes_commercial_125 && (
                                            // <div className="badge bg-cyan-950 text-white p-2 m-2 text-xs">Gated_Community</div>
                                            <Badge>125 (Sq.Y)</Badge>
                                        )}
                                        {societies.plot_sizes_commercial_200 && (
                                            // <div className="badge bg-cyan-950 text-white p-2 m-2 text-xs">University</div>
                                            <Badge>200 (Sq.Y)</Badge>
                                        )}
                                        {societies.plot_sizes_commercial_250 && (
                                            // <div className="badge bg-cyan-950 text-white p-2 m-2 text-xs">Hospital</div>
                                            <Badge>250 (Sq.Y)</Badge>
                                        )}
                                        {societies.plot_sizes_commercial_500 && (
                                            // <div className="badge bg-cyan-950 text-white p-2 m-2 text-xs">Commercial Market</div>
                                            <Badge>500 (Sq.Y)</Badge>
                                        )}
                                        {societies.plot_sizes_commercial_1000 && (
                                            // <div className="badge bg-cyan-950 text-white p-2 m-2 text-xs">zoo</div>
                                            <Badge>1000 (Sq.Y)</Badge>
                                        )}
                                        {societies.plot_sizes_commercial_2000 && (
                                            // <div className="badge bg-cyan-950 text-white p-2 m-2 text-xs">Food Arena</div>
                                            <Badge>2000 (Sq.Y)</Badge>
                                        )}

                                    </div>
                                    <div className="">
                                        {societies.plot_sizes_residential_87_5 && (
                                            // <div className="badge bg-cyan-950 text-white p-2 m-2 text-xs">Park</div>
                                            <Badge>87.7 (Sq.Y)</Badge>
                                        )} 
                                        {societies.plot_sizes_residential_125 && (
                                            // <div className="badge bg-cyan-950 text-white p-2 m-2 text-xs">Gated_Community</div>
                                            <Badge>125 (Sq.Y)</Badge>
                                        )}
                                        {societies.plot_sizes_residential_200 && (
                                            // <div className="badge bg-cyan-950 text-white p-2 m-2 text-xs">University</div>
                                            <Badge>200 (Sq.Y)</Badge>
                                        )}
                                        {societies.plot_sizes_residential_250 && (
                                            // <div className="badge bg-cyan-950 text-white p-2 m-2 text-xs">Hospital</div>
                                            <Badge>250 (Sq.Y)</Badge>
                                        )}
                                        {societies.plot_sizes_residential_500 && (
                                            // <div className="badge bg-cyan-950 text-white p-2 m-2 text-xs">Commercial Market</div>
                                            <Badge>500 (Sq. Yards)</Badge>
                                        )}
                                        {societies.plot_sizes_residential_1000 && (
                                            // <div className="badge bg-cyan-950 text-white p-2 m-2 text-xs">zoo</div>
                                            <Badge>1000 (Sq.Y)</Badge>
                                        )}
                                        {societies.plot_sizes_residential_2000 && (
                                            // <div className="badge bg-cyan-950 text-white p-2 m-2 text-xs">Food Arena</div>
                                            <Badge>2000 (Sq.Y)</Badge>
                                        )}

                                    </div>
                                </TableCell>
                                <TableCell className="text-center">
                                    {Number(societies?.occupancy).toLocaleString()}
                                </TableCell>
                                <TableCell>
                                    <div className="flex justify-around gap-2">
                                        <div className="flex gap-4">
                                            <Button asChild>
                                                <Link href={"societies/edit/" + societies.id}
                                                >
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                                    </svg>
                                                    Edit
                                                </Link>
                                            </Button>

                                            {/* <Link
                                                className=" flex justify-center items-center border border-slate-400 px-2 py-1 rounded hover:bg-cyan-800 outline-none hover:text-white "
                                                href={"buildings/floor/add/" + societies.id}
                                            >
                                                Add floor information
                                            </Link> */}
                                        </div>

                                        <Button asChild>
                                            <Link href={"societies/plots/add/" + societies.id}>
                                                Add Plots/Banglow
                                            </Link>
                                        </Button>

                                        {/* <Button asChild>
                                            <Link href={"societies/houses/add/" + societies.id}>
                                                Add Houses
                                            </Link>
                                        </Button> */}

                                        <form action={deleteSociety}>
                                            <input type="hidden" name="societies-id" value={societies.id} />
                                            <DeleteSocietyButton />
                                            {/* <button type="submit" className="h-14 btn bg-red-700 text-white hover:bg-red-800 capitalize">
                                                Delete
                                            </button> */}
                                        </form>

                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}

                    </TableBody>

                </Table >
            </div>
            <div className="mt-6">
                <Pagination {...props.searchParams} {...metadata} />
            </div>
            {/* <div className="flex flex-col gap-4 ">
        {buildings.map((building) => (
          <div className="flex justify-between gap-4">
            <Link href={"buildings/" + building.id}>{building.name}</Link> : {building.status} {building.city}
            <div className="flex gap-4">
              <button className="btn btn-primary">
                <Link href={"buildings/edit/" + building.id}>Edit</Link>
              </button>
              <form action={deleteBuilding}>
                <input type="hidden" name="building-id" value={building.id} />
                <button type="submit" className="btn btn-secondary  border">
                  Delete
                </button>
              </form>
              <Link href={"buildings/floor/add/" + building.id}>
                <button className="btn btn-primary">Add Floor Information</button>
              </Link>
            </div>
          </div>
          // <BuildingsList key={building.id} {...building} />
        ))}
      </div>
      <div className="flex flex-col gap-4">
        <div>
          <input type="text" placeholder="Building Name" className="input input-bordered w-full max-w-xs" />
        </div>
        <div className="class">
          <input type="text" placeholder="City" className="input input-bordered w-full max-w-xs" />
        </div>
      </div> */}
        </>
    );
}
