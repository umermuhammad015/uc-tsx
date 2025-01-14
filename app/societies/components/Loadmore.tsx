// "use client"

// import { useInView } from "react-intersection-observer";
// import React, { useEffect, useState } from 'react'
// import Image from 'next/image'
// import Link from "next/link";
// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
// import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
// import clsx from "clsx";
// import { Button } from "@/components/ui/button"
// import FetchList from './FetchList';
// import DeleteSocietyDialog from './DeleteSocietyDialog';

// let page = 2;

// export default function LoadMore( {datas}:any ) {

//     // console.log("results")
//     // console.log(results)

//     const { ref, inView } = useInView();
//     const [data, setData] = useState<any>([])

//     useEffect(() => {
//         if (inView) {
//             FetchList(page).then((res: any) => {
//                 setData([...data, ...res]);
//                 page++;
//             });
//         }
//     }, [inView, data]);

//     return (
//         <>

//             <div className="mt-4">
//                 <Table className="table text-base">
//                     <TableHeader>
//                         <TableRow className="">
//                             <TableHead>
//                                 <div className="text-lg">Societies Names</div>
//                             </TableHead>
//                             <TableHead>
//                                 <div className="text-lg">Location</div>
//                             </TableHead>
//                             <TableHead>
//                                 <div className="text-lg">Project Status</div>
//                             </TableHead>

//                             <TableHead>
//                                 <div className="text-lg">Grade</div>
//                             </TableHead>
//                             <TableHead>
//                                 <div className="text-lg">Size (Acres)</div>
//                             </TableHead>
//                             <TableHead>
//                                 <div className="text-lg">Occupancy</div>
//                             </TableHead>
//                             <TableHead className="flex justify-between">
//                                 <div className="text-lg mt-2">Action</div>
//                                 <Button asChild>
//                                     <Link href="/api/tables/plots?format=xlsx"
//                                     >

//                                         <svg xmlns="http://www.w3.org/2000/svg"
//                                             width="18"
//                                             height="18"
//                                             viewBox="0 0 24 24"
//                                             fill="none"
//                                             stroke="currentColor"
//                                             stroke-width="2"
//                                             stroke-linecap="round"
//                                             stroke-linejoin="round"
//                                             className="lucide lucide-download">
//                                             <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
//                                             <polyline points="7 10 12 15 17 10" />
//                                             <line x1="12" x2="12" y1="15" y2="3" />
//                                         </svg>
//                                         <span className="ml-2">Export</span>
//                                     </Link>
//                                 </Button>
//                             </TableHead>



//                         </TableRow>
//                     </TableHeader>
//                     <TableBody>
//                         {data.map((societies: { id: React.Key | null | undefined; name: any; address: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; type: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; grade: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; area: any; occupancy: string | null; }) => (
//                             <TableRow key={societies.id} className="">
//                                 <TableCell><Link href={"societies/" + societies.id}>{societies.name}</Link></TableCell>
//                                 <TableCell>{societies.address}</TableCell>
//                                 <TableCell>{societies.type}</TableCell>

//                                 <TableCell className="text-center">{societies.grade}</TableCell>
//                                 <TableCell className="text-center">{Number(societies.area).toLocaleString()}</TableCell>
//                                 <TableCell className="text-center">
//                                     {/* {(societies?.occupancy !== null || societies?.occupancy !== undefined || societies?.occupancy !== "") ? (societies?.occupancy + '%') : (societies?.occupancy)} */}
//                                     {societies?.occupancy === "" ? (societies?.occupancy !== null) : (societies?.occupancy + '%')}
//                                 </TableCell>
//                                 <TableCell>
//                                     <div className="flex justify-around gap-2">
//                                         <div className="flex gap-4">
//                                             <Button asChild>
//                                                 <Link href={"societies/edit/" + societies.id}
//                                                 >
//                                                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
//                                                         <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
//                                                     </svg>
//                                                     Edit
//                                                 </Link>
//                                             </Button>

//                                             {/* <Link
//                                                 className=" flex justify-center items-center border border-slate-400 px-2 py-1 rounded hover:bg-cyan-800 outline-none hover:text-white "
//                                                 href={"buildings/floor/add/" + societies.id}
//                                             >
//                                                 Add floor information
//                                             </Link> */}
//                                         </div>

//                                         <Button asChild>
//                                             <Link href={"societies/plots/add/" + societies.id}>
//                                                 Add Price
//                                             </Link>
//                                         </Button>

//                                         {/* <Button asChild>
//                                             <Link href={"societies/houses/add/" + societies.id}>
//                                                 Add Houses
//                                             </Link>
//                                         </Button> */}

//                                         {/* <form action={deleteSociety} className="hidden">
//                                             <input type="hidden" name="societies-id" value={societies.id} />
//                                             <DeleteSocietyButton />

//                                         </form> */}

//                                         {/* <AlertDialog>
//                                             <AlertDialogTrigger asChild>
//                                                 <Button variant="destructive">Delete</Button>
//                                             </AlertDialogTrigger>
//                                             <AlertDialogContent>
//                                                 <AlertDialogHeader>
//                                                     <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
//                                                     <AlertDialogDescription>

//                                                     </AlertDialogDescription>
//                                                 </AlertDialogHeader>
//                                                 <AlertDialogFooter>
//                                                     <AlertDialogCancel>Cancel</AlertDialogCancel>

//                                                     <form action={deleteSociety}>
//                                                         <input type="hidden" name="societies-id" value={societies.id} />
//                                                         <DeleteSocietyButton />

//                                                     </form>

//                                                 </AlertDialogFooter>
//                                             </AlertDialogContent>
//                                         </AlertDialog> */}

//                                         {/* <DeletePlotDialog /> */}
//                                         <DeleteSocietyDialog society_id={societies.id} />


//                                     </div>
//                                 </TableCell>
//                             </TableRow>
//                         ))}

//                     </TableBody>

//                 </Table >
//             </div>
//             <section className="">
//                 <div ref={ref} className="flex justify-center">
//                     <Image
//                         // src="/images/teams/{(row?.country)}.concat{(row?.team)}.png"
//                         src={"/images/spinner/spinner2.gif"}
//                         alt="spinner"
//                         width={56}
//                         height={56}
//                         className="bg-none"

//                     />
//                 </div>
//             </section>

//             {/* <section>
//                 {data.map((item, index: number) => (
//                     item.player_dob
//                 ))}
//             </section> */}

//         </>
//     )
// }
