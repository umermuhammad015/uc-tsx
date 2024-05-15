import Link from "next/link";
import prisma from "../db";
import SearchInput from "./components/SearchInput";
import { redirect } from "next/navigation";
import useDebounce from "@/components/debouce";
import { PageProps } from '../buildings/page';
import DeleteSocietyButton from "./components/DeleteSocietyButton";
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


import { revalidatePath } from "next/cache";
import { Pagination } from "@/components/pagination";
import CityInput from "./components/CityInput";
import DeveloperName from "./components/developerName";
import Grade from "./components/Grade";
import ProjectType from "./components/Project_type";

export const revalidate = 1; // revalidate the date at most every hour
export const dynamic = "force-dynamic";
const PAGE_SIZE = 10000;

const GetSocieties = async ({ search_string = '', take = PAGE_SIZE, skip = 0, city = "", developer = "", society_grade = "", project_type = "" }) => {

    // async function getBuildings({ search = '', take = PAGE_SIZE, skip = 0 }) {
    // console.log("GetSocieties");

    // console.log("developer_name GetSocieties")
    // console.log(developer)

    if (search_string === null || search_string === '') {

        // console.log("developer inside if")
        // console.log(developer)

        const results = await prisma.societies.findMany({
            take,
            skip,
            where: {
                city: city === "" ? undefined : city,
                developer_name: developer === "" ? undefined : developer,
                grade: society_grade === "" ? undefined : society_grade,
                type: project_type === "" ? undefined : project_type,
            },
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

        // console.log("RO")
        // console.log(return_object)

        return return_object

    } else {

        // console.log("inside else developer_name");
        // console.log(developer_name);

        const results = await prisma.societies.findMany({
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
                ],
                city: city === "" ? undefined : city,
                developer_name: developer === "" ? undefined : developer,
                grade: society_grade === "" ? undefined : society_grade,
                type: project_type === "" ? undefined : project_type,
            },
        })

        // console.log(results);

        const total = await prisma.societies.count({
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

        revalidatePath('/societies');

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
export default async function List({ city, page, search, developer, society_grade, project_type }: any) {

    // console.log("developer list ")
    // console.log(developer)

    // const pageNumber = Number(props?.searchParams?.page || 1); // Get the page number. Default to 1 if not provided.
    const pageNumber = Number(page || 1); // Get the page number. Default to 1 if not provided.

    const take = PAGE_SIZE;
    const skip = (pageNumber - 1) * take; // Calculate skip based on page number.
    // const search = props?.searchParams?.search || ''
    const search_string = search || ''

    // const buildings = await getBuildings({search, take, skip});
    const { data, metadata } = await GetSocieties({ search_string, take, skip, city, developer, society_grade, project_type });

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
                <div className="flex gap-5">
                    <CityInput />
                    {/* <DeveloperName /> */}
                    <Grade />
                    <ProjectType />
                </div>
                <div className="">



                    <Button asChild>
                        <Link href="/societies/new"
                        >
                            <span>+</span>
                            <span className="ml-2">Add Society</span></Link>
                    </Button>

                </div>



            </header>
            <div className="flex justify-end">
                <Button asChild>
                    <Link href="/api/tables/societies?format=xlsx"
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
                        <span className="ml-2">Export</span></Link>
                </Button>
            </div>


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
                                <div className="text-lg">Project Status</div>
                            </TableHead>

                            <TableHead>
                                <div className="text-lg">Grade</div>
                            </TableHead>
                            <TableHead>
                                <div className="text-lg">Size (Acres)</div>
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

                                <TableCell className="text-center">{societies.grade}</TableCell>
                                <TableCell className="text-center">{Number(societies.area).toLocaleString()}</TableCell>
                                <TableCell className="text-center">
                                    {/* {(societies?.occupancy !== null || societies?.occupancy !== undefined || societies?.occupancy !== "") ? (societies?.occupancy + '%') : (societies?.occupancy)} */}
                                    {societies?.occupancy === "" ? (societies?.occupancy !== null) : (societies?.occupancy + '%')}
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
                                                Add Price
                                            </Link>
                                        </Button>

                                        {/* <Button asChild>
                                            <Link href={"societies/houses/add/" + societies.id}>
                                                Add Houses
                                            </Link>
                                        </Button> */}

                                        <form action={deleteSociety} className="hidden">
                                            <input type="hidden" name="societies-id" value={societies.id} />
                                            <DeleteSocietyButton />

                                        </form>

                                        {/* <AlertDialog>
                                            <AlertDialogTrigger asChild>
                                                <Button variant="destructive">Delete</Button>
                                            </AlertDialogTrigger>
                                            <AlertDialogContent>
                                                <AlertDialogHeader>
                                                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                                                    <AlertDialogDescription>

                                                    </AlertDialogDescription>
                                                </AlertDialogHeader>
                                                <AlertDialogFooter>
                                                    <AlertDialogCancel>Cancel</AlertDialogCancel>

                                                    <form action={deleteSociety}>
                                                        <input type="hidden" name="societies-id" value={societies.id} />
                                                        <DeleteSocietyButton />

                                                    </form>

                                                </AlertDialogFooter>
                                            </AlertDialogContent>
                                        </AlertDialog> */}

                                        <Dialog>
                                            <DialogTrigger asChild>
                                                <Button variant="destructive">Delete</Button>
                                            </DialogTrigger>
                                            <DialogContent className="sm:max-w-md">
                                                <DialogHeader>
                                                    <DialogTitle>Delete Society</DialogTitle>
                                                    <DialogDescription>
                                                        Are you absolutely sure?
                                                    </DialogDescription>
                                                </DialogHeader>
                                                <div className="flex items-center space-x-2">

                                                </div>
                                                <DialogFooter className="sm:justify-start">
                                                    <DialogClose asChild>
                                                        <Button type="button" variant="secondary">
                                                            Close
                                                        </Button>

                                                    </DialogClose>
                                                    <form action={deleteSociety}>
                                                        <input type="hidden" name="societies-id" value={societies.id} />
                                                        <DeleteSocietyButton />

                                                    </form>
                                                </DialogFooter>
                                            </DialogContent>
                                        </Dialog>

                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}

                    </TableBody>

                </Table >
            </div>
            <div className="mt-6">
                {/* <Pagination {...props.searchParams} {...metadata} /> */}
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
