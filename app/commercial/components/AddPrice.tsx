"use server"

import { prisma } from "@/app/db"
import { Price } from "@prisma/client";


export default async function AddPrice(price_object: Price ) {




    try {
        const crt = await prisma.price.create({
            data: price_object
        });

        const crt_history = await prisma.price_history.create({
            data: {
                price_id: crt.id,
                ...price_object
            }
        });

        return crt_history.price_id

    } catch (error) {

        console.error('Error adding price:', error);
        return ('Error adding price:');
    }


}

