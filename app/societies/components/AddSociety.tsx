"use server"

import { prisma } from "@/app/db"
import { Societies } from "@prisma/client";


export default async function AddSociety(society_object: Societies) {




    try {
        const crt = await prisma.societies.create({
            data: society_object
        });

        const crt_history = await prisma.societies_history.create({
            data: {
                society_id: crt.id,
                ...society_object
            }
        });

        return crt_history.society_id

    } catch (error) {

        console.error('Error adding society:', error);
        return ('Error adding society:');
    }


}

