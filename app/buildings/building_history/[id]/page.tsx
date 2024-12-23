import prisma from "../../../db";
import Link from "next/link";
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import DeleteFloorButton from "../../components/DeleteFloorButton";
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
import DeleteFloorDialog from "../../components/DeleteFloorDialog";

type Props = {
    params: { id: number }
    // searchParams: { [key: string]: string | string[] | undefined }
}

export default async function ViewBuilding_history({ params }: Props) {
    // console.log(params);

    // Get building information
    const building = await prisma.buildings_history.findUnique({
        where: {
            id: Number(params.id) as number
        },
    });



    // async function deleteFloor(data: FormData) {
    //     "use server";

    //     const floor_id = data.get("floor-id")?.valueOf();
    //     // console.log(floor_id);

    //     await prisma.floors.delete({
    //         where: {
    //             id: Number(floor_id) as number
    //         },
    //     });

    //     revalidatePath("/");
    //     redirect("/buildings" + params.id);
    // }

    // console.log(floors);

    return (
        <>





            <div className="border text-center border-gray-400 overflow-auto" >
                <Table className="">
                    <TableBody className="">
                        {building.map(({building}:any) => (
                            <TableRow key={building?.id} className="border-b border-gray-400 text-center">
                                <TableCell >
                                    <div className=" text-left w-28">{building?.builder_name}</div>
                                </TableCell >


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
