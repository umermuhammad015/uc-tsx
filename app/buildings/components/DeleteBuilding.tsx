"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/app/db"



export default async function deleteBuilding(Building_id: number) {
    // export default async function deleteSociety(data: FormData) {

    // console.log("Deleteing inside deleteSociety")
    // const society_id = data.get("societies-id")?.valueOf();
    // console.log(society_id);

    await prisma.buildings.delete({
        where: {
            id: Building_id
            // id: Number(society_id) as number
        },
    });

    revalidatePath("/buildings");
    return ("deleted successfully")

       
    // redirect("/societies");
}

// export default async function deleteSociety(data: FormData) {

//     console.log("Deleteing inside deleteSociety")
//     const societies_id = data.get("societies-id")?.valueOf();
//     console.log(societies_id);

//     await prisma.societies.delete({
//         where: {
//             id: Number(societies_id) as number
//         },
//     });

//     revalidatePath("/");
//     redirect("/societies");
// }