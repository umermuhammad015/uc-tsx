"use client";
import { Button } from "@/components/ui/button"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import React, { useState } from 'react'
import ThemeToggleButton from './ThemeToggleButton'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import LogoutButton from './LogoutButton';
// import { getKindeServerSession, LoginLink, RegisterLink } from '@kinde-oss/kinde-auth-nextjs/server';

// export default function Header({ email }: any) {
export default function Header() {

    const pathname = usePathname()

    // const [positions, setPositions] = useState<any>([]);

    // function handlePositions(p: any) {
    //     console.log(p);

    //     console.log(positions.includes(p));

    //     if (positions.includes(p)) {

    //         setPositions((current_p: any) => {
    //             return current_p.filter((item: any) => item !== p)
    //         })

    //         //setPositions(positions.filter(item => item !== p));

    //     } else {
    //         setPositions((current_p: any) => {
    //             return [...current_p, p]
    //         })

    //         // setPositions([...positions, p]);

    //     }

    // const { isAuthenticated } = getKindeServerSession()

    // console.log("isAuthenticated")
    // console.log(isAuthenticated)



    // }

    return (
        <>
            <header className="flex justify-between items-center mb-4 bg-cyan-950 text-white  rounded px-1 h-16 w-full">
                <div className="flex gap-1 mb-2">

                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-home mt-3"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>
                    <h1 className="text-xl hover:text-violet-300 flex justify-center items-center mt-3">
                        <Link href="/buildings">Urban Consultants</Link></h1>
                </div>

                {/* <div>

                    <div className="flex justify-center items-center min-h-screen text-center">
                        <div className="">
                            <div className="">This is my app</div>
                            <div className="mt-5">
                                <RegisterLink className="bg-blue-700 p-3 rounded-lg m-4">Sign up</RegisterLink>
                                <LoginLink className="bg-blue-700 p-3 rounded-lg m-4">Sign in</LoginLink>
                            </div>
                        </div>
                    </div>
                </div> */}

                <div className="pr-4 h-full flex mr-1">
                    {/* {pathname} */}
                    <div 
                    // className="flex hover:bg-cyan-800  justify-center items-center px-4 h-full gap-1"
                    className={`flex justify-center items-center px-4 h-full gap-1 ${
                        pathname.includes("/buildings") ? "bg-cyan-800" : "hover:bg-cyan-800"
                      }`}
                    >

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 cursor-pointer mt-1">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                        </svg>

                        <Link href="/buildings" className=" mt-3">Buildings</Link>
                    </div>

                    <div className="flex gap-4">
                        <div className="flex">
                            <div 
                            // className="hover:bg-cyan-800 flex justify-center items-center px-4 h-full gap-1"
                            className={`flex justify-center items-center px-4 h-full gap-1 ${
                                pathname.includes("/societies") ? "bg-cyan-800" : "hover:bg-cyan-800"
                              }`}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 cursor-pointer mt-1">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819" />
                                </svg>
                                <Link href="/societies" className="mt-3 ">Societies</Link>
                            </div>
                            <div 
                            // className="hover:bg-cyan-800 flex justify-center items-center px-4 h-full gap-1"
                            className={`flex justify-center items-center px-4 h-full gap-1 ${
                                pathname.includes("/commercial") ? "bg-cyan-800" : "hover:bg-cyan-800"
                              }`}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 cursor-pointer mt-1">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z" />
                                </svg>

                                <Link href="/commercial" className="mt-3 ">Commercial Zone </Link>
                            </div>
                            {/* {email} */}
                            <ThemeToggleButton />

                            {/* <div className="flex justify-center items-center px-4 h-full gap-1 hover:bg-red-800"> */}
                                {/* <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button variant="outline">Open</Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent className="w-56">
                                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                        <DropdownMenuItem>
                                            {email}
                                            <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                                        </DropdownMenuItem>

                                        <DropdownMenuItem>
                                            <TooltipProvider>
                                                <Tooltip>
                                                    <TooltipTrigger>
                                                        <LogoutButton />
                                                    </TooltipTrigger>
                                                    <TooltipContent>
                                                        <p>Log Out</p>
                                                    </TooltipContent>
                                                </Tooltip>
                                            </TooltipProvider>
                                            <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu> */}

                                {/* <LogoutButton /> */}

                            {/* </div> */}


                        </div>




                    </div>
                    {/* <div className="flex gap-4">



                    <div onClick={() => handlePositions('Reset')}
                        className={` ${positions.includes('Reset') ? "bg-cyan-800" : "bg-cyan-950"} hover:bg-cyan-800 flex justify-center items-center px-4 h-full gap-1`}
                    //  className="hover:bg-cyan-800 flex justify-center items-center px-4 h-full gap-1"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 cursor-pointer mt-1">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819" />
                        </svg>
                        <Link href="/societies"
                            className="mt-3"

                        >Societies</Link>
                    </div>

                    <ThemeToggleButton />
                </div> */}

                </div>





            </header>
            <>


            </>
        </>
    )
}
