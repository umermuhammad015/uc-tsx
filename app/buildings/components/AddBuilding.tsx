"use server"

import prisma from "@/app/db"


export default async function AddBuilding(building_object: any) {


    try {
        const crt = await prisma.buildings.create({
            data: building_object
        });

        // console.log("crt id")
        // console.log(crt)

        return crt


    } catch (error) {

        console.error('Error adding price:', error);
        return ('Error adding price:');


    }


}

