import Link from "next/link";
import prisma from "../db";
import { redirect } from "next/navigation";
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




function getSocieties() {
    return prisma.societies.findMany();
}

export default async function List() {
    const societies = await getSocieties();

    // Function to delete building
    async function deleteSociety(data: FormData) {
        "use server";

        const societies_id = data.get("societies-id")?.valueOf();
        console.log(societies_id);

        await prisma.societies.delete({
            where: {
                id: societies_id as string,
            },
        });

        redirect("/societies");
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
            <div className="">
                <Table className="table text-base">
                    <TableHeader>
                        <TableRow className="">
                            <TableHead>
                                <div className="text-lg">Societies Name</div>
                            </TableHead>
                            <TableHead>
                                <div className="text-lg">Project Type</div>
                            </TableHead>
                            <TableHead>
                                <div className="text-lg">Features/Utilities</div>
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
                    <TableBody>
                        {societies.map((societies) => (
                            <TableRow key={societies.id} className="">
                                <TableCell><Link href={"societies/" + societies.id}>{societies.name}</Link></TableCell>
                                <TableCell>{societies.type}</TableCell>
                                <TableCell >
                                    <div className="flex flex-col">
                                        <div>
                                            {societies.features_type_parks && (
                                                // <div className="badge bg-cyan-950 text-white p-2 m-2 text-xs">Park</div>
                                                <Badge>Park</Badge>
                                            )}
                                            {societies.features_type_school && (
                                                // <div className="badge bg-cyan-950 text-white p-2 m-2 text-xs">School</div>
                                                <Badge>School</Badge>
                                            )}
                                            {societies.features_type_university && (
                                                // <div className="badge bg-cyan-950 text-white p-2 m-2 text-xs">University</div>
                                                <Badge>University</Badge>
                                            )}
                                            {societies.features_type_hospital && (
                                                // <div className="badge bg-cyan-950 text-white p-2 m-2 text-xs">Hospital</div>
                                                <Badge>Hospital</Badge>
                                            )}
                                            {societies.features_type_commercial_market && (
                                                // <div className="badge bg-cyan-950 text-white p-2 m-2 text-xs">Commercial Market</div>
                                                <Badge>Commercial Market</Badge>
                                            )}
                                            {societies.features_type_zoo && (
                                                // <div className="badge bg-cyan-950 text-white p-2 m-2 text-xs">zoo</div>
                                                <Badge>zoo</Badge>
                                            )}
                                            {societies.features_type_food_arena && (
                                                // <div className="badge bg-cyan-950 text-white p-2 m-2 text-xs">Food Arena</div>
                                                <Badge>Food Arena</Badge>
                                            )}
                                            {societies.features_type_gated_community && (
                                                // <div className="badge bg-cyan-950 text-white p-2 m-2 text-xs">Gated_Community</div>
                                                <Badge>Gated Community</Badge>
                                            )}
                                        </div>
                                        <div>
                                            {societies.utilities_type_underground_electrification && (
                                                // <div className="badge bg-emerald-700 text-white p-2 m-2 text-xs">Underground Electrification</div>
                                                <Badge>Underground Electrification</Badge>
                                            )}
                                            {societies.utilities_type_gas && (
                                                // <div className="badge bg-emerald-700 text-white p-2 m-2 text-xs">Gas</div>
                                                <Badge>Gas</Badge>
                                            )}
                                            {societies.utilities_type_water && (
                                                // <div className="badge bg-emerald-700 text-white p-2 m-2 text-xs">Water</div>
                                                <Badge>Water</Badge>
                                            )}
                                            {societies.utilities_type_security && (
                                                // <div className="badge bg-emerald-700 text-white p-2 m-2 text-xs w-32">Security</div>
                                                <Badge>Security</Badge>
                                            )}
                                        </div>
                                    </div>

                                </TableCell>
                                <TableCell>{societies.city}</TableCell>
                                <TableCell>{societies.area}</TableCell>
                                <TableCell>
                                    <div className="flex justify-around gap-2">
                                        <div className="flex gap-4">
                                            {/* <div className="flex justify-center items-center border border-slate-400 px-2 rounded hover:bg-cyan-800 outline-none hover:text-white">
                                                <Link

                                                    className="flex"
                                                    href={"societies/edit/" + societies.id}
                                                >
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                                    </svg>

                                                    Edit
                                                </Link>
                                            </div> */}

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
