
import AddFloorForm from '@/app/buildings/components/AddFloorForm'
import React from 'react'


// type Props = {
//   params: { id: number, name: string }
//   // searchParams: { [key: string]: string | string[] | undefined }
// }



export default async function page( {params}: {params: Promise<{ id: string }>} ) {

  const { id } = await params;

  return (
    <>
     
        <AddFloorForm building_id={Number(id)} />
      
    </>
  )
}
