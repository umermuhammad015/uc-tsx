"use server"

import prisma from "@/app/db"


export default async function AddPrice(price_object: any) {




    try {
        const crt = await prisma.price.create({
            data: price_object,
        });


        return ("created successfully")


    } catch (error) {

        console.error('Error adding price:', error);
        return ('Error adding price:');


    }


}

