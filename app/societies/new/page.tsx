"use client";

import { useEffect, useState } from "react";
import AddButton from "../components/AddButton";
import Link from "next/link";
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import createSociety from "../../actions/createSociety"
import { Button } from "@/components/ui/button"

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

type Society = {
  // Define the properties of your society object
  // For example:

  name: string | null;
};

type Name = {
  name: string;
};

export default function NewSocietyPage() {

  const [nameKeywords, setNameKeywords] = useState('')
  const debouncedNameKeywords = useDebounce(nameKeywords, 500)

  const [names, setNames] = useState<Society[]>([])


  const [area, setArea] = useState(0);
  const [occupancy, setOccupancy] = useState(0);
  const [population, setPoputation] = useState(0);
  const [plot_sizes_residential, setPlot_sizes_residential] = useState(0);
  const [plot_sizes_commercial, setPlot_sizes_commercial] = useState(0);
  const [societies_apartment_size, setSocieties_apartment_size] = useState(0);
  const [plot_price, setPlot_price] = useState(0);
  const [vilas_price, setVilas_price] = useState(0);
  const [vilas_monthly_rent, setVilas_monthly_rent] = useState(0);
  const [commercial_plot_price, setCommercial_plot_price] = useState(0);
  const [apartment_size, setApartment_size] = useState(0);
  const [min_apartments_price, setMin_Apartments_price] = useState(0);
  const [max_apartments_price, setMax_Apartments_price] = useState(0);
  const [min_apartments_monthly_rent, setMin_Apartments_monthly_rent] = useState(0);
  const [max_apartments_monthly_rent, setMax_Apartments_monthly_rent] = useState(0);
  const [instalment_total_amount, setInstalment_total_amount] = useState(0);
  const [instalment_down_payment, setInstalment_down_payment] = useState(0);
  const [instalment_possession_Amount, setInstalment_possession_Amount] = useState(0);
  const [instalment_period, setinstalment_period] = useState(0);

  // const [plotSizes, setPlotSizes] = useState("87.5");
  // const [plot_price_87_5, setPlot_price_87_5] = useState(0);
  // const [plot_price_125, setPlot_price_125] = useState(0);
  // const [plot_price_200, setPlot_price_200] = useState(0);
  // const [plot_price_250, setPlot_price_250] = useState(0);
  // const [plot_price_500, setPlot_price_500] = useState(0);
  // const [plot_price_1000, setPlot_price_1000] = useState(0);
  // const [plot_price_2000, setPlot_price_2000] = useState(0);

  const [paymentTerms, setPaymentTerms] = useState('Lumpsum Payment');

  useEffect(() => {

    // console.log(nameKeywords);

    if (debouncedNameKeywords !== "") {
      const fetchData = async () => {
        try {
          const societyNames: Society[] = await FetchSocietyNames(debouncedNameKeywords)
          // console.log(societyNames);

          setNames(societyNames);

        } catch (error) {

          console.error('Error fetching city list based on keywords:', error);
        }
      };

      fetchData();
    }

  }, [debouncedNameKeywords]);

  function BoldedText(text: string, shouldBeBold: string) {

    const textArray = text.split(shouldBeBold);

    return (
      <span>
        {textArray.map((item, index) => (
          <>
            {item}
            {index !== textArray.length - 1 && <b>{shouldBeBold}</b>}
          </>
        ))}
      </span>
    );
  }



  // const [date, setDate] = useState<Date>()

  return (
    <>
      {/* <button onClick={() => { console.log(paymentTerms) }}>Check Vaue</button> */}

      <div className="text-lg">Societies</div>
      <form
        action={createSociety}
      >
        <div className="p-5 border-2 border-gray-200 dark:border-gray-700 flex flex-col gap-5">

          {/* City */}
          <div className="">
            <label
              htmlFor="societies-city"
              className="block mb-2 text-sm font-medium"
            >
              City
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
          <div className="">
            <label
              htmlFor="societies-zone"
              className="block mb-2 text-sm font-medium"
            >
              Zone/ Region:
            </label>
            <Select
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
            </Select>
          </div>

          {/* Soceity/Project Name  */}
          <div className="">
            <label
              htmlFor="soceity-project-name"
              className="block mb-2 text-sm font-medium "
            >
              Soceity/Project Name:
            </label>
            <Input
              id="soceity-project-name"
              name="soceity-project-name"
              className="input input-bordered w-full max-w-xs border-2 border-gray-400 "
              required
            />

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
              Location/Address:
            </label>
            <Input
              type="text"
              id="societies-address"
              name="societies-address"
              className="input input-bordered w-full max-w-xs border-2 border-gray-400 "
              placeholder="address"
            />
          </div>

          {/* Project Type */}
          <div className="">
            <label
              htmlFor="societies-project-type"
              className="block mb-2 text-sm font-medium"
            >
              Project Type
            </label>
            <Select
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
                  <SelectItem value="Files">Files</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>

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
          <div className="">
            <label
              htmlFor="societies-launch-year"
              className="block mb-2 text-sm font-medium"
            >
              Launch Year:
            </label>
            <Input
              type="text"
              id="societies-launch-year"
              name="societies-launch-year"
              className="input input-bordered w-full max-w-xs border-2 border-gray-400  "
              placeholder=""
            />
          </div>

          {/*Grade  */}
          <div className="">
            <label
              htmlFor="societies-grade"
              className="block mb-2 text-sm font-medium"
            >
              Grade
            </label>
            <Select
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
            </Select>
          </div>

          {/* Total Area of Society (Acres) */}
          <div className="">
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
                onChange={(e) => {
                  setArea(Number(e.target.value))
                  console.log(e.target.value)
                }}
              />

              <div className="m-4">
                {Number(area).toLocaleString()}
              </div>
            </div>
          </div>

          {/* Total Phase/ Sectors/ Blocks*/}
          <div className="">
            <label
              htmlFor="societies-blocks"
              className="block mb-2 text-sm font-medium"
            >
              Total Phase/ Sectors/ Blocks:
            </label>
            <Input
              type="text"
              id="societies-blocks"
              name="societies-blocks"
              className="input input-bordered w-full max-w-xs border-2 border-gray-400  "
              placeholder=""
            />
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
                type="number"
                className="input input-bordered w-full max-w-xs border-2 border-gray-400 "
                min={0}
                max={100}
                placeholder=""
                onChange={(e) => {
                  setOccupancy(Number(e.target.value))
                }}
              />
              <div className="m-4">
                {occupancy + "%"}
              </div>
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
                onChange={(e) => {
                  setPoputation(Number(e.target.value))
                }}
              />
              <div className="m-4">
                {Number(population).toLocaleString()}
              </div>
            </div>
          </div>


        </div>
        <div className="p-5 border-2 border-gray-200 dark:border-gray-700 border-t-0">
          {/* Total Plots Residential*/}
          <div className="mt-6">
            <label
              htmlFor="total-plots-residential"
              className="block mb-2 text-sm font-medium"
            >
              Total Plots Residential:
            </label>
            <Input
              type="text"
              id="total-plots-residential"
              name="total-plots-residential"
              className="input input-bordered w-full max-w-xs border-2 border-gray-400 "
              placeholder=""
            />
          </div>

          {/* Plot Sizes Residential (Sq. Yards)  */}

          <div className="">
            <div className="mt-4">
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
                    htmlFor="plot-sizes-residential-500"
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
                    htmlFor="plot-sizes-residential-500"
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

        {/* <div className="mt-4">
            <label
              htmlFor="plot-sizes-residential"
              className="block mb-2 text-sm font-medium"
            >
              Plot Sizes Residential (Sq. Yards):
            </label>
            <div className="flex">
              <Input
                type="text"
                id="plot-sizes-residential"
                name="plot-sizes-residential"
                className="input input-bordered w-full max-w-xs border-2 border-gray-400  "
                placeholder="(Sq. Yards)"
                onChange={(e) => {
                  setPlot_sizes_residential(Number(e.target.value))
                  console.log(e.target.value)
                }}
              />
              <div className="m-4">
                {Number(plot_sizes_residential).toLocaleString()}
              </div>
            </div>
          </div> */}

        {/*Total Plots Commercial  */}
        <div className="p-5 border-2 border-gray-200 dark:border-gray-700 border-t-0">
          <div className="mt-4">
            <label
              htmlFor="total-plots-commercial"
              className="block mb-2 text-sm font-medium"
            >
              Total Plots Commercial :
            </label>
            <Input
              type="text"
              id="total-plots-commercial"
              name="total-plots-commercial"
              className="input input-bordered w-full max-w-xs border-2 border-gray-400 "
              placeholder=""
            />
          </div>

          {/* Plot Sizes Commercial (Sq. Yards) */}

          <div className="">
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
          <div className="mt-4">
            <label
              htmlFor="societies-total-apartments"
              className="block mb-2 text-sm font-medium"
            >
              Total No. of Apartments:
            </label>
            <Input
              type="text"
              id="societies-total-apartments"
              name="societies-total-apartments"
              className="input input-bordered w-full max-w-xs border-2 border-gray-400 "
              placeholder=""
            />
          </div>

          {/* apartment Sizes Commercial (Sq. Yards) */}

          <div className="">
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

        {/* Residential Plots */}

        <div className="p-5 border-2 border-t-0 border-gray-200 dark:border-gray-700 hidden">
          <div className="text-lg">Residential Plots:</div>
          {/* Plot Size (Yards)*/}
          <div className="mt-4">
            <label
              htmlFor="societies-plot-size"
              className="block mb-2 text-sm font-medium"
            >
              Plot Size (Yards):
            </label>
            <select
              id="societies-plot-size"
              name="societies-plot-size"
              className="select w-full max-w-xs border-2 border-gray-400 "
            >
              <option>87.5</option>
              <option>125</option>
              <option>200</option>
              <option>250</option>
              <option>500</option>
              <option>1000</option>
              <option>2000</option>
            </select>
          </div>


          {/* Plot Price  */}
          <div className="mt-4">
            <label
              htmlFor="societies-plot-price "
              className="block mb-2 text-sm font-medium"
            >
              Plot Price :
            </label>
            <div className="flex">
              <Input
                onChange={(e) => {
                  setPlot_price(Number(e.target.value))
                  console.log(e.target.value)
                }}
                type="text"
                id="societies-plot-price"
                name="societies-plot-price"
                className="input input-bordered w-full max-w-xs border-2 border-gray-400 "
                placeholder="Rs."
              />
              <div className="m-4">
                {Number(plot_price).toLocaleString()}
              </div>
            </div>
          </div>
        </div>

        {/* Bungalows/ Vilas: */}
        <div className="p-5 border-2 border-t-0 border-gray-200 dark:border-gray-700 hidden">
          <div className="text-lg">Bungalows/ Vilas:</div>
          {/* Bungalows/ Vilas Size (Yards)*/}
          <div className="mt-4">
            <label
              htmlFor=" vilas-size"
              className="block mb-2 text-sm font-medium"
            >
              Bungalows/ Vilas Size (Yards):
            </label>
            <select
              id="vilas-size"
              name="vilas-size"
              className="select w-full max-w-xs border-2 border-gray-400 "
            >
              <option>87.5</option>
              <option>125</option>
              <option>200</option>
              <option>250</option>
              <option>500</option>
              <option>1000</option>
              <option>2000</option>
            </select>
          </div>


          {/* Bungalows/ Vilas Price*/}
          <div className="mt-4">
            <label
              htmlFor="vilas-price"
              className="block mb-2 text-sm font-medium"
            >
              Bungalows/ Vilas Price:
            </label>
            <div className="flex">
              <Input

                type="text"
                id="vilas-price"
                name="vilas-price"
                className="input input-bordered w-full max-w-xs border-2 border-gray-400 "
                placeholder="Rs."
                onChange={(e) => {
                  setVilas_price(Number(e.target.value))
                  console.log(e.target.value)
                }}
              />
              <div className="m-4">
                {Number(vilas_price).toLocaleString()}
              </div>
            </div>
          </div>

          {/* Monthly Rent*/}
          <div className="mt-4">
            <label
              htmlFor="vilas-monthly-rent"
              className="block mb-2 text-sm font-medium"
            >
              Monthly Rent:
            </label>
            <div className="flex">
              <Input

                type="text"
                id="vilas-monthly-rent"
                name="vilas-monthly-rent"
                className="input input-bordered w-full max-w-xs border-2 border-gray-400 "
                placeholder="Rs."
                onChange={(e) => {
                  setVilas_monthly_rent(Number(e.target.value))
                  console.log(e.target.value)
                }}
              />
              <div className="m-4">
                {Number(vilas_monthly_rent).toLocaleString()}
              </div>
            </div>
          </div>
        </div>

        {/* Commercial Plots: */}
        <div className="p-5 border-2 border-t-0 border-gray-200 dark:border-gray-700 hidden">
          <div className="text-lg">Commercial Plots:</div>
          {/* Plot Size (Yards)*/}
          <div className="mt-4">
            <label
              htmlFor="commercial-plot-size"
              className="block mb-2 text-sm font-medium"
            >
              Plot Size (Yards):
            </label>
            <select
              id="commercial-plot-size"
              name="commercial-plot-size"
              className="select w-full max-w-xs border-2 border-gray-400 "
            >
              <option>100</option>
              <option>125</option>
              <option>200</option>
              <option>300</option>
              <option>500</option>

            </select>
          </div>


          {/* Plot Price */}
          <div className="mt-4">
            <label
              htmlFor="commercial-plot-price"
              className="block mb-2 text-sm font-medium"
            >
              Plot Price:
            </label>
            <div className="flex">
              <Input

                type="text"
                id="commercial-plot-price"
                name="commercial-plot-price"
                className="input input-bordered w-full max-w-xs border-2 border-gray-400 "
                placeholder="Rs."
                onChange={(e) => {
                  setCommercial_plot_price(Number(e.target.value))
                  console.log(e.target.value)
                }}
              />
              <div className="m-4">
                {Number(commercial_plot_price).toLocaleString()}
              </div>
            </div>
          </div>
        </div>

        {/*Apartment */}
        <div className="p-5 border-2 border-t-0 border-gray-200 dark:border-gray-700 hidden">
          <div className="text-lg">Apartment:</div>
          {/* Apartment Size*/}
          <div className="mt-4">
            <label
              htmlFor="apartment-size"
              className="block mb-2 text-sm font-medium"
            >
              Apartment Size:
            </label>
            <div className="flex">
              <Input
                type="text"
                id="apartment-size"
                name="apartment-size"
                className="input input-bordered w-full max-w-xs border-2 border-gray-400 "
                placeholder=""
                onChange={(e) => {
                  setApartment_size(Number(e.target.value))
                  console.log(e.target.value)
                }}
              />
              <div className="m-4">
                {Number(apartment_size).toLocaleString()}
              </div>
            </div>
          </div>


          {/*Apartment Price*/}
          <div className="mt-4">
            <label
              htmlFor="min-apartments-price"
              className="block mb-2 text-sm font-medium"
            >
              Minimum Apartment Price:
            </label>
            <div className="flex">
              <Input

                type="text"
                id="min-apartments-price"
                name="min-apartments-price"
                className="input input-bordered w-full max-w-xs border-2 border-gray-400 "
                placeholder="Rs."
                onChange={(e) => {
                  setMin_Apartments_price(Number(e.target.value))
                  console.log(e.target.value)
                }}
              />
              <div className="m-4">
                {Number(min_apartments_price).toLocaleString()}
              </div>
            </div>
          </div>

          <div className="mt-4">
            <label
              htmlFor="max-apartments-price"
              className="block mb-2 text-sm font-medium"
            >
              Maximum Apartment Price:
            </label>
            <div className="flex">
              <Input

                type="text"
                id="max-apartments-price"
                name="max-apartments-price"
                className="input input-bordered w-full max-w-xs border-2 border-gray-400 "
                placeholder="Rs."
                onChange={(e) => {
                  setMax_Apartments_price(Number(e.target.value))
                  console.log(e.target.value)
                }}
              />
              <div className="m-4">
                {Number(max_apartments_price).toLocaleString()}
              </div>
            </div>
          </div>

          {/* Monthly Rent*/}
          <div className="mt-4">
            <label
              htmlFor="min-apartments-monthly-rent"
              className="block mb-2 text-sm font-medium"
            >
              Minimum Monthly Rent:
            </label>
            <div className="flex">
              <Input

                type="text"
                id="min-apartments-monthly-rent"
                name="min-apartments-monthly-rent"
                className="input input-bordered w-full max-w-xs border-2 border-gray-400 "
                placeholder="Rs."
                onChange={(e) => {
                  setMin_Apartments_monthly_rent(Number(e.target.value))
                  console.log(e.target.value)
                }}
              />
              <div className="m-4">
                {Number(min_apartments_monthly_rent).toLocaleString()}
              </div>
            </div>
          </div>

          <div className="mt-4">
            <label
              htmlFor="max-apartments-monthly-rent"
              className="block mb-2 text-sm font-medium"
            >
              Maximum Monthly Rent:
            </label>
            <div className="flex">
              <Input

                type="text"
                id="max-apartments-monthly-rent"
                name="max-apartments-monthly-rent"
                className="input input-bordered w-full max-w-xs border-2 border-gray-400 "
                placeholder="Rs."
                onChange={(e) => {
                  setMax_Apartments_monthly_rent(Number(e.target.value))
                  console.log(e.target.value)
                }}
              />
              <div className="m-4">
                {Number(max_apartments_monthly_rent).toLocaleString()}
              </div>
            </div>
          </div>
        </div>

        {/* payment  */}
        <div className="p-5 border-2 border-t-0 border-gray-200 dark:border-gray-700 hidden">

          {/* Payment Terms*/}
          <div className="mt-4">
            <label
              htmlFor="payment-terms"
              className="block mb-2 text-sm font-medium"
            >
              Payment Terms:
            </label>
            <select
              id="payment-terms"
              name="payment-terms"
              className="select  w-full max-w-xs border-2 border-gray-400 "
              onChange={(e) => setPaymentTerms(e.target.value)}
            >
              <option value="Lumpsum Payment">Lumpsum Payment</option>
              <option value="Instalments">Instalments</option>
            </select>
          </div>

          {/* Total Amount: */}
          {/* Down Payment:      */}
          {/* Possession Amount  : */}
          {/* Instalment Period Years: */}

          {
            paymentTerms === "Instalments" &&
            <>
              <div className="mt-4">
                <label
                  htmlFor="instalment-total-amount"
                  className="block mb-2 text-sm font-medium"
                >
                  Total Amount:
                </label>
                <div className="flex">
                  <Input
                    type="text"
                    id="instalment-total-amount"
                    name="instalment-total-amount"
                    className="input input-bordered w-full max-w-xs border-2 border-gray-400 "
                    placeholder="Rs."
                    onChange={(e) => {
                      setInstalment_total_amount(Number(e.target.value))
                      console.log(e.target.value)
                    }}
                  />
                  <div className="m-4">
                    {Number(instalment_total_amount).toLocaleString()}
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <label
                  htmlFor="instalment-down-payment"
                  className="block mb-2 text-sm font-medium"
                >
                  Down Payment:
                </label>
                <div className="flex">
                  <Input
                    type="text"
                    id="instalment-down-payment"
                    name="instalment-down-payment"
                    className="input input-bordered w-full max-w-xs border-2 border-gray-400 "
                    placeholder="Rs."
                    onChange={(e) => {
                      setInstalment_down_payment(Number(e.target.value))
                      console.log(e.target.value)
                    }}
                  />
                  <div className="m-4">
                    {Number(instalment_down_payment).toLocaleString()}
                  </div>
                </div>
              </div>


              <div className="mt-4">
                <label
                  htmlFor="instalment-possession-Amount"
                  className="block mb-2 text-sm font-medium"
                >
                  Possession Amount  :
                </label>
                <div className="flex">
                  <Input
                    type="text"
                    id="instalment-possession-Amount"
                    name="instalment-possession-Amount"
                    className="input input-bordered w-full max-w-xs border-2 border-gray-400 "
                    placeholder="Rs."
                    onChange={(e) => {
                      setInstalment_possession_Amount(Number(e.target.value))
                      console.log(e.target.value)
                    }}
                  />
                  <div className="m-4">
                    {Number(instalment_possession_Amount).toLocaleString()}
                  </div>
                </div>
              </div>


              <div className="mt-4">
                <label
                  htmlFor="instalment-period"
                  className="block mb-2 text-sm font-medium"
                >
                  Instalment Period Years:
                </label>
                <div className="flex">
                  <Input
                    type="text"
                    id="instalment-period"
                    name="instalment-period"
                    className="input input-bordered w-full max-w-xs border-2 border-gray-400 "
                    placeholder=""
                    onChange={(e) => {
                      setinstalment_period(Number(e.target.value))
                      console.log(e.target.value)
                    }}
                  />
                  <div className="m-4">
                    {Number(instalment_period).toLocaleString()}
                  </div>
                </div>
              </div>
            </>

          }





        </div >

        {/* Features: */}
        <div className="p-5 border-2 border-t-0 border-gray-200 dark:border-gray-700">
          <div className="mt-4">
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
          <div className="mt-4">
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
            <Input
              type="text"
              id="contact-no"
              name="contact-no"
              className="input input-bordered w-full max-w-xs border-2 border-gray-400  "
              placeholder=""
            />
          </div>

          {/* Survey Date */}

          <div className="relative max-w-sm mt-4">
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
          {/* Remarks  */}
          <div className="mt-4">
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

        </div >

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
          <AddButton />
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

