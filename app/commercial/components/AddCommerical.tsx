"use server"

import prisma from "@/app/db"


export default async function AddCommercial(commercial_object: any) {

    console.log("creating")
    console.log(commercial_object)



    try {
        const crt = await prisma.commercial.create({
            data: commercial_object
        });

        console.log("crt id")
        console.log(crt)

        return crt


    } catch (error) {

        console.error('Error commercial_object:', error);
        return ('Error commercial_object:');


    }


}

