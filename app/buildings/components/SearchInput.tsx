"use client"
import { Input } from "@/components/ui/input"

import qs from 'query-string'

import { useState, FormEvent } from "react"
// import { useRouter } from 'next/navigation'
import { useRouter } from 'next/navigation'
// import useDebounce from "@/components/debouce";


function SearchInput() {

  // const searchParams = useSearchParams();
  // const params = new URLSearchParams(searchParams.toString());

  const router = useRouter()

  // const { pending } = useFormStatus()

  const [search, setSearch] = useState('');
  // const debouncedSearchKeywords = useDebounce(search, 500)
  // const [results, setResults] = useState({});


  // useEffect(() => {

  //   // console.log(search)
  //   // console.log(debouncedSearchKeywords)

  //   const query = {
  //     search: debouncedSearchKeywords,

  //   }
  //   const url = qs.stringifyUrl({
  //     url: window.location.href,
  //     query
  //   }, { skipNull: true, skipEmptyString: true })

  //   router.push(url)

  // }, [debouncedSearchKeywords])
  // e => setSearch((e.target as HTMLInputElement).value
  function handleInput(e: FormEvent<HTMLInputElement>): void {

    const value = (e.target as HTMLInputElement).value;
    // const value = e.value
    // const value = e.currentTarget.value
    // router.push("buildings?search=" + search)
    // console.log(value)
    setSearch(value)

    const query = {
      search: value,

    }
    const url = qs.stringifyUrl({
      url: window.location.href,
      query
    }, { skipNull: true, skipEmptyString: true })

    router.push(url)
  }




  return (
    // <button className="btn  text-white hover:bg-cyan-800 bg-cyan-800 hover:text-white capitalize disabled:text-black" disabled={pending}>{pending ? 'Adding...' : 'Add'}</button>
    <>
      <div className="flex gap-2">
        <Input type="search"
          placeholder="Searchs"
          value={search}
          // onChange={handleInput}
          // onInput={e => setSearch((e.target as HTMLInputElement).value)}
          // onChangeCapture={handleInput}
          onInput={handleInput}
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