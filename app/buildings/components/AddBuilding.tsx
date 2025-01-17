"use server"

import { prisma } from "@/app/db"
import { Buildings } from "@prisma/client";

export default async function AddBuilding(building_object: Buildings) {

    try {
        const crt = await prisma.buildings.create({
            data: building_object
        });

        const crt_history = await prisma.buildings_history.create({
            data: {
                building_id: crt.id,
                ...building_object
            }
        });

        return crt_history.building_id

    } catch (error) {

        console.error('Error adding building:', error);
        return ('Error adding building:');
    }
}

