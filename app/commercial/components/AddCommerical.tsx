"use server"

import { prisma } from "@/app/db"
import { Commercial } from "@prisma/client";

export default async function AddCommercial(commerical_object: Commercial) {

    try {
        const crt = await prisma.commercial.create({
            data: commerical_object
        });

        const crt_history = await prisma.commercial_history.create({
            data: {
                commercial_id: crt.id,
                ...commerical_object
            }
        });

        return crt_history.commercial_id

    } catch (error) {

        console.error('Error adding commercial:', error);
        return ('Error adding commercial:');
    }
}

