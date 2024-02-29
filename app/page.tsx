import Link from "next/link";
import { BuildingsList } from "./components/BuildingsList";
import prisma from "./db";


function getBuildings(){
  return prisma.buildings.findMany()
} 

export default async function Home() {
  
  const buildings = await getBuildings()

  // await prisma.buildings.create({
  //   data:{
  //     name: "Hafeez Center",
  //     city: "Lahore"
  //   }}) 

  return (
    <>

    <ul>
      {buildings.map(building => (
        <BuildingsList key={building.id} {...building} />
      ))}
    </ul>
    </>
  )
}
