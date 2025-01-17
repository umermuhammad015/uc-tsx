"use server"

import { prisma } from "@/app/db"
import { Plots } from "@prisma/client";


export default async function AddPlot(plot_object: Plots) {




    try {
        const crt = await prisma.plots.create({
            data: plot_object
        });

        const crt_history = await prisma.plots_history.create({
            data: {
                plot_id: crt.id,
                ...plot_object
            }
        });

        return crt_history.plot_id

    } catch (error) {

        console.error('Error adding plot:', error);
        return ('Error adding plot:');
    }


}

