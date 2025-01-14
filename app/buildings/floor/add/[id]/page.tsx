
import AddFloorForm from '@/app/buildings/components/AddFloorForm'
import React from 'react'


// type Props = {
//   params: { id: number, name: string }
//   // searchParams: { [key: string]: string | string[] | undefined }
// }



export default async function page({
  params, 
  // searchParams: { city, page, search, building_status, survey_from_date, survey_to_date }
  // searchParams
}: any) {

  const { id } = await params;

  return (
    <>
     
        <AddFloorForm building_id={id} />
      
    </>
  )
}

page