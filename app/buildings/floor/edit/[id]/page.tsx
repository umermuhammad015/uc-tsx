
import UpdateFloorForm from '@/app/buildings/components/UpdateFloorForm';
import FetchFloor from '@/app/buildings/components/FetchFloor';
import React from 'react'



type Props = {
    params: { id: string }
    // searchParams: { [key: string]: string | string[] | undefined }
}

export default async function editFloorForm({ params }: Props) {

    const { id } = await params;


    // const { id } = await params;

    const floors = await FetchFloor(id)


    return (
        <>
            <h2>Update Floor</h2>
            <div className="">
                <UpdateFloorForm floor={floors} />
            </div>
        </>
    )
}



