"use server"

import prisma from "@/app/db"


export default async function AddSociety(society_object: any) {

    console.log("creating")
    console.log(society_object)



    try {
        const crt = await prisma.societies.create({
            data: society_object
        });

        console.log("crt id")
        console.log(crt)

        return crt


    } catch (error) {

        console.error('Error adding price:', error);
        return ('Error adding price:');


    }


}

