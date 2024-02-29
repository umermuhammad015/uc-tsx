"use client";

import React from 'react'
import ThemeToggleButton from './ThemeToggleButton'
import Link from 'next/link'

export default function Header() {
    return (
        <header className="flex justify-between items-center mb-4 bg-cyan-950 text-white  rounded px-1 h-16 w-full">
            <div className="flex gap-1 mb-2">

                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-home mt-3"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>
                <h1 className="text-xl hover:text-violet-300 flex justify-center items-center mt-3"><Link href="/buildings">Urban Consultants</Link></h1>
            </div>
            {/* <Link
      className="border border-slate-300 px-2 py-1 rounded outline-none text-2xl"
      href="/buildings/new"
    >
      Add new
    </Link> */}
            <div className="pr-4 h-full flex mr-1">
                <div className="flex hover:bg-cyan-800  justify-center items-center px-4 h-full gap-1">

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 cursor-pointer mt-1">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                    </svg>


                    <Link href="/buildings" className=" mt-3">Buildings</Link>
                </div>
                <div className="flex gap-4">



                    <div className="hover:bg-cyan-800 flex justify-center items-center px-4 h-full gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 cursor-pointer mt-1">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819" />
                        </svg>
                        <Link href="/societies" className="mt-3 ">Societies</Link>
                    </div>

                    <ThemeToggleButton />
                </div>



            </div>

        </header>
    )
}
