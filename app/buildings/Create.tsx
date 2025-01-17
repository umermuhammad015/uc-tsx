
// import prisma from "../db";
// import { redirect } from "next/navigation";
// import { revalidatePath } from "next/cache";

// async function createBuilding(data: FormData) {
//   "use server";

//   const name = data.get("building-name")?.valueOf();
//   const city = data.get("building-city")?.valueOf();

//   // console.log(name);
//   // console.log(city);

//   if (typeof name !== "string" || name.length === 0 || typeof city !== "string" || city.length === 0) {
//     throw new Error("Invalid name");
//   }

//   // if(typeof city !== "string" || city.length === 0){
//   //     throw new Error ("Invalid city")
//   // }

//   await prisma.buildings.create({
//     data: {
//       name: name,
//       city: city,
//     },
//   });

//   // console.log("Hi")

//   revalidatePath("/");
//   redirect("/buildings");
// }

// export default function Create() {
//   return (
//     <>
//       {/* <h1>NewWWWW</h1>
//       <form action={createBuilding}> */}
//         {/* Building Name  */}
//         {/* <div className="mt-4">
//           <label
//             htmlFor="building-name"
//             className="block mb-2 text-sm font-medium"
//           >
//             Building name:
//           </label>
//           <input
//             type="text"
//             id="building-name"
//             name="building-name"
//             className="border text-sm text-black rounded-lg block w-full p-2.5"
//             placeholder="Building Name"
//           />
//         </div> */}

//         {/* City */}
//         {/* <div className="mt-4">
//           <label
//             htmlFor="building-city"
//             className="block mb-2 text-sm font-medium"
//           >
//             City
//           </label>
//           <select
//             id="building-city"
//             name="building-city"
//             className="border border-gray-300 text-black text-sm rounded-lg block w-full p-2.5"
//           >
//             <option>Bahawalpur</option>
//             <option>Faisalabad</option>
//             <option>Gujranwala</option>
//             <option>Hyderabad</option>
//             <option>Islamabad</option>
//             <option>Karachi</option>
//             <option>Lahore</option>
//             <option>Multan</option>
//             <option>Peshawar</option>
//             <option>Quetta</option>
//             <option>Rawalpindi</option>
//           </select>
//         </div>



//         <div className="flex gap-1 justify-end mt-3">
//           <Link
//             href="/"
//             className="border border-gray-300 text-sm rounded-lg block p-2.5"
//           >
//             Cancel
//           </Link>
//           <button
//             type="submit"
//             className="border border-gray-300 text-sm rounded-lg block p-2.5"
//           >
//             Create
//           </button>
//         </div>
//       </form> */}
//     </>
//   );
// }
