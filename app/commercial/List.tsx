import Link from "next/link";
import { Input } from "@/components/ui/input"
import prisma from "../db";
import { Feed } from "@/components/feed";
import SearchInput from "./components/SearchInput";
// import { PageProps } from '../buildings/page';
import { redirect } from "next/navigation";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import ThemeToggleButton from "@/components/ThemeToggleButton";
// import { useSearchParams } from 'next/navigation'
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



import Pagination from "@/components/pagination";
import DeleteCommercialDialog from "./components/DeleteCommercIalDialog";
import CommercialPagination from "./components/commercialPagination";


export const revalidate = 0;
export const dynamic = "force-dynamic";
const PAGE_SIZE = 5;

const GetCommercial = async ({
  pageNumber = 1,
  search_string = undefined,
  take = PAGE_SIZE,
  skip = 0,
  city = undefined,
  project_type = undefined,
  commercial_grade = undefined,
  survey_from_date = undefined,
  survey_to_date = undefined
}) => {

  // async function getBuildings({ search = '', take = PAGE_SIZE, skip = 0 }) {
  // console.log("GetSocieties");

  // console.log("developer_name GetSocieties")
  // console.log(developer)
  // console.log("Fetching data for Building params")
  // console.log('city=', city, "page=", pageNumber,
  //   "skip=", skip, "take=", take
  // )

  // console.log("city inside if")
  // console.log(project_type)

  const prisma_query: any = {
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
      // city: city === "" ? undefined : city,
      city: city === "All" ? undefined : city,
      "survey_date": {
        "gte": survey_from_date,
        "lte": survey_to_date
      },
      project_status: project_type === "All" ? undefined : project_type,
      grade: commercial_grade === "All" ? undefined : commercial_grade,
      // survey_date: survey_from_date === "" ? undefined : survey_date,

    },
    orderBy: {
      updatedAt: 'desc', // Sort by "updatedAt" in descending order
    }
  }
  const prisma_counts_query: any = {
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
      // city: city === "" ? undefined : city,
      city: city === "All" ? undefined : city,
      "survey_date": {
        "gte": survey_from_date,
        "lte": survey_to_date
      },
      project_status: project_type === "All" ? undefined : project_type,
      grade: commercial_grade === "All" ? undefined : commercial_grade,

    },
    orderBy: {
      commercial_zone_name: 'asc',
    },
  }



  const results = await prisma.commercial.findMany(prisma_query);



  const rows_count = await prisma.commercial.count(prisma_counts_query);



  // revalidatePath('/commercial');

  const return_object = {
    data: results,
    metadata: {
      page: pageNumber,
      survey_to_date,
      hasNextPage: skip + take < rows_count,
      totalPages: Math.ceil(rows_count / take),
      rows_count: rows_count


    },
  };

  // console.log("RO")
  // console.log(return_object)

  return return_object

}

type Props = {
  params: {};
  searchParams: { [key: string]: string | string[] | undefined };
}



// export default async function List(props: PageProps) {
export default async function List({ city, page, search, project_type, commercial_grade, survey_from_date, survey_to_date }: any) {

  // console.log("developer list ")
  // console.log(developer)

  // const pageNumber = Number(props?.searchParams?.page || 1); // Get the page number. Default to 1 if not provided.
  const pageNumber = Number(page || 1); // Get the page number. Default to 1 if not provided.

  const take = PAGE_SIZE;
  const skip = (pageNumber - 1) * take; // Calculate skip based on page number.
  // const search = props?.searchParams?.search || ''
  const search_string = search || ''

  // const buildings = await getBuildings({search, take, skip});
  const { data, metadata } = await GetCommercial({ pageNumber, search_string, take, skip, city, project_type, commercial_grade, survey_from_date, survey_to_date });

  const queryParams = new URLSearchParams();

  if (city) queryParams.append("city", city);
  if (commercial_grade) queryParams.append("commercial_grade", commercial_grade);
  if (project_type) queryParams.append("project_type", project_type);
  if (survey_from_date) queryParams.append("survey_from_date", survey_from_date);
  if (survey_to_date) queryParams.append("survey_to_date", survey_to_date);


  return (
    <>


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
              <TableHead className="flex justify-between">
                <div className="text-lg mt-2">Action</div>

                <Button asChild>
                  {/* <Link href="/api/CommercialTable/commercials?format=xlsx"
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
                  </Link> */}
                  <Link
                    href={
                      "/api/CommercialTable/commercials?format=xlsx" +
                      [
                        search && search !== "undefined" ? `&search=${search}` : "",
                        city && city !== "undefined" ? `&city=${city}` : "",
                        commercial_grade && commercial_grade !== "undefined" ? `&commercial_grade=${commercial_grade}` : "",
                        project_type && project_type !== "undefined" ? `&project_type=${project_type}` : "",
                        survey_from_date && survey_from_date !== "undefined" ? `&survey_from_date=${survey_from_date}` : "",
                        survey_to_date && survey_to_date !== "undefined" ? `&survey_to_date=${survey_to_date}` : "",
                      ]
                        .filter(Boolean) // Remove empty strings
                        .join("") // Join parameters with '&'
                    }
                  >

                    <svg xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-download">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="7 10 12 15 17 10" />
                      <line x1="12" x2="12" y1="15" y2="3" />
                    </svg>
                    <span className="ml-2">Export</span>
                  </Link>
                </Button>
              </TableHead>
            </TableRow>
          </TableHeader>
          {
            data &&
            <TableBody>
              {data.map((commercial) => (
                <TableRow key={commercial.id} className="">
                  <TableCell>
                    {/* <Link href={"commercial/" + commercial.id}>{commercial.commercial_zone_name}</Link> */}
                    <Link href={`commercial/${commercial.id}${queryParams.toString() ? `?${queryParams.toString()}` : ""}`}>{commercial.commercial_zone_name}</Link>
                  </TableCell>
                  <TableCell>{commercial.location}</TableCell>
                  {/* <TableCell>{commercial.location}</TableCell> */}
                  <TableCell>{commercial.grade}</TableCell>
                  <TableCell>{Number(commercial.area).toLocaleString() === "0" ? "-" : Number(commercial.area).toLocaleString()}</TableCell>
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
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="w-6 h-6"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
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
        <CommercialPagination metadata={metadata}
          city={city}
          project_type={project_type}
          commercial_grade={commercial_grade}
          survey_from_date={survey_from_date}
          survey_to_date={survey_to_date} />
      </div>
    </>
  );
}
