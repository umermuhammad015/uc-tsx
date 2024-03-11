"use client"

import prisma from "../../db";
import { Input } from "@/components/ui/input"

import { Button } from "@/components/ui/button"


import { useFormStatus } from 'react-dom'
import { useEffect, useState } from "react"
import { useRouter } from 'next/navigation'


function SearchInput() {


  const router = useRouter()

  // const { pending } = useFormStatus()

  const [input, setInput] = useState('');
  const [results, setResults] = useState({});


  function handleSearch() {
    // // Get floors information
    // const buildings = prisma?.buildings.findMany({
    //   where: {
    //     name: input,
    //   },
    // });

    router.push("buildings?search=" +input )

  }




  return (
    // <button className="btn  text-white hover:bg-cyan-800 bg-cyan-800 hover:text-white capitalize disabled:text-black" disabled={pending}>{pending ? 'Adding...' : 'Add'}</button>
    <>
      <div className="flex gap-2">
        <Input type="search"
          placeholder="search"
          value={input}
          onInput={e => setInput (e.target.value)}
        />
        <Button onClick={handleSearch} style={{ height:'43px'}}>Search</Button>
      </div>

      {/* <div>
        search resukts
      </div> */}



    </>


  )
}

export default SearchInput