"use client"

import prisma from "../../db";
import { Input } from "@/components/ui/input"

import { Button } from "@/components/ui/button"
import qs from 'query-string'

import { useFormStatus } from 'react-dom'
import { useEffect, useState } from "react"
import { useRouter } from 'next/navigation'
import useDebounce from "@/components/debouce";


function SearchInput() {


  const router = useRouter()

  // const { pending } = useFormStatus()

  const [search, setSearch] = useState('');
  const debouncedSearchKeywords = useDebounce(search, 500)
  const [results, setResults] = useState({});
  

  useEffect(() => {

    console.log(search)
    console.log(debouncedSearchKeywords)

    const query = {
      search: debouncedSearchKeywords,

    }
    const url = qs.stringifyUrl({
      url: window.location.href,
      query
    }, { skipNull: true, skipEmptyString: true })

    router.push(url)

  }, [debouncedSearchKeywords])

  function handleSearch() {
  
    router.push("commercial?search=" + search)

  }




  return (
    // <button className="btn  text-white hover:bg-cyan-800 bg-cyan-800 hover:text-white capitalize disabled:text-black" disabled={pending}>{pending ? 'Adding...' : 'Add'}</button>
    <>
      <div className="flex gap-2">
        <Input type="search"
          placeholder="Search"
          value={search}
          onInput={e => setSearch((e.target as HTMLInputElement).value)}
        />
        {/* <Button onClick={handleSearch} style={{ height: '43px' }}>Search</Button> */}
      </div>

      {/* <div>
        search resukts
      </div> */}



    </>


  )
}

export default SearchInput