

// import { RegisterLink, LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import prisma from "./db";
import * as React from "react"

export const revalidate = 1; // revalidate the date at most every hour
export const dynamic = "force-dynamic";

function getBuildings() {
  return prisma.buildings.findMany()
}

export default async function Home() {

  const buildings = await getBuildings()

  // await prisma.buildings.create({
  //   data:{
  //     name: "Hafeez Center",
  //     city: "Lahore"
  //   }}) 

  // const {isAuthenticated} = getKindeServerSession()

  return (
    <>


      <div>

        <div className="flex justify-center items-center min-h-screen text-center">
          <div className="">
            <div className=""></div>




            {/* <Card className="w-[350px] shadow-2xl">
              <CardHeader>
                <CardTitle>Welcome To Urban Consultants</CardTitle>
                <CardDescription>Deploy your new project in one-click.</CardDescription>
              </CardHeader>
              <CardContent>

                <div className="grid w-full items-center gap-4">
                  <div className="mt-5">
                    <RegisterLink className="bg-blue-700 p-3 rounded-lg m-4 text-white">Sign up</RegisterLink>
                    <LoginLink className="bg-blue-700 p-3 rounded-lg m-4 text-white">Sign in</LoginLink>
                  </div>
                </div>

              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">Cancel</Button>
                <Button>Deploy</Button>
              </CardFooter>
            </Card> */}

          </div>
        </div>
      </div>

    </>
  )
}
