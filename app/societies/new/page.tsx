"use client";

import { FormEvent, useEffect, useState } from "react";
import AddButton from "../components/AddButton";
import Link from "next/link";
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import createSociety from "../../actions/createSociety"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"
import useDebounce from "@/components/debouce";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import clsx from "clsx";
import FetchSocietyNames from "../components/FetchSocietyNames";
import FetchSocietyName from "../components/fetchSocityName";
import { z } from "zod";
import AddSociety from "../components/AddSociety";

// type Society = {
//   // Define the properties of your society object
//   // For example:

//   name: string | null;
// };

// type Name = {
//   name: string;
// };

const stringSchema = z.string().min(1, "Address is required").max(255, "Address cannot exceed 255 characters");
const numberSchema = z.number().nonnegative("Value must be a positive number").nullable();
const yearSchema = z
  .number()
  .int()
  .min(1950, "Year must be no earlier than 1950")
  .max(2025, "Year must be no later than 2024");

export default function NewSocietyPage() {

  // const [nameKeywords, setNameKeywords] = useState('')
  // const debouncedNameKeywords = useDebounce(nameKeywords, 500)

  // const [names, setNames] = useState<Society[]>([])

  const [isAdding, setIsAdding] = useState(false);
  const [area, setArea] = useState<any>("");
  const [occupancy, setOccupancy] = useState<any>("");
  const [population, setPoputation] = useState<any>("");
  const [blocks, setBlocks] = useState<any>("");
  const [phase, setPhase] = useState<any>("");
  const [launch_year, setLaunch_year] = useState<any>("");
  const [total_plots_residential, setTotal_plots_residential] = useState<any>("");
  const [total_plots_commercial, setTotal_plots_commercial] = useState<any>("");
  const [total_apartments, setTotal_apartments] = useState<any>("");
  const [contact_no, setContact_no] = useState<any>("");

  const [societyNames, setSocietyNames] = useState<any>([])

  const [societyKeywords, setSocietyKeywords] = useState<any>("")
  const [isSearching, setSearching] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {

    setIsAdding(true);

    // console.log("isAdding")
    // console.log(isAdding)

    e.preventDefault();

    if (!isAdding) {

      const formData = new FormData(e.currentTarget)

      // console.log("buildingggg name")
      // console.log(formData.get("building-name")); // foo

      console.log("1");
      // console.log("isAdding");
      // console.log(isAdding);

      const allFields = [
        // { name: "building-floor-no", value: floor_num, schema: stringSchema },
        { name: "societies-blocks", value: blocks, schema: numberSchema },
        { name: "societies-area", value: area, schema: numberSchema },
        { name: "societies-occupancy", value: occupancy, schema: numberSchema },
        { name: "societies-population", value: population, schema: numberSchema },
        { name: "societies-phase", value: phase, schema: numberSchema },
        { name: "societies-launch-year", value: launch_year, schema: yearSchema },
        { name: "total-plots-residential", value: total_plots_residential, schema: numberSchema },
        { name: "total-plots-commercial", value: total_plots_commercial, schema: numberSchema },
        { name: "societies-total-apartments", value: total_apartments, schema: numberSchema },
        { name: "contact-no", value: contact_no, schema: numberSchema },
        // { name: "retail-floors-shops-count", value: shop_num, schema: numberSchema },

      ];

      console.log("2");


      const newErrors = {};
      let isValid = true;
      for (const field of allFields) {
        const result = field.schema.safeParse(field.value === "" ? null : Number(field.value));
        console.log(result)
        // const result = field.schema.safeParse(field.value);
        if (!result.success) {
          isValid = false;
          // newErrors[field.name] = result.error.errors[0].message;
        }
      }

      console.log("3");


      if (!isValid) {
        // setErrors(newErrors);
        console.log("Not valid inputs")
        setIsAdding(false)
        // setIsSaving(false)
        return false;
      }

      console.log("Validation passed");



      try {

        const society_object = {
          survey_date: formData.get("societies-survey-date"),
          city: formData.get("societies-city"),
          type: formData.get("societies-project-type"),
          name: societyKeywords,
          zone: formData.get("societies-zone"),
          address: formData.get("societies-address"),
          blocks: isNaN(Number(blocks)) ? null : Number(blocks),
          phase: isNaN(Number(phase)) ? null : Number(phase),
          grade: formData.get("societies-grade"),
          occupancy: isNaN(Number(occupancy)) ? null : Number(occupancy),
          area: isNaN(Number(area)) ? null : Number(area),
          population: isNaN(Number(population)) ? null : Number(population),
          launch_year: isNaN(Number(launch_year)) ? null : Number(launch_year),
          total_plots_residential: isNaN(Number(total_plots_residential)) ? null : Number(total_plots_residential),
          plot_sizes_residential_87_5: formData.get("plot-sizes-residential-87-5"),
          plot_sizes_residential_125: formData.get("plot-sizes-residential-125"),
          plot_sizes_residential_200: formData.get("plot-sizes-residential-200"),
          plot_sizes_residential_250: formData.get("plot-sizes-residential-250"),
          plot_sizes_residential_300: formData.get("plot-sizes-residential-300"),
          plot_sizes_residential_400: formData.get("plot-sizes-residential-400"),
          plot_sizes_residential_500: formData.get("plot-sizes-residential-500"),
          plot_sizes_residential_600: formData.get("plot-sizes-residential-600"),
          plot_sizes_residential_800: formData.get("plot-sizes-residential-800"),
          plot_sizes_residential_1000: formData.get("plot-sizes-residential-1000"),
          plot_sizes_residential_2000: formData.get("plot-sizes-residential-2000"),
          total_plots_commercial: isNaN(Number(total_plots_commercial)) ? null : Number(total_plots_commercial),
          plot_sizes_commercial_87_5: formData.get("plot-sizes-commercial-87-5"),
          plot_sizes_commercial_100: formData.get("plot-sizes-commercial-100"),
          plot_sizes_commercial_125: formData.get("plot-sizes-commercial-125"),
          plot_sizes_commercial_200: formData.get("plot-sizes-commercial-200"),
          plot_sizes_commercial_250: formData.get("plot-sizes-commercial-250"),
          plot_sizes_commercial_500: formData.get("plot-sizes-commercial-500"),
          plot_sizes_commercial_1000: formData.get("plot-sizes-commercial-1000"),
          plot_sizes_commercial_2000: formData.get("plot-sizes-commercial-2000"),
          total_apartments: isNaN(Number(total_apartments)) ? null : Number(total_apartments),
          apartment_studio: formData.get("apartment-studio"),
          apartment_one_bad: formData.get("apartment-one-bad"),
          apartment_two_bad: formData.get("apartment-two-bad"),
          apartment_three_bad: formData.get("apartment-three-bad"),
          apartment_four_bad: formData.get("apartment-four-bad"),
          apartment_five_bad: formData.get("apartment-five-bad"),
          apartment_penthouse: formData.get("apartment-penthouse"),
          apartment_duplex: formData.get("apartment-duplex"),
          features_type_parks: formData.get("features-type-parks"),
          features_type_school: formData.get("features-type-school"),
          features_type_university: formData.get("features-type-university"),
          features_type_hospital: formData.get("features-type-hospital"),
          features_type_commercial_market: formData.get("features-type-commercial-market"),
          features_type_zoo: formData.get("features-type-zoo"),
          features_type_college: formData.get("features-type-college"),
          features_type_graveyard: formData.get("features-type-graveyard"),
          features_type_masjid: formData.get("features-type-masjid"),
          features_type_community_club: formData.get("features-type-community-club"),
          features_type_grid_station: formData.get("features-type-grid-station"),
          features_type_food_arena: formData.get("features-type-food-arena"),
          features_type_gated_community: formData.get("features-type-gated-community"),
          utilities_type_underground_electrification: formData.get("utilities-type-underground-electrification"),
          utilities_type_gas: formData.get("utilities-type-gas"),
          utilities_type_water: formData.get("utilities-type-water"),
          utilities_type_utilities_electricity: formData.get("utilities-type-utilities-electricity"),
          utilities_type_drainage: formData.get("utilities-type-drainage"),
          developer_name: formData.get("developer-name"),
          contact_no: isNaN(Number(contact_no)) ? null : Number(contact_no),
          survery_remarks: formData.get("societies-survery-remarks"),
        }
        console.log("society_object")
        console.log(society_object)

        const add_society_output = await AddSociety(society_object)

        // const add_building_output = await prisma.buildings.create({
        //   data: building_object
        // });


        console.log("add_society_output")
        console.log(add_society_output)

        // console.log("isAdding 2");
        // console.log(isAdding);
        // if (isAdding) {
        //     console.log("redictecting")
        //     // redirect("/buildings/" + building_id);
        // router.push("/buildings/" + add_building_output); // Replace with your desired route
        // }

      } catch (error) {

        console.error('Error submitting society:', error);

      }
      finally {
        setIsAdding(false)
        // setIsSaving(false)
        console.log("finally")


        // return true;

      }



    }



  };

  useEffect(() => {

    // console.log(buildingKeywords)
    // console.log(buildingNames)

    if (societyKeywords.length >= 3) {
      const fetchData = async () => {
        try {
          setSearching(true)

          // console.log("CityInput use effect trying")
          const all_societies = await FetchSocietyName(societyKeywords)

          // console.log("all_buildings");
          // console.log(all_buildings);

          setTimeout(() => {
            console.log("Hello, World!");

          }, 3000);
          setSearching(false)
          setSocietyNames(all_societies);



        } catch (error) {

          console.error('Error fetching cities list:', error);
        }
      };
      fetchData();

    }



  }, [societyKeywords]);


  return (
    <>
      {/* <button onClick={() => { console.log(paymentTerms) }}>Check Vaue</button> */}

      <div className="text-lg">Societies</div>
      <form
      
        onSubmit={handleSubmit}
      >
        <div className="p-5 border-2 border-gray-200 dark:border-gray-700 flex flex-col">

          {/* Survey Date */}

          <div className="relative max-w-sm">
            <label
              htmlFor="surveyor-name"
              className="block mb-2 text-sm font-medium "
            >
              Survey Date: (Month/Day/year)

            </label>
            <div className="absolute inset-y-0 right-0 flex items-center pr-20 pointer-events-none">
              <svg
                className="w-4 h-4  dark:text-gray-400 mt-6"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
              </svg>
            </div>

            <Input
              type="date"
              id="societies-survey-date"
              name="societies-survey-date"
              // defaultValue="2024-12-13"
              defaultValue={(new Date).toISOString().split('T')[0]}
              // value="12/26/2024"
              className="max-w-xs border-gray-400  border-2 text-sm rounded focus:ring-blue-500  block w-full p-2.5"
              placeholder="Survey date"
            />
          </div>

          {/* City */}
          <div className="mt-4">
            <label
              htmlFor="societies-city"
              className="block mb-2 text-sm font-medium"
            >
              City<span className="text-red-700">*</span>
            </label>
            <Select
              name="societies-city">
              <SelectTrigger
                id="societies-city"
                className="select  w-full max-w-xs border-2 border-gray-400">
                <SelectValue placeholder="Select city" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel className="text-lg">Punjab</SelectLabel>
                  <SelectItem value="Bahawalpur">Bahawalpur</SelectItem>
                  <SelectItem value="Faisalabad">Faisalabad</SelectItem>
                  <SelectItem value="Gujranwala">Gujranwala</SelectItem>
                  <SelectItem value="Islamabad">Islamabad</SelectItem>
                  <SelectItem value="Lahore">Lahore</SelectItem>
                  <SelectItem value="Multan">Multan</SelectItem>
                  <SelectItem value="Rawalpindi">Rawalpindi</SelectItem>
                </SelectGroup>
                <SelectGroup>
                  <SelectLabel className="text-lg">Sindh</SelectLabel>
                  <SelectItem value="Hyderabad">Hyderabad</SelectItem>
                  <SelectItem value="Karachi">Karachi</SelectItem>
                </SelectGroup>
                <SelectGroup>
                  <SelectLabel className="text-lg">KPK</SelectLabel>
                  <SelectItem value="Peshawar">Peshawar</SelectItem>
                </SelectGroup>
                <SelectGroup>
                  <SelectLabel className="text-lg">Balochistan</SelectLabel>
                  <SelectItem value="Quetta">Quetta</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          {/* Zone/ Region  */}
          <div className="mt-4">
            <label
              htmlFor="societies-zone"
              className="block mb-2 text-sm font-medium"
            >
              Zone / Region:<span className="text-red-700">*</span>
            </label>
            <select
              id="societies-zone"
              required
              name="societies-zone"
              className="select  w-full text-sm pl-2 h-10 max-w-xs border-2 rounded border-gray-400 bg-background"

            >
              <option value="">Select</option>
              <option value="East">East</option>
              <option value="West">West</option>
              <option value="North">North</option>
              <option value="South">South</option>
              <option value="Central">Central</option>
            </select>
            {/* <Select
              name="societies-zone">
              <SelectTrigger
                id="societies-zone"
                className="select  w-full max-w-xs border-2 border-gray-400">
                <SelectValue placeholder="Select Zone" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel></SelectLabel>
                  <SelectItem value="East">East</SelectItem>
                  <SelectItem value="West">West</SelectItem>
                  <SelectItem value="North">North</SelectItem>
                  <SelectItem value="South">South</SelectItem>
                  <SelectItem value="Central">Central</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select> */}
          </div>

          {/* Soceity/Project Name  */}
          {/* <div className="mt-4">
            <label
              htmlFor="soceity-project-name"
              className="block mb-2 text-sm font-medium "
            >
              Soceity / Project Name:
            </label>
            <Input
              id="soceity-project-name"
              name="soceity-project-name"
              className="input input-bordered w-full max-w-xs border-2 border-gray-400 "
              required
            />

          </div> */}


          <div className="mt-4">
            <div className="">
              <label
                htmlFor="soceity-project-name"
                className="block mb-2 text-sm font-medium"
              >
                Soceity / Project Name:<span className="text-red-700">*</span>
              </label>
              {/* <Input
                type="text"
                id="building-name"
                name="building-name"
                required
                className="input input-bordered w-full max-w-xs border-2 border-gray-400 "
                placeholder="Building Name"
              /> */}
            </div>


            <div className="w-full max-w-xs">
              <Command className="rounded-lg border shadow-md ">
                <CommandInput
                  // type="text"
                  id="soceity-project-name"
                  name="soceity-project-name"
                  required
                  className="input input-bordered w-full max-w-xs border-2 border-gray-400 "
                  placeholder="Type a Society name..."
                  onValueChange={(value) => setSocietyKeywords(value)} // Update searchKeyword on input change
                />

                {(societyKeywords.length >= 3 && !isSearching) ? (

                  <CommandList className="">
                    <CommandGroup>
                      {societyNames.map((society: any) => (
                        <CommandItem
                          key={society.name}
                        // onSelect={() => {
                        //   setBuildingKeywords(building.name); // Update input with selected building
                        //   setIsOpen(false); // Close the list after selection
                        // }}
                        >
                          {society.name}
                        </CommandItem>
                      ))}
                    </CommandGroup>


                  </CommandList>
                ) : <CommandList>{(isSearching) && <span>Loading</span>}</CommandList>}

              </Command>
            </div>
          </div>

          {/* Total Phase/ Sectors/ Blocks*/}
          <div className="mt-4">
            <label
              htmlFor="societies-phase"
              className="block mb-2 text-sm font-medium"
            >
              Total phase / sectors :
            </label>
            <div className="flex">
              <Input
                type="text"
                id="societies-phase"
                name="societies-phase"
                className="input input-bordered w-full max-w-xs border-2 border-gray-400  "
                placeholder=""
                value={phase}
                onChange={(e) => setPhase(e.target.value)}
              />
              <div className="m-3">
                {isNaN(Number(phase)) ? <span className="text-red-500 text-sm mt-1">Enter number only</span> : Number(phase)}
              </div>
            </div>
          </div>

          {/* Total Phase/ Sectors/ Blocks*/}
          <div className="">
            <label
              htmlFor="societies-blocks"
              className="block mb-2 text-sm font-medium"
            >
              Total Blocks:
            </label>
            <div className="flex">
              <Input
                type="text"
                id="societies-blocks"
                name="societies-blocks"
                className="input input-bordered w-full max-w-xs border-2 border-gray-400  "
                placeholder=""
                value={blocks}
                onChange={(e) => setBlocks(e.target.value)}
              />
              <div className="m-3">
                {isNaN(Number(blocks)) ? <span className="text-red-500 text-sm mt-1">Enter number only</span> : Number(blocks)}
              </div>
            </div>
          </div>
          {/* <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-[280px] justify-start text-left font-normal",
                  !date && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
              />
            </PopoverContent>
          </Popover> */}


          {/* Location/Address  */}
          <div className="">
            <label htmlFor="societies-address" className="block mb-2 text-sm font-medium">
              Location/Address:<span className="text-red-700">*</span>
            </label>
            <Input
              type="text"
              id="societies-address"
              name="societies-address"
              className="input input-bordered w-full max-w-xs border-2 border-gray-400 "
              required
              placeholder="address"
            />
          </div>

          {/* Project Type */}
          <div className="mt-4">
            <label
              htmlFor="societies-project-type"
              className="block mb-2 text-sm font-medium"
            >
              Project Status
            </label>
            <select
              id="societies-project-type"
              name="societies-project-type"
              className="select  w-full text-sm pl-2 h-10 max-w-xs border-2 rounded border-gray-400 bg-background"

            >
              <option value="">Select</option>
              <option value="Developed">Developed</option>
              <option value="Under Developed">Under Developed</option>
              <option value="New Launch">New Launch</option>
              <option value="Commercial Zone">Commercial Zone</option>
              <option value="Residential Files">Residential Files</option>
              <option value="Commercial Files">Commercial Files</option>
            </select>
            {/* <Select
              name="societies-project-type">
              <SelectTrigger
                id="societies-project-type"
                className="select  w-full max-w-xs border-2 border-gray-400 ">
                <SelectValue placeholder="Select Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel></SelectLabel>
                  <SelectItem value="Developed">Developed</SelectItem>
                  <SelectItem value="Under Developed">Under Developed</SelectItem>
                  <SelectItem value="New Launch">New Launch</SelectItem>
                  <SelectItem value="Commercial Zone">Commercial Zone</SelectItem>
                  <SelectItem value="Residential Files">Residential Files</SelectItem>
                  <SelectItem value="Commercial Files">Commercial Files</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select> */}

            {/* <form className="max-w-sm mx-auto">
              <label
                htmlFor="societies-project-type"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Project Type
              </label>
              <select
                name="societies-project-type"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">

                <option value="Developed">Developed</option>
                <option value="Under Developed">Under Developed</option>
                <option value="New Launch">New Launch</option>
                <option value="Files">Files</option>
              </select>
            </form> */}
          </div>

          {/* Launch Year*/}
          <div className="mt-4">
            <label
              htmlFor="societies-launch-year"
              className="block mb-2 text-sm font-medium"
            >
              Launch Year:
            </label>
            <div className="flex">
              <Input
                type="text"
                id="societies-launch-year"
                name="societies-launch-year"
                className="input input-bordered w-full max-w-xs border-2 border-gray-400  "
                placeholder=""
                value={launch_year}
                onChange={(e) => setLaunch_year(e.target.value)}
              />
              <div className="m-3">
                {isNaN(Number(launch_year)) ? <span className="text-red-500 text-sm mt-1">Enter number only</span> : Number(launch_year)}
              </div>
            </div>
          </div>

          {/*Grade  */}
          <div className="">
            <label
              htmlFor="societies-grade"
              className="block mb-2 text-sm font-medium"
            >
              Grade
            </label>
            <select
              id="societies-grade"
              name="societies-grade"
              className="select  w-full text-sm pl-2 h-10 max-w-xs border-2 rounded border-gray-400 bg-background"

            >
              <option value="">Select</option>
              <option value="A+">A+</option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
            </select>
            {/* <Select
              name="societies-grade">
              <SelectTrigger
                id="societies-grade"
                className="select w-full max-w-xs border-2 border-gray-400  ">
                <SelectValue placeholder="Select Grade" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel></SelectLabel>
                  <SelectItem value="A+">A+</SelectItem>
                  <SelectItem value="A">A</SelectItem>
                  <SelectItem value="B">B</SelectItem>
                  <SelectItem value="C">C</SelectItem>
                  <SelectItem value="D">D</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select> */}
          </div>

          {/* Total Area of Society (Acres) */}
          <div className="mt-4">
            <label
              htmlFor="societies-area"
              className="block mb-2 text-sm font-medium"
            >
              Total Area of Society (Acres):
            </label>
            <div className="flex">
              <Input
                type="text"
                id="societies-area"
                name="societies-area"
                className="input input-bordered w-full max-w-xs border-2 border-gray-400  "
                placeholder=""
                value={area}
                onChange={(e) => setArea(e.target.value)}
              />
              <div className="m-4">
                {isNaN(Number(area)) ? <span className="text-red-500 text-sm mt-1">Enter number only</span> : Number(area).toLocaleString()}
              </div>
            </div>
          </div>



          {/* Occupancy Ratio */}
          <div className="">
            <label
              htmlFor="societies-occupancy"
              className="block mb-2 text-sm font-medium"
            >
              Occupancy Ratio (1 to 100)
            </label>
            <div className="flex">
              <Input
                // type="number"
                id="societies-occupancy"
                name="societies-occupancy"
                type="text"
                className="input input-bordered w-full max-w-xs border-2 border-gray-400 "
                placeholder=""
                value={occupancy}
                onChange={(e) => setOccupancy(e.target.value)}
              />
              <div className="m-3">
                {isNaN(Number(occupancy)) ? <span className="text-red-500 text-sm mt-1">Enter number only</span> : Number(occupancy).toLocaleString()}
              </div>
              {/* <div className="m-4">
                {occupancy + "%"}
              </div> */}
            </div>

          </div>


          {/* Population*/}
          <div className="">
            <label
              htmlFor="societies-population"
              className="block mb-2 text-sm font-medium"
            >
              Population:
            </label>
            <div className="flex">
              <Input
                type="text"
                id="societies-population"
                name="societies-population"
                className="input input-bordered w-full max-w-xs border-2 border-gray-400  "
                placeholder=""
                value={population}
                onChange={(e) => setPoputation(e.target.value)}
              />
              <div className="m-3">
                {isNaN(Number(population)) ? <span className="text-red-500 text-sm mt-1">Enter number only</span> : Number(population).toLocaleString()}
              </div>
            </div>
          </div>


        </div>


        <div className="p-5 border-2 border-gray-200 dark:border-gray-700 border-t-0">
          {/* Total Plots Residential*/}
          <div className="">
            <label
              htmlFor="total-plots-residential"
              className="block mb-2 text-sm font-medium"
            >
              Total Plots Residential:
            </label>
            <div className="flex">
              <Input
                type="text"
                id="total-plots-residential"
                name="total-plots-residential"
                className="input input-bordered w-full max-w-xs border-2 border-gray-400 "
                placeholder=""
                value={total_plots_residential}
                onChange={(e) => setTotal_plots_residential(e.target.value)}
              />
              <div className="m-3">
                {isNaN(Number(total_plots_residential)) ? <span className="text-red-500 text-sm mt-1">Enter number only</span> : Number(total_plots_residential).toLocaleString()}
              </div>
            </div>
          </div>

          {/* Plot Sizes Residential (Sq. Yards)  */}

          <div className="mt-4">
            <div className="">
              <fieldset className="flex gap-10 text-lg">
                <legend className="block mb-4 text-sm font-medium">
                  Plot Sizes Residential (Sq. Yards):
                </legend>

                <div className="flex items-center mb-4 ml-2">
                  <input
                    id="plot-sizes-residential-87-5"
                    name="plot-sizes-residential-87-5"
                    type="checkbox"
                    value="yes"
                    className="checkbox checkbox-primary"
                  />
                  <label
                    htmlFor="plot-sizes-residential-87-5"
                    className="ml-2 text-sm font-medium "
                  >
                    87.5
                  </label>
                </div>

                <div className="flex items-center mb-4 ml-2">
                  <input
                    id="plot-sizes-residential-125"
                    name="plot-sizes-residential-125"
                    type="checkbox"
                    value="yes"
                    className="checkbox checkbox-primary"
                  />
                  <label
                    htmlFor="plot-sizes-residential-125"
                    className="ml-2 text-sm font-medium "
                  >
                    125
                  </label>
                </div>

                <div className="flex items-center mb-4 ml-2">
                  <input
                    id="plot-sizes-residential-200"
                    name="plot-sizes-residential-200"
                    type="checkbox"
                    value="yes"
                    className="checkbox checkbox-primary"
                  />
                  <label
                    htmlFor="plot-sizes-residential-200"
                    className="ml-2 text-sm font-medium "
                  >
                    200
                  </label>
                </div>

                <div className="flex items-center mb-4 ml-2">
                  <input
                    id="plot-sizes-residential-250"
                    name="plot-sizes-residential-250"
                    type="checkbox"
                    value="yes"
                    className="checkbox checkbox-primary"
                  />
                  <label
                    htmlFor="plot-sizes-residential-250"
                    className="ml-2 text-sm font-medium "
                  >
                    250
                  </label>
                </div>

                <div className="flex items-center mb-4 ml-2">
                  <input
                    id="plot-sizes-residential-300"
                    name="plot-sizes-residential-300"
                    type="checkbox"
                    value="yes"
                    className="checkbox checkbox-primary"
                  />
                  <label
                    htmlFor="plot-sizes-residential-300"
                    className="ml-2 text-sm font-medium "
                  >
                    300
                  </label>
                </div>

                <div className="flex items-center mb-4 ml-2">
                  <input
                    id="plot-sizes-residential-400"
                    name="plot-sizes-residential-400"
                    type="checkbox"
                    value="yes"
                    className="checkbox checkbox-primary"
                  />
                  <label
                    htmlFor="plot-sizes-residential-400"
                    className="ml-2 text-sm font-medium "
                  >
                    400
                  </label>
                </div>

                <div className="flex items-center mb-4 ml-2">
                  <input
                    id="plot-sizes-residential-500"
                    name="plot-sizes-residential-500"
                    type="checkbox"
                    value="yes"
                    className="checkbox checkbox-primary"
                  />
                  <label
                    htmlFor="plot-sizes-residential-500"
                    className="ml-2 text-sm font-medium "
                  >
                    500
                  </label>
                </div>

                <div className="flex items-center mb-4 ml-2">
                  <input
                    id="plot-sizes-residential-600"
                    name="plot-sizes-residential-600"
                    type="checkbox"
                    value="yes"
                    className="checkbox checkbox-primary"
                  />
                  <label
                    htmlFor="plot-sizes-residential-600"
                    className="ml-2 text-sm font-medium "
                  >
                    600
                  </label>
                </div>

                <div className="flex items-center mb-4 ml-2">
                  <input
                    id="plot-sizes-residential-800"
                    name="plot-sizes-residential-800"
                    type="checkbox"
                    value="yes"
                    className="checkbox checkbox-primary"
                  />
                  <label
                    htmlFor="plot-sizes-residential-800"
                    className="ml-2 text-sm font-medium "
                  >
                    800
                  </label>
                </div>

                <div className="flex items-center mb-4 ml-2">
                  <input
                    id="plot-sizes-residential-1000"
                    name="plot-sizes-residential-1000"
                    type="checkbox"
                    value="yes"
                    className="checkbox checkbox-primary"
                  />
                  <label
                    htmlFor="plot-sizes-residential-1000"
                    className="ml-2 text-sm font-medium "
                  >
                    1,000
                  </label>
                </div>

                <div className="flex items-center mb-4 ml-2">
                  <input
                    id="plot-sizes-residential-2000"
                    name="plot-sizes-residential-2000"
                    type="checkbox"
                    value="yes"
                    className="checkbox checkbox-primary"
                  />
                  <label
                    htmlFor="plot-sizes-residential-2000"
                    className="ml-2 text-sm font-medium "
                  >
                    2000
                  </label>
                </div>




              </fieldset>
            </div>
          </div>
        </div>



        {/*Total Plots Commercial  */}
        <div className="p-5 border-2 border-gray-200 dark:border-gray-700 border-t-0">
          <div className="">
            <label
              htmlFor="total-plots-commercial"
              className="block mb-2 text-sm font-medium"
            >
              Total Plots Commercial :
            </label>
            <div className="flex">
              <Input
                type="text"
                id="total-plots-commercial"
                name="total-plots-commercial"
                className="input input-bordered w-full max-w-xs border-2 border-gray-400 "
                placeholder=""
                value={total_plots_commercial}
                onChange={(e) => setTotal_plots_commercial(e.target.value)}
              />
              <div className="m-3">
                {isNaN(Number(total_plots_commercial)) ? <span className="text-red-500 text-sm mt-1">Enter number only</span> : Number(total_plots_commercial).toLocaleString()}
              </div>
            </div>
          </div>

          {/* Plot Sizes Commercial (Sq. Yards) */}

          <div className="mt-4">
            <div className="mt-4">
              <fieldset className="flex gap-10 text-lg">
                <legend className="block mb-4 text-sm font-medium">
                  Plot Sizes Commercial (Sq. Yards):
                </legend>

                <div className="flex items-center mb-4 ml-2">
                  <input
                    id="plot-sizes-commercial-87-5"
                    name="plot-sizes-commercial-87-5"
                    type="checkbox"
                    value="yes"
                    className="checkbox checkbox-primary"
                  />
                  <label
                    htmlFor="plot-sizes-commercial-87-5"
                    className="ml-2 text-sm font-medium "
                  >
                    87.5
                  </label>
                </div>

                <div className="flex items-center mb-4 ml-2">
                  <input
                    id="plot-sizes-commercial-100"
                    name="plot-sizes-commercial-100"
                    type="checkbox"
                    value="yes"
                    className="checkbox checkbox-primary"
                  />
                  <label
                    htmlFor="plot-sizes-commercial-100"
                    className="ml-2 text-sm font-medium "
                  >
                    100
                  </label>
                </div>

                <div className="flex items-center mb-4 ml-2">
                  <input
                    id="plot-sizes-commercial-125"
                    name="plot-sizes-commercial-125"
                    type="checkbox"
                    value="yes"
                    className="checkbox checkbox-primary"
                  />
                  <label
                    htmlFor="plot-sizes-commercial-125"
                    className="ml-2 text-sm font-medium "
                  >
                    125
                  </label>
                </div>

                <div className="flex items-center mb-4 ml-2">
                  <input
                    id="plot-sizes-commercial-200"
                    name="plot-sizes-commercial-200"
                    type="checkbox"
                    value="yes"
                    className="checkbox checkbox-primary"
                  />
                  <label
                    htmlFor="plot-sizes-commercial-200"
                    className="ml-2 text-sm font-medium "
                  >
                    200
                  </label>
                </div>

                <div className="flex items-center mb-4 ml-2">
                  <input
                    id="plot-sizes-commercial-250"
                    name="plot-sizes-commercial-250"
                    type="checkbox"
                    value="yes"
                    className="checkbox checkbox-primary"
                  />
                  <label
                    htmlFor="plot-sizes-commercial-250"
                    className="ml-2 text-sm font-medium "
                  >
                    250
                  </label>
                </div>

                <div className="flex items-center mb-4 ml-2">
                  <input
                    id="plot-sizes-commercial-500"
                    name="plot-sizes-commercial-500"
                    type="checkbox"
                    value="yes"
                    className="checkbox checkbox-primary"
                  />
                  <label
                    htmlFor="plot-sizes-commercial-500"
                    className="ml-2 text-sm font-medium "
                  >
                    500
                  </label>
                </div>

                <div className="flex items-center mb-4 ml-2">
                  <input
                    id="plot-sizes-commercial-1000"
                    name="plot-sizes-commercial-1000"
                    type="checkbox"
                    value="yes"
                    className="checkbox checkbox-primary"
                  />
                  <label
                    htmlFor="plot-sizes-commercial-1000"
                    className="ml-2 text-sm font-medium "
                  >
                    1,000
                  </label>
                </div>

                <div className="flex items-center mb-4 ml-2">
                  <input
                    id="plot-sizes-commercial-2000"
                    name="plot-sizes-commercial-2000"
                    type="checkbox"
                    value="yes"
                    className="checkbox checkbox-primary"
                  />
                  <label
                    htmlFor="plot-sizes-commercial-2000"
                    className="ml-2 text-sm font-medium "
                  >
                    2000
                  </label>
                </div>




              </fieldset>
            </div>
          </div>
        </div>

        {/* Total No. of Apartments  */}
        <div className="p-5 border-2 border-gray-200 dark:border-gray-700 border-t-0">
          <div className="">
            <label
              htmlFor="societies-total-apartments"
              className="block mb-2 text-sm font-medium"
            >
              Total No. of Apartments:
            </label>
            <div className="flex">
              <Input
                type="text"
                id="societies-total-apartments"
                name="societies-total-apartments"
                className="input input-bordered w-full max-w-xs border-2 border-gray-400 "
                placeholder=""
                value={total_apartments}
                onChange={(e) => setTotal_apartments(e.target.value)}
              />
              <div className="m-3">
                {isNaN(Number(total_apartments)) ? <span className="text-red-500 text-sm mt-1">Enter number only</span> : Number(total_apartments).toLocaleString()}
              </div>
            </div>
          </div>

          {/* apartment Sizes Commercial (Sq. Yards) */}

          <div className="mt-4">
            <div className="mt-4">
              <fieldset className="flex gap-10 text-lg">
                <legend className="block mb-4 text-sm font-medium">
                  Apartments Type :
                </legend>

                <div className="flex items-center mb-4 ml-2">
                  <input
                    id="apartment-studio"
                    name="apartment-studio"
                    type="checkbox"
                    value="yes"
                    className="checkbox checkbox-primary"
                  />
                  <label
                    htmlFor="apartment-studio"
                    className="ml-2 text-sm font-medium "
                  >
                    Studio
                  </label>
                </div>

                <div className="flex items-center mb-4 ml-2">
                  <input
                    id="apartment-one-bad"
                    name="apartment-one-bad"
                    type="checkbox"
                    value="yes"
                    className="checkbox checkbox-primary"
                  />
                  <label
                    htmlFor="apartment-one-bad"
                    className="ml-2 text-sm font-medium "
                  >
                    1 Bed
                  </label>
                </div>

                <div className="flex items-center mb-4 ml-2">
                  <input
                    id="apartment-two-bad"
                    name="apartment-two-bad"
                    type="checkbox"
                    value="yes"
                    className="checkbox checkbox-primary"
                  />
                  <label
                    htmlFor="apartment-two-bad"
                    className="ml-2 text-sm font-medium "
                  >
                    2 Bed
                  </label>
                </div>

                <div className="flex items-center mb-4 ml-2">
                  <input
                    id="apartment-three-bad"
                    name="apartment-three-bad"
                    type="checkbox"
                    value="yes"
                    className="checkbox checkbox-primary"
                  />
                  <label
                    htmlFor="apartment-three-bad"
                    className="ml-2 text-sm font-medium "
                  >
                    3 Bed
                  </label>
                </div>

                <div className="flex items-center mb-4 ml-2">
                  <input
                    id="apartment-four-bad"
                    name="apartment-four-bad"
                    type="checkbox"
                    value="yes"
                    className="checkbox checkbox-primary"
                  />
                  <label
                    htmlFor="apartment-four-bad"
                    className="ml-2 text-sm font-medium "
                  >
                    4 Bed
                  </label>
                </div>

                <div className="flex items-center mb-4 ml-2">
                  <input
                    id="apartment-five-bad"
                    name="apartment-five-bad"
                    type="checkbox"
                    value="yes"
                    className="checkbox checkbox-primary"
                  />
                  <label
                    htmlFor="apartment-five-bad"
                    className="ml-2 text-sm font-medium "
                  >
                    5 Bed
                  </label>
                </div>

                <div className="flex items-center mb-4 ml-2">
                  <input
                    id="apartment-penthouse"
                    name="apartment-penthouse"
                    type="checkbox"
                    value="yes"
                    className="checkbox checkbox-primary"
                  />
                  <label
                    htmlFor="apartment-penthouse"
                    className="ml-2 text-sm font-medium "
                  >
                    Penthouse
                  </label>
                </div>

                <div className="flex items-center mb-4 ml-2">
                  <input
                    id="apartment-duplex"
                    name="apartment-duplex"
                    type="checkbox"
                    value="yes"
                    className="checkbox checkbox-primary"
                  />
                  <label
                    htmlFor="apartment-duplex"
                    className="ml-2 text-sm font-medium "
                  >
                    Duplex
                  </label>
                </div>

                {/* <div className="flex items-center mb-4 ml-2">
                  <input
                    id="apartment-size-2000"
                    name="apartment-size-2000"
                    type="checkbox"
                    value="yes"
                    className="checkbox checkbox-primary"
                  />
                  <label
                    htmlFor="apartment-size-2000"
                    className="ml-2 text-sm font-medium "
                  >
                    2000
                  </label>
                </div> */}




              </fieldset>
            </div>
          </div>
        </div>



        {/* Features: */}
        <div className="p-5 border-2 border-t-0 border-gray-200 dark:border-gray-700">
          <div className="">
            <fieldset>
              <legend className="block mb-2 text-sm font-medium">
                Features:
              </legend>

              <div className="flex items-center mb-4 ml-2">
                <input
                  id="features-type-parks"
                  name="features-type-parks"
                  type="checkbox"
                  value="yes"
                  className="checkbox checkbox-primary"
                />
                <label
                  htmlFor="features-type-parks"
                  className="ml-2 text-sm font-medium "
                >
                  Parks
                </label>
              </div>

              <div className="flex items-center mb-4 ml-2">
                <input
                  id="features-type-school"
                  name="features-type-school"
                  type="checkbox"
                  value="yes"
                  className="checkbox checkbox-primary"
                />
                <label
                  htmlFor="features-type-school"
                  className="ml-2 text-sm font-medium  "
                >
                  School
                </label>
              </div>

              <div className="flex items-center mb-4 ml-2">
                <input
                  id="features-type-university"
                  name="features-type-university"
                  type="checkbox"
                  value="yes"
                  className="checkbox checkbox-primary"
                />
                <label
                  htmlFor="features-type-university"
                  className="ml-2 text-sm font-medium  "
                >
                  University
                </label>
              </div>

              <div className="flex items-center mb-4 ml-2">
                <input
                  id="features-type-hospital"
                  name="features-type-hospital"
                  type="checkbox"
                  value="yes"
                  className="checkbox checkbox-primary"
                />
                <label
                  htmlFor="features-type-hospital"
                  className="ml-2 text-sm font-medium  "
                >
                  Hospital
                </label>
              </div>

              <div className="flex items-center mb-4 ml-2">
                <input
                  id="features-type-commercial-market"
                  name="features-type-commercial-market"
                  type="checkbox"
                  value="yes"
                  className="checkbox checkbox-primary"
                />
                <label
                  htmlFor="features-type-commercial-market"
                  className="ml-2 text-sm font-medium "
                >
                  Commercial Market
                </label>
              </div>

              <div className="flex items-center mb-4 ml-2">
                <input
                  id="features-type-zoo"
                  name="features-type-zoo"
                  type="checkbox"
                  value="yes"
                  className="checkbox checkbox-primary"
                />
                <label
                  htmlFor="features-type-zoo"
                  className="ml-2 text-sm font-medium  "
                >
                  Zoo
                </label>
              </div>

              <div className="flex items-center mb-4 ml-2">
                <input
                  id="features-type-food-arena"
                  name="features-type-food-arena"
                  type="checkbox"
                  value="yes"
                  className="checkbox checkbox-primary"
                />
                <label
                  htmlFor="features-type-food-arena"
                  className="ml-2 text-sm font-medium "
                >
                  Food Arena
                </label>
              </div>

              <div className="flex items-center mb-4 ml-2">
                <input
                  id="features-type-gated-community"
                  name="features-type-gated-community"
                  type="checkbox"
                  value="yes"
                  className="checkbox checkbox-primary"
                />
                <label
                  htmlFor="features-type-gated-community"
                  className="ml-2 text-sm font-medium  "
                >
                  Gated Community
                </label>
              </div>

              <div className="flex items-center mb-4 ml-2">
                <input
                  id="features-type-college"
                  name="features-type-college"
                  type="checkbox"
                  value="yes"
                  className="checkbox checkbox-primary"
                />
                <label
                  htmlFor="features-type-college"
                  className="ml-2 text-sm font-medium  "
                >
                  College
                </label>
              </div>

              <div className="flex items-center mb-4 ml-2">
                <input
                  id="features-type-graveyard"
                  name="features-type-graveyard"
                  type="checkbox"
                  value="yes"
                  className="checkbox checkbox-primary"
                />
                <label
                  htmlFor="features-type-graveyard"
                  className="ml-2 text-sm font-medium  "
                >
                  Graveyard
                </label>
              </div>

              <div className="flex items-center mb-4 ml-2">
                <input
                  id="features-type-masjid"
                  name="features-type-masjid"
                  type="checkbox"
                  value="yes"
                  className="checkbox checkbox-primary"
                />
                <label
                  htmlFor="features-type-masjid"
                  className="ml-2 text-sm font-medium  "
                >
                  Masjid
                </label>
              </div>

              <div className="flex items-center mb-4 ml-2">
                <input
                  id="features-type-community-club"
                  name="features-type-community-club"
                  type="checkbox"
                  value="yes"
                  className="checkbox checkbox-primary"
                />
                <label
                  htmlFor="features-type-community-club"
                  className="ml-2 text-sm font-medium  "
                >
                  Community Club
                </label>
              </div>

              <div className="flex items-center mb-4 ml-2">
                <input
                  id="features-type-grid-station"
                  name="features-type-grid-station"
                  type="checkbox"
                  value="yes"
                  className="checkbox checkbox-primary"
                />
                <label
                  htmlFor="features-type-grid-station"
                  className="ml-2 text-sm font-medium  "
                >
                  Grid Station
                </label>
              </div>
            </fieldset>
          </div>
        </div>


        <div className="p-5 border-2 border-t-0 border-gray-200 dark:border-gray-700">
          {/*Utilities: */}
          <div className="">
            <fieldset>
              <legend className="block mb-2 text-sm font-medium">
                Utilities:
              </legend>

              <div className="flex items-center mb-4 ml-2">
                <input
                  id="utilities-type-underground-electrification"
                  name="utilities-type-underground-electrification"
                  type="checkbox"
                  value="yes"
                  className="checkbox checkbox-primary"
                />
                <label
                  htmlFor="utilities-type-underground-electrification"
                  className="ml-2 text-sm font-medium  "
                >
                  Underground Electrification
                </label>
              </div>

              <div className="flex items-center mb-4 ml-2">
                <input
                  id="utilities-type-gas"
                  name="utilities-type-gas"
                  type="checkbox"
                  value="yes"
                  className="checkbox checkbox-primary"
                />
                <label
                  htmlFor="utilities-type-gas"
                  className="ml-2 text-sm font-medium  "
                >
                  Gas
                </label>
              </div>

              <div className="flex items-center mb-4 ml-2">
                <input
                  id="utilities-type-water"
                  name="utilities-type-water"
                  type="checkbox"
                  value="yes"
                  className="checkbox checkbox-primary"
                />
                <label
                  htmlFor="utilities-type-water"
                  className="ml-2 text-sm font-medium "
                >
                  Water
                </label>
              </div>

              <div className="flex items-center mb-4 ml-2">
                <input
                  id="utilities-type-utilities-electricity"
                  name="utilities-type-utilities-electricity"
                  type="checkbox"
                  value="yes"
                  className="checkbox checkbox-primary"
                />
                <label
                  htmlFor="utilities-type-utilities-electricity"
                  className="ml-2 text-sm font-medium "
                >
                  Open Electrification
                </label>
              </div>

              <div className="flex items-center mb-4 ml-2">
                <input
                  id="utilities-type-drainage"
                  name="utilities-type-drainage"
                  type="checkbox"
                  value="yes"
                  className="checkbox checkbox-primary"
                />
                <label
                  htmlFor="utilities-type-drainage"
                  className="ml-2 text-sm font-medium "
                >
                  Drainage
                </label>
              </div>



            </fieldset>
          </div>

          {/* Developer Name*/}
          <div className="mt-4">
            <label
              htmlFor="developer-name"
              className="block mb-2 text-sm font-medium"
            >
              Developer Name:
            </label>
            <Input
              type="text"
              id="developer-name"
              name="developer-name"
              className="input input-bordered w-full max-w-xs border-2 border-gray-400  "
              placeholder=""
            />
          </div>

          {/*Contact No*/}
          <div className="mt-4">
            <label
              htmlFor="contact-no"
              className="block mb-2 text-sm font-medium"
            >
              Contact No:
            </label>
            <div className="flex">
              <Input
                type="text"
                id="contact-no"
                name="contact-no"
                className="input input-bordered w-full max-w-xs border-2 border-gray-400  "
                placeholder=""
                value={contact_no}
                onChange={(e) => setContact_no(e.target.value)}
              />
              <div className="m-3">
                {isNaN(Number(contact_no)) ? <span className="text-red-500 text-sm mt-1">Enter number only</span> : Number(contact_no)}
              </div>
            </div>
          </div>


          {/* Remarks  */}
          <div className="">
            <label htmlFor="message" className="block mb-2 text-sm font-medium">
              Your Remarks
            </label>
            <Textarea
              id="societies-survery-remarks"
              name="societies-survery-remarks"
              className="textarea  w-full border-2 border-gray-400  "
              placeholder="Leave a comment..."
            ></Textarea>
          </div>
        </div>


        {/* <Popover>
          <PopoverTrigger asChild>
            <Button
              variant={"outline"}
              className={cn(
                "w-[280px] justify-start text-left font-normal",
                !date && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date ? format(date, "PPP") : <span>Pick a date</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              initialFocus
            />
          </PopoverContent>
        </Popover> */}

        <div className="flex gap-2 justify-center mt-3">
          {/* <AddButton /> */}
          <Button disabled={isAdding}>{isAdding ? 'Adding...' : 'Add'}</Button>
          {/* <Link href="/societies" className="flex justify-center items-center border border-black px-2 py-1 rounded-xl bg-white text-black hover:bg-red-600 hover:text-white capitalize">Cancel</Link> */}

          <Button asChild className="bg-transparent text-primary hover:bg-primary-foreground">
            <Link href="/societies">Cancel</Link>
          </Button>

        </div>
        {/* <button className="btn" type="submit">Add New</button> */}
      </form >
    </>

  )
}

