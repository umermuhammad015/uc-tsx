import Link from "next/link";
import { BuildingsList } from "./components/BuildingsList";
import prisma from "./db";

export const revalidate = 1; // revalidate the date at most every hour
export const dynamic = "force-dynamic";

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


    </>
  )
}
