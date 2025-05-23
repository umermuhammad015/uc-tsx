"use server";

import { revalidatePath } from "next/cache";
// import { redirect } from "next/navigation";
import { prisma } from "@/app/db"



export default async function deleteCommercial(commercial_id:number) {
    // export default async function deleteSociety(data: FormData) {

    // console.log("Deleteing inside deleteSociety")
    // const society_id = data.get("societies-id")?.valueOf();
    // console.log(society_id);

    await prisma.commercial.delete({
        where: {
            id: commercial_id
            // id: Number(society_id) as number
        },
    });

    revalidatePath("/commercial");
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