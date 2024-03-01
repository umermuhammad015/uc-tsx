

import Link from "next/link";
import prisma from "../db";
import { redirect } from "next/navigation";
import DeleteBuildingButton from "./components/DeleteBuildingButton";
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import ThemeToggleButton from "@/components/ThemeToggleButton";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export const revalidate = 0 // revalidate the date at most every hour

function getBuildings() {
  return prisma.buildings.findMany();
}

export default async function List() {
  const buildings = await getBuildings();

  // Function to delete building
  async function deleteBuilding(data: FormData) {
    "use server";

    const building_id = data.get("building-id")?.valueOf();
    console.log(building_id);

    await prisma.buildings.delete({
      where: {
        id: building_id as string,
      },
    });

    redirect("/buildings");
  }

  // await prisma.buildings.create({
  //   data:{
  //     name: "Hafeez Center",
  //     city: "Lahore"
  //   }})

  return (
    <>
      <header className="flex justify-between items-center ">
        <h1 className="text-2xl"></h1>
        <div >

          {/* <Link
            className="flex justify-center items-center"
            href="/buildings/new"
          ><div className="text-xl bg-slate-500 mr-2 px-1">+</div>
            Add New Buildings
          </Link> */}

          <Button asChild >
            <Link href="/buildings/new"

            >
              <div>+</div>
              Add New Buildings</Link>
          </Button>




        </div>

      </header>
      <div className="mt-4">
        <Table className="table text-base ">
          <TableHeader>
            <TableRow className="">
              <TableHead >
                <div className=" text-lg">Buildings Name</div>
              </TableHead >
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
                <div className="text-lg">Action</div>
              </TableHead>


            </TableRow>
          </TableHeader>
          <TableBody>
            {buildings.map((building) => (
              <TableRow key={building.id} className="">
                <TableCell ><Link href={"buildings/" + building.id}>{building.name}</Link></TableCell >
                <TableCell >{building.status}</TableCell >
                <TableCell  >
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

                </TableCell >
                <TableCell >{building.city}</TableCell >
                <TableCell >{building.area}</TableCell >
                <TableCell >
                  <div className="flex justify-around">
                    <div className="flex gap-4">
                      {/* <div className="flex justify-center items-center border border-slate-400 px-2 rounded hover:bg-cyan-800 outline-none hover:text-white">
                        <Link

                          className="flex"
                          href={"buildings/edit/" + building.id}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                          </svg>

                          Edit
                        </Link>
                      </div> */}

                      <Button asChild>
                        <Link href={"buildings/edit/" + building.id}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                          </svg>
                          Edit
                        </Link>
                      </Button>


                      {/* <Link
                        className="flex justify-center items-center border border-slate-400 px-2 py-1 rounded hover:bg-cyan-800 outline-none hover:text-white "
                        href={"buildings/floor/add/" + building.id}
                      >
                        Add floor information
                      </Link> */}

                      <Button asChild>
                        <Link href={"buildings/floor/add/" + building.id}
                        >
                          Add floor information</Link>
                      </Button>
                    </div>

                    <form action={deleteBuilding}>
                      <input type="hidden" name="building-id" value={building.id} />
                      <DeleteBuildingButton />
                      {/* <button type="submit" className="btn bg-red-700 text-white hover:bg-red-800 capitalize">
                        Delete
                      </button> */}
                    </form>

                  </div>
                </TableCell >
              </TableRow>
            ))}

          </TableBody>

        </Table >
      </div>


      {/* <div className="">
        <table className="table text-base ">
          <thead>
            <tr className="">
              <td>
                <div className=" text-lg">Buildings Name</div>
              </td>
              <td>
                <div className="text-lg">Status</div>
              </td>
              <td>
                <div className="text-lg">Facilities</div>
              </td>
              <td>
                <div className="text-lg">City</div>
              </td>
              <td>
                <div className="text-lg">Area</div>
              </td>
              <td>
                <div className="text-lg">Actions</div>
              </td>


            </tr>
          </thead>
          <tbody>
            {buildings.map((building) => (
              <tr key={building.id} className="">
                <td><Link href={"buildings/" + building.id}>{building.name}</Link></td>
                <td>{building.status}</td>
                <td >
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

                </td>
                <td>{building.city}</td>
                <td>{building.area}</td>
                <td>
                  <div className="flex justify-around gap-2">
                    <div className="flex gap-4">
                      {/* <div className="flex justify-center items-center border border-slate-400 px-2 rounded hover:bg-cyan-800 outline-none hover:text-white">
                        <Link

                          className="flex"
                          href={"buildings/edit/" + building.id}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                          </svg>

                          Edit
                        </Link>
                      </div> */}

      {/* <Button asChild>
                        <Link href={"buildings/edit/" + building.id}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                          </svg>
                          Edit
                        </Link>
                      </Button> */}


      {/* <Link
                        className="flex justify-center items-center border border-slate-400 px-2 py-1 rounded hover:bg-cyan-800 outline-none hover:text-white "
                        href={"buildings/floor/add/" + building.id}
                      >
                        Add floor information
                      </Link> */}

      {/* <Button asChild>
                        <Link href={"buildings/floor/add/" + building.id}
                        >
                          Add floor information</Link>
                      </Button>
                    </div> */}

      {/* <form action={deleteBuilding}>
                      <input type="hidden" name="building-id" value={building.id} />
                      <DeleteBuildingButton /> */}
      {/* <button type="submit" className="btn bg-red-700 text-white hover:bg-red-800 capitalize">
                        Delete
                      </button> */}
      {/* </form>

                  </div>
                </td>
              </tr>
            ))}
            <tr> */}

      {/* </tr>
          </tbody>

        </table >
      </div> */}
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
