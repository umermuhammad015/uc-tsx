import Link from "next/link";
import { Input } from "@/components/ui/input"
import prisma from "../db";
import { Feed } from "@/components/feed";
import SearchInput from "./components/SearchInput";
// import { PageProps } from '../commercial/page';
import { redirect } from "next/navigation";
// import DeleteBuildingButton from "./components/DeleteBuildingButton";
// import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
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
import DeleteCommercialButton from "./components/DeleteCommercialButton";
import DeleteCommercialDialog from "./components/DeleteCommercIalDialog";
import CityInput from "./components/CityInput";
import ProjectType from "./components/project_type";
import Grade from "./components/Grade";
import Pagination from "@/components/pagination";

export const revalidate = 0; // revalidate the date at most every hour
export const dynamic = "force-dynamic";
const PAGE_SIZE = 5;

const GetCommercial = async ({
  pageNumber = 1,
  search_string = '',
  take = PAGE_SIZE,
  skip = 0,
  city = "",
  project_type = "",
  commercial_grade = ""
}) => {

  // async function getBuildings({ search = '', take = PAGE_SIZE, skip = 0 }) {
  // console.log("GetSocieties");

  // console.log("developer_name GetSocieties")
  // console.log(developer)

  if (search_string === null || search_string === '') {

    // console.log("developer inside if")
    // console.log(developer)

    const results = await prisma.commercial.findMany({
      take,
      skip,
      where: {
        city: city === "" ? undefined : city,
        project_status: project_type === "" ? undefined : project_type,
        grade: commercial_grade === "" ? undefined : commercial_grade,

      },
      orderBy: {
        commercial_zone_name: 'asc',
      },
    });

    const total = await prisma.commercial.count();

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

    const results = await prisma.commercial.findMany({
      take,
      skip,
      where: {
        OR: [
          {
            commercial_zone_name: {
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
        project_status: project_type === "" ? undefined : project_type,
        grade: commercial_grade === "" ? undefined : commercial_grade,

      },
    })

    // console.log(results);

    const total = await prisma.commercial.count({
      take,
      skip,
      where: {
        OR: [
          {
            commercial_zone_name: {
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

    revalidatePath('/commercial');

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
export default async function List({ city, page, search, project_type, commercial_grade }: any) {

  // console.log("developer list ")
  // console.log(developer)

  // const pageNumber = Number(props?.searchParams?.page || 1); // Get the page number. Default to 1 if not provided.
  const pageNumber = Number(page || 1); // Get the page number. Default to 1 if not provided.

  const take = PAGE_SIZE;
  const skip = (pageNumber - 1) * take; // Calculate skip based on page number.
  // const search = props?.searchParams?.search || ''
  const search_string = search || ''

  // const buildings = await getBuildings({search, take, skip});
  const { data, metadata } = await GetCommercial({ pageNumber, search_string, take, skip, city, project_type, commercial_grade });

  // const searchedBuildings = await getSearchedBuildings()

  // Function to delete building


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
        <div className="flex gap-5">
          <CityInput />
          <ProjectType />
          <Grade />
          {/* <DeveloperName /> */}
          {/* <Grade />
                    <ProjectType /> */}
        </div>
        <div className="">



          <Button asChild>
            <Link href="/commercial/new"
            >
              <span>+</span>
              <span className="ml-2">Add New</span></Link>
          </Button>

        </div>



      </header>
      <div className="mt-4">
        <Table className="table text-base ">
          <TableHeader>
            <TableRow className="">
              <TableHead>
                <div className=" text-lg">Commercial Zone Name</div>
              </TableHead>
              <TableHead>
                <div className="text-lg">Location</div>
              </TableHead>
              {/* <TableHead>
                <div className="text-lg">Project Status</div>
              </TableHead> */}
              <TableHead>
                <div className="text-lg">Grade</div>
              </TableHead>
              <TableHead>
                <div className="text-lg">Area (Acres)</div>
              </TableHead>
              <TableHead>
                <div className="text-lg">Occupancy</div>
              </TableHead>
              <TableHead>
                <div className="text-lg">Action</div>
              </TableHead>
            </TableRow>
          </TableHeader>
          {
            data &&
            <TableBody>
              {data.map((commercial) => (
                <TableRow key={commercial.id} className="">
                  <TableCell>
                    <Link href={"commercial/" + commercial.id}>{commercial.commercial_zone_name}</Link>
                  </TableCell>
                  <TableCell>{commercial.location}</TableCell>
                  {/* <TableCell>{commercial.location}</TableCell> */}
                  <TableCell>{commercial.grade}</TableCell>
                  <TableCell>{Number(commercial.area).toLocaleString()}</TableCell>
                  <TableCell>
                    {(commercial?.occupancy === null ? "0%" : commercial?.occupancy + "%")}

                  </TableCell>
                  <TableCell>
                    <div className="flex">
                      <div className="flex gap-4">


                        <Button asChild>
                          <Link href={"commercial/edit/" + commercial.id}>
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
                          <Link href={"commercial/price/add/" + commercial.id}>
                            Add Price
                          </Link>
                        </Button>

                        {/* <Button asChild>
                          <Link href={"building/floor/add/" + commercial.id}>
                            Add floor information
                          </Link>
                        </Button> */}



                        {/* <Dialog>
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
                              <form action={deleteCommercial}>
                                <input
                                  type="hidden"
                                  name="commercial-id"
                                  value={commercial.id}
                                />
                                <DeleteCommercialButton />
                              </form>
                            </DialogFooter>
                          </DialogContent>
                        </Dialog> */}
                        <DeleteCommercialDialog commercial_id={commercial.id} />

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
