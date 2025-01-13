"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import prisma from "@/app/db";



export default async function deletePlots(plot_id: any) {
    // export default async function deleteSociety(data: FormData) {

    // console.log("Deleteing inside deleteSociety")
    // const society_id = data.get("societies-id")?.valueOf();
    // console.log(society_id);

    await prisma.plots.delete({
        where: {
            id: plot_id
            // id: Number(society_id) as number
        },
    });

    revalidatePath("/");
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